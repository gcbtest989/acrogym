<template>
    <v-app>
        <v-main>
           <slot />
            <whats-app :phone-number="`+phone here`" />
        </v-main>
    </v-app>
</template>


<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "naked"
})
</script>

<style scoped>
/* Placeholder for future styles */
</style>