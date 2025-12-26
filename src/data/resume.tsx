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
      company: "Apple",
      href: "https://apple.com",
      badges: [],
      location: "Cupertino, CA",
      title: "Software Engineer",
      logoUrl: "/apple-logo.png",
      start: "Janvier 2023",
      end: "Déc. 2023",
      description:
        "Travail sur les performances front-end et l’accessibilité des interfaces utilisateurs pour des applications mobiles et web grand public.",
    },
    {
      company: "Google",
      badges: [],
      href: "https://about.google",
      location: "Mountain View, CA",
      title: "Frontend Engineer",
      logoUrl: "/google.png",
      start: "Fév. 2022",
      end: "Déc. 2022",
      description:
        "Conception et optimisation de composants UI réutilisables et travail sur l’architecture des bibliothèques internes.",
    },
    {
      company: "Vercel",
      href: "https://vercel.com",
      badges: [],
      location: "San Francisco, CA",
      title: "Frontend Engineer",
      logoUrl: "/vercel.png",
      start: "Mar. 2021",
      end: "Jan. 2022",
      description:
        "Développement d’outils et d’intégrations pour améliorer l’expérience développeur et les workflows de déploiement.",
    },
    {
      company: "Stripe",
      href: "https://stripe.com",
      badges: [],
      location: "San Francisco, CA",
      title: "Full Stack Engineer",
      logoUrl: "/stripe.png",
      start: "Mai 2020",
      end: "Fév. 2021",
      description:
        "Implémentation de dashboards internes et intégrations de paiements pour plateformes e‑commerce.",
    },
    {
      company: "Shopify",
      href: "https://shopify.com",
      badges: [],
      location: "Ottawa, ON",
      title: "Frontend Engineer",
      logoUrl: "/shopify.svg",
      start: "Jan. 2019",
      end: "Déc. 2019",
      description:
        "Travail sur l’expérience marchand et les composants UI pour boutiques en ligne à grande échelle.",
    },
    {
      company: "Nvidia",
      href: "https://nvidia.com",
      badges: [],
      location: "Santa Clara, CA",
      title: "Software Engineer",
      logoUrl: "/nvidia.png",
      start: "Jan. 2018",
      end: "Déc. 2018",
      description:
        "Optimisation et développement de pipelines graphiques et outils internes pour performances élevées.",
    },
  ],
  education: [
    {
      school: "École polytechnique fédérale de Lausanne (EPFL)",
      href: "https://www.epfl.ch",
      degree: "Master en Informatique",
      logoUrl: "https://raw.githubusercontent.com/simple-icons/simple-icons/main/icons/epfl.svg",
      start: "2018",
      end: "2020",
    },
    {
      school: "Massachusetts Institute of Technology (MIT)",
      href: "https://www.mit.edu",
      degree: "Cours intensifs en Systèmes Distribués",
      logoUrl: "https://raw.githubusercontent.com/simple-icons/simple-icons/main/icons/mit.svg",
      start: "2020",
      end: "2021",
    },
    {
      school: "University of Waterloo",
      href: "https://uwaterloo.ca",
      degree: "Bachelor en informatique (BCS)",
      logoUrl: "https://raw.githubusercontent.com/simple-icons/simple-icons/main/icons/universityofwaterloo.svg",
      start: "2014",
      end: "2018",
    },
  ],
  projects: [
    {
      title: "Unlumen",
      href: "https://unlumen.com",
      dates: "2020 - Aujourd’hui",
      active: true,
      description:
        "Unlumen — une agence web spécialisée en design et développement front-end pour marques modernes.",
      technologies: ["Next.js", "React", "TailwindCSS", "Figma", "Vercel"],
      links: [
        {
          type: "Site",
          href: "https://unlumen.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/unlumen.mp4",
    },
    {
      title: "NebulaShop",
      href: "https://nebula-shop.example",
      dates: "Mars 2024",
      active: false,
      description:
        "Boutique e‑commerce fictive avec expérience produit immersive et animations personnalisées.",
      technologies: ["Next.js", "Stripe", "React", "TailwindCSS"],
      links: [
        {
          type: "Site",
          href: "https://nebula-shop.example",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/nebula-shop.png",
      video: "",
    },
    {
      title: "Enum Generator",
      href: "https://enum-generator.vercel.app",
      dates: "Déc 2023 - Jan 2024",
      active: true,
      description:
        "Outil web pour générer des énumérations de code à partir de listes de valeurs personnalisées",
      technologies: ["Node.js", "Express", "Postgres", "React"],
      links: [
        {
          type: "Demo",
          href: "https://enum-generator.vercel.app/demo",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/enum.mp4",
    },
    {
      title: "GPT-5.2-Codex",
      href: "https://openai.com",
      dates: "Sept 2022 - Nov 2022",
      active: false,
      description:
        "Suite d’outils analytiques fictifs pour visualiser et explorer des données produit en temps réel.",
      technologies: ["Python", "Django", "Postgres", "React", "Chart.js"],
      links: [
        {
          type: "Site",
          href: "https://openai.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/gpt.png",
      video: "",
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
