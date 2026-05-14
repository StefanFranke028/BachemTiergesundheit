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
        <div class="osteo-hero-content"
             itemscope itemtype="https://schema.org/Service">
          <meta itemprop="serviceType" content="Tierchiropraktik, Tierosteopathie, Tierphysiotherapie, Ernährungsberatung"/>
          <meta itemprop="areaServed" :content="city"/>
          <div itemprop="provider" itemscope itemtype="https://schema.org/Organization">
            <meta itemprop="name" content="Tiergesundheitszentrum Andrea Bachem"/>
            <meta itemprop="addressLocality" :content="city"/>
          </div>
          <span class="osteo-eyebrow">Tiergesundheit · {{ city }}</span>
          <h1 itemprop="name" class="osteo-title">
            Tiergesundheit {{ city }}
            <span class="osteo-title-accent">Chiropraktik, Osteopathie &amp; ganzheitliche Betreuung</span>
          </h1>
          <p itemprop="description" class="osteo-lead">
            Diese Seite ist für Tierhalter aus {{ city }}, die sich über ganzheitliche Tiergesundheit
            {{ city }} informieren möchten. Im Tiergesundheitszentrum Andrea Bachem steht das Wohlbefinden
            deines Tieres im Fokus.
          </p>
          <p class="osteo-lead">
            Unsere Praxis in Erftstadt bietet maßgeschneiderte Therapieansätze für Hunde, Pferde und Katzen
            – von Tierchiropraktik und Tierosteopathie bis Tierphysiotherapie und Ernährungsberatung.
            Ziel ist es, Schmerzen zu reduzieren, Beweglichkeit zu fördern und die Lebensqualität nachhaltig
            zu verbessern.
          </p>
          <div class="osteo-cta-row">
            <button class="hero-cta-primary" @click="dialog = true">Termin vereinbaren</button>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTENT -->
    <section class="osteo-content">
      <div class="osteo-container">
        <div class="osteo-text-block">
          <h2 class="osteo-h2">Tierchiropraktik {{ city }} – Bewegungsfreiheit und Nervensystem im Gleichgewicht</h2>
          <p>
            Die Tierchiropraktik betrachtet Bewegungsapparat und Nervensystem als Einheit und setzt auf
            gezielte Impulse an der Wirbelsäule. Blockaden können Muskulatur, Organe und sogar das Verhalten
            beeinflussen. Mit präzisen, sanften Justierungen werden Gelenke mobilisiert und die natürliche
            Beweglichkeit gefördert. Viele Tierhalter berichten nach wenigen Terminen von mehr Vitalität,
            weniger Schmerzen und einem geschmeidigeren Bewegungsablauf – besonders bei sportlich geführten
            Pferden oder aktiven Hunden aus {{ city }} und Umgebung.
            Mehr erfahren zur
            <NuxtLink to="/chiropraktik" title="Mehr zur Chiropraktik für Tiere" class="hyperlink">Chiropraktik</NuxtLink>.
          </p>
          <p>
            Häufige Gründe für eine chiropraktische Behandlung sind Rückenbeschwerden, Arthrose, Lahmheiten,
            Koordinationsprobleme, Spondylose, Muskelverspannungen, Bandscheibenprobleme, Leistungsabfall,
            Taktunreinheiten, Schmerzreaktionen beim Satteln oder Heben sowie auffälliges Verhalten wie
            Aggression oder Rückzug. Die Tierchiropraktik eignet sich für alle Altersstufen vom Welpen oder
            Fohlen bis zum Senior und wird stets an die Anatomie und Bedürfnisse des jeweiligen Tieres angepasst.
          </p>
        </div>

        <div class="osteo-text-block">
          <h2 class="osteo-h2">Tierosteopathie {{ city }} – sanfte Impulse für die Selbstheilung</h2>
          <p>
            Osteopathie ist eine besonders sanfte, ganzheitliche Behandlungsmethode, die die körpereigenen
            Selbstheilungskräfte deines Tieres anregen soll. Mit gezielten manuellen Techniken werden Blockaden,
            Verspannungen und Bewegungseinschränkungen ertastet und gelöst – ohne Medikamente. Im Mittelpunkt
            steht nicht nur das Symptom, sondern das Zusammenspiel von Struktur, Funktion und Energie im
            gesamten Organismus.
          </p>
          <p>
            Die Methode kann bei Bewegungseinschränkungen, Rücken- und Gelenkproblemen, muskulären Verspannungen,
            Verdauungsproblemen und Verhaltensauffälligkeiten unterstützen. Die Behandlung ist in der Regel
            schmerzfrei und eignet sich für Hunde und Pferde aller Altersgruppen – vom Welpen über das
            Sportpferd bis zum Senior. Als Ergänzung zur Schulmedizin kann sie helfen, die Lebensqualität
            deines Tieres spürbar zu steigern. Mehr erfahren zur
            <NuxtLink to="/osteopathie" title="Mehr zur Tierosteopathie" class="hyperlink">Osteopathie</NuxtLink>.
          </p>
        </div>

        <div class="osteo-text-block">
          <h2 class="osteo-h2">Service {{ city }} – ganzheitliche Betreuung im Tiergesundheitszentrum</h2>
          <p>
            Unser Service verbindet traditionelles Erfahrungswissen mit moderner Tiertherapie. Wir setzen auf
            natürliche, schonende Methoden, die Körper, Geist und Seele deines Tieres in Balance bringen.
            Neben Chiropraktik und Osteopathie gehören manuelle Therapie, Tierphysiotherapie und eine
            individuell abgestimmte Ernährungsberatung zu den zentralen Bausteinen. Ergänzend bieten wir
            mobile Tierbehandlungen an – ideal für Tiere, die den Transport schlecht vertragen oder zu Hause
            entspannter sind. Mehr erfahren zu unseren
            <NuxtLink to="/service" title="Mehr zum Service" class="hyperlink">Leistungen</NuxtLink>.
          </p>
          <p>
            Eine interdisziplinäre Zusammenarbeit mit Tierärzten, Hufschmieden und weiteren Therapeuten sorgt
            für eine bestmögliche Versorgung. Fachliche Kompetenz, langjährige Erfahrung und ein achtsamer
            Umgang mit Tier und Mensch zeichnen unsere Praxis aus. Wir nehmen uns Zeit, hören zu und richten
            jede Behandlung individuell aus – auch für Tierhalter aus {{ city }}, die eine ganzheitliche
            Betreuung in der Nähe suchen.
          </p>
        </div>

        <div class="osteo-text-block">
          <h2 class="osteo-h2">Preise {{ city }} – transparent, fair und individuell</h2>
          <p>
            Die Preise richten sich nach dem zeitlichen Aufwand und der jeweiligen Tierart. Vor der ersten
            Behandlung führen wir ein ausführliches Anamnesegespräch, um die passende Therapie festzulegen.
            Gerne beraten wir dich auch telefonisch zu individuellen Anliegen. Du möchtest mehrere Leistungen
            kombinieren oder hast besondere Anforderungen? Sprich uns an – wir erstellen dir ein passendes
            Paket. Mehr erfahren zu unseren
            <NuxtLink to="/preise" title="Mehr zu Preisen und Leistungen" class="hyperlink">Preisen</NuxtLink>.
          </p>
        </div>

        <div class="osteo-text-block">
          <h2 class="osteo-h2">Andrea Bachem {{ city }} – Erfahrung, Qualifikation und Tierwohl</h2>
          <p>
            Andrea Bachem ist staatlich geprüfte Tierarzthelferin und hat sich durch zahlreiche Aus- und
            Weiterbildungen auf die Gesundheit und das Wohlbefinden von Tieren spezialisiert. Zu ihren
            Qualifikationen zählen unter anderem Tierphysiotherapie, Tierosteopathie, manuelle Therapie sowie
            Dorntherapie und Chiropraktik. Regelmäßige Fortbildungen und ein klarer Fokus auf das Tierwohl
            bilden die Grundlage jeder Behandlung.
          </p>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="osteo-faq" itemscope itemtype="https://schema.org/FAQPage">
      <div class="osteo-container">
        <div class="osteo-faq-header">
          <span class="osteo-eyebrow">Häufige Fragen</span>
          <h2 class="osteo-faq-title">FAQ {{ city }} – häufige Fragen zur Tiergesundheit</h2>
          <p class="osteo-faq-sub">
            Die wichtigsten Antworten rund um Tiergesundheit, Termine und Behandlung in {{ city }}.
          </p>
        </div>

        <div class="osteo-faq-list">
          <details
              v-for="(item, i) in faqItems"
              :key="i"
              class="osteo-faq-item"
              itemprop="mainEntity"
              itemscope
              itemtype="https://schema.org/Question"
          >
            <summary class="osteo-faq-question" itemprop="name">
              <span>{{ item.q }}</span>
              <span class="osteo-faq-icon" aria-hidden="true">+</span>
            </summary>
            <div class="osteo-faq-answer"
                 itemprop="acceptedAnswer"
                 itemscope
                 itemtype="https://schema.org/Answer">
              <p itemprop="text">{{ item.a }}</p>
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
            <h2 class="osteo-cta-title">Termin für {{ city }} vereinbaren</h2>
            <p class="osteo-cta-text">
              Du bist in {{ city }} und möchtest mehr über Chiropraktik, Osteopathie, Service oder Preise
              wissen? Melde dich gern – wir beraten dich persönlich.
            </p>
          </div>
          <button class="osteo-cta-btn" @click="dialog = true">Termin vereinbaren ›</button>
        </div>
      </div>
    </section>

    <FooterComponent/>

    <!-- TERMIN-DIALOG -->
    <v-dialog v-model="dialog" scrim="black" :width="mobile || tablet ? '95%' : 1200">
      <v-card
          class="mx-auto my-12 pa-5 dialogBackground"
          style="background-color: rgb(205,205,205); box-shadow: 0 4px 8px 0 rgb(0,0,0), 0 6px 20px 0 rgb(0,0,0)"
          :width="mobile || tablet ? '100%' : 1200">
        <v-row>
          <v-col cols="12" md="6">
            <v-row class="justify-center">
              <v-col class="d-flex justify-center" cols="10">
                <h1 class="line">Termin Vereinbaren</h1>
              </v-col>
              <v-col class="d-flex justify-center mt-n3" cols="10">
                <v-text-field v-model="name" label="Name" variant="underlined"/>
              </v-col>
              <v-col class="d-flex justify-center mt-n3" cols="10">
                <v-text-field v-model="email" label="Email" variant="underlined"/>
              </v-col>
              <v-col class="d-flex justify-center mt-n3" cols="10">
                <v-text-field v-model="telefonnummer" label="Telefonnummer" variant="underlined"/>
              </v-col>
              <v-col class="d-flex justify-center mt-n3" cols="10">
                <v-textarea v-model="text" label="Nachricht" no-resize style="color: black" variant="underlined"/>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" md="6" class="align-center d-flex pr-md-16">
            <v-row class="mt-10">
              <v-col cols="8" v-if="!mobile && !tablet">
                <div class="logo"/>
              </v-col>
              <v-col class="pt-md-15" cols="12">
                <h2 class="pt-md-10">Ihre Anliegen sind uns wichtig!</h2>
                <br>
                <p style="font-size: 16px">
                  Zögern Sie nicht, unser Kontaktformular zu nutzen, um mit unserem Tiergesundheitszentrum
                  in Verbindung zu treten und die bestmögliche Betreuung für Ihr Haustier zu erhalten.
                </p>
              </v-col>
              <v-col cols="12">
                <form class="layout_form cr_form cr_font"
                      action="https://seu2.cleverreach.com/f/430331-415442/wcs/"
                      method="post" target="_blank">
                  <div class="cr_body cr_page cr_font formbox" style="background-color: transparent !important;">
                    <div class="editable_content" style="text-align:left;background-color: transparent !important;">
                      <div :id="`cr-email-${city}`" rel="email"
                           class="cr_form-component cr_form-component--email cr_ipe_item ui-sortable musthave"
                           style="margin-bottom:0;">
                        <div class="cr_form-inputgroup cr_form-inputgroup--typeemail">
                          <label :for="`cr-input-${city}`">Newsletter abonnieren</label>
                          <input class="cr_form-input" type="email" :id="`cr-input-${city}`" name="email"
                                 value="" placeholder="name@example.com" style="width:100%;">
                        </div>
                      </div>
                      <div rel="button"
                           class="cr_form-component cr_form-component--submit cr_ipe_item ui-sortable submit_container">
                        <button type="submit" class="cr_form-block cr_button">Abonnieren</button>
                      </div>
                    </div>
                  </div>
                </form>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12">
            <v-row class="mt-md-10 mt-3">
              <v-col class="d-flex justify-center" cols="6">
                <v-btn variant="text" @click="create" :loading="loading">Senden</v-btn>
              </v-col>
              <v-col class="d-flex justify-center" cols="6">
                <v-btn variant="text" @click="dialog = false">Abbrechen</v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { useScreenStore } from "~/stores/screen.js";

