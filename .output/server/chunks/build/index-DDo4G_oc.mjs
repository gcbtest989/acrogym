import { defineComponent, ref, mergeProps, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderList } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as _export_sfc } from './server.mjs';
import { u as useHead } from './composables-BPO5kG__.mjs';
import 'vue-bundle-renderer/runtime';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'pinia';
import 'vue-router';
import 'pinia-plugin-persistedstate';

const _sfc_main$a = defineComponent({
  name: "HeroSection"
});
const _imports_0$3 = publicAssetsURL("/img/header.png");
const _imports_1$1 = publicAssetsURL("/video/header_video.mp4");
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "hero",
    id: "home"
  }, _attrs))} data-v-3c5025c8><div class="hero-bg" data-v-3c5025c8><video autoplay muted loop playsinline${ssrRenderAttr("poster", _imports_0$3)} data-v-3c5025c8><source${ssrRenderAttr("src", _imports_1$1)} type="video/mp4" data-v-3c5025c8></video><div class="overlay" data-v-3c5025c8></div></div><div class="hero-content container" data-v-3c5025c8><div class="text-wrapper" data-v-3c5025c8><h1 class="slogan" data-v-3c5025c8><span class="acro" data-v-3c5025c8>Acro</span><span class="gym" data-v-3c5025c8>GYM</span></h1><div class="logo-wrapper" data-v-3c5025c8><h2 class="brand-name" data-v-3c5025c8>Developmental Gymnastics &amp; Professional Acrobatics</h2></div><div class="cta-group" data-v-3c5025c8><a href="https://docs.google.com/forms/d/e/1FAIpQLSe23_qFm0_6JOlsg9SSbCHhRGeOHAyjadBtclmwoUnSG4kWyw/viewform" target="_blank" class="btn btn-primary" data-v-3c5025c8> Try Now </a><a href="#programs" class="btn btn-secondary" data-v-3c5025c8> Explore Our Programs </a></div></div></div><div class="scroll-indicator" data-v-3c5025c8><div class="mouse" data-v-3c5025c8><div class="wheel" data-v-3c5025c8></div></div></div></section>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/Hero.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$8], ["__scopeId", "data-v-3c5025c8"]]), { __name: "LandingHero" });
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "PhotoGallery",
  __ssrInlineRender: true,
  props: {
    images: { default: () => [
      { src: "/img/gallery/gym1.png", alt: "Gym slide 1", caption: "State-of-the-art Equipment" },
      { src: "/img/gallery/gym2.png", alt: "Gym slide 2", caption: "Professional Training Space" },
      { src: "/img/gallery/gym3.png", alt: "Gym slide 3", caption: "Modern Facilities" },
      { src: "/img/gallery/gym4.png", alt: "Gym slide 4", caption: "Expert Coaching" },
      { src: "/img/gallery/gym5.png", alt: "Gym slide 5", caption: "Your Fitness Journey Starts Here" },
      { src: "/img/gallery/gym6.png", alt: "Gym slide 6", caption: "Your Fitness Journey Starts Here" },
      { src: "/img/gallery/gym7.png", alt: "Gym slide 7", caption: "Your Fitness Journey Starts Here" }
    ] },
    autoplay: { type: Boolean, default: true },
    delay: { default: 4e3 }
  },
  setup(__props) {
    const props = __props;
    const currentIndex = ref(0);
    const isAnimating = ref(false);
    ref(false);
    ref(0);
    computed(() => props.autoplay);
    computed(() => props.delay);
    const trackStyle = computed(() => ({
      transform: `translateX(-${currentIndex.value * 100}%)`,
      transition: isAnimating.value ? "transform 0.55s cubic-bezier(0.77, 0, 0.175, 1)" : "none"
    }));
    ref(0);
    ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "carousel-section" }, _attrs))} data-v-f5dbc08b><div class="carousel-wrap" data-v-f5dbc08b><div class="carousel-track-outer" data-v-f5dbc08b><div class="carousel-track" style="${ssrRenderStyle(trackStyle.value)}" data-v-f5dbc08b><!--[-->`);
      ssrRenderList(__props.images, (image, index2) => {
        _push(`<div class="carousel-slide" data-v-f5dbc08b><img${ssrRenderAttr("src", image.src)}${ssrRenderAttr("alt", image.alt)} draggable="false" data-v-f5dbc08b>`);
        if (image.caption) {
          _push(`<div class="slide-caption" data-v-f5dbc08b><span data-v-f5dbc08b>${ssrInterpolate(image.caption)}</span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div><button class="ctrl ctrl--prev" aria-label="Previous slide" data-v-f5dbc08b><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-v-f5dbc08b><polyline points="15 18 9 12 15 6" data-v-f5dbc08b></polyline></svg></button><button class="ctrl ctrl--next" aria-label="Next slide" data-v-f5dbc08b><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-v-f5dbc08b><polyline points="9 18 15 12 9 6" data-v-f5dbc08b></polyline></svg></button><div class="slide-counter" data-v-f5dbc08b><span class="current" data-v-f5dbc08b>${ssrInterpolate(String(currentIndex.value + 1).padStart(2, "0"))}</span><span class="sep" data-v-f5dbc08b>/</span><span class="total" data-v-f5dbc08b>${ssrInterpolate(String(__props.images.length).padStart(2, "0"))}</span></div><div class="indicators" role="tablist" data-v-f5dbc08b><!--[-->`);
      ssrRenderList(__props.images, (image, index2) => {
        _push(`<button class="${ssrRenderClass([{ active: currentIndex.value === index2 }, "indicator"])}"${ssrRenderAttr("aria-label", `Go to slide ${index2 + 1}`)} role="tab"${ssrRenderAttr("aria-selected", currentIndex.value === index2)} data-v-f5dbc08b></button>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/PhotoGallery.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$9, [["__scopeId", "data-v-f5dbc08b"]]), { __name: "LandingPhotoGallery" });
