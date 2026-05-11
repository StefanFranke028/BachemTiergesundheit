<template>
  <ClientOnly>
    <div>
      <div v-if="html" v-html="html"/>
      <div v-else style="padding: 40px; text-align: center;">
        <p>Keine Vorschau verfügbar. Bitte zurück zur Verwaltung und erneut öffnen.</p>
        <p style="color: red">DEBUG: html.length = {{ debugLen }}</p>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const html = ref('');
const debugLen = ref(-1);

onMounted(() => {
  const val = localStorage.getItem('contentPreviewHtml') || '';
  debugLen.value = val.length;
  html.value = val;
  const t = localStorage.getItem('contentPreviewTitle') || 'Vorschau';
  document.title = t;
  console.log('[content-preview] loaded, length:', val.length);
});
</script>
