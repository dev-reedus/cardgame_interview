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
      icon_name: "leaf",
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
    name: "Sprigatito",
    level: 15,
    subtitle: "Narcisista dei fiori 🍃✨",
    card_number: "060",
    health_points: 100,
    rarity: Rarity.BASE,
    image_url: "@/assets/images/source2.png",
    short_description:
      "<p>Sprigatito è un germoglio con le fusa che ha deciso di diventare un gatto domestico.</p>",
    long_description:
      '<p>Sprigatito vive per un solo scopo: essere adorato.. </p><p><ul><li>Il suo superpotere? L\'aromaterapia forzata. Praticamente ti sconfigge a colpi di profumatore per ambienti.</li><li>Il dramma: Se smetti di accarezzarlo anche solo per un secondo, entra in modalità "offesa profonda".</li></ul></p><p>In breve: è una piantina adorabile con crisi di protagonismo. Ti guarda con quegli occhioni dolci, ma dentro sta solo pensando a come farti diventare il suo cameriere personale. Un piccolo tiranno verde.</p>',
    typology: {
      name: "foglia",
      icon_url: "",
      icon_name: "leaf",
    },
    energy: {
      name: "stella",
      icon_url: "",
      icon_name: "star",
    },
    vulnerability: {
      icon_url: "",
      icon_name: "fire",
      value: -20,
    },
    extra_details: {
      evolutions: [
        {
          id: "070dd527-d5d9-48e0-961a-25a40d8bffbf",
          name: "Floragato",
          short_description:
            "<p>Camminare su quattro zampe era troppo banale, si è alzato e ha iniziato a girare con uno yo-yo fatto di liane.</p>",
          image_url: "source9.png",
        },
      ],
      allies: [
        {
          id: "070dd521-d6d9-48e0-961b-25a40d8bffbf",
          name: "Meowscarada",
          short_description:
            "<p>È talmente vanitoso che se non riceve abbastanza attenzioni, ti butta giù i vasi di casa per dispetto.</p>",
          image_url: "source10.png",
        },
      ],
    },
  },
  {
    id: "070dd527-d6d9-48e0-9618-25a40d8bffbh",
    name: "Snorlax",
    level: 25,
    subtitle: "Voragine senza fondo 🍔🌀",
    card_number: "143",
    health_points: 100,
    rarity: Rarity.BASE,
    image_url: "@/assets/images/source3.png",
    short_description:
      "<p>È un ghiottone che smette di mangiare solo per dormire. Divora ben 400 kg di cibo al giorno.</p>",
    long_description:
      "<p>Il suo superpotere? Lo stomaco. Può mangiare quanitali di cibo (anche avariato) e digerire tutto senza fare una piega. È una specie di buco nero con la pelliccia. </p><p>Il dramma: Non si sveglia per nulla al mondo. Puoi saltargli sulla pancia o sounargli un'orchestra nelle orecchie, ma se non tiri fuori un Flauto Pokémon, lui resta lì a bloccare la strada a tutti.</p><p>In breve: mangia, dorme, occupa tutto il marciapiede e non paga l'affitto. Fondamentalmente, vive la vita che tutti vorremmo avere il lunedì mattina. Un mito assoluto.</p>",
    typology: {
      name: "neutro",
      icon_url: "",
      icon_name: "star",
    },
    energy: {
      name: "stella",
      icon_url: "",
      icon_name: "star",
    },
    vulnerability: {
      icon_url: "",
      value: -60,
      icon_name: "fire",
    },
    extra_details: {
      evolutions: [
        {
          id: "070de527-d5d9-48e0-961a-25a40d8bffbf",
          name: "Munchlax",
          short_description:
            "<p>Ogni giorno mangia una quantità di cibo pari al suo peso. Non bada troppo al sapore di ciò che ingurgita.</p>",
          image_url: "source11.png",
        },
      ],
      allies: [
        {
          id: "080dd521-d6d9-48e0-961b-25a40d8bffbf",
          name: "Eevee",
          short_description:
            "<p>La capacità di evolversi in diverse specie gli permette di adattarsi perfettamente a qualsiasi tipo di ambiente.</p>",
          image_url: "source12.jpg",
        },
      ],
    },
  },
  {
    id: "070dd527-d6d9-48e0-9618-25a40d8bffbi",
    name: "Fuecoco",
    level: 15,
    subtitle: "Il Neurone Solitario 🔥🍎",
    card_number: "180",
    health_points: 100,
    rarity: Rarity.BASE,
    image_url: "@/assets/images/source4.png",
    short_description:
      "<p>Coccodrillo pigro con scaglie rosse. Il suo carattere rilassato lo fa sembrare un po' assente.</p>",
    long_description:
      "<p>Fuecoco vive in uno stato di beatutudine totale, principalmente perché nel suo cervello non sta succedendo assolutamente nulla. </p><p><ul><li>Il suo superpotere? La fotosintesi... ma al contrario. Sta fermo a scaldarsi al sole finché non diventa un termosifone vivente.</li><li>Il dramma: Ha la soglia di attenzione di un sasso. Se vede del cibo, dimentica instantaneamente chi sei, dove si trova e perché stava combattendo.</li></ul></p><p>In breve: È adorabile, calmo e terribilmente lento a capire le battute. Un coraggioso erore pigro.</p>",
    typology: {
      name: "fuoco",
      icon_url: "",
      icon_name: "fire",
    },
    energy: {
      name: "stella",
      icon_url: "",
      icon_name: "star",
    },
    vulnerability: {
      icon_url: "",
      value: -20,
      icon_name: "water",
    },
    extra_details: {
      evolutions: [
        {
          id: "170de527-d5d9-48e0-961a-25a40d8bffbf",
          name: "Crocalor",
          short_description:
            "<p>Ha deciso che un guscio d'uovo infuocato è l'accessorio dell'anno e lo porta in testa come se fosse un basco.</p>",
          image_url: "source13.png",
        },
        {
          id: "280dd521-d6d9-48e0-961b-25a40d8bffbf",
          name: "Skeledirge",
          short_description:
            "<p>Ha schiuso l'uovo che aveva in testa, ora usa l'uccellino di fuoco come microfono vivente durante i concerti rock.</p>",
          image_url: "source14.png",
        },
      ],
      allies: [],
    },
  },
  {
    id: "070dd527-d6d9-48e0-9618-25a40d8bffbl",
    name: "Magikarp",
    level: 15,
    subtitle: "",
    card_number: "",
    health_points: 100,
    rarity: Rarity.BASE,
    image_url: "@/assets/images/source5.png",
    short_description:
      "<p>È universalmente noto come il Pokémon più inutile al mondo, È incapace di combattere.</p>",
    long_description: "",
    typology: {
      name: "acqua",
      icon_url: "",
      icon_name: "water",
    },
    energy: {
      name: "water",
      icon_url: "",
      icon_name: "water",
    },
    vulnerability: {
      icon_url: "",
      value: -20,
      icon_name: "leaf",
    },
    extra_details: {
      evolutions: [],
      allies: [],
    },
  },
  {
    id: "080dd527-d6d9-48e0-9618-25a40d8bffbl",
    name: "Diglett",
    level: 15,
    subtitle: "",
    card_number: "",
    health_points: 100,
    rarity: Rarity.BASE,
    image_url: "@/assets/images/source6.jpg",
    short_description:
      "<p>Di lui emerge solo la testa tonda con il naso rosa; nessuno ha mai visto il resto del suo corpo.</p>",
    long_description: "",
    typology: {
      name: "erba",
      icon_url: "",
      icon_name: "leaf",
    },
    energy: {
      name: "stella",
      icon_url: "",
      icon_name: "star",
    },
    vulnerability: {
      icon_url: "",
      value: -30,
      icon_name: "fire",
    },
    extra_details: {
      evolutions: [],
      allies: [],
    },
  },
];

export const jobs = new Map<string, Job>();
