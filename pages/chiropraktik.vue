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
      <div class="osteo-container">
        <div class="osteo-hero-content">
          <span class="osteo-eyebrow">Tierchiropraktik · Erftstadt</span>
          <h1 class="osteo-title">
            Was ist Tierchiropraktik?
            <span class="osteo-title-accent">Mobilität. Balance. Lebensfreude.</span>
          </h1>
          <p class="osteo-lead">
            Die Chiropraktik für Tiere ist eine ganzheitliche Therapieform, die auf die Mobilität der
            Wirbelsäule und die Funktion des Nervensystems abzielt. Schon kleine Blockaden in der
            Wirbelsäule oder den Gelenken können weitreichende Auswirkungen auf Muskulatur, Organe,
            Verhalten und Bewegungsabläufe haben.
          </p>
          <p class="osteo-lead">
            Durch gezielte, manuelle Impulse (Justierungen) wird die Beweglichkeit gefördert und die
            natürliche Balance des Körpers unterstützt – ganz ohne Medikamente oder invasive Eingriffe.
          </p>
        </div>
        <div class="osteo-hero-images">
          <div class="osteo-image-card">
            <v-img
                src="~/assets/bilderPages/chirolinks.webp"
                alt="Anatomisches Bild eines Katzenskeletts"
                cover
                class="osteo-img"
            />
          </div>
          <div class="osteo-image-card osteo-image-card--shift">
            <v-img
                src="~/assets/bilderPages/chirorechts.webp"
                alt="Chiropraktische Behandlung bei Andrea Bachem"
                cover
                class="osteo-img"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- CONTENT -->
    <section class="osteo-content">
      <div class="osteo-container">
        <div class="osteo-text-block">
          <h2 class="osteo-h2">Sanfte Justierungen für mehr Bewegungsfreiheit</h2>
          <p>
            In meiner Praxis lege ich großen Wert auf eine ruhige Atmosphäre und einen respektvollen
            Umgang mit deinem Tier. Die chiropraktischen Justierungen bei Hunden und Pferden erfolgen
            präzise, sanft und immer angepasst an die Anatomie und das Alter des Tieres. Ziel ist es,
            die Gelenkbeweglichkeit zu verbessern, muskuläre Dysbalancen auszugleichen und das
            Nervensystem zu entlasten.
          </p>
        </div>

        <div class="osteo-text-block osteo-indications">
          <h2 class="osteo-h2">Chiropraktik für Hund und Pferd – wann ist sie sinnvoll?</h2>
          <p>Typische Indikationen für eine chiropraktische Behandlung:</p>
          <ul class="osteo-indication-grid">
            <li><span class="osteo-dot"/>Lahmheiten und Gangbildveränderungen</li>
            <li><span class="osteo-dot"/>Rückenprobleme und Verspannungen</li>
            <li><span class="osteo-dot"/>Taktunreinheiten und Leistungsabfall beim Pferd</li>
            <li><span class="osteo-dot"/>Bewegungsunlust oder Schonhaltungen beim Hund</li>
            <li><span class="osteo-dot"/>Spondylose, Arthrose, Bandscheibenvorfälle</li>
            <li><span class="osteo-dot"/>Unruhe, Verhaltensveränderungen, Aggression oder Rückzug</li>
            <li><span class="osteo-dot"/>Reaktionen beim Satteln oder Heben</li>
            <li><span class="osteo-dot"/>Altersbedingte Einschränkungen der Mobilität</li>
          </ul>
          <p style="margin-top: 16px;">
            Besonders bei sportlich aktiven Hunden (z. B. Agility, Mantrailing, Jagd) oder
            Turnierpferden kann eine regelmäßige chiropraktische Betreuung helfen, Dysbalancen
            frühzeitig zu erkennen und vorzubeugen.
          </p>
        </div>

        <div class="osteo-text-block">
          <h2 class="osteo-h2">Für Tiere jeden Alters – vom Welpen bis zum Senior</h2>
          <p>
            Die Tierchiropraktik eignet sich für Hunde und Pferde jeden Alters. Junge Tiere
            profitieren von einer frühzeitigen Begleitung, um Fehlentwicklungen zu erkennen, ältere
            Tiere von der gezielten Förderung der Mobilität und Lebensqualität. Jede Behandlung wird
            individuell auf das jeweilige Tier abgestimmt – sanft, schmerzfrei und effektiv.
          </p>
          <p>
            In der Tierchiropraktik ist es daher besonders wichtig, den Zusammenhang zwischen
            strukturellen Problemen und funktionellen Störungen zu erkennen. Durch meine fundierte
            Ausbildung und jahrelange Erfahrung erkenne ich subtile Veränderungen und setze gezielte
            Impulse, um die Selbstregulation des Körpers zu aktivieren. Das Resultat: Ein gesünderer,
            beweglicherer und glücklicherer Hund oder ein leistungsfähigeres, entspannteres Pferd.
          </p>
        </div>

        <div class="osteo-text-block">
          <h2 class="osteo-h2">Indikationen für eine chiropraktische Behandlung</h2>
          <p>
            Die Anwendungsmöglichkeiten der Tierchiropraktik sind vielfältig. Typische Indikationen
            sind: Rückenprobleme, Arthrosen, Lahmheiten, Koordinationsstörungen, Spondylose,
            Muskelverspannungen, Bandscheibenvorfälle, Leistungsabfall, Taktunreinheiten,
            Schmerzreaktionen beim Satteln oder Heben, aber auch Verhaltensauffälligkeiten wie
            Aggression oder Rückzug.
          </p>
          <p>
            Besonders bei Hunden und Pferden, die im Sport aktiv sind, sei es beim Agility,
            Turniersport oder bei der Jagd kann eine chiropraktische Begleitung helfen,
            Fehlbelastungen frühzeitig zu erkennen und auszugleichen. Auch ältere Tiere profitieren
            enorm, da die Mobilität erhalten bleibt und Alterserscheinungen gelindert werden können.
          </p>
        </div>

        <div class="osteo-text-block osteo-author-block">
          <div class="osteo-author-text">
            <h2 class="osteo-h2">Für Hund und Pferd jeden Alters geeignet</h2>
            <p>
              Meine Tierchiropraktik richtet sich ausdrücklich an alle Altersklassen vom jungen
              Fohlen oder Welpen bis hin zum Senior. Die Behandlung ist schmerzfrei und wird stets
              individuell angepasst. Besonders ältere Tiere, die sich weniger bewegen oder bereits
              degenerative Veränderungen zeigen, reagieren positiv auf die wiedergewonnene
              Beweglichkeit.
            </p>
            <p>
              Aber auch junge Tiere sollten regelmäßig chiropraktisch untersucht werden, um
              Fehlentwicklungen frühzeitig zu erkennen. Denn: Je früher Fehlstellungen behoben werden,
              desto besser ist die Prognose für eine langfristige Gesundheit. In Erftstadt biete ich
              hierfür einen geschützten, ruhigen Rahmen, in dem sich dein Tier wohlfühlen kann.
            </p>
          </div>
          <div class="osteo-siegel-wrap">
            <div class="osteo-siegel" role="img" aria-label="Chiropraktik Siegel"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="osteo-faq">
      <div class="osteo-container">
        <div class="osteo-faq-header">
          <span class="osteo-eyebrow">Häufige Fragen</span>
          <h2 class="osteo-faq-title">Was du noch wissen solltest</h2>
          <p class="osteo-faq-sub">
            Die wichtigsten Antworten rund um die chiropraktische Behandlung deines Tieres.
          </p>
        </div>

        <div class="osteo-faq-list">
          <details v-for="(item, i) in faqs" :key="i" class="osteo-faq-item">
            <summary class="osteo-faq-question">
              <span>{{ item.q }}</span>
              <span class="osteo-faq-icon" aria-hidden="true">+</span>
            </summary>
            <div class="osteo-faq-answer">
              <p v-for="(line, j) in item.a" :key="j">{{ line }}</p>
            </div>
          </details>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="osteo-cta">
      <div class="osteo-container">
        <div class="osteo-cta-card">
          <div>
            <h2 class="osteo-cta-title">Bereit für einen Termin?</h2>
            <p class="osteo-cta-text">
              Lass uns gemeinsam schauen, was dein Tier braucht. Ich nehme mir Zeit für eine
              ausführliche Anamnese und eine individuelle chiropraktische Behandlung.
            </p>
          </div>
          <NuxtLink to="/" class="osteo-cta-btn" title="Kontakt aufnehmen">
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
  title: 'Tierchiropraktik Hund & Pferd | Andrea Bachem Erftstadt',
  link: [
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap' },
    { rel: 'canonical', href: 'https://tier-gesundheitszentrum.com/chiropraktik' },
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
  ],
  meta: [
    { name: 'description', content: 'Chiropraktische Behandlung für Hund und Pferd – Andrea Bachem in Erftstadt hilft bei Arthrose, Spondylose, Bandscheibenvorfällen & mehr.' },
    { name: 'keywords', content: 'Tierchiropraktik Hund, Tierchiropraktik Pferd, Chiropraktikerin Andrea Bachem, Bewegungsapparat Tier, Arthrose Hund, Bandscheibenvorfall Pferd, Spondylose Therapie Tier, Erftstadt Tiergesundheit, Tiertherapie Erftstadt' },
    { name: 'author', content: 'Andrea Bachem' },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: 'Tierchiropraktik Hund & Pferd | Andrea Bachem Erftstadt' },
    { property: 'og:image', content: 'https://tier-gesundheitszentrum.com/favicon.png' },
    { property: 'og:description', content: 'Chiropraktische Behandlung für den Bewegungsapparat von Hund und Pferd – individuell, sanft & effektiv. Jetzt Termin in Erftstadt vereinbaren.' },
    { property: 'og:url', content: 'https://tier-gesundheitszentrum.com/chiropraktik' },
    { property: 'og:type', content: 'website' },
    { name: 'publisher', content: 'Andrea Bachem' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Tierchiropraktik Hund & Pferd | Andrea Bachem Erftstadt' },
    { name: 'twitter:description', content: 'Chiropraktische Behandlung für den Bewegungsapparat von Hund und Pferd – individuell, sanft & effektiv.' },
    { name: 'twitter:image', content: 'https://tier-gesundheitszentrum.com/favicon.png' },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Tiergesundheitszentrum Andrea Bachem",
        "url": "https://tier-gesundheitszentrum.com",
        "address": { "@type": "PostalAddress", "addressLocality": "Erftstadt", "addressCountry": "DE" },
        "description": "Tierchiropraktik, Osteopathie und Physiotherapie für Hund und Pferd."
      })
    }
  ]
});
</script>

