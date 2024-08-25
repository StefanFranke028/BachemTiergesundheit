<template>
    <div  class="pa-5 mt-16 px-16" style="background-color: #ffffff; min-height: 100vh ">
      <v-row>
        <v-col cols="12">

          <div class="col-xs-12 col-lg-9">

            <h4>Impressum</h4>
            <br>
            <p>

              Name <br>
              streaße<br>
              plz Ort<br>
              <a href="mailto:email">
                email
              </a><br><br>
              <br><br>
              Die aufgeführten Inhalte werden mit großer Sorgfalt zusammengestellt und geprüft. Die Redaktion
              übernimmt aber keine Gewähr für die Vollständigkeit, Richtigkeit, Aktualität oder Qualität der <br>
              Dokumente. Links zu Webseiten Dritter auf die direkt oder indirekt verwiesen wird, werden als
              Serviceleistung angeboten. Für die Inhalte, zu denen verlinkt wird, sind die Anbieter der jeweiligen
              <br>
              Webseiten selbst verantwortlich. Die Redaktion hat keinen Einfluss auf Inhalt oder Gestaltung der
              verlinkten Seiten. Sie übernimmt für Inhalt und Gestaltung dieser Seiten keine Haftung. Alle Angaben
              <br>
              können ohne vorherige Ankündigung verändert, ergänzt, gelöscht oder eingestellt werden. Alle genannten
              Namen, Bezeichnungen oder Logos sind eingetragene Warenzeichen und Eigentum der jeweiligen
              Rechteinhaber.<br><br>
            </p>
            <br>
            <h4>Haftungsausschuss</h4>
            <p>
              Bei direkten oder indirekten Verweisen auf fremde Internetseiten ("Links"), die außerhalb des Verantwortungsbereiches dieses Internetpotals liegen,  würde eine Haftungsverpflichtung ausschließlich in dem Fall in Kraft treten, in dem die Verantwortlichen dieses Internetportales von den Inhalten Kenntnis haben und es ihnen technisch möglich und zumutbar wäre, die Nutzung im Falle rechtswidriger Inhalte zu verhindern.
              Die Verantwortlichen dieses Internetsportals erklären daher ausdrücklich, dass zum Zeitpunkt der Linksetzung die entsprechenden verlinkten Seiten frei von illegalen Inhalten waren. Die Verantwortlichen dieses Internetsportals haben keinerlei Einfluss auf die aktuelle und zukünftige Gestaltung und auf die Inhalte der gelinkten und/oder verknüpften Seiten. Deshalb distanzieren sich die Verantwortlichen dieses Internetsportals hiermit ausdrücklich von allen Inhalten aller gelinkten und/oder verknüpften Seiten, die nach der Linksetzung verändert wurden.
              Für illegale, fehlerhafte oder unvollständige Inhalte und insbesondere für Schäden, die aus der Nutzung oder Nichtnutzung solcherart dargebotener Informationen entstehen, haftet allein der Anbieter der Seite, auf welche verwiesen wurde, nicht aber derjenige, der über Links auf die jeweilige Veröffentlichung lediglich verweist.
            </p>
            <br>
            <h4>Copyright</h4>
            <p>
              Sämtliche Texte, Bilder und andere auf dem Internetportal der Bürgergemeinschaft Bad Sassendorf veröffentlichten Werke unterliegen - sofern nicht anders gekennzeichnet - dem Schutz des Urheberrechts und anderen Schutzgesetzen. Jede Vervielfältigung, Verbreitung, Speicherung, Übermittlung, Sendung und Wieder- bzw. Weitergabe der Inhalte ist ohne schriftliche Genehmigung der Bürgergemeinschaft Bad Sassendorf ausdrücklich untersagt!              </p>



          </div>
        </v-col>
      </v-row>
    </div>

</template>
<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "KontaktView",
  components: {FooterComponent, HeaderComponent}
}
</script>

<style scoped>

</style>
