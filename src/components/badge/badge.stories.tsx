import type { Meta, StoryObj } from "@storybook/react-vite";
import Badge from "./badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  args: {
    variant: "filled",
    children: "Badge",
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Filled: Story = {};

export const Translucent: Story = {
  args: { variant: "translucent" },
};

export const WithIcon: Story = {
  args: { value: 7, icon: "water" },
};
