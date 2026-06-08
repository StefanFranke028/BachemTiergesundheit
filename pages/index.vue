<template>
  <div class="background home-page">
    <HeaderComponent v-if="desktop || tabletHorizontal"></HeaderComponent>
    <HeadermobileComponent v-if="mobile || tablet"></HeadermobileComponent>

    <!-- HERO -->
    <section class="home-hero">
      <div class="home-container home-hero-grid">
        <div class="home-hero-text">
          <span class="home-eyebrow">Tiergesundheitszentrum · Erftstadt</span>
          <h1 class="home-title">
            Andrea Bachem
            <span class="home-title-accent">Ganzheitliche Wirbelsäulentherapie für Hund &amp; Pferd</span>
          </h1>
          <p class="home-lead">
            Dein Hund lahmt, hat Schmerzen oder bewegt sich anders als früher? Dein Pferd zeigt
            Auffälligkeiten im Bewegungsablauf oder reagiert empfindlich beim Reiten? Du spürst,
            dass etwas nicht stimmt, aber bekommst keine klaren Antworten?
          </p>
          <p class="home-lead-strong">
            Im Tiergesundheitszentrum Andrea Bachem in Erftstadt bist du genau richtig.
          </p>
          <div class="home-cta-row">
            <button class="home-cta-primary" @click="dialog = true">Termin vereinbaren</button>
          </div>
        </div>
        <div class="home-hero-visual">
          <div class="home-hero-image-wrap">
            <v-img src="~/assets/Andrea.png"
                   alt="Andrea Bachem – Tiergesundheitszentrum Erftstadt"
                   class="home-hero-image"
                   cover/>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT INFO STRIPE -->
    <section class="home-info-stripe">
      <div class="home-container">
        <div class="home-info-grid">
          <a href="tel:01786915915" title="Anrufen: 01786915915" class="home-info-card">
            <div class="home-info-icon">
              <Icon icon="solar:phone-broken"/>
            </div>
            <div class="home-info-text">
              <span class="home-info-label">Ruf mich an</span>
              <span class="home-info-value">01786915915</span>
            </div>
          </a>
          <a href="mailto:andreabachem83@gmail.com" title="E-Mail an Andrea Bachem"
             class="home-info-card" rel="noopener" target="_blank">
            <div class="home-info-icon">
              <Icon icon="ic:outline-mail"/>
            </div>
            <div class="home-info-text">
              <span class="home-info-label">Schreib mir</span>
              <span class="home-info-value">andreabachem83@gmail.com</span>
            </div>
          </a>
          <a href="https://www.google.de/maps/dir//Peter-May-Stra%C3%9Fe+47,+50374+Erftstadt/@50.8280411,6.7633927,13z"
             title="Anfahrt zu Peter-May-Straße 47, Erftstadt"
             class="home-info-card" target="_blank" rel="noopener">
            <div class="home-info-icon">
              <Icon icon="ic:outline-place"/>
            </div>
            <div class="home-info-text">
              <span class="home-info-label">So findest du mich</span>
              <span class="home-info-value">Peter-May-Straße 47, 50374 Köttingen</span>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- CONTENT -->
    <section class="home-content">
      <div class="home-container">
        <div class="home-text-block">
          <h2 class="home-h2">Im Tiergesundheitszentrum Andrea Bachem bist du genau richtig</h2>
          <p>
            Hier steht dein Tier im Mittelpunkt – mit all seinen individuellen Bedürfnissen.
            Ich bin spezialisiert auf die ganzheitliche Betreuung von Hunden und Pferden mit
            Beschwerden im Bewegungsapparat. Mein Schwerpunkt liegt auf moderner Tierchiropraktik,
            Tierosteopathie, Tierphysiotherapie sowie Ernährungsberatung.
          </p>
        </div>

        <div class="home-text-block">
          <h2 class="home-h2">Individuelle Therapie statt Schema F</h2>
          <p>
            Jede Behandlung wird sorgfältig geplant – auf Grundlage einer ausführlichen Anamnese.
            Ob dein Tier unter einem Kreuzbandriss, Bandscheibenvorfall, Arthrose, Spondylose oder
            anderen Bewegungseinschränkungen leidet: Ich entwickle ein passendes Therapiekonzept –
            angepasst an die aktuelle Situation und Bedürfnisse.
          </p>
        </div>

        <div class="home-text-block">
          <h2 class="home-h2">Ganzheitliche Tiertherapie mit Herz und Fachwissen</h2>
          <p>
            Ich arbeite mit manuellen Techniken wie Chiropraktik, Osteopathie und Physiotherapie.
            Ergänzt wird die Therapie durch eine fundierte Ernährungsberatung, um dein Tier
            bestmöglich zu unterstützen. Dabei lege ich großen Wert auf eine ruhige, vertrauensvolle
            Atmosphäre – für eine positive Behandlungserfahrung.
          </p>
        </div>

        <div class="home-text-block">
          <h2 class="home-h2">Wissen weitergeben – Menschen und Tiere stärken</h2>
          <p>
            Neben der Arbeit mit Tieren bilde ich auch Tiertherapeuten und Tierhalter aus – für ein
            besseres Verständnis von Tiergesundheit und mehr Sicherheit im Alltag.
          </p>
        </div>

        <div class="home-text-block">
          <h2 class="home-h2">Suchst du eine Tiertherapeutin in Erftstadt, die sich wirklich Zeit nimmt?</h2>
          <p>
            Dann vereinbare jetzt einen Termin – telefonisch oder über unser Kontaktformular.
            Ich freue mich auf dich und dein Tier!
          </p>
          <p class="home-signature">
            <em>Andrea Bachem</em> – Ihre Ansprechpartnerin für Tiergesundheit mit Herz und Verstand.
          </p>
        </div>
      </div>
    </section>

    <!-- BOTTOM CTA -->
    <section class="home-cta">
      <div class="home-container">
        <div class="home-cta-card">
          <div>
            <h2 class="home-cta-title">Bereit für einen Termin?</h2>
            <p class="home-cta-text">
              Lass uns gemeinsam schauen, was dein Tier braucht.
              Ich nehme mir Zeit für eine ausführliche Anamnese.
            </p>
          </div>
          <button class="home-cta-btn" @click="dialog = true">Termin vereinbaren ›</button>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
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
                <v-textarea v-model="text"
                            label="Nachricht" no-resize style="color: black" variant="underlined"/>
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
                  Zögern Sie nicht, unser Kontaktformular zu nutzen, um mit unserem
                  Tiergesundheitszentrum in Verbindung zu treten und die bestmögliche
                  Betreuung für Ihr Haustier zu erhalten.
                </p>
              </v-col>
              <v-col cols="12">
                <form class="layout_form cr_form cr_font"
                      action="https://seu2.cleverreach.com/f/430331-415442/wcs/"
                      method="post" target="_blank">
                  <div class="cr_body cr_page cr_font formbox" style="background-color: transparent !important;">
                    <div class="editable_content" style="text-align:left;background-color: transparent !important;">
                      <div id="9467951" rel="email"
                           class="cr_form-component cr_form-component--email cr_ipe_item ui-sortable musthave"
                           style="margin-bottom:0;">
                        <div class="cr_form-inputgroup cr_form-inputgroup--typeemail">
                          <label for="text9467951">Newsletter abonnieren</label>
                          <input class="cr_form-input" type="email" id="text9467951" name="email" value=""
                                 placeholder="name@example.com" style="width:100%;">
                        </div>
                      </div>
                      <div id="9467953" rel="button"
                           class="cr_form-component cr_form-component--submit cr_ipe_item ui-sortable submit_container">
                        <button type="submit" class="cr_form-block cr_button">Abonnieren</button>
                      </div>
                    </div>
                    <noscript><a href="http://www.cleverreach.de" title="CleverReach">www.CleverReach.de</a></noscript>
                  </div>
                </form>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12">
            <v-row class="mt-md-10 mt-3">
              <v-col class="d-flex justify-center" cols="6">
                <v-btn variant="text" @click="create" :loading="loading">
                  Senden
                </v-btn>
              </v-col>
              <v-col class="d-flex justify-center" cols="6">
                <v-btn variant="text" @click="dialog = false">
                  Abbrechen
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import FooterComponent from "~/components/FooterComponent.vue";