const _sfc_main$8 = defineComponent({
  name: "MeetCoach"
});
const _imports_0$2 = publicAssetsURL("/img/coach.jpeg");
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "coach",
    id: "coach"
  }, _attrs))} data-v-1ec68046><div class="grid-overlay" data-v-1ec68046></div><div class="container" data-v-1ec68046><div class="coach-content" data-v-1ec68046><div class="header-block" data-v-1ec68046><span class="eyebrow" data-v-1ec68046>Meet The Coach</span><h2 class="title" data-v-1ec68046>A Champion On The Floor. A Mentor At Heart.</h2><div class="accent-line" data-v-1ec68046></div></div><div class="coach-grid" data-v-1ec68046><div class="image-side" data-v-1ec68046><div class="image-card" data-v-1ec68046><img${ssrRenderAttr("src", _imports_0$2)} alt="Coach Kristina" class="coach-photo" data-v-1ec68046></div></div><div class="text-side" data-v-1ec68046><p class="main-text" data-v-1ec68046> Kristina is a <span class="highlight" data-v-1ec68046>Master of Sports of Russia</span> in Sports Acrobatics and a <span class="highlight" data-v-1ec68046>Gold and Silver Medalist of the European Championships</span>. With over 10 years of experience, she has a gift no medal can show: finding the right approach for every child. </p><div class="achievements-grid" data-v-1ec68046><div class="achievement-card" data-v-1ec68046><i class="mdi mdi-star-circle" style="${ssrRenderStyle({ "font-size": "1.6rem" })}" data-v-1ec68046></i> 5-Time Russian Champion and winner of International Competitions </div><div class="achievement-card" data-v-1ec68046><i class="mdi mdi-star-circle" style="${ssrRenderStyle({ "font-size": "1.6rem" })}" data-v-1ec68046></i> Higher Sports Education and professional coaching </div><div class="achievement-card" data-v-1ec68046><i class="mdi mdi-star-circle" style="${ssrRenderStyle({ "font-size": "1.6rem" })}" data-v-1ec68046></i> Awarded the Order of Valor (3rd Degree) for outstanding achievements </div></div><div class="quote-block" data-v-1ec68046><p data-v-1ec68046> &quot;At AcroGym, we don&#39;t teach through pressure. We build a love for movement, not a fear of mistakes.&quot; </p><span class="quote-author" data-v-1ec68046>— Kristina</span></div></div></div></div></div></section>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/MeetCoach.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$7], ["__scopeId", "data-v-1ec68046"]]), { __name: "LandingMeetCoach" });
