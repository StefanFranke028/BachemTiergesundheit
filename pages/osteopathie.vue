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
          <h1 class="line">Osteopathie für Tiere in Erftstadt – Ganzheitlich. Sanft. Wirksam.</h1>

          <h2 class="line mt-3">Dein Hund wirkt steif? Dein Pferd hat Taktunreinheiten oder zeigt Verhaltensänderungen?</h2>

          <p>
            Manchmal liegt die Ursache nicht dort, wo sich die Symptome zeigen – genau hier setzt die Tierosteopathie an.

            In meiner Praxis in Erftstadt biete ich eine sanfte, ganzheitliche Form der Therapie für Hunde und Pferde an. Ziel ist es, Blockaden im Körper aufzuspüren,
            die Beweglichkeit zu fördern und die natürliche Balance zwischen Struktur und Funktion wiederherzustellen.
          </p>

          <h3 class="line mt-3">Was ist Osteopathie bei Tieren?</h3>
          <p>
            Die Tierosteopathie ist eine manuelle Therapieform, die auf dem Grundsatz basiert: Bewegung ist Leben. Jeder Knochen,
            jedes Organ, jede Muskelgruppe sollte sich frei und im Einklang mit dem gesamten Körper bewegen können.

            Schon kleinste Bewegungseinschränkungen – etwa durch Verletzungen, Fehlbelastungen oder innere Spannungen –
            können Auswirkungen auf den gesamten Organismus haben. Dabei stehen nicht nur Muskeln und Gelenke im Fokus, sondern
            auch die Organe und Faszien, die eng mit dem Bewegungsapparat und dem Nervensystem verbunden sind.
          </p>

          <h3 class="line mt-3">Wie wirken sich Blockaden auf Organe (und umgekehrt) aus?</h3>
          <p>
            Blockaden in der Wirbelsäule oder im Beckenbereich können Spannungen auf die umgebenden Faszien und Nervenbahnen erzeugen –
            diese wiederum beeinflussen die Funktion innerer Organe. Umgekehrt können auch Organerkrankungen oder Verdauungsstörungen über
            nervale Verbindungen und Faszienzüge zu muskulären Verspannungen oder Verhaltensänderungen führen.
            Die Osteopathie setzt genau hier an: Durch gezielte, sanfte Impulse wird der Körper unterstützt, wieder ins Gleichgewicht zu kommen.
            Das Ziel ist nicht nur die Linderung von Beschwerden, sondern die Förderung eines gesunden Gesamtzustands.
          </p>
          <h3 class="line mt-3">Wann kann eine osteopathische Behandlung sinnvoll sein?
          </h3>

          <div>
            Osteopathie kann unterstützend eingesetzt werden bei:
            <ul class="pl-5">
              <li>Bewegungseinschränkungen und Lahmheiten
              </li>
              <li>Rückenproblemen und Gelenkblockaden

              </li>
              <li>Muskelverspannungen und Taktunreinheiten</li>
              <li>Verdauungsproblemen, Unruhe oder nervösem Verhalten</li>
              <li>Veränderungen im Gangbild oder in der Haltung</li>
              <li>Nach Stürzen, Unfällen oder Operationen</li>
              <li>Zur Begleitung von Sporthunden oder Turnierpferden</li>
            </ul>
          </div>

          <h3 class="line mt-3">
            Für Hunde und Pferde jeden Alters geeignet
          </h3>
          <p>
            Ob Welpe, aktiver Sportler oder Senior – die osteopathische Behandlung ist sanft, schmerzfrei und individuell auf dein Tier abgestimmt.
            Sie eignet sich zur Prävention, zur Ergänzung schulmedizinischer Therapien oder zur Begleitung chronischer Prozesse.
          </p>

          <h3 class="line mt-3">Deine Tierosteopathin in Erftstadt: Andrea Bachem</h3>
          <p>
            Als erfahrene und geprüfte Tierosteopathin für Hund und Pferd begleite ich dein Tier mit Fachwissen,
            Feingefühl und einem ganzheitlichen Blick. Ich nehme mir Zeit für eine ausführliche Anamnese,
            eine genaue Untersuchung und eine individuell abgestimmte Behandlung – immer mit dem Ziel,
            Körper und Seele deines Tieres in Einklang zu bringen.
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
          <h1 style="font-size: 22px" class="line">Osteopathie für Tiere in Erftstadt – Ganzheitlich. Sanft. Wirksam.</h1>

          <h2 style="font-size: 18px" class="line mt-3">Dein Hund wirkt steif? Dein Pferd hat Taktunreinheiten oder zeigt Verhaltensänderungen?</h2>

          <p>
            Manchmal liegt die Ursache nicht dort, wo sich die Symptome zeigen – genau hier setzt die Tierosteopathie an.
            In meiner Praxis in Erftstadt biete ich eine sanfte, ganzheitliche Form der Therapie für Hunde und Pferde an. Ziel ist es, Blockaden im Körper aufzuspüren,
            die Beweglichkeit zu fördern und die natürliche Balance zwischen Struktur und Funktion wiederherzustellen.
          </p>

          <h3 class="line mt-3">Was ist Osteopathie bei Tieren?</h3>
          <p>
            Die Tierosteopathie ist eine manuelle Therapieform, die auf dem Grundsatz basiert: Bewegung ist Leben. Jeder Knochen,
            jedes Organ, jede Muskelgruppe sollte sich frei und im Einklang mit dem gesamten Körper bewegen können.
            Schon kleinste Bewegungseinschränkungen – etwa durch Verletzungen, Fehlbelastungen oder innere Spannungen –
            können Auswirkungen auf den gesamten Organismus haben. Dabei stehen nicht nur Muskeln und Gelenke im Fokus, sondern
            auch die Organe und Faszien, die eng mit dem Bewegungsapparat und dem Nervensystem verbunden sind.
          </p>

          <h3 class="line mt-3">Wie wirken sich Blockaden auf Organe (und umgekehrt) aus?</h3>
          <p>
            Blockaden in der Wirbelsäule oder im Beckenbereich können Spannungen auf die umgebenden Faszien und Nervenbahnen erzeugen –
            diese wiederum beeinflussen die Funktion innerer Organe. Umgekehrt können auch Organerkrankungen oder Verdauungsstörungen über
            nervale Verbindungen und Faszienzüge zu muskulären Verspannungen oder Verhaltensänderungen führen.
            Die Osteopathie setzt genau hier an: Durch gezielte, sanfte Impulse wird der Körper unterstützt, wieder ins Gleichgewicht zu kommen.
            Das Ziel ist nicht nur die Linderung von Beschwerden, sondern die Förderung eines gesunden Gesamtzustands.
          </p>

          <h3 class="line mt-3">Wann kann eine osteopathische Behandlung sinnvoll sein?</h3>

          <div>
            Osteopathie kann unterstützend eingesetzt werden bei:
            <ul class="pl-5">
              <li>Bewegungseinschränkungen und Lahmheiten</li>
              <li>Rückenproblemen und Gelenkblockaden</li>
              <li>Muskelverspannungen und Taktunreinheiten</li>
              <li>Verdauungsproblemen, Unruhe oder nervösem Verhalten</li>
              <li>Veränderungen im Gangbild oder in der Haltung</li>
              <li>Nach Stürzen, Unfällen oder Operationen</li>
              <li>Zur Begleitung von Sporthunden oder Turnierpferden</li>
            </ul>
          </div>

          <h3 class="line mt-3">
            Für Hunde und Pferde jeden Alters geeignet
          </h3>
          <p>
            Ob Welpe, aktiver Sportler oder Senior – die osteopathische Behandlung ist sanft, schmerzfrei und individuell auf dein Tier abgestimmt.
            Sie eignet sich zur Prävention, zur Ergänzung schulmedizinischer Therapien oder zur Begleitung chronischer Prozesse.
          </p>

          <h3 class="line mt-3">Deine Tierosteopathin in Erftstadt: Andrea Bachem</h3>
          <p>
            Als erfahrene und geprüfte Tierosteopathin für Hund und Pferd begleite ich dein Tier mit Fachwissen,
            Feingefühl und einem ganzheitlichen Blick. Ich nehme mir Zeit für eine ausführliche Anamnese,
            eine genaue Untersuchung und eine individuell abgestimmte Behandlung – immer mit dem Ziel,
            Körper und Seele deines Tieres in Einklang zu bringen.
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
      name: 'robots',
      content: 'index, follow'
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
      property: 'og:image', content: 'https://tier-gesundheitszentrum.com/favicon.png'
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



a {
  text-decoration: none;
  color: inherit
}




.line {
  font-family: "Montserrat", sans-serif;
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
