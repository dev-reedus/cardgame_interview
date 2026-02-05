import type { Meta, StoryObj } from "@storybook/react-vite";
import ProgressBar from "./progress-bar";

const meta: Meta<typeof ProgressBar> = {
  title: "Components/ProgressBar",
  component: ProgressBar,
  args: {
    value: 42,
    title: "Progress Bar",
    labels: "both",
    size: "md",
    ariaLabel: "Health points",
  },
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {};

export const Zero: Story = {
  args: { value: 0 },
};

export const Full: Story = {
  args: { value: 100 },
};

export const Over100IsClamped: Story = {
  args: { value: 150 },
};
