import {
  s as _,
  T as H,
  b as A,
  t as P,
  a as Q,
  c as z,
  j as a,
  d as W,
  e,
  r as b,
  F as w,
  D as q,
  f as V,
  g as K,
  h as G,
  B as d,
  i as I,
  L as y,
  k as x,
  R as J,
  l as X,
} from "./vendor.64bdc87e.js";
const Z = function () {
  const i = document.createElement("link").relList;
  if (i && i.supports && i.supports("modulepreload")) return;
  for (const t of document.querySelectorAll('link[rel="modulepreload"]')) s(t);
  new MutationObserver((t) => {
    for (const l of t)
      if (l.type === "childList")
        for (const F of l.addedNodes)
          F.tagName === "LINK" && F.rel === "modulepreload" && s(F);
  }).observe(document, { childList: !0, subtree: !0 });
  function u(t) {
    const l = {};
    return (
      t.integrity && (l.integrity = t.integrity),
      t.referrerpolicy && (l.referrerPolicy = t.referrerpolicy),
      t.crossorigin === "use-credentials"
        ? (l.credentials = "include")
        : t.crossorigin === "anonymous"
        ? (l.credentials = "omit")
        : (l.credentials = "same-origin"),
      l
    );
  }
  function s(t) {
    if (t.ep) return;
    t.ep = !0;
    const l = u(t);
    fetch(t.href, l);
  }
};
Z();
const ee = "_buttonList_wcn3b_26",
  te = "_baby_wcn3b_37",
  ne = "_buttonLink_wcn3b_50";
var h = { buttonList: ee, baby: te, buttonLink: ne };
const E = {
    50: "#F0F7FF",
    100: "#C2E0FF",
    200: "#80BFFF",
    300: "#66B2FF",
    400: "#3399FF",
    500: "#007FFF",
    600: "#0072E5",
    700: "#0059B2",
    800: "#004C99",
    900: "#003A75",
  },
  v = _(H)`
  font-family: IBM Plex Sans, sans-serif;
  color: white;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  padding: 12px 16px;
  margin: 6px 6px;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${E[400]};
  }

  &.${A.focusVisible} {
    color: #fff;
    outline: none;
    background-color: ${E[200]};
  }

  &.${P.selected} {
    background-color: ${E[50]};
    color: ${E[600]};
  }

  &.${A.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,
  k = _(Q)`
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
`,
  ae = _(z)`
  max-width: 450px;
  width: 100%;
  background-color: ${E[500]};
  border-radius: 8px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;
