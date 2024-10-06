<template>
  <div>
    <v-tabs v-model="tab" align-tabs="center">
      <v-tab :value="1">Erstellen</v-tab>
      <v-tab :value="2">Löschen</v-tab>
    </v-tabs>

    <v-tabs-window v-model="tab">
      <v-tabs-window-item :value="1">
        <div style="overflow-y: scroll; padding-bottom: 50px; height: 70vh">
          <v-row class="pa-0">
            <v-col cols="4">
              <v-text-field v-model="name" label="Name"></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field v-model="geburtsalter" label="Geburtsalter"></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field v-model="getraenke" label="Getränke"></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-textarea v-model="vita" auto-grow label="Vita"></v-textarea>
            </v-col>
            <v-col cols="4">
              <v-textarea v-model="motto" auto-grow label="Motto"></v-textarea>
            </v-col>
            <v-col cols="4">
              <v-textarea v-model="cuisine" auto-grow label="Cuisine"></v-textarea>
            </v-col>
            <v-col cols="4">
              <v-textarea v-model="nutzungMeinerZeit" auto-grow label="Nutzung meiner Zeit"></v-textarea>
            </v-col>
            <v-col cols="4">
              <v-textarea v-model="interesse" auto-grow label="Interesse"></v-textarea>
            </v-col>
            <v-col cols="4">
              <v-textarea v-model="blumen" auto-grow label="Blumen"></v-textarea>
            </v-col>
            <v-col cols="4">
              <v-textarea v-model="parfum" auto-grow label="Parfüm"></v-textarea>
            </v-col>
            <v-col cols="4">
              <v-textarea v-model="weitereGeschenkideen" auto-grow label="Weitere Geschenkideen"></v-textarea>
            </v-col>
            <v-col cols="4">
              <v-textarea v-model="arrangements" auto-grow label="Arrangements"></v-textarea>
            </v-col>
            <v-col cols="12">
              <v-file-input
                  v-model="file"
                  counter
                  label="Bitte wählen Sie ein oder mehrere Bilder aus"
                  multiple
                  show-size
                  @change="onFilesSelected"
                  @click:clear="bilder = null"
              ></v-file-input>
            </v-col>
            <v-col v-if="bilder" cols="12">
              <v-row>
                <v-col v-for="(bild, index) in bilder" :key="index" class="mt-2">
                  <v-img :src="bild.imageBase64" max-height="100" max-width="100"></v-img>
                  <v-icon small style="color: darkred" @click="removeImage(index)">mdi-delete</v-icon>
                </v-col>
              </v-row>
            </v-col>
            <v-col :class="tempEditedDame ? 'justify-end' : 'justify-center'" :cols="tempEditedDame ? '6' : '12'"
                   class="d-flex">
              <v-btn :loading="loading" color="white" @click="submitChanges">
                {{ tempEditedDame ? 'Änderungen speichern' : 'Eintrag speichern' }}
              </v-btn>
            </v-col>
            <v-col v-if="tempEditedDame" class="d-flex justify-start" cols="6">
              <v-btn v-if="tempEditedDame" color="white" @click="resetEditMode">Bearbeiten abbrechen</v-btn>
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
              :headers="headers"
              :items="damen"
              :loading="loading"
              :loading-text="loading ? 'Lade Daten...' : 'Keine Daten vorhanden'"
              color="blue"
              no-data-text="Keine Einträge gefunden"
              style="background-color: rgba(0,0,255,0); height: 70vh"
          >
            <template v-slot:item="{ item }">
              <tr>
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.geburtsalter }}</td>
                <td>
                  <div v-for="(stadt, index) in item.staedte" :key="index">
                    {{ stadt.name }}<br>
                  </div>
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
                      <v-sheet height="100%" style="background-color: transparent;">
                        <!-- Ladezustand: Spinner bis das Bild geladen ist -->
                        <div v-if="!bild.loaded" class="d-flex fill-height justify-center align-center">
                          <v-progress-circular indeterminate></v-progress-circular>
                        </div>
                        <!-- Das Bild wird angezeigt, sobald es geladen ist -->
                        <v-img :src="bild.imageBase64" max-height="100%" max-width="100%"
                               @load="bild.loaded = true"></v-img>
                      </v-sheet>
                    </v-carousel-item>
                  </v-carousel>

                  <span v-else>Keine Bilder vorhanden</span>
                </td>
                <td>
                  <v-icon class="mr-2" small @click="editEntry(item)">mdi-pencil</v-icon>
                  <v-icon small style="color: darkred" @click="deleteEntry(item)">mdi-delete</v-icon>
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
        <v-card-title class="headline">Dame löschen?</v-card-title>
        <v-card-text>
          Bist du sicher, dass du diese Dame löschen möchtest? Diese Aktion kann nicht rückgängig gemacht werden.
          <br><br>
          <u><b>Wichtig:</b></u> Wenn dies die letzte Dame aus der Stadt ist, kann diese nicht gelöscht werden.
        </v-card-text>
        <v-card-actions>
          <v-btn color="red" style="background-color: white !important;" @click="deleteDialog = false">Abbrechen
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
      name: null,
      getraenke: null,
      geburtsalter: null,
      vita: null,
      motto: null,
      cuisine: null,
      nutzungMeinerZeit: null,
      interesse: null,
      blumen: null,
      parfum: null,
      weitereGeschenkideen: null,
      arrangements: null,

      loading: false,
      snackbar: false,
      snackbarText: null,
      snackbarColor: null,
      dialog: false,

      editedDame: null,
      tempEditedDame: null,
      bilder: null,

      tab: 2,
      damen: [],
      file: null,

      dameToDelete: null,

      deleteDialog: false,

      headers: [
        {title: 'ID', key: 'id'},
        {title: 'Name', key: 'name'},
        {title: 'Geburtsalter', key: 'geburtsalter'},
        {title: 'Stadt', key: 'stadt'},
        {title: 'Bild', key: 'bild'},
        {title: 'Aktionen', key: 'actions', sortable: false}
      ],
    };
  },
  mounted() {
    this.getDamen();
  },
  components: {
    Icon
  },
  methods: {
    resetEditMode() {
      this.tempEditedDame = null; // Temporäre Änderungen verwerfen
      this.editedDame = null;
      this.name = null;
      this.getraenke = null;
      this.geburtsalter = null;
      this.vita = null;
      this.motto = null;
      this.cuisine = null;
      this.nutzungMeinerZeit = null;
      this.interesse = null;
      this.blumen = null;
      this.parfum = null;
      this.weitereGeschenkideen = null;
      this.arrangements = null;
      this.bilder = null;
      this.tab = 2; // Wechsel zurück zum Löschen-Tab
    },
    async getDamen() {
      this.loading = true;
      try {
        let response = await $fetch(`https://maxi-escort.de:8443/auth/dame`, {
          method: 'GET',
        });

        if (response && Array.isArray(response)) {
          this.damen = response.map(dame => {
            // Füge das `loaded`-Flag für jedes Bild hinzu
            if (dame.bilder) {
              dame.bilder = dame.bilder.map(bild => ({
                ...bild,
                loaded: false, // Anfangszustand für das Laden der Bilder
              }));
            }
            return dame;
          });
        }
        console.log(this.damen);
      } catch (e) {
        console.error("Fehler beim Abrufen der Damen-Einträge:", e);
      }
      this.loading = false;
    }
    ,

    editEntry(entry) {
      this.tempEditedDame = JSON.parse(JSON.stringify(entry));  // Tiefes Klonen des Objekts für temporäre Bearbeitung
      this.tab = 1; // Wechsel zum "Erstellen"-Tab für das Bearbeiten

      // Zuordnung der Felder für die Bearbeitung
      this.name = this.tempEditedDame.name;
      this.getraenke = this.tempEditedDame.getränke;
      this.geburtsalter = this.tempEditedDame.geburtsalter;
      this.vita = this.tempEditedDame.vita;
      this.motto = this.tempEditedDame.motto;
      this.cuisine = this.tempEditedDame.cuisine;
      this.nutzungMeinerZeit = this.tempEditedDame.nutzungMeinerZeit;
      this.interesse = this.tempEditedDame.interessen;
      this.blumen = this.tempEditedDame.blume;
      this.parfum = this.tempEditedDame.parfüm;
      this.weitereGeschenkideen = this.tempEditedDame.weitereGeschenkideen;
      this.arrangements = this.tempEditedDame.arrangements;
      this.bilder = this.tempEditedDame.bilder;
    },

    // Methode zum Löschen eines Eintrags
    deleteEntry(entry) {
      this.dameToDelete = entry; // Den zu löschenden Eintrag speichern
      this.deleteDialog = true; // Dialog öffnen
    },

    // Methode zum Löschen nach Bestätigung
    async confirmDelete() {
      this.loading = true;
      this.deleteDialog = false; // Dialog schließen
      try {
        let response = await $fetch(`https://maxi-escort.de:8443/auth/dame/${this.dameToDelete.id}`, {
          method: 'DELETE',
        });

        // Entferne den Eintrag aus der Liste
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
      this.dameToDelete = null;  // Zurücksetzen
      await this.getDamen();  // Liste der Einträge neu laden
    },

    // Methode zum Senden der Daten an die API (für das Erstellen oder Bearbeiten)
    async submitChanges() {
      this.loading = true;

      // Überprüfen, ob eine bearbeitete Dame vorhanden ist (edit mode) oder es sich um eine neue Dame handelt
      const data = {
        name: this.name,
        getränke: this.getraenke,
        geburtsalter: this.geburtsalter,
        vita: this.vita,
        motto: this.motto,
        cuisine: this.cuisine,
        nutzungMeinerZeit: this.nutzungMeinerZeit,
        interessen: this.interesse,
        blume: this.blumen,
        parfüm: this.parfum,
        weitereGeschenkideen: this.weitereGeschenkideen,
        arrangements: this.arrangements,
        bilder: this.tempEditedDame ? this.tempEditedDame.bilder || [] : this.bilder || [], // Bilder logik
      };


      try {
        let response;
        if (this.tempEditedDame) {
          // Bearbeiten einer bestehenden Dame
          response = await $fetch(`https://maxi-escort.de:8443/auth/dame/${this.tempEditedDame.id}`, {
            method: 'PUT',
            body: data,
          });

          if (response) {
            console.log("Eintrag erfolgreich bearbeitet:", response);
            this.tab = 2
            this.snackbar = true;
            this.snackbarText = "Dame erfolgreich bearbeitet";
            this.snackbarColor = "success";
            await this.getDamen();
          }
        } else {
          console.log("edit dame")
          // Erstellen einer neuen Dame
          response = await $fetch(`https://maxi-escort.de:8443/auth/dame`, {
            method: 'POST',
            body: data,
          });

          if (response) {
            console.log("Eintrag erfolgreich gespeichert:", response);
            this.tab = 2
            this.snackbar = true;
            this.snackbarText = "Dame erfolgreich gespeichert";
            this.snackbarColor = "success";
            await this.getDamen();
          }
        }

        this.resetEditMode(); // Zurücksetzen des Bearbeitungsmodus
      } catch (e) {
        console.error("Fehler beim Speichern der Änderungen:", e);
        this.snackbar = true;
        this.snackbarText = "Fehler beim Speichern der Änderungen";
        this.snackbarColor = "error";
      }

      this.loading = false;
    }
    ,
    onFilesSelected(event) {
      const files = event.target.files;

      if (files && files.length) {
        Array.from(files).forEach((file) => {
          const reader = new FileReader();
          reader.onload = (e) => {
            const imageData = {imageBase64: e.target.result};

            // Wenn wir einen Eintrag bearbeiten, fügen wir die Bilder zu tempEditedDame.bilder hinzu
            if (this.tempEditedDame) {
              this.tempEditedDame.bilder = this.tempEditedDame.bilder || []; // Stelle sicher, dass das Bild-Array existiert
              this.tempEditedDame.bilder.push(imageData);
            } else {
              // Bei einer neuen Dame fügen wir die Bilder zu bilder hinzu
              this.bilder = this.bilder || [];
              this.bilder.push(imageData);
            }
          };
          reader.readAsDataURL(file);
        });
      }
      this.file = null;
    },

    // Methode zum Entfernen eines Bildes
    removeImage(index) {
      this.bilder.splice(index, 1); // Entferne das Bild aus dem Array
    },
  },


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
