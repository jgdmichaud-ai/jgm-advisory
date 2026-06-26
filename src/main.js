import './styles.css';
import { languages, site, translations } from './content.js';
import { createI18n } from './i18n.js';

const app = document.querySelector('#app');
const i18n = createI18n({ translations, defaultLocale: 'fr' });
let cleanupInteractions = () => {};

function setMeta(selector, value) {
  const element = document.querySelector(selector);
  if (element && value) element.setAttribute('content', value);
}

function updateMetadata(content, locale) {
  document.documentElement.lang = locale;
  document.title = content.meta.title;
  setMeta('meta[name="description"]', content.meta.description);
  setMeta('meta[property="og:locale"]', content.meta.locale);
  setMeta('meta[property="og:title"]', content.meta.title);
  setMeta('meta[property="og:description"]', content.meta.ogDescription);
  setMeta('meta[name="twitter:title"]', content.meta.title);
  setMeta('meta[name="twitter:description"]', content.meta.description);
}

function languageOptions(locale) {
  return languages
    .map(
      (language) =>
        `<option value="${language.locale}" ${language.locale === locale ? 'selected' : ''}>${language.short}</option>`
    )
    .join('');
}

function serviceDetail(service, ui) {
  return `
    <div class="service-detail-content${service.illustration ? ' service-detail-content--with-illustration' : ''}">
      <p class="font-display text-3xl leading-none text-gold-400">${service.number}</p>
      <h3 class="mt-3 font-display text-3xl font-semibold leading-none text-white md:text-[2.55rem]">${service.title}</h3>
      <p class="mt-5 max-w-2xl text-[0.95rem] leading-7 text-white/70">${service.description}</p>
      <ul class="mt-6 grid gap-3 text-[0.95rem] text-white/80">
        ${service.points
          .map(
            (point) => `
              <li class="relative pl-6 before:absolute before:left-0 before:top-[0.72em] before:h-2 before:w-2 before:rounded-full before:bg-gold-400 before:shadow-[0_0_0_6px_rgba(215,180,106,0.12)]">
                ${point}
              </li>
            `
          )
          .join('')}
      </ul>
    </div>
    ${
      service.illustration
        ? `<img class="service-detail-illustration" src="${service.illustration}" alt="" aria-hidden="true" loading="lazy" />`
        : ''
    }
    <div class="service-progress" aria-hidden="true">
      <span data-service-progress></span>
    </div>
  `;
}

const referenceIcons = {
  benefits: '/assets/reference-icons/benefits.png',
  company: '/assets/reference-icons/company.png',
  engineering: '/assets/reference-icons/engineering.png',
  hr: '/assets/reference-icons/hr.png',
  medical: '/assets/reference-icons/medical.png',
  mobility: '/assets/reference-icons/mobility.png'
};

function normalizeText(value) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function referenceIconForSector(sector) {
  const normalizedSector = normalizeText(sector);

  if (normalizedSector.includes('pharmaceutique') || normalizedSector.includes('pharmaceutical')) {
    return referenceIcons.medical;
  }

  if (normalizedSector.includes('avantages') || normalizedSector.includes('benefits')) {
    return referenceIcons.benefits;
  }

  if (normalizedSector.includes('solutions rh') || normalizedSector.includes('hr solutions')) {
    return referenceIcons.hr;
  }

  if (
    normalizedSector.includes('transport') ||
    normalizedSector.includes('mobilite') ||
    normalizedSector.includes('mobility')
  ) {
    return referenceIcons.mobility;
  }

  if (normalizedSector.includes('ingenierie') || normalizedSector.includes('engineering')) {
    return referenceIcons.engineering;
  }

  return referenceIcons.company;
}

