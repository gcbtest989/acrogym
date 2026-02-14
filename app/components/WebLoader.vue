<template>
    <div id="custom-loader">
        <div class="loader-content">
            <img src="/img/tckr_logo.png" alt="Acrogym FZCO" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "WebLoader"
})
</script>

<style scoped>
#custom-loader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #0a0a0a; /* Match $bg-dark */
    z-index: 9999;
}

.loader-content img {
    opacity: 0.9;
    width: 250px;
    height: auto;
    animation: pulse 2s infinite ease-in-out;
}

@keyframes pulse {
    0% { transform: scale(0.95); opacity: 0.7; }
    50% { transform: scale(1.05); opacity: 1; }
    100% { transform: scale(0.95); opacity: 0.7; }
}
</style>
