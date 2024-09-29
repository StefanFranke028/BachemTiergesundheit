<template>

  <div style="overflow-y: scroll">
    <v-row class="pa-0" style="height: 625px">
      <!-- Textareas mit v-model -->
      <v-col cols="12">
        <v-textarea v-model="header" label="Header"></v-textarea>
      </v-col>
      <v-col cols="6">
        <v-textarea v-model="textarea1" label="Textarea 1"></v-textarea>
      </v-col>
      <v-col cols="6">
        <v-textarea v-model="textarea2" label="Textarea 2"></v-textarea>
      </v-col>
      <v-col class="d-flex justify-center" cols="12">
        <v-btn color="white" @click="openDialog">Änderungen abschicken</v-btn>
      </v-col>

      <v-dialog
          v-model="dialog"
          max-width="400"
          persistent
      >
        <v-card
            text="Möchten Sie die vorgenommenen Änderungen wirklich speichern?"
            title="Änderungen speichern?"
        >
          <template v-slot:actions>
            <v-spacer></v-spacer>

            <v-btn color="white" style="background-color: red !important;" @click="dialog = false">
              Abbrechen
            </v-btn>

            <v-btn :loading="loading" color="white" style="background-color: green !important;" @click="submitChanges">
              Speichern
            </v-btn>
          </template>
        </v-card>
      </v-dialog>

    </v-row>
    <v-snackbar
        v-model="snackbar"
        :color="snackbarColor"
        location="top"
        timeout="5000"
    >
      {{ snackbarText }}
    </v-snackbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      header: null,
      textarea1: '',
      textarea2: '',


      loading: false,
      snackbar: false,
      snackbarText: null,
      snackbarColor: null,
      dialog: false // Für den Dialog zum Bestätigen
    };
  },
  mounted() {
    this.getLandingPageData();
  },
  methods: {
    // Methode zum Abrufen der LandingPage-Daten
    async getLandingPageData() {
      try {
        let response = await $fetch(`https://maxi-escort.de:8443/auth/escort`, {
          method: 'GET',
        });

        if (response) {
          // Wandelt HTML-Format zurück in normalen Text für Textareas
          this.header = response.head
          this.textarea1 = this.unformattedText(response.text1);
          this.textarea2 = this.unformattedText(response.text2);

        }
      } catch (e) {
        console.error("Fehler beim Abrufen der Vita-Daten:", e);
      }
    },

    // Methode zum Öffnen des Bestätigungsdialogs
    openDialog() {
      this.dialog = true;
    },

    formattedText(text) {
      // Ersetze alle Zeilenumbrüche durch <br>-Tags
      return text.replace(/\n/g, "<br>");
    },

// Methode zum Rückformatieren von HTML in Text für die Textareas
    unformattedText(text) {
      // Ersetze alle <br>-Tags durch Zeilenumbrüche
      return text.replace(/<br\s*\/?>/g, "\n");
    },


    // Methode zum Senden der Daten an die API
    async submitChanges() {
      this.loading = true;
      const data = {
        head: this.header,
        text1: this.formattedText(this.textarea1),
        text2: this.formattedText(this.textarea2),

      };

      try {
        let response = await $fetch(`https://maxi-escort.de:8443/auth/escort`, {
          method: 'PUT',
          body: data
        });

        if (response) {
          console.log("Vita erfolgreich aktualisiert:", response);
          this.snackbarText = "Änderungen erfolgreich gespeichert";
          this.snackbarColor = "success";
        }
        this.dialog = false;
      } catch (e) {
        console.error("Fehler beim Aktualisieren der Vita:", e);
        this.snackbarText = "Fehler beim Speichern der Änderungen";
        this.snackbarColor = "error";
      }
      this.snackbar = true;
      this.loading = false;
    },
  }
};
</script>

<style scoped>
.v-tab {
  background-color: rgba(255, 255, 255, 0) !important;
  border-radius: 0 !important;
}

.v-row {
  width: 100%;
  margin: 0 0 0 0;
}
</style>