<script>
import { useScreenStore } from "~/stores/screen.js";

export default {
  name: "chiropraktik",
  data() {
    return {
      faqs: [
        {
          q: 'Wie läuft eine chiropraktische Behandlung ab?',
          a: [
            'Nach einer ausführlichen Anamnese folgt eine Bewegungsanalyse: Gang, Haltung, Reaktionen werden beurteilt.',
            'Im Anschluss arbeite ich mit gezielten, sanften Justierungen entlang der Wirbelsäule und an den Gelenken. Jede Behandlung ist individuell auf dein Tier abgestimmt.',
          ],
        },
        {
          q: 'Ist die Behandlung schmerzhaft?',
          a: [
            'Nein. Die Impulse sind sanft, präzise und schmerzfrei. Die meisten Tiere entspannen sich während der Sitzung sichtbar.',
          ],
        },
        {
          q: 'Wie oft sollte eine chiropraktische Behandlung erfolgen?',
          a: [
            'Bei akuten Beschwerden reichen oft 2–3 Sitzungen, um deutliche Verbesserungen zu erzielen. Bei chronischen Themen oder Sporttieren empfehle ich regelmäßige Kontrollbehandlungen alle 3–6 Monate.',
          ],
        },
        {
          q: 'Worin unterscheidet sich Chiropraktik von Osteopathie?',
          a: [
            'Osteopathie betrachtet den gesamten Körper inkl. Faszien und Organe; Chiropraktik fokussiert gezielt auf Wirbelsäule und Gelenke mit präzisen Justierungen.',
            'In meiner Praxis kombiniere ich beide Ansätze nach Bedarf – für eine ganzheitliche Versorgung.',
          ],
        },
        {
          q: 'Kann Chiropraktik auch bei sehr alten Tieren angewendet werden?',
          a: [
            'Ja, gerade Senioren profitieren oft besonders. Die Behandlung wird dabei besonders sanft durchgeführt und auf den Allgemeinzustand abgestimmt.',
          ],
        },
        {
          q: 'Was kann ich nach der Behandlung erwarten?',
          a: [
            'Viele Tiere wirken direkt nach der Sitzung lockerer und ausgeglichener. In den ersten 24–48 Stunden empfehle ich Ruhe – keine schweren Belastungen, keine intensiven Sporteinheiten.',
          ],
        },
        {
          q: 'Komme ich zu Ihnen oder behandeln Sie auch vor Ort?',
          a: [
            'Pferde behandle ich überwiegend mobil im Stall, Hunde in der Praxis in Erftstadt oder auf Wunsch zuhause. Sprich mich gerne an.',
          ],
        },
      ],
    };
  },
  computed: {
    wide() { return useScreenStore().wide; },
    desktop() { return useScreenStore().desktop; },
    mobile() { return useScreenStore().mobile; },
    tablet() { return useScreenStore().tablet; },
    tabletHorizontal() { return useScreenStore().tabletHorizontal; },
  },
}
</script>

