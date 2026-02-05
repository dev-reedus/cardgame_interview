import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { http, HttpResponse } from "msw";

import CardDetail from "./card-detail";
import type { CardDetail as CardDetailType } from "@/types/card";
import { expect, userEvent, within } from "@storybook/test";
import { LoaderProvider } from "@/app/global-loader/loader-provider.tsx";
import { mswLoader } from "msw-storybook-addon";

const meta: Meta<typeof CardDetail> = {
  title: "Views/Cards/CardDetail",
  component: CardDetail,
  decorators: [
    (Story, ctx) => {
      const id = (ctx.args as CardDetailType)?.id ?? "card_1";

      return (
        <LoaderProvider>
          <MemoryRouter initialEntries={[`/cards/${id}`]}>
            <Routes>
              <Route path="/cards/:id" element={<Story />} />
              <Route path="/cards" element={<div>Cards list page</div>} />
            </Routes>
          </MemoryRouter>
        </LoaderProvider>
      );
    },
  ],
};
export default meta;

type Story = StoryObj<typeof CardDetail>;

const cardFixture: CardDetailType = {
  id: "card_1",
  name: "Psyduck",
  subtitle: "Il Re dello stress",
  card_number: "054",
  level: 15,
  health_points: 100,
  rarity: "pokémon_base",
  image_url: "source1.png",
  short_description: "<p>Short</p>",
  long_description: "<p><strong>Long</strong> description</p>",
  typology: { name: "acqua", icon_url: "", icon_name: "water" },
  energy: { name: "stella", icon_url: "", icon_name: "star" },
  vulnerability: { value: -20, icon_url: "", icon_name: "leaf" },
  extra_details: {
    evolutions: [],
    allies: [],
  },
};

export const Loaded: Story = {
  args: { id: "card_1" },
  parameters: {
    msw: {
      handlers: [
        http.get("/api/items/:id", ({ params }) => {
          if (params.id !== "card_1") {
            return HttpResponse.json(
              { message: "Card not found" },
              { status: 404 },
            );
          }
          return HttpResponse.json(cardFixture, { status: 200 });
        }),
      ],
    },
  },
  loaders: [mswLoader],

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(await canvas.findAllByText(/Psyduck/i)).toHaveLength(2);
    await expect(await canvas.findByTestId("back-button")).toBeInTheDocument();
  },
};

export const NotFound: Story = {
  args: { id: "missing" },
  parameters: {
    msw: {
      handlers: [
        http.get("/api/items/:id", () =>
          HttpResponse.json({ message: "Card not found" }, { status: 404 }),
        ),
      ],
    },
  },
  loaders: [mswLoader],

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const notFoundPlaceholder = await canvas.findByText(
      /Non siamo riusciti a trovare questa carta. Torna indietro e riprova./i,
    );

    await expect(await canvas.findByTestId("back-button")).toBeInTheDocument();
    await expect(notFoundPlaceholder).toBeInTheDocument();
  },
};

export const FightSimulation_Win: Story = {
  args: { id: "card_1" },
  parameters: {
    msw: {
      handlers: [
        http.get("/api/items/:id", () =>
          HttpResponse.json(cardFixture, { status: 200 }),
        ),
        http.post("/api/items/:id/jobs", () =>
          HttpResponse.json({ jobId: "job_1" }, { status: 201 }),
        ),

        // deterministic 3-step progression: queued -> running -> done
        (() => {
          let tick = 0;
          return http.get("/api/jobs/:jobId", async () => {
            tick += 1;
            if (tick === 1)
              return HttpResponse.json({
                status: "queued",
                progress: 0,
                health_points: 100,
              });
            if (tick === 2)
              return HttpResponse.json({
                status: "running",
                progress: 35,
                health_points: 90,
              });
            return HttpResponse.json({
              status: "done",
              progress: 100,
              health_points: 70,
            });
          });
        })(),
      ],
    },
  },
  loaders: [mswLoader],

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const cta = await canvas.findByRole("button", {
      name: /Simula combattimento/i,
    });
    await userEvent.click(cta);

    await expect(
      await canvas.findByRole(
        "button",
        { name: /Sta combattendo.../i },
        { timeout: 3000 },
      ),
    ).toBeInTheDocument();

    await expect(
      await canvas.findByRole(
        "button",
        {
          name: /Vittoria, lotta ancora/i,
        },
        { timeout: 3000 },
      ),
    ).toBeInTheDocument();
  },
};

