const bucketUrl = process.env.NEXT_PUBLIC_SUPABASE_URL + '/storage/v1/object/public/images';

// Image paths for artswisdom.com
// All images organized in public/images/{category}/

export const images = {
  // Logo
  logo: {
    header: `${bucketUrl}/logo/header-logo.png`,
    main: `${bucketUrl}/logo/logo-square.png`,
    symbol: `${bucketUrl}/logo/logo-symbol.png`,
    basic: `${bucketUrl}/logo/logo-default.png`,
    expanded: `${bucketUrl}/logo/logo-graphic.png`,
    lettermark: `${bucketUrl}/logo/logo-lettermark-ko.png`,
    brochure: `${bucketUrl}/logo/logo-brochure.png`,
    vertical: `${bucketUrl}/logo/logo-default-tall.png`,
  },

  // Hero / Background
  hero: {
    main: `${bucketUrl}/hero/hero-bg.jpg`,
    slide1: `${bucketUrl}/hero/main-1.jpg`,
    slide2: `${bucketUrl}/hero/main-2.jpg`,
    slide3: `${bucketUrl}/hero/main-3.jpg`,
  },

  // CEO
  ceo: {
    main: `${bucketUrl}/hero/ceo-portrait.jpg`,
    thumbnail: `${bucketUrl}/hero/ceo-portrait-sm.jpg`,
  },

  // Core Values (Hero section)
  values: {
    differentiation: `${bucketUrl}/values/differentiation.png`,
    inclusivity: `${bucketUrl}/values/inclusion.png`,
    connectivity: `${bucketUrl}/values/connection.png`,
  },

  // Timeline / History
  timeline: {
    2017: `${bucketUrl}/timeline/2017-mobile.jpg`,
    2018: `${bucketUrl}/timeline/2018-mobile.jpg`,
    2019: `${bucketUrl}/timeline/2019-mobile.jpg`,
    2020: `${bucketUrl}/timeline/2020-mobile.jpg`,
    2021: `${bucketUrl}/timeline/2021-mobile.jpg`,
    2022: `${bucketUrl}/timeline/2022-mobile.jpg`,
    2024: `${bucketUrl}/timeline/2024-desktop.jpg`,
    2025: `${bucketUrl}/timeline/2025-desktop.jpg`,
    desktop: {
      photo01: `${bucketUrl}/timeline/2020-desktop.png`,
      violin2018: `${bucketUrl}/timeline/2018-desktop.jpg`,
      photo2021: `${bucketUrl}/timeline/2021-desktop.jpg`,
      photo2022: `${bucketUrl}/timeline/2022-desktop.jpg`,
    },
  },

  // SDGs
  sdgs: {
    main: `${bucketUrl}/sdgs/un-sdgs.png`,
  },

  // CI Colors
  ci: {
    yellow: `${bucketUrl}/ci/color-yellow.png`,
    orange: `${bucketUrl}/ci/color-orange.png`,
    green: `${bucketUrl}/ci/color-green.png`,
    blue: `${bucketUrl}/ci/color-blue.png`,
  },

  // Social Media Icons
  social: {
    youtube: `${bucketUrl}/social/youtube.png`,
    instagram: `${bucketUrl}/social/instagram.png`,
    facebook: `${bucketUrl}/social/facebook.png`,
    naver: `${bucketUrl}/social/naver-blog.png`,
  },

  // Misc
  misc: {
    environment: `${bucketUrl}/sdgs/environment.png`,
    abstract: `${bucketUrl}/sdgs/abstract-bg.png`,
    earthDay: `${bucketUrl}/sdgs/earth-day.png`,
    activity: `${bucketUrl}/misc/photo-20210615.png`,
  },

  // Art / Paintings for slider
  art: {
    slide1: `${bucketUrl}/hero/main-1.jpg`,
    slide2: `${bucketUrl}/hero/main-2.jpg`,
    slide3: `${bucketUrl}/hero/main-3.jpg`,
  },

  // Programs (placeholder using activity image)
  programs: {
    dance: `${bucketUrl}/misc/photo-20210615.png`,
    default: `${bucketUrl}/hero/hero-bg.jpg`,
  },

  // Healsoma page
  healsoma: {
    hero: `${bucketUrl}/healsoma/hero-bg.jpg`,
    bgHarmony: `${bucketUrl}/healsoma/bg-harmony.jpg`,
    bgLeaves: `${bucketUrl}/healsoma/bg-leaves.jpg`,
    bodyfulness: `${bucketUrl}/healsoma/program-bodyfulness.png`,
    mindfulness: `${bucketUrl}/healsoma/program-mindfulness.png`,
    therapy: `${bucketUrl}/healsoma/program-therapy.png`,
    expressiveArt: `${bucketUrl}/healsoma/program-expressive-art.png`,
    groupCounseling: `${bucketUrl}/healsoma/program-group-counseling.png`,
    creativeDrama: `${bucketUrl}/healsoma/program-creative-drama.png`,
  },

  // Somatic Lab page
  somaticLab: {
    hero: `${bucketUrl}/somatic-lab/hero-bg.jpg`,
    certification: `${bucketUrl}/somatic-lab/certification-badge.png`,
    trinity: `${bucketUrl}/somatic-lab/trinity-concept.png`,
    trinityConcept: `${bucketUrl}/somatic-lab/trinity-concept.png`,
    differenceChart: `${bucketUrl}/somatic-lab/difference-chart.png`,
    methodology: `${bucketUrl}/somatic-lab/methodology-main.jpg`,
    methodologyMain: `${bucketUrl}/somatic-lab/methodology-main.jpg`,
    researchBadge: `${bucketUrl}/somatic-lab/research-badge.png`,
    programsHeader: `${bucketUrl}/somatic-lab/programs-header.jpg`,
    programIntroMain: `${bucketUrl}/somatic-lab/program-intro-main.jpg`,
    connectorIcon: `${bucketUrl}/somatic-lab/connector-icon.png`,
    ageGroups: {
      adolescent: `${bucketUrl}/somatic-lab/age-adolescent.jpg`,
      youngAdult: `${bucketUrl}/somatic-lab/age-young-adult.jpg`,
      middle: `${bucketUrl}/somatic-lab/age-middle.jpg`,
      elderly: `${bucketUrl}/somatic-lab/age-elderly.jpg`,
      athletes: `${bucketUrl}/somatic-lab/age-athletes.jpg`,
      entertainment: `${bucketUrl}/somatic-lab/age-entertainment.jpg`,
    },
    ageAdolescent: `${bucketUrl}/somatic-lab/age-adolescent.jpg`,
    ageYoungAdult: `${bucketUrl}/somatic-lab/age-young-adult.jpg`,
    ageMiddle: `${bucketUrl}/somatic-lab/age-middle.jpg`,
    ageElderly: `${bucketUrl}/somatic-lab/age-elderly.jpg`,
    ageAthletes: `${bucketUrl}/somatic-lab/age-athletes.jpg`,
    ageEntertainment: `${bucketUrl}/somatic-lab/age-entertainment.jpg`,
    researchers: {
      moon: `${bucketUrl}/somatic-lab/researcher-moon.png`,
      choiMira: `${bucketUrl}/somatic-lab/researcher-choi-mira.png`,
      lee: `${bucketUrl}/somatic-lab/researcher-lee.png`,
      jung: `${bucketUrl}/somatic-lab/researcher-jung.png`,
      choiEunhwa: `${bucketUrl}/somatic-lab/researcher-choi-eunhwa.png`,
    },
    programImages: {
      ballet: `${bucketUrl}/somatic-lab/program-ballet.jpg`,
      labanDance: `${bucketUrl}/somatic-lab/program-laban-dance.jpg`,
      healingYoga: `${bucketUrl}/somatic-lab/program-healing-yoga.jpg`,
      children: `${bucketUrl}/somatic-lab/program-children.jpg`,
      circleDance: `${bucketUrl}/somatic-lab/program-circle-dance.jpg`,
    },
  },

  // Daily Art page
  dailyArt: {
    hero: `${bucketUrl}/daily-art/hero-bg.png`,
    performanceGeneric: `${bucketUrl}/daily-art/performance-generic.png`,
    muniman: {
      intro: `${bucketUrl}/daily-art/muniman-intro.jpg`,
      performance1: `${bucketUrl}/daily-art/muniman-performance-1.png`,
      performance4: `${bucketUrl}/daily-art/muniman-performance-4.png`,
      performance5: `${bucketUrl}/daily-art/muniman-performance-5.png`,
      performance8: `${bucketUrl}/daily-art/muniman-performance-8.png`,
      audience: `${bucketUrl}/daily-art/muniman-audience.png`,
      recommend1: `${bucketUrl}/daily-art/muniman-recommend-1.jpg`,
      recommend2: `${bucketUrl}/daily-art/muniman-recommend-2.jpg`,
      recommend3: `${bucketUrl}/daily-art/muniman-recommend-3.jpg`,
      recommend4: `${bucketUrl}/daily-art/muniman-recommend-4.jpg`,
    },
    nukduri: {
      intro: `${bucketUrl}/daily-art/nukduri-intro.jpg`,
      performance5: `${bucketUrl}/daily-art/nukduri-performance-5.jpg`,
      performance2: `${bucketUrl}/daily-art/nukduri-performance-2.jpg`,
      performance2Full: `${bucketUrl}/daily-art/nukduri-performance-2-full.jpg`,
      recommend1: `${bucketUrl}/daily-art/nukduri-recommend-1.jpg`,
      recommend2: `${bucketUrl}/daily-art/nukduri-recommend-2.jpg`,
      recommend3: `${bucketUrl}/daily-art/nukduri-recommend-3.jpg`,
      recommend4: `${bucketUrl}/daily-art/nukduri-recommend-4.jpg`,
    },
    navichoom: {
      hero: `${bucketUrl}/daily-art/navichoom-hero.png`,
      performance: `${bucketUrl}/daily-art/navichoom-performance.jpg`,
      workshop: `${bucketUrl}/daily-art/navichoom-workshop.jpg`,
      recommend1: `${bucketUrl}/daily-art/navichoom-recommend-1.png`,
      recommend2: `${bucketUrl}/daily-art/navichoom-recommend-2.png`,
      recommend3: `${bucketUrl}/daily-art/navichoom-recommend-3.png`,
      recommend4: `${bucketUrl}/daily-art/navichoom-recommend-4.png`,
    },
  },

  // Business page
  business: {
    hero: `${bucketUrl}/business/hero-bg.png`,
    educationMain: `${bucketUrl}/business/education-main.png`,
    trainingSession: `${bucketUrl}/business/training-session.jpg`,
    workshopActivity: `${bucketUrl}/business/workshop-activity.jpg`,
    workshopActivitySm: `${bucketUrl}/business/workshop-activity-sm.jpg`,
    corporateShowcase: `${bucketUrl}/business/corporate-showcase.png`,
    eventService: `${bucketUrl}/business/event-service.png`,
    eventActivity: `${bucketUrl}/business/event-activity.jpg`,
    eventEngagement: `${bucketUrl}/business/event-engagement.jpg`,
    eventShowcase: `${bucketUrl}/business/event-showcase.jpg`,
    eventDocumentation: `${bucketUrl}/business/event-documentation.jpg`,
    eventMain: `${bucketUrl}/business/event-service.png`,
    eventReview: `${bucketUrl}/business/education-photo-3.png`,
    educationPhotos: {
      photo1: `${bucketUrl}/business/education-photo-1.png`,
      photo2: `${bucketUrl}/business/education-photo-2.png`,
      photo3: `${bucketUrl}/business/education-photo-3.png`,
    },
    educationRecommend: {
      partnership: `${bucketUrl}/business/recommend-partnership.jpg`,
      onestop: `${bucketUrl}/business/recommend-onestop.jpg`,
      professional: `${bucketUrl}/business/recommend-professional.jpg`,
      quality: `${bucketUrl}/business/recommend-quality.jpg`,
    },
    eventRecommend: {
      recommend1: `${bucketUrl}/business/event-recommend-1.jpg`,
      recommend2: `${bucketUrl}/business/event-recommend-2.jpg`,
      recommend3: `${bucketUrl}/business/event-recommend-3.jpg`,
      recommend4: `${bucketUrl}/business/event-recommend-4.jpg`,
    },
  },
} as const;

export type ImagePaths = typeof images;
