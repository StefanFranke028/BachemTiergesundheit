<template>
  <div class="newsletter-embed">
    <div ref="container" class="_form_2"></div>
  </div>
</template>

<script>
const EMBED_SRC = 'https://andreabachem83.activehosted.com/f/embed.php?id=2';

export default {
  name: "NewsletterEmbedComponent",
  data() {
    return {
      script: null,
    };
  },
  // mounted läuft nur im Browser – der Container existiert dann, das Embed-Script
  // kann ihn also finden und befüllen.
  mounted() {
    const container = this.$refs.container;
    if (!container || container.childElementCount) return;

    const script = document.createElement('script');
    script.src = EMBED_SRC;
    script.charset = 'utf-8';
    script.async = true;
    container.after(script);
    this.script = script;

    // Das Formular wird erst spaeter von ActiveCampaign eingefuegt.
    // submit-Events blubbern, deshalb reicht ein Listener am Wrapper.
    this.$el.addEventListener('submit', this.onSubmit);
  },
  beforeUnmount() {
    if (this.script) this.script.remove();
    this.$el.removeEventListener('submit', this.onSubmit);
  },
  methods: {
    onSubmit(event) {
      const email = event.target.querySelector('input[name="email"]');
      // Bei leerem Pflichtfeld bricht ActiveCampaign selbst ab – dann kein Event.
      if (email && !email.value.trim()) return;
      trackMetaEvent('Subscribe');
    },
  },
}
</script>

<style scoped>
/* Heller Untergrund, damit das von ActiveCampaign injizierte Formular
   auf dem dunklen Dialog-Hintergrund lesbar bleibt. */
.newsletter-embed {
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 6px;
  padding: 4px 12px;
  overflow: hidden;
  /* 10 % kleiner. transform statt font-size, weil ActiveCampaign eigene
     px-Styles injiziert, die auf Vererbung nicht reagieren. */
  transform: scale(0.9);
  transform-origin: center center;
}
.newsletter-embed :deep(._form_2),
.newsletter-embed :deep(form) {
  max-width: 100% !important;
  margin: 0 !important;
}
.newsletter-embed :deep(input),
.newsletter-embed :deep(select),
.newsletter-embed :deep(textarea) {
  max-width: 100%;
  box-sizing: border-box;
}
</style>