if (process.client) {
  function loadjQuery(src, callback) {
    const n = document.createElement("script");
    n.setAttribute("src", src);
    n.onload = callback;
    document.head.appendChild(n);
  }
  function main() {
    /* jQuery dummy */
  }
  if (typeof window.jQuery === "undefined") {
    loadjQuery("//ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js", main);
  } else {
    main();
  }
}

useHead({
  htmlAttrs: { lang: 'de' },
  title: 'Tiergesundheit Andrea Bachem Chiropraktik & Osteopathie',
  link: [
    { rel: 'canonical', href: 'https://tier-gesundheitszentrum.com' },
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap' },
  ],
  meta: [
    { name: 'description', content: 'Tiergesundheitszentrum Andrea Bachem: Chiropraktik, Osteopathie & Ernährungsberatung – ganzheitliche Therapie für dein Tier.' },
    { name: 'robots', content: 'index, follow' },
    { name: 'author', content: 'Andrea Bachem' },
    { name: 'publisher', content: 'Andrea Bachem' },
    { property: 'og:title', content: 'Tiergesundheit Andrea Bachem – Erftstadt' },
    { property: 'og:image', content: 'https://tier-gesundheitszentrum.com/favicon.png' },
    { property: 'og:description', content: 'Ganzheitliche Tiergesundheit durch fundierte Methoden – Chiropraktik, Osteopathie & Ernährungsberatung.' },
    { property: 'og:url', content: 'https://tier-gesundheitszentrum.com' },
    { property: 'og:type', content: 'website' },
    { name: 'keywords', content: 'Tiergesundheitszentrum, Tierchiropraktik, Tierosteopathie, Physiotherapie Tiere, Ernährungsberatung Hund Katze Pferd, Andrea Bachem, Tiertherapie Erftstadt' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Tiergesundheit Andrea Bachem – Erftstadt' },
    { name: 'twitter:description', content: 'Ganzheitliche Tiergesundheit durch fundierte Methoden – Chiropraktik, Osteopathie & Ernährungsberatung.' },
    { name: 'twitter:image', content: 'https://tier-gesundheitszentrum.com/favicon.png' },
  ],
});
</script>

<script>
import { useScreenStore } from "~/stores/screen.js";
import { Icon } from '@iconify/vue';

export default {
  name: "Startseite",
  components: { Icon },
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
    wide() { return useScreenStore().wide; },
    desktop() { return useScreenStore().desktop; },
    mobile() { return useScreenStore().mobile; },
    tablet() { return useScreenStore().tablet; },
    tabletHorizontal() { return useScreenStore().tabletHorizontal; },
  },
  methods: {
    async create() {
      if (!this.name || !this.email || !this.text) {
        alert("Bitte füllen Sie Name, Email und Nachricht aus.");
        return;
      }

      this.loading = true;
      try {
        await $fetch('https://tier-gesundheitszentrum.com:8080/auth/kontaktaufnahme', {
          method: 'POST',
          body: {
            email: this.email,
            telefonnummer: this.telefonnummer,
            name: this.name,
            text: this.text,
          }
        });

        await $fetch('https://fastglobeit.de:8081/kontakt/tiergesundheit', {
          method: 'POST',
          body: {
            name: this.name,
            email: this.email,
            phone: this.telefonnummer,
            message: this.text,
          }
        });

        this.name = '';
        this.email = '';
        this.telefonnummer = '';
        this.text = '';
        this.dialog = false;
        alert("Vielen Dank für Ihre Anfrage.");
      } catch (e) {
        console.error('[create] Fehler:', e);
        alert("Ihre Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.");
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style scoped>
.home-page {
  min-height: 100vh;
  overflow-x: hidden;
}
.home-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 32px;
}

/* HERO */
.home-hero {
  padding: 40px 0 60px;
  color: #fff;
}
.home-hero-grid {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 56px;
  align-items: center;
}
.home-eyebrow {
  display: inline-block;
  font-family: "Montserrat", sans-serif;
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #fff;
  padding: 8px 18px;
  border: 1px solid rgba(255, 255, 255, 0.55);
  border-radius: 2px;
  margin-bottom: 26px;

  background: rgba(0, 0, 0, 0.25);
}
.home-title {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: clamp(2.2rem, 4vw, 3.6rem);
  line-height: 1.1;
  color: #fff;
  margin: 0 0 18px;

}
.home-title-accent {
  display: block;
  font-weight: 500;
  font-style: italic;
  color: rgb(0, 130, 194);
  font-size: 0.55em;
  margin-top: 12px;
  line-height: 1.3;
}
.home-lead {
  font-family: "Montserrat", sans-serif;
  font-size: 1.05rem;
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.88);
  margin: 0 0 14px;
  max-width: 600px;
}
.home-lead-strong {
  font-family: "Montserrat", sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  color: rgb(0, 130, 194);
  line-height: 1.5;
  margin: 6px 0 24px;
  max-width: 600px;
}
.home-cta-row {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}
.home-cta-primary,
.home-cta-ghost,
.home-cta-btn {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 1rem;
  padding: 14px 28px;
  border-radius: 30px;
  cursor: pointer;
  border: none;
  transition: transform 0.15s, box-shadow 0.15s, background 0.15s;
}
.home-cta-primary {
  background: rgb(0, 130, 194);
  color: #fff;
  box-shadow: 0 4px 14px rgba(0, 130, 194, 0.35);
}
.home-cta-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 22px rgba(0, 130, 194, 0.5);
}
.home-cta-ghost {
  background: transparent;
  color: #fff;
  border: 1.5px solid rgba(255, 255, 255, 0.55);
}
.home-cta-ghost:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgb(0, 130, 194);
}