export default {
  name: "StadtTemplate",
  props: {
    city: { type: String, required: true },
  },
  data() {
    return {
      dialog: false,
      loading: false,
      name: '',
      email: '',
      telefonnummer: '',
      text: '',
    };
  },
  computed: {
    desktop() { return useScreenStore().desktop; },
    mobile() { return useScreenStore().mobile; },
    tablet() { return useScreenStore().tablet; },
    tabletHorizontal() { return useScreenStore().tabletHorizontal; },
    faqItems() {
      const c = this.city;
      return [
        {
          q: `Eignet sich Tierchiropraktik in ${c} für jedes Alter?`,
          a: 'Ja. Die chiropraktische Behandlung wird individuell angepasst und ist für Welpen, junge Tiere, Sportpferde sowie Senioren geeignet. Ziel ist es, Beweglichkeit und Wohlbefinden nachhaltig zu fördern.',
        },
        {
          q: `In welchen Fällen ist Osteopathie für Tiere aus ${c} sinnvoll?`,
          a: 'Osteopathie kann unterstützen, wenn Bewegungseinschränkungen, Verspannungen oder Verdauungsprobleme bestehen. Sie ist sanft, schmerzfrei und eignet sich sowohl für Hunde als auch für Pferde.',
        },
        {
          q: `Was beinhaltet der Service für Tierhalter aus ${c}?`,
          a: 'Unser Service umfasst Chiropraktik, Osteopathie, Tierphysiotherapie, manuelle Therapie und Ernährungsberatung. Zusätzlich bieten wir bei Bedarf eine mobile Tierbehandlung an.',
        },
        {
          q: 'Wie setzen sich die Behandlungskosten zusammen?',
          a: 'Die Kosten richten sich nach Zeitaufwand und Tierart. Vor der ersten Behandlung findet ein ausführliches Anamnesegespräch statt, um den passenden Therapieplan festzulegen.',
        },
        {
          q: `Wo findet die Behandlung für ${c} statt?`,
          a: 'Die Behandlungen erfolgen in der Praxis in Erftstadt. Für Tiere, die den Transport schlecht vertragen, ist eine mobile Behandlung möglich – abhängig vom Standort.',
        },
      ];
    },
  },
  methods: {
    async create() {
      try {
        await $fetch('https://tier-gesundheitszentrum.com:8080/auth/kontaktaufnahme', {
          method: 'POST',
          body: {
            email: this.email, telefonnummer: this.telefonnummer,
            name: this.name, text: this.text,
          }
        });
        await this.sendEmail();
        this.email = null; this.telefonnummer = null; this.text = null;
      } catch (e) {
        console.error('[create] error:', e);
        alert("Bitte füllen Sie alle Felder aus.");
      }
    },
    async sendEmail() {
      this.loading = true;
      if (this.email !== '' && this.name !== '') {
        try {
          await $fetch('https://fastglobeit.de:8081/auth/sendMailAsHTML', {
            method: 'POST',
            body: {
              to: 'andreabachem83@gmail.com',
              subject: 'Neue Kontaktanfrage gestellt',
              htmlText: `<div><h3>Hallo Andrea,</h3><p>Es wurde eine neue Kontaktanfrage gestellt. <a href="https://tier-gesundheitszentrum.com/admin/">Zur Verwaltung</a></p></div>`
            }
          });
          await $fetch('https://fastglobeit.de:8081/auth/sendMailAsHTML', {
            method: 'POST',
            body: {
              to: this.email,
              subject: 'Ihre Kontaktanfrage',
              htmlText: `<div><h3>Hallo ${this.name}</h3><p>Ihre Kontaktanfrage ist bei uns eingegangen. Wir melden uns so schnell wie möglich.</p></div>`
            }
          });
          this.name = 'Vielen Dank für Ihre Anfrage.';
          this.email = '';
        } catch (e) {
          console.error('[sendEmail] error:', e);
        }
      }
      this.loading = false;
    },
  },
};
</script>

