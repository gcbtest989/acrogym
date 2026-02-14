import { defineStore } from 'pinia'

export const mainStore = defineStore('main', {
    state: () => {
        return {
            darkTheme: false,
            acceptedCookies: false
        }
    },
    persist: true,

    actions: {
        setDarkTheme(isDark: boolean): void {
            this.darkTheme = isDark
        },
    },

    getters: {
        isDarkTheme(state): boolean {
            return state.darkTheme
        }
    }
})