.home-hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}
.home-hero-image-wrap {
  width: 100%;
  max-width: 280px;
  aspect-ratio: 4 / 5;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.08);
  margin: 0 auto;
}
.home-hero-image,
.home-hero-image-wrap :deep(img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* INFO STRIPE */
.home-info-stripe {
  padding: 20px 0 40px;
}
.home-info-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}
.home-info-card {
  background: rgba(0, 130, 194, 0.92);
  border-radius: 8px;
  padding: 20px 22px;
  display: flex;
  align-items: center;
  gap: 16px;
  text-decoration: none;
  color: #fff;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.3);
  border-left: 3px solid #fff;
  transition: transform 0.15s, box-shadow 0.15s, background 0.15s;
}
.home-info-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45);
  background: rgb(0, 130, 194);
}
.home-info-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.18);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  color: #fff;
  flex-shrink: 0;
}
.home-info-text {
  display: flex;
  flex-direction: column;
  line-height: 1.4;
}
.home-info-label {
  font-family: "Montserrat", sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  opacity: 0.85;
  margin-bottom: 4px;
}
.home-info-value {
  font-family: "Montserrat", sans-serif;
  font-size: 0.96rem;
  font-weight: 500;
}

/* CONTENT */
.home-content {
  padding: 30px 0 60px;
}
.home-text-block {
  background: rgba(255, 255, 255, 0.95);
  border-left: 3px solid rgb(0, 130, 194);
  border-radius: 6px;
  padding: 28px 32px;
  margin: 0 auto 20px;
  max-width: 980px;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.25);
  font-family: "Montserrat", sans-serif;
  color: #2c2a2a;
}
.home-h2 {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 1.35rem;
  color: #1a1a1a;
  margin: 0 0 12px;
  line-height: 1.3;
}
.home-text-block p {
  font-size: 0.98rem;
  line-height: 1.75;
  color: #2c2a2a;
  margin: 0 0 10px;
}
.home-text-block p:last-child { margin-bottom: 0; }
.home-signature {
  margin-top: 14px;
  font-style: italic;
  color: rgb(0, 100, 160);
  font-weight: 500;
}

