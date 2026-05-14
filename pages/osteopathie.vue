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
          <span class="osteo-eyebrow">Tierosteopathie · Erftstadt</span>
          <h1 class="osteo-title">
            Osteopathie für Tiere in Erftstadt
            <span class="osteo-title-accent">Ganzheitlich. Sanft. Wirksam.</span>
          </h1>
          <p class="osteo-lead">
            Dein Hund wirkt steif? Dein Pferd hat Taktunreinheiten oder zeigt Verhaltensänderungen?
            Manchmal liegt die Ursache nicht dort, wo sich die Symptome zeigen – genau hier setzt die
            Tierosteopathie an.
          </p>
          <p class="osteo-lead">
            In meiner Praxis in Erftstadt biete ich eine sanfte, ganzheitliche Form der Therapie für
            Hunde und Pferde an. Ziel ist es, Blockaden im Körper aufzuspüren, die Beweglichkeit zu
            fördern und die natürliche Balance zwischen Struktur und Funktion wiederherzustellen.
          </p>
        </div>
        <div class="osteo-hero-images">
          <div class="osteo-image-card">
            <v-img
                src="~/assets/bilderPages/osteopatielinks.webp"
                alt="Andrea Bachem bei der osteopathischen Behandlung eines Pferdes"
                cover
                class="osteo-img"
            />
          </div>
          <div class="osteo-image-card osteo-image-card--shift">
            <v-img
                src="~/assets/bilderPages/osteopatierechts.webp"
                alt="Sanfte osteopathische Behandlung – Andrea Bachem"
                cover
                class="osteo-img"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- CONTENT SECTION -->
    <section class="osteo-content">
      <div class="osteo-container">
        <div class="osteo-text-block">
          <h2 class="osteo-h2">Was ist Osteopathie bei Tieren?</h2>
          <p>
            Die Tierosteopathie ist eine manuelle Therapieform, die auf dem Grundsatz basiert:
            <strong>Bewegung ist Leben.</strong> Jeder Knochen, jedes Organ, jede Muskelgruppe sollte
            sich frei und im Einklang mit dem gesamten Körper bewegen können.
          </p>
          <p>
            Schon kleinste Bewegungseinschränkungen – etwa durch Verletzungen, Fehlbelastungen oder
            innere Spannungen – können Auswirkungen auf den gesamten Organismus haben. Dabei stehen
            nicht nur Muskeln und Gelenke im Fokus, sondern auch die Organe und Faszien, die eng mit
            dem Bewegungsapparat und dem Nervensystem verbunden sind.
          </p>
        </div>

        <div class="osteo-text-block">
          <h2 class="osteo-h2">Wie wirken sich Blockaden auf Organe (und umgekehrt) aus?</h2>
          <p>
            Blockaden in der Wirbelsäule oder im Beckenbereich können Spannungen auf die umgebenden
            Faszien und Nervenbahnen erzeugen – diese wiederum beeinflussen die Funktion innerer
            Organe. Umgekehrt können auch Organerkrankungen oder Verdauungsstörungen über nervale
            Verbindungen und Faszienzüge zu muskulären Verspannungen oder Verhaltensänderungen führen.
          </p>
          <p>
            Die Osteopathie setzt genau hier an: Durch gezielte, sanfte Impulse wird der Körper
            unterstützt, wieder ins Gleichgewicht zu kommen. Das Ziel ist nicht nur die Linderung
            von Beschwerden, sondern die Förderung eines gesunden Gesamtzustands.
          </p>
        </div>

        <div class="osteo-text-block osteo-indications">
          <h2 class="osteo-h2">Wann kann eine osteopathische Behandlung sinnvoll sein?</h2>
          <p>Osteopathie kann unterstützend eingesetzt werden bei:</p>
          <ul class="osteo-indication-grid">
            <li><span class="osteo-dot"/>Bewegungseinschränkungen und Lahmheiten</li>
            <li><span class="osteo-dot"/>Rückenproblemen und Gelenkblockaden</li>
            <li><span class="osteo-dot"/>Muskelverspannungen und Taktunreinheiten</li>
            <li><span class="osteo-dot"/>Verdauungsproblemen, Unruhe oder nervösem Verhalten</li>
            <li><span class="osteo-dot"/>Veränderungen im Gangbild oder in der Haltung</li>
            <li><span class="osteo-dot"/>Nach Stürzen, Unfällen oder Operationen</li>
            <li><span class="osteo-dot"/>Zur Begleitung von Sporthunden oder Turnierpferden</li>
          </ul>
        </div>

        <div class="osteo-text-block">
          <h2 class="osteo-h2">Für Hunde und Pferde jeden Alters geeignet</h2>
          <p>
            Ob Welpe, aktiver Sportler oder Senior – die osteopathische Behandlung ist sanft,
            schmerzfrei und individuell auf dein Tier abgestimmt. Sie eignet sich zur Prävention,
            zur Ergänzung schulmedizinischer Therapien oder zur Begleitung chronischer Prozesse.
          </p>
        </div>

        <div class="osteo-text-block osteo-author-block">
          <div class="osteo-author-text">
            <h2 class="osteo-h2">Deine Tierosteopathin in Erftstadt: Andrea Bachem</h2>
            <p>
              Als erfahrene und geprüfte Tierosteopathin für Hund und Pferd begleite ich dein Tier
              mit Fachwissen, Feingefühl und einem ganzheitlichen Blick. Ich nehme mir Zeit für eine
              ausführliche Anamnese, eine genaue Untersuchung und eine individuell abgestimmte
              Behandlung – immer mit dem Ziel, Körper und Seele deines Tieres in Einklang zu bringen.
            </p>
          </div>
          <div class="osteo-siegel-wrap">
            <div class="osteo-siegel" role="img" aria-label="Osteopathie Siegel"></div>
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
            Die wichtigsten Antworten zur osteopathischen Behandlung deines Tieres – kurz und ehrlich.
          </p>
        </div>

        <div class="osteo-faq-list">
          <details
              v-for="(item, i) in faqs"
              :key="i"
              class="osteo-faq-item"
          >
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
              Lass uns gemeinsam schauen, was dein Tier braucht. Ich nehme mir Zeit für ausführliche
              Anamnese und eine individuelle Behandlung.
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
  title: 'Tierosteopathie für Hund & Pferd  Tiergesundheits Erftstadt',
  link: [
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap' },
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'canonical', href: 'https://tier-gesundheitszentrum.com/osteopathie' },
  ],
  meta: [
    { name: 'description', content: 'Sanfte Tierosteopathie für Hund & Pferd in Erftstadt – ganzheitliche Behandlung bei Verspannungen, Gelenkproblemen & mehr durch Andrea Bachem.' },
    { name: 'keywords', content: 'Tierosteopathie Hund, Tierosteopathie Pferd, Osteopathie Tiere Erftstadt, Andrea Bachem, Tiertherapie, ganzheitliche Tierbehandlung, Gelenkprobleme Tiere, sanfte Tierbehandlung' },
    { name: 'robots', content: 'index, follow' },
    { name: 'author', content: 'Andrea Bachem' },
    { property: 'og:title', content: 'Tierosteopathie für Hund & Pferd | Andrea Bachem – Tiergesundheitszentrum Erftstadt' },
    { property: 'og:description', content: 'Professionelle osteopathische Betreuung für Hunde & Pferde. Sanfte Therapie zur Förderung der Selbstheilung und Mobilität – bei Andrea Bachem in Erftstadt.' },
    { property: 'og:image', content: 'https://tier-gesundheitszentrum.com/favicon.png' },
    { property: 'og:url', content: 'https://tier-gesundheitszentrum.com/osteopathie' },
    { property: 'og:type', content: 'website' },
  ],
});
</script>

