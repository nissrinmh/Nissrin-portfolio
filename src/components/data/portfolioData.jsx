import indianaDecorImg from '../../assets/indianadecor.jpg';
import scobeImg from '../../assets/librairiescobe.jpg';
import abderrahmaneCarImg from '../../assets/locationcar.jpg';
import tashilMarocImg from '../../assets/tashilmaroc.jpg';
import baAlumImg from '../../assets/baalum.jpg';
import codeTrendImg from '../../assets/codetrend.jpg';
import cooperativeSaharaImg from '../../assets/cooperativesahara.jpg';
import creationContenuImg from '../../assets/creation-contenu.jpg';

import {
  ReactIcon,
  NextIcon,
  LaravelIcon,
  NodeIcon,
  TSIcon,
  JSIcon,
  TailwindIcon,
  MongoIcon,
  MySQLIcon,
  PostgresIcon,
  GitIcon,
  FigmaIcon,
} from '../icons/TechIcons';

// ─── Projects ───────────────────────────────────────────────────────────────
export const projects = [
  {
    id: 'indiana-decor',
    title: 'Indiana Decor',
    description: "Aménagement d'intérieur de prestige, rénovation complète & mobilier sur-mesure à Tanger.",
    detailedDesc: "Plateforme web immersive créée pour Indiana Decor, référence de l'architecture d'intérieur et de la rénovation à Tanger. Le site sublime chaque réalisation en alliant design contemporain et artisanat marocain, avec une galerie interactive de projets, un sélecteur de styles et un formulaire de demande de devis sur-mesure.",
    tags: ['React', 'Vite', 'Tailwind CSS', 'Architecture UI'],
    category: 'vitrine',
    badge: '🏛️ Architecture & Décoration',
    image: indianaDecorImg,
    stats: '+120 Projets présentés • Devis sur-mesure en ligne',
    liveUrl: 'https://indianadecor.com/',
  },
  {
    id: 'cooperative-sahara',
    title: 'تعاونية منتوجات الصحراء — Coopérative Sahara',
    description: 'E-commerce bilingue dédié aux trésors cosmétiques et soins 100% naturels du Sahara marocain.',
    detailedDesc: "Plateforme e-commerce haut de gamme conçue pour la Coopérative des Produits du Sahara. Le site valorise l'authenticité et les rituels de beauté ancestraux des femmes sahraouies à travers un catalogue raffiné (huiles précieuses d'argan, nila bleue pure, savons artisanaux et soins botaniques). Intègre une interface bilingue arabe/français, un parcours d'achat optimisé avec panier interactif et commande express en Cash on Delivery (COD).",
    tags: ['React', 'Vite', 'E-Commerce', 'Bilingual UI', 'COD'],
    category: 'ecommerce',
    badge: '🌿 Cosmétique Naturelle & Terroir',
    image: cooperativeSaharaImg,
    stats: '100% Naturel & Bio • Vente en ligne & COD WhatsApp',
    liveUrl: 'https://cooperativesahara.com/',
  },
  {
    id: 'codetrend-creation-contenu',
    title: 'CodeTrend | Création de Contenu',
    description: 'Plateforme interactive de réservation de modèles et créateurs de contenu UGC pour marques & e-commerces.',
    detailedDesc: "Application web moderne dédiée à la mise en relation entre marques, e-commerçants et créateurs de contenu UGC (User Generated Content) pour TikTok, Instagram Reels et spots publicitaires. La plateforme permet de visionner le portfolio vidéo des talents, de filtrer par profil ou langue, de configurer des scripts publicitaires personnalisés et d'effectuer des demandes de booking en temps réel avec estimation instantanée.",
    tags: ['React', 'Vercel', 'Plateforme UGC', 'Booking App', 'Vidéo Ads'],
    category: 'saas',
    badge: '🎬 Plateforme UGC & Créateurs',
    image: creationContenuImg,
    stats: '+12 Modèles & Talents • Booking & Production Vidéo',
    liveUrl: 'https://creation-contenu.vercel.app/',
  },
  {
    id: 'librairie-scobe',
    title: 'Librairie Scobe Tanger',
    description: 'E-commerce interactif & catalogue pour la grande papeterie et librairie de référence.',
    detailedDesc: "Plateforme digitale complète pour la Librairie Scobe à Tanger (fournitures scolaires, bureautique, livres et beaux-arts). Intègre un catalogue d'articles réactif, un module de commande rapide de listes scolaires avec synchronisation WhatsApp, et la géolocalisation des deux succursales phares de Tanger (Branes et Ahlan).",
    tags: ['React', 'Vite', 'E-Commerce', 'WhatsApp API'],
    category: 'ecommerce',
    badge: '📚 Librairie & Fournitures',
    image: scobeImg,
    stats: '2 Succursales connectées • Commande WhatsApp direct',
    liveUrl: 'https://www.librairiescobetanger.com/',
  },
  {
    id: 'abderrahmane-car',
    title: 'Location Abderrahmane Car',
    description: 'Application de réservation automobile & catalogue de flotte en temps réel à Tanger.',
    detailedDesc: "Application web de réservation automobile pour l'agence Location Abderrahmane Car à Tanger. Présentation claire de la flotte de véhicules récents (Clio, Logan, Sandero, SUV), sélecteur de dates intuitif, calcul dynamique des tarifs et service de livraison express à l'Aéroport Tanger Ibn Battouta et à la gare TGV Tanger-Ville.",
    tags: ['React', 'JavaScript', 'Réservation Web', 'UI/UX'],
    category: 'saas',
    badge: '🚗 Location & Flotte Auto',
    image: abderrahmaneCarImg,
    stats: 'Flotte disponible 24/7 • Prise en charge Aéroport & Gare',
    liveUrl: 'https://www.locationabderahmanecar.com/',
  },
  {
    id: 'tashil-maroc',
    title: 'TASHIL MAROC ECOM',
    description: 'SaaS de calcul de rentabilité net & analytics pour e-commerçants COD au Maroc.',
    detailedDesc: "Solution SaaS et calculatrice financière développée pour les e-commerçants opérant en Cash on Delivery (COD) au Maroc. L'outil calcule automatiquement le bénéfice net en intégrant le prix d'achat, les coûts publicitaires (Meta/TikTok Ads), les frais de livraison et les taux de retour pour garantir un pilotage financier précis.",
    tags: ['React', 'Vercel', 'FinTech SaaS', 'Data Viz'],
    category: 'saas',
    badge: '📊 SaaS & FinTech E-commerce',
    image: tashilMarocImg,
    stats: 'Calcul ROI temps réel • Suivi Taux de Confirmation',
    liveUrl: 'https://tashil-one.vercel.app/',
  },
  {
    id: 'ba-alum-tanger',
    title: 'B A ALUM TANGER',
    description: 'Catalogue B2B & vitrine professionnelle pour accessoires de menuiserie aluminium.',
    detailedDesc: "Site vitrine et catalogue technique B2B pour B A ALUM TANGER, fournisseur de composants et accessoires de menuiserie aluminium (joints EPDM, poignées béquilles, serrures multipoints, roulettes, visserie et panneaux). Fiches techniques détaillées et système de devis instantané pour les professionnels du bâtiment.",
    tags: ['React', 'Tailwind CSS', 'Catalogue B2B', 'SEO'],
    category: 'ecommerce',
    badge: '⚙️ B2B & Menuiserie Aluminium',
    image: baAlumImg,
    stats: '+500 Références techniques • Devis instantané B2B',
    liveUrl: 'https://www.baalumtanger.com/',
  },
  {
    id: 'code-trend',
    title: 'Code Trend',
    description: 'Vitrine digitale pour agence créative 360° : solutions web, branding & marketing.',
    detailedDesc: "Conception et réalisation du site web de l'agence créative Code Trend à Tanger. La plateforme valorise l'offre 360° de l'agence : développement web haute performance, design d'interfaces UX/UI, campagnes marketing digital, production audiovisuelle et gestion de communauté, le tout dans une esthétique dark mode percutante.",
    tags: ['React', 'UI/UX Studio', 'Branding', 'Animation'],
    category: 'vitrine',
    badge: '🚀 Agence Digitale & Web',
    image: codeTrendImg,
    stats: 'Approche 360° • Performance & Design Web',
    liveUrl: 'https://www.thecodetrend.com/',
  },
];

