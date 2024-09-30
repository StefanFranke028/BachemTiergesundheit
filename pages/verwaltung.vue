<template>
  <!--  <div v-if="desktop || wide">-->
  <div class="background d-flex justify-center" style="width: 100vw; height: 100vh">

    <v-row class="d-flex justify-center">
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
      <v-col cols="2">
        <v-select v-model="selectedSeite"
                  :items="seiten"
                  label="Wählen Sie eine Seite">
          test
        </v-select>
      </v-col>
      <p class="mt-7">
        < -- >
      </p>
      <v-col cols="2">
        <v-select v-model="selectedItem"
                  :items="items"
                  label="Wählen Sie Damen, Preise, etc.">
          test
        </v-select>
      </v-col>
      <v-col cols="9">
        <v-card
            style="background: rgba(250,250,250,0); background-color: transparent !important; border: 1px solid transparent !important; box-shadow: none !important;">
          <StartseiteComponent v-if="selectedSeite === 'Startseite-Seite'"/>
          <VitaComponent v-if="selectedSeite === 'Vita-Seite'"/>
          <DamenComponent v-if="selectedSeite === 'Escort-Seite'"/>
          <BewerbenComponent v-if="selectedSeite === 'Bewerben-Seite'"/>
          <KontaktComponent v-if="selectedSeite === 'Kontakt-Seite'"/>
          <HonorareComponent v-if="selectedSeite === 'Honorare-Seite'"/>
          <BlogComponent v-if="selectedSeite === 'Blog-Seite'"/>

          <!-- Weitere Optionen basierend auf selectedItem -->
          <BlogEinträgeComponent v-if="selectedItem === 'Blog-Einträge'"/>
          <EscortPreiseComponent v-if="selectedItem === 'Escort Preise'"/>
          <DinnerPreiseComponent v-if="selectedItem === 'Dinner Preise'"/>
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
import DamenComponent from "~/components/verwaltung/DamenComponent.vue";
import BewerbenComponent from "~/components/verwaltung/BewerbenComponent.vue";
import BlogEinträgeComponent from "~/components/verwaltung/BlogEinträgeComponent.vue";
import KontaktComponent from "~/components/verwaltung/KontaktComponent.vue";
import HonorareComponent from "~/components/verwaltung/HonorareComponent.vue";
import BlogComponent from "~/components/verwaltung/BlogComponent.vue";
import nuxtLayout from "#app/components/nuxt-layout.js";
import nuxtLink from "#app/components/nuxt-link.js";
import EscortPreiseComponent from "~/components/verwaltung/EscortPreiseComponent.vue";
import DinnerPreiseComponent from "~/components/verwaltung/DinnerPreiseComponent.vue";

export default {
  name: "verwaltung",
  components: {
    BlogComponent,
    BlogEinträgeComponent,
    HonorareComponent,
    KontaktComponent,
    BewerbenComponent,
    DamenComponent,
    VitaComponent,
    StartseiteComponent,
    EscortPreiseComponent,
    DinnerPreiseComponent
  },
  data() {
    return {
      seiten: ['Startseite-Seite', 'Vita-Seite', 'Escort-Seite', 'Bewerben-Seite', 'Kontakt-Seite', 'Honorare-Seite', 'Blog-Seite'],
      items: ['Blog-Einträge', 'Escort Preise', 'Dinner Preise'],
      selectedSeite: null,  // Standardseite
      selectedItem: null
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
