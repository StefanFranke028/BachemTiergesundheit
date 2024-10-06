<template>
  <div v-if="!mobile && !tablet && !tabletHorizontal" style="width: 100vw">

    <div class="background d-flex justify-center" style="width: 100vw; height: 100vh">

      <div v-if="isLoading" class="d-flex justify-center" style="width: 100vw">
        <v-col class="d-flex justify-center align-center" cols="12">
          <v-progress-circular
              color="primary"
              indeterminate
              size="70"
          ></v-progress-circular>
        </v-col>
      </div>

      <div v-else>

        <div v-if="!user" class="d-flex justify-center align-center backgroundLogin "
             style="width: 100vw; height: 100vh">
          <LoginComponent/>
        </div>

        <v-row class="d-flex justify-center ma-0"
               style="background-color: rgba(255,255,255,0.0); width: 100vw; height: 100vh">
          <v-col class="d-flex justify-center align-center" cols="3">
            <router-link to="/">
              <h3 class="text-center">Zurück zur Startseite</h3>
            </router-link>
          </v-col>
          <v-col class="d-flex justify-center align-center" cols="6">
            <h1>Verwaltung von Maxi-Escort</h1>
          </v-col>


          <v-col class="d-flex justify-center align-center" cols="3">
            <h3 class="text-center" @click="logout">
              Ausloggen
            </h3>
          </v-col>
          <v-col class="d-flex justify-center align-center" cols="3">
            <v-select v-model="selectedSeite"
                      :items="seiten"
                      label="Wählen Sie eine Seite">
            </v-select>
          </v-col>
          <v-col class="d-flex justify-center align-center " cols="1">
            <p class="mt-n5">
              < -- >
            </p>
          </v-col>
          <v-col class="d-flex justify-center align-center" cols="3">
            <v-select v-model="selectedItem"
                      :items="items"
                      label="Wählen Sie Damen, Preise, etc.">
              test
            </v-select>
          </v-col>
          <v-col cols="9">
            <v-card
                class="mt-n10"
                height="70vh"
                style="background-color: transparent !important; border: 1px solid transparent !important; box-shadow: none !important;">
              <StartseiteComponent v-if="selectedSeite === 'Startseite'"/>
              <VitaComponent v-if="selectedSeite === 'Vita'"/>
              <EscortComponent v-if="selectedSeite === 'Escort'"/>
              <BewerbenComponent v-if="selectedSeite === 'Bewerben'"/>
              <KontaktComponent v-if="selectedSeite === 'Kontakt'"/>
              <HonorareComponent v-if="selectedSeite === 'Honorare'"/>
              <BlogComponent v-if="selectedSeite === 'Blog'"/>

              <!-- Weitere Optionen basierend auf selectedItem -->
              <BlogEintraegeComponent v-if="selectedItem === 'Blog-Einträge'"/>
              <EscortPreiseComponent v-if="selectedItem === 'Escort Preise'"/>
              <DinnerPreiseComponent v-if="selectedItem === 'Dinner Preise'"/>
              <DamenComponent v-if="selectedItem === 'Damen'"/>
              <StadtComponent v-if="selectedItem === 'Stadt'"/>
            </v-card>
          </v-col>
        </v-row>

      </div>

    </div>
  </div>
  <!--  </div>-->
  <div v-if="mobile || tablet || tabletHorizontal" class="d-flex justify-center align-center pb-16"
  >
    <v-card class="mx-5 mt-16" color="grey">
      <v-card-title>
        <h1>Maxi-Escort</h1>
      </v-card-title>
      <v-card-item>
        Diese Ansicht ist leider auf dem Handy nicht vefügbar. Bitte kehren Sie zur
        <router-link style="color: blue" to="/">
          Startseite
        </router-link>
        zurück.
      </v-card-item>
    </v-card>
  </div>
</template>


<script>