/* BOTTOM CTA */
.home-cta {
  padding: 20px 0 40px;
}
.home-cta-card {
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
.home-cta-title {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 1.6rem;
  color: #fff;
  margin: 0 0 8px;
}
.home-cta-text {
  font-family: "Montserrat", sans-serif;
  font-size: 0.98rem;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.92);
  margin: 0;
  max-width: 560px;
}
.home-cta-btn {
  background: #fff;
  color: rgb(0, 130, 194);
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.18);
}
.home-cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.25);
}

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

/* Newsletter-Form im Termin-Dialog */
.dialogBackground :deep(.cr_form-component--email label) {
  color: #ffffff !important;
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  display: block;
  margin-bottom: 6px;
}
.dialogBackground :deep(.cr_form-component--email .cr_form-input) {
  width: 100%;
  padding: 10px 12px;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  background: rgba(255, 255, 255, 0.95);
  color: #1a1a1a;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  outline: none;
  box-sizing: border-box;
}
.dialogBackground :deep(.cr_form-component--email .cr_form-input:focus) {
  border-color: rgb(0, 130, 194);
  background: #ffffff;
  box-shadow: 0 0 0 3px rgba(0, 130, 194, 0.25);
}
.dialogBackground :deep(.cr_form-component--email) {
  margin: 0 !important;
  padding: 0 !important;
}
.dialogBackground :deep(.cr_form-inputgroup) {
  margin: 0 !important;
}
.dialogBackground :deep(.submit_container) {
  margin-top: 10px;
  text-align: left;
  padding: 0 !important;
}
.dialogBackground :deep(.cr_button) {
  background: rgb(0, 130, 194) !important;
  color: #fff !important;
  border-radius: 30px !important;
  padding: 0 24px !important;
  height: 38px !important;
  line-height: 38px !important;
  font-family: "Montserrat", sans-serif !important;
  font-weight: 600 !important;
  cursor: pointer;
  transition: transform 0.15s, box-shadow 0.15s, background 0.15s;
}
.dialogBackground :deep(.cr_button:hover) {
  background: rgb(0, 100, 160) !important;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  opacity: 1;
}