function render() {
  const content = i18n.t();
  const locale = i18n.locale;
  updateMetadata(content, locale);
  document.body.classList.remove('is-ready');

  app.innerHTML = `
    <a class="skip-link" href="#top">${content.ui.skipLink}</a>
    <div class="fixed left-0 top-0 z-[60] h-px w-full origin-left scale-x-0 bg-gradient-to-r from-gold-300 via-gold-500 to-white/70" data-scroll-progress aria-hidden="true"></div>
    <header class="fixed inset-x-0 top-0 z-50 border-b border-gold-500/[0.15] bg-navy-950/75 backdrop-blur-xl transition" data-header>
      <div class="relative h-[70px] w-full">
        <a href="#top" class="brand-link absolute left-3 top-0 text-white no-underline md:left-5" aria-label="JGM Advisory">
          <img class="brand-logo" src="${site.logo}" alt="JGM Advisory" width="5625" height="3750" />
        </a>
        <nav class="nav-panel pointer-events-none fixed left-3 right-3 top-[78px] grid translate-y-[-10px] gap-1 rounded-lg border border-gold-500/20 bg-navy-950/95 p-2 opacity-0 shadow-deep transition md:pointer-events-auto md:absolute md:left-1/2 md:right-auto md:top-1/2 md:flex md:-translate-x-1/2 md:-translate-y-1/2 md:items-center md:gap-5 md:border-0 md:bg-transparent md:p-0 md:opacity-100 md:shadow-none lg:gap-8" aria-label="${content.ui.navLabel}">
          ${content.navItems
            .map(
              ([label, href]) =>
                `<a class="nav-link${href === '#contact' ? ' nav-link--cta' : ''} rounded-md px-4 py-3 text-sm font-semibold text-white/70 no-underline transition hover:bg-white/[0.08] hover:text-white md:px-0 md:py-0 md:hover:bg-transparent" href="${href}" data-nav-link="${href}"><span>${label}</span></a>`
            )
            .join('')}
        </nav>
        <div class="language-switcher absolute right-20 top-1/2 -translate-y-1/2 md:right-8">
          <label class="sr-only" for="language-select">${content.ui.languageLabel}</label>
          <select class="language-select" id="language-select" data-language-select aria-label="${content.ui.languageLabel}">
            ${languageOptions(locale)}
          </select>
        </div>
        <button class="absolute right-5 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-md border border-white/20 text-white md:hidden" type="button" data-menu-toggle aria-label="${content.ui.menuOpen}" aria-expanded="false">
          <span class="relative block h-3 w-5 before:absolute before:left-0 before:top-0 before:h-px before:w-5 before:bg-current before:transition after:absolute after:bottom-0 after:left-0 after:h-px after:w-5 after:bg-current after:transition"></span>
        </button>
      </div>
    </header>

    <main id="top" tabindex="-1" aria-label="${content.ui.mainLabel}">
      <section class="hero-stage relative isolate flex items-center overflow-hidden bg-navy-950 px-6 pb-14 pt-28 text-white md:px-12 md:pb-16 md:pt-32" data-hero>
        <div class="hero-system absolute inset-0 -z-20" aria-hidden="true">
          <span class="hero-system__grid"></span>
        </div>
        <div class="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(7,16,31,0.86)_0%,rgba(7,16,31,0.68)_48%,rgba(7,16,31,0.34)_100%)]"></div>
        <div class="hero-spotlight absolute inset-0 -z-10"></div>
        <div class="site-shell">
          <p class="eyebrow hero-reveal">${content.hero.eyebrow}</p>
          <h1 class="hero-reveal mt-5 max-w-4xl font-display text-[2.65rem] font-semibold leading-[1.02] sm:text-[3.35rem] md:text-[4.15rem]">
            <span class="block text-white">${content.hero.subtitleLead}</span>
            <span class="block text-gold-300">${content.hero.subtitleAccent}</span>
          </h1>
          <p class="hero-reveal mt-7 max-w-2xl text-lg leading-8 text-white/75">${content.hero.intro}</p>
          <div class="hero-reveal mt-10 flex flex-col gap-3 sm:flex-row">
            <a class="premium-button premium-button-primary" href="#contact">${content.hero.primaryCta}</a>
            <a class="premium-button premium-button-secondary" href="#references">${content.hero.secondaryCta}</a>
          </div>
        </div>
      </section>

      <section class="bg-navy-900 px-6 text-white md:px-12" aria-label="${content.ui.proofLabel}" data-section>
        <ul class="site-shell grid list-none divide-y divide-white/10 p-0 md:grid-cols-3 md:divide-x md:divide-y-0">
          ${content.proofPoints
            .map(
              (point, index) => `
                <li class="reveal min-h-32 py-7 md:px-8" style="--reveal-delay: ${index * 90}ms">
                  <strong class="block font-display text-4xl font-semibold leading-none text-gold-300">${point.value}${point.suffix ? ` ${point.suffix}` : ''}</strong>
                  <span class="mt-3 block max-w-xs text-white/[0.64]">${point.label}</span>
                </li>
              `
            )
            .join('')}
        </ul>
      </section>

      <section class="site-shell py-16 md:py-24" data-section>
        <div class="reveal grid gap-8 border-y border-navy-900/10 py-10 md:grid-cols-[220px_1fr] md:gap-14 md:py-14">
          <div>
            <p class="eyebrow eyebrow-on-light pt-1">${content.about.eyebrow}</p>
            <img class="about-portrait mt-7" src="${site.aboutPortrait}" alt="${content.ui.aboutPortraitAlt}" loading="lazy" width="940" height="1672" />
          </div>
          <div class="max-w-4xl">
            <div class="space-y-6 text-xl font-medium leading-9 text-navy-950 sm:text-2xl sm:leading-10">
              ${content.about.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join('')}
            </div>
            <a class="light-button premium-button mt-8" href="#parcours">${content.about.cta}</a>
          </div>
        </div>
      </section>

      <section class="site-shell py-16 md:py-20" id="offre" data-section>
        <div class="reveal max-w-3xl">
          <p class="eyebrow eyebrow-on-light">${content.offer.eyebrow}</p>
          <h2 class="display-title text-5xl text-navy-950 md:text-[3.35rem]">${content.offer.title}</h2>
        </div>
        <div class="mt-7 grid gap-5 lg:grid-cols-[370px_1fr]">
          <p class="sr-only" id="service-tabs-help">${content.ui.serviceTabsHelp}</p>
          <div class="grid gap-2 sm:grid-cols-2 lg:grid-cols-1" role="tablist" aria-label="${content.offer.eyebrow}" aria-describedby="service-tabs-help">
            ${content.services
              .map(
                (service, index) => `
                  <button class="service-tab group reveal min-h-[78px] rounded-lg border border-navy-900/10 bg-white/75 p-3.5 text-left shadow-[0_8px_26px_rgba(7,16,31,0.06)] transition hover:-translate-y-0.5 hover:border-gold-500/75 hover:bg-white hover:shadow-premium md:min-h-[78px] ${index === 0 ? 'is-active border-gold-500/80 bg-white shadow-premium' : ''}" style="--reveal-delay: ${index * 70}ms" type="button" id="service-tab-${index}" data-service-index="${index}" role="tab" aria-controls="service-detail" aria-selected="${index === 0 ? 'true' : 'false'}" aria-pressed="${index === 0 ? 'true' : 'false'}" tabindex="${index === 0 ? '0' : '-1'}">
                    <span class="service-tab__num block font-display text-lg leading-none text-gold-700">${service.number}</span>
                    <strong class="service-tab__title mt-1 block font-display text-[1.12rem] leading-tight text-navy-950 md:text-[1.18rem]">${service.title}</strong>
                    <small class="service-tab__short mt-1 block text-[0.76rem] leading-4 text-slate-500">${service.short}</small>
                    <span class="service-tab__hint mt-1.5 inline-flex items-center gap-2 text-[0.64rem] font-bold uppercase text-gold-700">
                      ${content.ui.detailHint} <span aria-hidden="true">→</span>
                    </span>
                  </button>
                `
              )
              .join('')}
          </div>
          <article class="reveal premium-surface min-h-[420px] rounded-lg border border-gold-500/25 bg-[linear-gradient(155deg,rgba(19,35,61,0.97),rgba(7,16,31,0.99))] p-6 shadow-deep md:p-8" style="--reveal-delay: 140ms" id="service-detail" data-service-detail role="tabpanel" aria-labelledby="service-tab-0">
            ${serviceDetail(content.services[0], content.ui)}
          </article>
        </div>
        <p class="reveal mt-7 max-w-3xl border-l border-gold-500/50 pl-5 text-sm leading-6 text-slate-600" style="--reveal-delay: 220ms">${content.offer.note}</p>
      </section>

      <section class="bg-navy-950 px-6 py-20 text-white md:px-12 md:py-28" id="approche" data-section>
        <div class="site-shell">
          <div class="reveal max-w-3xl">
            <p class="eyebrow">${content.approachSection.eyebrow}</p>
            <h2 class="display-title text-5xl text-white md:text-6xl">${content.approachSection.titleLead}${content.approachSection.titleGold ? ` <span class="text-gold-300">${content.approachSection.titleGold}</span>` : ''}</h2>
            <p class="mt-6 text-lg leading-8 text-white/[0.64]">${content.approachSection.introLead}${content.approachSection.introGold ? ` <span class="text-gold-300">${content.approachSection.introGold}</span>` : ''}</p>
          </div>
          <div class="mt-12 grid border-l border-t border-white/[0.12] md:grid-cols-2">
            ${content.approach
              .map(
                ([number, title, text]) => `
                  <article class="reveal min-h-[320px] border-b border-r border-white/[0.12] bg-white/[0.03] p-7 md:p-9" style="--reveal-delay: ${Number(number) * 80}ms">
                    <div class="flex items-start justify-between gap-6">
                      <span class="font-display text-4xl text-gold-300">${number}</span>
                      <span class="mt-5 h-px flex-1 bg-gradient-to-r from-gold-300/35 to-transparent" aria-hidden="true"></span>
                    </div>
                    <h3 class="mt-8 font-display text-3xl font-semibold leading-none text-white md:text-[2.15rem]">${title}</h3>
                    <p class="mt-5 max-w-[38rem] text-[0.98rem] leading-8 text-white/[0.76]">${text}</p>
                  </article>
                `
              )
              .join('')}
          </div>
        </div>
      </section>

      <section class="site-shell py-20 md:py-28" id="references" data-section>
        <div class="reveal max-w-3xl">
          <p class="eyebrow eyebrow-on-light">${content.referencesSection.eyebrow}</p>
          <h2 class="display-title text-5xl text-navy-950 md:text-6xl">${content.referencesSection.title}</h2>
          ${content.referencesSection.intro ? `<p class="mt-6 text-lg leading-8 text-slate-600">${content.referencesSection.intro}</p>` : ''}
        </div>
        <div class="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          ${content.references
            .map(
              ([sector, mission], index) => `
                <article class="reference-card reveal min-h-[210px] rounded-lg border border-navy-900/10 bg-white p-7 shadow-[0_12px_34px_rgba(7,16,31,0.06)]" style="--reveal-delay: ${(index % 3) * 80}ms">
                  <div class="flex items-start justify-between gap-5">
                    <p class="m-0 font-bold text-gold-700">${sector}</p>
                    <span class="reference-icon-wrap" aria-hidden="true">
                      <img class="reference-icon" src="${referenceIconForSector(sector)}" alt="" loading="lazy" />
                    </span>
                  </div>
                  <h3 class="mt-5 text-base font-medium leading-7 text-navy-950">${mission}</h3>
                </article>
              `
            )
            .join('')}
        </div>
      </section>

      <section class="site-shell grid gap-12 border-t border-stone-300 py-20 md:grid-cols-[360px_1fr] md:gap-20 md:py-28" id="parcours" data-section>
        <aside class="reveal premium-surface overflow-hidden rounded-lg bg-navy-950 shadow-deep md:sticky md:top-28 md:self-start">
          <img class="aspect-[4/5] w-full object-cover saturate-[0.86]" src="${site.portrait}" alt="${content.ui.portraitAlt}" loading="lazy" />
          <div class="border-t border-gold-500/30 p-6 text-white">
            <strong class="block font-display text-3xl leading-none">${site.owner}</strong>
            <span class="mt-2 block text-white/[0.62]">${content.profile.role}</span>
          </div>
        </aside>
        <div class="reveal" style="--reveal-delay: 120ms">
          <p class="eyebrow eyebrow-on-light">${content.profile.eyebrow}</p>
          <h2 class="display-title text-5xl text-navy-950 md:text-6xl">${content.profile.title}</h2>
          <div class="mt-7 space-y-6 text-lg leading-8 text-slate-600">
            ${content.profile.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join('')}
          </div>
          <ol class="mt-10 list-none p-0">
            ${content.timeline
              .map(
                ([date, role, org]) => `
                  <li class="timeline-item grid gap-2 border-t border-stone-300 py-6 md:grid-cols-[150px_1fr] md:gap-8">
                    <time class="font-bold text-gold-700">${date}</time>
                    <div>
                      <strong class="block leading-6 text-navy-950">${role}</strong>
                      <span class="mt-1 block text-slate-500">${org}</span>
                    </div>
                  </li>
                `
              )
              .join('')}
          </ol>
        </div>
      </section>

      <section class="bg-[linear-gradient(135deg,rgba(7,16,31,0.99),rgba(19,35,61,0.99))] px-6 py-20 text-white md:px-12 md:py-28" id="contact" data-section>
        <div class="reveal mx-auto max-w-5xl">
          <p class="eyebrow">${content.contact.eyebrow}</p>
          <h2 class="display-title text-5xl text-white md:text-6xl">${content.contact.title}</h2>
          <p class="mt-6 max-w-2xl text-lg leading-8 text-white/[0.66]">${content.contact.intro}</p>
          <div class="mt-10 flex flex-col gap-3 sm:flex-row">
            <a class="premium-button premium-button-primary" href="mailto:${site.email}" aria-label="${content.ui.sendEmailLabel}">${content.contact.emailCta}</a>
            <button class="premium-button premium-button-secondary" type="button" data-copy-email="${site.email}" aria-label="${content.ui.copyEmailLabel} ${site.email}">${content.contact.copyCta}</button>
          </div>
          <dl class="mt-14 grid gap-4 md:grid-cols-3">
            <div class="rounded-lg border border-white/[0.12] bg-white/[0.055] p-6">
              <dt class="font-bold text-gold-300">${content.contact.emailLabel}</dt>
              <dd class="mt-2 m-0 text-white/75"><a class="underline decoration-gold-400/50 underline-offset-4" href="mailto:${site.email}">${site.email}</a></dd>
            </div>
            <div class="rounded-lg border border-white/[0.12] bg-white/[0.055] p-6">
              <dt class="font-bold text-gold-300">${content.contact.locationLabel}</dt>
              <dd class="mt-2 m-0 text-white/75">${site.location}<br />${content.contact.locationText}</dd>
            </div>
            <div class="rounded-lg border border-white/[0.12] bg-white/[0.055] p-6">
              <dt class="font-bold text-gold-300">${content.contact.linkedinLabel}</dt>
              <dd class="mt-2 m-0 text-white/75"><a class="underline decoration-gold-400/50 underline-offset-4" href="${site.linkedin}" target="_blank" rel="noreferrer" aria-label="${content.ui.linkedinLabel}">${site.owner}</a></dd>
            </div>
          </dl>
        </div>
      </section>
    </main>

    <footer class="flex flex-col gap-2 border-t border-white/10 bg-navy-950 px-6 py-8 text-white/[0.48] md:flex-row md:items-center md:justify-between md:px-12">
      <img class="footer-logo" src="${site.logo}" alt="JGM Advisory" width="5625" height="3750" loading="lazy" />
      <p class="m-0 text-sm">${content.footer}</p>
    </footer>

    <div class="pointer-events-none fixed bottom-5 left-5 right-5 z-[70] translate-y-3 rounded-md bg-gold-300 px-4 py-3 text-center font-bold text-navy-950 opacity-0 shadow-deep transition md:left-auto md:right-6 md:w-auto" data-toast role="status" aria-live="polite"></div>
  `;
}

