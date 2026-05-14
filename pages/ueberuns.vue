<template>
  <div class="background osteo-page">
    <v-row class="ma-0 mb-7 bg pb-7 pa-0" style="width: 100%">
      <v-col cols="12">
        <HeaderComponent v-if="desktop || tabletHorizontal"></HeaderComponent>
        <HeadermobileComponent v-if="mobile || tablet"></HeadermobileComponent>
      </v-col>
    </v-row>

    <!-- HERO -->
    <section class="osteo-hero">
      <div class="osteo-container osteo-hero-grid">
        <div class="osteo-hero-content">
          <span class="osteo-eyebrow">Über mich · Andrea Bachem</span>
          <h1 class="osteo-title">
            Tiergesundheit mit Herz und Erfahrung
            <span class="osteo-title-accent">Andrea Bachem – staatlich geprüfte Tierarzthelferin</span>
          </h1>
          <p class="osteo-lead">
            Mein Name ist <strong>Andrea Bachem</strong>. Ich bin staatlich geprüfte Tierarzthelferin
            mit einer tiefen Leidenschaft für Tiere, die mich schon seit meiner Kindheit begleitet.
          </p>
          <p class="osteo-lead">
            Durch zahlreiche Aus- und Weiterbildungen habe ich mich auf die Gesundheit und das
            Wohlbefinden von Tieren spezialisiert – insbesondere von Hunden, Pferden und Katzen.
            Ich arbeite ganzheitlich und individuell, mit Fokus auf manuelle Therapie und
            Ernährungsberatung.
          </p>
        </div>
        <div class="osteo-hero-image">
          <img src="~/assets/Andrea.png" alt="Andrea Bachem – Tiergesundheitszentrum"/>
        </div>
      </div>
    </section>

    <!-- CONTENT -->
    <section class="osteo-content">
      <div class="osteo-container">
        <div class="osteo-text-block">
          <h2 class="osteo-h2">Meine Qualifikationen</h2>
          <ul class="qual-grid">
            <li>
              <span class="qual-dot"/>
              <div>
                <strong>Tierphysiotherapie (FAT)</strong>
                Bewegungstherapie und Rehabilitation für Hunde, Pferde und Katzen.
              </div>
            </li>
            <li>
              <span class="qual-dot"/>
              <div>
                <strong>Tierosteopathie</strong>
                Ausbildung bei Welter-Böhmer und Betina Oberstassen. Ganzheitliche Therapie zur
                Lösung von Blockaden.
              </div>
            </li>
            <li>
              <span class="qual-dot"/>
              <div>
                <strong>Manuelle Therapie & Neurodynamik</strong>
                Ausbildung bei Sabine Harrer zur Schmerzlinderung und Funktionsverbesserung des
                Bewegungsapparates.
              </div>
            </li>
            <li>
              <span class="qual-dot"/>
              <div>
                <strong>Akupunktur im Bewegungsapparat</strong>
                Spezialisierung zur Durchblutungsförderung und Schmerzreduktion.
              </div>
            </li>
            <li>
              <span class="qual-dot"/>
              <div>
                <strong>Dorntherapie & Chiropraktik</strong>
                Ausbildung bei Susanne Schmitt (Dorn) und ATM (Chiropraktik) für
                Wirbelsäulenbehandlungen.
              </div>
            </li>
          </ul>
        </div>

        <div class="osteo-text-block">
          <h2 class="osteo-h2">Weitere Qualifikationen & Seminare</h2>
          <ul class="osteo-indication-grid">
            <li><span class="osteo-dot"/>Röntgendiagnostik und rassetypische Erkrankungen</li>
            <li><span class="osteo-dot"/>Faszienakupunktur und Stresspunkttherapie</li>
            <li><span class="osteo-dot"/>Orthopädischer Untersuchungsgang, Sportphysiotherapie</li>
            <li><span class="osteo-dot"/>Faszientherapie (Angelina Spix), Dry Needling (DIPO)</li>
            <li><span class="osteo-dot"/>Ernährungsberatung für Hunde und Pferde</li>
          </ul>
        </div>

        <div class="osteo-text-block">
          <h2 class="osteo-h2">Dozentin & Schulungen</h2>
          <p>
            Als Dozentin biete ich praxisnahe Schulungen an – für Tierbesitzer, Therapeuten und
            Interessierte. Inhalte sind unter anderem:
          </p>
          <ul class="osteo-indication-grid">
            <li><span class="osteo-dot"/>Dorntherapie am Pferd</li>
            <li><span class="osteo-dot"/>Kinesiologie-Taping für Pferd und Hund</li>
            <li><span class="osteo-dot"/>Biomechanik, Massage und Bewegungstherapie beim Pferd</li>
          </ul>
        </div>

        <div class="osteo-text-block">
          <h2 class="osteo-h2">Mein Versprechen an dich und dein Tier</h2>
          <p>
            Ich bilde mich stetig weiter, um Tierhaltern und ihren Tieren die bestmögliche,
            individuelle Betreuung zu bieten. <strong>Das Tierwohl steht bei mir immer an erster
            Stelle.</strong>
          </p>
          <p class="signature">Eure Andrea Bachem</p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="osteo-cta">
      <div class="osteo-container">
        <div class="osteo-cta-card">
          <div>
            <h2 class="osteo-cta-title">Lust auf einen persönlichen Termin?</h2>
            <p class="osteo-cta-text">
              Ich nehme mir Zeit für dich und dein Tier – ausführliche Anamnese, ganzheitliche
              Therapie und ehrliche Beratung.
            </p>
          </div>
          <NuxtLink to="/" class="osteo-cta-btn" title="Termin vereinbaren">
            Termin vereinbaren ›
          </NuxtLink>
        </div>
      </div>
    </section>

    <FooterComponent/>
  </div>
