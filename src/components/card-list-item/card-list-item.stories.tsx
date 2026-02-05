import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, userEvent, within } from "@storybook/test";

import CardListItem from "./card-list-item";

const meta: Meta<typeof CardListItem> = {
  title: "Components/CardListItem",
  component: CardListItem,
  args: {
    item: {
      id: "card-1",
      name: "Pikachu",
      short_description: "Electric mouse Pokémon.",
      image_url: "missing-image.png",
    },
  },
};

export default meta;
type Story = StoryObj<typeof CardListItem>;

export const NonInteractable: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Static render checks
    await expect(canvas.getByText("Pikachu")).toBeInTheDocument();
    await expect(
      canvas.getByText("Electric mouse Pokémon."),
    ).toBeInTheDocument();
    await expect(
      canvas.getByRole("img", { name: "Pikachu" }),
    ).toBeInTheDocument();

    // Not interactable => no button role
    await expect(
      canvas.queryByRole("button", { name: "Pikachu" }),
    ).not.toBeInTheDocument();
  },
};

export const InteractableClick: Story = {
  args: {
    onClick: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    const card = canvas.getByLabelText("Pikachu");
    await expect(card).toHaveAttribute("role", "button");

    await userEvent.click(card);
    await expect(args.onClick).toHaveBeenCalledTimes(1);
    await expect(args.onClick).toHaveBeenCalledWith(args.item);
  },
};

export const InteractableKeyboard: Story = {
  args: {
    onClick: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    const card = canvas.getByLabelText("Pikachu");
    await expect(card).toHaveAttribute("tabindex", "0");

    card.focus();
    await userEvent.keyboard("{Enter}");
    await expect(args.onClick).toHaveBeenCalledTimes(1);

    await userEvent.keyboard(" ");
    await expect(args.onClick).toHaveBeenCalledTimes(2);

    await expect(args.onClick).toHaveBeenNthCalledWith(1, args.item);
    await expect(args.onClick).toHaveBeenNthCalledWith(2, args.item);
  },
};

export const HtmlDescription: Story = {
  args: {
    item: {
      id: "card-2",
      name: "Bulbasaur",
      short_description: "A <strong>bold</strong> choice.",
      image_url: "missing-image.png",
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(canvas.getByText("bold")).toBeInTheDocument();
  },
};
