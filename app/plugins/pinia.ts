import {createPersistedState} from 'pinia-plugin-persistedstate'
import { defineNuxtPlugin, useCookie } from '#app'

export default defineNuxtPlugin(nuxtApp => {
  // @ts-ignore
  nuxtApp.$pinia.use(createPersistedState(useCookie))
})

// import {createPersistedState} from 'pinia-plugin-persistedstate'
// import { defineNuxtPlugin } from '#app'
//
// export default defineNuxtPlugin(nuxtApp => {
//   nuxtApp.$pinia.use(createPersistedState({
//     storage: localStorage,
//   }))
// })