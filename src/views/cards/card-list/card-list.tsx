import * as React from "react";
import { useEffect, useState } from "react";
import cn from "classnames";
import classes from "./card-list.module.scss";
import CardListItemComponent from "@/components/card-list-item";
import type { CardListProps } from "@/views/cards/card-list/card-list.model.ts";
import type { CardListItem } from "@/types/card.ts";
import { cardsApi } from "@/services/cards-service.ts";

export const CardList: React.FC<CardListProps> = ({
  className,
  onItemClick,
}) => {
  const [items, setItems] = useState<CardListItem[]>([]);

  useEffect(() => {
    cardsApi.getCardsList().then((cards) => setItems(cards));
  }, []);

  return (
    <div className={classes.listWrapper}>
      <div className={classes.pageHeaderDescription}>
        <h2>Il tuo Poké Deck</h2>
        <p>
          Dai un'occhiata al più grande e completo database di carte Pokémon!
          Troverai carte di ogni espansione e tante curiosità sulle tue
          collezioni. Clicca sui tuoi Pokémon per scoprire di più su di loro!
        </p>
      </div>
      <ul className={cn(classes.grid, className)} aria-label="Cards">
        {items.map((item) => (
          <li key={item.id} className={classes.cell}>
            <CardListItemComponent item={item} onClick={onItemClick} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardList;
