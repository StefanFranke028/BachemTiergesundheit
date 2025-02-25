<template>

  <div style="overflow-y: scroll">
    <v-row class="pa-0" style="height: 70vh">
      <!-- Textareas mit v-model -->
      <v-col cols="6">
        <v-text-field
            v-model="description"
            :counter="155"
            :rules="[maxLengthRule]"
            label="Header Description"
            maxlength="155"
        ></v-text-field>
      </v-col>

      <v-col cols="6">
        <v-text-field v-model="keywords" label="Header Keywords"></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-textarea v-model="textarea1" auto-grow label="Textarea 1"></v-textarea>
      </v-col>
      <v-col cols="6">
        <v-textarea v-model="textarea2" auto-grow label="Textarea 2"></v-textarea>
      </v-col>
      <v-col cols="6">
        <v-textarea v-model="textarea3" auto-grow label="Textarea 3"></v-textarea>
      </v-col>
      <v-col cols="6">
        <v-textarea v-model="textarea4" auto-grow label="Textarea 4"></v-textarea>
      </v-col>
      <v-col cols="6">
        <v-text-field v-model="email" label="Email" type="email"></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-text-field v-model="tel" label="Telefonnummer" type="tel"></v-text-field>
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

            <v-btn color="red" style="background-color: white !important;" @click="dialog = false">
              Abbrechen
            </v-btn>

            <v-btn :loading="loading" style="background-color: white !important;"
                   @click="submitChanges">
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
      maxLengthRule: v => (v && v.length <= 155) || 'Die Beschreibung darf maximal 155 Zeichen lang sein.',
      keywords: null,
      textarea1: '',
      textarea2: '',
      textarea3: '',
      textarea4: '',
      email: null,
      tel: null,

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
        let response = await $fetch(`http://5.45.97.75:8080/auth/kontakt`, {
          method: 'GET',
        });

        if (response) {
          // Wandelt HTML-Format zurück in normalen Text für Textareas
          this.description = response.description;
          this.keywords = response.keywords
          this.textarea1 = this.unformattedText(response.text1);
          this.textarea2 = this.unformattedText(response.text2);
          this.textarea3 = this.unformattedText(response.text3);
          this.textarea4 = this.unformattedText(response.text4);
          this.email = response.email;
          this.tel = response.telefon;

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
        description: this.description,
        keywords: this.keywords,
        text1: this.formattedText(this.textarea1),
        text2: this.formattedText(this.textarea2),
        text3: this.formattedText(this.textarea3),
        text4: this.formattedText(this.textarea4),
        email: this.email,
        telefon: this.tel

      };

      try {
        let response = await $fetch(`http://5.45.97.75:8080/auth/kontakt`, {
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
