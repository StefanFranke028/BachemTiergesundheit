<template>
  <div>
    <v-tabs
        v-model="tab"
        align-tabs="center"
        class="mt-3 text-white"
        color="black"
        style="height: 100%"
    >
      <v-tab :value="0" style="color: blue">Erstellen</v-tab>
      <v-tab :value="1" style="color: blue">Löschen</v-tab>
    </v-tabs>

    <v-window v-model="tab">
      <v-window-item value="0">
        <v-container fluid>
          <v-row>
            <v-col>
              <v-card
                  class="mx-auto pa-5"
                  style="background-color: rgba(255,255,255,0.75)"
              >
                <v-row class="justify-center mt-3">
                  <v-col class="d-flex justify-center" cols="5">
                    <v-text-field v-model="url" label="URL (Slug)" variant="outlined"/>
                  </v-col>
                  <v-col class="d-flex justify-center" cols="5">
                    <v-text-field v-model="title" label="Titel" variant="outlined"/>
                  </v-col>

                  <v-col class="d-flex justify-center" cols="10">
                    <v-card style="width: 100%" variant="outlined">
                      <v-card-item>
                        <v-textarea
                            v-model="content"
                            label="Inhalt (HTML)"
                            no-resize
                            class="content-textarea-small"
                            style="width: 100%"
                        ></v-textarea>
                      </v-card-item>
                    </v-card>
                  </v-col>

                  <v-col class="d-flex justify-center" cols="10">
                    <v-btn color="primary" @click="openPreview">Vorschau in neuem Tab öffnen</v-btn>
                  </v-col>

                  <v-col class="d-flex justify-center" cols="5">
                    <v-btn @click="create">speichern</v-btn>
                  </v-col>
                  <v-col class="d-flex justify-center" cols="5">
                    <v-btn @click="reset">leeren</v-btn>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-window-item>

      <v-window-item value="1">
        <v-row class="justify-center mt-3" style="width: 100%">
          <v-col cols="12">
            <v-data-table-virtual :items="bereinigtesContentArray" fixed-header
                                  height="550" items-per-page="7">
              <template v-slot:item="{ item }">
                <tr>
                  <td>{{ item.id }}</td>
                  <td>{{ item.url }}</td>
                  <td>{{ item.title }}</td>
                  <td>
                    <Icon :icon="item.icon" color="red" style="font-size: 30px" @click="deleteMethod(item)"/>
                  </td>
                </tr>
              </template>
            </v-data-table-virtual>
          </v-col>
        </v-row>
      </v-window-item>
    </v-window>
  </div>
</template>

<script>
import {Icon} from "@iconify/vue";

export default {
  name: 'ContentComponent',
  components: {Icon},
  data() {
    return {
      tab: null,
      url: '',
      title: '',
      content: '',
      contentArray: [],
      showPreview: false
    }
  },
  computed: {
    bereinigtesContentArray() {
      return this.contentArray.map(item => ({
        id: item.id,
        url: item.url,
        title: item.title,
        icon: 'fluent:delete-16-regular'
      }));
    }
  },
  watch: {
    url(newVal) {
      this.url = newVal.toLowerCase().replace(/\s+/g, '-');
    }
  },
  methods: {
    reset() {
      this.url = '';
      this.title = '';
      this.content = '';
    },
    openPreview() {
      if (process.client) {
        localStorage.setItem('contentPreviewHtml', this.content || '');
        localStorage.setItem('contentPreviewTitle', this.title || 'Vorschau');
        window.open('/content-preview', '_blank');
      }
    },
    async create() {
      if (process.client) {
        if (!this.url || !this.title || !this.content) {
          alert('Bitte füllen Sie URL, Titel und Inhalt aus.');
          return;
        }
        try {
          const token = localStorage.getItem('token');
          const body = {
            url: this.url,
            title: this.title,
            content: this.content
          };
          await $fetch('https://tier-gesundheitszentrum.com:8080/auth/page', {
            method: 'POST',
            body,
            headers: {Authorization: `Bearer ${token}`}
          });
          await this.get();
          this.reset();
        } catch (e) {
          alert('Speichern fehlgeschlagen. Bitte überprüfen Sie die Eingaben.');
        }
      }
    },
    async deleteMethod(item) {
      if (process.client) {
        try {
          const token = localStorage.getItem('token');
          await $fetch(`https://tier-gesundheitszentrum.com:8080/auth/page/${item.id}`, {
            method: 'DELETE',
            headers: {Authorization: `Bearer ${token}`}
          });
          await this.get();
        } catch (e) {
          alert('Löschen fehlgeschlagen.');
        }
      }
    },
    async get() {
      if (process.client) {
        try {
          const token = localStorage.getItem('token');
          const response = await $fetch('https://tier-gesundheitszentrum.com:8080/auth/page', {
            headers: {Authorization: `Bearer ${token}`}
          });
          this.contentArray = response.data || response || [];
        } catch (e) {
          console.error('Fehler beim Laden der Inhalte:', e);
        }
      }
    }
  },
  mounted() {
    this.get();
  }
}
</script>

<style scoped>
.v-row {
  width: 100%;
  margin-left: 0;
  margin-right: 0;
}

.content-textarea-small :deep(textarea) {
  font-size: 6px !important;
  line-height: 1.2;
  height: 250px !important;
  max-height: 250px !important;
  min-height: 250px !important;
  overflow-y: auto !important;
  resize: none !important;
}
</style>
