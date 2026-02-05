import type { Meta, StoryObj } from "@storybook/react-vite";
import Loader from "./loader";

const meta: Meta<typeof Loader> = {
  title: "Components/Loader",
  component: Loader,
  args: {
    open: true,
    label: "Loading…",
  },
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Open: Story = {};
