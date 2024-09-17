// In deinem Pinia Store, füge die logout Methode hinzu:
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
    state: () => ({
        user: false,
    }),
    actions: {
        setUser(user) {
            this.user = user;
        },
        clearUser() {
            this.user = false;
        },
        logout() {
            localStorage.removeItem('token');
            this.clearUser();
            navigateTo('/');
        }
    }
});
