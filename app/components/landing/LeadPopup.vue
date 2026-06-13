<template>
    <div class="acro-lead-form" :class="{ 'is-open': isOpen }" @click.self="closePopup">
        <div class="acro-lead-form__card" role="dialog" aria-modal="true" aria-label="AcroGym trial class form">
            <button class="acro-lead-form__close" type="button" aria-label="Close" @click="closePopup">&times;</button>

            <template v-if="!submitted">
                <img class="acro-lead-form__logo" src="/img/acro-logo-simple-light.png" alt="AcroGym">

                <div class="acro-lead-form__badge">
                    <span class="acro-lead-form__badge-dot"></span>
                    Opening September 2026 &middot; The Pearl, Doha
                </div>

                <h3 class="acro-lead-form__title">Book Your First <span class="acro-lead-form__title-accent">Trial Class</span></h3>
                <p class="acro-lead-form__subtitle">Flips, cartwheels and confidence &mdash; leave your number and we&rsquo;ll find the perfect time for your child&rsquo;s first visit.</p>

                <ul class="acro-lead-form__benefits">
                    <li class="acro-lead-form__benefit"><span class="acro-lead-form__benefit-check">&#10003;</span>Ages 3&ndash;14</li>
                    <li class="acro-lead-form__benefit"><span class="acro-lead-form__benefit-check">&#10003;</span>Pro coaches</li>
                    <li class="acro-lead-form__benefit"><span class="acro-lead-form__benefit-check">&#10003;</span>Safety first</li>
                </ul>

                <form class="acro-lead-form__form" @submit.prevent="submitLead">
                    <div class="acro-lead-form__field">
                        <label class="acro-lead-form__label" for="acro-lead-name">Parent&rsquo;s name *</label>
                        <input v-model="name" class="acro-lead-form__input" id="acro-lead-name" type="text"
                            required maxlength="120" autocomplete="name" placeholder="Your name">
                    </div>
                    <div class="acro-lead-form__field">
                        <label class="acro-lead-form__label" for="acro-lead-phone">Phone *</label>
                        <input v-model="phone" class="acro-lead-form__input" id="acro-lead-phone" type="tel"
                            required autocomplete="tel" inputmode="tel" placeholder="+974 5000 9999">
                    </div>
                    <div class="acro-lead-form__field">
                        <label class="acro-lead-form__label" for="acro-lead-age">Child&rsquo;s age</label>
                        <input v-model="childAge" class="acro-lead-form__input" id="acro-lead-age" type="text"
                            maxlength="20" inputmode="numeric" placeholder="e.g. 6">
                    </div>

                    <button class="acro-lead-form__button" type="submit" :disabled="sending">
                        {{ sending ? 'Sending…' : 'Book My Spot' }}
                    </button>
                    <p class="acro-lead-form__status" aria-live="polite">{{ statusMessage }}</p>
                    <p class="acro-lead-form__note">Takes 10 seconds &mdash; we&rsquo;ll call you back to arrange a time.</p>
                </form>
            </template>

            <div v-else class="acro-lead-form__success">
                <div class="acro-lead-form__success-icon">&#10003;</div>
                <p class="acro-lead-form__success-title">Thank you, we&rsquo;ll be in touch soon!</p>
                <p class="acro-lead-form__success-text">We&rsquo;ll call you back shortly to arrange your child&rsquo;s first visit.</p>
                <button class="acro-lead-form__success-close" type="button" @click="closePopup">Close</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

/*
  Lead popup → n8n lead pipe. Contract: AcroGym-Agents/docs/website-form-integration.md
  The token lives client-side on purpose: the site has no backend, this is the
  documented "conscious decision" agreed with the owner (token is rotatable).
*/
const WEBHOOK_TOKEN = 'f938126f225cfb338e4c098ce90d7165fd4e150ebc4084c38295d214923abd85'
const ENDPOINT = 'https://hook.acrogym.org/webhook/acrogym-lead'
const STORAGE_KEY = 'acro_lead_form_seen'
const SHOW_DELAY_MS = 1500