</template>

<script setup>
useHead({
  htmlAttrs: { lang: 'de' },
  title: 'Andrea Bachem Chiropraktik Osteopathie Ernährungsberatung',
  meta: [
    { name: 'description', content: 'Andrea Bachem – Staatlich geprüfte Tierarzthelferin mit Spezialisierung auf Tierphysiotherapie, Osteopathie und Ernährungsberatung.' },
    { name: 'keywords', content: 'Tierphysiotherapie, Tierosteopathie, Dorntherapie, Akupunktur, manuelle Therapie, Hunde, Pferde, Katzen, Andrea Bachem, Tiertherapie, Tiergesundheit, Bewegungstherapie, Tierdozentin' },
    { name: 'robots', content: 'index, follow' },
    { name: 'author', content: 'Andrea Bachem' },
    { name: 'publisher', content: 'Andrea Bachem' },
    { property: 'og:title', content: 'Über uns – Andrea Bachem | Tiergesundheitszentrum Erftstadt' },
    { property: 'og:description', content: 'Andrea Bachem – Staatlich geprüfte Tierarzthelferin mit Spezialisierung auf Tierphysiotherapie, Osteopathie und Ernährungsberatung.' },
    { property: 'og:image', content: 'https://tier-gesundheitszentrum.com/favicon.png' },
    { property: 'og:url', content: 'https://tier-gesundheitszentrum.com/ueberuns' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Über uns – Andrea Bachem | Tiergesundheitszentrum Erftstadt' },
    { name: 'twitter:description', content: 'Andrea Bachem – Tierphysiotherapie, Osteopathie, Ernährungsberatung & mehr für Hund, Pferd und Katze.' },
    { name: 'twitter:image', content: 'https://tier-gesundheitszentrum.com/favicon.png' },
  ],
  link: [
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'canonical', href: 'https://tier-gesundheitszentrum.com/ueberuns' },
  ],
});
</script>

<script>
import { useScreenStore } from "~/stores/screen.js";

export default {
  name: 'ueberuns',
  computed: {
    wide() { return useScreenStore().wide; },
    desktop() { return useScreenStore().desktop; },
    mobile() { return useScreenStore().mobile; },
    tablet() { return useScreenStore().tablet; },
    tabletHorizontal() { return useScreenStore().tabletHorizontal; },
  },
};
</script>

<style scoped>
.osteo-page { min-height: 100vh; overflow-y: auto; }
.osteo-container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }

/* HERO */
.osteo-hero { padding: 40px 0 60px; }
.osteo-hero-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 48px;
  align-items: center;
}
.osteo-hero-content { color: #fff; }
.osteo-eyebrow {
  display: inline-block;
  font-family: "Montserrat", sans-serif;
  font-size: 0.82rem; font-weight: 600; letter-spacing: 0.18em;
  text-transform: uppercase; color: #fff;
  padding: 8px 18px;
  border: 1px solid rgba(255,255,255,0.55);
  border-radius: 2px;
  margin-bottom: 24px;
  background: rgba(0,0,0,0.25);
}
.osteo-title {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: clamp(2rem, 3.6vw, 3rem);
  line-height: 1.18;
  color: #fff;
  margin: 0 0 18px;
}
.osteo-title-accent {
  display: block;
  font-weight: 400;
  font-style: italic;
  font-size: 0.6em;
  color: rgb(0, 130, 194);
  margin-top: 10px;
}
.osteo-lead {
  font-family: "Montserrat", sans-serif;
  font-size: 1.05rem;
  line-height: 1.75;
  color: rgba(255,255,255,0.9);
  max-width: 620px;
  margin: 0 0 14px;
}
.osteo-lead strong { color: rgb(0, 130, 194); font-weight: 600; }
.osteo-hero-image {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.08);
  max-width: 360px;
  width: 100%;
  margin: 0 auto;
  line-height: 0;
  background: rgba(0,0,0,0.15);
}
.osteo-hero-image img {
  width: 100%;
  height: auto;
  display: block;
}

