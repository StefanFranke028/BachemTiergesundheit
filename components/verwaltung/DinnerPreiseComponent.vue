<template>

  <div>
    <v-row class="pa-0" style="height: 70vh">
      <v-col cols="6">
        <v-row class="d-flex justify-center" style="width: 100%">
          <v-col>
            <h3 class="text-center">
              Dinner Preis erstellen
            </h3>
          </v-col>
          <v-col cols="12">
            <v-text-field v-model="dauer" label="Dauer"/>
          </v-col>
          <v-col cols="12">
            <v-text-field v-model="geschenk" label="Geschenk"/>
          </v-col>
          <v-col cols="12">
            <v-row>
              <v-col :class="editDinnerPreis ? 'justify-end' : 'justify-center'" :cols="editDinnerPreis ? '6' : '12'"
                     class="d-flex">
                <v-btn :loading="loading" color="white" @click="submitChanges">
                  {{ editDinnerPreis ? 'Speichern' : 'Eintrag speichern' }}
                </v-btn>

              </v-col>
              <v-col v-if="editDinnerPreis" class="d-flex justify-start" cols="6">
                <v-btn v-if="editDinnerPreis" color="white" @click="resetEditMode">Neu erstellen</v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <!-- Textareas mit v-model -->
      <v-col class="d-flex justify-center" cols="6" style="overflow-y: scroll">
        <v-row class="ma-0 justify-center " style="width: 100%; height: 70vh;">
          <v-col cols="12">
            <h2 class="text-center mr-16 maxiEscortÜberschrift dm-serif">Tabelle 1</h2>
            <br>
            <br>
            <v-row class="ma-0 d-flex justify-end mt-n10" style="; width: 100%; border-radius: 10px">
              <v-col class="d-flex justify-center tabelleleft" cols="5">
                <h3>
                  Dauer
                </h3>
              </v-col>
              <v-divider vertical></v-divider>
              <v-col class="d-flex justify-center tabelleright" cols="5">
                <h3>
                  Geschenk

                </h3>
              </v-col>

              <v-col cols="2"/>


            </v-row>
            <v-row v-for="preis in dinnerPreise" :key="id" class="ma-0 d-flex justify-end"
                   style=" width: 100%; ">
              <v-col class="d-flex justify-center tabelleleftmid" cols="5">
                <p class="text-center">
                  {{ preis.dauer }}
                </p>
              </v-col>
              <v-col class="d-flex justify-center tabellerightmid" cols="5">
                <p>
                  {{ preis.geschenk }}
                </p>
              </v-col>

              <v-col class="d-flex justify-center " cols="2">
                <v-icon class="mr-2" small @click="editEscortPreise(preis)">mdi-pencil</v-icon> <!-- Bearbeiten -->
                <v-icon small style="color: darkred" @click="deleteEscortpreise(preis)">mdi-delete</v-icon>
                <!-- Löschsymbol -->
              </v-col>
            </v-row>

          </v-col>
        </v-row>
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

    <v-dialog v-model="deleteDialog" max-width="400">
      <v-card>
        <v-card-title class="headline">Dinnerpreis löschen?</v-card-title>
        <v-card-text>
          Bist du sicher, dass du diesen Dinnerpreis löschen möchtest? Diese Aktion kann nicht rückgängig gemacht
          werden.
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
      dauer: null,
      geschenk: null,

      dinnerPreise: [],
      deleteDialog: false,
      dinnerPreisToDelete: null,
      editDinnerPreis: null,

      loading: false,
      snackbar: false,
      snackbarText: null,
      snackbarColor: null,
      dialog: false // Für den Dialog zum Bestätigen
    };
  },
  components: {
    Icon
  },
  mounted() {
    this.getDinnerPreise();
  },
  methods: {
    async getDinnerPreise() {
      try {
        let response = await $fetch(`http://bubbletea-werl.de:8080/auth/dinnerpreise`, {
          method: 'GET',
        });

        if (response && Array.isArray(response)) {
          // Speichert die Escort-Preise in einer Variable, z.B. escortPreise
          this.dinnerPreise = response;

          // Beispielhafte weitere Verarbeitung, falls nötig:
        }
      } catch (e) {
        console.error("Fehler beim Abrufen der Dinner-Preise:", e);
      }
      console.log(this.dinnerPreise)
    },


    async submitChanges() {
      this.loading = true;
      const data = {
        dauer: this.dauer,
        geschenk: this.geschenk,
      };

      try {
        let response;

        if (this.editDinnerPreis) {
          // Wenn ein Eintrag bearbeitet wird, nutze PUT
          response = await $fetch(`http://bubbletea-werl.de:8080/auth/dinnerpreise/${this.editDinnerPreis.id}`, {
            method: 'PUT',
            body: data
          });

          if (response) {
            console.log("Dinnerpreise erfolgreich bearbeitet:", response);
            this.snackbar = true;
            this.snackbarText = "Dinnerpreise erfolgreich bearbeitet";
            this.snackbarColor = "success";
            await this.getDinnerPreise();
          }
        } else {
          // Erstellen eines neuen Eintrags
          response = await $fetch(`http://bubbletea-werl.de:8080/auth/dinnerpreise`, {
            method: 'POST',
            body: data
          });

          if (response) {
            console.log("Dinnerpreise erfolgreich gespeichert:", response);
            this.snackbar = true;
            this.snackbarText = "Dinnerpreise erfolgreich gespeichert";
            this.snackbarColor = "success";
            await this.getDinnerPreise();
          }
        }

        this.dialog = false;
        this.editDinnerPreis = null; // Zurücksetzen des bearbeiteten Eintrags
        this.resetEditMode(); // Modus zurücksetzen, falls du das nutzt
        this.dauer = null;
        this.geschenk = null;
      } catch (e) {
        console.error("Fehler beim Speichern der Änderungen:", e);
        this.snackbar = true;
        this.snackbarText = "Fehler beim Speichern der Dinnerpreise";
        this.snackbarColor = "error";
      }
      this.loading = false;
    },


    // Methode zum Löschen eines Eintrags
    deleteEscortpreise(entry) {
      this.dinnerPreisToDelete = entry; // Den zu löschenden Eintrag speichern
      this.deleteDialog = true; // Dialog öffnen
    },

    // Methode zum Löschen nach Bestätigung
    async confirmDelete() {
      this.loading = true;
      this.deleteDialog = false; // Dialog schließen
      try {
        let response = await $fetch(`http://bubbletea-werl.de:8080/auth/dinnerpreise/${this.dinnerPreisToDelete.id}`, {
          method: 'DELETE',
        });

        if (response) {
          // Entferne den Eintrag aus der Liste
          this.dinnerPreise = this.dinnerPreise.filter(e => e.id !== this.dinnerPreisToDelete.id);
          this.snackbar = true;
          this.snackbarText = "Dinnerpreis erfolgreich gelöscht";
          this.snackbarColor = "success";
        }
      } catch (e) {
        console.error("Fehler beim Löschen des Dinnerpreises:", e);
        this.snackbar = true;
        this.snackbarText = "Fehler beim Löschen des Dinnerpreises";
        this.snackbarColor = "error";
      }
      this.loading = false;
      this.dinnerPreisToDelete = null;  // Zurücksetzen
      await this.getDinnerPreise();  // Liste der Einträge neu laden
    },

    editEscortPreise(entry) {
      this.editDinnerPreis = entry;
      this.dauer = entry.dauer;
      this.geschenk = entry.geschenk;
    },

    resetEditMode() {
      this.editDinnerPreis = null;
      this.dauer = null;
      this.geschenk = null;
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

.tabelleleft {
  background-color: #65c6ec;
  border-radius: 10px 0px 0px 0px;
}

.tabelleright {
  background-color: #65c6ec;
  border-radius: 0px 10px 0px 0px;

}

.tabelle {
  background-color: #65c6ec;
}

.tabelleleftmid {
  background-color: #b8ddec;
}

.tabellerightmid {
  background-color: #b8ddec;
}

.maxiEscortÜberschrift {
  font-family: "Dosis", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  line-height: 1.3;
  font-family: "DM Serif Text", serif;
  font-weight: 400;
  font-style: normal;
}
</style>
