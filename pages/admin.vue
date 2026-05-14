<template>
  <div v-if="!mobile && !tablet" class="admin-desktop">
    <div class="background admin-page">
      <div v-if="isLoading" class="loading-shell">
        <v-col class="d-flex justify-center align-center" cols="12">
          <v-progress-circular color="primary" indeterminate size="70"></v-progress-circular>
        </v-col>
      </div>
      <div v-else>
        <div v-if="!user" class="login-shell backgroundLogin">
          <LoginComponent/>
        </div>
        <div v-else class="admin-shell">
          <div class="admin-header">
            <router-link class="admin-link" to="/" title="Zurück zur Startseite">
              Zurück zur Startseite
            </router-link>

            <div class="admin-title">
              <span>Verwaltung</span>
              <h1>Andrea Bachem</h1>
            </div>

            <button class="admin-link admin-logout" type="button" @click="logout">
              Ausloggen
            </button>
          </div>

          <div class="admin-picker">
            <v-select
                v-model="selectedSeite"
                :items="seiten"
                label="Wählen Sie eine Seite"
                density="comfortable"
                hide-details>
            </v-select>
          </div>

          <v-card class="admin-content-card" elevation="0">
            <div class="admin-content-inner">

              <RechnungComponent v-if="selectedSeite === 'Rechnung'"></RechnungComponent>
              <KontaktaufnahmeComponent v-if="selectedSeite === 'Kontaktaufnahme'"></KontaktaufnahmeComponent>
              <BerichteComponent v-if="selectedSeite === 'Berichte'"></BerichteComponent>
              <ServiceComponent v-if="selectedSeite === 'Service'"></ServiceComponent>
              <ProdukteComponent v-if="selectedSeite === 'Produkte'"></ProdukteComponent>
              <PreiseComponent  v-if="selectedSeite === 'Preise'"></PreiseComponent>
              <ContentComponent v-if="selectedSeite === 'Content'"></ContentComponent>

              <!---COmponents--->

            </div>
          </v-card>
        </div>
      </div>
    </div>
  </div>
  <!-- Für mobile Geräte -->
  <div v-if="mobile || tablet" class="mobile-admin">
    <v-card class="mobile-card" elevation="0">
      <v-card-title>
        <h1>Andre Bachem</h1>
      </v-card-title>
      <v-card-item>
        Diese Ansicht ist leider auf dem Handy nicht verfügbar. Bitte kehren Sie zur
        <router-link to="/" title="Zur Startseite">Startseite</router-link>
        zurück.
      </v-card-item>
    </v-card>
  </div>
</template>

<script setup>
useHead({
  title: 'Verwaltung | Andrea Bachem',
  meta: [
    {
      name: 'robots',
      content: 'noindex, nofollow'
    }
  ]
});
</script>

<script>
import {useUserStore} from "~/stores/user.js";

import LoginComponent from "~/components/verwaltung/LoginComponent.vue";
import RechnungComponent from "~/components/verwaltung/RechnungComponent.vue";
import KontaktaufnahmeComponent from "~/components/verwaltung/KontaktaufnahmenComponent.vue";
import BerichteComponent from "~/components/verwaltung/BerichteComponent.vue";
import ServiceComponent from "~/components/verwaltung/ServiceComponent.vue";
import ProdukteComponent from "~/components/verwaltung/ProdukteComponent.vue";
import PreiseComponent from "~/components/verwaltung/PreiseComponent.vue";
import ContentComponent from "~/components/verwaltung/ContentComponent.vue";

//test