import StadtComponent from "~/components/verwaltung/StadtComponent.vue";
import BlogComponent from "~/components/verwaltung/BlogComponent.vue";
import BlogEintraegeComponent from "~/components/verwaltung/BlogEintraegeComponent.vue";
import HonorareComponent from "~/components/verwaltung/HonorareComponent.vue";
import KontaktComponent from "~/components/verwaltung/KontaktComponent.vue";
import BewerbenComponent from "~/components/verwaltung/BewerbenComponent.vue";
import EscortComponent from "~/components/verwaltung/EscortComponent.vue";
import VitaComponent from "~/components/verwaltung/VitaComponent.vue";
import StartseiteComponent from "~/components/verwaltung/StartseiteComponent.vue";
import EscortPreiseComponent from "~/components/verwaltung/EscortPreiseComponent.vue";
import DinnerPreiseComponent from "~/components/verwaltung/DinnerPreiseComponent.vue";
import DamenComponent from "~/components/verwaltung/DamenComponent.vue";
import LoginComponent from "~/components/verwaltung/LoginComponent.vue";
import nuxtLink from "#app/components/nuxt-link.js";
import nuxtLayout from "#app/components/nuxt-layout.js";
import {useUserStore} from "~/stores/user.js";

export default {
  name: "verwaltung",
  components: {
    LoginComponent,
    StadtComponent,
    BlogComponent,
    BlogEintraegeComponent,
    HonorareComponent,
    KontaktComponent,
    BewerbenComponent,
    EscortComponent,
    VitaComponent,
    StartseiteComponent,
    EscortPreiseComponent,
    DinnerPreiseComponent,
    DamenComponent,
  },
  data() {
    return {
      seiten: ['Startseite', 'Vita', 'Escort', 'Bewerben', 'Kontakt', 'Honorare', 'Blog'],
      items: ['Blog-Einträge', 'Escort Preise', 'Dinner Preise', 'Damen', 'Stadt'],
      selectedSeite: null,
      selectedItem: null,
      isLoading: true // Initialisiere isLoading als true
    }
  },
  watch: {
    // Wenn eine Seite ausgewählt wird, setze das "weitere" Dropdown zurück
    selectedSeite(newVal) {
      if (newVal) {
        this.selectedItem = null; // Setze das zweite Dropdown zurück
      }
    },
    // Wenn etwas im zweiten Dropdown ausgewählt wird, setze die Seite zurück
    selectedItem(newVal) {
      if (newVal) {
        this.selectedSeite = null; // Setze das erste Dropdown zurück
      }
    },
  },
  mounted() {
    this.getUser()
  },
  methods: {
    async isUser() {
      const userStore = useUserStore();
      if (userStore.user.status !== "user") {
        await this.$router.push('login')
      }
    },
    async login() {
      if (this.valid) {
        try {
          let response = await $fetch(`https://job-grow.de:8080/auth/login`, {
            method: 'POST',
            body: {
              email: this.email,
              password: this.password,
            },
          });

          if (response && response.token) {
            localStorage.setItem('token', response.token);
            console.log("Token gespeichert:", response.token);
          }

          if (response && response.user) {
            const userStore = useUserStore();
            userStore.setUser(response.user);
            console.log("Benutzer gespeichert:", response.user);
          }
        } catch (e) {
          alert("Benutzername oder Kennwort ist falsch");
        }
      }
    },
    async getUser() {
      const token = localStorage.getItem('token');
      if (token) {
        console.log("token is da")
        console.log(token)
      }
      try {
        let response = await $fetch("https://maxi-escort.de:8443/auth/user", {
          method: 'GET',
          headers: {
            Authorization: token ? `Bearer ${token}` : undefined
          }
        });

        console.log(response);
        if (response) {
          const userStore = useUserStore();
          userStore.setUser(response);
        }
      } catch (e) {
      }
      this.isLoading = false;
    },
    logout() {
      const userStore = useUserStore();
      userStore.logout();
    }
  },
  computed: {
    nuxtLink() {
      return nuxtLink
    },
    nuxtLayout() {
      return nuxtLayout
    },
    user() {
      const userStore = useUserStore();
      return userStore.user;
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
}
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
