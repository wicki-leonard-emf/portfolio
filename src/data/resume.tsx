import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Léo Wicki",
  initials: "LW",
  url: "https://unlumen.com",
  location: "Suisse, FR",
  locationLink: "https://www.google.com/maps/place/fribourg,+switzerland/",
  description:
    "Ingénieur logiciel devenu entrepreneur. J’aime construire des choses et aider les autres.",
  summary:
    "Fin 2022, j’ai quitté mon poste d’ingénieur logiciel pour me consacrer à plein temps à la création et à la croissance de mes entreprises SaaS. Par le passé, [j’ai suivi un double cursus en informatique et en business](/#education), [j’ai effectué des stages dans de grandes entreprises de la tech à Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), et [j’ai participé à plus de 21 hackathons pour le plaisir](/#hackathons). J’ai également eu la chance de faire partie de la toute première cohorte en présentiel de buildspace : [buildspace sf1](https://buildspace.so/sf1).",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Postgres",
    "Docker",
    "Java",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Accueil" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "contact@unlumen.com",
    tel: "+41789635729",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/wicki-leonard-emf",
        icon: Icons.github,

        navbar: true,
      },
      Whatsapp: {
        name: "WhatsApp",
        url: "https://wa.me/+41789635729",
        icon: Icons.whatsapp,

        navbar: true,
      },
      Youtube: {
        name: "YouTube",
        url: "https://www.youtube.com/",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Envoyer un e-mail",
        url: "mailto:leo@unlumen.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Atomic Finance",
      href: "https://atomic.finance",
      badges: [],
      location: "À distance",
      title: "Ingénieur protocole Bitcoin",
      logoUrl: "/atomic.png",
      start: "Mai 2021",
      end: "Oct. 2022",
      description:
        "Implémentation des spécifications du protocole Bitcoin Discreet Log Contracts (DLC) sous forme de SDK TypeScript open source. Dockerisation de tous les microservices et mise en place d’un cluster Kubernetes en production. Conception d’un data lake avec AWS S3 et Athena pour le backtesting historique de stratégies de trading Bitcoin. Développement d’une application mobile en React Native et TypeScript.",
    },
    {
      company: "Shopify",
      badges: [],
      href: "https://shopify.com",
      location: "À distance",
      title: "Ingénieur logiciel",
      logoUrl: "/shopify.svg",
      start: "Janvier 2021",
      end: "Avril 2021",
      description:
        "Implémentation d’un contrôleur Kubernetes sur mesure en Go pour automatiser le déploiement de ressources MySQL et ProxySQL, afin de permettre à plus de 2 000 développeurs internes de déployer instantanément les bases de données de leurs applications en production. Écriture de scripts Go pour automatiser les bascules (failovers) MySQL tout en maintenant des topologies de réplication master-slave et la cohérence des nœuds Zookeeper.",
    },
    {
      company: "Nvidia",
      href: "https://nvidia.com/",
      badges: [],
      location: "Santa Clara, CA",
      title: "Ingénieur logiciel",
      logoUrl: "/nvidia.png",
      start: "Janvier 2020",
      end: "Avril 2020",
      description:
        "Conception et développement de l’intégralité du MVP du tableau de bord interne d’administration et d’A/B testing de GeForce Now Cloud Gaming (React, Redux, TypeScript et Python).",
    },
    {
      company: "Splunk",
      href: "https://splunk.com",
      badges: [],
      location: "San Jose, CA",
      title: "Ingénieur logiciel",
      logoUrl: "/splunk.svg",
      start: "Janvier 2019",
      end: "Avril 2019",
      description:
        "Co-développement d’un prototype d’application iOS en Swift avec un autre stagiaire pour le nouveau produit d’orchestration de sécurité Splunk Phantom (ensuite présenté publiquement et lancé à la conférence annuelle .conf à Las Vegas). Implémentation d’un service temps réel pour l’app iOS en Django (Python) et C++, sérialisation via Protobuf et transport gRPC, pour un gain d’environ 500% de débit.",
    },
    {
      company: "Lime",
      href: "https://li.me/",
      badges: [],
      location: "San Francisco, CA",
      title: "Ingénieur logiciel",
      logoUrl: "/lime.svg",
      start: "Janvier 2018",
      end: "Avril 2018",
      description:
        "Proposition et implémentation d’une API Ruby interne pour envoyer/recevoir des commandes aux trottinettes via LTE. Développement d’un système entièrement automatisé de mise à jour firmware pour gérer des mises à jour asynchrones sur plus de 100 000 trottinettes dans le monde et fournir un suivi en temps réel (React, Ruby on Rails, PostgreSQL, AWS EC2), économisant des centaines d’heures de développement.",
    },
    {
      company: "Mitre Media",
      href: "https://mitremedia.com/",
      badges: [],
      location: "Toronto, ON",
      title: "Ingénieur logiciel",
      logoUrl: "/mitremedia.png",
      start: "Mai 2017",
      end: "Août 2017",
      description:
        "Conception et implémentation d’un système robuste de chiffrement de mots de passe et de stockage via cookies navigateur sous Ruby on Rails. Exploitation de l’API Yahoo Finance pour développer le screener d’actions dividend.com.",
    },
  ],
  education: [
    {
      school: "Buildspace",
      href: "https://buildspace.so",
      degree: "s3, s4, sf1, s5",
      logoUrl: "/buildspace.jpg",
      start: "2023",
      end: "2024",
    },
    {
      school: "University of Waterloo",
      href: "https://uwaterloo.ca",
      degree: "Bachelor en informatique (BCS)",
      logoUrl: "/waterloo.png",
      start: "2016",
      end: "2021",
    },
    {
      school: "Wilfrid Laurier University",
      href: "https://wlu.ca",
      degree: "Bachelor en administration des affaires (BBA)",
      logoUrl: "/laurier.png",
      start: "2016",
      end: "2021",
    },
    {
      school: "International Baccalaureate",
      href: "https://ibo.org",
      degree: "Diplôme IB",
      logoUrl: "/ib.png",
      start: "2012",
      end: "2016",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Fév 2024",
      active: true,
      description:
        "Avec la sortie du [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), j’ai décidé de créer un SaaS permettant de collecter les adresses e-mail des utilisateurs d’un GPT. Une excellente façon de construire une audience et de monétiser l’usage de l’API GPT.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Site",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "Juin 2023 - Aujourd’hui",
      active: true,
      description:
        "Conception, développement et vente de composants UI animés pour développeurs.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Site",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Code source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "Avril 2023 - Septembre 2023",
      active: true,
      description:
        "Développement d’une plateforme open source de logs et d’analytics pour OpenAI : journaliser les requêtes à l’API ChatGPT, analyser les coûts et améliorer les prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Site",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Code source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "Avril 2023 - Mars 2024",
      active: true,
      description:
        "Développement d’un chatbot de support client IA qui répond automatiquement aux tickets avec les derniers modèles GPT.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Site",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "23 - 25 Novembre 2018",
      location: "London, Ontario",
      description:
        "Développement d’une application mobile qui raconte des histoires du soir aux enfants grâce à la réalité augmentée.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "14 - 16 Septembre 2018",
      location: "Waterloo, Ontario",
      description:
        "Développement d’une application mobile qui diffuse en temps réel les événements du campus à tous les étudiants.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "23 - 24 Mars 2018",
      location: "San Francisco, California",
      description:
        "Développement d’une application mobile transmettant les données médicales d’une victime depuis une ambulance vers les médecins à l’hôpital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "3 - 4 Février 2018",
      location: "San Francisco, California",
      description:
        "Développement d’une application web qui agrège des données de réseaux sociaux sur les cryptomonnaies et prédit les prix futurs.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "20 - 21 Janvier 2018",
      location: "Davis, California",
      description:
        "Développement d’une application mobile attribuant un quota quotidien d’émissions carbone pour encourager un mode de vie plus durable.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Meilleur hack data",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "13 - 15 Octobre 2017",
      location: "Waterloo, Ontario",
      description:
        "Développement d’une application blockchain permettant aux médecins et pharmaciens d’effectuer des transactions trustless et de prévenir les surdosages.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organisation",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "15 - 17 Septembre 2017",
      location: "Waterloo, Ontario",
      description:
        "Développement d’une application de réalité virtuelle permettant de se voir à la troisième personne.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Code source (streamer)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Code source (client)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "26 - 27 Août 2017",
      location: "Toronto, Ontario",
      description:
        "Développement d’une plateforme ouverte permettant à des personnes expédiant vers le même endroit de regrouper les frais de livraison et d’économiser.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Code source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "23 Juillet 2017",
      location: "Toronto, Ontario",
      description:
        "Développement d’une extension Chrome qui suit les profils Facebook visités et envoie immédiatement un SMS à ta copine si tu visites la page d’une autre fille.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Code source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "23 - 25 Juin 2017",
      location: "Toronto, Ontario",
      description:
        "Développement d’une bibliothèque Python importable dans n’importe quel jeu Python, capable d’ajuster la difficulté selon l’émotion du joueur en temps réel. Utilise OpenCV et une webcam pour la reconnaissance faciale, ainsi qu’un modèle de machine learning entraîné sur un [dataset Kaggle d’émotions](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) avec [Tensorflow](https://www.tensorflow.org/Tensorflow) et [Keras](https://keras.io/). Ce projet a remporté le 1er prix au Global AI Hackathon - Toronto et a été invité en démo chez [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1er prix",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Code source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "17 - 18 Juin 2017",
      location: "Montreal, Quebec",
      description:
        "Développement d’un analyseur de micro-expressions faciales en temps réel grâce à l’IA.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "10 Juin 2017",
      location: "Toronto, Ontario",
      description:
        "Développement d’une interface d’administration sur mesure pour la startup anti-gaspillage alimentaire <a href='http://genecis.co/'>Genecis</a>, afin de gérer les données et fournir des analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1er prix",
      links: [
        {
          title: "Code source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "19 - 21 Mai 2017",
      location: "International",
      description:
        "Amélioration de PocketDoc et participation à une compétition en ligne.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Finaliste top 10 | Mention honorable",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Code source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "12 - 14 Mai 2017",
      location: "Toronto, Ontario",
      description:
        "Développement d’un réseau de neurones pour optimiser un procédé minier.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "5 - 7 Mai 2017",
      location: "Waterloo, Ontario",
      description:
        "Développement de PocketDoc, une app où l’on prend en photo une blessure et l’application propose des solutions et traitements courants.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Code source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "28 - 30 Avril 2017",
      location: "Waterloo, Ontario",
      description:
        "Développement d’Earthwatch, une application web permettant à des passagers en avion de visualiser virtuellement des points d’intérêt du monde en dessous. Ils peuvent même s’éloigner de leur trajectoire puis y revenir. Merci à CesiumJS pour les modèles open source du monde et de l’avion.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Code source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "24 - 26 Mars 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Développement de Super Graphic Air Traffic, un site VR pour initier au contrôle aérien. Projet construit entièrement avec THREE.js et un backend Node.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Code source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "4 - 5 Mars 2017",
      location: "Waterloo, Ontario",
      description:
        "Développée à StartHacks 2017, Recipic est une application mobile qui permet de prendre en photo des ingrédients chez soi, de les reconnaître via l’API ClarifAI et de proposer des recettes possibles. Recipic a remporté la 1re place du hackathon (meilleur pitch et meilleur hack).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1er prix",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Code source (mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Code source (serveur)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "3 - 5 Février 2017",
      location: "Kingston, Ontario",
      description:
        "Développement d’un jeu mobile permettant une chasse à l’homme à l’échelle d’une ville, avec des lobbies aléatoires.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Code source (mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Code source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "26 Novembre 2016",
      location: "Waterloo, Ontario",
      description:
        "Développement d’une maquette de Windows 11 avec des notifications et fonctionnalités originales.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Code source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "29 Octobre 2016",
      location: "Kingston, Ontario",
      description:
        "Développement d’un widget interne pour téléverser des devoirs via l’application portail de Waterloo.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Code source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
