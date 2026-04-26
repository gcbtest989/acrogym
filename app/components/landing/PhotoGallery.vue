<template>
  <section class="carousel-section">
    <div
      class="carousel-wrap"
      @mouseenter="pauseAutoplay"
      @mouseleave="resumeAutoplay"
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
      @touchend="onTouchEnd"
    >
      <!-- Track -->
      <div class="carousel-track-outer">
        <div
          class="carousel-track"
          :style="trackStyle"
        >
          <div
            class="carousel-slide"
            v-for="(image, index) in images"
            :key="index"
          >
            <img :src="image.src" :alt="image.alt" draggable="false" />
            <div class="slide-caption" v-if="image.caption">
              <span>{{ image.caption }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Prev / Next -->
      <button class="ctrl ctrl--prev" @click="prev" aria-label="Previous slide">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="15 18 9 12 15 6"/>
        </svg>
      </button>
      <button class="ctrl ctrl--next" @click="next" aria-label="Next slide">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="9 18 15 12 9 6"/>
        </svg>
      </button>

      <!-- Counter -->
      <div class="slide-counter">
        <span class="current">{{ String(currentIndex + 1).padStart(2, '0') }}</span>
        <span class="sep">/</span>
        <span class="total">{{ String(images.length).padStart(2, '0') }}</span>
      </div>

      <!-- Progress bar -->
      <!-- <div class="progress-bar" v-if="autoplayEnabled">
        <div class="progress-fill" :style="{ animationDuration: `${autoplayDelay}ms`, animationPlayState: isPaused ? 'paused' : 'running' }" :key="progressKey"></div>
      </div> -->

      <!-- Indicators -->
      <div class="indicators" role="tablist">
        <button
          v-for="(image, index) in images"
          :key="index"
          class="indicator"
          :class="{ active: currentIndex === index }"
          @click="goTo(index)"
          :aria-label="`Go to slide ${index + 1}`"
          role="tab"
          :aria-selected="currentIndex === index"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

interface CarouselImage {
  src: string
  alt: string
  caption?: string
}

// ─── Props ────────────────────────────────────────────────────────────────────
const props = withDefaults(defineProps<{
  images?: CarouselImage[]
  autoplay?: boolean
  delay?: number
}>(), {
  images: () => [
    { src: '/img/gallery/gym1.png', alt: 'Gym slide 1', caption: 'State-of-the-art Equipment' },
    { src: '/img/gallery/gym2.png', alt: 'Gym slide 2', caption: 'Professional Training Space' },
    { src: '/img/gallery/gym3.png', alt: 'Gym slide 3', caption: 'Modern Facilities' },
    { src: '/img/gallery/gym4.png', alt: 'Gym slide 4', caption: 'Expert Coaching' },
    { src: '/img/gallery/gym5.png', alt: 'Gym slide 5', caption: 'Your Fitness Journey Starts Here' },
    { src: '/img/gallery/gym6.png', alt: 'Gym slide 6', caption: 'Your Fitness Journey Starts Here' },
    { src: '/img/gallery/gym7.png', alt: 'Gym slide 7', caption: 'Your Fitness Journey Starts Here' },
  ],
  autoplay: true,
  delay: 4000,
})

// ─── State ────────────────────────────────────────────────────────────────────
const currentIndex = ref(0)
const isAnimating  = ref(false)
const isPaused     = ref(false)
const progressKey  = ref(0)

const autoplayEnabled = computed(() => props.autoplay)
const autoplayDelay   = computed(() => props.delay)

// ─── Track style (translate) ──────────────────────────────────────────────────
const trackStyle = computed(() => ({
  transform: `translateX(-${currentIndex.value * 100}%)`,
  transition: isAnimating.value ? 'transform 0.55s cubic-bezier(0.77, 0, 0.175, 1)' : 'none',
}))

// ─── Navigation ──────────────────────────────────────────────────────────────
function goTo(index: number) {
  if (isAnimating.value || index === currentIndex.value) return
  isAnimating.value = true
  currentIndex.value = index
  progressKey.value++
  setTimeout(() => { isAnimating.value = false }, 600)
}

function prev() {
  goTo(currentIndex.value === 0 ? props.images.length - 1 : currentIndex.value - 1)
}

function next() {
  goTo(currentIndex.value === props.images.length - 1 ? 0 : currentIndex.value + 1)
}

// ─── Keyboard ─────────────────────────────────────────────────────────────────
function onKeyDown(e: KeyboardEvent) {
  if (e.key === 'ArrowLeft')  prev()
  if (e.key === 'ArrowRight') next()
}

// ─── Autoplay ─────────────────────────────────────────────────────────────────
let timer: ReturnType<typeof setInterval> | null = null

function startAutoplay() {
  if (!autoplayEnabled.value) return
  timer = setInterval(() => { if (!isPaused.value) next() }, autoplayDelay.value)
}

function stopAutoplay() {
  if (timer) { clearInterval(timer); timer = null }
}

function pauseAutoplay()  { isPaused.value = true  }
function resumeAutoplay() { isPaused.value = false }

// ─── Touch / swipe ────────────────────────────────────────────────────────────
const touchStartX = ref(0)
const touchDeltaX = ref(0)

function onTouchStart(e: TouchEvent) {
  touchStartX.value = e.touches[0].clientX
  touchDeltaX.value = 0
  pauseAutoplay()
}

function onTouchMove(e: TouchEvent) {
  touchDeltaX.value = e.touches[0].clientX - touchStartX.value
}

function onTouchEnd() {
  if (Math.abs(touchDeltaX.value) > 50) {
    touchDeltaX.value < 0 ? next() : prev()
  }
  resumeAutoplay()
}

// ─── Lifecycle ────────────────────────────────────────────────────────────────
onMounted(() => {
  startAutoplay()
  window.addEventListener('keydown', onKeyDown)
})

onBeforeUnmount(() => {
  stopAutoplay()
  window.removeEventListener('keydown', onKeyDown)
})
</script>

<style scoped lang="scss">
/* ── Design tokens ── */
$accent:       #ff8000;
$accent-dark:  #cc6600;
$ctrl-bg:      rgba(10, 10, 10, 0.55);
$ctrl-hover:   rgba(10, 10, 10, 0.85);
$radius:       20px;
$ctrl-size:    48px;

/* ── Section wrapper ── */
.carousel-section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 1rem 0rem 1rem;
  font-family: 'Segoe UI', system-ui, sans-serif;
}