// ─── Skills ──────────────────────────────────────────────────────────────────
export const skills = [
  { name: 'React',        icon: <ReactIcon />,    category: 'frontend' },
  { name: 'Next.js',      icon: <NextIcon />,      category: 'frontend' },
  { name: 'Laravel',      icon: <LaravelIcon />,   category: 'backend'  },
  { name: 'Node.js',      icon: <NodeIcon />,      category: 'backend'  },
  { name: 'TypeScript',   icon: <TSIcon />,        category: 'frontend' },
  { name: 'JavaScript',   icon: <JSIcon />,        category: 'frontend' },
  { name: 'Tailwind CSS', icon: <TailwindIcon />,  category: 'frontend' },
  { name: 'MongoDB',      icon: <MongoIcon />,     category: 'backend'  },
  { name: 'MySQL',        icon: <MySQLIcon />,     category: 'backend'  },
  { name: 'PostgreSQL',   icon: <PostgresIcon />,  category: 'backend'  },
  { name: 'Git',          icon: <GitIcon />,       category: 'tools'    },
  { name: 'Figma',        icon: <FigmaIcon />,     category: 'tools'    },
];

// ─── Experiences (home timeline) ────────────────────────────────────────────
export const experiences = [
  {
    period: '2023 - 2025',
    role: 'Technicienne Spécialisée en Développement Digital - Full Stack',
    description: "L'Institut Spécialisé dans les Métiers de l'Offshoring et les Nouvelles Technologies de l'Information et de la Communication (ISMONTIC) de Tanger",
    active: true,
  },
  {
    period: '2019 - 2022',
    role: 'Licence en Génie des Procédés',
    description: 'Faculté des Sciences et Techniques, Tanger',
    active: false,
  },
  {
    period: '2018 - 2019',
    role: 'Baccalauréat en Science Physique',
    description: 'Lycée Abdelkrim Al Khattabi, Tanger',
    active: false,
  },
];
