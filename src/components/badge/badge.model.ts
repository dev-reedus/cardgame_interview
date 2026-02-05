import type { IconName } from "@/components/icon";

export type BadgeProps = {
  value?: string | number;
  icon?: IconName;
  iconPosition?: "left" | "right";
  children?: React.ReactNode;
  className?: string;
  variant?: "filled" | "translucent";
} & React.HTMLAttributes<HTMLSpanElement>;
