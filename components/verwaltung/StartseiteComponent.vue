<template>

  <div style="overflow-y: scroll">
    <v-row style="height: 625px">
      <!-- Textareas mit v-model -->
      <v-col cols="6">
        <v-text-field v-model="description" label="Header Description"></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-text-field v-model="keywords" label="Header Keywords"></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-textarea v-model="textarea1" label="Textarea 1"></v-textarea>
      </v-col>
      <v-col cols="6">
        <v-textarea v-model="textarea2" label="Textarea 2"></v-textarea>
      </v-col>
      <v-col cols="6">
        <v-textarea v-model="textarea3" label="Textarea 3"></v-textarea>
      </v-col>
      <v-col cols="6">
        <v-textarea v-model="textarea4" label="Textarea 4"></v-textarea>
      </v-col>
      <v-col cols="6">
        <v-textarea v-model="textarea5" label="Textarea 5"></v-textarea>
      </v-col>
      <v-col cols="6">
        <v-textarea v-model="textarea6" label="Textarea 6"></v-textarea>
      </v-col>
      <v-col cols="6">
        <v-textarea v-model="textarea7" label="Textarea 7"></v-textarea>
      </v-col>
      <v-col cols="6">
        <v-textarea v-model="textarea8" label="Textarea 8"></v-textarea>
      </v-col>
      <v-col cols="6">
        <v-textarea v-model="textarea9" label="Textarea 9"></v-textarea>
      </v-col>
      <v-col cols="6">
        <v-textarea v-model="textarea10" label="Textarea 10"></v-textarea>
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
      description: null,
      keywords: null,
      textarea1: '',
      textarea2: '',
      textarea3: '',
      textarea4: '',
      textarea5: '',
      textarea6: '',
      textarea7: '',
      textarea8: '',
      textarea9: '',
      textarea10: '',

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
        let response = await $fetch(`https://maxi-escort.de:8443/auth/landingpage`, {
          method: 'GET',
        });

        if (response) {
          this.description = response.description;
          this.keywords = response.keywords
          // Wandelt HTML-Format zurück in normalen Text für Textareas
          this.textarea1 = this.unformattedText(response.text1);
          this.textarea2 = this.unformattedText(response.text2);
          this.textarea3 = this.unformattedText(response.text3);
          this.textarea4 = this.unformattedText(response.text4);
          this.textarea5 = this.unformattedText(response.text5);
          this.textarea6 = this.unformattedText(response.text6);
          this.textarea7 = this.unformattedText(response.text7);
          this.textarea8 = this.unformattedText(response.text8);
          this.textarea9 = this.unformattedText(response.text9);
          this.textarea10 = this.unformattedText(response.text10);
        }
      } catch (e) {
        console.error("Fehler beim Abrufen der LandingPage-Daten:", e);
      }
    },

    // Methode zum Öffnen des Bestätigungsdialogs
    openDialog() {
      this.dialog = true;
    },

    // Methode zum Formatieren des Textes vor dem Speichern
    formattedText(text) {
      // Ersetze doppelte und einfache Zeilenumbrüche durch <br>-Tags
      return text
          .replace(/\n{2,}/g, "<br><br>")  // Doppelte oder mehr Zeilenumbrüche in zwei <br>-Tags umwandeln
          .replace(/\n/g, "<br>");         // Einzelne Zeilenumbrüche in ein <br> umwandeln
    },

    // Methode zum Rückformatieren von HTML in Text für die Textareas
    unformattedText(text) {
      return text
          .replace(/<br><br>/g, "\n\n")    // Doppelte <br>-Tags zurück in doppelte Zeilenumbrüche umwandeln
          .replace(/<br\s*\/?>/g, "\n");   // Einzelne <br>-Tags in einfache Zeilenumbrüche umwandeln
    },

    // Methode zum Senden der Daten an die API
    async submitChanges() {
      this.loading = true;
      const data = {
        description: this.description,
        keywords: this.keywords,
        text1: this.formattedText(this.textarea1),
        text2: this.formattedText(this.textarea2),
        text3: this.formattedText(this.textarea3),
        text4: this.formattedText(this.textarea4),
        text5: this.formattedText(this.textarea5),
        text6: this.formattedText(this.textarea6),
        text7: this.formattedText(this.textarea7),
        text8: this.formattedText(this.textarea8),
        text9: this.formattedText(this.textarea9),
        text10: this.formattedText(this.textarea10)
      };

      try {
        let response = await $fetch(`https://maxi-escort.de:8443/auth/landingpage`, {
          method: 'PUT',
          body: data
        });

        if (response) {
          console.log("LandingPage erfolgreich aktualisiert:", response);
          this.snackbarText = "Änderungen erfolgreich gespeichert";
          this.snackbarColor = "success";
        }
        this.dialog = false;
      } catch (e) {
        console.error("Fehler beim Aktualisieren der LandingPage:", e);
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