const _sfc_main$7 = defineComponent({
  name: "WhyChooseGym",
  setup() {
    const benefits = [
      {
        title: "Coordination",
        description: "Improves balance, body control, and overall movement",
        icon: "mdi-run-fast"
      },
      {
        title: "Strength",
        description: "Builds strong muscles and endurance",
        icon: "mdi-arm-flex"
      },
      {
        title: "Flexibility",
        description: "Increases joint mobility and prevents muscle stiffness",
        icon: "mdi-human-handsup"
      },
      {
        title: "Posture",
        description: "Promotes proper alignment",
        icon: "mdi-human-male"
      },
      {
        title: "Balance",
        description: "Teaches body awareness, safe landing, and positioning",
        icon: "mdi-scale-balance"
      },
      {
        title: "Confidence",
        description: "Mastering new skills builds courage and motivation",
        icon: "mdi-medal-outline"
      },
      {
        title: "Discipline",
        description: "Encourages focus, listening, and structured learning",
        icon: "mdi-brain"
      },
      {
        title: "Foundation",
        description: "Supports performance in dance, acrobatics, sports, and more",
        icon: "mdi-gymnastics"
      }
    ];
    return { benefits };
  }
});
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "why-choose-gym",
    id: "benefits"
  }, _attrs))} data-v-db1955ff><div class="container" data-v-db1955ff><div class="section-header" data-v-db1955ff><span class="eyebrow" data-v-db1955ff>Benefits</span><h2 class="title" data-v-db1955ff>Why Choose Developmental Gymnastics?</h2><div class="accent-line" data-v-db1955ff></div><p class="subtitle" data-v-db1955ff> Our programs are designed to unlock your child&#39;s full potential in a safe, comfortable environment. Developmental gymnastics supports a child&#39;s overall physical and personal growth. </p></div><div class="benefits-grid" data-v-db1955ff><!--[-->`);
  ssrRenderList(_ctx.benefits, (benefit, index2) => {
    _push(`<div class="benefit-card" data-v-db1955ff><div class="icon-wrapper" data-v-db1955ff><i class="${ssrRenderClass(["mdi", benefit.icon])}" data-v-db1955ff></i></div><h3 class="benefit-title" data-v-db1955ff>${ssrInterpolate(benefit.title)}</h3><p class="benefit-description" data-v-db1955ff>${ssrInterpolate(benefit.description)}</p></div>`);
  });
  _push(`<!--]--></div></div></section>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/WhyChooseGym.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$6], ["__scopeId", "data-v-db1955ff"]]), { __name: "LandingWhyChooseGym" });
const _sfc_main$6 = defineComponent({
  name: "TrainingPrograms",
  setup() {
    const programs = [
      {
        title: "Developmental Gymnastics",
        description: "Focused on overall physical development. Children improve coordination, flexibility, strength, balance, posture, and confidence.",
        icon: "mdi-human-handsup",
        tag: "All levels"
      },
      {
        title: "Professional Acrobatics Training",
        description: "Designed for children who want to train more seriously and prepare for performances and competitions. These sessions focus on advanced elements, technique, and structured progression.",
        icon: "mdi-medal-outline",
        tag: "All levels"
      },
      {
        title: "Individual Training",
        description: "One-on-one sessions with the coach. Ideal for faster progress, refining technique, preparing for competitions, or focusing on specific skills.",
        icon: "mdi-account-star-outline",
        tag: "All levels"
      }
    ];
    return { programs };
  }
});
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "training-programs",
    id: "programs"
  }, _attrs))} data-v-1a0770bf><div class="grid-overlay" data-v-1a0770bf></div><div class="container" data-v-1a0770bf><div class="section-header" data-v-1a0770bf><span class="eyebrow" data-v-1a0770bf>Our Training Programs</span><h2 class="title" data-v-1a0770bf>The Right Path For Every Child</h2><div class="accent-line" data-v-1a0770bf></div><p class="subtitle" data-v-1a0770bf> We offer several training formats tailored to each child&#39;s age and level. The most suitable format is selected based on each child&#39;s needs and goals. </p></div><div class="programs-list" data-v-1a0770bf><!--[-->`);
  ssrRenderList(_ctx.programs, (program, index2) => {
    _push(`<div class="program-row" data-v-1a0770bf><div class="program-number" data-v-1a0770bf>${ssrInterpolate(String(index2 + 1).padStart(2, "0"))}</div><div class="program-content" data-v-1a0770bf><div class="program-header" data-v-1a0770bf><i class="${ssrRenderClass(["mdi", program.icon])}" data-v-1a0770bf></i><h3 class="program-title" data-v-1a0770bf>${ssrInterpolate(program.title)}</h3></div><p class="program-description" data-v-1a0770bf>${ssrInterpolate(program.description)}</p></div><div class="program-tag" data-v-1a0770bf>${ssrInterpolate(program.tag)}</div></div>`);
  });
  _push(`<!--]--></div></div></section>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/Programs.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-1a0770bf"]]), { __name: "LandingPrograms" });
const _sfc_main$5 = defineComponent({
  name: "ParentsTrust",
  setup() {
    const reasons = [
      { title: "Professional coaches", image: "Coaches.png" },
      { title: "Small group sizes", image: "small group sizes.png" },
      { title: "Fully equipped facility", image: "fully equipped facility.png" },
      { title: "Variety of training options", image: "variety of training.png" },
      { title: "Safe and supported environment", image: "safe and supported environment.png" },
      { title: "Years of experience", image: "years of experience.png" }
    ];
    return { reasons };
  }
});
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "parents-trust",
    id: "trust"
  }, _attrs))} data-v-65c40327><div class="grid-overlay" data-v-65c40327></div><div class="container" data-v-65c40327><div class="trust-content" data-v-65c40327><div class="header-block" data-v-65c40327><span class="eyebrow" data-v-65c40327>Why Parents Trust Us</span><h2 class="title" data-v-65c40327>Building Confidence, Strength &amp; Joy</h2><div class="accent-line" data-v-65c40327></div></div><div class="trust-cards" data-v-65c40327><!--[-->`);
  ssrRenderList(_ctx.reasons, (reason, index2) => {
    _push(`<div class="trust-card" data-v-65c40327><div class="card-bg" style="${ssrRenderStyle({ backgroundImage: `url('/img/${reason.image}')` })}" data-v-65c40327></div><div class="card-overlay" data-v-65c40327></div><div class="card-inner" data-v-65c40327><h2 class="card-title" data-v-65c40327>${ssrInterpolate(reason.title.toUpperCase())}</h2></div></div>`);
  });
  _push(`<!--]--></div></div></div></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/ParentsTrust.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-65c40327"]]), { __name: "LandingParentsTrust" });
const _sfc_main$4 = defineComponent({
  name: "Competitions",
  setup() {
    const stats = [
      { value: "2–3×", label: "Per year" },
      { value: "100%", label: "Internal & supportive" }
    ];
    const highlights = [
      { icon: "mdi-trophy-outline", text: "Motivates children to set and reach new goals" },
      { icon: "mdi-shield-star-outline", text: "Builds confidence in a safe, familiar environment" },
      { icon: "mdi-chart-line", text: "A clear way to track each child's personal progress" }
    ];
    return { stats, highlights };
  }
});
const _imports_0$1 = publicAssetsURL("/img/comp-main.jpeg");
const _imports_1 = publicAssetsURL("/img/comp-sub1.png");
const _imports_2 = publicAssetsURL("/img/comp-sub2.png");
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "competitions",
    id: "competitions"
  }, _attrs))} data-v-4123eadd><div class="container" data-v-4123eadd><div class="section-header" data-v-4123eadd><span class="eyebrow" data-v-4123eadd>Competitions</span><h2 class="title" data-v-4123eadd>Compete In A Healthy Environment</h2><div class="accent-line" data-v-4123eadd></div></div><div class="competitions-body" data-v-4123eadd><div class="photo-grid" data-v-4123eadd><div class="photo-slot main" data-v-4123eadd><img${ssrRenderAttr("src", _imports_0$1)} class="img" data-v-4123eadd></div><div class="photo-slot" data-v-4123eadd><img${ssrRenderAttr("src", _imports_1)} class="img" data-v-4123eadd></div><div class="photo-slot" data-v-4123eadd><img${ssrRenderAttr("src", _imports_2)} class="img" data-v-4123eadd></div></div><div class="content-side" data-v-4123eadd><p class="description" data-v-4123eadd> We host internal club competitions 2–3 times per year to motivate children, build confidence, and track their progress in a supportive environment. </p><div class="stats" data-v-4123eadd><!--[-->`);
  ssrRenderList(_ctx.stats, (stat, index2) => {
    _push(`<div class="stat-item" data-v-4123eadd><span class="stat-value" data-v-4123eadd>${ssrInterpolate(stat.value)}</span><span class="stat-label" data-v-4123eadd>${ssrInterpolate(stat.label)}</span></div>`);
  });
  _push(`<!--]--></div><div class="highlights" data-v-4123eadd><!--[-->`);
  ssrRenderList(_ctx.highlights, (highlight, index2) => {
    _push(`<div class="highlight-row" data-v-4123eadd><i class="${ssrRenderClass(["mdi", highlight.icon])}" data-v-4123eadd></i><span data-v-4123eadd>${ssrInterpolate(highlight.text)}</span></div>`);
  });
  _push(`<!--]--></div></div></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/Competitions.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-4123eadd"]]), { __name: "LandingCompetitions" });
const _sfc_main$3 = defineComponent({
  name: "OurBrandSpace",
  setup() {
    const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.915546653628!2d51.54074527622613!3d25.333417983898084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c4f87654321%3A0xabcdef1234567890!2s66%20Lusail%20Expy%2C%20Doha!5e0!3m2!1sen!2sqa!4v1700000000000!5m2!1sen!2sqa";
    return { mapSrc };
  }
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "our-brand-space",
    id: "space"
  }, _attrs))} data-v-02b517ea><div class="container" data-v-02b517ea><div class="section-header" data-v-02b517ea><span class="eyebrow" data-v-02b517ea>Find us</span><h2 class="title" data-v-02b517ea>Our Training Space</h2><div class="accent-line" data-v-02b517ea></div><div class="section-header" data-v-02b517ea><p data-v-02b517ea>A modern training facility designed to support high-quality <br data-v-02b517ea>development, where children feel confident and inspired to grow.</p><br data-v-02b517ea><p style="${ssrRenderStyle({ "font-weight": "600" })}" data-v-02b517ea>📍 Lusail Expy, Lagoona Mall, 1st Floor </p></div></div></div><div class="map-wrapper" data-v-02b517ea><iframe class="map-embed"${ssrRenderAttr("src", _ctx.mapSrc)} loading="lazy" referrerpolicy="no-referrer-when-downgrade" data-v-02b517ea></iframe></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/OurBrandSpace.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-02b517ea"]]), { __name: "LandingOurBrandSpace" });
const _sfc_main$2 = {
  props: {
    message: {
      type: String,
      default: "Hello Acrogym! I have a question."
    }
  },
  computed: {
    whatsappLink() {
      const encodedMessage = encodeURIComponent(this.message);
      return `https://wa.me/+97470859382?text=${encodedMessage}`;
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "contact-us",
    id: "contact"
  }, _attrs))} data-v-f5e1a3c8><div class="container" data-v-f5e1a3c8><div class="section-header" data-v-f5e1a3c8><span class="eyebrow" data-v-f5e1a3c8>Contact</span><h2 class="title" data-v-f5e1a3c8>Get in Touch</h2><div class="accent-line" data-v-f5e1a3c8></div><p class="subtitle" data-v-f5e1a3c8>We&#39;d love to hear from you</p></div><div class="contact-grid" data-v-f5e1a3c8><a href="mailto:info@acrogym.org" class="contact-card" data-v-f5e1a3c8><div class="contact-icon" data-v-f5e1a3c8><i class="mdi mdi-email-outline" data-v-f5e1a3c8></i></div><div class="contact-info" data-v-f5e1a3c8><span class="contact-label" data-v-f5e1a3c8>Email</span><span class="contact-value" data-v-f5e1a3c8>info@acrogym.org</span></div></a><a href="tel:+97470859382" class="contact-card" data-v-f5e1a3c8><div class="contact-icon" data-v-f5e1a3c8><i class="mdi mdi-phone-outline" data-v-f5e1a3c8></i></div><div class="contact-info" data-v-f5e1a3c8><span class="contact-label" data-v-f5e1a3c8>Phone</span><span class="contact-value" data-v-f5e1a3c8>+974 7085 9382</span></div></a></div><div class="socials-label" data-v-f5e1a3c8>Our social platforms</div><div class="socials" data-v-f5e1a3c8><a${ssrRenderAttr("href", $options.whatsappLink)} target="_blank" class="social-btn whatsapp" aria-label="WhatsApp" data-v-f5e1a3c8><svg viewBox="0 0 24 24" fill="currentColor" data-v-f5e1a3c8><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" data-v-f5e1a3c8></path></svg><span data-v-f5e1a3c8>WhatsApp</span></a><a href="https://www.instagram.com/acrogymqatar/" target="_blank" class="social-btn instagram" aria-label="Instagram" data-v-f5e1a3c8><svg viewBox="0 0 24 24" fill="currentColor" data-v-f5e1a3c8><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" data-v-f5e1a3c8></path></svg><span data-v-f5e1a3c8>Instagram</span></a><a href="https://www.tiktok.com/@acrogymqatar" target="_blank" class="social-btn tiktok" aria-label="TikTok" data-v-f5e1a3c8><svg viewBox="0 0 24 24" fill="currentColor" data-v-f5e1a3c8><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" data-v-f5e1a3c8></path></svg><span data-v-f5e1a3c8>TikTok</span></a></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/Contact.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-f5e1a3c8"]]), { __name: "LandingContact" });
