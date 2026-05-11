<template>
  <div>
    <v-tabs
        v-model="tab"
        align-tabs="center"
        class="content-tabs mt-3"
        color="#2f4f3a"
    >
      <v-tab :value="0">Erstellen</v-tab>
      <v-tab :value="1">Löschen</v-tab>
    </v-tabs>

    <v-window v-model="tab">
      <v-window-item value="0">
        <v-container class="content-admin" fluid>
          <v-row justify="center">
            <v-col cols="12" lg="10" xl="9">
              <v-card class="content-card" elevation="0">
                <v-card-text class="pa-0">
                  <v-row class="form-grid" dense>
                    <v-col cols="12" md="5">
                    <v-text-field
                        v-model="url"
                        label="URL (Slug)"
                        placeholder="z.B. ausbildung-tierernaehrung"
                        hint="Wird später als /content/ausbildung-tierernaehrung aufgerufen"
                        persistent-hint
                        density="comfortable"
                        bg-color="white"
                        variant="outlined"
                    />
                  </v-col>
                    <v-col cols="12" md="7">
                    <v-text-field
                        v-model="title"
                        label="Titel"
                        placeholder="z.B. Ausbildung zur Tierernährungsberaterin"
                        hint="Erscheint als Seitentitel und in der Verwaltung"
                        persistent-hint
                        density="comfortable"
                        bg-color="white"
                        variant="outlined"
                    />
                  </v-col>

                    <v-col cols="12">
                      <div class="editor-shell">
                        <v-textarea
                            v-model="content"
                            label="Inhalt (HTML)"
                            placeholder="Hier den vollständigen HTML-Inhalt der Seite einfügen"
                            no-resize
                            class="content-textarea-small"
                            variant="outlined"
                            bg-color="white"
                            hide-details
                        ></v-textarea>
                      </div>
                  </v-col>

                    <v-col cols="12">
                      <div class="action-bar">
                        <v-btn color="#2f4f3a" variant="flat" @click="create">speichern</v-btn>
                        <v-btn variant="tonal" color="#2f4f3a" @click="openPreview">Vorschau öffnen</v-btn>
                        <v-btn variant="text" color="#6b5f55" @click="reset">leeren</v-btn>
                      </div>
                  </v-col>
                </v-row>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-window-item>

      <v-window-item value="1">
        <v-container class="content-admin" fluid>
          <v-row justify="center">
            <v-col cols="12" lg="10" xl="9">
              <v-card class="content-card" elevation="0">
                <v-data-table-virtual
                    :items="bereinigtesContentArray"
                    class="content-table"
                    fixed-header
                    height="550"
                    items-per-page="7"
                >
              <template v-slot:item="{ item }">
                <tr>
                  <td>{{ item.id }}</td>
                  <td>{{ item.url }}</td>
                  <td>{{ item.title }}</td>
                  <td>
                    <div class="row-actions">
                      <Icon
                          class="open-icon"
                          icon="mdi:open-in-new"
                          title="Seite in neuem Tab öffnen"
                          @click="openContentPage(item)"
                      />
                      <Icon
                          class="delete-icon"
                          :icon="item.icon"
                          title="Eintrag löschen"
                          @click="deleteMethod(item)"
                      />
                    </div>
                  </td>
                </tr>
              </template>
            </v-data-table-virtual>
              </v-card>
          </v-col>
        </v-row>
        </v-container>
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
    openContentPage(item) {
      if (process.client && item?.url) {
        window.open(`/content/${item.url}`, '_blank');
      }
    },
    async create() {
      if (process.client) {
        // Leerzeichen → "-" und kleinschreiben
        this.url = (this.url || '').toLowerCase().trim().replace(/\s+/g, '-');

        if (!this.url || !this.title || !this.content) {
          alert('Bitte füllen Sie URL, Titel und Inhalt aus.');
          return;
        }

        // Vor dem Speichern prüfen, ob URL schon existiert
        try {
          const token = localStorage.getItem('token');
          console.log('[ContentComponent] GET /auth/page (URL-Check)');
          const list = await $fetch('https://tier-gesundheitszentrum.com:8080/auth/page', {
            headers: {Authorization: `Bearer ${token}`}
          });
          console.log('[ContentComponent] GET /auth/page (URL-Check) response:', list);
          const arr = Array.isArray(list) ? list : (list?.data || []);
          if (arr.some(e => (e.url || '').toLowerCase() === this.url)) {
            alert(`Die URL "${this.url}" existiert bereits. Bitte eine andere wählen.`);
            return;
          }
        } catch (e) {
          console.error('[ContentComponent] GET /auth/page (URL-Check) error:', e);
          alert('Fehler bei der Prüfung der URL. Bitte erneut versuchen.');
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
          console.log('[ContentComponent] GET /auth/page');
          const response = await $fetch('https://tier-gesundheitszentrum.com:8080/auth/page', {
            headers: {Authorization: `Bearer ${token}`}
          });
          console.log('[ContentComponent] GET /auth/page response:', response);
          this.contentArray = response.data || response || [];
        } catch (e) {
          console.error('[ContentComponent] GET /auth/page error:', e);
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

.content-tabs {
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(47, 79, 58, 0.14);
  border-radius: 8px;
  max-width: 420px;
  margin-left: auto;
  margin-right: auto;
}

.content-admin {
  padding-top: 20px;
}

.content-card {
  background: rgba(255, 255, 255, 0.88);
  border: 1px solid rgba(47, 79, 58, 0.14);
  border-radius: 8px;
  padding: 24px;
}

.form-grid {
  row-gap: 14px;
}

.editor-shell {
  border: 1px solid rgba(47, 79, 58, 0.12);
  border-radius: 8px;
  background: #f8f6f1;
  padding: 12px;
}

.content-textarea-small :deep(textarea) {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
  font-size: 12px !important;
  line-height: 1.45;
  height: 360px !important;
  max-height: 360px !important;
  min-height: 360px !important;
  overflow-y: auto !important;
  resize: none !important;
}

.action-bar {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  flex-wrap: wrap;
  padding-top: 4px;
}

.content-table {
  border-radius: 8px;
  overflow: hidden;
}

.row-actions {
  display: flex;
  align-items: center;
  gap: 14px;
}

.open-icon {
  color: #2f4f3a;
  cursor: pointer;
  font-size: 25px;
  transition: color 0.16s ease, transform 0.16s ease;
}

.open-icon:hover {
  color: #1f3527;
  transform: scale(1.08);
}

.delete-icon {
  color: #b3261e;
  cursor: pointer;
  font-size: 26px;
  transition: color 0.16s ease, transform 0.16s ease;
}

.delete-icon:hover {
  color: #7f1d1d;
  transform: scale(1.08);
}

@media (max-width: 700px) {
  .content-card {
    padding: 16px;
  }

  .action-bar {
    justify-content: stretch;
  }

  .action-bar :deep(.v-btn) {
    flex: 1 1 100%;
  }
}
</style>
