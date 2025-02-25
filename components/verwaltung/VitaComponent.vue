<template>

  <div style="overflow-y: scroll">
    <v-row class="pa-0" style="height: 70vh">
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
        <v-textarea v-model="textarea5" auto-grow label="Textarea 5"></v-textarea>
      </v-col>
      <v-col cols="6">
        <v-textarea v-model="textarea6" auto-grow label="Textarea 6"></v-textarea>
      </v-col>
      <v-col cols="6">
        <v-textarea v-model="textarea7" auto-grow label="Textarea 7"></v-textarea>
      </v-col>
      <v-col cols="6">
        <v-textarea v-model="textarea8" auto-grow label="Textarea 8"></v-textarea>
      </v-col>
      <v-col cols="6">
        <v-textarea v-model="textarea9" auto-grow label="Textarea 9"></v-textarea>
      </v-col>
      <v-col cols="6">
        <v-textarea v-model="textarea10" auto-grow label="Textarea 10"></v-textarea>
      </v-col>
      <v-col cols="6">
        <v-textarea v-model="textarea11" auto-grow label="Textarea 11"></v-textarea>
      </v-col>
      <v-col cols="6">
        <v-textarea v-model="textarea12" auto-grow label="Textarea 12"></v-textarea>
      </v-col>
      <v-col cols="6">
        <v-textarea v-model="textarea13" auto-grow label="Textarea 13"></v-textarea>
      </v-col>
      <v-col cols="6">
        <v-textarea v-model="textarea14" auto-grow label="Textarea 14"></v-textarea>
      </v-col>
      <v-col cols="6">
        <v-textarea v-model="textarea15" auto-grow label="Textarea 15"></v-textarea>
      </v-col>
      <v-col cols="6">
        <v-textarea v-model="textarea16" auto-grow label="Textarea 16"></v-textarea>
      </v-col>
      <v-col cols="6">
        <v-textarea v-model="textarea17" auto-grow label="Textarea 17"></v-textarea>
      </v-col>
      <v-col cols="6">
        <v-textarea v-model="textarea18" auto-grow label="Textarea 18"></v-textarea>
      </v-col>
      <v-col cols="6">
        <v-textarea v-model="textarea19" auto-grow label="Textarea 19"></v-textarea>
      </v-col>
      <v-col cols="6">
        <v-textarea v-model="textarea20" auto-grow label="Textarea 20"></v-textarea>
      </v-col>
      <v-col cols="6">
        <v-textarea v-model="textarea21" auto-grow label="Textarea 21"></v-textarea>
      </v-col>
      <v-col cols="6">
        <v-textarea v-model="textarea22" auto-grow label="Textarea 22"></v-textarea>
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
      textarea5: '',
      textarea6: '',
      textarea7: '',
      textarea8: '',
      textarea9: '',
      textarea10: '',
      textarea11: '',
      textarea12: '',
      textarea13: '',
      textarea14: '',
      textarea15: '',
      textarea16: '',
      textarea17: '',
      textarea18: '',
      textarea19: '',
      textarea20: '',
      textarea21: '',
      textarea22: '',

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
        let response = await $fetch(`http://5.45.97.75:8080/auth/vita`, {
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
          this.textarea5 = this.unformattedText(response.text5);
          this.textarea6 = this.unformattedText(response.text6);
          this.textarea7 = this.unformattedText(response.text7);
          this.textarea8 = this.unformattedText(response.text8);
          this.textarea9 = this.unformattedText(response.text9);
          this.textarea10 = this.unformattedText(response.text10);
          this.textarea11 = this.unformattedText(response.text11);
          this.textarea12 = this.unformattedText(response.text12);
          this.textarea13 = this.unformattedText(response.text13);
          this.textarea14 = this.unformattedText(response.text14);
          this.textarea15 = this.unformattedText(response.text15);
          this.textarea16 = this.unformattedText(response.text16);
          this.textarea17 = this.unformattedText(response.text17);
          this.textarea18 = this.unformattedText(response.text18);
          this.textarea19 = this.unformattedText(response.text19);
          this.textarea20 = this.unformattedText(response.text20);
          this.textarea21 = this.unformattedText(response.text21);
          this.textarea22 = this.unformattedText(response.text22);
        }
      } catch (e) {
        console.error("Fehler beim Abrufen der Vita-Daten:", e);
      }
    },

    // Methode zum Öffnen des Bestätigungsdialogs
    openDialog() {
      this.dialog = true;
    },

    // Methode zum Formatieren des Textes vor dem Speichern
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
        text5: this.formattedText(this.textarea5),
        text6: this.formattedText(this.textarea6),
        text7: this.formattedText(this.textarea7),
        text8: this.formattedText(this.textarea8),
        text9: this.formattedText(this.textarea9),
        text10: this.formattedText(this.textarea10),
        text11: this.formattedText(this.textarea11),
        text12: this.formattedText(this.textarea12),
        text13: this.formattedText(this.textarea13),
        text14: this.formattedText(this.textarea14),
        text15: this.formattedText(this.textarea15),
        text16: this.formattedText(this.textarea16),
        text17: this.formattedText(this.textarea17),
        text18: this.formattedText(this.textarea18),
        text19: this.formattedText(this.textarea19),
        text20: this.formattedText(this.textarea20),
        text21: this.formattedText(this.textarea21),
        text22: this.formattedText(this.textarea22)
      };

      try {
        let response = await $fetch(`http://5.45.97.75:8080/auth/vita`, {
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
