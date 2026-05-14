<template>
  <footer class="site-footer">
    <div class="site-footer-inner">
      <!-- Hauptbereich -->
      <div class="footer-grid">
        <!-- Brand -->
        <div class="footer-col footer-brand">
          <NuxtLink to="/" title="Zur Startseite">
            <img src="~/assets/logo-weiß.png" alt="Tiergesundheitszentrum Andrea Bachem" class="footer-logo"/>
          </NuxtLink>
          <p class="footer-claim">
            Ganzheitliche Tiergesundheit mit Herz und Verstand –
            Chiropraktik, Osteopathie und Naturheilkunde für Hund und Pferd.
          </p>
          <div class="footer-social">
            <a href="https://www.youtube.com/results?search_query=andrea+bachem"
               title="Andrea Bachem auf YouTube"
               target="_blank" rel="noopener" aria-label="YouTube"
               class="footer-social-link footer-social-yt">
              <Icon icon="grommet-icons:youtube"/>
            </a>
            <a href="https://www.instagram.com/andreabachem?igsh=MTIxZTJxZHRvd2wxeg=="
               title="Andrea Bachem auf Instagram"
               target="_blank" rel="noopener" aria-label="Instagram"
               class="footer-social-link footer-social-ig">
              <Icon icon="skill-icons:instagram"/>
            </a>
          </div>
        </div>

        <!-- Navigation -->
        <div class="footer-col">
          <h4 class="footer-heading">Leistungen</h4>
          <ul class="footer-list">
            <li><NuxtLink to="/chiropraktik" title="Tierchiropraktik">Chiropraktik</NuxtLink></li>
            <li><NuxtLink to="/osteopathie" title="Tierosteopathie">Osteopathie</NuxtLink></li>
            <li><NuxtLink to="/service" title="Service & Seminare">Seminare</NuxtLink></li>
            <li><NuxtLink to="/produkte" title="Tierprodukte">Produkte</NuxtLink></li>
            <li><NuxtLink to="/preise" title="Preise & Leistungen">Preise</NuxtLink></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4 class="footer-heading">Mehr</h4>
          <ul class="footer-list">
            <li><NuxtLink to="/ueberuns" title="Über mich">Über uns</NuxtLink></li>
            <li><NuxtLink to="/berichte" title="Praxisberichte">Berichte</NuxtLink></li>
            <li><NuxtLink to="/podcast" title="Podcast">Podcast</NuxtLink></li>
            <li><NuxtLink to="/werbepartner" title="Werbepartner">Werbepartner</NuxtLink></li>
            <li>
              <a href="https://fastglobeit.de/blog/tiere"
                 title="Blogbeiträge zu Tierhaltung und Ernährung"
                 target="_blank" rel="noopener">
                Blogbeiträge
              </a>
            </li>
          </ul>
        </div>

        <!-- Standorte -->
        <div class="footer-col">
          <h4 class="footer-heading">Standorte</h4>
          <ul class="footer-list footer-list-compact">
            <li v-for="city in cityLinks" :key="city.to">
              <NuxtLink :to="city.to" :title="`Tiergesundheit ${city.label}`">
                {{ city.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Kontakt -->
        <div class="footer-col footer-contact">
          <h4 class="footer-heading">Kontakt</h4>
          <ul class="footer-list footer-list--icons">
            <li>
              <Icon icon="solar:phone-broken" class="footer-icon"/>
              <a href="tel:01786915915" title="Anrufen">01786915915</a>
            </li>
            <li>
              <Icon icon="ic:outline-mail" class="footer-icon"/>
              <a href="mailto:andreabachem83@gmail.com" title="E-Mail">
                andreabachem83@gmail.com
              </a>
            </li>
            <li>
              <Icon icon="ic:outline-place" class="footer-icon"/>
              <a href="https://www.google.de/maps/dir//Peter-May-Stra%C3%9Fe+47,+50374+Erftstadt/@50.8280411,6.7633927,13z"
                 title="Anfahrt"
                 target="_blank" rel="noopener">
                Peter-May-Straße 47<br>50374 Köttingen
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="footer-bottom">
        <div class="footer-legal">
          <NuxtLink to="/impressum" title="Impressum">Impressum</NuxtLink>
          <span class="footer-sep">·</span>
          <NuxtLink to="/datenschutz" title="Datenschutz">Datenschutz</NuxtLink>
          <span class="footer-sep">·</span>
          <NuxtLink to="/admin" rel="nofollow" title="Verwaltung">Verwaltung</NuxtLink>
        </div>
        <div class="footer-copy">
          © {{ currentYear }} Tiergesundheitszentrum Andrea Bachem
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { Icon } from '@iconify/vue';

export default {
  name: 'FooterComponent',
  components: { Icon },
  data() {
    return {
      cityLinks: [
        { label: 'Bonn', to: '/tiergesundheit-bonn' },
        { label: 'Köln', to: '/tiergesundheit-koeln' },
        { label: 'Erftstadt', to: '/tiergesundheit-erftstadt' },
        { label: 'Liblar', to: '/tiergesundheit-liblar' },
        { label: 'Lechenich', to: '/tiergesundheit-lechenich' },
        { label: 'Kierdorf', to: '/tiergesundheit-kierdorf' },
        { label: 'Köttingen', to: '/tiergesundheit-koettingen' },
        { label: 'Gymnich', to: '/tiergesundheit-gymnich' },
        { label: 'Bliesheim', to: '/tiergesundheit-bliesheim' },
        { label: 'Friesheim', to: '/tiergesundheit-friesheim' },
      ],
    };
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style scoped>
.site-footer {
  background: linear-gradient(180deg, #0a0a0a 0%, #050505 100%);
  border-top: 3px solid rgb(0, 130, 194);
  color: #d8d8d8;
  font-family: "Montserrat", sans-serif;
  width: 100%;
  margin-top: 60px;
}
.site-footer-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 56px 32px 24px;
}

/* GRID */
.footer-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1fr 1.2fr;
  gap: 40px;
  margin-bottom: 40px;
}

.footer-col {}

.footer-brand .footer-logo {
  height: 64px;
  width: auto;
  margin-bottom: 14px;
  display: block;
}
.footer-claim {
  font-size: 0.9rem;
  line-height: 1.65;
  color: #b4b4b4;
  margin: 0 0 18px;
  max-width: 280px;
}
.footer-social {
  display: flex;
  gap: 14px;
}
.footer-social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.12);
  font-size: 22px;
  transition: transform 0.15s, background 0.15s, border-color 0.15s;
}
.footer-social-link:hover {
  transform: translateY(-2px);
  border-color: rgb(0, 130, 194);
  background: rgba(0, 130, 194, 0.15);
}
.footer-social-yt { color: #ff3333; }
.footer-social-ig { color: #fff; }

/* HEADINGS */
.footer-heading {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgb(0, 130, 194);
  margin: 0 0 16px;
}

/* LIST */
.footer-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.footer-list a {
  color: #cfcfcf;
  text-decoration: none;
  font-size: 0.92rem;
  transition: color 0.15s;
  display: inline-block;
}
.footer-list a:hover {
  color: rgb(0, 130, 194);
}

.footer-list-compact {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px 16px;
}
.footer-list-compact a {
  font-size: 0.86rem;
}

.footer-list--icons li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  line-height: 1.5;
}
.footer-list--icons a {
  font-size: 0.9rem;
  color: #cfcfcf;
  flex: 1;
}
.footer-icon {
  font-size: 18px;
  color: rgb(0, 130, 194);
  flex-shrink: 0;
  margin-top: 2px;
}

/* BOTTOM */
.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 14px;
  font-size: 0.82rem;
  color: #888;
}
.footer-legal {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;
}
.footer-legal a {
  color: #b0b0b0;
  text-decoration: none;
  transition: color 0.15s;
}
.footer-legal a:hover {
  color: rgb(0, 130, 194);
}
.footer-sep {
  margin: 0 8px;
  color: #555;
}
.footer-copy {
  color: #888;
}

/* RESPONSIVE */
@media (max-width: 1100px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }
}
@media (max-width: 640px) {
  .site-footer-inner { padding: 40px 20px 20px; }
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 32px;
    margin-bottom: 30px;
  }
  .footer-claim { max-width: 100%; }
  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
  .footer-list-compact {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
