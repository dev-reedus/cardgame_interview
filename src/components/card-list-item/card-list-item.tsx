import * as React from "react";
import cn from "classnames";
import classes from "./card-list-item.module.scss";
import type { CardListItemProps } from "./card-list-item.model.ts";
import { resolveImageFromAssets } from "@/app/images-loader/images-loader.ts";

export const CardListItem: React.FC<CardListItemProps> = ({
  item,
  className,
  onClick,
}) => {
  const handleClick = () => onClick?.(item);

  const imageSrc = resolveImageFromAssets(item.image_url, "logo.png");

  return (
    <article
      className={cn(classes.card, className)}
      onClick={handleClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (!onClick) return;
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick();
        }
      }}
      aria-label={item.name}
    >
      <div className={classes.imageWrap}>
        <img className={classes.image} src={imageSrc} alt={item.name} />
      </div>

      <div className={classes.body}>
        <h3 className={classes.title}>{item.name}</h3>
        <p
          className={classes.description}
          dangerouslySetInnerHTML={{ __html: item.short_description }}
        />
      </div>
    </article>
  );
};

export default CardListItem;
