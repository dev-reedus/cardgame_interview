import * as React from "react";
import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import classes from "./card-detail.module.scss";
import type { CardDetail as CardDetailType } from "@/types/card.ts";
import { cardsApi } from "@/services/cards-service.ts";
import {
  cancelActiveJobPolling,
  jobsApi,
  singletonPollJob,
} from "@/services/jobs-service.ts";
import { useGlobalLoader } from "@/hooks/useGlobalLoader.ts";
import Button from "@/components/button";
import cn from "classnames";
import CardBanner from "./components/card-banner";
import CardComponent from "@/components/card";
import CardDescription from "./components/card-description";
import BottomSection from "@/views/cards/card-detail/components/bottom-section";
import ProgressBar from "@/components/progress-bar";
import type { Job } from "@/types/job.ts";

const CardDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const loader = useGlobalLoader();

  const [card, setCard] = useState<CardDetailType | null>(null);
  const [job, setJob] = useState<Job | null>(null);
  const [isStarting, setIsStarting] = useState(false);
  const [jobError, setJobError] = useState<string | null>(null);

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

    return () => {
      cancelActiveJobPolling();
      setJob(null);
      setJobError(null);
      setIsStarting(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const hasEvolutions = !!card?.extra_details.evolutions.length;
  const hasAllies = !!card?.extra_details.allies.length;

  const reset = () => {
    setJob(null);
    setJobError(null);
    setIsStarting(false);
  };

  const onCTAClick = () => {
    if (job?.status === "done" || job?.status === "failed") {
      reset();
    } else {
      handleFightSimulation();
    }
  };

  const cardUpdated = useMemo<CardDetailType | null>(() => {
    if (!card) return null;

    return {
      ...card,
      health_points: job?.health_points ?? card?.health_points,
    };
  }, [card, job]);

  const buttonText = useMemo<string>(() => {
    const status = job?.status;
    const hasHealth = !!cardUpdated?.health_points;

    if (status === "done" && hasHealth) return "Vittoria, lotta ancora!";
    if (status === "done" && !hasHealth) return "Hai perso, riprova!";
    if (status === "running") return "Sta combattendo...";
    if (status === "failed") return "Simula nuovamente";
    return "Simula combattimento";
  }, [cardUpdated, job]);

  async function handleFightSimulation() {
    if (!id) return;

    setJobError(null);
    setIsStarting(true);
    setJob(null);

    // keep one poller even on multiple clicks
    cancelActiveJobPolling();

    try {
      const jobId = await jobsApi.startJob(id);

      const finalJob = await singletonPollJob(jobId, {
        intervalMs: 2000,
        onUpdate: (j) => setJob(j),
      });
      if (finalJob.status === "failed") {
        setJobError("oops... qualcosa è andato storto");
      }
    } catch {
      setJobError("Errore di rete. Riprova!");
    } finally {
      setIsStarting(false);
    }
  }

  if (!card) {
    if (loader.open) return null;

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
            data-testid="back-button"
          ></Button>
          <div className={classes.emptyStateCard}>
            <p>
              Non siamo riusciti a trovare questa carta. Torna indietro e
              riprova.
            </p>
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
                {jobError ? (
                  <div className={classes.cardErrorPlaceholder}>
                    <p>{jobError}</p>
                  </div>
                ) : (
                  <>
                    {cardUpdated && <CardComponent card={cardUpdated} />}

                    {!job && (
                      <div className={classes.progressBarContainer}>
                        <div className={classes.placeholder}>
                          È tutto pronto, inizia la sfida!
                        </div>
                      </div>
                    )}

                    {job && (
                      <ProgressBar value={job?.progress ?? 0} labels="right" />
                    )}
                  </>
                )}

                <div className={classes.buttonContainer}>
                  <Button
                    onClick={onCTAClick}
                    size="md"
                    className={classes.button}
                    role="button"
                    disabled={
                      isStarting ||
                      job?.status === "queued" ||
                      job?.status === "running"
                    }
                  >
                    {buttonText}
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
