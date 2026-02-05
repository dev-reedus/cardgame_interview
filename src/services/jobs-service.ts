import { jsonFetch } from "@/services/utils.ts";
import type { Job } from "@/types/job.ts";

export const jobsApi = {
  async startJob(itemId: string) {
    const { jobId } = await jsonFetch<{ jobId: string }>(
      `/api/items/${itemId}/jobs`,
      { method: "POST" },
    );
    return jobId;
  },

  getJob(jobId: string) {
    return jsonFetch<Job>(`/api/jobs/${jobId}`);
  },
};

export type PollJobOptions = {
  intervalMs?: number;
  signal?: AbortSignal;
  onUpdate?: (job: Job) => void;
};

type ActivePoll = {
  jobId: string;
  promise: Promise<Job>;
  controller: AbortController;
  intervalId: number;
  intervalMs: number;
  onUpdate?: (job: Job) => void;
  resolve: (job: Job) => void;
  reject: (err: unknown) => void;
  tickInFlight: boolean;
};

let activePolling: ActivePoll | null = null;

// abort polling with the internal controller + clean interval
export function cancelActiveJobPolling() {
  const p = activePolling;
  if (!p) return;

  activePolling = null;

  p.controller.abort();
  window.clearInterval(p.intervalId);
}

/**
 * Recursive singleton poll /api/jobs/:jobId while status is queued or running.
 * returns same Promise when called with same jobId
 * cancels previous interval and starts new when called with a different jobId
 */
export function singletonPollJob(
  jobId: string,
  opts: PollJobOptions = {},
): Promise<Job> {
  if (activePolling) {
    if (activePolling.jobId === jobId) return activePolling.promise;
    cancelActiveJobPolling();
  }

  const intervalMs = opts.intervalMs ?? 2000;

  const controller = new AbortController();
  // merge internal abort signal and external signal (from consumer component)
  const mergedSignal = mergeAbortSignals(opts.signal, controller.signal);

  let resolve!: (job: Job) => void;
  let reject!: (err: unknown) => void;

  const promise = new Promise<Job>((res, rej) => {
    resolve = res;
    reject = rej;
  }).finally(() => {
    // Ensure interval cleaning
    if (activePolling?.jobId === jobId) {
      window.clearInterval(activePolling.intervalId);
      activePolling = null;
    }
  });

  const intervalId = window.setInterval(() => {
    void tick(jobId);
  }, intervalMs);

  activePolling = {
    jobId,
    promise,
    controller,
    intervalId,
    intervalMs,
    onUpdate: opts.onUpdate,
    resolve,
    reject,
    tickInFlight: false,
  };

  // Run an immediate tick so user doesn’t wait 2s for first update even if it returns job in queued state
  void tick(jobId);

  // If merged signal (in this case only external one matters) aborts, stop everything
  if (mergedSignal) {
    if (mergedSignal.aborted) {
      cancelActiveJobPolling();
      reject(new DOMException("Aborted", "AbortError"));
    } else {
      mergedSignal.addEventListener(
        "abort",
        () => {
          cancelActiveJobPolling();
          reject(new DOMException("Aborted", "AbortError"));
        },
        { once: true },
      );
    }
  }

  return promise;
}

// tick function to prevent race condition
async function tick(jobId: string) {
  const p = activePolling;
  if (!p || p.jobId !== jobId) return;

  if (p.tickInFlight) return;
  p.tickInFlight = true;

  try {
    const job = await jobsApi.getJob(jobId);
    p.onUpdate?.(job);

    if (job.status !== "queued" && job.status !== "running") {
      // clear interval when job is stopped, successful or failed
      window.clearInterval(p.intervalId);
      activePolling = null;
      p.resolve(job);
    }
  } catch (err) {
    window.clearInterval(p.intervalId);
    activePolling = null;
    p.reject(err);
  } finally {
    const stillActive = activePolling?.jobId === jobId;
    if (stillActive) activePolling!.tickInFlight = false;
  }
}

/**
 * Merges two AbortSignals into one, to handle conditional external abort signal,
 * and internal one triggered by cancelActiveJobPolling
 */
function mergeAbortSignals(
  a?: AbortSignal,
  b?: AbortSignal,
): AbortSignal | undefined {
  if (!a) return b;
  if (!b) return a;

  // create a new controller that will handle bot signals
  const controller = new AbortController();
  const abort = () => controller.abort();

  if (a.aborted || b.aborted) {
    controller.abort();
    return controller.signal;
  }

  // listen for both signals and trigger abort on newly created controller
  a.addEventListener("abort", abort, { once: true });
  b.addEventListener("abort", abort, { once: true });

  return controller.signal;
}
