import { resolveComponent, withCtx, renderSlot, createVNode, defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'pinia';
import 'vue-router';
import 'pinia-plugin-persistedstate';

const _sfc_main$1 = {
  props: {
    message: {
      type: String,
      default: "Hello! I have a question."
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
  const _component_v_img = resolveComponent("v-img");
  _push(`<a${ssrRenderAttrs(mergeProps({
    href: $options.whatsappLink,
    target: "_blank",
    class: "whatsapp-button"
  }, _attrs))} data-v-23e5747d>`);
  _push(ssrRenderComponent(_component_v_img, {
    src: "/img/whatsapp-icon.png",
    alt: "WhatsApp"
  }, null, _parent));
  _push(`</a>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/WhatsApp.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-23e5747d"]]), { __name: "WhatsApp" });
const _sfc_main = defineComponent({
  name: "naked"
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_app = resolveComponent("v-app");
  const _component_v_main = resolveComponent("v-main");
  const _component_whats_app = __nuxt_component_0;
  _push(ssrRenderComponent(_component_v_app, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_main, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
              _push3(ssrRenderComponent(_component_whats_app, { "phone-number": `+phone here` }, null, _parent3, _scopeId2));
            } else {
              return [
                renderSlot(_ctx.$slots, "default", {}, void 0, true),
                createVNode(_component_whats_app, { "phone-number": `+phone here` })
              ];
            }
          }),
          _: 3
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_main, null, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default", {}, void 0, true),
              createVNode(_component_whats_app, { "phone-number": `+phone here` })
            ]),
            _: 3
          })
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/naked.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const naked = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-c992cc03"]]);

export { naked as default };