function ue(r) {
  const { context: i, context1: u, context2: s } = r;
  return a(W, {
    defaultValue: 2,
    children: [
      a(ae, {
        children: [
          e(v, { children: "\u5151\u6362" }),
          e(v, { children: "\u67E5\u8BE2" }),
          e(v, { children: "\u6559\u7A0B" }),
        ],
      }),
      e(k, { value: 0, children: i }),
      e(k, { value: 1, children: u }),
      e(k, { value: 2, children: s }),
    ],
  });
}
function M(r, i) {
  let u = new Date(i * 1e3),
    s;
  const t = {
    "Y+": u.getFullYear().toString(),
    "m+": (u.getMonth() + 1).toString(),
    "d+": u.getDate().toString(),
    "H+": u.getHours().toString(),
    "M+": u.getMinutes().toString(),
    "S+": u.getSeconds().toString(),
  };
  for (let l in t)
    (s = new RegExp("(" + l + ")").exec(r)),
      s &&
        (r = r.replace(
          s[1],
          s[1].length == 1 ? t[l] : t[l].padStart(s[1].length, "0")
        ));
  return r;
}
function C(r) {
  let i = "";
  r < 0.1 * 1024
    ? (i = r.toFixed(2) + "")
    : r < 0.1 * 1024 * 1024
    ? (i = (r / 1024).toFixed(2) + "Kb")
    : r < 0.1 * 1024 * 1024 * 1024
    ? (i = (r / (1024 * 1024)).toFixed(2) + "MB")
    : (i = (r / (1024 * 1024 * 1024)).toFixed(2) + "GB");
  let u = i + "",
    s = u.indexOf(".");
  return u.substr(s + 1, 2) == "00"
    ? u.substring(0, s) + u.substr(s + 3, 2)
    : u;
}
function oe() {
  const r = b.exports.useRef(null),
    i = b.exports.useRef(null),
    [u, s] = b.exports.useState({
      expired_at: 0,
      subscribe_url: "",
      token: "",
      transfer_enable: 0,
    }),
    [t, l] = b.exports.useState({
      expired_at: 0,
      subscribe_url: "",
      token: "",
      transfer_enable: 0,
      u: 0,
      d: 0,
      s: 0,
    }),
    [F, $] = b.exports.useState(!1),
    [O, S] = b.exports.useState(!1),
    [T, c] = b.exports.useState(!1),
    [N, f] = b.exports.useState(""),
    [R, B] = b.exports.useState(!1),
    [D, p] = b.exports.useState(!1),
    L = () => {
      c(!1);
    },
    g = (o) => {
      if (localStorage.getItem("url") == "") {
        f(
          "\u5F53\u524D\u6D4F\u89C8\u5668\u7F13\u5B58\u65E0\u8BA2\u9605\u94FE\u63A5,\u67E5\u8BE2\u5957\u9910\u540E\u518D\u8FDB\u884C\u5BFC\u5165\u8BBE\u5907."
        ),
          c(!0);
        return;
      }
      switch (o) {
        case "windows":
          return window.open(
            `clash://install-config?url=${u.subscribe_url}&name=${window.document.title}`,
            "_self"
          );
        case "macos":
          return window.open(
            `clash://install-config?url=${u.subscribe_url}&name=${window.document.title}`,
            "_self"
          );
        case "android":
          return window.open(
            `clash://install-config?url=${u.subscribe_url}&name=${window.document.title}`,
            "_self"
          );
        case "ios":
          return window.open(
            "shadowrocket://add/sub://" +
              window
                .btoa(u.subscribe_url + "&flag=shadowrocket")
                .replace(/\+/g, "-")
                .replace(/\//g, "_")
                .replace(/=+$/, "") +
              "?remark=" +
              window.document.title,
            "_self"
          );
      }
    },
    Y = () => {
      var o, m;
      if (
        (B(!0),
        ((o = r.current) == null ? void 0 : o.value) === "" ||
          ((m = r.current) == null ? void 0 : m.value) == null)
      ) {
        f(
          "\u5151\u6362\u7801\u4E0D\u5F97\u4E3A\u7A7A,\u82E5\u65E0\u5151\u6362\u7801\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458\u8D2D\u4E70."
        ),
          c(!0),
          B(!1);
        return;
      }
      x.post(`${window.server.host + window.server.port}/api/v1/card/verify`, {
        code: r.current.value,
      })
        .then((n) => {
          if (n.data.code == 0) {
            f(n.data.message), c(!0), B(!1);
            return;
          }
          s({
            expired_at: n.data.data.expired_at,
            token: n.data.data.token,
            transfer_enable: n.data.data.transfer_enable,
            subscribe_url: n.data.data.subscribe_url,
          }),
            localStorage.setItem("token", n.data.data.token),
            localStorage.setItem("url", n.data.data.subscribe_url),
            f("\u5151\u6362\u6210\u529F"),
            c(!0),
            $(!0);
        })
        .catch((n) => {
          console.log(n), B(!1);
        });
    },
    U = () => {
      var o, m;
      if (
        (p(!0),
        ((o = i.current) == null ? void 0 : o.value) === "" ||
          ((m = i.current) == null ? void 0 : m.value) === null)
      ) {
        f("\u67E5\u8BE2\u7801\u4E0D\u5F97\u4E3A\u7A7A."), c(!0), p(!1);
        return;
      } else if (i.current.value.length < 20) {
        f("\u67E5\u8BE2\u7801\u683C\u5F0F\u4E0D\u6B63\u786E."), c(!0), p(!1);
        return;
      }
      x.post(`${window.server.host + window.server.port}/api/v1/card/query`, {
        token: i.current.value,
      })
        .then((n) => {
          if (n.data.code === 0) {
            f(n.data.message), c(!0), p(!1);
            return;
          }
          l({
            expired_at: n.data.data.expired_at,
            token: n.data.data.token,
            transfer_enable: n.data.data.transfer_enable,
            subscribe_url: n.data.data.subscribe_url,
            u: n.data.data.u,
            s: n.data.data.s,
            d: n.data.data.d,
          }),
            localStorage.setItem("token", n.data.data.token),
            localStorage.setItem("url", n.data.data.subscribe_url),
            f("\u67E5\u8BE2\u6210\u529F"),
            c(!0),
            p(!1),
            S(!0);
        })
        .catch((n) => {
          console.log(n), p(!1);
        });
    },
    j = () => {
      if ((p(!0), localStorage.getItem("token") === "")) {
        f("\u6D4F\u89C8\u5668\u7F13\u5B58,\u65E0\u67E5\u8BE2\u7801"),
          c(!0),
          p(!1);
        return;
      }
      x.post(`${window.server.host + window.server.port}/api/v1/card/query`, {
        token: localStorage.getItem("token"),
      })
        .then((o) => {
          if (o.data.code === 0) {
            f(o.data.message), c(!0), p(!1);
            return;
          }
          l({
            expired_at: o.data.data.expired_at,
            token: o.data.data.token,
            transfer_enable: o.data.data.transfer_enable,
            subscribe_url: o.data.data.subscribe_url,
            u: o.data.data.u,
            s: o.data.data.s,
            d: o.data.data.d,
          }),
            localStorage.setItem("token", o.data.data.token),
            localStorage.setItem("url", o.data.data.subscribe_url),
            f("\u67E5\u8BE2\u6210\u529F"),
            c(!0),
            p(!1),
            S(!0);
        })
        .catch((o) => {
          console.log(o), p(!1);
        });
    };
  return a(w, {
    children: [
      a(q, {
        open: T,
        onClose: L,
        children: [
          e(V, { children: e(K, { children: N }) }),
          e(G, { children: e(d, { onClick: L, children: "\u5173\u95ED" }) }),
        ],
      }),
      a("main", {
        children: [
          e("img", { src: window.config.logo, alt: "logo" }),
          e(ue, {
            className: h.box,
            context: e(w, {
              children: F
                ? a(w, {
                    children: [
                      a("div", {
                        className: h.baby,
                        children: [
                          e("p", {
                            style: { color: "red" },
                            children:
                              "\u8BF7\u8BB0\u5F55\u4E0B\u65B9\u67E5\u8BE2\u7801,\u7528\u4E8E\u5957\u9910\u4F7F\u7528\u60C5\u51B5\u67E5\u8BE2",
                          }),
                          e("p", {
                            style: { fontWeight: "bold", color: "#167fff" },
                            children: u.token,
                          }),
                          a("p", {
                            children: [
                              "\u5957\u9910\u5230\u671F\u65F6\u95F4:",
                              M("YYYY-mm-dd HH:MM", u.expired_at),
                            ],
                          }),
                        ],
                      }),
                      a("div", {
                        className: h.buttonLink,
                        children: [
                          e(d, {
                            variant: "outlined",
                            onClick: () => {
                              g("window");
                            },
                            children: "\u4E00\u952E\u5BFC\u5165 Windows",
                          }),
                          e(d, {
                            variant: "outlined",
                            onClick: () => {
                              g("macos");
                            },
                            children: "\u4E00\u952E\u5BFC\u5165 MacOS",
                          }),
                          e(d, {
                            variant: "outlined",
                            onClick: () => {
                              g("ios");
                            },
                            children: "\u4E00\u952E\u5BFC\u5165 IOS",
                          }),
                          e(d, {
                            variant: "outlined",
                            onClick: () => {
                              g("android");
                            },
                            children: "\u4E00\u952E\u5BFC\u5165 Android",
                          }),
                        ],
                      }),
                    ],
                  })
                : a(w, {
                    children: [
                      e(I, {
                        style: { width: "100%" },
                        inputRef: r,
                        label: "\u5151\u6362\u7801",
                        variant: "standard",
                      }),
                      e(y, {
                        style: { marginTop: "20px" },
                        onClick: Y,
                        loading: R,
                        loadingIndicator: "Loading...",
                        variant: "contained",
                        children: "\u7ACB\u5373\u5151\u6362",
                      }),
                    ],
                  }),
            }),
            context1: e(w, {
              children: O
                ? a(w, {
                    children: [
                      a("div", {
                        className: h.baby,
                        children: [
                          e("p", {
                            style: { color: "red" },
                            children: "\u8D26\u53F7\u6982\u51B5",
                          }),
                          a("p", {
                            children: [
                              "\u5957\u9910\u5230\u671F\u65F6\u95F4:",
                              M("YYYY-mm-dd HH:MM", t.expired_at),
                            ],
                          }),
                          a("p", {
                            children: [
                              "\u5269\u4F59\u53EF\u4F7F\u7528:",
                              C(t.s),
                            ],
                          }),
                          a("p", {
                            children: [
                              "\u5DF2\u4F7F\u7528\u4E0A\u884C:",
                              C(t.u),
                            ],
                          }),
                          a("p", {
                            children: [
                              "\u5DF2\u4F7F\u7528\u4E0B\u884C:",
                              C(t.d),
                            ],
                          }),
                        ],
                      }),
                      a("div", {
                        className: h.buttonLink,
                        children: [
                          e(d, {
                            variant: "outlined",
                            onClick: () => {
                              g("window");
                            },
                            children: "\u4E00\u952E\u5BFC\u5165 Windows",
                          }),
                          e(d, {
                            variant: "outlined",
                            onClick: () => {
                              g("macos");
                            },
                            children: "\u4E00\u952E\u5BFC\u5165 MacOS",
                          }),
                          e(d, {
                            variant: "outlined",
                            onClick: () => {
                              g("ios");
                            },
                            children: "\u4E00\u952E\u5BFC\u5165 IOS",
                          }),
                          e(d, {
                            variant: "outlined",
                            onClick: () => {
                              g("android");
                            },
                            children: "\u4E00\u952E\u5BFC\u5165 Android",
                          }),
                        ],
                      }),
                    ],
                  })
                : a(w, {
                    children: [
                      e(I, {
                        style: { width: "100%" },
                        inputRef: i,
                        label: "\u67E5\u8BE2\u7801",
                        variant: "standard",
                      }),
                      a("div", {
                        style: {
                          display: "flex",
                          justifyContent: "space-between",
                        },
                        children: [
                          e(y, {
                            style: { marginTop: "20px" },
                            onClick: U,
                            loading: D,
                            loadingIndicator: "Loading...",
                            variant: "contained",
                            children: "\u67E5\u8BE2\u7801\u67E5\u8BE2",
                          }),
                          localStorage.getItem("token") &&
                            e(y, {
                              style: { marginTop: "20px" },
                              onClick: j,
                              loading: D,
                              loadingIndicator: "Loading...",
                              variant: "contained",
                              children:
                                "\u6D4F\u89C8\u5668\u7F13\u5B58\u67E5\u8BE2",
                            }),
                        ],
                      }),
                    ],
                  }),
            }),
            context2: a(w, {
              children: [
                e("h4", {
                  style: { marginBottom: "2px" },
                  children: "Windows",
                }),
                a("div", {
                  className: h.buttonList,
                  children: [
                    e(d, {
                      variant: "outlined",
                      onClick: () => window.open(window.config.windows_doc_url),
                      children: "\u4F7F\u7528\u6559\u7A0B",
                    }),
                    e(d, {
                      onClick: () => window.open(window.config.windows_app_url),
                      variant: "outlined",
                      children: "\u5E94\u7528\u4E0B\u8F7D",
                    }),
                  ],
                }),
                e("h4", { style: { marginBottom: "2px" }, children: "MacOS" }),
                a("div", {
                  className: h.buttonList,
                  children: [
                    e(d, {
                      variant: "outlined",
                      onClick: () => window.open(window.config.macos_doc_url),
                      children: "\u4F7F\u7528\u6559\u7A0B",
                    }),
                    e(d, {
                      variant: "outlined",
                      onClick: () => window.open(window.config.macos_app_url),
                      children: "\u5E94\u7528\u4E0B\u8F7D",
                    }),
                  ],
                }),
                e("h4", { style: { marginBottom: "2px" }, children: "IOS" }),
                a("div", {
                  className: h.buttonList,
                  children: [
                    e(d, {
                      variant: "outlined",
                      onClick: () => window.open(window.config.ios_doc_url),
                      children: "\u4F7F\u7528\u6559\u7A0B",
                    }),
                    e(d, {
                      variant: "outlined",
                      onClick: () => window.open(window.config.ios_app_url),
                      children: "\u5E94\u7528\u4E0B\u8F7D",
                    }),
                  ],
                }),
                e("h4", {
                  style: { marginBottom: "2px" },
                  children: "Android",
                }),
                a("div", {
                  className: h.buttonList,
                  children: [
                    e(d, {
                      variant: "outlined",
                      onClick: () => window.open(window.config.android_doc_url),
                      children: "\u4F7F\u7528\u6559\u7A0B",
                    }),
                    e(d, {
                      variant: "outlined",
                      onClick: () => window.open(window.config.android_app_url),
                      children: "\u5E94\u7528\u4E0B\u8F7D",
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      e("footer", { children: window.config.footer }),
    ],
  });
}
J.render(
  e(X.StrictMode, { children: e(oe, {}) }),
  document.getElementById("root")
);
