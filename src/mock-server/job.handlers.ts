import type { Job, JobStatus } from "../types/job.ts";
import { v4 as uuidv4 } from "uuid";
import { http, HttpResponse, type PathParams } from "msw";
import { jobs } from "./initial-data.ts";

export const makeJobId = () => `job_${uuidv4()}`;

const advanceJob = (job: Job): Job => {
  let status: JobStatus = job.status;
  let progress = job.progress;

  if (status === "queued") {
    status = "running";
    progress = Math.max(progress, 5);
  } else if (status === "running") {
    const inc = 10 + Math.floor(Math.random() * 16); // 10..25
    progress = Math.min(100, progress + inc);
    if (progress >= 100) status = "succeeded";
  }

  return {
    ...job,
    status,
    progress,
  };
};

export const jobHandlers = [
  http.get<PathParams<"jobId">>("/api/jobs/:jobId", ({ params }) => {
    const { jobId } = params;
    const job = jobs.get(jobId as string);
    if (!job) {
      return HttpResponse.json({ message: "Job not found" }, { status: 404 });
    }

    const next = advanceJob(job);
    jobs.set(jobId as string, next);

    return HttpResponse.json(next, { status: 200 });
  }),
];
