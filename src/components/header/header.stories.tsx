import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, within } from "@storybook/test";
import { MemoryRouter } from "react-router-dom";

import Header from "./header";

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

export const DefaultRoute: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/cards"]}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr" }}>
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const logo = canvas.getByRole("img", { name: "Logo" });
    await expect(logo).toBeInTheDocument();

    const headerEl = canvasElement.querySelector("header");
    await expect(headerEl).not.toBeNull();

    console.log("DefaultRoute headerEl className:", headerEl!.className);
    await expect(headerEl!.className.split(" ").filter(Boolean).length).toBe(2);
  },
};

export const DetailRoute: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/cards/123"]}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr" }}>
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const logo = canvas.getByRole("img", { name: "Logo" });
    await expect(logo).toBeInTheDocument();

    const headerEl = canvasElement.querySelector("header");
    await expect(headerEl).not.toBeNull();
    await expect(headerEl!.className.split(" ").filter(Boolean).length).toBe(2);
  },
};
