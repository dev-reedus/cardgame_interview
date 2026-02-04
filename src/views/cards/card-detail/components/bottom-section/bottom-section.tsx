import type { BottomSectionProps } from "./bottom-section-model.ts";
import classes from "./bottom-section.module.scss";
import CardListItem from "@/components/card-list-item";
import cn from "classnames";

const BottomSection: React.FC<BottomSectionProps> = ({
  className,
  allies,
  evolutions,
}) => {
  const hasAllies = !!allies.length;
  const hasEvolutions = !!evolutions.length;

  const renderedEvolutions = hasAllies
    ? evolutions.slice(0, 1)
    : evolutions.slice(0, 2);
  const renderedAllies = hasEvolutions
    ? allies.slice(0, 1)
    : allies.slice(0, 2);

  const columnsCount =
    (renderedEvolutions.length > 0 ? 1 : 0) +
    (renderedAllies.length > 0 ? 1 : 0);

  return (
    <section
      className={cn(classes.bottomSection, className)}
      aria-label="Related cards"
    >
      <div className={classes.bottomGrid}>
        {renderedEvolutions.length > 0 && (
          <div
            className={cn(classes.bottomCol, {
              [classes.bottomColFull]: columnsCount === 1,
            })}
          >
            <h3 className={classes.bottomTitle}>Evoluzioni</h3>
            <div className={classes.cardsContainer}>
              {renderedEvolutions.map((evolution) => (
                <CardListItem
                  key={evolution.id}
                  imageWrapperClassName={classes.customImageWrapper}
                  item={evolution}
                />
              ))}
            </div>
          </div>
        )}

        {renderedAllies.length > 0 && (
          <div
            className={cn(classes.bottomCol, {
              [classes.bottomColFull]: columnsCount === 1,
            })}
          >
            {" "}
            <h3 className={classes.bottomTitle}>Alleati</h3>
            <div className={classes.cardsContainer}>
              {renderedAllies.map((ally) => (
                <CardListItem
                  key={ally.id}
                  imageWrapperClassName={classes.customImageWrapper}
                  item={ally}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BottomSection;
