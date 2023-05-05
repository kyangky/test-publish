import { defineComponent as e, ref as c, openBlock as s, createElementBlock as u, toDisplayString as a } from "vue";
const r = {
  name: "CimkButton"
}, l = /* @__PURE__ */ e({
  ...r,
  setup(n) {
    const t = c(0);
    return (m, o) => (s(), u("button", {
      type: "button",
      onClick: o[0] || (o[0] = (i) => t.value++)
    }, "count is " + a(t.value), 1));
  }
}), p = [l], f = {
  install(n) {
    p.forEach((t) => {
      n.component(t.name, t);
    });
  }
};
export {
  l as CimkButton,
  f as default
};
