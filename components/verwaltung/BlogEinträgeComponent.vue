<template>
  <div>
    <v-tabs v-model="tab" align-tabs="center">
      <v-tab :value="1">Erstellen</v-tab>
      <v-tab :value="2">Löschen</v-tab>
    </v-tabs>

    <v-tabs-window v-model="tab">
      <v-tabs-window-item :value="1">
        <div style="overflow-y: scroll">
          <v-row class="pa-0" style="height: 625px">
            <v-col cols="6">
              <v-text-field v-model="ueberschrift" label="Überschrift"></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field v-model="unterUeberschrift" label="Unterüberschrift"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea v-model="text" auto-grow label="Text"></v-textarea>
            </v-col>
            <v-col cols="4">
              <v-text-field v-model="autor" label="Autor"></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-file-input
                  v-model="bild"
                  :label="editedEntry && bild === null ? 'Wählen Sie ein neues Bild aus' : 'Bild auswählen'"
                  @change="onFileSelected"
              ></v-file-input>
            </v-col>
            <v-col cols="4">
              <v-img v-if="base64Image" :src="base64Image" max-width="100%"></v-img>
            </v-col>
            <v-col :class="editedEntry ? 'justify-end' : 'justify-center'" :cols="editedEntry ? '6' : '12'"
                   class="d-flex">
              <v-btn :loading="loading" color="white" @click="submitChanges">
                {{ editedEntry ? 'Änderungen speichern' : 'Eintrag speichern' }}
              </v-btn>

            </v-col>
            <v-col v-if="editedEntry" class="d-flex justify-start" cols="6">
              <v-btn v-if="editedEntry" color="white" @click="resetEditMode">Bearbeiten abbrechen</v-btn>
            </v-col>
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
      </v-tabs-window-item>

      <v-tabs-window-item :value="2">
        <div style="overflow-y: scroll">
          <v-data-table-virtual
              :items="blogEntries"
              color="blue"
              no-data-text="Keine Einträge gefunden"
              style="background-color: rgba(0,0,255,0); height: 625px"
          >
            <template v-slot:item="{ item }">
              <tr>
                <td>{{ item.id }}</td>                     <!-- Id -->
                <td>{{ item.ueberschrift }}</td>           <!-- Überschrift -->
                <td>{{ item.unterUeberschrift }}</td>      <!-- UnterÜberschrift -->
                <td>{{ item.text }}</td>                   <!-- Text -->
                <td>{{ item.autor }}</td>                  <!-- Autor -->
                <td>
                  <input v-model="item.datum" disabled readonly style="color: black" type="date">
                </td>                  <!-- Datum -->
                <td>
                  <v-img :src="item.bild" max-height="50" max-width="50"></v-img>  <!-- Bild -->
                </td>
                <td>
                  <v-icon class="mr-2" small @click="editEntry(item)">mdi-pencil</v-icon> <!-- Bearbeiten -->
                </td>
                <td>
                  <v-icon color="red" small @click="deleteEntry(item)">mdi-delete</v-icon> <!-- Löschsymbol -->

                </td>
              </tr>
            </template>
          </v-data-table-virtual>

        </div>
      </v-tabs-window-item>
    </v-tabs-window>
    <v-snackbar
        v-model="snackbar"
        :color="snackbarColor"
        location="top"
        timeout="5000"
    >
      {{ snackbarText }}
    </v-snackbar>


    <v-dialog v-model="deleteDialog" max-width="400">
      <v-card>
        <v-card-title class="headline">Eintrag löschen?</v-card-title>
        <v-card-text>
          Bist du sicher, dass du diesen Eintrag löschen möchtest? Diese Aktion kann nicht rückgängig gemacht werden.
        </v-card-text>
        <v-card-actions>
          <v-btn style="background-color: white !important;" @click="deleteDialog = false">Abbrechen
          </v-btn>
          <v-btn style="background-color: white !important;" @click="confirmDelete">Löschen</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </div>
</template>

<script>
import {Icon} from '@iconify/vue';


