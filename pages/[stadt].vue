<template>
  <div>
    <v-img alt="schwarz-weis Hintergrundbild" class="d-flex justify-center align-center" cover
           src="~/assets/Stadt.jpg" style="width: 100%; height: 450px;  ">
      <div class="d-flex justify-center align-center"
           style="height: 450px; width: 100vw; background-color: rgba(0,0,0,0.6); z-index: 9000;">
        <h1 class="text-white text-center dm-serif">Eleganz trifft Leidenschaft<br> in <br> {{ stadtparam }}</h1>


      </div>
    </v-img>
    <div class="d-flex align-center" style="background-color: #f1f0f0; min-height: 750px">
      <v-row class="mx-0 justify-center" style="width: 100%; min-height: 500px">
        <v-col class="d-flex align-center" cols="12" md="10" style="width: 100%; min-height: 500px">
          <v-card style="min-height: 300px ; width: 100%">
            <v-card-title class="text-center"> Eleganz trifft Leidenschaft in {{ stadtparam }}</v-card-title>
            <v-divider class="mx-12"></v-divider>
            <v-card-text>
              <h3 class="text-center">
                <!--                Hier finden Sie einige unserer Escort Begleitservice Ladies-->
                {{ stadt?.überschrift }}
                <br>

              </h3>
              <p :style="mobile ? 'font-size: 12px':'' " class="mt-3" style="text-align: justify; ">
                {{ stadt?.text }}
                <!--                Willkommen in der Welt von Maxi Escort Frankfurt, Ihrem High Class Escortservice
                für Frankfurt. Lassen Sie sich von unseren exklusiven Vorzügen verzaubern und
                erleben Sie, was wahre Eleganz und Anmut bedeuten.
                Wir suchen attraktive und selbstbewusste Escort-Damen aus Frankfurt, die mit
                Charme und Stil überzeugen. (Bewerbung-mail verlinken)

                Das Zuhause der Escort Agentur Maxi Escort und das unserer Escort Damen ist
                Metropolregion Frankfurt.

                Wir spezialisieren uns auf die Vermittlung von eleganten Escort-Damen in den
                Städten Frankfurt, Mainz, Wiesbaden, Bad Homburg, Taunus, Köln, Düsseldorf,
                München, Berlin und Hamburg. Unsere Damen verkörpern Stil und Klasse und sind
                bereit, unvergessliche Erlebnisse zu schaffen-->

              </p>
              <!--              <h3 class="text-center mt-6">
                              Willkommen bei unserer exklusiven Maxi Escort-Agentur Frankfurt und Bad
                              Homburg!
                            </h3>
                            <p :style="mobile ? 'font-size: 12px':'' " class="mt-3" style="text-align: justify;">
                              Willkommen bei unserer exklusiven Maxi Escort-Agentur Frankfurt und Bad
                              Homburg!
                              Wir vermitteln charmante und attraktive Escort-Damen in Frankfurt und Bad
                              Homburg. Unser Ziel ist es, Ihnen unvergessliche Erlebnisse zu bieten, die Ihre
                              Erwartungen übertreffen.
                              Darüber hinaus stehen wir Ihnen gerne persönlich zur Verfügung, um Empfehlungen
                              für die besten Restaurants, Hotels, Bars und das aufregende Nachtleben in der
                              Region zu geben. Lassen Sie uns helfen, Ihren Abend zu einem besonderen Ereignis
                              zu machen!
                              Kontaktieren Sie uns, um mehr über unsere Escort-Damen und die vielfältigen
                              Möglichkeiten zu erfahren, die wir für Sie bereithalten.

                            </p>-->

            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

    </div>
    <div class="pb-10" style="background-color: #ffffff; min-height: 400px">
      <v-row class="mx-0 mt-4 justify-center" style="width: 100%; height: 100%">
        <v-col v-for="dame in stadtDamen" :key="dame" class="d-flex justify-center" cols="11" md="3" xl="3">
          <v-card style="width: 350px">
            <v-img :src="dame.bilder[0].imageBase64" class="d-flex justify-center align-center" cover
                   style="width: 100%; height: 450px;  ">
            </v-img>
            <v-card-title class="text-center">{{ dame.name }}</v-card-title>
            <v-card-subtitle class="text-center">Aus {{ stadtparam }} | {{ dame.geburtsalter }}</v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>


<script>
import {useScreenStore} from "~/stores/screen.js";

export default {
  data() {
    return {
      stadtparam: '',
      damen: [],
      stadt: null
    }
  },
  methods: {
    async getStadt() {
      let response = await $fetch('https://maxi-escort.de:8443/auth/stadt/' + this.stadtparam)
      this.damen = await response.damen
      this.stadt = await response
      console.log(this.damen)
    }
  },
  mounted() {
    const route = useRoute()
    this.stadtparam = route.params.stadt.slice(11)
    this.getStadt()
  },
  computed: {
    stadtDamen: function () {
      return this.damen
    },

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


};

</script>
<style scoped>
.dm-serif {
  font-family: "DM Serif Text", serif;
  font-weight: 400;
  font-style: normal;
}
</style>