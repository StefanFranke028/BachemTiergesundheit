<template>
  <div>
    <v-tabs v-model="tab" align-tabs="center">
      <v-tab :value="1">Erstellen</v-tab>
      <v-tab :value="2">Löschen</v-tab>
    </v-tabs>

    <v-tabs-window v-model="tab">
      <v-tabs-window-item :value="1">
        <div style="overflow-y: scroll; padding-bottom: 50px; height: 625px">
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
                  counter
                  label="File input"
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
                  <v-icon color="red" small @click="removeImage(index)">mdi-delete</v-icon>
                </v-col>
              </v-row>
            </v-col>
            <v-col :class="editedDame ? 'justify-end' : 'justify-center'" :cols="editedDame ? '6' : '12'"
                   class="d-flex">
              <v-btn :loading="loading" color="white" @click="submitChanges">
                {{ editedDame ? 'Änderungen speichern' : 'Eintrag speichern' }}
              </v-btn>
            </v-col>
            <v-col v-if="editedDame" class="d-flex justify-start" cols="6">
              <v-btn v-if="editedDame" color="white" @click="resetEditMode">Bearbeiten abbrechen</v-btn>
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
              color="blue"
              no-data-text="Keine Einträge gefunden"
              style="background-color: rgba(0,0,255,0); height: 625px"
          >
            <template v-slot:item="{ item }">
              <tr>
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.geburtsalter }}</td>
                <td>
                  <div v-for="(stadt, index) in item.städte" :key="index">
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
                    <v-carousel-item
                        v-for="(bild, i) in item.bilder"
                        :key="i"
                    >
                      <v-sheet height="100%" style="background-color: transparent;">
                        <!-- Hintergrund auf transparent setzen -->
                        <div class="d-flex fill-height justify-center align-center">
                          <v-img :src="bild.imageBase64" max-height="100%" max-width="100%"></v-img>
                        </div>
                      </v-sheet>
                    </v-carousel-item>
                  </v-carousel>
                  <span v-else>Keine Bilder vorhanden</span>
                </td>
                <td>
                  <v-icon class="mr-2" small @click="editEntry(item)">mdi-pencil</v-icon>
                  <v-icon color="red" small @click="deleteEntry(item)">mdi-delete</v-icon>
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
      bilder: null,

      tab: 0,
      damen: [],

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
      this.tab = 2
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
    },
    async getDamen() {
      try {
        let response = await $fetch(`https://maxi-escort.de:8443/auth/dame`, {
          method: 'GET',
        });

        if (response && Array.isArray(response)) {
          this.damen = response
        }
        console.log(this.damen)
      } catch (e) {
        console.error("Fehler beim Abrufen der Damen-Einträge:", e);
      }
    },

    editEntry(entry) {
      // Speichere den zu bearbeitenden Eintrag und öffne ggf. ein Formular oder setze die Felder
      this.editedDame = entry;
      this.tab = 1; // Wechsel zum "Erstellen"-Tab für das Bearbeiten

      // Zuordnung der Felder
      this.name = entry.name;
      this.getraenke = entry.getränke; // Achtung: andere Schreibweise
      this.geburtsalter = entry.geburtsalter;
      this.vita = entry.vita;
      this.motto = entry.motto;
      this.cuisine = entry.cuisine;
      this.nutzungMeinerZeit = entry.nutzungMeinerZeit; // Schreibweise korrekt
      this.interesse = entry.interessen; // Plural im Item
      this.blumen = entry.blume; // Singular im Item
      this.parfum = entry.parfüm; // Andere Schreibweise
      this.weitereGeschenkideen = entry.weitereGeschenkideen;
      this.arrangements = entry.arrangements;
      this.bilder = entry.bilder;

      // Falls du noch weitere Felder hast, die man beim Bearbeiten ausfüllen soll, füge sie hier hinzu
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

        if (response) {
          // Entferne den Eintrag aus der Liste
          this.damen = this.damen.filter(e => e.id !== this.dameToDelete.id);
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
      this.dameToDelete = null;  // Zurücksetzen
      await this.getDamen();  // Liste der Einträge neu laden
    },

    // Methode zum Senden der Daten an die API (für das Erstellen oder Bearbeiten)
    async submitChanges() {
      this.loading = true;
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
        bilder: this.bilder
      };

      try {
        let response;

        if (this.editedDame) {
          response = await $fetch(`https://maxi-escort.de:8443/auth/dame/${this.editedDame.id}`, {
            method: 'PUT',
            body: data
          });

          if (response) {
            console.log("Eintrag erfolgreich bearbeitet:", response);
            this.snackbar = true;
            this.snackbarText = "Dame erfolgreich bearbeitet";
            this.snackbarColor = "success";
            await this.getDamen();
          }
        } else {
          // Erstellen eines neuen Eintrags
          response = await $fetch(`https://maxi-escort.de:8443/auth/dame`, {
            method: 'POST',
            body: data
          });

          if (response) {
            console.log("Eintrag erfolgreich gespeichert:", response);
            this.snackbar = true;
            this.snackbarText = "Dame erfolgreich gespeichert";
            this.snackbarColor = "success";
            await this.getDamen();
          }
        }

        this.tab = 2
        this.dialog = false;
        this.editedDame = null; // Zurücksetzen des bearbeiteten Eintrags
        await this.getDamen()
        this.resetEditMode()
      } catch (e) {
        console.error("Fehler beim Speichern der Änderungen:", e);
        this.snackbar = true;
        this.snackbarText = "Fehler beim Speichern der Änderungen";
        this.snackbarColor = "error";
      }
      this.loading = false;
    },

    onFilesSelected(event) {
      const files = event.target.files;

      if (files && files.length) {
        Array.from(files).forEach((file) => {
          const reader = new FileReader();
          reader.onload = (e) => {
            // Füge das Bild dem Array hinzu, wenn es existiert
            this.bilder = this.bilder || []; // Stelle sicher, dass bilder nicht null ist
            this.bilder.push({imageBase64: e.target.result});
          };
          reader.readAsDataURL(file);
        });
      }
    },

    // Methode zum Entfernen eines Bildes
    removeImage(index) {
      this.bilder.splice(index, 1); // Entferne das Bild aus dem Array
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
