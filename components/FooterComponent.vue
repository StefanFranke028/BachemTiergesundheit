<template>
  <div v-if="(desktop|| tabletHorizontal) && formattedPath !== 'verwaltung'" :class="formattedPath" class="desktop">
    <v-row class="ma-0 justify-center" style="width: 100%;">
      <v-col class="d-flex justify-center" cols="4">
        <div style="cursor: pointer">
            <span style="font-size: 22px; color: #4e4e4e; ">
                MAXI
                  <b class="ml-n1" style="color: black">
                ESCORT
              </b>
            </span>
        </div>
      </v-col>

    </v-row>
    <v-divider></v-divider>
    <v-row class="ma-0 justify-center" style="width: 100%">
      <v-col class="d-flex justify-center" cols="8">
        <v-row class="ma-0 pa-16" style="width: 100%">
          <v-col v-for="stadt in staedte" :key="stadt" class="" cols="3">
            <nuxt-link :to="'MaxiEscort-'+ stadt.name" style="text-decoration: none; color: black">
              <p style="cursor:pointer">
                {{ stadt.name }}
              </p>

            </nuxt-link>
            <v-divider></v-divider>
          </v-col>
        </v-row>

      </v-col>
    </v-row>
    <div class="d-flex justify-center " style="position: relative;">
      <p style="font-size: 11px">
        Copyright © 2024 Maxi Escort ® • Alle Rechte vorbehalten •
        <router-link aria-label="Impressum" class="nav-link" title="Impressum" to="/impressum">
          <span class="">Anbieterkennzeichnung</span>
        </router-link> &nbsp;
        •
        <router-link aria-label="Impressum" class="nav-link" title="Impressum" to="/datenschutz">
          <span class=""> Disclaimer & Datenschutzerklärung </span>
        </router-link> &nbsp;
        •
        <router-link aria-label="Impressum" class="nav-link" title="Impressum" to="/verwaltung">
          <span class="">Sitemap</span>
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
        <nuxt-link :to="'MaxiEscort-'+ stadt.name" style="text-decoration: none; color: black">
          <p class="text-center" style="cursor:pointer">
            {{ stadt.name }}
          </p>

        </nuxt-link>
        <v-divider></v-divider>
      </v-col>
    </v-row>
    <div class="d-flex justify-center px-2" style="position: relative;">
      <p style="font-size: 6px">
        Copyright © 2024 Maxi Escort ® • Alle Rechte vorbehalten •
        <router-link aria-label="Impressum" class="nav-link" title="Impressum" to="/impressum">
          <span class="">Anbieterkennzeichnung</span>
        </router-link> &nbsp;
        •
        <router-link aria-label="Impressum" class="nav-link" title="Impressum" to="/datenschutz">
          <span class=""> Disclaimer & Datenschutzerklärung </span>
        </router-link> &nbsp;
        •
        <router-link aria-label="Impressum" class="nav-link" title="Impressum" to="/verwaltung">
          <span class="">Sitemap</span>
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
useHead({
  title: landingpage1.value ? 'Maxi Escort Service' : 'Maxi Escort Service',
  meta: [
    {
      name: 'description',
      content: landingpage1.value?.description || 'Exklusivität und Diskretion auf höchstem Niveau – Ihr Maxi Escort Service in Frankfurt.',
    },
    {
      name: 'keywords',
      content: landingpage1.value?.keywords || 'Escort, Frankfurt, Diskretion, Exklusivität, Maxi Escort Service',
    },
  ],
});
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
        // Überprüfe, ob der Pfad mit "maxi" beginnt
        if (this.$route.path.startsWith('/Maxi')) {
          return 'footer';
        }
        // Entferne das führende "/" vom Pfad
        return this.$route.path.substring(1);
      }
      // Wenn der Pfad nur aus "/" besteht, gib ihn unverändert zurück
      return 'footer';
    }
  }
}
</script>

<style scoped>
.footer {

  background-image: linear-gradient(to bottom, #e5dbdc 50%, #fafafa 100%);
}

.damen {

  background-image: linear-gradient(to bottom, #c7dee6 50%, #ffffff 100%);
}

.honorare {

  background-image: linear-gradient(to bottom, #c7dee6 50%, #ffffff 100%);
}

.kontakt {

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

.bewerben {

  background-image: linear-gradient(to bottom, #e5dbdc 50%, #fafafa 100%);
}

.blog {

  background-image: linear-gradient(to bottom, #c7dee6 50%, #ffffff 100%);
}

.footer {

  background-image: linear-gradient(to bottom, #e5dbdc 50%, #fafafa 100%);

}

.team {

  background-image: linear-gradient(to bottom, #d1e3d3 50%, #ffffff 100%);

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
</style>
