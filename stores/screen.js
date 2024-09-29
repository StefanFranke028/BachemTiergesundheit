// stores/screen.js
import {defineStore} from 'pinia';

export const useScreenStore = defineStore('screen', {
    state: () => ({
        wide: false,
        desktop: true, // Standardmäßig auf true setzen
        tabletHorizontal: false,
        tablet: false,
        mobile: false,
    }),
    actions: {
        initializeScreen() {
            if (process.client) {
                this.updateScreenSize();
                window.addEventListener('resize', this.updateScreenSize);
            }
        },
        updateScreenSize() {
            this.wide = window.innerWidth >= 2800;
            this.desktop = window.innerWidth <= 2600 && window.innerWidth >= 1400;
            this.tabletHorizontal = window.innerWidth <= 1400 && window.innerWidth >= 1000;
            this.tablet = window.innerWidth <= 1000 && window.innerWidth >= 750;
            this.mobile = window.innerWidth <= 750;
        },
    },
});
