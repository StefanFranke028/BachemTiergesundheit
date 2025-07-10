<template>
  <div v-if="!mobile && !tablet " style="width: 100vw">
    <div class="background d-flex justify-center" style="width: 100vw; height: 200vh">
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
            <h1>Verwaltung von Andrea Bachem</h1>
          </v-col>
          <v-col class="d-flex justify-center align-center" cols="3">
            <h3 class="text-center" @click="logout">Ausloggen</h3>
          </v-col>
          <v-col class="d-flex justify-center align-center" cols="8">
            <!-- Erster Dropdown -->
            <v-select
                v-model="selectedSeite"
                :items="seiten"
                label="Wählen Sie eine Seite">
            </v-select>
          </v-col>


          <v-col cols="12">
            <v-card
                width="95vw"
                height="100vh"
                class="mt-n10"
                style="background-color: transparent !important; border: 1px solid transparent !important; box-shadow: none !important;">


              <RechnungComponent v-if="selectedSeite === 'Rechnung'"></RechnungComponent>
              <KontaktaufnahmeComponent v-if="selectedSeite === 'Kontaktaufnahme'"></KontaktaufnahmeComponent>
              <BerichteComponent v-if="selectedSeite === 'Berichte'"></BerichteComponent>
              <ServiceComponent v-if="selectedSeite === 'Service'"></ServiceComponent>
              <ProdukteComponent v-if="selectedSeite === 'Produkte'"></ProdukteComponent>

              <!---COmponents--->

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

import LoginComponent from "~/components/verwaltung/LoginComponent.vue";
import RechnungComponent from "~/components/verwaltung/RechnungComponent.vue";
import KontaktaufnahmeComponent from "~/components/verwaltung/KontaktaufnahmenComponent.vue";
import BerichteComponent from "~/components/verwaltung/BerichteComponent.vue";
import ServiceComponent from "~/components/verwaltung/ServiceComponent.vue";
import ProdukteComponent from "~/components/verwaltung/ProdukteComponent.vue";


export default {
  name: "verwaltung",
  components: {
    ProdukteComponent,
    ServiceComponent,
    BerichteComponent,
    KontaktaufnahmeComponent,
    RechnungComponent,

    LoginComponent,
  },
  data() {
    return {
      seiten: ['Berichte', 'Produkte', 'Service', 'Preise','Kontaktaufnahme','Rechnung'],
      selectedSeite: null,
      isLoading: true,
    };
  },
  watch: {

    selectedSeite(newVal) {


      if (newVal) {
        this.updateHashForSeite();
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
        let response = await $fetch("https://tier-gesundheitszentrum.com:8080/auth/user", {
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

    updateHashForSeite() {
      if (process.client && this.selectedSeite) {
        window.location.hash = `#${this.slugify(this.selectedSeite)}`;
      }
    },

    setComponentFromHash() {
      const hash = window.location.hash.slice(1);
      console.log("Hash from URL:", hash);
      const seitenSlugs = this.seiten.reduce((acc, s) => {
        acc[this.slugify(s)] = s;
        return acc;
      }, {});
      console.log("Generated seitenSlugs:", seitenSlugs);
      if (seitenSlugs[hash]) {
        this.selectedSeite = seitenSlugs[hash];
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
  background-image: url('../assets/bgv.jpg');
  background-size: cover;
  background-position: center;
}

.backgroundLogin {
  background-image: url('../assets/bg_login_dialog.jpg');
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
