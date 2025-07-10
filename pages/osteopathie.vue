<template>
  <div v-if="desktop || tabletHorizontal"  class="background">
    <v-row  class="ma-0 mb-7 bg pb-7 pa-0" style="width: 100%">
      <v-col cols="12">
        <HeaderComponent></HeaderComponent>
      </v-col>
    </v-row>

    <v-row class="d-flex ma-0 justify-center" style="width: 100%;">
      <v-col cols="3">
        <v-card>
          <v-img alt="Andrea Bachem bei der osteopathischen Behandlung eines Pferdes" class="" cover style="height: 70vh" src="~/assets/bilderPages/osteopatielinks.webp">

          </v-img>

        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card class="background-impressum pa-7" style="overflow: auto; max-height: 70vh; width: 100%">
          <h1 class="line">Osteopathie für Tiere</h1>

          <h2 class="line mt-3">Sanfte Therapie für ein gesundes und bewegliches Tierleben</h2>

          <p>
            Die Osteopathie ist eine besonders sanfte, ganzheitliche Behandlungsmethode, die darauf abzielt, die natürlichen Selbstheilungskräfte deines Tieres zu aktivieren.
          </p>

          <h3 class="line mt-3">Was ist Tierosteopathie?</h3>
          <p>
            Durch gezielte manuelle Techniken werden Blockaden, Verspannungen und Bewegungseinschränkungen aufgespürt und gelöst – ganz ohne Medikamente. Dabei steht nicht das einzelne Symptom im Mittelpunkt, sondern das Zusammenspiel von Struktur, Funktion und Energie im gesamten Körper.
          </p>

          <h3 class="line mt-3">Wann kann Osteopathie helfen?</h3>
          <div>
            Die osteopathische Behandlung kann bei zahlreichen Beschwerden helfen, z.&nbsp;B.:
            <ul class="pl-5">
              <li>Bewegungseinschränkungen und Lahmheiten</li>
              <li>Rücken- und Gelenkprobleme</li>
              <li>Muskuläre Verspannungen</li>
              <li>Verdauungsstörungen</li>
              <li>Verhaltensauffälligkeiten</li>
            </ul>
          </div>

          <h3 class="line mt-3">Für welche Tiere ist Osteopathie geeignet?</h3>
          <p>
            Osteopathie ist in der Regel schmerzfrei und eignet sich für Hunde und Pferde aller Altersgruppen – ob Welpe, Sportpferd oder Senior. Sie ist eine wertvolle Ergänzung zur Schulmedizin und kann helfen, die Lebensqualität deines Lieblings spürbar zu verbessern.
          </p>

          <h3 class="line mt-3">Deine Ansprechpartnerin</h3>
          <p>
            Ich bin ausgebildete Tierosteopathin mit langjähriger Erfahrung. Mit viel Einfühlungsvermögen und Fachwissen begleite ich dein Tier auf dem Weg zu mehr Wohlbefinden und Lebensfreude.
          </p>
          <v-row class="justify-end mt-5" style="width: 100%;">
            <v-col cols="2">
              <div class="chirosiegel"></div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card>
          <v-img alt="Andrea Bachem bei der osteopathischen Behandlung eines Pferdes" class="" cover style="height: 70vh"  src="~/assets/bilderPages/osteopatierechts.webp">

          </v-img>

        </v-card>
      </v-col>

    </v-row>
  </div>
  <div v-if="mobile || tablet" class="background" style="padding-top: 20px">
    <HeadermobileComponent v-if="mobile || tablet"></HeadermobileComponent>
    <v-row class="justify-center mx-0 mt-2" style="overflow-y: scroll">

      <v-col style="height: 300px" cols="11">
        <v-card>
          <v-img alt="Andrea Bachem bei der osteopathischen Behandlung eines Pferdes" class="" cover style="height: 70vh" src="~/assets/bilderPages/osteopatielinks.webp">

          </v-img>

        </v-card>
      </v-col>
      <v-col cols="11">
        <v-card class="background-impressum pa-7" style="overflow: auto; max-height: 40vh; width: 100%">
          <h1 class="line">Osteopathie für Tiere</h1>

          <h2 class="line mt-2">Sanfte Therapie für ein gesundes und bewegliches Tierleben</h2>

          <p>
            Die Osteopathie ist eine besonders sanfte, ganzheitliche Behandlungsmethode, die darauf abzielt, die natürlichen Selbstheilungskräfte deines Tieres zu aktivieren.
          </p>

          <h3 class="line mt-2">Was ist Tierosteopathie?</h3>
          <p>
            Durch gezielte manuelle Techniken werden Blockaden, Verspannungen und Bewegungseinschränkungen aufgespürt und gelöst – ganz ohne Medikamente. Dabei steht nicht das einzelne Symptom im Mittelpunkt, sondern das Zusammenspiel von Struktur, Funktion und Energie im gesamten Körper.
          </p>

          <h3 class="line mt-2">Wann kann Osteopathie helfen?</h3>
          <div>
            Die osteopathische Behandlung kann bei zahlreichen Beschwerden helfen, z.&nbsp;B.:
            <ul class="pl-5">
              <li>Bewegungseinschränkungen und Lahmheiten</li>
              <li>Rücken- und Gelenkprobleme</li>
              <li>Muskuläre Verspannungen</li>
              <li>Verdauungsstörungen</li>
              <li>Verhaltensauffälligkeiten</li>
            </ul>
          </div>

          <h3 class="line mt-2">Für welche Tiere ist Osteopathie geeignet?</h3>
          <p>
            Osteopathie ist in der Regel schmerzfrei und eignet sich für Hunde und Pferde aller Altersgruppen – ob Welpe, Sportpferd oder Senior. Sie ist eine wertvolle Ergänzung zur Schulmedizin und kann helfen, die Lebensqualität deines Lieblings spürbar zu verbessern.
          </p>

          <h3 class="line mt-2">Deine Ansprechpartnerin</h3>
          <p>
            Ich bin ausgebildete  Tierosteopathin mit langjähriger Erfahrung. Mit viel Einfühlungsvermögen und Fachwissen begleite ich dein Tier auf dem Weg zu mehr Wohlbefinden und Lebensfreude.
          </p>
          <v-row class="justify-end mt-5" style="width: 100%;">
            <v-col cols="2">
              <div class="chirosiegel"></div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

    </v-row>


  </div>
