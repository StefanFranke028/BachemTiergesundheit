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
          Fon: +49 151- 670 376 96

        </p>
        <p>
          E-Mail: Team@Mila-escort.de
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
            Mila Escord Service
          </b>
        </p>
        <p class="text-center mt-2" @click="navigateTo('magazin')">

          Magazin
        </p>
        <p class="text-center mt-2" @click="navigateTo('/')">
          Mila's Escort Philosophie

        </p>
        <p class="text-center mt-2">
          Feminine Finesse

        </p>
        <p class="text-center mt-2" @click="navigateTo('/impressum')">
          Anbieterkennzeichnung

        </p>
        <p class="text-center mt-2" @click="navigateTo('/vertragsbedingungen')">
          Vertragsbedingungen

        </p>
        <p class="text-center mt-2" @click="navigateTo('/datenschutz')">
          Ihre Privatsphäre

        </p>

      </v-col>
      <v-col cols="3">
        <p>
          <b>
            Preview & High-Class Escort Service Jobs
          </b>
        </p>
        <p class="mt-2" @click="navigateTo('bewerben')">

          Entdecke spannende Karrieremöglichkeiten.
        </p>
        <p class="mt-2" @click="navigateTo('bewerben')">
          Dein Weg zu einer erfolgreichen Escort Karriere

        </p>
        <p class="mt-2" @click="navigateTo('bewerben')">
          Werde ein Teil unseres exklusiven Escort Agency Teams

        </p>
        <p class="mt-2" @click="navigateTo('bewerben')">
          Antworten auf häufige Fragen für neue Escort Talente

        </p>
      </v-col>
      <v-col class=" " cols="3">
        <p class="text-center">
          <b>
            Escort Service Metropolen

          </b>
        </p>
        <v-row class="ma-0 d-flex  " style="width: 100%">
          <v-col
              v-for="(stadt, index) in staedte"
              :key="stadt"
              class="pa-0 d-flex justify-center"
              cols="6"
          >
            <nuxt-link
                :to="'MilaEscort-' + stadt.name"
                style="text-decoration: none; color: black"
            >
              <p
                  class="mt-1"
                  :class="index % 2 === 0 ? 'ml-20' : 'mr-20'"
                  style="cursor: pointer"
              >
                {{ stadt.name }}
              </p>
            </nuxt-link>
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
        <router-link aria-label="Impressum" class="nav-link" title="Impressum" to="/datenschutz">
          <span class=""> Disclaimer & Datenschutzerklärung </span>
        </router-link> &nbsp;
        •
        <router-link aria-label="Impressum" class="nav-link" title="Impressum" to="/admin">
          <span class="">Admin</span>
        </router-link> &nbsp;


      </p>
    </div>

  </div>
  <div v-if="mobile|| tablet" :class="formattedPath" class="mobile">
    <v-row class="justify-center ma-0" style="width: 100%">
      <v-col cols="10">
        <p class="text-center" style="font-size: 14px">Luxusbegleitung für besondere Momente</p>
        <br>

      </v-col>

    </v-row>
    <v-row class="ma-0 " style="width: 100%">
      <v-col v-for="stadt in staedte" :key="stadt" cols="6">
        <nuxt-link :to="'MilaEscort-'+ stadt.name" style="text-decoration: none; color: black">
          <p class="text-center" style="cursor:pointer">
            {{ stadt.name }}
          </p>

        </nuxt-link>
        <v-divider></v-divider>
      </v-col>
    </v-row>
    <div class="d-flex justify-center px-2" style="position: relative;">
      <p style="font-size: 6px">
        Copyright © 2025 Mila Escort ® • Alle Rechte vorbehalten •
        <router-link aria-label="Impressum" class="nav-link" title="Impressum" to="/impressum">
          <span class="">Anbieterkennzeichnung</span>
        </router-link> &nbsp;
        •
        <router-link aria-label="Impressum" class="nav-link" title="Impressum" to="/datenschutz">
          <span class=""> Disclaimer & Datenschutzerklärung </span>
        </router-link> &nbsp;
        •
        <router-link aria-label="Impressum" class="nav-link" title="Impressum" to="/pages/admin">
          <span class="">Admin</span>
        </router-link> &nbsp;
      </p>
    </div>
  </div>
</template>


<script setup>
import {ref} from 'vue';

// Reaktives Array für Landingpage-Daten
const staedte = ref([]);

// Methode zum Abrufen der Landingpage-Daten mit useAsyncData
const {data: landingpage1, pending, error} = await useAsyncData('landingpage1', async () => {
  let token = null;

  if (process.client) {
    // Zugriff auf localStorage nur auf dem Client
    token = localStorage.getItem('token');
  }

  try {
    const response = await $fetch("http://5.45.97.75:8080/auth/stadt/namen", {
      method: 'GET',
      headers: {
        Authorization: token ? `Bearer ${token}` : undefined,
      },
    });

    return response;
  } catch (e) {
    console.error('Fehler beim Laden der Landingpage:', e);
    return {
      description: '',
    };
  }
});

if (landingpage1.value) {
  staedte.value = landingpage1.value;
}

// Setze dynamisch den Head basierend auf den Landingpage-Daten

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

.arrangement {

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
  margin-left: 100px
}
.mr-20{
  margin-right: 100px
}
</style>
