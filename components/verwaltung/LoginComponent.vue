<template>
  <div class="d-flex justify-center align-center" style="width: 100vw; height: 100vh">
    <v-form @submit.prevent="login">
      <v-card class="card1"
              style="box-shadow: none; border-top: 1px solid rgba(255,255,255,0); border-left: 1px solid rgba(255,255,255,0)">
        <v-card-title class="text-center">
          <span class="text-h5 ">Einloggen</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row class="d-flex justify-center" style="width: 100%">
              <v-col
                  cols="12">
                <v-text-field v-model="email"

                              label="Email"
                              required
                              variant="underlined"
                ></v-text-field>
              </v-col>
              <v-col
                  cols="12">
                <v-text-field
                    v-model="password"
                    :append-icon="show ?'mdi-eye':'mdi-eye-off'"
                    :type="show ?'text':'password'"

                    label="Passwort"
                    name="password"
                    persistent-hint
                    required
                    variant="underlined"
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
        <v-card-actions class="d-flex justify-center">
          <v-row>
            <v-col class="d-flex justify-end" cols="6">
              <v-btn color="white"
                     style="border: none"
                     type="submit"
                     variant="outlined">
                Einloggen
              </v-btn>
            </v-col>
            <v-col class="d-flex justify-start" cols="6">
              <v-btn color="white"
                     style="border: none"
                     variant="outlined" @click="$router.push('/')">
                Abbrechen
              </v-btn>
            </v-col>
            <v-col class="d-flex justify-center mt-n5" cols="12">
              <v-btn v-if="anmeldeversuch >= 3" variant="text" @click="forgetPassword">
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
        let response = await $fetch(`http://bubbletea-werl.de:8080/auth/login`, {
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
.card1 {
  background-color: rgba(255, 255, 255, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.75);
  border-left: 1px solid rgba(255, 255, 255, 0.75);
  border-radius: 30px;
  backdrop-filter: blur(10px);
  box-shadow: 5px 5px 10px #2c2a2a;
  height: 350px;
  width: 600px;
}
</style>