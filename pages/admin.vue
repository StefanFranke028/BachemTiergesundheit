<template>
  <div v-if="!mobile && !tablet " style="width: 100vw">
    <div class="background d-flex justify-center" style="width: 100vw; height: 100vh">
      <div v-if="isLoading" class="d-flex justify-center" style="width: 100vw">
        <v-col class="d-flex justify-center align-center" cols="12">
          <v-progress-circular color="primary" indeterminate size="70"></v-progress-circular>
        </v-col>
      </div>
      <div v-else>
        <div v-if="!user" class="d-flex justify-center align-center backgroundLogin"
             style="width: 100vw; height: 100vh">
          <LoginComponent/>
        </div>
        <v-row v-else class="d-flex justify-center ma-0"
               style="background-color: rgba(255,255,255,0.0); width: 100vw; height: 100vh">
          <v-col class="d-flex justify-center align-center" cols="3">
            <router-link to="/">
              <h3 class="text-center">Zurück zur Startseite</h3>
            </router-link>
          </v-col>
          <v-col class="d-flex justify-center align-center" cols="6">
            <h1>Verwaltung von Mila-Escort</h1>
          </v-col>
          <v-col class="d-flex justify-center align-center" cols="3">
            <h3 class="text-center" @click="logout">Ausloggen</h3>
          </v-col>
          <v-col class="d-flex justify-center align-center" cols="3">
            <!-- Erster Dropdown -->
            <v-select
                v-model="selectedSeite"
                :items="seiten"
                label="Wählen Sie eine Seite">
            </v-select>
          </v-col>
          <v-col class="d-flex justify-center align-center" cols="1">
            <p class="mt-n5">< -- ></p>
          </v-col>
          <v-col class="d-flex justify-center align-center" cols="3">
            <!-- Zweiter Dropdown -->
            <v-select
                v-model="selectedItem"
                :items="items"
                label="Wählen Sie Damen, Preise, etc.">
              test
            </v-select>
          </v-col>
          <v-col cols="9">
            <v-card
                :height="selectedSeite === null && selectedItem === null ? '100%' : '70vh'"
                class="mt-n10"
                style="background-color: transparent !important; border: 1px solid transparent !important; box-shadow: none !important;">
              <StartseiteComponent v-if="selectedSeite === 'Startseite'"/>
              <TeamComponent v-if="selectedSeite === 'Vision'"/>
              <VitaComponent v-if="selectedSeite === 'Vita'"/>
              <EscortComponent v-if="selectedSeite === 'High Class Begleitungen'"/>
              <BewerbenComponent v-if="selectedSeite === 'Escort'"/>
              <KontaktComponent v-if="selectedSeite === 'Get in touch'"/>
              <HonorareComponent v-if="selectedSeite === 'Konditionen'"/>
              <BlogComponent v-if="selectedSeite === 'Magazin'"/>
              <VertragsbedingungenComponent v-if="selectedSeite === 'Vertragsbedingungen'"/>
              <!-- Weitere Optionen basierend auf selectedItem -->
              <BlogEintraegeComponent v-if="selectedItem === 'Blog-Einträge'"/>
              <DinnerPreiseComponent v-if="selectedItem === 'Konditionen Tabelle 1'"/>
              <EscortPreiseComponent v-if="selectedItem === 'Konditionen Tabelle 2'"/>
              <DamenComponent v-if="selectedItem === 'Damen'"/>
              <CastingComponent v-if="selectedItem === 'Casting'"/>
              <StadtComponent v-if="selectedItem === 'Stadt'"/>
              <RechnungComponent v-if="selectedItem === 'Rechnung'"/>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
  <!-- Für mobile Geräte -->
  <div v-if="mobile || tablet " class="d-flex justify-center align-center pb-16">
    <v-card class="mx-5 mt-16" color="grey">
      <v-card-title>
        <h1>Mila-Escort</h1>
      </v-card-title>
      <v-card-item>
        Diese Ansicht ist leider auf dem Handy nicht verfügbar. Bitte kehren Sie zur
        <router-link style="color: blue" to="/">Startseite</router-link>
        zurück.
      </v-card-item>
    </v-card>
  </div>
</template>

<script>
import {useUserStore} from "~/stores/user.js";
import StartseiteComponent from "~/components/verwaltung/StartseiteComponent.vue";
import TeamComponent from "~/components/verwaltung/TeamComponent.vue";
import VitaComponent from "~/components/verwaltung/VitaComponent.vue";
import EscortComponent from "~/components/verwaltung/EscortComponent.vue";
import BewerbenComponent from "~/components/verwaltung/BewerbenComponent.vue";
import KontaktComponent from "~/components/verwaltung/kontaktComponent.vue";
import HonorareComponent from "~/components/verwaltung/HonorareComponent.vue";
import BlogComponent from "~/components/verwaltung/BlogComponent.vue";
import BlogEintraegeComponent from "~/components/verwaltung/BlogEintraegeComponent.vue";
import DinnerPreiseComponent from "~/components/verwaltung/DinnerPreiseComponent.vue";
import EscortPreiseComponent from "~/components/verwaltung/EscortPreiseComponent.vue";
import DamenComponent from "~/components/verwaltung/DamenComponent.vue";
import StadtComponent from "~/components/verwaltung/StadtComponent.vue";
import LoginComponent from "~/components/verwaltung/LoginComponent.vue";
import VertragsbedingungenComponent from "~/components/verwaltung/VertragsbedinungenComponent.vue";
import CastingComponent from "~/components/verwaltung/CastingComponent.vue";
import RechnungComponent from "~/components/verwaltung/RechnungComponent.vue";

