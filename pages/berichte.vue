<template>
  <div v-if="desktop || tabletHorizontal"  class="background" style="overflow-y: scroll">
    <v-row  class="ma-0 mb-7 bg pb-7 pa-0" style="width: 100%">
      <v-col cols="12">
        <HeaderComponent></HeaderComponent>
      </v-col>
    </v-row>

    <v-row class="d-flex ma-0 justify-center" style="width: 100%;">

      <v-col cols="12">
        <v-card class="pa-7" style="overflow: auto; max-height: 60vh; width: 100%; background-color: rgba(0,0,0,0.22)">
          <h1 class="line mt-3">Berichte aus der Praxis – Tiergesundheit Andrea Bachem</h1>

          <p>
            In unserer Tiergesundheitspraxis in Erftstadt legen wir großen Wert auf Transparenz, Fachwissen und persönliche Erfahrungen. Auf dieser Seite finden Sie aktuelle Berichte über Behandlungen, Seminare, Erfahrungsberichte von Tierhaltern sowie besondere Ereignisse aus unserem Praxisalltag.
          </p>

          <h2 class="line mt-3">Aktuelle Einblicke in unsere Arbeit mit Tieren</h2>

          <p>
            Unsere Arbeit mit Tieren ist vielfältig, liebevoll und fachlich fundiert. In den folgenden Berichten erhalten Sie ehrliche Einblicke in die ganzheitlichen Behandlungsansätze, die wir bei Hunden, Katzen, Pferden und weiteren Tierarten anwenden.
          </p>

          <h3 class="line mt-3">Ganzheitliche Therapie im Fokus</h3>
          <p>
            Ob über die Anwendung von Homöopathie, Mykotherapie, Akupunktur oder energetischen Heilmethoden – wir zeigen anhand echter Beispiele, wie individuell abgestimmte Therapiepläne den Heilungsverlauf positiv beeinflussen.
          </p>

          <h3 class="line mt-3">Erfahrungsberichte unserer Kunden</h3>
          <p>
            Lesen Sie authentische Stimmen unserer Tierhalter, die über ihre Erfahrungen mit unserer Praxis berichten. Vertrauen, Achtsamkeit und nachhaltige Tiergesundheit stehen dabei immer im Vordergrund.
          </p>

          <h2 class="line mt-3">Veranstaltungen & Workshops rund um Tiergesundheit</h2>
          <p>
            In regelmäßigen Abständen veranstalten wir Workshops, Informationsabende oder Fortbildungen zu Themen wie Fütterung, Impfkritik, Verhalten oder alternativen Heilmethoden. Unsere Berichte dazu finden Sie hier.
          </p>

          <h3 class="line mt-3">Praxiswissen verständlich erklärt</h3>
          <p>
            In jedem Bericht geben wir fachlich fundierte, aber leicht verständliche Einblicke in komplexe Themen der Tiermedizin damit Sie als Tierhalter fundierte Entscheidungen treffen können.
          </p>

          <h2 class="line mt-3">Warum Transparenz bei uns wichtig ist</h2>
          <p>
            Mit unseren Praxisberichten möchten wir Ihnen nicht nur zeigen, wie wir arbeiten sondern auch Vertrauen schaffen. Sie sollen wissen, worauf Sie sich bei einem Besuch in unserer Praxis verlassen können: Kompetenz, Herz und ganzheitliche Tiermedizin.
          </p>



        </v-card>
      </v-col>


    </v-row>
    <v-row class="d-flex ma-0 justify-center" style="width: 100%;">
      <v-col cols="4" v-for="preis in produkteArray" :key="preis.id">
        <article itemscope itemtype="https://schema.org/Product">
          <v-card
              class="mx-auto my-12"

              style="background-color: rgb(255,255,255); backdrop-filter: blur(4px); box-shadow: 1px 1px 5px black; overflow-y: scroll"
              width="300"
          >

            <v-img
                loading="lazy"
                :src="preis.image"
                cover
                style="width: 300px; height: 300px"
                :alt="preis.überschrift"
                itemprop="image"
            ></v-img>

            <v-card-title class="text-center" itemprop="name ">
              <p class="text-black"  style="font-size: 16px">
              {{ preis.überschrift }}

              </p>

            </v-card-title>
            <p class="text-black mt-n3 text-center" itemprop="description" style="font-size: 14px">
              {{ preis.unterUeberschrift }}

            </p>
            <v-divider class="mx-8 opacity-80"></v-divider>



            <v-row style="width: 100%;" class="ma-0 mt-n5">
              <v-col cols="12" class="d-flex justify-center">
                <v-btn class="mt-7" style="background-color:rgb(0, 130, 194); color: white; border-radius: 20px">
                  <NuxtLink :to="'/tiergesundheit-'+ preis.name">
                    Zum Bericht >

                  </NuxtLink>

                </v-btn>
              </v-col>
            </v-row>

          </v-card>
        </article>

      </v-col>
    </v-row>
  </div>
  <div v-if="mobile || tablet" class="background" style="padding-top: 20px;overflow-y: scroll">
    <HeadermobileComponent v-if="mobile || tablet"></HeadermobileComponent>
    <v-row class="justify-center mx-0 mt-2" style="overflow-y: scroll">
      <v-col cols="11">
        <v-card class="pa-7" style="overflow: auto; max-height: 50vh; width: 100%; background-color: rgba(0,0,0,0.22)">
          <h1 class="line mt-3">Berichte aus der Praxis – Tiergesundheit Andrea Bachem</h1>

          <p>
            In unserer Tiergesundheitspraxis in Erftstadt legen wir großen Wert auf Transparenz, Fachwissen und persönliche Erfahrungen. Auf dieser Seite finden Sie aktuelle Berichte über Behandlungen, Seminare, Erfahrungsberichte von Tierhaltern sowie besondere Ereignisse aus unserem Praxisalltag.
          </p>

          <h2 class="line mt-3">Aktuelle Einblicke in unsere Arbeit mit Tieren</h2>

          <p>
            Unsere Arbeit mit Tieren ist vielfältig, liebevoll und fachlich fundiert. In den folgenden Berichten erhalten Sie ehrliche Einblicke in die ganzheitlichen Behandlungsansätze, die wir bei Hunden, Katzen, Pferden und weiteren Tierarten anwenden.
          </p>

          <h3 class="line mt-3">Ganzheitliche Therapie im Fokus</h3>
          <p>
            Ob über die Anwendung von Homöopathie, Mykotherapie, Akupunktur oder energetischen Heilmethoden wir zeigen anhand echter Beispiele, wie individuell abgestimmte Therapiepläne den Heilungsverlauf positiv beeinflussen.
          </p>

          <h3 class="line mt-3">Erfahrungsberichte unserer Kunden</h3>
          <p>
            Lesen Sie authentische Stimmen unserer Tierhalter, die über ihre Erfahrungen mit unserer Praxis berichten. Vertrauen, Achtsamkeit und nachhaltige Tiergesundheit stehen dabei immer im Vordergrund.
          </p>

          <h2 class="line mt-3">Veranstaltungen & Workshops rund um Tiergesundheit</h2>
          <p>
            In regelmäßigen Abständen veranstalten wir Workshops, Informationsabende oder Fortbildungen zu Themen wie Fütterung, Impfkritik, Verhalten oder alternativen Heilmethoden. Unsere Berichte dazu finden Sie hier.
          </p>

          <h3 class="line mt-3">Praxiswissen verständlich erklärt</h3>
          <p>
            In jedem Bericht geben wir fachlich fundierte, aber leicht verständliche Einblicke in komplexe Themen der Tiermedizin – damit Sie als Tierhalter fundierte Entscheidungen treffen können.
          </p>

          <h2 class="line mt-3">Warum Transparenz bei uns wichtig ist</h2>
          <p>
            Mit unseren Praxisberichten möchten wir Ihnen nicht nur zeigen, wie wir arbeiten sondern auch Vertrauen schaffen. Sie sollen wissen, worauf Sie sich bei einem Besuch in unserer Praxis verlassen können: Kompetenz, Herz und ganzheitliche Tiermedizin.
          </p>


        </v-card>
      </v-col>
    </v-row>
    <v-row class="d-flex ma-0 justify-center" style="width: 100%;">
      <v-col cols="11" v-for="preis in produkteArray" :key="preis.id">
        <article itemscope itemtype="https://schema.org/Product">
        <v-card

            class="mx-auto my-12"
            height="450"
            style="background-color: rgb(255,255,255); backdrop-filter: blur(4px); box-shadow: 1px 1px 5px black;overflow-y: scroll"
            width="300"
        >

          <v-img
              loading="lazy"
              :src="preis.image"
              cover
              style="width: 300px; height: 200px"
              :alt="preis.überschrift"
              itemprop="image"
          ></v-img>

          <v-card-title class="text-center" itemprop="name ">
            <p class="text-black"  style="font-size: 16px">
              {{ preis.überschrift }}

            </p>

          </v-card-title>
          <p class="text-black mt-n3 text-center" itemprop="description" style="font-size: 14px">
            {{ preis.unterUeberschrift }}

          </p>
          <v-divider class="mx-8 opacity-80"></v-divider>
          <v-row style="width: 100%;" class="ma-0 mt-n5">
            <v-col cols="12" class="d-flex justify-center">
              <v-btn class="mt-7" style="background-color:rgb(0, 130, 194); color: white; border-radius: 20px">
                <NuxtLink :to="'/tiergesundheit-'+ preis.name">
                  Zum Bericht >
                </NuxtLink>
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </article>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
const { data: produkteArray } = await useAsyncData('produkte', async () => {
  const res = await $fetch('https://tier-gesundheitszentrum.com:8080/auth/stadt');
  return res.map((item) => ({
    ...item,
    bild: `data:image/jpeg;base64,${item.bild}`
  }));
});
console.log("Produkte Array:", produkteArray.value);

