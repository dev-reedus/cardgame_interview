export type Job = {
  id: string;
  status: JobStatus;
  progress: number;
  health_points: number;
  item_id: string;
};

export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus];

export const JobStatus = {
  QUEUED: "queued",
  RUNNING: "running",
  DONE: "done",
  FAILED: "failed",
};
