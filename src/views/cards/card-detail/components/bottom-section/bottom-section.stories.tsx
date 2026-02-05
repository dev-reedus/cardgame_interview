import type { Meta, StoryObj } from "@storybook/react-vite";

import BottomSection from "./bottom-section";
import type { CardListItem } from "@/types/card";
import { expect, within } from "@storybook/test";

const meta: Meta<typeof BottomSection> = {
  title: "Views/Cards/CardDetail/BottomSection",
  component: BottomSection,
};
export default meta;

type Story = StoryObj<typeof BottomSection>;

const makeItem = (id: string, name: string): CardListItem => ({
  id,
  name,
  short_description: "<p>desc</p>",
  image_url: "source1.png",
});

export const OnlyEvolutions: Story = {
  args: {
    evolutions: [makeItem("e1", "Golduck"), makeItem("e2", "X")],
    allies: [],
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(
      await canvas.findByLabelText("Related cards"),
    ).toBeInTheDocument();

    await expect(canvas.getByText("Evoluzioni")).toBeInTheDocument();
    await expect(canvas.queryByText("Alleati")).not.toBeInTheDocument();
  },
};

export const OnlyAllies: Story = {
  args: {
    evolutions: [],
    allies: [makeItem("a1", "Slowpoke"), makeItem("a2", "Y")],
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(
      await canvas.findByLabelText("Related cards"),
    ).toBeInTheDocument();

    await expect(canvas.getByText("Alleati")).toBeInTheDocument();
    await expect(canvas.queryByText("Evoluzioni")).not.toBeInTheDocument();
  },
};

export const Both_EachLimitedToOne: Story = {
  args: {
    evolutions: [makeItem("e1", "Golduck"), makeItem("e2", "X")],
    allies: [makeItem("a1", "Slowpoke"), makeItem("a2", "Y")],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(
      await canvas.findByLabelText("Related cards"),
    ).toBeInTheDocument();

    await expect(await canvas.findByText("Alleati")).toBeInTheDocument();
    await expect(await canvas.findByText("Evoluzioni")).toBeInTheDocument();

    await expect(await canvas.findByText("Golduck")).toBeInTheDocument();
    await expect(await canvas.findByText("Slowpoke")).toBeInTheDocument();

    await expect(canvas.queryByText("X")).not.toBeInTheDocument();
    await expect(canvas.queryByText("Y")).not.toBeInTheDocument();
  },
};