<style scoped>
.osteo-page { min-height: 100vh; overflow-y: auto; }
.osteo-container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }

/* HERO */
.osteo-hero { padding: 40px 0 60px; }
.osteo-hero-content { color: #fff; max-width: 980px; margin: 0 auto; text-align: center; }
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
  max-width: 720px; margin: 0 auto 14px;
}
.osteo-cta-row {
  display: flex; gap: 14px; flex-wrap: wrap; justify-content: center;
  margin-top: 22px;
}
.hero-cta-primary {
  font-family: "Montserrat", sans-serif; font-weight: 600; font-size: 1rem;
  padding: 14px 28px; border-radius: 30px; cursor: pointer; border: none;
  background: rgb(0, 130, 194); color: #fff;
  box-shadow: 0 4px 14px rgba(0,130,194,0.35);
  transition: transform 0.15s, box-shadow 0.15s;
}
.hero-cta-primary:hover {
  transform: translateY(-2px); box-shadow: 0 8px 22px rgba(0,130,194,0.5);
}

/* CONTENT */
.osteo-content { padding: 30px 0 60px; }
.osteo-text-block {
  background: rgba(255,255,255,0.95);
  border-left: 3px solid rgb(0, 130, 194);
  border-radius: 6px; padding: 28px 32px;
  margin: 0 auto 20px; max-width: 980px;
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
.hyperlink {
  color: rgb(0, 130, 194);
  font-weight: 600;
  text-decoration: underline;
}
.hyperlink:hover { color: rgb(0, 100, 160); }

/* FAQ */
.osteo-faq { padding: 40px 0 60px; }
.osteo-faq-header { text-align: center; margin-bottom: 32px; color: #fff; }
.osteo-faq-title {
  font-family: "Montserrat", sans-serif; font-weight: 600;
  font-size: clamp(1.6rem, 3vw, 2.2rem); color: #fff;
  margin: 14px 0 10px; text-shadow: 0 2px 12px rgba(0,0,0,0.55);
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
  line-height: 1.75; color: #2c2a2a; margin: 0;
}

/* CTA */
.osteo-cta { padding: 20px 0 60px; }
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
  font-family: "Montserrat", sans-serif; font-weight: 600; font-size: 1rem;
  padding: 14px 26px; border-radius: 30px; border: none; cursor: pointer;
  background: #fff; color: rgb(0, 130, 194);
  box-shadow: 0 4px 12px rgba(0,0,0,0.18);
  transition: transform 0.15s, box-shadow 0.15s;
  white-space: nowrap;
}
.osteo-cta-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 18px rgba(0,0,0,0.25); }

