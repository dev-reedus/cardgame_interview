import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter, useLocation } from "react-router-dom";
import { delay, http, HttpResponse } from "msw";
import { expect, userEvent, within } from "@storybook/test";

import { LoaderProvider } from "@/app/global-loader/loader-provider";
import CardList from "./card-list";
import { mswLoader } from "msw-storybook-addon";

function LocationProbe() {
  const location = useLocation();
  return (
    <div style={{ marginTop: 12, fontFamily: "monospace", fontSize: 12 }}>
      <div>location.pathname:</div>
      <div data-testid="pathname">{location.pathname}</div>
    </div>
  );
}

const meta: Meta<typeof CardList> = {
  title: "Views/Cards/CardList",
  component: CardList,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/cards"]}>
        <LoaderProvider>
          <div style={{ maxWidth: 1100, padding: 16 }}>
            <Story />
            <LocationProbe />
          </div>
        </LoaderProvider>
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof CardList>;

export const Interactive: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get("/api/items", async () => {
          await delay(150);
          return HttpResponse.json(
            [
              {
                id: "1",
                name: "Bulbasaur",
                short_description: "A strange seed was planted on its back.",
                image_url: "source1.png",
              },
              {
                id: "2",
                name: "Charmander",
                short_description: "Obviously prefers hot places.",
                image_url: "source1.png",
              },
            ],
            { status: 200 },
          );
        }),
      ],
    },
  },
  loaders: [mswLoader],

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Wait for list to render
    const list = await canvas.findByLabelText("Cards");

    // Click the first card (CardListItem uses aria-label=item.name)
    const firstCard = await canvas.findByLabelText("Bulbasaur");
    await userEvent.click(firstCard);

    // Verify navigation happened
    await expect(canvas.getByTestId("pathname").textContent).toBe("/cards/1");

    // (sanity) ensure list existed before click
    await expect(list).toBeTruthy();
  },
};

export const Empty: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get("/api/items", async () => {
          await delay(50);
          return HttpResponse.json([], { status: 200 });
        }),
      ],
    },
  },
  loaders: [mswLoader],
};
