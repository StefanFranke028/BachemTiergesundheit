<template>
  <div v-if="(desktop|| tabletHorizontal) && formattedPath !== 'admin'" :class="formattedPath" class="desktop">
    <v-row class="ma-0 justify-center" style="width: 100%;">
      <v-col class="d-flex justify-center" cols="4">
        <div style="cursor: pointer">
            <span style="font-size: 22px; color: #4e4e4e; ">
                MILA
                  <b class="ml-n1" style="color: black">
                ESCORT
              </b>
            </span>
        </div>
      </v-col>

    </v-row>
    <v-divider></v-divider>
    <v-row class="ma-0 justify-center" style="width: 100%">
      <v-col cols="3">
        <p>
          <b>
            Get in Touch

          </b>

        </p>

        <p>
          Fon: <a href="tel:+4915167037696">+49 151 670 376 96</a>
        </p>

        <p>
          E-Mail: <a href="mailto:Team@Mila-escort.de">Team@Mila-escort.de</a>
        </p>
        <p class="mt-2">
          <b>

            Office Zeiten
          </b>

        </p>
        <p>
          Montag-Freitag von 10:00 bis 18.00 Uhr

        </p>
        <p>
          Bitte beachten: An Sonn- und Feiertagen haben wir geschlossen.

        </p>
        <p class="mt-2">
          Wir freuen uns darauf, Dich an Werktagen wiederzusehen!

        </p>
        <p>
          Für Buchungsanfragen bitten wir um eine Kontaktaufnahme ausschließlich per E-Mail.

        </p>

      </v-col>
      <v-col cols="3">
        <p class="text-center">
          <b>
            Mila Escort Service
          </b>
        </p>
        <NuxtLink to="/magazin" class="text-center mt-2" style="display: block; text-decoration: none; color: inherit;">
          Magazin
        </NuxtLink>

        <NuxtLink :to="{ path: '/magazin', query: { special: 'Feminine_Finesse' } }"
                  class="text-center mt-2"
                  style="display: block; text-decoration: none; color: inherit;">
          Feminine Finesse
        </NuxtLink>

        <NuxtLink :to="{ path: '/magazin', query: { special: 'Herren1x1' } }"
                  class="text-center mt-2"
                  style="display: block; text-decoration: none; color: inherit;">
          1 x 1 für unsere Herren
        </NuxtLink>

        <NuxtLink to="/vertragsbedingungen" class="text-center mt-2" style="display: block; text-decoration: none; color: inherit;">
          Vertragsbedingungen
        </NuxtLink>

        <NuxtLink to="/werbepartner" class="text-center mt-2" style="display: block; text-decoration: none; color: inherit;">
          Werbepartner
        </NuxtLink>


      </v-col>
      <v-col cols="3">
        <p @click="navigateTo('casting')">
          <b>
            Casting & High-Class Escort Service Jobs
          </b>
        </p>
        <NuxtLink to="/casting" class="mt-2" style="display: block; text-decoration: none; color: inherit;">
          Entdecke spannende Karrieremöglichkeiten.
        </NuxtLink>

        <NuxtLink to="/casting" class="mt-2" style="display: block; text-decoration: none; color: inherit;">
          Dein Weg zu einer erfolgreichen Escort Karriere
        </NuxtLink>

        <NuxtLink to="/casting" class="mt-2" style="display: block; text-decoration: none; color: inherit;">
          Werde ein Teil unseres exklusiven Escort Agency Teams
        </NuxtLink>

        <NuxtLink to="/magazin" class="mt-2" style="display: block; text-decoration: none; color: inherit;">
          Antworten auf häufige Fragen für neue Escort Talente
        </NuxtLink>

      </v-col>
      <v-col class=" " cols="3">
        <p class="text-center">
          <b>
            Escort Service Metropolen

          </b>
        </p>
        <v-row class="ma-0 d-flex justify-center" style="width: 100%">
          <v-col
              v-for="(stadt, index) in staedte"
              :key="stadt"
              class="pa-0 d-flex justify-center"
              cols="5"
          >
            <NuxtLink
                :to="'/MilaEscort-' + stadt.name"
                style="text-decoration: none; color: black"
            >
              <p
                  class="mt-1"
                  :class="index % 2 === 0 ? 'ml-20' : 'mr-20'"
                  style="cursor: pointer"
              >
                {{ stadt.name }}
              </p>
            </NuxtLink>

          </v-col>

        </v-row>

      </v-col>
    </v-row>
    <div class="d-flex justify-center " style="position: relative;">
      <p style="font-size: 11px">
        Copyright © 2025 Mila Escort ® • Alle Rechte vorbehalten •
        <router-link aria-label="Impressum" class="nav-link" title="Impressum" to="/impressum">
          <span class="">Anbieterkennzeichnung</span>
        </router-link> &nbsp;
        •
        <router-link aria-label="Impressum" class="nav-link" title="DAtenschutz" to="/datenschutz">
          <span class=""> Disclaimer & Datenschutzerklärung </span>
        </router-link> &nbsp;
        •
        <router-link aria-label="Impressum" class="nav-link" title="Verwaltung" to="/admin">
          <span class="">Admin</span>
        </router-link> &nbsp;


      </p>
    </div>

  </div>
  <div v-if="mobile|| tablet" :class="formattedPath" class="mobile">
    <v-row class="justify-center  ma-0" style="width: 100%">
      <v-col class="d-flex justify-center"  cols="10">
        <div style="cursor: pointer">
            <span  style="font-size: 22px; color: #4e4e4e; ">
                MILA
                  <b class="ml-n1" style="color: black">
                ESCORT
              </b>
            </span>
        </div>

      </v-col>

    </v-row>
    <v-divider></v-divider>
    <v-row class="ma-0 justify-center" style="width: 100%">
      <v-col cols="12">
        <p>
          <b>
            Get in Touch

          </b>

        </p>

        <p>
          Fon: <a href="tel:+4915167037696">+49 151 670 376 96</a>
        </p>

        <p>
          E-Mail: <a href="mailto:team@Mila-escort.de">Team@Mila-escort.de</a>
        </p>
        <p class="mt-2">
          <b>

            Office Zeiten
          </b>

        </p>
        <p>
          Montag-Freitag von 10:00 bis 18.00 Uhr

        </p>
        <p>
          Bitte beachten: An Sonn- und Feiertagen haben wir geschlossen.

        </p>
        <p class="mt-2">
          Wir freuen uns darauf, Dich an Werktagen wiederzusehen!

        </p>
        <p>
          Für Buchungsanfragen bitten wir um eine Kontaktaufnahme ausschließlich per E-Mail.

        </p>

      </v-col>
      <v-col cols="12">
        <p class="">
          <b>
            Mila Escort Service
          </b>
        </p>
        <NuxtLink to="/magazin" class="mt-2" style="display: block; text-decoration: none; color: inherit;">
          Magazin
        </NuxtLink>

        <NuxtLink :to="{ path: '/magazin', query: { special: 'Feminine_Finesse' } }" class="mt-2" style="display: block; text-decoration: none; color: inherit;">
          Feminine Finesse
        </NuxtLink>

        <NuxtLink :to="{ path: '/magazin', query: { special: 'Herren1x1' } }" class="mt-2" style="display: block; text-decoration: none; color: inherit;">
          1 x 1 für unsere Herren
        </NuxtLink>

        <NuxtLink to="/vertragsbedingungen" class="mt-2" style="display: block; text-decoration: none; color: inherit;">
          Vertragsbedingungen
        </NuxtLink>

        <NuxtLink to="/werbepartner" class="mt-2" style="display: block; text-decoration: none; color: inherit;">
          Werbepartner
        </NuxtLink>


      </v-col>
      <v-col cols="12">
        <p @click="navigateTo('casting')">
          <b>
            Casting & High-Class Escort Service Jobs
          </b>
        </p>
        <NuxtLink to="/casting" style="display: block; text-decoration: none; color: inherit;" class="mt-2">
          <b>
            Casting & High-Class Escort Service Jobs
          </b>
        </NuxtLink>

        <NuxtLink to="/casting" style="display: block; text-decoration: none; color: inherit;" class="mt-2">
          Entdecke spannende Karrieremöglichkeiten.
        </NuxtLink>

        <NuxtLink to="/casting" style="display: block; text-decoration: none; color: inherit;" class="mt-2">
          Dein Weg zu einer erfolgreichen Escort Karriere
        </NuxtLink>

        <NuxtLink to="/casting" style="display: block; text-decoration: none; color: inherit;" class="mt-2">
          Werde ein Teil unseres exklusiven Escort Agency Teams
        </NuxtLink>

        <NuxtLink to="/magazin" style="display: block; text-decoration: none; color: inherit;" class="mt-2">
          Antworten auf häufige Fragen für neue Escort Talente
        </NuxtLink>

      </v-col>
      <v-col class=" " cols="12">
        <p class="">
          <b>
            Escort Service Metropolen

          </b>
        </p>
        <v-row class="ma-0 d-flex  mt-2" style="width: 60%">
          <v-col
              v-for="(stadt, index) in staedte"
              :key="stadt"
              class="pa-0 "
              cols="5"
          >
            <nuxt-link
                class=""
                :to="'MilaEscort-' + stadt.name"
                style="text-decoration: none; color: black"
            >
              <p
                  class="mt-2"

                  style="cursor: pointer"
              >
                {{ stadt.name }}
              </p>
            </nuxt-link>

          </v-col>

        </v-row>

      </v-col>
    </v-row>

    <div class="d-flex pl-3 mt-3 " style="position: relative;">
      <div style="font-size: 12px">
        <b>
          Copyright © 2025 Mila Escort ®
        </b>
       <br >
        <p class="mt-1">
        Alle Rechte vorbehalten

        </p>
        <router-link   aria-label="Impressum" class="nav-link " title="Impressum" to="/impressum">
          <p class="mt-1">Anbieterkennzeichnung</p>
        </router-link>

        <router-link   aria-label="Impressum" class="nav-link " title="Impressum" to="/datenschutz">
          <p class=" mt-1"> Disclaimer & Datenschutzerklärung </p> <br>
        </router-link>




      </div>
    </div>


  </div>