export default {
  name: "verwaltung",
  components: {
    RechnungComponent,
    StartseiteComponent,
    TeamComponent,
    VitaComponent,
    EscortComponent,
    BewerbenComponent,
    KontaktComponent: KontaktComponent,
    HonorareComponent,
    BlogComponent,
    BlogEintraegeComponent,
    DinnerPreiseComponent,
    EscortPreiseComponent,
    CastingComponent,
    DamenComponent,
    StadtComponent,
    LoginComponent,
    VertragsbedingungenComponent
  },
  data() {
    return {
      seiten: ['Startseite', 'Vision', 'Vita', 'High Class Begleitungen', 'Escort', 'Get in touch', 'Konditionen', 'Magazin', 'Vertragsbedingungen'],
      items: ['Blog-Einträge', 'Konditionen Tabelle 1', 'Konditionen Tabelle 2', 'Damen', 'Casting', 'Stadt', 'Rechnung'],
      selectedSeite: null,
      selectedItem: null,
      isLoading: true,
    };
  },
  watch: {
    // Wenn im ersten Dropdown eine Seite ausgewählt wird:
    selectedSeite(newVal) {
      console.log('selectedItem:', newVal);  // Füge dies hinzu

      if (newVal) {
        this.selectedItem = null; // Zweites Dropdown zurücksetzen
        this.updateHashForSeite();
      }
    },
    // Wenn im zweiten Dropdown eine Auswahl getroffen wird:
    selectedItem(newVal) {
      if (newVal) {
        this.selectedSeite = null; // Erstes Dropdown zurücksetzen
        this.updateHashForItem();
      }
    },
  },
  mounted() {
    this.getUser();
    if (process.client) {
      this.setComponentFromHash();
    }
  },
  methods: {
    async getUser() {
      const token = localStorage.getItem("token");
      if (token) {
        console.log("token is da");
      }
      try {
        let response = await $fetch("https://mila-escort.de:8443/auth/user", {
          method: "GET",
          headers: {
            Authorization: token ? `Bearer ${token}` : undefined,
          },
        });
        if (response) {
          const userStore = useUserStore();
          userStore.setUser(response);
        }
      } catch (e) {
        console.error(e);
      }
      this.isLoading = false;
    },
    // Slugify-Funktion: wandelt Text in einen URL-freundlichen String um, inklusive Umlautkonvertierung
    slugify(text) {
      return text
          .toLowerCase()
          .trim()
          .replace(/ä/g, 'ae')
          .replace(/ö/g, 'oe')
          .replace(/ü/g, 'ue')
          .replace(/ß/g, 'ss')
          .replace(/\s+/g, '-');
    },
    // Aktualisiert den Hash für den ersten Dropdown (Seiten)
    updateHashForSeite() {
      if (process.client && this.selectedSeite) {
        window.location.hash = `#${this.slugify(this.selectedSeite)}`;
      }
    },
    // Aktualisiert den Hash für den zweiten Dropdown (Items)
    updateHashForItem() {
      if (process.client && this.selectedItem) {
        window.location.hash = `#${this.slugify(this.selectedItem)}`;
      }
    },
    // Liest beim Laden der Seite den Hash aus und setzt entweder selectedSeite oder selectedItem anhand des slugified Values
    setComponentFromHash() {
      const hash = window.location.hash.slice(1);
      console.log("Hash from URL:", hash);
      const seitenSlugs = this.seiten.reduce((acc, s) => {
        acc[this.slugify(s)] = s;
        return acc;
      }, {});
      console.log("Generated seitenSlugs:", seitenSlugs);
      const itemsSlugs = this.items.reduce((acc, i) => {
        acc[this.slugify(i)] = i;
        return acc;
      }, {});
      if (seitenSlugs[hash]) {
        this.selectedSeite = seitenSlugs[hash];
      } else if (itemsSlugs[hash]) {
        this.selectedItem = itemsSlugs[hash];
      }
    },
    logout() {
      const userStore = useUserStore();
      userStore.logout();
    },
  },
  computed: {
    user() {
      const userStore = useUserStore();
      return userStore.user;
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
.background {
  background-image: url('../assets/verwaltungBG2.jpg');
  background-size: cover;
  background-position: center;
}

.backgroundLogin {
  background-image: url('../assets/verwaltungBG2.jpg');
  background-size: cover;
  background-position: center;
}

h3 {
  cursor: pointer;
}

.v-row {
  width: 100%;
  height: 100%;
}
</style>
