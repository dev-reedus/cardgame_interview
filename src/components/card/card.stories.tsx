import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, within } from "@storybook/test";

import CardPreviewPanel from "./card";
import { Rarity } from "@/types/card.ts";

const meta: Meta<typeof CardPreviewPanel> = {
  title: "Components/Card",
  component: CardPreviewPanel,
  args: {
    card: {
      id: "card-1",
      name: "Pikachu",
      short_description: "Electric mouse Pokémon.",
      image_url: "missing-image.png",
      subtitle: "Mouse Pokémon",
      card_number: "025",
      level: 12,
      health_points: 60,
      rarity: "pokémon_base",
      long_description: "A friendly electric type Pokémon.",
      energy: {
        name: "Electric",
        icon_url: "",
        icon_name: "water",
      },
      typology: {
        name: "Star",
        icon_url: "",
        icon_name: "star",
      },
      vulnerability: {
        value: 2,
        icon_url: "",
        icon_name: "water",
      },
      extra_details: {
        evolutions: [],
        allies: [],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CardPreviewPanel>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(canvas.getByText(/N\.\s*025/i)).toBeInTheDocument();
    await expect(
      canvas.getByRole("img", { name: /pikachu/i }),
    ).toBeInTheDocument();
    await expect(canvas.getByText(/pikachu/i)).toBeInTheDocument();

    await expect(canvas.getByLabelText(/card stats/i)).toBeInTheDocument();

    await expect(canvas.queryByTestId("typology-badge")).toBeInTheDocument();

    await expect(canvas.queryByTestId("energy-badge")).toBeInTheDocument();

    await expect(
      canvas.queryByTestId("card-expired-overlay"),
    ).not.toBeInTheDocument();
  },
};

export const DangerHealth: Story = {
  args: {
    card: {
      ...meta.args!.card!,
      health_points: 20,
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(
      canvas.queryByTestId("card-expired-overlay"),
    ).not.toBeInTheDocument();
  },
};

export const FooterLabel: Story = {
  args: {
    card: {
      ...meta.args!.card!,
      rarity: Rarity.SECOND,
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(canvas.queryByText("Seconda evoluzione")).toBeInTheDocument();
  },
};

export const FooterBadge: Story = {
  args: {
    card: {
      ...meta.args!.card!,
      typology: {
        name: "Water",
        icon_url: "",
        icon_name: "water",
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(
      canvas.queryByTestId("typology-badge"),
    ).not.toBeInTheDocument();
    await expect(canvas.queryByTestId("energy-badge")).toBeInTheDocument();
  },
};

export const Expired: Story = {
  args: {
    card: {
      ...meta.args!.card!,
      health_points: 0,
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(
      canvas.queryByTestId("card-expired-overlay"),
    ).toBeInTheDocument();
  },
};