/* RESPONSIVE */
@media (max-width: 1100px) {
  .home-hero-grid {
    grid-template-columns: 1fr;
    gap: 36px;
  }
  .home-hero-visual { order: -1; }
  .home-hero-image-wrap { max-width: 240px; aspect-ratio: 5 / 4; }
  .home-info-grid { grid-template-columns: 1fr; }
}
@media (max-width: 640px) {
  .home-hero-visual { order: 1; }
  .home-hero-image-wrap {
    max-width: 280px;
    aspect-ratio: auto;
    height: auto;
    line-height: 0;
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 12px;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.55);
    overflow: hidden;
  }
  .home-hero-image,
  .home-hero-image-wrap :deep(img) {
    width: 100%;
    height: auto;
    display: block;
    object-fit: contain;
    background: transparent;
  }
}
@media (max-width: 640px) {
  .home-container { padding: 0 18px; }
  .home-hero { padding: 24px 0 36px; }
  .home-info-stripe { padding: 12px 0 24px; }
  .home-content { padding: 20px 0 40px; }
  .home-text-block { padding: 22px 20px; }
  .home-h2 { font-size: 1.18rem; }
  .home-cta-card {
    flex-direction: column;
    text-align: center;
    padding: 28px 22px;
    gap: 20px;
  }
  .home-cta-title { font-size: 1.35rem; }
  .home-cta-text { font-size: 0.95rem; }
}

a { text-decoration: none; color: inherit; }
</style>
