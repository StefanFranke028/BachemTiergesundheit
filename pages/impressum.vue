<template>
  <div v-if="desktop|| tabletHorizontal" class="pa-16">

  <h1>Impressum</h1>

  <p>Maxi Di Benedetto<br />
    Escortservice  Agentur<br />
    Siemens Stra&szlig;e<br />
    61348 Bad Homburg</p>

  <h2>Kontakt</h2>
  <p>Telefon: +49 151- 670 376 96<br />
    E-Mail: office@maxi-escort.de</p>

  <h2>Umsatzsteuer-ID</h2>
  <p>Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27 a Umsatzsteuergesetz:<br />
    Auf Anfrage</p>

  <h2>Redaktionell verantwortlich</h2>
  <p>Di Benedetto</p>

  <h2>Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle</h2>
  <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>

  <p>Quelle: <a href="https://www.e-recht24.de">https://www.e-recht24.de</a></p>
  </div>
  <div v-if="mobile || tablet">
    Impressum
  </div>
</template>
<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import {useScreenStore} from "~/stores/screen.js";

export default {
  name: "KontaktView",
  components: {FooterComponent, HeaderComponent},
  computed:{
    wide() {
      const screenStore = useScreenStore();
      return screenStore.wide;
    },
    desktop() {
      const screenStore = useScreenStore();
      return screenStore.desktop;
    },
    mobile() {
      const screenStore = useScreenStore();
      return screenStore.mobile;
    },
    tablet() {
      const screenStore = useScreenStore();
      return screenStore.tablet;
    },
    tabletHorizontal() {
      const screenStore = useScreenStore();
      return screenStore.tabletHorizontal;
    },
  },
}
</script>

<style scoped>

</style>
