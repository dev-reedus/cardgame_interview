import React from "react";
import styles from "./progress-bar.module.scss";
import type { ProgressBarProps } from "@/components/progress-bar/progress-bar.model.ts";
import { clampPercent } from "@/components/progress-bar/utils.ts";
import cn from "classnames";

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  labels = "",
  formatLabel,
  title,
  size = "md",
  className,
  ariaLabel = "Progress",
}) => {
  const percent = clampPercent(value);
  const labelText = formatLabel
    ? formatLabel(percent)
    : `${Math.round(percent)}%`;

  const showLeft = labels === "left" || labels === "both";
  const showRight = labels === "right" || labels === "both";

  return (
    <div className={cn(styles.root, styles[size], className)}>
      {title && <div className={styles.title}>{title}</div>}

      <div className={styles.row}>
        {showLeft && <div className={styles.label}>{labelText}</div>}

        <div
          className={styles.track}
          role="progressbar"
          aria-label={ariaLabel}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(percent)}
        >
          <div className={styles.fill} style={{ width: `${percent}%` }} />
        </div>

        {showRight && (
          <div className={cn(styles.label, styles.labelRight)}>{labelText}</div>
        )}
      </div>
    </div>
  );
};

export default ProgressBar;