/* ── Outer wrap ── */
.carousel-wrap {
  position: relative;
  width: 100%;
  max-width: 960px;
  border-radius: $radius;
  overflow: hidden;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.35);
  background: #111;

  /* Aspect ratio: 16/9 default, overrideable */
  aspect-ratio: 16 / 9;

  /* Mobile: taller aspect ratio */
  @media (max-width: 600px) {
    aspect-ratio: 4 / 3;
    border-radius: 12px;
  }
}

/* ── Track ── */
.carousel-track-outer {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.carousel-track {
  display: flex;
  width: 100%;
  height: 100%;
  will-change: transform;
}

/* ── Slide ── */
.carousel-slide {
  flex: 0 0 100%;
  width: 100%;
  height: 100%;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    user-select: none;
    -webkit-user-drag: none;
  }

  /* Caption gradient overlay */
  .slide-caption {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 2.5rem 2rem 3.5rem;
    background: linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 100%);
    pointer-events: none;

    span {
      color: #fff;
      font-size: clamp(0.85rem, 2.5vw, 1.2rem);
      font-weight: 600;
      letter-spacing: 0.04em;
      text-shadow: 0 2px 8px rgba(0,0,0,0.5);
    }

    @media (max-width: 600px) {
      padding: 1.5rem 1rem 3rem;
    }
  }
}

/* ── Controls ── */
.ctrl {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 20;
  width: $ctrl-size;
  height: $ctrl-size;
  border-radius: 50%;
  border: none;
  background: $ctrl-bg;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.25s ease, transform 0.2s ease, scale 0.2s ease;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);

  svg {
    width: 22px;
    height: 22px;
  }

  &:hover {
    background: $ctrl-hover;
    scale: 1.08;
  }

  &:active {
    scale: 0.95;
  }

  &--prev { left: 1rem; }
  &--next { right: 1rem; }

  @media (max-width: 600px) {
    width: 36px;
    height: 36px;

    svg { width: 17px; height: 17px; }

    &--prev { left: 0.6rem; }
    &--next { right: 0.6rem; }
  }
}

/* ── Slide counter ── */
.slide-counter {
  position: absolute;
  top: 1rem;
  right: 1.2rem;
  z-index: 20;
  display: flex;
  align-items: baseline;
  gap: 3px;
  color: rgba(255,255,255,0.9);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-shadow: 0 1px 4px rgba(0,0,0,0.5);

  .current { font-size: 1.05rem; color: #fff; }
  .sep     { color: rgba(255,255,255,0.45); margin: 0 1px; }
  .total   { color: rgba(255,255,255,0.55); }

  @media (max-width: 600px) {
    font-size: 0.7rem;
    top: 0.7rem;
    right: 0.8rem;
    .current { font-size: 0.88rem; }
  }
}

/* ── Progress bar ── */
.progress-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: rgba(255,255,255,0.15);
  z-index: 20;
}

.progress-fill {
  height: 100%;
  background: $accent;
  width: 0%;
  animation: progress linear forwards;
  transform-origin: left center;
}

@keyframes progress {
  from { width: 0% }
  to   { width: 100% }
}

/* ── Indicators ── */
.indicators {
  position: absolute;
  bottom: 1.1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 7px;
  z-index: 20;
}

.indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background: rgba(255,255,255,0.4);
  cursor: pointer;
  padding: 0;
  transition: background 0.3s ease, transform 0.3s ease, width 0.35s ease;

  &.active {
    background: $accent;
    width: 24px;
    border-radius: 4px;
    transform: none;
  }

  &:hover:not(.active) {
    background: rgba(255,255,255,0.75);
    transform: scale(1.2);
  }

  @media (max-width: 600px) {
    width: 6px;
    height: 6px;

    &.active { width: 18px; }
  }
}
</style>