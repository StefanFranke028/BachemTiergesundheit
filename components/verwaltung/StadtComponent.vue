<template>

  <div>
    <v-row class="pa-0" style="height: 70vh">
      <v-col cols="6" style="overflow-y: scroll !important; height: 100%">
        <v-row class="d-flex justify-center" style="width: 100%">
          <v-col>
            <h3 class="text-center">
              Städte
            </h3>
          </v-col>
          <v-col cols="12">
            <v-text-field v-model="name" label="Name"/>
          </v-col>
          <v-col cols="12">
            <v-text-field v-model="überschrift" label="Überschrift"/>
          </v-col>
          <v-col cols="12">
            <v-textarea v-model="text" auto-grow label="Text"/>
          </v-col>
          <v-col cols="12">
            <v-select
                v-model="selectedDamen"
                :item-title="item => `${item.id} - ${item.name}`"
                :items="damenList"
                chips
                clearable
                item-key="id"
                item-value="id" label="Wählen Sie Damen"
                multiple
                return-object
            />
          </v-col>

          <v-col cols="12">
            <v-row>
              <v-col :class="editStadt ? 'justify-end' : 'justify-center'" :cols="editStadt ? '6' : '12'"
                     class="d-flex">
                <v-btn :loading="loading" color="white" @click="submitChanges">
                  {{ editStadt ? 'Speichern' : 'Eintrag speichern' }}
                </v-btn>

              </v-col>
              <v-col v-if="editStadt" class="d-flex justify-start" cols="6">
                <v-btn v-if="editStadt" color="white" @click="resetEditMode">Neu erstellen</v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <!-- Textareas mit v-model -->
      <v-col class="d-flex justify-center" cols="6" style="overflow-y: scroll">
        <div style="overflow-y: visible">
          <v-data-table-virtual
              :headers="headers"
              :items="staedte"
              :loading="loadingTable"
              :loading-text="loadingTable ? 'Lade Daten...' : 'Keine Daten vorhanden'"
              color="blue"
              no-data-text="Keine Einträge gefunden"
              style="background-color: rgba(0,0,255,0); height: 70vh; overflow-y: visible"
              width="100%"
          >
            <template v-slot:item="{ item }">
              <tr>
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.überschrift }}</td>
                <td>
                  <div v-for="(dame, index) in item.damen" :key="index">
                    {{ dame.name }}<br>
                  </div>
                </td>
                <td>
                  <v-icon class="mr-2" small @click="editStadtEntität(item)">mdi-pencil</v-icon> <!-- Bearbeiten -->
                  <v-icon small style="color: darkred" @click="deleteStadt(item)">mdi-delete</v-icon>
                  <!-- Löschsymbol -->
                </td>
              </tr>
            </template>
          </v-data-table-virtual>

        </div>
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

    <v-dialog v-model="deleteDialog" max-width="400">
      <v-card>
        <v-card-title class="headline">Stadt löschen?</v-card-title>
        <v-card-text>
          Bist du sicher, dass du diese Stadt löschen möchtest? Diese Aktion kann nicht rückgängig gemacht werden.
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
export default {
  data() {
    return {
      name: null,
      überschrift: null,
      text: null,
      selectedDamen: [],
      damenList: [],

      headers: [
        {title: 'ID', key: 'id'},
        {title: 'Name', key: 'name'},
        {title: 'Überschrift', key: 'überschrift'},
        {title: 'Damen', key: 'damen'},
        {title: 'Aktionen', key: 'actions', sortable: false}
      ],

      staedte: [],
      deleteDialog: false,
      stadtToDelete: null,
      editStadt: null,

      loading: false,
      loadingTable: false,
      snackbar: false,
      snackbarText: null,
      snackbarColor: null,
      dialog: false
    };
  },
  mounted() {
    this.getStaedte();
    this.fetchDamen()
  },
  methods: {
    async fetchDamen() {
      try {
        // Daten von der API abrufen
        const response = await $fetch('https://mila-escort.de:8443/auth/dame');

        // Speichere die vollständigen Damen-Objekte in damenList
        this.damenList = response;
      } catch (error) {
        console.error('Fehler beim Laden der Damen:', error);
      }
    },
    async getStaedte() {
      this.loadingTable = true;
      try {
        let response = await $fetch(`https://mila-escort.de:8443/auth/stadt`, {
          method: 'GET',
        });

        if (response && Array.isArray(response)) {
          this.staedte = response;
          for (this.stadt of this.staedte) {
            // Wandelt HTML-Format zurück in normalen Text für Textareas
            this.stadt.text = this.unformattedText(this.stadt.text);
            this.stadt.überschrift = this.unformattedText(this.stadt.überschrift);
          }
          console.log(response)

          // Beispielhafte weitere Verarbeitung, falls nötig:
        }
      } catch (e) {
        console.error("Fehler beim Abrufen der Städte:", e);
      }
      this.loadingTable = false;

      console.log(this.staedte)
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


    async submitChanges() {
      this.loading = true;
      var test = this.name


      const data = {
        name: test.trim(),
        überschrift: this.überschrift,
        text: this.formattedText(this.text),
        damenIds: this.selectedDamen.map(dame => dame.id)
      };

      if (this.selectedDamen.length === 0) {
        this.snackbar = true;
        this.snackbarText = "Bitte wählen Sie mindestens eine Dame aus";
        this.snackbarColor = "warning";
        this.loading = false;
        return;
      }


      try {
        let response;

        if (this.editStadt) {
          response = await $fetch(`https://mila-escort.de:8443/auth/stadt/${this.editStadt.id}`, {
            method: 'PUT',
            body: data
          });

          if (response) {
            console.log("Städte erfolgreich bearbeitet:", response);
            this.snackbar = true;
            this.snackbarText = "Städte erfolgreich bearbeitet";
            this.snackbarColor = "success";
            await this.getStaedte();
          }
        } else {
          // Erstellen eines neuen Eintrags
          response = await $fetch(`https://mila-escort.de:8443/auth/stadt`, {
            method: 'POST',
            body: data
          });

          if (response) {
            console.log("Städte erfolgreich gespeichert:", response);
            this.snackbar = true;
            this.snackbarText = "Städte erfolgreich gespeichert";
            this.snackbarColor = "success";
            await this.getStaedte();
          }
        }

        this.dialog = false;
        this.editedEntry = null;
        this.resetEditMode();
        this.dauer = null;
        this.classic = null;
        this.exclusiv = null;
        this.vip = null;
      } catch (e) {
        console.error("Fehler beim Speichern der Änderungen:", e);
        this.snackbar = true;
        this.snackbarText = "Fehler beim Speichern der Städte";
        this.snackbarColor = "error";
      }
      this.loading = false;
    },


    // Methode zum Löschen eines Eintrags
    deleteStadt(entry) {
      this.stadtToDelete = entry; // Den zu löschenden Eintrag speichern
      this.deleteDialog = true; // Dialog öffnen
    },

    // Methode zum Löschen nach Bestätigung
    async confirmDelete() {
      this.loading = true;
      this.deleteDialog = false;
      try {
        let response = await $fetch(`https://mila-escort.de:8443/auth/stadt/${this.stadtToDelete.id}`, {
          method: 'DELETE',
        });

        if (response) {
          // Entferne den Eintrag aus der Liste
          this.staedte = this.staedte.filter(e => e.id !== this.stadtToDelete.id);
          this.snackbar = true;
          this.snackbarText = "Stadt erfolgreich gelöscht";
          this.snackbarColor = "success";
        }
      } catch (e) {
        console.error("Fehler beim Löschen der Städte:", e);
        this.snackbar = true;
        this.snackbarText = "Fehler beim Löschen des Stadt";
        this.snackbarColor = "error";
      }
      this.loading = false;
      this.stadtToDelete = null;
      await this.getStaedte();
    },

    editStadtEntität(entry) {
      this.editStadt = entry;
      this.name = entry.name;
      // Hier korrekt überschrift setzen:
      this.überschrift = entry.überschrift;
      this.text = entry.text;
      // Stelle sicher, dass selectedDamen ein Array von Objekten ist.
      this.selectedDamen = Array.isArray(entry.damen) ? entry.damen : [];
      console.log(entry.damen);
    },

    resetEditMode() {
      this.editStadt = null;
      this.überschrift = null;
      this.text = null;
      this.name = null;
      // Setze selectedDamen auf ein leeres Array statt null
      this.selectedDamen = [];
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
