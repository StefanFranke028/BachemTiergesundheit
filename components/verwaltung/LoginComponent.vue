<template>
  <div class="login-view">
    <v-form class="login-form" @submit.prevent="login">
      <v-card class="card1" elevation="0">
        <v-card-title class="login-title">
          <span>Verwaltung</span>
          <h1>Einloggen</h1>
        </v-card-title>
        <v-card-text class="login-body">
          <v-container class="pa-0">
            <v-row class="login-grid">
              <v-col cols="12">
                <v-text-field
                    v-model="email"
                    bg-color="white"
                    density="comfortable"
                    label="Email"
                    required
                    variant="outlined"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                    v-model="password"
                    :append-icon="show ?'mdi-eye':'mdi-eye-off'"
                    :type="show ?'text':'password'"
                    bg-color="white"
                    density="comfortable"
                    label="Passwort"
                    name="password"
                    persistent-hint
                    required
                    variant="outlined"
                    @click:append="show=!show">
                </v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <v-alert v-if="error === 'AxiosError: Request failed with status code 401'"
                   class="text-center text-black" type="error">
            Benutzername oder Passwort ist falsch.
          </v-alert>

          <v-alert v-if="error !== 'AxiosError: Request failed with status code 401' && error != null"
                   class="text-center text-black" type="error">
            Einloggen ist momentan nicht möglich. Bitte wenden Sie sich an den Administrator.
          </v-alert>
        </v-card-text>
        <v-card-actions class="login-actions">
          <v-row class="ma-0">
            <v-col class="d-flex justify-end" cols="6">
              <v-btn
                     class="login-submit"
                     type="submit"
                     variant="flat">
                Einloggen
              </v-btn>
            </v-col>
            <v-col class="d-flex justify-start" cols="6">
              <v-btn
                     class="login-cancel"
                     variant="outlined"
                     @click="$router.push('/')">
                Abbrechen
              </v-btn>
            </v-col>
            <v-col class="forgot-row" cols="12">
              <v-btn v-if="anmeldeversuch >= 3" class="forgot-button" variant="text" @click="forgetPassword">
                passwort vergessen
              </v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-form>
  </div>
</template>

<script>
import {useUserStore} from "~/stores/user.js";

export default {
  name: "LoginComponent",
  data: () => ({
    email: null,
    password: '',
    show: false,
    anmeldeversuch: 0
  }),

  components: {},
  computed: {
    user() {
      const userStore = useUserStore();
      return userStore.user;
    },
  },
  methods: {
    async login() {
      try {
        let response = await $fetch(`https://tier-gesundheitszentrum.com:8080/auth/login`, {
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
    },
    forgetPassword() {
      if (this.anmeldeversuch >= 3) {
        if (this.email === null || this.email === '') {
          alert("Bitte geben Sie Ihre Email-Adresse ein.");
        } else {
          // Post-Request mit Axios an den /password/reset-Endpunkt
          axios.post('/password/reset', {email: this.email})
              .then(() => {
                alert("Sofern Ihre Email übereinstimmt, bekommen Sie ein neues Passwort per Email zugesendet.");
              })
              .catch(error => {
                console.error(error);
                alert("Es gab ein Problem beim Zurücksetzen des Passworts. Bitte versuchen Sie es später erneut.");
              });
        }
      }
    }
  },
}

</script>

<style scoped>
.login-view {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px 20px;
}

.login-form {
  width: min(520px, 100%);
}

.card1 {
  width: 100%;
  border: 1px solid rgba(74, 55, 40, 0.14);
  border-radius: 8px;
  background: rgba(255, 253, 249, 0.9);
  box-shadow: 0 24px 70px rgba(74, 55, 40, 0.12) !important;
  backdrop-filter: blur(12px);
  padding: 28px;
}

.login-title {
  padding: 0;
  text-align: center;
  color: #4a3728;
}

.login-title span {
  display: block;
  margin-bottom: 6px;
  color: #4a6741;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.login-title h1 {
  margin: 0;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(2rem, 5vw, 2.8rem);
  font-weight: 700;
  line-height: 1.05;
}

.login-body {
  padding: 28px 0 4px;
}

.login-grid {
  width: 100%;
  margin: 0;
}

.login-actions {
  padding: 12px 0 0;
}

.login-submit,
.login-cancel {
  min-width: 132px;
  border-radius: 6px;
  font-weight: 700;
  letter-spacing: 0;
  text-transform: none;
  box-shadow: none !important;
}

.login-submit {
  background: #4a6741 !important;
  color: #fffdf9 !important;
}

.login-cancel {
  border-color: rgba(74, 55, 40, 0.26) !important;
  color: #4a3728 !important;
}

.forgot-row {
  display: flex;
  justify-content: center;
  min-height: 38px;
  padding-top: 2px;
}

.forgot-button {
  color: #4a6741;
  text-transform: none;
}

:deep(.v-field) {
  border-radius: 6px !important;
  background: #fffdf9 !important;
}

:deep(.v-field__outline) {
  color: rgba(74, 55, 40, 0.28) !important;
}

:deep(.v-label),
:deep(.v-field__input) {
  color: #4a3728 !important;
}

@media (max-width: 540px) {
  .card1 {
    padding: 22px;
  }

  .login-submit,
  .login-cancel {
    min-width: 100%;
  }
}
</style>
