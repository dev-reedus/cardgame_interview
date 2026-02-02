import { type CardListItem } from "../types/card.ts";
import type { Job } from "../types/job.ts";
import { http, HttpResponse, type PathParams } from "msw";
import { makeJobId } from "./job.handlers.ts";
import { cards, jobs } from "./initial-data.ts";

const listItems = (): CardListItem[] =>
  cards.map(({ id, name, short_description, image_url }) => ({
    id,
    name,
    short_description,
    image_url,
  }));

export const cardHandlers = [
  http.get("/api/items", () => {
    return HttpResponse.json(listItems(), { status: 200 });
  }),

  http.get<PathParams<"id">>("/api/items/:id", ({ params }) => {
    const { id } = params;
    const found = cards.find((c) => c.id === id);
    if (!found) {
      return HttpResponse.json({ message: "Card not found" }, { status: 404 });
    }
    return HttpResponse.json(found, { status: 200 });
  }),

  http.post<PathParams<"id">>("/api/items/:id/jobs", ({ params }) => {
    const { id: itemId } = params;
    const card = cards.find((c) => c.id === itemId);

    if (!card) {
      return HttpResponse.json({ message: "Card not found" }, { status: 404 });
    }

    const jobId = makeJobId();

    const job: Job = {
      id: jobId,
      item_id: itemId as string,
      status: "queued",
      progress: 0,
      health_points: card.health_points,
    };

    jobs.set(jobId, job);

    return HttpResponse.json({ jobId }, { status: 201 });
  }),
];
