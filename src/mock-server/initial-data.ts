import { type CardDetail, Rarity } from "../types/card.ts";
import type { Job } from "../types/job.ts";

export const cards: CardDetail[] = [
  {
    id: "070dd527-d6d9-48e0-9618-25a40d8bffbf",
    name: "Psyduck",
    level: 15,
    subtitle: "Il Re dello stress 🦆💥",
    card_number: "054",
    health_points: 100,
    rarity: Rarity.COMMON,
    image_url: "/assets/images/react.svg",
    short_description:
      "<p>Usare i suoi poteri gli causa mal di testa, per questo passa il tempo cercando di non pensare.</p>",
    long_description:
      '<p>Psyduck vive in uno stato di confusione perenne. Praticamente è il simbolo universale del "non ho capito la domanda". </p><p><ol><li>Il suo superpotere? L\'emicrania. Più gli scoppia la testa, più diventa un dio dei poteri psichici.</li><li>Il dramma: Appena finisce di lanciare attacchi devastanti, si dimentica tutto e torna a fissare il vuoto come se non fosse successo nulla.</li></ol></p><p>In breve: vive con le mani sulle tempie, non sa dove si trova, ma se lo fai arrabbiare ti sposta le montagne con il pensiero. Un eroe moderno.</p>',
    typology: {
      name: "acqua",
      icon_url: "",
      icon_name: "",
    },
    energy: {
      name: "stella",
      icon_url: "",
    },
    vulnerability: {
      icon_url: "",
      value: -20,
    },
    extra_details: "",
  },
];

export const jobs = new Map<string, Job>();
