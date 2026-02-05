import type { IconName } from "@/components/icon";

export type StatItemProps = {
  icon?: IconName;
  label?: string;
  value: React.ReactNode;
  variant?: "default" | "danger" | "expired";
};
