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
    rarity: Rarity.BASE,
    image_url: "source1.png",
    short_description:
      "<p>Usare i suoi poteri gli causa mal di testa, per questo passa il tempo cercando di non pensare.</p>",
    long_description:
      '<p>Psyduck vive in uno stato di confusione perenne. Praticamente è il simbolo universale del "non ho capito la domanda". </p><p><ul><li>Il suo superpotere? L\'emicrania. Più gli scoppia la testa, più diventa un dio dei poteri psichici.</li><li>Il dramma: Appena finisce di lanciare attacchi devastanti, si dimentica tutto e torna a fissare il vuoto come se non fosse successo nulla.</li></ul></p><p>In breve: vive con le mani sulle tempie, non sa dove si trova, ma se lo fai arrabbiare ti sposta le montagne con il pensiero. Un eroe moderno.</p>',
    typology: {
      name: "acqua",
      icon_url: "",
      icon_name: "water",
    },
    energy: {
      name: "stella",
      icon_url: "",
      icon_name: "star",
    },
    vulnerability: {
      icon_url: "",
      value: -20,
    },
    extra_details: {
      evolutions: [
        {
          id: "070dd527-d6d9-48e0-961a-25a40d8bffbf",
          name: "Golduck",
          short_description:
            "<p>Quando nuota a tutta velocità con i suoi lunghi art palmati, la fronte gli si illumina.</p>",
          image_url: "source7.png",
        },
      ],
      allies: [
        {
          id: "070dd527-d6d9-48e0-961b-25a40d8bffbf",
          name: "Slowpoke",
          short_description:
            "<p>Incredibilmente lento e tonto, ci mette cinque secondi a percepire il dolore dopo essere stato colpito.</p>",
          image_url: "source8.jpg",
        },
      ],
    },
  },
  {
    id: "070dd527-d6d9-48e0-9618-25a40d8bffbg",
    name: "Psyduck",
    level: 15,
    subtitle: "Il Re dello stress 🦆💥",
    card_number: "054",
    health_points: 100,
    rarity: Rarity.BASE,
    image_url: "@/assets/images/source1.png",
    short_description:
      "<p>Usare i suoi poteri gli causa mal di testa, per questo passa il tempo cercando di non pensare.</p>",
    long_description:
      '<p>Psyduck vive in uno stato di confusione perenne. Praticamente è il simbolo universale del "non ho capito la domanda". </p><p><ul><li>Il suo superpotere? L\'emicrania. Più gli scoppia la testa, più diventa un dio dei poteri psichici.</li><li>Il dramma: Appena finisce di lanciare attacchi devastanti, si dimentica tutto e torna a fissare il vuoto come se non fosse successo nulla.</li></ul></p><p>In breve: vive con le mani sulle tempie, non sa dove si trova, ma se lo fai arrabbiare ti sposta le montagne con il pensiero. Un eroe moderno.</p>',
    typology: {
      name: "acqua",
      icon_url: "",
      icon_name: "water",
    },
    energy: {
      name: "stella",
      icon_url: "",
      icon_name: "star",
    },
    vulnerability: {
      icon_url: "",
      value: -20,
    },
    extra_details: {
      evolutions: [],
      allies: [],
    },
  },
  {
    id: "070dd527-d6d9-48e0-9618-25a40d8bffbh",
    name: "Psyduck",
    level: 15,
    subtitle: "Il Re dello stress 🦆💥",
    card_number: "054",
    health_points: 100,
    rarity: Rarity.BASE,
    image_url: "@/assets/images/source1.png",
    short_description:
      "<p>Usare i suoi poteri gli causa mal di testa, per questo passa il tempo cercando di non pensare.</p>",
    long_description:
      '<p>Psyduck vive in uno stato di confusione perenne. Praticamente è il simbolo universale del "non ho capito la domanda". </p><p><ul><li>Il suo superpotere? L\'emicrania. Più gli scoppia la testa, più diventa un dio dei poteri psichici.</li><li>Il dramma: Appena finisce di lanciare attacchi devastanti, si dimentica tutto e torna a fissare il vuoto come se non fosse successo nulla.</li></ul></p><p>In breve: vive con le mani sulle tempie, non sa dove si trova, ma se lo fai arrabbiare ti sposta le montagne con il pensiero. Un eroe moderno.</p>',
    typology: {
      name: "acqua",
      icon_url: "",
      icon_name: "water",
    },
    energy: {
      name: "stella",
      icon_url: "",
      icon_name: "star",
    },
    vulnerability: {
      icon_url: "",
      value: -20,
    },
    extra_details: {
      evolutions: [],
      allies: [],
    },
  },
  {
    id: "070dd527-d6d9-48e0-9618-25a40d8bffbi",
    name: "Psyduck",
    level: 15,
    subtitle: "Il Re dello stress 🦆💥",
    card_number: "054",
    health_points: 100,
    rarity: Rarity.BASE,
    image_url: "@/assets/images/source1.png",
    short_description:
      "<p>Usare i suoi poteri gli causa mal di testa, per questo passa il tempo cercando di non pensare.</p>",
    long_description:
      '<p>Psyduck vive in uno stato di confusione perenne. Praticamente è il simbolo universale del "non ho capito la domanda". </p><p><ul><li>Il suo superpotere? L\'emicrania. Più gli scoppia la testa, più diventa un dio dei poteri psichici.</li><li>Il dramma: Appena finisce di lanciare attacchi devastanti, si dimentica tutto e torna a fissare il vuoto come se non fosse successo nulla.</li></ul></p><p>In breve: vive con le mani sulle tempie, non sa dove si trova, ma se lo fai arrabbiare ti sposta le montagne con il pensiero. Un eroe moderno.</p>',
    typology: {
      name: "acqua",
      icon_url: "",
      icon_name: "water",
    },
    energy: {
      name: "stella",
      icon_url: "",
      icon_name: "star",
    },
    vulnerability: {
      icon_url: "",
      value: -20,
    },
    extra_details: {
      evolutions: [],
      allies: [],
    },
  },
  {
    id: "070dd527-d6d9-48e0-9618-25a40d8bffbl",
    name: "Psyduck",
    level: 15,
    subtitle: "Il Re dello stress 🦆💥",
    card_number: "054",
    health_points: 100,
    rarity: Rarity.BASE,
    image_url: "@/assets/images/source1.png",
    short_description:
      "<p>Usare i suoi poteri gli causa mal di testa, per questo passa il tempo cercando di non pensare.</p>",
    long_description:
      '<p>Psyduck vive in uno stato di confusione perenne. Praticamente è il simbolo universale del "non ho capito la domanda". </p><p><ul><li>Il suo superpotere? L\'emicrania. Più gli scoppia la testa, più diventa un dio dei poteri psichici.</li><li>Il dramma: Appena finisce di lanciare attacchi devastanti, si dimentica tutto e torna a fissare il vuoto come se non fosse successo nulla.</li></ul></p><p>In breve: vive con le mani sulle tempie, non sa dove si trova, ma se lo fai arrabbiare ti sposta le montagne con il pensiero. Un eroe moderno.</p>',
    typology: {
      name: "acqua",
      icon_url: "",
      icon_name: "water",
    },
    energy: {
      name: "stella",
      icon_url: "",
      icon_name: "star",
    },
    vulnerability: {
      icon_url: "",
      value: -20,
    },
    extra_details: {
      evolutions: [],
      allies: [],
    },
  },
];

export const jobs = new Map<string, Job>();