useHead({
  htmlAttrs: {
    lang: 'de'
  },
  title: 'Berichte aus der Praxis Andrea Bachem – Tiergesundheitszentrum Erftstadt',
  meta: [
    {
      name: 'description',
      content:
          'Erfahren Sie in unseren Praxisberichten mehr über Tierbehandlungen, Workshops & Erfahrungen rund um Tiergesundheit. Authentische Einblicke bei Andrea Bachem.'
    },
    {
      name: 'keywords',
      content:
          'Tiergesundheit Berichte, Tierosteopathie Erfahrungen, Hund Behandlung, Pferde Chiropraktik, Andrea Bachem, Tierheilpraktikerin Erftstadt, Tierseminare, Tierheilung'
    },
    {
      name: 'author',
      content: 'Andrea Bachem'
    },
    {
      property: 'og:title',
      content: 'Berichte aus der Praxis | Andrea Bachem – Tiergesundheitszentrum Erftstadt'
    },
    {
      property: 'og:description',
      content:
          'Erhalten Sie ehrliche Einblicke in ganzheitliche Tierbehandlungen und Seminare bei Andrea Bachem. Lesen Sie echte Erfahrungen aus dem Praxisalltag.'
    },
    {
      property: 'og:url',
      content: 'https://tier-gesundheitszentrum.com/berichte'
    },
    {
      property: 'og:type',
      content: 'article'
    },
    {
      property: 'og:image',
      content: 'https://tier-gesundheitszentrum.com/images/berichte-vorschau.jpg'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://tier-gesundheitszentrum.com/berichte'
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180'
    },
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap'
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Praxisberichte Tiergesundheit",
        "itemListElement": produkteArray.value.map((bericht, index) => ({
          "@type": "Article",
          "position": index + 1,
          "headline": bericht.überschrift,
          "description": bericht.unterUeberschrift,
          "url": `https://tier-gesundheitszentrum.com/tiergesundheit-${bericht.name}`,
          "author": {
            "@type": "Person",
            "name": "Andrea Bachem"
          }
        }))
      })
    }
  ]
});






</script>
<script>


import {useScreenStore} from "~/stores/screen.js";

export default {
  name: "berichte",
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    wide() {
      const screenStore = useScreenStore();
      return screenStore.wide;
    },
    desktop() {
      const screenStore = useScreenStore();
      return screenStore.desktop;
    },
    mobile() {
      const screenStore = useScreenStore();
      return screenStore.mobile;
    },
    tablet() {
      const screenStore = useScreenStore();
      return screenStore.tablet;
    },
    tabletHorizontal() {
      const screenStore = useScreenStore();
      return screenStore.tabletHorizontal;
    },
  },
}
</script>


<style scoped>
.line {
  font-family: "Dancing Script", cursive;
  color: rgba(255, 255, 255, 0.86);
}
a {
  text-decoration: none;
  color: inherit
}
p{
  color: rgba(255, 255, 255, 0.86);

}

.background {
  background-image: url("@/assets/black.webp");
  background-size: cover;
  position: fixed;
  height: 100vh;
  width: 100vw;
}
a {
  text-decoration: none;
  cursor: pointer;
}


a:focus {
  outline: 2px solid blue;
}
</style>