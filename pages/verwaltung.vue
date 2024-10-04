<template>
  <!--  <div v-if="desktop || wide">-->
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
    <v-row v-else class="d-flex justify-center">
      <v-col class="d-flex justify-center align-center" cols="3">
        <router-link to="/">
          <h3 class="text-center">Zurück zur Startseite</h3>
        </router-link>
      </v-col>
      <v-col class="d-flex justify-center align-center" cols="6">
        <h1>Verwaltung von Maxi-Escort</h1>
      </v-col>


      <v-col class="d-flex justify-center align-center" cols="3">
        <h3 class="text-center">
          Ausloggen
        </h3>
      </v-col>
      <v-col class="d-flex justify-center align-center" cols="3">
        <v-select v-model="selectedSeite"
                  :items="seiten"
                  label="Wählen Sie eine Seite">
          test
        </v-select>
      </v-col>
      <p class="mt-12">
        < -- >
      </p>
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
            height="625"
            style="background-color: transparent !important; border: 1px solid transparent !important; box-shadow: none !important;">
          <StartseiteComponent v-if="selectedSeite === 'Startseite'"/>
          <VitaComponent v-if="selectedSeite === 'Vita'"/>
          <EscordComponent v-if="selectedSeite === 'Escort'"/>
          <BewerbenComponent v-if="selectedSeite === 'Bewerben'"/>
          <KontaktComponent v-if="selectedSeite === 'Kontakt'"/>
          <HonorareComponent v-if="selectedSeite === 'Honorare'"/>
          <BlogComponent v-if="selectedSeite === 'Blog'"/>

          <!-- Weitere Optionen basierend auf selectedItem -->
          <BlogEinträgeComponent v-if="selectedItem === 'Blog-Einträge'"/>
          <EscortPreiseComponent v-if="selectedItem === 'Escort Preise'"/>
          <DinnerPreiseComponent v-if="selectedItem === 'Dinner Preise'"/>
          <DamenComponent v-if="selectedItem === 'Damen'"/>
          <StadtComponent v-if="selectedItem === 'Stadt'"/>
        </v-card>
      </v-col>
    </v-row>
  </div>
  <!--  </div>-->
</template>


<script>
import {useScreenStore} from "~/stores/screen.js";
import StartseiteComponent from "~/components/verwaltung/StartseiteComponent.vue";
import VitaComponent from "~/components/verwaltung/VitaComponent.vue";
import EscordComponent from "~/components/verwaltung/EscortComponent.vue";
import BewerbenComponent from "~/components/verwaltung/BewerbenComponent.vue";
import BlogEinträgeComponent from "~/components/verwaltung/BlogEinträgeComponent.vue";
import KontaktComponent from "~/components/verwaltung/KontaktComponent.vue";
import HonorareComponent from "~/components/verwaltung/HonorareComponent.vue";
import BlogComponent from "~/components/verwaltung/BlogComponent.vue";
import nuxtLayout from "#app/components/nuxt-layout.js";
import nuxtLink from "#app/components/nuxt-link.js";
import EscortPreiseComponent from "~/components/verwaltung/EscortPreiseComponent.vue";
import DinnerPreiseComponent from "~/components/verwaltung/DinnerPreiseComponent.vue";
import DamenComponent from "~/components/verwaltung/DamenComponent.vue";
import StadtComponent from "~/components/verwaltung/StadtComponent.vue";

export default {
  name: "verwaltung",
  components: {
    StadtComponent,
    BlogComponent,
    BlogEinträgeComponent,
    HonorareComponent,
    KontaktComponent,
    BewerbenComponent,
    EscordComponent,
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
    // Simuliere einen Ladevorgang (z.B. einen API-Call), bevor isLoading auf false gesetzt wird
    setTimeout(() => {
      this.isLoading = false; // Wenn alles geladen ist, setze isLoading auf false
    }, 2000); // Hier kannst du auch eine echte Funktion wie getUser() aufrufen
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
      try {
        let response = await $fetch("https://job-grow.de:8080/auth/user", {
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
        alert(e);
      }
    },
    async updateUser() {
      const token = localStorage.getItem('token');
      console.log(this.user.kundennummer)
      this.user.step1.profilBild = this.imageBase64
      try {
        let response = await $fetch(`https://job-grow.de:8080/auth/user/${this.user.kundennummer}`, {
          method: 'PUT',
          headers: {
            Authorization: token ? `Bearer ${token}` : undefined,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.user)
        });

        console.log("Antwort auf das Update:", response);

        if (response) {
          const userStore = useUserStore();
          userStore.setUser(response);  // Aktualisieren des Benutzers im Store, falls notwendig
          console.log("Benutzer aktualisiert:", response);
          const compareStore = useCompareStore()
          compareStore.setCompareStep(response.step1)
          compareStore.setDynamicStep1()
          this.task.dialog = false
        }
      } catch (e) {
        console.error("Fehler beim Aktualisieren des Benutzers:", e);
        alert(e.message);  // Eine benutzerfreundlichere Fehlermeldung anzeigen
      }
    },
  },
  computed: {
    nuxtLink() {
      return nuxtLink
    },
    nuxtLayout() {
      return nuxtLayout
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
  background-image: url('../assets/verwaltungBackground.jpg');
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