</template>

<script setup>

useHead({
  htmlAttrs: {
    lang: 'de'
  },
  title: 'Tierosteopathie für Hund & Pferd  Tiergesundheits Erftstadt',
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap'
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
      rel: 'canonical',
      href: 'https://tier-gesundheitszentrum.com/osteopathie',
    },
  ],
  meta: [
    {
      name: 'description',
      content:
          'Sanfte Tierosteopathie für Hund & Pferd in Erftstadt – ganzheitliche Behandlung bei Verspannungen, Gelenkproblemen & mehr durch Andrea Bachem.',
    },
    {
      name: 'keywords',
      content:
          'Tierosteopathie Hund, Tierosteopathie Pferd, Osteopathie Tiere Erftstadt, Andrea Bachem, Tiertherapie, ganzheitliche Tierbehandlung, Gelenkprobleme Tiere, sanfte Tierbehandlung',
    },
    {
      name: 'author',
      content: 'Andrea Bachem'
    },
    {
      property: 'og:title',
      content: 'Tierosteopathie für Hund & Pferd | Andrea Bachem – Tiergesundheitszentrum Erftstadt'
    },
    {
      property: 'og:description',
      content:
          'Professionelle osteopathische Betreuung für Hunde & Pferde. Sanfte Therapie zur Förderung der Selbstheilung und Mobilität – bei Andrea Bachem in Erftstadt.',
    },
    {
      property: 'og:url',
      content: 'https://tier-gesundheitszentrum.com/osteopathie'
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ],
});



</script>
<script>


import {useScreenStore} from "~/stores/screen.js";

export default {
  name: "osteopatie",
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


.chirosiegel {
  background-image: url("@/assets/chiroSiegel.webp");
  background-size: cover;
  height: 170px;
  width: 170px;
  margin-top: -50px;

}


.line {
  font-family: "Dancing Script", cursive;
  color: rgba(44, 42, 42, 0.86);
}
a {
  text-decoration: none;
  color: inherit
}




.line {
  font-family: "Dancing Script", cursive;
  color: #2c2a2a;
}



.background-impressum {

  background-image: url("@/assets/paper.webp");
  background-size: cover;

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


.chirosiegel {
  background-image: url("@/assets/osteoSiegel.png");
  background-size: cover;
  height: 70px;
  width: 70px;
}

a:focus {
  outline: 2px solid blue;
}
</style>