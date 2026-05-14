<template>
  <div>
    <v-tabs
        v-model="tab"
        align-tabs="center"
        class="content-tabs mt-3"
        color="#2f4f3a"
    >
      <v-tab :value="0">Erstellen</v-tab>
      <v-tab :value="1">Löschen/Bearbeiten</v-tab>
    </v-tabs>

    <v-window v-model="tab">
      <v-window-item value="0">
        <v-container class="content-admin content-create-admin" fluid>
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
                        <v-btn
                            :disabled="isSavingContent"
                            :loading="isSavingContent"
                            color="#2f4f3a"
                            variant="flat"
                            @click="create"
                        >
                          {{ editingContentId ? 'aktualisieren' : 'speichern' }}
                        </v-btn>
                        <v-btn variant="tonal" color="#2f4f3a" @click="openPreview">Vorschau öffnen</v-btn>
                        <v-btn variant="text" color="#6b5f55" @click="reset">
                          {{ editingContentId ? 'abbrechen' : 'leeren' }}
                        </v-btn>
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
              <v-card class="content-card content-list-card" elevation="0">
                <v-data-table-virtual
                    :headers="contentHeaders"
                    :items="bereinigtesContentArray"
                    class="content-table"
                    fixed-header
                    height="calc(100vh - 440px)"
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
                          class="edit-icon"
                          icon="mdi:pencil-outline"
                          title="Eintrag bearbeiten"
                          @click="startEdit(item)"
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
      editingContentId: null,
      isSavingContent: false,
      showPreview: false,
      contentHeaders: [
        { title: 'ID', key: 'id' },
        { title: 'URL', key: 'url' },
        { title: 'Titel', key: 'title' },
        { title: 'Aktionen', key: 'actions', sortable: false },
      ]
    }
  },
  computed: {
    bereinigtesContentArray() {
      return this.contentArray.map(item => ({
        id: item.id,
        url: item.url,
        title: item.title,
        content: item.content,
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
      this.editingContentId = null;
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
    startEdit(item) {
      this.editingContentId = item.id;
      this.url = item.url || '';
      this.title = item.title || '';
      this.content = item.content || '';
      this.tab = 0;
    },
    async create() {
      if (process.client) {
        // Leerzeichen → "-" und kleinschreiben
        this.url = (this.url || '').toLowerCase().trim().replace(/\s+/g, '-');

        if (!this.url || !this.title || !this.content) {
          alert('Bitte füllen Sie URL, Titel und Inhalt aus.');
          return;
        }

        this.isSavingContent = true;

        try {
          // Vor dem Speichern prüfen, ob URL schon existiert
          try {
            const token = localStorage.getItem('token');
            console.log('[ContentComponent] GET /auth/page (URL-Check)');
            const list = await $fetch('https://tier-gesundheitszentrum.com:8080/auth/page', {
              headers: {Authorization: `Bearer ${token}`}
            });
            console.log('[ContentComponent] GET /auth/page (URL-Check) response:', list);
            const arr = Array.isArray(list) ? list : (list?.data || []);
            if (arr.some(e => (e.url || '').toLowerCase() === this.url && e.id !== this.editingContentId)) {
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
            const endpoint = this.editingContentId
                ? `https://tier-gesundheitszentrum.com:8080/auth/page/${this.editingContentId}`
                : 'https://tier-gesundheitszentrum.com:8080/auth/page';
            await $fetch(endpoint, {
              method: this.editingContentId ? 'PUT' : 'POST',
              body,
              headers: {Authorization: `Bearer ${token}`}
            });
            await this.get();
            this.reset();
          } catch (e) {
            alert('Speichern fehlgeschlagen. Bitte überprüfen Sie die Eingaben.');
          }
        } finally {
          this.isSavingContent = false;
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
  width: fit-content;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 6px;
  height: auto !important;
}

.content-tabs :deep(.v-slide-group__content) {
  gap: 4px;
}

.content-tabs :deep(.v-tab) {
  min-width: 96px;
  min-height: 40px !important;
  padding: 0 18px !important;
  border-radius: 5px !important;
  color: #4a3728 !important;
}

.content-tabs :deep(.v-tab--selected) {
  background: #4a6741 !important;
  color: #fffdf9 !important;
}

.content-tabs :deep(.v-tab__slider),
.content-tabs :deep(.v-btn__overlay) {
  display: none !important;
}

.content-admin {
  padding-top: 20px;
}

.content-create-admin {
  overflow: visible;
  padding-bottom: 96px;
}

.content-card {
  background: rgba(255, 255, 255, 0.88);
  border: 1px solid rgba(47, 79, 58, 0.14);
  border-radius: 8px;
  padding: 24px;
}

.content-list-card {
  max-height: calc(100vh - 280px);
  overflow: hidden;
  padding-bottom: 34px;
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
  height: clamp(180px, 32vh, 320px) !important;
  max-height: clamp(180px, 32vh, 320px) !important;
  min-height: 180px !important;
  overflow-y: auto !important;
  resize: none !important;
}

.action-bar {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  flex-wrap: wrap;
  padding: 8px 0 2px;
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

.edit-icon {
  color: #4a6741;
  cursor: pointer;
  font-size: 25px;
  transition: color 0.16s ease, transform 0.16s ease;
}

.edit-icon:hover {
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
  .content-create-admin {
    padding-bottom: 120px;
  }

  .content-list-card {
    max-height: calc(100vh - 220px);
    padding-bottom: 28px;
  }

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