export default {
  data() {
    return {
      description: 1,
      maxLengthRule: v => (v && v.length <= 155) || 'Die Beschreibung darf maximal 155 Zeichen lang sein.',
      keywords: null,
      tab: null,
      textarea1: '',
      textarea2: '',
      bild: null,
      base64Image: null,
      loading: false,
      snackbar: false,
      snackbarText: null,
      snackbarColor: null,
      dialog: false,
      blogEntries: [
        {
          id: 1,
          ueberschrift: "Überschrift",
          unterUeberschrift: "Unterüberschrift",
          text: "Text",
          autor: "Autor",
          datum: "Datum",
          bild: "https://cdn.vuetifyjs.com/images/cards/desert.jpg",
        }
      ],
      editedEntry: null,
      deleteDialog: false,
      headers: [
        {text: 'Id', value: 'id'},
        {text: 'Überschrift', value: 'ueberschrift'},
        {text: 'UnterÜberschrift', value: 'unterUeberschrift'},
        {text: 'Text', value: 'text'},
        {text: 'Autor', value: 'autor'},
        {text: 'Datum', value: 'datum'},
        {text: 'Bild', value: 'bild'},
        {text: 'Aktionen', value: 'actions', sortable: false}
      ],

      ueberschrift: null,
      unterUeberschrift: null,
      text: null,
      autor: null,

      entryToDelete: null,  // Speichert den zu löschenden Eintrag
    };
  },
  mounted() {
    this.getBlogEintraege();
  },
  components: {
    Icon
  },
  methods: {
    resetEditMode() {
      this.editedEntry = null;
      this.ueberschrift = null;
      this.unterUeberschrift = null;
      this.text = null;
      this.autor = null;
      this.base64Image = null;
      this.bild = null
    },
    // Methode zum Abrufen der Blog-Einträge
    async getBlogEintraege() {
      try {
        let response = await $fetch(`https://maxi-escort.de:8443/auth/blog/entries`, {
          method: 'GET',
        });

        if (response && Array.isArray(response)) {
          // Hier wird die Blog-Einträge-Liste verarbeitet
          this.blogEntries = response.map(entry => ({
            id: entry.id,
            ueberschrift: entry.ueberschrift,
            unterUeberschrift: entry.unterUeberschrift,
            text: entry.text,
            autor: entry.autor,
            datum: entry.datum,
            bild: entry.bild,
          }));
        }
        console.log(this.blogEntries)
      } catch (e) {
        console.error("Fehler beim Abrufen der Blog-Einträge:", e);
      }
    },

    // Methode zum Bearbeiten eines Eintrags
    editEntry(entry) {
      // Speichere den zu bearbeitenden Eintrag und öffne ggf. ein Formular oder setze die Felder
      this.editedEntry = entry;
      this.tab = 1; // Wechsel zum "Erstellen"-Tab für das Bearbeiten
      this.ueberschrift = entry.ueberschrift;
      this.unterUeberschrift = entry.unterUeberschrift;
      this.text = entry.text;
      this.base64Image = entry.bild;
      this.autor = entry.autor;
    },

    // Methode zum Löschen eines Eintrags
    deleteEntry(entry) {
      this.entryToDelete = entry; // Den zu löschenden Eintrag speichern
      this.deleteDialog = true; // Dialog öffnen
    },

    // Methode zum Löschen nach Bestätigung
    async confirmDelete() {
      this.loading = true;
      this.deleteDialog = false; // Dialog schließen
      try {
        let response = await $fetch(`https://maxi-escort.de:8443/auth/blog/entries/${this.entryToDelete.id}`, {
          method: 'DELETE',
        });

        if (response) {
          // Entferne den Eintrag aus der Liste
          this.blogEntries = this.blogEntries.filter(e => e.id !== this.entryToDelete.id);
          this.snackbar = true;
          this.snackbarText = "Eintrag erfolgreich gelöscht";
          this.snackbarColor = "success";
        }
      } catch (e) {
        console.error("Fehler beim Löschen des Eintrags:", e);
        this.snackbar = true;
        this.snackbarText = "Fehler beim Löschen des Eintrags";
        this.snackbarColor = "error";
      }
      this.loading = false;
      this.entryToDelete = null;  // Zurücksetzen
      await this.getBlogEintraege();  // Liste der Einträge neu laden
    },

    // Methode zum Senden der Daten an die API (für das Erstellen oder Bearbeiten)
    async submitChanges() {
      this.loading = true;
      const data = {
        ueberschrift: this.ueberschrift,
        unterUeberschrift: this.unterUeberschrift,
        text: this.text,
        bild: this.base64Image,
        autor: this.autor
      };

      try {
        let response;

        if (this.editedEntry) {
          // Wenn ein Eintrag bearbeitet wird, nutze PUT
          response = await $fetch(`https://maxi-escort.de:8443/auth/blog/entries/${this.editedEntry.id}`, {
            method: 'PUT',
            body: data
          });

          if (response) {
            console.log("Eintrag erfolgreich bearbeitet:", response);
            this.snackbar = true;
            this.snackbarText = "Blogeintrag erfolgreich bearbeitet";
            this.snackbarColor = "success";
            await this.getBlogEintraege();
          }
        } else {
          // Erstellen eines neuen Eintrags
          response = await $fetch(`https://maxi-escort.de:8443/auth/blog/entries`, {
            method: 'POST',
            body: data
          });

          if (response) {
            console.log("Eintrag erfolgreich gespeichert:", response);
            this.snackbar = true;
            this.snackbarText = "Blogeintrag erfolgreich gespeichert";
            this.snackbarColor = "success";
            await this.getBlogEintraege();
          }
        }

        this.tab = 2
        this.dialog = false;
        this.editedEntry = null; // Zurücksetzen des bearbeiteten Eintrags
        await this.getBlogEintraege()
        this.resetEditMode()
      } catch (e) {
        console.error("Fehler beim Speichern der Änderungen:", e);
        this.snackbar = true;
        this.snackbarText = "Fehler beim Speichern der Änderungen";
        this.snackbarColor = "error";
      }
      this.loading = false;
    },

    // Methode zum Auswählen einer Bilddatei und Konvertieren in Base64
    onFileSelected(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.base64Image = e.target.result;
        };
        reader.readAsDataURL(file);
      }
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

::v-deep .v-table.v-table--fixed-header thead th {
  background-color: rgba(74, 144, 226, 0) !important;
  color: black !important;
}


</style>
