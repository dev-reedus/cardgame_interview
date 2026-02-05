import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, within } from "@storybook/test";

import Footer from "./footer";

const meta: Meta<typeof Footer> = {
  title: "Components/Footer",
  component: Footer,
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(canvas.getByText("TheCardGame©")).toBeInTheDocument();

    const footerEl = canvasElement.querySelector("footer");
    await expect(footerEl).not.toBeNull();
  },
};