export const FightSimulation_Lose: Story = {
  args: { id: "card_1" },
  parameters: {
    msw: {
      handlers: [
        http.get("/api/items/:id", () =>
          HttpResponse.json(cardFixture, { status: 200 }),
        ),
        http.post("/api/items/:id/jobs", () =>
          HttpResponse.json({ jobId: "job_1" }, { status: 201 }),
        ),

        // deterministic 3-step progression: queued -> running -> done
        (() => {
          let tick = 0;
          return http.get("/api/jobs/:jobId", async () => {
            tick += 1;
            if (tick === 1)
              return HttpResponse.json({
                status: "queued",
                progress: 0,
                health_points: 100,
              });
            if (tick === 2)
              return HttpResponse.json({
                status: "running",
                progress: 45,
                health_points: 30,
              });
            return HttpResponse.json({
              status: "done",
              progress: 100,
              health_points: 0,
            });
          });
        })(),
      ],
    },
  },
  loaders: [mswLoader],

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const cta = await canvas.findByRole("button", {
      name: /Simula combattimento/i,
    });
    await userEvent.click(cta);

    await expect(
      await canvas.findByRole(
        "button",
        { name: /Sta combattendo.../i },
        { timeout: 3000 },
      ),
    ).toBeInTheDocument();

    await expect(
      await canvas.findByRole(
        "button",
        {
          name: /Hai perso, riprova/i,
        },
        { timeout: 3000 },
      ),
    ).toBeInTheDocument();
  },
};

export const FightSimulation_Error: Story = {
  args: { id: "card_1" },
  parameters: {
    msw: {
      handlers: [
        http.get("/api/items/:id", () =>
          HttpResponse.json(cardFixture, { status: 200 }),
        ),
        http.post("/api/items/:id/jobs", () =>
          HttpResponse.json({ jobId: "job_1" }, { status: 201 }),
        ),

        // deterministic 3-step progression: queued -> running -> done
        (() => {
          let tick = 0;
          return http.get("/api/jobs/:jobId", async () => {
            tick += 1;
            if (tick === 1)
              return HttpResponse.json({
                status: "queued",
                progress: 0,
                health_points: 100,
              });
            if (tick === 2)
              return HttpResponse.json({
                status: "running",
                progress: 35,
                health_points: 90,
              });
            return HttpResponse.json({
              status: "failed",
              progress: 100,
              health_points: 70,
            });
          });
        })(),
      ],
    },
  },
  loaders: [mswLoader],

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const cta = await canvas.findByRole("button", {
      name: /Simula combattimento/i,
    });
    await userEvent.click(cta);

    await expect(
      await canvas.findByRole(
        "button",
        { name: /Sta combattendo.../i },
        { timeout: 3000 },
      ),
    ).toBeInTheDocument();

    await expect(
      await canvas.findByRole(
        "button",
        {
          name: /Simula nuovamente/i,
        },
        { timeout: 3000 },
      ),
    ).toBeInTheDocument();

    await expect(
      await canvas.findByText(
        /oops... qualcosa è andato storto/i,
        {},
        {
          timeout: 3000,
        },
      ),
    ).toBeInTheDocument();
  },
};

export const Cleanup_StopsPollingOnUnmount: Story = {
  args: { id: "card_1" },
  parameters: {
    msw: {
      handlers: [
        http.get("/api/items/:id", () =>
          HttpResponse.json(cardFixture, { status: 200 }),
        ),
        http.post("/api/items/:id/jobs", () =>
          HttpResponse.json({ jobId: "job_1" }, { status: 201 }),
        ),

        // recursive polling unless cleanup stops it
        (() => {
          let pollCount = 0;
          return http.get("/api/jobs/:jobId", () => {
            pollCount += 1;
            return HttpResponse.json(
              {
                id: "job_1",
                item_id: "card_1",
                status: "running",
                progress: Math.min(99, pollCount * 10),
                health_points: 90,
              },
              { status: 200 },
            );
          });
        })(),
      ],
    },
  },
  loaders: [mswLoader],

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // --- count job polling requests robustly ---
    let jobPollRequests = 0;

    // Wrap fetch to count only the job polling endpoint.
    // (If your jobs-service uses something else than fetch, skip this and rely on MSW handler state instead.)
    const originalFetch = globalThis.fetch.bind(globalThis);

    if (!originalFetch) {
      throw new Error("globalThis.fetch is not available in this environment");
    }
    globalThis.fetch = (async (
      input: RequestInfo | URL,
      init?: RequestInit,
    ) => {
      const url =
        typeof input === "string"
          ? input
          : input instanceof URL
            ? input.href
            : input.url;
      if (url.includes("/api/jobs/")) jobPollRequests += 1;
      //eslint-disable-next-line @typescript-eslint/no-explicit-any
      return originalFetch(input as any, init);
    }) as typeof fetch;

    try {
      const cta = await canvas.findByRole("button", {
        name: /Simula combattimento/i,
      });
      await userEvent.click(cta);

      await expect(
        await canvas.findByRole(
          "button",
          { name: /Sta combattendo.../i },
          { timeout: 3000 },
        ),
      ).toBeInTheDocument();

      // await new Promise((r) => setTimeout(r, 2300));
      const pollsBeforeUnmount = jobPollRequests;
      await expect(pollsBeforeUnmount).toBeGreaterThan(0);

      const back = await canvas.findByTestId("back-button");
      await userEvent.click(back);

      await expect(
        await canvas.findByText(/Cards list page/i),
      ).toBeInTheDocument();

      // if cleanup worked, we should NOT see new polling requests
      await new Promise((r) => setTimeout(r, 2500));

      await expect(jobPollRequests).toBe(pollsBeforeUnmount);
    } finally {
      globalThis.fetch = originalFetch;
    }
  },
};
