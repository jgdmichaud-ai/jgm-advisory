export const site = {
  name: 'JGM Advisory',
  owner: 'Jean-Gabriel Michaud',
  email: 'jean-gabriel.michaud@jgmadvisory.com',
  location: 'Lyon, France',
  linkedin: 'https://www.linkedin.com/in/jean-gabriel-michaud-11b0592',
  logo: '/assets/jgm-advisory-logo.png',
  aboutPortrait: '/assets/jgm-about-portrait.png',
  portrait: '/assets/jean-gabriel-michaud.webp'
};

export const languages = [
  { locale: 'fr', label: 'Français', short: 'FR' },
  { locale: 'en', label: 'English', short: 'EN' }
];

export const translations = {
  fr: {
    meta: {
      title: 'JGM Advisory - Conseil en transformation & organisation',
      description:
        "JGM Advisory, conseil indépendant à Lyon. Jean-Gabriel Michaud accompagne les transformations, organisations, cultures d'entreprise, démarches de changement et équipes dirigeantes.",
      ogDescription:
        "J'accompagne les organisations de bout en bout sur leurs transformations à forts enjeux organisationnels et humains.",
      locale: 'fr_FR'
    },
    ui: {
      skipLink: 'Aller au contenu principal',
      menuOpen: 'Ouvrir le menu',
      menuClose: 'Fermer le menu',
      navLabel: 'Navigation principale',
      mainLabel: 'Contenu principal',
      languageLabel: 'Choisir la langue',
      serviceTabsHelp:
        "Sélectionnez un domaine d'intervention pour afficher son détail. Les flèches du clavier permettent de passer d'un domaine au suivant.",
      detailHint: 'Voir le détail',
      proofLabel: 'Chiffres clés',
      emailCopied: 'Email copié',
      sendEmailLabel: 'Envoyer un email à Jean-Gabriel Michaud',
      copyEmailLabel: "Copier l'adresse email",
      linkedinLabel: 'Profil LinkedIn de Jean-Gabriel Michaud, ouvre un nouvel onglet',
      portraitAlt: 'Portrait de Jean-Gabriel Michaud',
      aboutPortraitAlt: 'Portrait illustré de Jean-Gabriel Michaud'
    },
    navItems: [
      ['Offre', '#offre'],
      ['Approche', '#approche'],
      ['Références', '#references'],
      ['Parcours', '#parcours'],
      ['Contact', '#contact']
    ],
    hero: {
      eyebrow: 'Conseil indépendant à Lyon',
      title: 'JGM Advisory',
      subtitleLead: "J'accompagne de bout en bout vos transformations",
      subtitleAccent: 'à forts enjeux organisationnels et humains.',
      intro:
        'Réorganisation, processus, modes de fonctionnement, management — des sujets complexes traités avec rigueur et engagement.',
      primaryCta: 'Travaillons ensemble',
      secondaryCta: 'Références'
    },
    proofPoints: [
      { value: '22 ans', suffix: "d'expérience", label: 'en conseil et transformation' },
      { value: 'PME, ETI, groupes', label: 'des organisations de tailles et cultures variées' },
      { value: 'France & international', label: 'des interventions à Lyon, en France et au-delà' }
    ],
    about: {
      eyebrow: 'À propos',
      paragraphs: [
        "Consultant indépendant basé à Lyon, j'accompagne depuis plus de 22 ans des organisations de toutes tailles — PME en croissance, ETI et grands groupes internationaux — sur leurs projets de transformation, d'organisation et de conduite du changement.",
        "J'interviens aussi bien auprès des Comités de Direction que des équipes terrain, sur des transformations de grande ampleur comme sur des chantiers opérationnels ciblés."
      ],
      cta: 'En savoir plus sur mon parcours'
    },
    offer: {
      eyebrow: 'Offre de service',
      title: "De la stratégie à l'opérationnel, sans frontière de périmètre.",
      note:
        "Pour les programmes de grande envergure, j'interviens également en équipe avec des partenaires externes, selon les besoins de la mission."
    },
    services: [
      {
        number: '01',
        title: 'Accompagnement opérationnel',
        short: 'Structurer, piloter, embarquer.',
        illustration: '/assets/illustrations/operational-support.png',
        description:
          'Structuration et pilotage de projets de transformation, narratif et storytelling, mise en place de dispositifs de conduite du changement. Un accompagnement concret, du cadrage initial à la mise en œuvre terrain.',
        points: [
          'Définition de la trajectoire et du plan de transformation',
          'Conception du narratif et des dispositifs de changement',
          'Accompagnement opérationnel au jour le jour',
          'Interface entre équipes projet et parties prenantes',
          'Production et formalisation des livrables clés'
        ]
      },
      {
        number: '02',
        title: "Design d'organisation",
        short: 'Repenser les rôles et la gouvernance.',
        illustration: '/assets/illustrations/organization-design.png',
        description: 'Création ou refonte de Directions, Départements ou Services.',
        points: [
          'Diagnostic organisationnel',
          'Design de la cible organisationnelle',
          'Rôles, responsabilités et gouvernance',
          'Plan de déploiement et feuilles de route',
          'Support aux 100 premiers jours'
        ]
      },
      {
        number: '03',
        title: 'Efficacité opérationnelle',
        short: 'Faire mieux, plus simple, plus fiable.',
        illustration: '/assets/illustrations/operational-effectiveness.png',
        description:
          'Optimisation des processus et des modes de fonctionnement de travail pour gagner en simplicité, fiabilité et impact.',
        points: [
          'Cartographie des processus existants',
          'Analyse des irritants et causes racines',
          'Refonte des modes opératoires',
          'Mesure et suivi des résultats'
        ]
      },
      {
        number: '04',
        title: "Culture d'entreprise",
        short: 'Aligner pratiques et ambition.',
        illustration: '/assets/illustrations/corporate-culture.png',
        description:
          "Définition d'une culture d'entreprise, ou inflexion de la culture existante, pour singulariser l'entreprise et aligner les modes de fonctionnement internes avec ses enjeux.",
        points: [
          'Diagnostic culturel quantitatif et qualitatif',
          'Construction du modèle culturel cible',
          'Déclinaison dans les façons de faire et de manager',
          "Dispositifs d'appropriation à petite ou grande échelle"
        ]
      },
      {
        number: '05',
        title: 'Mobilisation & engagement',
        short: "Créer l'adhésion autour des sujets stratégiques.",
        illustration: '/assets/illustrations/mobilization-engagement.png',
        description:
          "Design de dispositifs visant à mobiliser toute une organisation autour d'une transformation ou d'un sujet stratégique.",
        points: [
          'Narratif et promesse de transformation',
          'Événements fédérateurs',
          'Animation de communautés managériales',
          "Mesure de l'engagement et de l'adhésion"
        ]
      },
      {
        number: '06',
        title: 'Coaching & développement managérial',
        short: 'Renforcer les postures et les coopérations.',
        illustration: '/assets/illustrations/leadership-development.png',
        description: 'Accompagnement managérial sur la posture et les compétences, individuel ou collectif.',
        points: [
          'Coaching individuel de managers et dirigeants',
          'Programmes de développement collectifs',
          'Séminaires managériaux',
          'Coopération en équipe de direction'
        ]
      }
    ],
    approachSection: {
      eyebrow: 'Mon approche',
      titleLead: 'Pas seulement une méthode.',
      titleGold: "Une façon d'être.",
      introLead: 'Ce qui me guide, à chacune de mes missions.',
      introGold: ''
    },
    approach: [
      [
        '01',
        'Rigueur',
        "Démarche structurée, méthodes éprouvées, livrables soignés, engagement total... je sais ce que vous êtes en droit d'attendre d'une prestation de conseil. Fort de mes 16 années passées en cabinet, je vous accompagne en m'appuyant sur un savoir-faire et un savoir-être conformes aux exigences du métier du conseil."
      ],
      [
        '02',
        'Respect',
        'Respect des collaborateurs — cela va sans dire ! — mais également respect de votre agenda, de vos contraintes, de votre rythme et de vos perceptions. Je sais que toute mission crée du stress et du travail supplémentaire : je fais en sorte de les minimiser.'
      ],
      [
        '03',
        'Nuance',
        "Vos projets méritent mieux que des certitudes, des réflexes et des lieux communs. J'arrive avec une méthode et des questions autant qu'avec des réponses — et j'ai à cœur, toujours, de confronter ce que je crois savoir avec vos propres convictions et votre vécu."
      ],
      [
        '04',
        'Simplicité',
        "Je crois à la force de la simplicité — celle qui se traduit dans les relations de travail par la politesse, l'humilité, la disponibilité, la tempérance et la bonne humeur. Celle qui remet les choses en perspective et qui invite à prendre du recul... pour ne jamais ajouter de complexité à la complexité."
      ]
    ],
    referencesSection: {
      eyebrow: 'Références',
      title: 'Quelques missions réalisées au cours des 24 derniers mois.',
      intro: ''
    },
    references: [
      [
        'Tourisme & Hôtellerie',
        "Définition d'un nouveau modèle managérial, en lien avec la nouvelle culture d'entreprise"
      ],
      ['Avantages aux employés', "Design d'une culture d'entreprise et déploiement dans 29 pays"],
      [
        'Industrie pharmaceutique',
        "Déploiement d'un projet d'entreprise sur la charge de travail avec plus de 1 000 collaborateurs mobilisés"
      ],
      ['Industrie pharmaceutique', 'Refonte du service Administration des Ventes'],
      [
        'Solutions RH',
        'Responsable du chantier Change Management dans le cadre de la refonte mondiale des activités de Middle Office'
      ],
      [
        'Conseil en ingénierie',
        "Accompagnement d'une start-up en forte croissance: formalisation de l'ambition et feuille de route"
      ],
      [
        'Industrie pharmaceutique',
        "Conception et animation d'un programme de développement managérial pour plus de 100 managers"
      ],
      [
        'Transport & Mobilité',
        "Accompagnement à l'ouverture à la concurrence: organisation, offre de service, processus et culture managériale"
      ],
      ['Industrie pharmaceutique', 'Diagnostic et optimisation du processus S&OP']
    ],
    profile: {
      eyebrow: 'Qui je suis',
      title: 'Jean-Gabriel Michaud',
      role: 'Consultant indépendant - Lyon',
      paragraphs: [
        "Mes domaines d'intervention sont résolument variés : stratégie, organisation, processus, conduite du changement, développement managérial, coaching.",
        "Depuis 2022, une grande partie de mes missions porte sur la culture d'entreprise, dont j'ai fait ma spécialité… et un sujet que j'affectionne particulièrement, en ceci qu'il touche à tous les aspects du quotidien de travail."
      ]
    },
    timeline: [
      ['2021 -', 'Consultant indépendant', 'JGM Advisory - Lyon'],
      ['2015 - 2021', 'Directeur Associé, en charge du bureau de Lyon', 'Alixio Change Management - Lyon'],
      ['2005 - 2015', 'Directeur', 'Equinox Consulting - Paris'],
      ['2004 - 2005', 'Analyste financier - Amérique Latine', 'Crédit Agricole CIB - New York'],
      [
        'Formation',
        'ESCP Business School - Programme Grande École, majeure Finance',
        'Certification Coach - ESSEC Business School (formation continue – 2017)'
      ]
    ],
    contact: {
      eyebrow: 'Travaillons ensemble',
      title: 'Un projet, une mission, une question ?',
      intro: 'Écrivez-moi directement pour ouvrir un premier échange.',
      emailCta: 'Envoyer un email',
      copyCta: "Copier l'email",
      emailLabel: 'Email',
      locationLabel: 'Localisation',
      locationText: "Interventions en France et à l'international",
      linkedinLabel: 'LinkedIn'
    },
    footer: '© 2026 JGM Advisory - Jean-Gabriel Michaud · Lyon, France',
    noscript:
      "Jean-Gabriel Michaud, consultant indépendant à Lyon, accompagne les organisations sur leurs transformations, leur organisation, leur culture d'entreprise, la conduite du changement et le développement managérial."
  },
  en: {
    meta: {
      title: 'JGM Advisory - Transformation & organization advisory',
      description:
        'JGM Advisory, independent advisory practice based in Lyon. Jean-Gabriel Michaud supports transformation, organization design, corporate culture, change management and leadership development programs.',
      ogDescription:
        'I support organizations end to end through transformations with high organizational and human stakes.',
      locale: 'en_US'
    },
    ui: {
      skipLink: 'Skip to main content',
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
      navLabel: 'Main navigation',
      mainLabel: 'Main content',
      languageLabel: 'Choose language',
      serviceTabsHelp:
        'Select an area of expertise to display its details. Use the arrow keys to move between areas.',
      detailHint: 'View details',
      proofLabel: 'Key figures',
      emailCopied: 'Email copied',
      sendEmailLabel: 'Send an email to Jean-Gabriel Michaud',
      copyEmailLabel: 'Copy email address',
      linkedinLabel: "Jean-Gabriel Michaud's LinkedIn profile, opens in a new tab",
      portraitAlt: 'Portrait of Jean-Gabriel Michaud',
      aboutPortraitAlt: 'Illustrated portrait of Jean-Gabriel Michaud'
    },
    navItems: [
      ['Expertise', '#offre'],
      ['Approach', '#approche'],
      ['References', '#references'],
      ['Profile', '#parcours'],
      ['Contact', '#contact']
    ],
    hero: {
      eyebrow: 'Independent advisory in Lyon',
      title: 'JGM Advisory',
      subtitleLead: 'I support your transformations end to end',
      subtitleAccent: 'when the organizational and human stakes are high.',
      intro:
        'Reorganizations, processes, operating models, management — complex topics handled with rigor and commitment.',
      primaryCta: "Let's work together",
      secondaryCta: 'References'
    },
    proofPoints: [
      { value: '22 years', suffix: 'of experience', label: 'in advisory and transformation' },
      { value: 'SMEs, mid-size companies, groups', label: 'organizations of varied sizes and cultures' },
      { value: 'France & international', label: 'assignments in Lyon, across France and beyond' }
    ],
    about: {
      eyebrow: 'About',
      paragraphs: [
        'Based in Lyon, I am an independent consultant with more than 22 years of experience supporting organizations of every size — growing SMEs, mid-market companies and international groups — on transformation, organization and change-management projects.',
        'I work with executive committees as well as field teams, on large-scale transformations and targeted operational initiatives.'
      ],
      cta: 'Learn more about my background'
    },
    offer: {
      eyebrow: 'Service offering',
      title: 'From strategy to operations, without artificial boundaries.',
      note:
        'For large-scale programs, I can also work as part of a team with external partners, depending on the needs of the assignment.'
    },
    services: [
      {
        number: '01',
        title: 'Operational transformation support',
        short: 'Structure, steer, engage.',
        illustration: '/assets/illustrations/operational-support.png',
        description:
          'Structuring and steering transformation projects, shaping the narrative and storytelling, and setting up change-management mechanisms. Practical support from initial framing through field implementation.',
        points: [
          'Definition of the transformation trajectory and plan',
          'Design of the narrative and change-management mechanisms',
          'Day-to-day operational support',
          'Interface between project teams and stakeholders',
          'Production and formalization of key deliverables'
        ]
      },
      {
        number: '02',
        title: 'Organization design',
        short: 'Redesign roles and governance.',
        illustration: '/assets/illustrations/organization-design.png',
        description: 'Creation or redesign of departments, functions or services.',
        points: [
          'Organizational diagnosis',
          'Target organization design',
          'Roles, responsibilities and governance',
          'Deployment plan and roadmaps',
          'Support for the first 100 days'
        ]
      },
      {
        number: '03',
        title: 'Operational effectiveness',
        short: 'Make work simpler, stronger and more reliable.',
        illustration: '/assets/illustrations/operational-effectiveness.png',
        description:
          'Improving processes and ways of working to gain simplicity, reliability and impact.',
        points: [
          'Mapping of current processes',
          'Analysis of pain points and root causes',
          'Redesign of operating modes',
          'Measurement and tracking of outcomes'
        ]
      },
      {
        number: '04',
        title: 'Corporate culture',
        short: 'Align practices with ambition.',
        illustration: '/assets/illustrations/corporate-culture.png',
        description:
          'Defining a corporate culture, or shifting an existing one, to make the company more distinctive and align internal ways of working with its challenges.',
        points: [
          'Quantitative and qualitative culture diagnosis',
          'Design of the target culture model',
          'Translation into ways of working and managing',
          'Adoption mechanisms at small or large scale'
        ]
      },
      {
        number: '05',
        title: 'Mobilization & engagement',
        short: 'Build buy-in around strategic topics.',
        illustration: '/assets/illustrations/mobilization-engagement.png',
        description:
          'Designing mechanisms that mobilize an entire organization around a transformation or strategic topic.',
        points: [
          'Transformation narrative and promise',
          'Mobilizing events',
          'Management community facilitation',
          'Measurement of engagement and buy-in'
        ]
      },
      {
        number: '06',
        title: 'Coaching & leadership development',
        short: 'Strengthen postures and cooperation.',
        illustration: '/assets/illustrations/leadership-development.png',
        description: 'Individual or collective leadership support focused on posture and capabilities.',
        points: [
          'Individual coaching for managers and executives',
          'Collective development programs',
          'Leadership seminars',
          'Executive-team cooperation'
        ]
      }
    ],
    approachSection: {
      eyebrow: 'My approach',
      titleLead: 'Not just a method.',
      titleGold: 'A way of being.',
      introLead: 'What guides every assignment.',
      introGold: ''
    },
    approach: [
      [
        '01',
        'Rigor',
        'A structured approach, proven methods, carefully crafted deliverables, total commitment... I know what you are entitled to expect from an advisory engagement. After 16 years in consulting firms, I bring the know-how and professional standards the consulting profession requires.'
      ],
      [
        '02',
        'Respect',
        'Respect for employees — that goes without saying — but also respect for your agenda, your constraints, your pace and your perceptions. I know every assignment creates stress and additional work: I make it a priority to minimize both.'
      ],
      [
        '03',
        'Nuance',
        'Your projects deserve better than certainties, reflexes and commonplaces. I arrive with a method and questions as much as with answers — and I always make a point of testing what I think I know against your own convictions and lived experience.'
      ],
      [
        '04',
        'Simplicity',
        'I believe in the strength of simplicity — the kind that shows up in working relationships through courtesy, humility, availability, temperance and good humor. The kind that puts things into perspective and invites everyone to step back... so complexity is never added to complexity.'
      ]
    ],
    referencesSection: {
      eyebrow: 'References',
      title: 'Selected assignments completed over the past 24 months.',
      intro: ''
    },
    references: [
      ['Tourism & Hospitality', 'Definition of a new management model aligned with the renewed corporate culture'],
      ['Employee benefits', 'Design of a corporate culture and deployment across 29 countries'],
      [
        'Pharmaceutical industry',
        'Deployment of a company-wide workload initiative involving more than 1,000 employees'
      ],
      ['Pharmaceutical industry', 'Redesign of the Sales Administration function'],
      [
        'HR solutions',
        'Change-management workstream lead for the global redesign of Middle Office activities'
      ],
      [
        'Engineering consulting',
        'Support for a fast-growing startup: formalizing the ambition and roadmap'
      ],
      [
        'Pharmaceutical industry',
        'Design and facilitation of a leadership development program for more than 100 managers'
      ],
      [
        'Transport & Mobility',
        'Support with market opening: organization, service offering, processes and management culture'
      ],
      ['Pharmaceutical industry', 'Diagnosis and optimization of the S&OP process']
    ],
    profile: {
      eyebrow: 'Who I am',
      title: 'Jean-Gabriel Michaud',
      role: 'Independent consultant - Lyon',
      paragraphs: [
        'My areas of work are deliberately broad: strategy, organization, processes, change management, leadership development and coaching.',
        'Since 2022, much of my work has focused on corporate culture. It has become my specialty, and a subject I am particularly drawn to because it touches every aspect of day-to-day working life.'
      ]
    },
    timeline: [
      ['2021 -', 'Independent consultant', 'JGM Advisory - Lyon'],
      ['2015 - 2021', 'Partner, in charge of the Lyon office', 'Alixio Change Management - Lyon'],
      ['2005 - 2015', 'Director', 'Equinox Consulting - Paris'],
      ['2004 - 2005', 'Financial analyst - Latin America', 'Crédit Agricole CIB - New York'],
      [
        'Education',
        'ESCP Business School - Grande École program, Finance major',
        'Certified Coach - ESSEC Business School (executive education – 2017)'
      ]
    ],
    contact: {
      eyebrow: "Let's work together",
      title: 'A project, an assignment, a question?',
      intro: 'Write to me directly to open a first conversation.',
      emailCta: 'Send an email',
      copyCta: 'Copy email',
      emailLabel: 'Email',
      locationLabel: 'Location',
      locationText: 'Assignments in France and internationally',
      linkedinLabel: 'LinkedIn'
    },
    footer: '© 2026 JGM Advisory - Jean-Gabriel Michaud · Lyon, France',
    noscript:
      'Jean-Gabriel Michaud, independent consultant based in Lyon, supports organizations on transformation, organization, corporate culture, change management and leadership development.'
  }
};