<style scoped>
.osteo-page {
  min-height: 100vh;
  overflow-y: auto;
}
.osteo-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

/* HERO */
.osteo-hero { padding: 40px 0 60px; }
.osteo-hero .osteo-container {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 48px;
  align-items: center;
}
.osteo-hero-content { color: #fff; }
.osteo-eyebrow {
  display: inline-block; font-family: "Montserrat", sans-serif;
  font-size: 0.82rem; font-weight: 600; letter-spacing: 0.18em;
  text-transform: uppercase; color: #fff;
  padding: 8px 18px; border: 1px solid rgba(255,255,255,0.55);
  border-radius: 2px; margin-bottom: 24px;
  text-shadow: 0 1px 6px rgba(0,0,0,0.5); background: rgba(0,0,0,0.25);
}
.osteo-title {
  font-family: "Montserrat", sans-serif; font-weight: 600;
  font-size: clamp(2rem, 3.6vw, 3rem); line-height: 1.18; color: #fff;
  margin: 0 0 18px; text-shadow: 0 2px 12px rgba(0,0,0,0.55);
}
.osteo-title-accent {
  display: block; font-weight: 400; font-style: italic;
  font-size: 0.7em; color: rgb(0, 130, 194); margin-top: 10px;
}
.osteo-lead {
  font-family: "Montserrat", sans-serif; font-size: 1.05rem;
  line-height: 1.75; color: rgba(255,255,255,0.88);
  max-width: 620px; margin: 0 0 14px;
}
.osteo-hero-images {
  display: grid; grid-template-columns: 1fr 1fr; gap: 14px;
}
.osteo-image-card {
  border-radius: 8px; overflow: hidden;
  box-shadow: 0 8px 30px rgba(0,0,0,0.5);
  aspect-ratio: 3 / 4;
}
.osteo-image-card--shift { transform: translateY(36px); }
.osteo-img, .osteo-image-card :deep(img) {
  width: 100%; height: 100%; object-fit: cover; display: block;
}

/* CONTENT */
.osteo-content { padding: 40px 0 100px; }
.osteo-text-block {
  background: rgba(255,255,255,0.95);
  border-left: 3px solid rgb(0, 130, 194);
  border-radius: 6px; padding: 28px 32px;
  margin: 0 auto 24px; max-width: 980px;
  box-shadow: 0 4px 18px rgba(0,0,0,0.25);
  font-family: "Montserrat", sans-serif; color: #2c2a2a;
}
.osteo-h2 {
  font-family: "Montserrat", sans-serif; font-weight: 600;
  font-size: 1.4rem; color: #1a1a1a; margin: 0 0 14px; line-height: 1.3;
}
.osteo-text-block p {
  font-family: "Montserrat", sans-serif; font-size: 0.98rem;
  line-height: 1.75; color: #2c2a2a; margin: 0 0 12px;
}
.osteo-text-block p:last-child { margin-bottom: 0; }
.osteo-text-block strong { color: rgb(0, 130, 194); }

.osteo-indications .osteo-indication-grid {
  list-style: none; padding: 0; margin: 16px 0 0;
  display: grid; grid-template-columns: 1fr 1fr; gap: 10px 24px;
}
.osteo-indications li {
  display: flex; align-items: flex-start; gap: 10px;
  font-size: 0.95rem; line-height: 1.5; color: #2c2a2a;
}
.osteo-dot {
  flex-shrink: 0; width: 8px; height: 8px;
  border-radius: 50%; background: rgb(0, 130, 194); margin-top: 8px;
}

.osteo-author-block {
  display: grid; grid-template-columns: 1fr auto; gap: 24px; align-items: center;
}
.osteo-siegel-wrap { display: flex; justify-content: center; align-items: center; }
.osteo-siegel {
  width: 140px; height: 140px;
  background-image: url("@/assets/chiroSiegel.webp");
  background-size: contain; background-repeat: no-repeat; background-position: center;
  filter: drop-shadow(0 2px 6px rgba(0,0,0,0.3));
}

/* FAQ */
.osteo-faq { padding: 40px 0 60px; }
.osteo-faq-header { text-align: center; margin-bottom: 32px; color: #fff; }
.osteo-faq-title {
  font-family: "Montserrat", sans-serif; font-weight: 600;
  font-size: clamp(1.8rem, 3vw, 2.4rem); color: #fff;
  margin: 18px 0 10px; text-shadow: 0 2px 12px rgba(0,0,0,0.55);
}
.osteo-faq-sub {
  font-family: "Montserrat", sans-serif; font-size: 1rem;
  line-height: 1.7; color: rgba(255,255,255,0.82);
  max-width: 620px; margin: 0 auto;
}
.osteo-faq-list { max-width: 880px; margin: 0 auto; display: flex; flex-direction: column; gap: 12px; }
.osteo-faq-item {
  background: rgba(255,255,255,0.95); border-radius: 6px;
  border-left: 3px solid rgb(0, 130, 194);
  box-shadow: 0 4px 18px rgba(0,0,0,0.22); overflow: hidden;
}
.osteo-faq-question {
  list-style: none; cursor: pointer;
  padding: 18px 24px; display: flex; align-items: center; justify-content: space-between;
  gap: 16px; font-family: "Montserrat", sans-serif; font-weight: 600;
  font-size: 1.02rem; color: #1a1a1a; transition: background 0.15s;
}
.osteo-faq-question::-webkit-details-marker { display: none; }
.osteo-faq-question:hover { background: rgba(0,130,194,0.06); }
.osteo-faq-icon {
  font-size: 1.5rem; font-weight: 300; color: rgb(0, 130, 194);
  line-height: 1; flex-shrink: 0; transition: transform 0.25s ease;
}
.osteo-faq-item[open] .osteo-faq-icon { transform: rotate(45deg); }
.osteo-faq-answer { padding: 0 24px 20px; border-top: 1px solid rgba(0,0,0,0.08); padding-top: 16px; }
.osteo-faq-answer p {
  font-family: "Montserrat", sans-serif; font-size: 0.96rem;
  line-height: 1.75; color: #2c2a2a; margin: 0 0 10px;
}
.osteo-faq-answer p:last-child { margin: 0; }

/* CTA */
.osteo-cta { padding: 20px 0 80px; }
.osteo-cta-card {
  max-width: 980px; margin: 0 auto;
  background: linear-gradient(135deg, rgb(0, 130, 194) 0%, rgb(0, 100, 160) 100%);
  border-radius: 8px; padding: 36px 40px;
  display: flex; align-items: center; justify-content: space-between; gap: 28px;
  box-shadow: 0 8px 28px rgba(0,0,0,0.35);
}
.osteo-cta-title {
  font-family: "Montserrat", sans-serif; font-weight: 600;
  font-size: 1.6rem; color: #fff; margin: 0 0 8px;
}
.osteo-cta-text {
  font-family: "Montserrat", sans-serif; font-size: 0.98rem;
  line-height: 1.65; color: rgba(255,255,255,0.92); margin: 0; max-width: 560px;
}
.osteo-cta-btn {
  display: inline-block; background: #fff; color: rgb(0, 130, 194);
  font-family: "Montserrat", sans-serif; font-weight: 600; font-size: 1rem;
  padding: 14px 26px; border-radius: 30px; text-decoration: none; white-space: nowrap;
  box-shadow: 0 4px 12px rgba(0,0,0,0.18);
  transition: transform 0.15s, box-shadow 0.15s;
}
.osteo-cta-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 18px rgba(0,0,0,0.25); }

@media (max-width: 1100px) {
  .osteo-hero .osteo-container { grid-template-columns: 1fr; gap: 32px; }
  .osteo-hero-images { max-width: 520px; margin: 0 auto; }
}
@media (max-width: 720px) {
  .osteo-hero { padding: 24px 0 40px; }
  .osteo-content { padding: 24px 0 60px; }
  .osteo-container { padding: 0 16px; }
  .osteo-hero .osteo-container { gap: 24px; }
  .osteo-title { font-size: 1.8rem; line-height: 1.2; }
  .osteo-lead { font-size: 0.98rem; }
  .osteo-image-card--shift { transform: none; }
  .osteo-text-block { padding: 22px 20px; }
  .osteo-h2 { font-size: 1.2rem; }
  .osteo-indications .osteo-indication-grid { grid-template-columns: 1fr; }
  .osteo-author-block { grid-template-columns: 1fr; text-align: center; }
  .osteo-siegel { width: 110px; height: 110px; }
  .osteo-faq-question { padding: 16px 18px; font-size: 0.96rem; }
  .osteo-faq-answer { padding: 14px 18px 18px; }
  .osteo-cta-card { flex-direction: column; text-align: center; padding: 28px 22px; gap: 20px; }
  .osteo-cta-title { font-size: 1.35rem; }
  .osteo-cta-text { font-size: 0.95rem; }
}

a { text-decoration: none; color: inherit; cursor: pointer; }
a:focus { outline: 2px solid rgb(0, 130, 194); }
</style>
