import { setupWorker } from "msw/browser";
import { cardHandlers } from "./card.handlers.ts";
import { jobHandlers } from "./job.handlers.ts";

export const worker = setupWorker(...jobHandlers, ...cardHandlers);