</template>


<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()

const navigateToMagazin = (category = 'feminine') => {
  router.push({ path: '/magazin', query: { special: category } })
}

// SSR-fähig geladen mit useFetch
const { data: staedte, error } = await useFetch('https://mila-escort.de:8443/auth/stadt/namen', {
  method: 'GET',
  // Nur wenn public zugänglich! Falls nicht, Auth über Server-Token oder API-Key einbauen
  headers: {
    // Authorization: 'Bearer xxx' // Nur wenn nötig
  },
  server: true, // explizit serverseitig
})

if (error.value) {
  console.error('Fehler beim Laden der Städte:', error.value)
}
</script>



<script>

import {useScreenStore} from "~/stores/screen.js";

export default {
  name: "FooterComponent",
  data() {
    return {}
  },
  components: {},
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
    formattedPath() {
      // Überprüfe, ob der Pfad mehr als nur ein "/" enthält
      if (this.$route.path !== '/') {
        if (this.$route.path.startsWith('/Mila')) {
          return 'footer';
        }
        return this.$route.path.substring(1);
      }
      return 'footer';
    }
  }
}
</script>

<style scoped>
.footer {

  background-image: linear-gradient(to bottom, #e5dbdc 50%, #fafafa 100%);
}

.highClassBegleitungen {

  background-image: linear-gradient(to bottom, #c7dee6 50%, #ffffff 100%);
}

.konditionen {

  background-image: linear-gradient(to bottom, #c7dee6 50%, #ffffff 100%);
}

.getInTouch {

  background-image: linear-gradient(to bottom, #d1e3d3 50%, #ffffff 100%);
}

.datenschutz {

  background-image: linear-gradient(to bottom, #e5dbdc 50%, #fafafa 100%);
}

.impressum {

  background-image: linear-gradient(to bottom, #e5dbdc 50%, #fafafa 100%);
}

.vita {

  background-image: linear-gradient(to bottom, #d1e3d3 50%, #ffffff 100%);
}

.casting {

  background-image: linear-gradient(to bottom, #e5dbdc 50%, #fafafa 100%);
}

.magazin {

  background-image: linear-gradient(to bottom, #c7dee6 50%, #ffffff 100%);
}

.footer {

  background-image: linear-gradient(to bottom, #e5dbdc 50%, #fafafa 100%);

}

.vision {

  background-image: linear-gradient(to bottom, #d1e3d3 50%, #ffffff 100%);

}

p {
  font-size: 13px;
  cursor: pointer;
}

.mobile {
  width: 100%;
  height: 110px;
}

.desktop {
  width: 100%;

}

.nav-link {
  text-decoration: none;
  color: inherit;
}
.ml-20{
  margin-left: 3.8vw
}
.mr-20{
  margin-right: 3.8vw
}
</style>