const _sfc_main$1 = defineComponent({
  name: "ReadyToStart"
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "ready-to-start",
    id: "ready"
  }, _attrs))} data-v-48737ef8><div class="container" data-v-48737ef8><h2 class="headline" data-v-48737ef8> Give your child the opportunity to grow through movement, confidence, and joy </h2><div class="cta-group" data-v-48737ef8><a href="https://docs.google.com/forms/d/e/1FAIpQLSe23_qFm0_6JOlsg9SSbCHhRGeOHAyjadBtclmwoUnSG4kWyw/viewform" target="_blank" class="btn btn-primary" data-v-48737ef8> Book your first lesson </a></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/ReadyToStart.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_9 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-48737ef8"]]), { __name: "LandingReadyToStart" });
const _imports_0 = publicAssetsURL("/img/acro-logo-simple-light.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const menuOpen = ref(false);
    useHead({
      htmlAttrs: {
        lang: "en"
      },
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon.png"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_landing_hero = __nuxt_component_0;
      const _component_landing_photo_gallery = __nuxt_component_1;
      const _component_landing_meet_coach = __nuxt_component_2;
      const _component_landing_why_choose_gym = __nuxt_component_3;
      const _component_landing_programs = __nuxt_component_4;
      const _component_landing_parents_trust = __nuxt_component_5;
      const _component_landing_competitions = __nuxt_component_6;
      const _component_landing_our_brand_space = __nuxt_component_7;
      const _component_landing_contact = __nuxt_component_8;
      const _component_landing_ready_to_start = __nuxt_component_9;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "landing-page" }, _attrs))} data-v-cf9dc26b><div class="bg-blobs" data-v-cf9dc26b><div class="blob blob-1" data-v-cf9dc26b></div><div class="blob blob-2" data-v-cf9dc26b></div><div class="blob blob-3" data-v-cf9dc26b></div><div class="blob blob-4" data-v-cf9dc26b></div><div class="blob blob-5" data-v-cf9dc26b></div></div><nav class="navbar" data-v-cf9dc26b><div class="nav-container" data-v-cf9dc26b><a href="#home" data-v-cf9dc26b><img${ssrRenderAttr("src", _imports_0)} alt="Acrogym Logo" class="nav-logo" data-v-cf9dc26b></a><button class="${ssrRenderClass([{ open: menuOpen.value }, "nav-toggle"])}" aria-label="Toggle menu" data-v-cf9dc26b><span data-v-cf9dc26b></span><span data-v-cf9dc26b></span><span data-v-cf9dc26b></span><span data-v-cf9dc26b></span></button><div class="${ssrRenderClass([{ open: menuOpen.value }, "nav-links"])}" data-v-cf9dc26b><a href="#coach" data-v-cf9dc26b>The Coach</a><a href="#benefits" data-v-cf9dc26b>Benefits</a><a href="#programs" data-v-cf9dc26b>Programs</a><a href="#trust" data-v-cf9dc26b>Why Us</a><a href="#space" data-v-cf9dc26b>Find us</a><a href="#contact" data-v-cf9dc26b>Contact</a></div></div></nav>`);
      _push(ssrRenderComponent(_component_landing_hero, null, null, _parent));
      _push(ssrRenderComponent(_component_landing_photo_gallery, null, null, _parent));
      _push(ssrRenderComponent(_component_landing_meet_coach, null, null, _parent));
      _push(ssrRenderComponent(_component_landing_why_choose_gym, null, null, _parent));
      _push(ssrRenderComponent(_component_landing_programs, null, null, _parent));
      _push(ssrRenderComponent(_component_landing_parents_trust, null, null, _parent));
      _push(ssrRenderComponent(_component_landing_competitions, null, null, _parent));
      _push(ssrRenderComponent(_component_landing_our_brand_space, null, null, _parent));
      _push(ssrRenderComponent(_component_landing_contact, null, null, _parent));
      _push(ssrRenderComponent(_component_landing_ready_to_start, null, null, _parent));
      _push(`<footer class="footer" data-v-cf9dc26b><div class="container" data-v-cf9dc26b><div class="footer-content" data-v-cf9dc26b><div class="footer-brand" data-v-cf9dc26b><img${ssrRenderAttr("src", _imports_0)} alt="Acrogym Logo" class="footer-logo" data-v-cf9dc26b><p data-v-cf9dc26b> Helping children grow stronger, more confident, and fearless through movement. </p></div><div class="footer-copy" data-v-cf9dc26b> © ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Acrogym FZCO. All rights reserved. </div></div></div></footer></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cf9dc26b"]]);

export { index as default };
