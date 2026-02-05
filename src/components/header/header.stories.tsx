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

export const SizesDifferByRoute: Story = {
  render: () => (
    <div style={{ display: "grid", gap: 16, padding: 16 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr" }}>
        <div style={{ fontFamily: "monospace", fontSize: 12, marginBottom: 8 }}>
          /cards
        </div>
        <MemoryRouter initialEntries={["/cards"]}>
          <Header />
        </MemoryRouter>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr" }}>
        <div style={{ fontFamily: "monospace", fontSize: 12, marginBottom: 8 }}>
          /cards/123
        </div>
        <MemoryRouter initialEntries={["/cards/123"]}>
          <Header />
        </MemoryRouter>
      </div>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const headers = Array.from(canvasElement.querySelectorAll("header"));
    await expect(headers.length).toBe(2);

    await expect(headers[0]!.className).not.toBe(headers[1]!.className);

    const imgs = Array.from(canvasElement.querySelectorAll('img[alt="Logo"]'));
    await expect(imgs.length).toBe(2);
  },
};