/*
  Lead attribution. The webhook defaults a missing/empty source to "website_form",
  so the regular form must NOT send one. Visitors arriving via a marketing link
  (e.g. /book → ?utm_source=instagram) are tagged with the matching value.
  Only known values are forwarded — exact lowercase spelling matters (see the
  attribution table in docs/website-form-integration.md). Add new channels here.
*/
const KNOWN_SOURCES = ['instagram']

const isOpen = ref(false)
const sending = ref(false)
const submitted = ref(false)
const statusMessage = ref('')
const name = ref('')
const phone = ref('')
const childAge = ref('')

let savedBodyOverflow = ''
let forceShow = false
let autoTimer: ReturnType<typeof setTimeout> | undefined
let leadSource = '' /* '' → website_form; set from utm_source when it's a known channel */

/* localStorage can be unavailable (private mode) — then the popup simply shows on every visit */
function alreadySeen(): boolean {
    try { return localStorage.getItem(STORAGE_KEY) === '1' } catch { return false }
}
function rememberSeen(): void {
    try { localStorage.setItem(STORAGE_KEY, '1') } catch { /* noop */ }
}

function openPopup(): void {
    if (isOpen.value) return
    savedBodyOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    isOpen.value = true
    if (!forceShow) rememberSeen()
}

function closePopup(): void {
    if (!isOpen.value) return
    isOpen.value = false
    document.body.style.overflow = savedBodyOverflow
}

function onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') closePopup()
}

/* any CTA on the page can open the form:
   window.dispatchEvent(new CustomEvent('acro:open-lead-form')) */
function onOpenRequest(): void {
    if (autoTimer) clearTimeout(autoTimer)
    openPopup()
}

onMounted(() => {
    const params = new URLSearchParams(window.location.search)

    /* attribution: forward utm_source only when it's a channel we know about */
    const utm = (params.get('utm_source') || '').trim().toLowerCase()
    if (KNOWN_SOURCES.includes(utm)) leadSource = utm

    /* QA override: ?acroform=show forces the popup and does not touch the first-visit flag */
    forceShow = params.get('acroform') === 'show'
    if (forceShow) {
        autoTimer = setTimeout(openPopup, 300)
    } else if (!alreadySeen()) {
        autoTimer = setTimeout(openPopup, SHOW_DELAY_MS)
    }
    document.addEventListener('keydown', onKeydown)
    window.addEventListener('acro:open-lead-form', onOpenRequest)
})

onBeforeUnmount(() => {
    if (autoTimer) clearTimeout(autoTimer)
    document.removeEventListener('keydown', onKeydown)
    window.removeEventListener('acro:open-lead-form', onOpenRequest)
    if (isOpen.value) document.body.style.overflow = savedBodyOverflow
})

async function submitLead(): Promise<void> {
    const n = name.value.trim()
    const p = phone.value.trim()
    const a = childAge.value.trim()

    if (!n || !p) {
        statusMessage.value = 'Please fill in your name and phone.'
        return
    }

    const payload: Record<string, string> = { name: n, phone: p }
    if (a) payload.child_age = a
    if (leadSource) payload.source = leadSource

    sending.value = true /* no double-submits */
    statusMessage.value = ''

    try {
        const response = await fetch(ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-webhook-token': WEBHOOK_TOKEN
            },
            body: JSON.stringify(payload)
        })
        if (response.ok) {
            submitted.value = true
            /* gentle auto-close; visitor can also close via the button or the X */
            autoTimer = setTimeout(closePopup, 5000)
        } else {
            statusMessage.value = 'Something went wrong, please try again.'
        }
    } catch {
        statusMessage.value = 'Something went wrong, please try again.'
    } finally {
        sending.value = false
    }
}
</script>

