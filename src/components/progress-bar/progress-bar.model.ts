type LabelPlacement = "none" | "left" | "right" | "both";

export type ProgressBarProps = {
  value: number;
  labels?: LabelPlacement;
  formatLabel?: (percent: number) => string;
  title?: React.ReactNode;
  size?: "sm" | "md";
  className?: string;
  ariaLabel?: string;
};