function bindInteractions() {
  const content = i18n.t();
  const { services } = content;
  const controller = new AbortController();
  const { signal } = controller;
  const header = document.querySelector('[data-header]');
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const navPanel = document.querySelector('.nav-panel');
  const languageSelect = document.querySelector('[data-language-select]');
  const serviceButtons = [...document.querySelectorAll('[data-service-index]')];
  const serviceDetailEl = document.querySelector('[data-service-detail]');
  const copyButton = document.querySelector('[data-copy-email]');
  const toast = document.querySelector('[data-toast]');
  const progressBar = document.querySelector('[data-scroll-progress]');
  const navLinks = [...document.querySelectorAll('[data-nav-link]')];
  const sections = [...document.querySelectorAll('[id][data-section]')];
  const hero = document.querySelector('[data-hero]');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const serviceCycleDuration = 7200;
  let activeServiceIndex = 0;
  let serviceTimerId;
  let serviceRafId;
  let readyTimerId;
  let serviceVisibilityObserver;
  let revealObserver;
  let activeObserver;
  let serviceCycleStartedAt = 0;
  let serviceRemaining = serviceCycleDuration;
  let servicePaused = false;
  let serviceVisible = false;
  let swipeStartX = 0;
  let swipeStartY = 0;
  let swipeTracking = false;

  const updateHeader = () => {
    header?.classList.toggle('bg-navy-950/95', window.scrollY > 20);
    header?.classList.toggle('shadow-[0_14px_36px_rgba(0,0,0,0.22)]', window.scrollY > 20);

    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? window.scrollY / scrollable : 0;

    if (progressBar) {
      progressBar.style.transform = `scaleX(${Math.min(Math.max(progress, 0), 1)})`;
    }

  };

  const stopServiceCycle = () => {
    window.clearTimeout(serviceTimerId);
    window.cancelAnimationFrame(serviceRafId);
  };

  const closeMenu = () => {
    document.body.classList.remove('menu-open');
    navPanel?.classList.add('pointer-events-none', 'translate-y-[-10px]', 'opacity-0');
    menuToggle?.setAttribute('aria-expanded', 'false');
    menuToggle?.setAttribute('aria-label', content.ui.menuOpen);
  };

  const showToast = (message) => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.remove('translate-y-3', 'opacity-0');
    window.setTimeout(() => toast.classList.add('translate-y-3', 'opacity-0'), 2200);
  };

  const setServiceProgress = (progress) => {
    const progressBarEl = serviceDetailEl?.querySelector('[data-service-progress]');
    if (!progressBarEl) return;
    progressBarEl.style.transform = `scaleX(${Math.min(Math.max(progress, 0), 1)})`;
  };

  const runServiceProgress = () => {
    window.cancelAnimationFrame(serviceRafId);

    const tick = () => {
      if (servicePaused || prefersReducedMotion) return;
      const elapsed = performance.now() - serviceCycleStartedAt;
      setServiceProgress(elapsed / serviceCycleDuration);
      serviceRafId = window.requestAnimationFrame(tick);
    };

    tick();
  };

  const scheduleServiceCycle = (delay = serviceCycleDuration) => {
    if (prefersReducedMotion || !serviceDetailEl || !serviceVisible) return;

    window.clearTimeout(serviceTimerId);
    serviceRemaining = delay;
    servicePaused = false;
    serviceDetailEl.classList.remove('is-paused');
    serviceCycleStartedAt = performance.now() - (serviceCycleDuration - delay);
    setServiceProgress((serviceCycleDuration - delay) / serviceCycleDuration);
    runServiceProgress();

    serviceTimerId = window.setTimeout(() => {
      setActiveService((activeServiceIndex + 1) % services.length, { animate: true });
    }, delay);
  };

  const pauseServiceCycle = () => {
    if (prefersReducedMotion || servicePaused) return;

    servicePaused = true;
    serviceDetailEl?.classList.add('is-paused');
    window.clearTimeout(serviceTimerId);
    window.cancelAnimationFrame(serviceRafId);
    const elapsed = performance.now() - serviceCycleStartedAt;
    serviceRemaining = Math.max(serviceCycleDuration - elapsed, 600);
  };

  const resumeServiceCycle = () => {
    if (prefersReducedMotion || !servicePaused || !serviceVisible) return;
    scheduleServiceCycle(serviceRemaining);
  };

  const setActiveService = (index, options = {}) => {
    const service = services[index];
    if (!service || !serviceDetailEl) return;

    stopServiceCycle();
    activeServiceIndex = index;
    serviceButtons.forEach((item) => {
      const active = Number(item.dataset.serviceIndex) === index;
      item.classList.toggle('is-active', active);
      item.classList.toggle('border-gold-500/80', active);
      item.classList.toggle('bg-white', active);
      item.classList.toggle('shadow-premium', active);
      item.setAttribute('aria-selected', String(active));
      item.setAttribute('aria-pressed', String(active));
      item.setAttribute('tabindex', active ? '0' : '-1');
    });
    serviceDetailEl.setAttribute('aria-labelledby', `service-tab-${index}`);

    const finish = () => {
      serviceDetailEl.innerHTML = serviceDetail(service, content.ui);
      serviceDetailEl.classList.remove('is-switching');
      scheduleServiceCycle();
    };

    if (options.animate && !prefersReducedMotion) {
      serviceDetailEl.classList.add('is-switching');
      window.setTimeout(finish, 160);
    } else {
      finish();
    }
  };

  window.addEventListener('scroll', updateHeader, { passive: true, signal });
  window.addEventListener('resize', updateHeader, { passive: true, signal });
  updateHeader();

  readyTimerId = window.setTimeout(() => document.body.classList.add('is-ready'), 80);

  languageSelect?.addEventListener(
    'change',
    (event) => {
      i18n.setLocale(event.target.value);
      mount();
    },
    { signal }
  );

  menuToggle?.addEventListener(
    'click',
    () => {
      const nextOpen = !document.body.classList.contains('menu-open');
      document.body.classList.toggle('menu-open', nextOpen);
      menuToggle.setAttribute('aria-expanded', String(nextOpen));
      menuToggle.setAttribute('aria-label', nextOpen ? content.ui.menuClose : content.ui.menuOpen);
      navPanel?.classList.toggle('pointer-events-none', !nextOpen);
      navPanel?.classList.toggle('translate-y-[-10px]', !nextOpen);
      navPanel?.classList.toggle('opacity-0', !nextOpen);
    },
    { signal }
  );

  navPanel?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu, { signal }));

  serviceButtons.forEach((button) => {
    button.addEventListener(
      'click',
      () => {
        setActiveService(Number(button.dataset.serviceIndex), { animate: true });
      },
      { signal }
    );

    button.addEventListener(
      'keydown',
      (event) => {
        const currentIndex = Number(button.dataset.serviceIndex);
        const keyMap = {
          ArrowDown: 1,
          ArrowRight: 1,
          ArrowUp: -1,
          ArrowLeft: -1
        };

        if (event.key === 'Home' || event.key === 'End' || event.key in keyMap) {
          event.preventDefault();
          const nextIndex =
            event.key === 'Home'
              ? 0
              : event.key === 'End'
                ? services.length - 1
                : (currentIndex + keyMap[event.key] + services.length) % services.length;
          setActiveService(nextIndex, { animate: true });
          serviceButtons[nextIndex]?.focus();
        }
      },
      { signal }
    );
  });

  serviceDetailEl?.addEventListener('pointerenter', pauseServiceCycle, { signal });
  serviceDetailEl?.addEventListener('pointerleave', resumeServiceCycle, { signal });
  serviceDetailEl?.addEventListener('focusin', pauseServiceCycle, { signal });
  serviceDetailEl?.addEventListener('focusout', resumeServiceCycle, { signal });

  serviceDetailEl?.addEventListener(
    'touchstart',
    (event) => {
      if (event.touches.length !== 1) return;
      swipeStartX = event.touches[0].clientX;
      swipeStartY = event.touches[0].clientY;
      swipeTracking = true;
      pauseServiceCycle();
    },
    { passive: true, signal }
  );

  serviceDetailEl?.addEventListener(
    'touchmove',
    (event) => {
      if (!swipeTracking || event.touches.length !== 1) return;
      const deltaX = event.touches[0].clientX - swipeStartX;
      const deltaY = event.touches[0].clientY - swipeStartY;
      const isHorizontalSwipe = Math.abs(deltaX) > 18 && Math.abs(deltaX) > Math.abs(deltaY) * 1.35;
      serviceDetailEl.classList.toggle('is-swiping', isHorizontalSwipe);
      serviceDetailEl.style.setProperty('--swipe-offset', `${Math.max(Math.min(deltaX, 56), -56)}px`);
    },
    { passive: true, signal }
  );

  serviceDetailEl?.addEventListener(
    'touchend',
    (event) => {
      if (!swipeTracking) return;
      swipeTracking = false;
      serviceDetailEl.classList.remove('is-swiping');
      serviceDetailEl.style.setProperty('--swipe-offset', '0px');

      const touch = event.changedTouches[0];
      const deltaX = touch.clientX - swipeStartX;
      const deltaY = touch.clientY - swipeStartY;
      const isHorizontalSwipe = Math.abs(deltaX) > 54 && Math.abs(deltaX) > Math.abs(deltaY) * 1.4;

      if (isHorizontalSwipe) {
        const direction = deltaX < 0 ? 1 : -1;
        const nextIndex = (activeServiceIndex + direction + services.length) % services.length;
        setActiveService(nextIndex, { animate: true });
        return;
      }

      resumeServiceCycle();
    },
    { passive: true, signal }
  );

  serviceDetailEl?.addEventListener(
    'touchcancel',
    () => {
      swipeTracking = false;
      serviceDetailEl.classList.remove('is-swiping');
      serviceDetailEl.style.setProperty('--swipe-offset', '0px');
      resumeServiceCycle();
    },
    { passive: true, signal }
  );

  document.addEventListener(
    'visibilitychange',
    () => {
      if (document.hidden) pauseServiceCycle();
      else if (serviceVisible) resumeServiceCycle();
    },
    { signal }
  );

  if ('IntersectionObserver' in window && serviceDetailEl) {
    serviceVisibilityObserver = new IntersectionObserver(
      ([entry]) => {
        serviceVisible = entry.isIntersecting;

        if (serviceVisible) {
          if (servicePaused) resumeServiceCycle();
          else scheduleServiceCycle(serviceRemaining);
          return;
        }

        pauseServiceCycle();
      },
      { threshold: 0.45 }
    );
    serviceVisibilityObserver.observe(serviceDetailEl);
  } else {
    serviceVisible = true;
    scheduleServiceCycle();
  }

  copyButton?.addEventListener(
    'click',
    async () => {
      const email = copyButton.dataset.copyEmail;
      try {
        await navigator.clipboard.writeText(email);
        showToast(content.ui.emailCopied);
      } catch {
        showToast(email);
      }
    },
    { signal }
  );

  const revealTargets = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.14 }
    );
    revealTargets.forEach((target) => revealObserver.observe(target));
  } else {
    revealTargets.forEach((target) => target.classList.add('is-visible'));
  }

  if ('IntersectionObserver' in window && navLinks.length) {
    activeObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;
        const href = `#${visible.target.id}`;
        navLinks.forEach((link) => {
          const active = link.dataset.navLink === href;
          link.classList.toggle('is-active', active);
          if (active) link.setAttribute('aria-current', 'true');
          else link.removeAttribute('aria-current');
        });
      },
      { rootMargin: '-35% 0px -50% 0px', threshold: [0.1, 0.25, 0.5] }
    );
    sections.forEach((section) => activeObserver.observe(section));
  }

  if (hero && !prefersReducedMotion) {
    hero.addEventListener(
      'pointermove',
      (event) => {
        const rect = hero.getBoundingClientRect();
        hero.style.setProperty('--spotlight-x', `${event.clientX - rect.left}px`);
        hero.style.setProperty('--spotlight-y', `${event.clientY - rect.top}px`);
      },
      { signal }
    );
  }

  return () => {
    controller.abort();
    stopServiceCycle();
    window.clearTimeout(readyTimerId);
    serviceVisibilityObserver?.disconnect();
    revealObserver?.disconnect();
    activeObserver?.disconnect();
  };
}

function mount() {
  cleanupInteractions();
  render();
  cleanupInteractions = bindInteractions();
}

mount();