<script>
import { useScreenStore } from "~/stores/screen.js";

export default {
  name: "osteopatie",
  data() {
    return {
      faqs: [
        {
          q: 'Wie läuft eine osteopathische Behandlung ab?',
          a: [
            'Am Anfang steht ein ausführliches Anamnesegespräch: Vorgeschichte, Symptome, Verhalten und Haltungsbedingungen.',
            'Danach folgt eine sanfte manuelle Untersuchung – Bewegungstests, Abtasten der Faszien, Mobilitätsprüfung der Gelenke. Auf dieser Basis behandle ich gezielt mit feinen Impulsen.',
          ],
        },
        {
          q: 'Tut die Behandlung meinem Tier weh?',
          a: [
            'Nein. Osteopathie arbeitet mit sanften, schmerzfreien Techniken. Die meisten Tiere genießen die Behandlung sichtbar und werden während der Sitzung ruhiger.',
          ],
        },
        {
          q: 'Wie viele Termine braucht mein Tier?',
          a: [
            'Das hängt stark vom Anliegen ab. Akute Beschwerden lösen sich oft in 1–3 Behandlungen, chronische Themen brauchen ggf. eine längere Begleitung.',
            'Nach der ersten Sitzung bekommst du eine ehrliche Einschätzung von mir.',
          ],
        },
        {
          q: 'Kann Osteopathie den Tierarzt ersetzen?',
          a: [
            'Nein – und das soll sie auch nicht. Osteopathie ist eine wertvolle Ergänzung zur tierärztlichen Behandlung. Bei akuten Erkrankungen, Verdacht auf Frakturen oder unklaren Symptomen ist der Tierarzt der erste Ansprechpartner.',
          ],
        },
        {
          q: 'Ab welchem Alter ist eine Behandlung möglich?',
          a: [
            'Vom Welpen bis zum Senior – Osteopathie ist für jedes Alter geeignet. Bei Jungtieren arbeite ich besonders behutsam, bei älteren Tieren mit Fokus auf Beweglichkeit und Lebensqualität.',
          ],
        },
        {
          q: 'Was sollte ich nach der Behandlung beachten?',
          a: [
            'In den ersten 24–48 Stunden sollte dein Tier es ruhiger angehen lassen – kein intensives Training, keine langen Distanzen. Der Körper braucht Zeit zur Integration der Impulse.',
            'Genaue Hinweise gebe ich dir nach jeder Sitzung individuell mit.',
          ],
        },
        {
          q: 'Komme ich zu Ihnen oder kommen Sie zu uns?',
          a: [
            'Beides ist möglich. Pferde behandle ich überwiegend mobil im Stall, Hunde sowohl in der Praxis in Erftstadt als auch auf Wunsch zuhause. Sprich mich gerne an.',
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
.osteo-hero {
  padding: 40px 0 60px;
}
.osteo-hero .osteo-container {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 48px;
  align-items: center;
}
.osteo-hero-content {
  color: #fff;
}
.osteo-eyebrow {
  display: inline-block;
  font-family: "Montserrat", sans-serif;
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #ffffff;
  padding: 8px 18px;
  border: 1px solid rgba(255, 255, 255, 0.55);
  border-radius: 2px;
  margin-bottom: 24px;
  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.5);
  background: rgba(0, 0, 0, 0.25);
}
.osteo-title {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: clamp(2rem, 3.6vw, 3rem);
  line-height: 1.18;
  color: #fff;
  margin: 0 0 18px;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.55);
}
.osteo-title-accent {
  display: block;
  font-weight: 400;
  font-style: italic;
  font-size: 0.7em;
  color: rgb(0, 130, 194);
  margin-top: 10px;
}
.osteo-lead {
  font-family: "Montserrat", sans-serif;
  font-size: 1.05rem;
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.88);
  max-width: 620px;
  margin: 0 0 14px;
}

.osteo-hero-images {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}
.osteo-image-card {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
  aspect-ratio: 3 / 4;
}
.osteo-image-card--shift {
  transform: translateY(36px);
}
.osteo-img,
.osteo-image-card :deep(img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* CONTENT */
.osteo-content {
  padding: 40px 0 100px;
}
.osteo-text-block {
  background: rgba(255, 255, 255, 0.95);
  border-left: 3px solid rgb(0, 130, 194);
  border-radius: 6px;
  padding: 28px 32px;
  margin: 0 auto 24px;
  max-width: 980px;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.25);
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

/* INDICATIONS */
.osteo-indications .osteo-indication-grid {
  list-style: none;
  padding: 0;
  margin: 16px 0 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px 24px;
}
.osteo-indications li {
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

/* AUTHOR BLOCK */
.osteo-author-block {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 24px;
  align-items: center;
}
.osteo-siegel-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
}
.osteo-siegel {
  width: 140px;
  height: 140px;
  background-image: url("@/assets/osteoSiegel.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.3));
}

/* FAQ */
.osteo-faq {
  padding: 40px 0 60px;
}
.osteo-faq-header {
  text-align: center;
  margin-bottom: 32px;
  color: #fff;
}
.osteo-faq-title {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: clamp(1.8rem, 3vw, 2.4rem);
  color: #fff;
  margin: 18px 0 10px;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.55);
}
.osteo-faq-sub {
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.82);
  max-width: 620px;
  margin: 0 auto;
}
.osteo-faq-list {
  max-width: 880px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.osteo-faq-item {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 6px;
  border-left: 3px solid rgb(0, 130, 194);
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.22);
  overflow: hidden;
}
.osteo-faq-question {
  list-style: none;
  cursor: pointer;
  padding: 18px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 1.02rem;
  color: #1a1a1a;
  transition: background 0.15s;
}
.osteo-faq-question::-webkit-details-marker { display: none; }
.osteo-faq-question:hover { background: rgba(0, 130, 194, 0.06); }
.osteo-faq-icon {
  font-size: 1.5rem;
  font-weight: 300;
  color: rgb(0, 130, 194);
  line-height: 1;
  flex-shrink: 0;
  transition: transform 0.25s ease;
}
.osteo-faq-item[open] .osteo-faq-icon {
  transform: rotate(45deg);
}
.osteo-faq-answer {
  padding: 0 24px 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  padding-top: 16px;
}
.osteo-faq-answer p {
  font-family: "Montserrat", sans-serif;
  font-size: 0.96rem;
  line-height: 1.75;
  color: #2c2a2a;
  margin: 0 0 10px;
}
.osteo-faq-answer p:last-child { margin: 0; }

/* CTA */
.osteo-cta {
  padding: 20px 0 80px;
}
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
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.35);
}
.osteo-cta-title {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 1.6rem;
  color: #fff;
  margin: 0 0 8px;
}
.osteo-cta-text {
  font-family: "Montserrat", sans-serif;
  font-size: 0.98rem;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.92);
  margin: 0;
  max-width: 560px;
}
.osteo-cta-btn {
  display: inline-block;
  background: #ffffff;
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

/* TABLET HORIZONTAL & MEDIUM */
@media (max-width: 1100px) {
  .osteo-hero .osteo-container {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .osteo-hero-images {
    max-width: 520px;
    margin: 0 auto;
  }
}

/* MOBILE */
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
  .osteo-indications .osteo-indication-grid {
    grid-template-columns: 1fr;
  }
  .osteo-author-block {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .osteo-siegel { width: 110px; height: 110px; }

  .osteo-faq-question {
    padding: 16px 18px;
    font-size: 0.96rem;
  }
  .osteo-faq-answer {
    padding: 14px 18px 18px;
  }
  .osteo-cta-card {
    flex-direction: column;
    text-align: center;
    padding: 28px 22px;
    gap: 20px;
  }
  .osteo-cta-title { font-size: 1.35rem; }
  .osteo-cta-text { font-size: 0.95rem; }
}

a {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}
a:focus { outline: 2px solid rgb(0, 130, 194); }
</style>
