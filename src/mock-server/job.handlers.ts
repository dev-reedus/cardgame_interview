import type { Job, JobStatus } from "../types/job.ts";
import { v4 as uuidv4 } from "uuid";
import { http, HttpResponse, type PathParams } from "msw";
import { jobs } from "./initial-data.ts";

export const makeJobId = () => `job_${uuidv4()}`;

const advanceJob = (job: Job): Job => {
  let status: JobStatus = job.status;
  let progress = job.progress;
  let health_points = job.health_points;

  if (status === "queued") {
    status = "running";
    progress = Math.max(progress, 5);
  } else if (status === "running") {
    const inc = Math.floor(Math.random() * 20 + 1);
    progress = Math.min(100, progress + inc);
    health_points = Math.max(
      0,
      health_points - Math.floor(Math.random() * 20 + 1),
    );

    if (progress >= 100 || health_points <= 0) {
      status = "done";
      progress = 100;
    }

    // 2% to fail on every tick
    if (Math.random() < 0.02) {
      status = "failed";
    }
  }

  return {
    ...job,
    health_points,
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
    let response = job;

    if (job.status === "queued") {
      const advanced = advanceJob(job);
      jobs.set(jobId as string, advanced);
    } else {
      response = advanceJob(job);
      jobs.set(jobId as string, response);
    }

    return HttpResponse.json(response, { status: 200 });
  }),
];