<style scoped>
.acro-lead-form {
    position: fixed;
    inset: 0;
    z-index: 99999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    box-sizing: border-box;
    font-family: "Montserrat", system-ui, -apple-system, sans-serif;
    background: rgba(13, 18, 48, 0.66);
    -webkit-backdrop-filter: blur(6px);
    backdrop-filter: blur(6px);
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition: opacity 0.3s ease, visibility 0.3s ease;
}
.acro-lead-form.is-open {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
}
.acro-lead-form *,
.acro-lead-form *::before,
.acro-lead-form *::after {
    box-sizing: border-box;
}
.acro-lead-form__card {
    position: relative;
    overflow: hidden;
    width: 100%;
    max-width: 460px;
    max-height: 92vh;
    overflow-y: auto;
    padding: 40px 36px 36px;
    border-radius: 24px;
    background: linear-gradient(160deg, #28347F 0%, #1A2356 100%);
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 24px 60px rgba(26, 35, 86, 0.55);
    transform: translateY(16px) scale(0.97);
    transition: transform 0.35s cubic-bezier(0.22, 0.9, 0.3, 1);
}
.acro-lead-form.is-open .acro-lead-form__card {
    transform: translateY(0) scale(1);
}
/* premium glow accents, slow drift */
.acro-lead-form__card::before {
    content: "";
    position: absolute;
    top: -120px;
    right: -120px;
    width: 280px;
    height: 280px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(243, 112, 33, 0.35) 0%, rgba(243, 112, 33, 0) 70%);
    pointer-events: none;
    animation: acro-lead-drift 10s ease-in-out infinite alternate;
}
.acro-lead-form__card::after {
    content: "";
    position: absolute;
    bottom: -140px;
    left: -140px;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(90, 107, 196, 0.28) 0%, rgba(90, 107, 196, 0) 70%);
    pointer-events: none;
}
@keyframes acro-lead-drift {
    from { transform: translate(0, 0) scale(1); }
    to { transform: translate(-22px, 16px) scale(1.07); }
}
.acro-lead-form__close {
    position: absolute;
    top: 14px;
    right: 14px;
    z-index: 1;
    width: 36px;
    height: 36px;
    padding: 0;
    border: none;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.12);
    color: rgba(255, 255, 255, 0.85);
    font-size: 20px;
    font-weight: 400;
    line-height: 36px;
    text-align: center;
    cursor: pointer;
    transition: background 0.18s ease, color 0.18s ease, transform 0.18s ease;
}
.acro-lead-form__close:hover {
    background: #F37021;
    color: #FFFFFF;
    transform: rotate(90deg);
}
.acro-lead-form__logo {
    display: block;
    height: 64px;
    width: auto;
    margin: 0 0 24px;
}
.acro-lead-form__title {
    margin: 0 0 8px;
    font-size: 27px;
    font-weight: 800;
    line-height: 1.15;
    color: #FFFFFF;
    letter-spacing: 0.01em;
}
.acro-lead-form__title-accent {
    color: #F37021;
}
.acro-lead-form__subtitle {
    margin: 0 0 18px;
    font-size: 15px;
    font-weight: 400;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.75);
}
.acro-lead-form__badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin: 0 0 14px;
    padding: 7px 14px;
    border-radius: 999px;
    border: 1px solid rgba(243, 112, 33, 0.4);
    background: rgba(243, 112, 33, 0.14);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #FFC59E;
}
.acro-lead-form__badge-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #F37021;
    animation: acro-lead-pulse 2s ease-out infinite;
}
@keyframes acro-lead-pulse {
    0% { box-shadow: 0 0 0 0 rgba(243, 112, 33, 0.6); }
    70% { box-shadow: 0 0 0 8px rgba(243, 112, 33, 0); }
    100% { box-shadow: 0 0 0 0 rgba(243, 112, 33, 0); }
}
.acro-lead-form__benefits {
    display: flex;
    flex-wrap: wrap;
    gap: 8px 18px;
    margin: 0 0 24px;
    padding: 0;
    list-style: none;
}
.acro-lead-form__benefit {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    font-size: 13px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.85);
}
.acro-lead-form__benefit-check {
    color: #F37021;
    font-weight: 800;
    font-size: 13px;
}
.acro-lead-form__field {
    margin: 0 0 16px;
}
.acro-lead-form__label {
    display: block;
    margin: 0 0 7px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.85);
}
.acro-lead-form__input {
    display: block;
    width: 100%;
    padding: 13px 16px;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    background: rgba(255, 255, 255, 0.07);
    font-family: inherit;
    font-size: 15px;
    font-weight: 400;
    color: #FFFFFF;
    outline: none;
    transition: border-color 0.18s ease, box-shadow 0.18s ease;
}
.acro-lead-form__input::placeholder {
    color: rgba(255, 255, 255, 0.4);
}
.acro-lead-form__input:focus {
    border-color: #F37021;
    box-shadow: 0 0 0 3px rgba(243, 112, 33, 0.25);
}
.acro-lead-form__button {
    display: block;
    width: 100%;
    margin: 24px 0 0;
    padding: 15px 16px;
    border: none;
    border-radius: 12px;
    background: #F37021;
    font-family: inherit;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    cursor: pointer;
    transition: background 0.18s ease, transform 0.18s ease, box-shadow 0.18s ease;
    animation: acro-lead-cta 3s ease-in-out infinite; /* gentle pull */
}
.acro-lead-form__button:hover:not(:disabled) {
    background: #FF7E2E;
    transform: translateY(-1px);
    box-shadow: 0 10px 24px rgba(243, 112, 33, 0.4);
    animation: none;
}
.acro-lead-form__button:active:not(:disabled) {
    transform: translateY(0);
}
.acro-lead-form__button:disabled {
    opacity: 0.65;
    cursor: default;
    animation: none;
}
@keyframes acro-lead-cta {
    0%, 100% { box-shadow: 0 6px 18px rgba(243, 112, 33, 0.22); }
    50% { box-shadow: 0 10px 30px rgba(243, 112, 33, 0.5); }
}
.acro-lead-form__status {
    min-height: 20px;
    margin: 12px 0 0;
    font-size: 13.5px;
    font-weight: 400;
    line-height: 1.45;
    color: #FFB199; /* error tone on dark */
}
.acro-lead-form__note {
    margin: 10px 0 0;
    font-size: 12.5px;
    font-weight: 400;
    line-height: 1.45;
    text-align: center;
    color: rgba(255, 255, 255, 0.55);
}
.acro-lead-form__success {
    text-align: center;
    padding: 16px 0 8px;
}
.acro-lead-form__success-icon {
    width: 64px;
    height: 64px;
    margin: 0 auto 20px;
    border-radius: 50%;
    background: #F37021;
    color: #FFFFFF;
    font-size: 30px;
    font-weight: 800;
    line-height: 64px;
    box-shadow: 0 10px 28px rgba(243, 112, 33, 0.45);
}
.acro-lead-form__success-title {
    margin: 0;
    font-size: 21px;
    font-weight: 800;
    line-height: 1.35;
    color: #FFFFFF;
}
.acro-lead-form__success-text {
    margin: 10px 0 0;
    font-size: 14.5px;
    font-weight: 400;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.7);
}
.acro-lead-form__success-close {
    display: inline-block;
    margin: 26px auto 0;
    padding: 12px 32px;
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.08);
    font-family: inherit;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    cursor: pointer;
    transition: background 0.18s ease, border-color 0.18s ease;
}
.acro-lead-form__success-close:hover {
    background: rgba(255, 255, 255, 0.14);
    border-color: rgba(255, 255, 255, 0.45);
}
@media (prefers-reduced-motion: reduce) {
    .acro-lead-form__card::before,
    .acro-lead-form__badge-dot,
    .acro-lead-form__button {
        animation: none;
    }
}
@media (max-width: 480px) {
    .acro-lead-form { padding: 14px; }
    .acro-lead-form__card { padding: 34px 22px 28px; border-radius: 20px; }
    .acro-lead-form__title { font-size: 23px; }
}
</style>
