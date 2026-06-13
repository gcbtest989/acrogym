<template>
    <div v-if="visible" class="acro-cookie" role="dialog" aria-label="Cookie notice">
        <p class="acro-cookie__text">
            We use cookies to analyze site traffic and improve your experience.
        </p>
        <div class="acro-cookie__actions">
            <button type="button" class="acro-cookie__btn acro-cookie__btn--ghost" @click="decline">Decline</button>
            <button type="button" class="acro-cookie__btn acro-cookie__btn--primary" @click="accept">Accept</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

/* Analytics is on by default; Decline opts the visitor out of GA (also honored
   on future visits by app/plugins/gtag.client.ts, which skips GA when denied). */
const GTAG_ID = 'G-PMEXF9N7SS'
const CONSENT_KEY = 'acro_cookie_consent'

const visible = ref(false)

function remember(value: 'granted' | 'denied'): void {
    try { localStorage.setItem(CONSENT_KEY, value) } catch { /* private mode */ }
}

function accept(): void {
    remember('granted')
    visible.value = false
}

function decline(): void {
    remember('denied')
    /* stop GA for the rest of this session immediately */
    try { (window as unknown as Record<string, boolean>)['ga-disable-' + GTAG_ID] = true } catch { /* noop */ }
    visible.value = false
}

onMounted(() => {
    try {
        if (!localStorage.getItem(CONSENT_KEY)) visible.value = true
    } catch {
        visible.value = true
    }
})
</script>

<style scoped>
.acro-cookie {
    position: fixed;
    left: 16px;
    right: 16px;
    bottom: 16px;
    z-index: 9000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
    max-width: 720px;
    margin: 0 auto;
    padding: 16px 20px;
    border-radius: 16px;
    background: rgba(26, 35, 86, 0.97);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 16px 40px rgba(13, 18, 48, 0.45);
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    font-family: "Montserrat", system-ui, -apple-system, sans-serif;
    animation: acro-cookie-in 0.4s ease;
}
@keyframes acro-cookie-in {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
}
.acro-cookie__text {
    margin: 0;
    font-size: 13.5px;
    font-weight: 400;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.85);
}
.acro-cookie__actions {
    display: flex;
    gap: 10px;
    flex-shrink: 0;
}
.acro-cookie__btn {
    padding: 10px 20px;
    border-radius: 10px;
    font-family: inherit;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.02em;
    cursor: pointer;
    transition: background 0.18s ease, border-color 0.18s ease, transform 0.18s ease;
}
.acro-cookie__btn--primary {
    border: none;
    background: #F37021;
    color: #FFFFFF;
}
.acro-cookie__btn--primary:hover {
    background: #FF7E2E;
    transform: translateY(-1px);
}
.acro-cookie__btn--ghost {
    border: 1px solid rgba(255, 255, 255, 0.25);
    background: transparent;
    color: rgba(255, 255, 255, 0.85);
}
.acro-cookie__btn--ghost:hover {
    border-color: rgba(255, 255, 255, 0.5);
    background: rgba(255, 255, 255, 0.06);
}
@media (prefers-reduced-motion: reduce) {
    .acro-cookie { animation: none; }
}
@media (max-width: 560px) {
    .acro-cookie {
        flex-direction: column;
        align-items: stretch;
        gap: 12px;
        padding: 16px;
    }
    .acro-cookie__actions { justify-content: flex-end; }
}
</style>