/* CONTENT */
.osteo-content { padding: 30px 0 60px; }
.osteo-text-block {
  background: rgba(255,255,255,0.95);
  border-left: 3px solid rgb(0, 130, 194);
  border-radius: 6px;
  padding: 28px 32px;
  margin: 0 auto 20px;
  max-width: 980px;
  box-shadow: 0 4px 18px rgba(0,0,0,0.25);
  font-family: "Montserrat", sans-serif;
  color: #2c2a2a;
}
.osteo-h2 {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 1.4rem;
  color: #1a1a1a;
  margin: 0 0 14px;
  line-height: 1.3;
}
.osteo-text-block p {
  font-family: "Montserrat", sans-serif;
  font-size: 0.98rem;
  line-height: 1.75;
  color: #2c2a2a;
  margin: 0 0 12px;
}
.osteo-text-block p:last-child { margin-bottom: 0; }
.osteo-text-block strong { color: rgb(0, 130, 194); }

/* QUALIFIKATIONEN GRID */
.qual-grid {
  list-style: none;
  padding: 0;
  margin: 4px 0 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px 28px;
}
.qual-grid li {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}
.qual-grid div {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.qual-grid strong {
  color: rgb(0, 130, 194);
  font-size: 0.98rem;
  margin-bottom: 4px;
}
.qual-grid li > div {
  font-size: 0.92rem;
  line-height: 1.55;
  color: #2c2a2a;
}
.qual-dot {
  flex-shrink: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgb(0, 130, 194);
  margin-top: 7px;
}

/* INDIKATIONEN / LISTS */
.osteo-indication-grid {
  list-style: none;
  padding: 0;
  margin: 14px 0 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px 24px;
}
.osteo-indication-grid li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 0.95rem;
  line-height: 1.5;
  color: #2c2a2a;
}
.osteo-dot {
  flex-shrink: 0;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgb(0, 130, 194);
  margin-top: 8px;
}

.signature {
  margin-top: 18px;
  font-style: italic;
  font-weight: 600;
  color: rgb(0, 100, 160);
}

/* CTA */
.osteo-cta { padding: 20px 0 60px; }
.osteo-cta-card {
  max-width: 980px;
  margin: 0 auto;
  background: linear-gradient(135deg, rgb(0, 130, 194) 0%, rgb(0, 100, 160) 100%);
  border-radius: 8px;
  padding: 36px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 28px;
  box-shadow: 0 8px 28px rgba(0,0,0,0.35);
}
.osteo-cta-title {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 1.5rem;
  color: #fff;
  margin: 0 0 8px;
}
.osteo-cta-text {
  font-family: "Montserrat", sans-serif;
  font-size: 0.98rem;
  line-height: 1.65;
  color: rgba(255,255,255,0.92);
  margin: 0;
  max-width: 560px;
}
.osteo-cta-btn {
  display: inline-block;
  background: #fff;
  color: rgb(0, 130, 194);
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 1rem;
  padding: 14px 26px;
  border-radius: 30px;
  text-decoration: none;
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.18);
  transition: transform 0.15s, box-shadow 0.15s;
}
.osteo-cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.25);
}

/* RESPONSIVE */
@media (max-width: 1100px) {
  .osteo-hero-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .osteo-hero-image { max-width: 280px; }
  .qual-grid { grid-template-columns: 1fr; }
}
@media (max-width: 640px) {
  .osteo-hero { padding: 24px 0 36px; }
  .osteo-content { padding: 20px 0 40px; }
  .osteo-container { padding: 0 16px; }
  .osteo-title { font-size: 1.7rem; line-height: 1.2; }
  .osteo-lead { font-size: 0.96rem; }
  .osteo-text-block { padding: 22px 18px; }
  .osteo-h2 { font-size: 1.2rem; }
  .osteo-indication-grid { grid-template-columns: 1fr; }
  .osteo-cta-card {
    flex-direction: column;
    text-align: center;
    padding: 28px 22px;
    gap: 20px;
  }
  .osteo-cta-title { font-size: 1.3rem; }
  .osteo-hero-image { max-width: 240px; }
}

a { text-decoration: none; color: inherit; cursor: pointer; }
a:focus { outline: 2px solid rgb(0, 130, 194); }
</style>
