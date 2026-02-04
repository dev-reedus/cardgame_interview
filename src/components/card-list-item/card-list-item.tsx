import * as React from "react";
import cn from "classnames";
import classes from "./card-list-item.module.scss";
import type { CardListItemProps } from "./card-list-item.model.ts";
import { resolveImageFromAssets } from "@/app/images-loader/images-loader.ts";

const CardListItem: React.FC<CardListItemProps> = ({
  item,
  className,
  imageWrapperClassName,
  onClick,
}) => {
  const isInteractable = typeof onClick === "function";
  const handleClick = () => onClick?.(item);

  const imageSrc = resolveImageFromAssets(item.image_url, "logo.png");

  return (
    <article
      className={cn(
        classes.card,
        { [classes.cardNonInteractable]: !isInteractable },
        className,
      )}
      onClick={handleClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        isInteractable
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleClick();
              }
            }
          : undefined
      }
      aria-label={item.name}
    >
      <div className={cn(classes.imageWrap, imageWrapperClassName)}>
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
