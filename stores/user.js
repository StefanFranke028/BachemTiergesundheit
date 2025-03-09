// In deinem Pinia Store, füge die logout Methode hinzu:
import {defineStore} from 'pinia';

export const useUserStore = defineStore('user', {
    state: () => ({
        user: null,
        dame: null,
    }),
    actions: {
        setUser(user) {
            this.user = user;
        },
        setDame(dame) {
            this.dame = dame;
        },
        clearUser() {
            this.user = false;
        },
        logout() {
            localStorage.removeItem('token');
            this.clearUser();
        }
    }
});