export default {
  name: "verwaltung",
  components: {
    PreiseComponent,
    ProdukteComponent,
    ServiceComponent,
    BerichteComponent,
    KontaktaufnahmeComponent,
    RechnungComponent,
    LoginComponent,
    ContentComponent,
  },
  data() {
    return {
      seiten: ['Berichte', 'Produkte', 'Preise','Kontaktaufnahme','Rechnung','Content'],
      selectedSeite: 'Kontaktaufnahme',
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
.admin-desktop {
  width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
}

.background {
  background-image: linear-gradient(135deg, rgba(250, 246, 239, 0.82), rgba(235, 240, 234, 0.76)), url('../assets/bgv.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.backgroundLogin {
  background-image: url('../assets/bg_login_dialog.jpg');
  background-size: cover;
  background-position: center;
}

.admin-page {
  width: 100vw;
  min-height: 100vh;
  padding: 32px 24px 72px;
}

.loading-shell,
.login-shell {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-shell {
  margin: -32px -24px -72px;
}

.admin-shell {
  width: min(1500px, 96vw);
  margin: 0 auto;
}

.admin-header {
  min-height: 92px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 24px;
  align-items: center;
  padding: 16px 0 24px;
}

.admin-title {
  text-align: center;
  color: #4a3728;
}

.admin-title span {
  display: block;
  margin-bottom: 4px;
  color: #4a6741;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.admin-title h1 {
  margin: 0;
  color: #4a3728;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(2rem, 3vw, 3.4rem);
  font-weight: 700;
  line-height: 1.05;
}

.admin-link {
  justify-self: start;
  display: inline-flex;
  align-items: center;
  min-height: 42px;
  padding: 0 18px;
  border: 1px solid rgba(74, 55, 40, 0.18);
  border-radius: 6px;
  background: rgba(255, 253, 249, 0.78);
  color: #4a3728;
  font-size: 0.93rem;
  font-weight: 700;
  line-height: 1;
  text-decoration: none;
  transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
  cursor: pointer;
}

.admin-link:hover {
  border-color: rgba(74, 103, 65, 0.42);
  background: #fffdf9;
  transform: translateY(-1px);
}

.admin-logout {
  justify-self: end;
  color: #b85c38;
  font-family: inherit;
}

.admin-picker {
  width: min(620px, 100%);
  margin: 0 auto 24px;
  padding: 14px;
  border: 1px solid rgba(74, 55, 40, 0.14);
  border-radius: 8px;
  background: rgba(255, 253, 249, 0.78);
  backdrop-filter: blur(10px);
  box-shadow: 0 18px 48px rgba(74, 55, 40, 0.08);
}

.admin-content-card {
  width: 100%;
  border: 1px solid transparent !important;
  border-radius: 0 !important;
  background: transparent !important;
  box-shadow: none !important;
  overflow: visible;
}

.admin-content-inner {
  padding: 0 0 32px;
}

.mobile-admin {
  min-height: 100vh;
  padding: 48px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #faf6ef;
}

.mobile-card {
  max-width: 520px;
  border: 1px solid rgba(74, 55, 40, 0.14);
  border-radius: 8px !important;
  background: #fffdf9 !important;
  color: #4a3728;
}

.mobile-card a {
  color: #4a6741;
  font-weight: 700;
}

:deep(.v-field) {
  border-radius: 6px !important;
  background: #fffdf9 !important;
  box-shadow: none !important;
}

:deep(.v-field__outline) {
  color: rgba(74, 55, 40, 0.26) !important;
}

:deep(.v-label),
:deep(.v-field__input),
:deep(.v-select__selection-text) {
  color: #4a3728 !important;
}

.admin-content-card :deep(.v-tabs) {
  width: fit-content;
  max-width: 100%;
  margin: 0 auto 20px;
  padding: 6px;
  border: 1px solid rgba(74, 55, 40, 0.14);
  border-radius: 8px;
  background: rgba(255, 253, 249, 0.84);
  box-shadow: 0 12px 36px rgba(74, 55, 40, 0.07);
}

.admin-content-card :deep(.v-tab) {
  min-height: 40px !important;
  border-radius: 6px !important;
  color: #4a3728 !important;
  font-size: 0.86rem;
  font-weight: 700;
  letter-spacing: 0 !important;
  text-transform: none !important;
}

.admin-content-card :deep(.v-tab--selected) {
  background: #4a6741 !important;
  color: #fffdf9 !important;
}

.admin-content-card :deep(.v-tab__slider) {
  display: none;
}

.admin-content-card :deep(.v-window) {
  overflow: visible;
}

.admin-content-card :deep(.v-card:not(.admin-content-card)) {
  border: 1px solid rgba(74, 55, 40, 0.14) !important;
  border-radius: 8px !important;
  background: rgba(255, 253, 249, 0.9) !important;
  box-shadow: 0 14px 42px rgba(74, 55, 40, 0.07) !important;
}

.admin-content-card :deep(.v-card-title) {
  color: #4a3728;
  font-weight: 800;
}

.admin-content-card :deep(.v-btn) {
  border-radius: 6px !important;
  font-weight: 700 !important;
  letter-spacing: 0 !important;
  text-transform: none !important;
  box-shadow: none !important;
}

.admin-content-card :deep(.v-btn--variant-elevated),
.admin-content-card :deep(.v-btn--variant-flat) {
  background: #4a6741 !important;
  color: #fffdf9 !important;
}

.admin-content-card :deep(.v-btn--variant-outlined) {
  border-color: rgba(74, 55, 40, 0.26) !important;
  color: #4a3728 !important;
}

.admin-content-card :deep(.v-table),
.admin-content-card :deep(.v-data-table),
.admin-content-card :deep(.v-data-table-virtual) {
  border: 1px solid rgba(74, 55, 40, 0.12);
  border-radius: 8px;
  background: #fffdf9 !important;
  overflow: hidden;
}

.admin-content-card :deep(thead),
.admin-content-card :deep(.v-data-table-header__content) {
  color: #4a3728;
  font-weight: 800;
}

.admin-content-card :deep(th) {
  background: #ebf0ea !important;
  color: #4a3728 !important;
  font-weight: 800 !important;
}

.admin-content-card :deep(td) {
  color: #2c1e14;
}

.admin-content-card :deep(.v-text-field),
.admin-content-card :deep(.v-textarea),
.admin-content-card :deep(.v-select) {
  color: #4a3728;
}

.admin-content-card :deep(input),
.admin-content-card :deep(textarea) {
  color: #2c1e14 !important;
}

.admin-content-card :deep(.ql-toolbar),
.admin-content-card :deep(.ql-container) {
  border-color: rgba(74, 55, 40, 0.16) !important;
  background: #fffdf9;
}

.admin-content-card :deep(.ql-toolbar) {
  border-radius: 8px 8px 0 0;
}

.admin-content-card :deep(.ql-container) {
  border-radius: 0 0 8px 8px;
}

.admin-content-card :deep(.v-row[style*="background-color: #0082c2"]) {
  background-color: #4a6741 !important;
}

.admin-content-card :deep(.text-white) {
  color: #fffdf9 !important;
}

button {
  cursor: pointer;
}

@media (max-width: 1100px) {
  .admin-header {
    grid-template-columns: 1fr;
    justify-items: center;
  }

  .admin-link,
  .admin-logout {
    justify-self: center;
  }
}
</style>
