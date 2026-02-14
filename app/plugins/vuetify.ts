import { createVuetify } from 'vuetify'
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import {defineNuxtPlugin} from "#app";

const light = {
    dark: false,
    colors: {
        background: '#F9F9F9',
        surface: '#FFFFFF',
        primary: 'rgb(134, 97, 239)', //'#7e57c2',
        'primary-darken-1': '#4137AF', //'#7e57c2',
        secondary: '#EC407A',
        'secondary-darken-1': '#018786',
        error: '#B00020',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
        'primary-purple': '#A287EC',
        'secondary-gray': '#A3A7B1'
    },
    tooltip: '#FFFFFF'
}
const dark = {
    dark: true,
    colors: {
        primary: '#9575CD', //'#7e57c2',
        'primary-darken-1': '#6563DD', //'#7e57c2',
        secondary: '#F06292',
        'secondary-darken-1': '#018786',
        'primary-purple': '#A287EC',
        'secondary-gray': '#919191'
    },
    tooltip: '#000000'
}


export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        ssr: true,
        components,
        directives,
        theme: {
            defaultTheme: 'dark',
            themes: {
                light,
                dark
            }
        }
    })

    nuxtApp.vueApp.use(vuetify)
})