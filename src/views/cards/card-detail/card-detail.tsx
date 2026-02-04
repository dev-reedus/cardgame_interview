import * as React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import classes from "./card-detail.module.scss";
import type { CardDetail as CardDetailType } from "@/types/card.ts";
import { cardsApi } from "@/services/cards-service.ts";
import { useGlobalLoader } from "@/hooks/useGlobalLoader.ts";
import Button from "@/components/button";
import cn from "classnames";
import CardBanner from "./components/card-banner";
import CardComponent from "@/components/card-component";
import CardDescription from "./components/card-description";
import BottomSection from "@/views/cards/card-detail/components/bottom-section";
import ProgressBar from "@/components/progress-bar";

const CardDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const loader = useGlobalLoader();

  const [card, setCard] = useState<CardDetailType | null>(null);

  useEffect(() => {
    if (!id) return;

    loader
      .track(cardsApi.getCard(id))
      .then((detail) => {
        setCard(detail);
      })
      .catch(() => {
        setCard(null);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const hasEvolutions = !!card?.extra_details.evolutions.length;
  const hasAllies = !!card?.extra_details.allies.length;

  if (!card) {
    return (
      <div className={cn(classes.page, classes.emptyState)}>
        <div className={cn(classes.container, classes.emptyState)}>
          <Button
            size="md"
            icon="arrow-back"
            iconTitle="Go back"
            type="button"
            className={classes.backButton}
            onClick={() => navigate("/cards")}
          ></Button>
          <div className={classes.emptyStateCard}>
            <p>We couldn’t find this card. Please go back and try again.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={classes.page}>
      <CardBanner imageUrl={card.image_url} name={card.name} />

      <div className={classes.containerWrapper}>
        <div className={classes.container}>
          <div className={classes.mainGrid}>
            <section>
              <CardDescription
                name={card.name}
                subtitle={card.subtitle}
                html={card.long_description}
              />
            </section>

            <section>
              <div className={classes.cardContainer}>
                <CardComponent card={card} />

                <div className={classes.progressBarContainer}>
                  <div className={classes.placeholder}>
                    È tutto pronto, inizia la sfida!
                  </div>
                </div>

                <ProgressBar value={62} labels="right" />

                <div className={classes.buttonContainer}>
                  <Button
                    onClick={() => console.log("click")}
                    size="md"
                    className={classes.button}
                  >
                    SIMULA COMBATTIMENTO
                  </Button>
                </div>
              </div>
            </section>
          </div>

          {(hasAllies || hasEvolutions) && (
            <BottomSection
              allies={card.extra_details.allies}
              evolutions={card.extra_details.evolutions}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