/* DIALOG STYLES */
.logo {
  background-image: url("@/assets/Logo2.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 260px;
  height: 115px;
}
.dialogBackground {
  background-image: url("@/assets/bg_black2_11zon.webp");
  background-size: cover;
}
.line {
  font-family: "Dancing Script", cursive;
  color: #2c2a2a;
}

/* Newsletter im Termin-Dialog */
.dialogBackground :deep(.cr_form-component--email label) {
  color: #ffffff !important; font-weight: 600;
  font-family: "Montserrat", sans-serif; font-size: 14px;
  display: block; margin-bottom: 6px;
}
.dialogBackground :deep(.cr_form-component--email .cr_form-input) {
  width: 100%; padding: 10px 12px; border-radius: 4px;
  border: 1px solid rgba(255,255,255,0.4);
  background: rgba(255,255,255,0.95); color: #1a1a1a;
  font-family: "Montserrat", sans-serif; font-size: 14px;
  outline: none; box-sizing: border-box;
}
.dialogBackground :deep(.cr_button) {
  background: rgb(0, 130, 194) !important; color: #fff !important;
  border-radius: 30px !important; padding: 0 24px !important;
  height: 38px !important; line-height: 38px !important;
  font-family: "Montserrat", sans-serif !important;
  font-weight: 600 !important; cursor: pointer;
}

@media (max-width: 720px) {
  .osteo-hero { padding: 24px 0 36px; }
  .osteo-content { padding: 20px 0 40px; }
  .osteo-container { padding: 0 16px; }
  .osteo-title { font-size: 1.7rem; line-height: 1.2; }
  .osteo-lead { font-size: 0.96rem; }
  .osteo-text-block { padding: 22px 20px; }
  .osteo-h2 { font-size: 1.18rem; }
  .osteo-cta-card {
    flex-direction: column; text-align: center; padding: 28px 22px; gap: 20px;
  }
  .osteo-cta-title { font-size: 1.3rem; }
}

a { text-decoration: none; color: inherit; cursor: pointer; }
a:focus { outline: 2px solid rgb(0, 130, 194); }
</style>
