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
            <!-- Basisfelder für Casting -->
            <v-col cols="6">
              <v-text-field v-model="casting.ueberschrift1" label="Überschrift 1"></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-textarea v-model="casting.text1" auto-grow label="Text 1"></v-textarea>
            </v-col>

            <v-col cols="6">
              <v-text-field v-model="casting.ueberschrift2" label="Überschrift 2"></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-textarea v-model="casting.text2" auto-grow label="Text 2"></v-textarea>
            </v-col>

            <v-col cols="6">
              <v-text-field v-model="casting.ueberschrift3" label="Überschrift 3"></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-textarea v-model="casting.text3" auto-grow label="Text 3"></v-textarea>
            </v-col>

            <v-col cols="6">
              <v-text-field v-model="casting.ueberschrift4" label="Überschrift 4"></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-textarea v-model="casting.text4" auto-grow label="Text 4"></v-textarea>
            </v-col>

            <v-col cols="6">
              <v-text-field v-model="casting.ueberschrift5" label="Überschrift 5"></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-textarea v-model="casting.text5" auto-grow label="Text 5"></v-textarea>
            </v-col>

            <!-- Falls du weitere Überschriften/Textfelder hast, hier fortsetzen -->

            <!-- Bilder Upload -->
            <v-col cols="12">
              <v-file-input
                  v-model="file"
                  counter
                  label="Bilder auswählen"
                  multiple
                  show-size
                  @change="onFilesSelected"
                  @click:clear="casting.bilder = []"
              ></v-file-input>
            </v-col>
            <v-col v-if="casting.bilder && casting.bilder.length" cols="12">
              <v-row>
                <v-col
                    v-for="(bild, index) in casting.bilder"
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
            <v-col :class="tempEditedCasting ? 'justify-end' : 'justify-center'" :cols="tempEditedCasting ? '6' : '12'"
                   class="d-flex">
              <v-btn :loading="loading" color="white" @click="submitChanges">
                {{ tempEditedCasting ? 'Änderungen speichern' : 'Eintrag speichern' }}
              </v-btn>
            </v-col>
            <v-col v-if="tempEditedCasting" class="d-flex justify-start" cols="6">
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
              :items="castings"
              :loading="loading"
              :loading-text="loading ? 'Lade Daten...' : 'Keine Einträge gefunden'"
              color="blue"
              hide-default-footer
              no-data-text="Keine Einträge gefunden"
              style="background-color: transparent; height: 63vh"
          >
            <template v-slot:item="{ item }">
              <tr>
                <td>{{ item.id }}</td>
                <td>{{ item.ueberschrift1 }}</td>
                <td>{{ item.text1 }}</td>
                <td>
                  <v-carousel
                      v-if="item.bilder && item.bilder.length > 0"
                      :show-arrows="false"
                      cycle
                      height="200"
                      hide-delimiter-background
                      hide-delimiters
                      interval="2000"
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
        <v-card-title class="headline">Casting löschen?</v-card-title>
        <v-card-text>
          Bist du sicher, dass du dieses Casting löschen möchtest? Diese Aktion kann nicht rückgängig gemacht werden.
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
export default {
  name: "CastingComponent",
  data() {
    return {
      casting: {
        ueberschrift1: null,
        text1: null,
        ueberschrift2: null,
        text2: null,
        ueberschrift3: null,
        text3: null,
        ueberschrift4: null,
        text4: null,
        ueberschrift5: null,
        text5: null,
        // Weitere Felder können hier ergänzt werden
        bilder: []
      },
      tempEditedCasting: null,
      castings: [],
      file: null,
      tab: 2,
      loading: false,
      snackbar: false,
      snackbarText: "",
      snackbarColor: "",
      deleteDialog: false,
      castingToDelete: null,
      headers: [
        {title: 'ID', key: 'id'},
        {title: 'Überschrift 1', key: 'ueberschrift1'},
        {title: 'Text 1', key: 'text1'},
        {title: 'Bilder', key: 'bilder'},
        {title: 'Aktionen', key: 'actions', sortable: false}
      ]

    };
  },
  mounted() {
    this.getCastings();
  },
  methods: {
    resetEditMode() {
      this.tempEditedCasting = null;
      this.casting = {
        ueberschrift1: null,
        text1: null,
        ueberschrift2: null,
        text2: null,
        ueberschrift3: null,
        text3: null,
        ueberschrift4: null,
        text4: null,
        ueberschrift5: null,
        text5: null,
        bilder: []
      };
      this.tab = 2;
    },
    async getCastings() {
      this.loading = true;
      try {
        let response = await $fetch("http://5.45.97.75:8080/auth/casting", {method: "GET"});
        if (response && Array.isArray(response)) {
          this.castings = response.map(casting => {
            if (casting.bilder) {
              casting.bilder = casting.bilder.map(bild => ({...bild, loaded: true}));
            }
            return casting;
          });
        }
      } catch (e) {
        console.error("Fehler beim Abrufen der Castings:", e);
      }
      this.loading = false;
    },
    editEntry(item) {
      this.tempEditedCasting = JSON.parse(JSON.stringify(item));
      this.casting = {...this.tempEditedCasting};
      this.tab = 1;
    },
    deleteEntry(item) {
      this.castingToDelete = item;
      this.deleteDialog = true;
    },
    async confirmDelete() {
      this.loading = true;
      this.deleteDialog = false;
      try {
        await $fetch(`http://5.45.97.75:8080/auth/casting/${this.castingToDelete.id}`, {method: "DELETE"});
        this.castings = this.castings.filter(x => x.id !== this.castingToDelete.id);
        this.snackbar = true;
        this.snackbarText = "Casting erfolgreich gelöscht";
        this.snackbarColor = "success";
      } catch (e) {
        console.error("Fehler beim Löschen des Castings:", e);
        this.snackbar = true;
        this.snackbarText = "Fehler beim Löschen des Castings";
        this.snackbarColor = "error";
      }
      this.loading = false;
      this.castingToDelete = null;
    },
    compressImage(base64, maxWidth , quality ) {
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

    async submitChanges() {
      this.loading = true;
      const data = {...this.casting};
      try {
        let response;
        if (this.tempEditedCasting) {
          response = await $fetch(`http://5.45.97.75:8080/auth/casting/${this.tempEditedCasting.id}`, {
            method: "PUT",
            body: data
          });
          if (response) {
            this.snackbar = true;
            this.snackbarText = "Casting erfolgreich aktualisiert";
            this.snackbarColor = "success";
            this.tab = 2;
            await this.getCastings();
          }
        } else {
          response = await $fetch("http://5.45.97.75:8080/auth/casting", {
            method: "POST",
            body: data
          });
          if (response) {
            this.snackbar = true;
            this.snackbarText = "Casting erfolgreich erstellt";
            this.snackbarColor = "success";
            this.tab = 2;
            await this.getCastings();
          }
        }
        this.resetEditMode();
      } catch (e) {
        console.error("Fehler beim Speichern des Castings:", e);
        this.snackbar = true;
        this.snackbarText = "Fehler beim Speichern des Castings";
        this.snackbarColor = "error";
      }
      this.loading = false;
    },
    async onFilesSelected(event) {
      const files = event.target.files;
      if (files && files.length) {
        Array.from(files).forEach((file) => {
          const reader = new FileReader();
          reader.onload = async (e) => {
            const base64 = e.target.result;

            // Komprimiere das Bild
            const compressedBase64 = await this.compressImage(base64, 800, 0.7);
            const imageData = { imageBase64: compressedBase64 };

            // Behalte deine Logik 1:1 bei
            if (this.tempEditedCasting) {
              this.tempEditedCasting.bilder = this.tempEditedCasting.bilder || [];
              this.tempEditedCasting.bilder.push(imageData);
            } else {
              this.casting.bilder = this.casting.bilder || [];
              this.casting.bilder.push(imageData);
            }
          };
          reader.readAsDataURL(file);
        });
      }

      // Input leeren (auch gleiche Datei nochmal möglich machen)
      if (event.target) {
        event.target.value = '';
      }
      this.file = null;
    },
    removeImage(index) {
      if (this.tempEditedCasting) {
        this.tempEditedCasting.bilder.splice(index, 1);
      } else {
        this.casting.bilder.splice(index, 1);
      }
    }
  }
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
