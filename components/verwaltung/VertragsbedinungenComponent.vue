<template>
  <div style="overflow-y: auto; padding-bottom: 50px; height: 70vh">
    <v-row>
      <!-- Überschrift 1 und Text 1 -->
      <v-col cols="6">
        <v-text-field v-model="ueberschrift1" label="Überschrift 1"></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-textarea v-model="text1" auto-grow label="Text 1"></v-textarea>
      </v-col>

      <!-- Überschrift 2 und Text 2 -->
      <v-col cols="6">
        <v-text-field v-model="ueberschrift2" label="Überschrift 2"></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-textarea v-model="text2" auto-grow label="Text 2"></v-textarea>
      </v-col>

      <!-- Überschrift 3 und Text 3 -->
      <v-col cols="6">
        <v-text-field v-model="ueberschrift3" label="Überschrift 3"></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-textarea v-model="text3" auto-grow label="Text 3"></v-textarea>
      </v-col>

      <!-- Überschrift 4 und Text 4 -->
      <v-col cols="6">
        <v-text-field v-model="ueberschrift4" label="Überschrift 4"></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-textarea v-model="text4" auto-grow label="Text 4"></v-textarea>
      </v-col>

      <!-- Überschrift 5 und Text 5 -->
      <v-col cols="6">
        <v-text-field v-model="ueberschrift5" label="Überschrift 5"></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-textarea v-model="text5" auto-grow label="Text 5"></v-textarea>
      </v-col>

      <!-- Überschrift 6 und Text 6 -->
      <v-col cols="6">
        <v-text-field v-model="ueberschrift6" label="Überschrift 6"></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-textarea v-model="text6" auto-grow label="Text 6"></v-textarea>
      </v-col>

      <!-- Überschrift 7 und Text 7 -->
      <v-col cols="6">
        <v-text-field v-model="ueberschrift7" label="Überschrift 7"></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-textarea v-model="text7" auto-grow label="Text 7"></v-textarea>
      </v-col>

      <!-- Überschrift 8 und Text 8 -->
      <v-col cols="6">
        <v-text-field v-model="ueberschrift8" label="Überschrift 8"></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-textarea v-model="text8" auto-grow label="Text 8"></v-textarea>
      </v-col>

      <!-- Überschrift 9 und Text 9 -->
      <v-col cols="6">
        <v-text-field v-model="ueberschrift9" label="Überschrift 9"></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-textarea v-model="text9" auto-grow label="Text 9"></v-textarea>
      </v-col>

      <!-- Überschrift 10 und Text 10 -->
      <v-col cols="6">
        <v-text-field v-model="ueberschrift10" label="Überschrift 10"></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-textarea v-model="text10" auto-grow label="Text 10"></v-textarea>
      </v-col>

      <!-- Aktionen -->
      <v-col class="d-flex justify-center" cols="12">
        <v-btn color="white" @click="openDialog">Änderungen abschicken</v-btn>
      </v-col>
    </v-row>

    <!-- Bestätigungsdialog -->
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


    <!-- Snackbar zur Rückmeldung -->
    <v-snackbar v-model="snackbar" :color="snackbarColor" location="top" timeout="5000">
      {{ snackbarText }}
    </v-snackbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Felder für Vertragsbedingungen (Überschrift und Text jeweils für 10 Abschnitte)
      ueberschrift1: '',
      text1: '',
      ueberschrift2: '',
      text2: '',
      ueberschrift3: '',
      text3: '',
      ueberschrift4: '',
      text4: '',
      ueberschrift5: '',
      text5: '',
      ueberschrift6: '',
      text6: '',
      ueberschrift7: '',
      text7: '',
      ueberschrift8: '',
      text8: '',
      ueberschrift9: '',
      text9: '',
      ueberschrift10: '',
      text10: '',
      loading: false,
      snackbar: false,
      snackbarText: '',
      snackbarColor: '',
      dialog: false
    };
  },
  mounted() {
    this.getVertragsbedingungen();
  },
  methods: {
    async getVertragsbedingungen() {
      try {
        // Passe die URL und das Protokoll (z.B. GET /auth/vertragsbedingungen) an deine API an.
        let response = await $fetch(`https://mila-escort.de:8443/auth/vertragsbedingungen`, {
          method: 'GET'
        });
        console.log(response)
        if (response) {
          this.ueberschrift1 = response.überschrift1;
          this.text1 = this.unformattedText(response.text1);
          this.ueberschrift2 = response.überschrift2;
          this.text2 = this.unformattedText(response.text2);
          this.ueberschrift3 = response.überschrift3;
          this.text3 = this.unformattedText(response.text3);
          this.ueberschrift4 = response.überschrift4;
          this.text4 = this.unformattedText(response.text4);
          this.ueberschrift5 = response.überschrift5;
          this.text5 = this.unformattedText(response.text5);
          this.ueberschrift6 = response.überschrift6;
          this.text6 = this.unformattedText(response.text6);
          this.ueberschrift7 = response.überschrift7;
          this.text7 = this.unformattedText(response.text7);
          this.ueberschrift8 = response.überschrift8;
          this.text8 = this.unformattedText(response.text8);
          this.ueberschrift9 = response.überschrift9;
          this.text9 = this.unformattedText(response.text9);
          this.ueberschrift10 = response.überschrift10;
          this.text10 = this.unformattedText(response.text10);
        }
      } catch (e) {
        console.error("Fehler beim Abrufen der Vertragsbedingungen:", e);
      }
    },
    // Ersetzt Zeilenumbrüche durch <br> für die Speicherung in der DB
    formattedText(text) {
      return text.replace(/\n/g, "<br>");
    },
    // Ersetzt <br>-Tags wieder durch Zeilenumbrüche für die Anzeige
    unformattedText(text) {
      return text.replace(/<br\s*\/?>/g, "\n");
    },
    openDialog() {
      this.dialog = true;
    },
    async submitChanges() {
      this.loading = true;
      const data = {
        überschrift1: this.ueberschrift1,
        text1: this.formattedText(this.text1),
        überschrift2: this.ueberschrift2,
        text2: this.formattedText(this.text2),
        überschrift3: this.ueberschrift3,
        text3: this.formattedText(this.text3),
        überschrift4: this.ueberschrift4,
        text4: this.formattedText(this.text4),
        überschrift5: this.ueberschrift5,
        text5: this.formattedText(this.text5),
        überschrift6: this.ueberschrift6,
        text6: this.formattedText(this.text6),
        überschrift7: this.ueberschrift7,
        text7: this.formattedText(this.text7),
        überschrift8: this.ueberschrift8,
        text8: this.formattedText(this.text8),
        überschrift9: this.ueberschrift9,
        text9: this.formattedText(this.text9),
        überschrift10: this.ueberschrift10,
        text10: this.formattedText(this.text10)
      };
      try {
        // Passe die URL und Methode an deine API an (PUT /auth/vertragsbedingungen)
        let response = await $fetch(`https://mila-escort.de:8443/auth/vertragsbedingungen`, {
          method: 'PUT',
          body: data
        });
        if (response) {
          console.log("Vertragsbedingungen erfolgreich aktualisiert:", response);
          this.snackbarText = "Änderungen erfolgreich gespeichert";
          this.snackbarColor = "success";
        }
        this.dialog = false;
      } catch (e) {
        console.error("Fehler beim Aktualisieren der Vertragsbedingungen:", e);
        this.snackbarText = "Fehler beim Speichern der Änderungen";
        this.snackbarColor = "error";
      }
      this.snackbar = true;
      this.loading = false;
    }
  }
};
</script>

<style scoped>
.v-row {
  width: 100%;
  margin: 0;
}
</style>
