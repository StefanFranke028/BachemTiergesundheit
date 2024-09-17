// In deinem Pinia Store, füge die logout Methode hinzu:
import { defineStore } from 'pinia';

export const useScreenStore = defineStore('screen', {
    state: () => ({
        wide: false,
        desktop: false,
        mobile: false,
        tablet: false,
        tabletHorizontal: false
    }),
    actions: {
        setWide(wide) {
            this.wide = wide;
        },
        setDesktop(desktop) {
            this.desktop = desktop;
        },
        setMobile(mobile) {
            this.mobile = mobile;
        },
        setTablet(tablet) {
            this.tablet = tablet;
        },
        setTabletHorizontal(tabletHorizontal) {
            this.tabletHorizontal = tabletHorizontal;
        },

    }
});
