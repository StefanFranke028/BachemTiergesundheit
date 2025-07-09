<template>
  <div class="  mx-auto text-black background" style="overflow-y: scroll">
      <HeaderComponent v-if="desktop || tabletHorizontal"></HeaderComponent>
      <HeadermobileComponent v-if="mobile"></HeadermobileComponent>
    <div class="pa-10" style="width: 60%;">
      <h1 class="text-3xl mt-8 font-bold mb-6">Über mich und meine Qualifikationen</h1>

      <p class="mb-4">
        Mein Name ist <strong>Andrea Bachem</strong>, ich bin staatlich geprüfte Tierarzthelferin mit einer tiefen Leidenschaft für Tiere, die mich schon seit meiner Kindheit begleitet.
      </p>

      <p class="mb-4">
        Durch zahlreiche Aus- und Weiterbildungen habe ich mich auf die Gesundheit und das Wohlbefinden von Tieren spezialisiert, insbesondere von Hunden, Pferden und Katzen. Ich arbeite ganzheitlich und individuell mit Fokus auf manuelle Therapie und Ernährungsberatung.
      </p>

      <h2 class="text-2xl font-semibold mt-8 mb-4">Meine Qualifikationen</h2>
      <ul class="list-disc pl-6 space-y-2">
        <li><strong>Tierphysiotherapie (FAT):</strong> Bewegungstherapie und Rehabilitation für Hunde, Pferde und Katzen.</li>
        <li><strong>Tierosteopathie:</strong> Ausbildung bei Welter-Böhmer und Betina Oberstassen. Ganzheitliche Therapie zur Lösung von Blockaden.</li>
        <li><strong>Manuelle Therapie & Neurodynamik:</strong> Ausbildung bei Sabine Harrer zur Schmerzlinderung und Funktionsverbesserung des Bewegungsapparates.</li>
        <li><strong>Akupunktur im Bewegungsapparat:</strong> Spezialisierung zur Durchblutungsförderung und Schmerzreduktion.</li>
        <li><strong>Dorntherapie & Chiropraktik:</strong> Ausbildung bei Susanne Schmitt (Dorn) und ATM (Chiropraktik) für Wirbelsäulenbehandlungen.</li>
      </ul>

      <h2 class="text-2xl font-semibold mt-8 mb-4">Weitere Qualifikationen & Seminare</h2>
      <ul class="list-disc pl-6 space-y-2">
        <li>Röntgendiagnostik und rassetypische Erkrankungen</li>
        <li>Faszienakupunktur und Stresspunkttherapie</li>
        <li>Orthopädischer Untersuchungsgang, Sportphysiotherapie</li>
        <li>Faszientherapie (Angelina Spix), Dry Needling (DIPO)</li>
        <li>Ernährungsberatung für Hunde und Pferde</li>
      </ul>

      <h2 class="text-2xl font-semibold mt-8 mb-4">Dozentin & Schulungen</h2>
      <p class="mb-4">
        Als Dozentin biete ich praxisnahe Schulungen an für Tierbesitzer, Therapeuten und Interessierte. Inhalte sind unter anderem:
      </p>
      <ul class="list-disc pl-6 space-y-2">
        <li>Dorntherapie am Pferd</li>
        <li>Kinesiologie-Taping für Pferd und Hund</li>
        <li>Biomechanik, Massage und Bewegungstherapie beim Pferd</li>
      </ul>

      <p class="mt-6">
        Ich bilde mich stetig weiter, um Tierhaltern und ihren Tieren die bestmögliche, individuelle Betreuung zu bieten.
        <strong>Das Tierwohl steht bei mir immer an erster Stelle.</strong>
      </p>

      <p class="mt-6 font-semibold">Eure Andrea Bachem</p>
    </div>

  </div>
</template>

<script setup>
useHead({
  title: 'Andrea Bachem – Tierphysiotherapie, Osteopathie & Ernährungsberatung',
  meta: [
    {
      name: 'description',
      content: 'Andrea Bachem – Staatlich geprüfte Tierarzthelferin mit Spezialisierung auf Tierphysiotherapie, Osteopathie, manuelle Therapie, Akupunktur und Ernährungsberatung für Hunde, Pferde und Katzen.'
    },
    {
      name: 'keywords',
      content: 'Tierphysiotherapie, Tierosteopathie, Dorntherapie, Akupunktur, manuelle Therapie, Hunde, Pferde, Katzen, Andrea Bachem, Tiertherapie, Tiergesundheit, Bewegungstherapie, Tierdozentin'
    },
    {
      name: 'author',
      content: 'Andrea Bachem'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://www.deine-domain.de/ueber-mich'
    }
  ]
});
</script>

<script>
import {useScreenStore} from "~/stores/screen.js";

export default {
  name: 'ueberuns',
  computed: {
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
};
</script>
<style scoped>
.line {
  font-family: "Dancing Script", cursive;
  color: rgba(255, 255, 255, 0.86);
}
a {
  text-decoration: none;
  color: inherit
}
p{
  color: rgba(255, 255, 255, 0.86);

}

.background {
  background-image: url("@/assets/black.webp");
  background-size: cover;
  position: fixed;
  height: 100vh;
  width: 100vw;
}
a {
  text-decoration: none;
  cursor: pointer;
}
h2{
  color: rgba(255, 255, 255, 0.86);
}
h3{
  color: rgba(255, 255, 255, 0.86);
}
p {
  color: rgba(255, 255, 255, 0.86);
}
h1 {
  color: rgba(255, 255, 255, 0.86);
}
ul{
  color: rgba(255, 255, 255, 0.86);
}
</style>
