<template>
<div v-if="desktop || wide">


</div>

</template>

<script>
import {useScreenStore} from "~/stores/screen.js";

export default {
  name: "verwaltung",
  data(){
    return{

    }
  },
  methods:{
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
  computed:{
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

</style>
