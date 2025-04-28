<template>
  <div>
    <v-tabs v-model="tab" align-tabs="center">
      <v-tab :value="1">Erstellen</v-tab>
      <v-tab :value="2">Löschen</v-tab>
    </v-tabs>

    <v-tabs-window v-model="tab">
      <!-- Erstellen / Bearbeiten -->
      <v-tabs-window-item :value="1">
        <div style="overflow-y: auto; padding-bottom: 50px; height: 70vh">
          <v-row class="pa-0">
            <!-- Basisinformationen -->
            <v-col cols="4">
              <v-text-field v-model="dame.name" label="Name"></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field v-model="dame.geburtsalter" label="Geburtsalter"></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field v-model="dame.groesse" label="Größe"></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field v-model="dame.haarfarbe" label="Haarfarbe"></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field v-model="dame.augenfarbe" label="Augenfarbe"></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field v-model="dame.damenIndex" label="Damen Index" type="number"></v-text-field>
            </v-col>

            <!-- Persönliche Angaben -->
            <v-col cols="12">
              <v-textarea v-model="dame.beschreibung" auto-grow label="Beschreibung"></v-textarea>
            </v-col>
            <v-col cols="12">
              <v-textarea v-model="dame.interessenHobbys" auto-grow label="Interessen & Hobbys"></v-textarea>
            </v-col>

            <!-- Dienstleistungen -->
            <v-col cols="12">
              <v-textarea v-model="dame.dienstleistungen" auto-grow label="Dienstleistungen"></v-textarea>
            </v-col>

            <!-- Weitere Angaben -->

            <v-col cols="4">
              <v-checkbox v-model="dame.paarchenBegleitung" label="Pärchen Begleitung"></v-checkbox>
            </v-col>
            <v-col cols="4">
              <v-checkbox v-model="dame.dinnerDate" label="Dinner Date"></v-checkbox>
            </v-col>
            <v-col cols="4">
              <v-checkbox v-model="dame.damenBegleitung" label="Damen Begleitung"></v-checkbox>
            </v-col>
            <v-col cols="8">
              <v-textarea auto-grow v-model="dame.reiseverfuegbarkeit" label="Geschenke Tipps"></v-textarea>
            </v-col>
            <v-col cols="4">
              <v-select v-model="dame.preisKategorie"
                        :items="preisKategorie"
                        item-text="key"
                        item-value="value"
                        label="Preis Kategorie"
              />
            </v-col>
            <v-col cols="12">
              <v-textarea v-model="dame.praesentation" auto-grow label="Präsentation"></v-textarea>
            </v-col>

            <!-- Bilder Upload -->
            <v-col cols="12">
              <v-file-input
                  ref="fileInput"
                  v-model="file"
                  counter
                  label="Bilder auswählen"
                  multiple
                  show-size
                  @change="onFilesSelected"
                  @click:clear="dame.bilder = []"
              />

            </v-col>
            <v-col v-if="dame.bilder && dame.bilder.length" cols="12">
              <v-row>
                <v-col
                    v-for="(bild, index) in dame.bilder"
                    :key="index"
                    class="mt-2"
                    cols="auto"
                >
                  <v-img :src="bild.imageBase64" max-height="100" max-width="100"></v-img>
                  <v-icon small style="color: darkred" @click="removeImage(index)">mdi-delete</v-icon>
                </v-col>
              </v-row>
            </v-col>

            <!-- Aktionen -->
            <v-col :class="tempEditedDame ? 'justify-end' : 'justify-center'" :cols="tempEditedDame ? '6' : '12'"
                   class="d-flex">
              <v-btn :loading="loading" color="white" @click="submitChanges">
                {{ tempEditedDame ? 'Änderungen speichern' : 'Eintrag speichern' }}
              </v-btn>
            </v-col>
            <v-col v-if="tempEditedDame" class="d-flex justify-start" cols="6">
              <v-btn color="white" @click="resetEditMode">Bearbeiten abbrechen</v-btn>
            </v-col>
          </v-row>
          <v-snackbar v-model="snackbar" :color="snackbarColor" location="top" timeout="5000">
            {{ snackbarText }}
          </v-snackbar>
        </div>
      </v-tabs-window-item>

      <!-- Löschen / Anzeigen -->
      <v-tabs-window-item :value="2">
        <div style="overflow-y: auto">
          <v-data-table
              :headers="headers"
              :items="damen"
              :loading="loading"
              :loading-text="loading ? 'Lade Daten...' : 'Keine Daten vorhanden'"
              color="blue"
              hide-default-footer
              no-data-text="Keine Einträge gefunden"
              style="background-color: transparent; height: 63vh"
          >
            <template v-slot:item="{ item }">
              <tr>
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.geburtsalter }}</td>
                <td>{{ item.groesse }}</td>
                <td>{{ item.haarfarbe }}</td>
                <td>{{ item.augenfarbe }}</td>
                <td>{{ item.reiseverfuegbarkeit }}</td>
                <td>
                  <div v-if="item.staedte && item.staedte.length">
                    <div v-for="(stadt, idx) in item.staedte" :key="idx">
                      {{ stadt.name }}
                    </div>
                  </div>
                  <span v-else>Keine Städte</span>
                </td>
                <td>
                  <v-carousel
                      v-if="item.bilder && item.bilder.length > 0"
                      :show-arrows="false"
                      cycle
                      height="200"
                      hide-delimiter-background
                      hide-delimiters
                      interval="3000"
                  >
                    <v-carousel-item v-for="(bild, i) in item.bilder" :key="i">
                      <v-sheet class="d-flex align-center" height="100%" style="background-color: transparent;">
                        <v-img
                            :src="bild.imageBase64"
                            max-height="100%"
                            max-width="100%"
                        >
                          <template v-slot:placeholder>
                            <div class="d-flex fill-height justify-center align-center">
                              <v-progress-circular indeterminate></v-progress-circular>
                            </div>
                          </template>
                        </v-img>
                      </v-sheet>
                    </v-carousel-item>
                  </v-carousel>
                  <span v-else>Keine Bilder</span>
                </td>
                <td>
                  <v-icon class="mr-2" small @click="editEntry(item)">mdi-pencil</v-icon>
                  <v-icon small style="color: darkred" @click="deleteEntry(item)">mdi-delete</v-icon>
                </td>
              </tr>
            </template>
          </v-data-table>
        </div>
      </v-tabs-window-item>
    </v-tabs-window>

    <v-snackbar v-model="snackbar" :color="snackbarColor" location="top" timeout="5000">
      {{ snackbarText }}
    </v-snackbar>

    <v-dialog v-model="deleteDialog" max-width="400">
      <v-card>
        <v-card-title class="headline">Dame löschen?</v-card-title>
        <v-card-text>
          Bist du sicher, dass du diese Dame löschen möchtest? Diese Aktion kann nicht rückgängig gemacht werden.
          <br><br>
          <u><b>Wichtig:</b></u> Wenn dies die letzte Dame aus der Stadt ist, kann diese nicht gelöscht werden.
        </v-card-text>
        <v-card-actions>
          <v-btn color="red" style="background-color: white !important;" @click="deleteDialog = false">Abbrechen</v-btn>
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
      // Initialisiere das dame-Objekt mit allen neuen Feldern
      dame: {
        name: null,
        geburtsalter: null,
        damenIndex: null,
        groesse: null,
        haarfarbe: null,
        augenfarbe: null,
        beschreibung: null,
        interessenHobbys: null,
        dienstleistungen: null,
        reiseverfuegbarkeit: null,
        paarchenBegleitung: false,
        damenBegleitung: false,
        praesentation: null,
        bilder: [],
        staedte: [],
      },
      loading: false,
      snackbar: false,
      snackbarText: null,
      snackbarColor: null,
      tempEditedDame: null,
      preisKategorie: [
        { title: 'Classic', value: 'Classic' },
        { title: 'Exclusiv', value: 'Exclusiv' },
        { title: 'VIP', value: 'VIP' },
      ],
      tab: 2,
      damen: [],
      file: null,
      deleteDialog: false,
      // Passe die Header der Tabelle an
      headers: [
        {title: 'ID', key: 'id'},
        {title: 'Name', key: 'name'},
        {title: 'Geburtsalter', key: 'geburtsalter'},
        {title: 'Größe', key: 'groesse'},
        {title: 'Haarfarbe', key: 'haarfarbe'},
        {title: 'Augenfarbe', key: 'augenfarbe'},
        {title: 'Geschenke Tipps', key: 'reiseverfuegbarkeit'},
        {title: 'Städte', key: 'staedte'},
        {title: 'Bilder', key: 'bilder'},
        {title: 'Aktionen', key: 'actions', sortable: false}
      ]
    };
  },
  mounted() {
    this.getDamen();
  },
  components: {
    Icon
  },
  methods: {
    compressImage(base64, maxWidth, quality) {
      if (!base64) return Promise.resolve(null);

      return new Promise((resolve) => {
        const img = new Image();
        img.src = base64;
        img.onload = () => {
          const canvas = document.createElement("canvas");

          const scale = maxWidth / img.width;
          canvas.width = maxWidth;
          canvas.height = img.height * scale;

          const ctx = canvas.getContext("2d");
          if (ctx) {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            const compressedBase64 = canvas.toDataURL("image/jpeg", quality);
            resolve(compressedBase64);
          }
        };
      });
    },

    resetEditMode() {
      this.tempEditedDame = null;
      this.dame = {
        name: null,
        geburtsalter: null,
        groesse: null,
        haarfarbe: null,
        augenfarbe: null,
        beschreibung: null,
        interessenHobbys: null,
        dienstleistungen: null,
        reiseverfuegbarkeit: null,
        paarchenBegleitung: false,
        damenBegleitung: false,
        praesentation: null,
        bilder: [],
        staedte: []
      };
      this.tab = 2;
    },
    async getDamen() {
      this.loading = true;
      try {
        let response = await $fetch(`https://mila-escort.de:8443/auth/dame`, {method: 'GET'});
        if (response && Array.isArray(response)) {
          this.damen = response.map(dame => {
            if (dame.bilder) {
              dame.bilder = dame.bilder.map(bild => ({...bild, loaded: true}));
            }
            return this.formatDame(dame);
          });
        }
      } catch (e) {
        console.error("Fehler beim Abrufen der Damen-Einträge:", e);
      }
      this.loading = false;
    },
    editEntry(entry) {
      this.tempEditedDame = JSON.parse(JSON.stringify(entry));
      this.tab = 1;
      this.dame = {...this.tempEditedDame};
    },
    deleteEntry(entry) {
      this.dameToDelete = entry;
      this.deleteDialog = true;
    },
    async confirmDelete() {
      this.loading = true;
      this.deleteDialog = false;
      try {
        let response = await $fetch(`https://mila-escort.de:8443/auth/dame/${this.dameToDelete.id}`, {method: 'DELETE'});
        this.damen = this.damen.filter(e => e.id !== this.dameToDelete.id);
        this.snackbar = true;
        this.snackbarText = "Dame erfolgreich gelöscht";
        this.snackbarColor = "success";
      } catch (e) {
        console.error("Fehler beim Löschen des Eintrags:", e);
        this.snackbar = true;
        this.snackbarText = "Fehler beim Löschen des Eintrags";
        this.snackbarColor = "error";
      }
      this.loading = false;
      this.dameToDelete = null;
      await this.getDamen();
    },
    formattedText(text) {
      // Ersetze alle Zeilenumbrüche durch <br>-Tags
      return text.replace(/\n/g, "<br>");
    },

    formatDame(dame) {
      dame.dienstleistungen = this.unformattedText(dame.dienstleistungen)
      dame.beschreibung = this.unformattedText(dame.beschreibung)
      dame.praesentation = this.unformattedText(dame.praesentation)
      dame.interessenHobbys = this.unformattedText(dame.interessenHobbys)
      return dame
    },

    unformatDame(dame){
      dame.dienstleistungen = this.formattedText(dame.dienstleistungen)
      dame.beschreibung = this.formattedText(dame.beschreibung)
      dame.praesentation = this.formattedText(dame.praesentation)
      dame.interessenHobbys = this.formattedText(dame.interessenHobbys)
      return dame
    },

// Methode zum Rückformatieren von HTML in Text für die Textareas
    unformattedText(text) {
      // Ersetze alle <br>-Tags durch Zeilenumbrüche
      return text.replace(/<br\s*\/?>/g, "\n");
    },
    async submitChanges() {
      this.loading = true;

      // Erstelle ein Payload-Objekt, in dem das Feld "staedte" durch ein Array von IDs ersetzt wird.
      let payload = {
        ...this.dame,
        // Falls staedte noch ein Array von Objekten ist, mappe es auf deren IDs.
        staedte: this.dame.staedte && this.dame.staedte.length
            ? this.dame.staedte.map(stadt => stadt.id)
            : []
      };

      payload = this.unformatDame(payload)

      try {
        let response;
        if (this.tempEditedDame) {
          response = await $fetch(`https://mila-escort.de:8443/auth/dame/${this.tempEditedDame.id}`, {
            method: 'PUT',
            body: payload,
          });
          if (response) {
            this.tab = 2;
            this.snackbar = true;
            this.snackbarText = "Dame erfolgreich bearbeitet";
            this.snackbarColor = "success";
            await this.getDamen();
          }
        } else {
          response = await $fetch(`https://mila-escort.de:8443/auth/dame`, {
            method: 'POST',
            body: payload,
          });
          if (response) {
            this.tab = 2;
            this.snackbar = true;
            this.snackbarText = "Dame erfolgreich gespeichert";
            this.snackbarColor = "success";
            await this.getDamen();
          }
        }
        this.resetEditMode();
      } catch (e) {
        console.error("Fehler beim Speichern der Änderungen:", e);
        this.snackbar = true;
        this.snackbarText = "Fehler beim Speichern der Änderungen";
        this.snackbarColor = "error";
      }
      this.loading = false;
    },
    readFileAsBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    },

    async onFilesSelected(event) {
      const files = event.target.files;
      if (files && files.length) {
        for (const file of files) {
          const base64 = await this.readFileAsBase64(file); // 1. Bild einlesen
          const compressed = await this.compressImage(base64, 800, 0.7); // 2. Komprimieren
          const imageData = { imageBase64: compressed }; // 3. Ab in die Datenstruktur

          if (this.tempEditedDame) {
            this.tempEditedDame.bilder = this.tempEditedDame.bilder || [];
            this.tempEditedDame.bilder.push(imageData);
            this.dame.bilder = [...this.tempEditedDame.bilder];
          } else {
            this.dame.bilder = this.dame.bilder || [];
            this.dame.bilder.push(imageData);
          }
        }
      }

      this.file = null;
      if (this.$refs.fileInput) {
        await this.$refs.fileInput.reset();
      }
    }



    ,
    removeImage(index) {
      if (this.tempEditedDame) {
        this.tempEditedDame.bilder.splice(index, 1);
        // Synchronisiere auch die dame.bilder-Liste:
        this.dame.bilder = [...this.tempEditedDame.bilder];
      } else {
        this.dame.bilder.splice(index, 1);
      }
    }
    ,
  },
};
</script>

<style scoped>
.v-tab {
  background-color: transparent !important;
  border-radius: 0 !important;
}

.v-row {
  width: 100%;
  margin: 0;
}

:deep() .v-table.v-table--fixed-header thead th {
  background-color: transparent !important;
  color: black !important;
}
</style>
