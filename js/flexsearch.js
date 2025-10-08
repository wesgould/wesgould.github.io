(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/flexsearch/dist/flexsearch.bundle.js
  var require_flexsearch_bundle = __commonJS({
    "node_modules/flexsearch/dist/flexsearch.bundle.js"(exports, module) {
      (function _f(self) {
        "use strict";
        try {
          if (module) self = module;
        } catch (e) {
        }
        self._factory = _f;
        var t;
        function u(a2) {
          return "undefined" !== typeof a2 ? a2 : true;
        }
        function aa(a2) {
          const b2 = Array(a2);
          for (let c2 = 0; c2 < a2; c2++) b2[c2] = v();
          return b2;
        }
        function v() {
          return /* @__PURE__ */ Object.create(null);
        }
        function ba(a2, b2) {
          return b2.length - a2.length;
        }
        function x(a2) {
          return "string" === typeof a2;
        }
        function C(a2) {
          return "object" === typeof a2;
        }
        function D(a2) {
          return "function" === typeof a2;
        }
        ;
        function ca(a2, b2) {
          var c2 = da;
          if (a2 && (b2 && (a2 = E(a2, b2)), this.H && (a2 = E(a2, this.H)), this.J && 1 < a2.length && (a2 = E(a2, this.J)), c2 || "" === c2)) {
            a2 = a2.split(c2);
            if (this.filter) {
              b2 = this.filter;
              c2 = a2.length;
              const d2 = [];
              for (let e = 0, f = 0; e < c2; e++) {
                const g = a2[e];
                g && !b2[g] && (d2[f++] = g);
              }
              a2 = d2;
            }
            return a2;
          }
          return a2;
        }
        const da = /[\p{Z}\p{S}\p{P}\p{C}]+/u, ea = /[\u0300-\u036f]/g;
        function fa(a2, b2) {
          const c2 = Object.keys(a2), d2 = c2.length, e = [];
          let f = "", g = 0;
          for (let h = 0, k, m; h < d2; h++) k = c2[h], (m = a2[k]) ? (e[g++] = F(b2 ? "(?!\\b)" + k + "(\\b|_)" : k), e[g++] = m) : f += (f ? "|" : "") + k;
          f && (e[g++] = F(b2 ? "(?!\\b)(" + f + ")(\\b|_)" : "(" + f + ")"), e[g] = "");
          return e;
        }
        function E(a2, b2) {
          for (let c2 = 0, d2 = b2.length; c2 < d2 && (a2 = a2.replace(b2[c2], b2[c2 + 1]), a2); c2 += 2) ;
          return a2;
        }
        function F(a2) {
          return new RegExp(a2, "g");
        }
        function ha(a2) {
          let b2 = "", c2 = "";
          for (let d2 = 0, e = a2.length, f; d2 < e; d2++) (f = a2[d2]) !== c2 && (b2 += c2 = f);
          return b2;
        }
        ;
        var ja = { encode: ia, F: false, G: "" };
        function ia(a2) {
          return ca.call(this, ("" + a2).toLowerCase(), false);
        }
        ;
        const ka = {}, G = {};
        function la(a2) {
          I(a2, "add");
          I(a2, "append");
          I(a2, "search");
          I(a2, "update");
          I(a2, "remove");
        }
        function I(a2, b2) {
          a2[b2 + "Async"] = function() {
            const c2 = this, d2 = arguments;
            var e = d2[d2.length - 1];
            let f;
            D(e) && (f = e, delete d2[d2.length - 1]);
            e = new Promise(function(g) {
              setTimeout(function() {
                c2.async = true;
                const h = c2[b2].apply(c2, d2);
                c2.async = false;
                g(h);
              });
            });
            return f ? (e.then(f), this) : e;
          };
        }
        ;
        function ma(a2, b2, c2, d2) {
          const e = a2.length;
          let f = [], g, h, k = 0;
          d2 && (d2 = []);
          for (let m = e - 1; 0 <= m; m--) {
            const n = a2[m], w = n.length, q = v();
            let r = !g;
            for (let l = 0; l < w; l++) {
              const p = n[l], z = p.length;
              if (z) for (let B = 0, A, y; B < z; B++) if (y = p[B], g) {
                if (g[y]) {
                  if (!m) {
                    if (c2) c2--;
                    else if (f[k++] = y, k === b2) return f;
                  }
                  if (m || d2) q[y] = 1;
                  r = true;
                }
                if (d2 && (A = (h[y] || 0) + 1, h[y] = A, A < e)) {
                  const H = d2[A - 2] || (d2[A - 2] = []);
                  H[H.length] = y;
                }
              } else q[y] = 1;
            }
            if (d2) g || (h = q);
            else if (!r) return [];
            g = q;
          }
          if (d2) for (let m = d2.length - 1, n, w; 0 <= m; m--) {
            n = d2[m];
            w = n.length;
            for (let q = 0, r; q < w; q++) if (r = n[q], !g[r]) {
              if (c2) c2--;
              else if (f[k++] = r, k === b2) return f;
              g[r] = 1;
            }
          }
          return f;
        }
        function na(a2, b2) {
          const c2 = v(), d2 = v(), e = [];
          for (let f = 0; f < a2.length; f++) c2[a2[f]] = 1;
          for (let f = 0, g; f < b2.length; f++) {
            g = b2[f];
            for (let h = 0, k; h < g.length; h++) k = g[h], c2[k] && !d2[k] && (d2[k] = 1, e[e.length] = k);
          }
          return e;
        }
        ;
        function J(a2) {
          this.l = true !== a2 && a2;
          this.cache = v();
          this.h = [];
        }
        function oa(a2, b2, c2) {
          C(a2) && (a2 = a2.query);
          let d2 = this.cache.get(a2);
          d2 || (d2 = this.search(a2, b2, c2), this.cache.set(a2, d2));
          return d2;
        }
        J.prototype.set = function(a2, b2) {
          if (!this.cache[a2]) {
            var c2 = this.h.length;
            c2 === this.l ? delete this.cache[this.h[c2 - 1]] : c2++;
            for (--c2; 0 < c2; c2--) this.h[c2] = this.h[c2 - 1];
            this.h[0] = a2;
          }
          this.cache[a2] = b2;
        };
        J.prototype.get = function(a2) {
          const b2 = this.cache[a2];
          if (this.l && b2 && (a2 = this.h.indexOf(a2))) {
            const c2 = this.h[a2 - 1];
            this.h[a2 - 1] = this.h[a2];
            this.h[a2] = c2;
          }
          return b2;
        };
        const qa = { memory: { charset: "latin:extra", D: 3, B: 4, m: false }, performance: { D: 3, B: 3, s: false, context: { depth: 2, D: 1 } }, match: { charset: "latin:extra", G: "reverse" }, score: { charset: "latin:advanced", D: 20, B: 3, context: { depth: 3, D: 9 } }, "default": {} };
        function ra(a2, b2, c2, d2, e, f, g) {
          setTimeout(function() {
            const h = a2(c2 ? c2 + "." + d2 : d2, JSON.stringify(g));
            h && h.then ? h.then(function() {
              b2.export(a2, b2, c2, e, f + 1);
            }) : b2.export(a2, b2, c2, e, f + 1);
          });
        }
        ;
        function K(a2, b2) {
          if (!(this instanceof K)) return new K(a2);
          var c2;
          if (a2) {
            x(a2) ? a2 = qa[a2] : (c2 = a2.preset) && (a2 = Object.assign({}, c2[c2], a2));
            c2 = a2.charset;
            var d2 = a2.lang;
            x(c2) && (-1 === c2.indexOf(":") && (c2 += ":default"), c2 = G[c2]);
            x(d2) && (d2 = ka[d2]);
          } else a2 = {};
          let e, f, g = a2.context || {};
          this.encode = a2.encode || c2 && c2.encode || ia;
          this.register = b2 || v();
          this.D = e = a2.resolution || 9;
          this.G = b2 = c2 && c2.G || a2.tokenize || "strict";
          this.depth = "strict" === b2 && g.depth;
          this.l = u(g.bidirectional);
          this.s = f = u(a2.optimize);
          this.m = u(a2.fastupdate);
          this.B = a2.minlength || 1;
          this.C = a2.boost;
          this.map = f ? aa(e) : v();
          this.A = e = g.resolution || 1;
          this.h = f ? aa(e) : v();
          this.F = c2 && c2.F || a2.rtl;
          this.H = (b2 = a2.matcher || d2 && d2.H) && fa(b2, false);
          this.J = (b2 = a2.stemmer || d2 && d2.J) && fa(b2, true);
          if (c2 = b2 = a2.filter || d2 && d2.filter) {
            c2 = b2;
            d2 = v();
            for (let h = 0, k = c2.length; h < k; h++) d2[c2[h]] = 1;
            c2 = d2;
          }
          this.filter = c2;
          this.cache = (b2 = a2.cache) && new J(b2);
        }
        t = K.prototype;
        t.append = function(a2, b2) {
          return this.add(a2, b2, true);
        };
        t.add = function(a2, b2, c2, d2) {
          if (b2 && (a2 || 0 === a2)) {
            if (!d2 && !c2 && this.register[a2]) return this.update(a2, b2);
            b2 = this.encode(b2);
            if (d2 = b2.length) {
              const m = v(), n = v(), w = this.depth, q = this.D;
              for (let r = 0; r < d2; r++) {
                let l = b2[this.F ? d2 - 1 - r : r];
                var e = l.length;
                if (l && e >= this.B && (w || !n[l])) {
                  var f = L(q, d2, r), g = "";
                  switch (this.G) {
                    case "full":
                      if (2 < e) {
                        for (f = 0; f < e; f++) for (var h = e; h > f; h--) if (h - f >= this.B) {
                          var k = L(q, d2, r, e, f);
                          g = l.substring(f, h);
                          M(this, n, g, k, a2, c2);
                        }
                        break;
                      }
                    case "reverse":
                      if (1 < e) {
                        for (h = e - 1; 0 < h; h--) g = l[h] + g, g.length >= this.B && M(
                          this,
                          n,
                          g,
                          L(q, d2, r, e, h),
                          a2,
                          c2
                        );
                        g = "";
                      }
                    case "forward":
                      if (1 < e) {
                        for (h = 0; h < e; h++) g += l[h], g.length >= this.B && M(this, n, g, f, a2, c2);
                        break;
                      }
                    default:
                      if (this.C && (f = Math.min(f / this.C(b2, l, r) | 0, q - 1)), M(this, n, l, f, a2, c2), w && 1 < d2 && r < d2 - 1) {
                        for (e = v(), g = this.A, f = l, h = Math.min(w + 1, d2 - r), e[f] = 1, k = 1; k < h; k++) if ((l = b2[this.F ? d2 - 1 - r - k : r + k]) && l.length >= this.B && !e[l]) {
                          e[l] = 1;
                          const p = this.l && l > f;
                          M(this, m, p ? f : l, L(g + (d2 / 2 > g ? 0 : 1), d2, r, h - 1, k - 1), a2, c2, p ? l : f);
                        }
                      }
                  }
                }
              }
              this.m || (this.register[a2] = 1);
            }
          }
          return this;
        };
        function L(a2, b2, c2, d2, e) {
          return c2 && 1 < a2 ? b2 + (d2 || 0) <= a2 ? c2 + (e || 0) : (a2 - 1) / (b2 + (d2 || 0)) * (c2 + (e || 0)) + 1 | 0 : 0;
        }
        function M(a2, b2, c2, d2, e, f, g) {
          let h = g ? a2.h : a2.map;
          if (!b2[c2] || g && !b2[c2][g]) a2.s && (h = h[d2]), g ? (b2 = b2[c2] || (b2[c2] = v()), b2[g] = 1, h = h[g] || (h[g] = v())) : b2[c2] = 1, h = h[c2] || (h[c2] = []), a2.s || (h = h[d2] || (h[d2] = [])), f && h.includes(e) || (h[h.length] = e, a2.m && (a2 = a2.register[e] || (a2.register[e] = []), a2[a2.length] = h));
        }
        t.search = function(a2, b2, c2) {
          c2 || (!b2 && C(a2) ? (c2 = a2, a2 = c2.query) : C(b2) && (c2 = b2));
          let d2 = [], e;
          let f, g = 0;
          if (c2) {
            a2 = c2.query || a2;
            b2 = c2.limit;
            g = c2.offset || 0;
            var h = c2.context;
            f = c2.suggest;
          }
          if (a2 && (a2 = this.encode("" + a2), e = a2.length, 1 < e)) {
            c2 = v();
            var k = [];
            for (let n = 0, w = 0, q; n < e; n++) if ((q = a2[n]) && q.length >= this.B && !c2[q]) if (this.s || f || this.map[q]) k[w++] = q, c2[q] = 1;
            else return d2;
            a2 = k;
            e = a2.length;
          }
          if (!e) return d2;
          b2 || (b2 = 100);
          h = this.depth && 1 < e && false !== h;
          c2 = 0;
          let m;
          h ? (m = a2[0], c2 = 1) : 1 < e && a2.sort(ba);
          for (let n, w; c2 < e; c2++) {
            w = a2[c2];
            h ? (n = sa(
              this,
              d2,
              f,
              b2,
              g,
              2 === e,
              w,
              m
            ), f && false === n && d2.length || (m = w)) : n = sa(this, d2, f, b2, g, 1 === e, w);
            if (n) return n;
            if (f && c2 === e - 1) {
              k = d2.length;
              if (!k) {
                if (h) {
                  h = 0;
                  c2 = -1;
                  continue;
                }
                return d2;
              }
              if (1 === k) return ta(d2[0], b2, g);
            }
          }
          return ma(d2, b2, g, f);
        };
        function sa(a2, b2, c2, d2, e, f, g, h) {
          let k = [], m = h ? a2.h : a2.map;
          a2.s || (m = ua(m, g, h, a2.l));
          if (m) {
            let n = 0;
            const w = Math.min(m.length, h ? a2.A : a2.D);
            for (let q = 0, r = 0, l, p; q < w; q++) if (l = m[q]) {
              if (a2.s && (l = ua(l, g, h, a2.l)), e && l && f && (p = l.length, p <= e ? (e -= p, l = null) : (l = l.slice(e), e = 0)), l && (k[n++] = l, f && (r += l.length, r >= d2))) break;
            }
            if (n) {
              if (f) return ta(k, d2, 0);
              b2[b2.length] = k;
              return;
            }
          }
          return !c2 && k;
        }
        function ta(a2, b2, c2) {
          a2 = 1 === a2.length ? a2[0] : [].concat.apply([], a2);
          return c2 || a2.length > b2 ? a2.slice(c2, c2 + b2) : a2;
        }
        function ua(a2, b2, c2, d2) {
          c2 ? (d2 = d2 && b2 > c2, a2 = (a2 = a2[d2 ? b2 : c2]) && a2[d2 ? c2 : b2]) : a2 = a2[b2];
          return a2;
        }
        t.contain = function(a2) {
          return !!this.register[a2];
        };
        t.update = function(a2, b2) {
          return this.remove(a2).add(a2, b2);
        };
        t.remove = function(a2, b2) {
          const c2 = this.register[a2];
          if (c2) {
            if (this.m) for (let d2 = 0, e; d2 < c2.length; d2++) e = c2[d2], e.splice(e.indexOf(a2), 1);
            else N(this.map, a2, this.D, this.s), this.depth && N(this.h, a2, this.A, this.s);
            b2 || delete this.register[a2];
            if (this.cache) {
              b2 = this.cache;
              for (let d2 = 0, e, f; d2 < b2.h.length; d2++) f = b2.h[d2], e = b2.cache[f], e.includes(a2) && (b2.h.splice(d2--, 1), delete b2.cache[f]);
            }
          }
          return this;
        };
        function N(a2, b2, c2, d2, e) {
          let f = 0;
          if (a2.constructor === Array) if (e) b2 = a2.indexOf(b2), -1 !== b2 ? 1 < a2.length && (a2.splice(b2, 1), f++) : f++;
          else {
            e = Math.min(a2.length, c2);
            for (let g = 0, h; g < e; g++) if (h = a2[g]) f = N(h, b2, c2, d2, e), d2 || f || delete a2[g];
          }
          else for (let g in a2) (f = N(a2[g], b2, c2, d2, e)) || delete a2[g];
          return f;
        }
        t.searchCache = oa;
        t.export = function(a2, b2, c2, d2, e) {
          let f, g;
          switch (e || (e = 0)) {
            case 0:
              f = "reg";
              if (this.m) {
                g = v();
                for (let h in this.register) g[h] = 1;
              } else g = this.register;
              break;
            case 1:
              f = "cfg";
              g = { doc: 0, opt: this.s ? 1 : 0 };
              break;
            case 2:
              f = "map";
              g = this.map;
              break;
            case 3:
              f = "ctx";
              g = this.h;
              break;
            default:
              return;
          }
          ra(a2, b2 || this, c2, f, d2, e, g);
          return true;
        };
        t.import = function(a2, b2) {
          if (b2) switch (x(b2) && (b2 = JSON.parse(b2)), a2) {
            case "cfg":
              this.s = !!b2.opt;
              break;
            case "reg":
              this.m = false;
              this.register = b2;
              break;
            case "map":
              this.map = b2;
              break;
            case "ctx":
              this.h = b2;
          }
        };
        la(K.prototype);
        function va(a2) {
          a2 = a2.data;
          var b2 = self._index;
          const c2 = a2.args;
          var d2 = a2.task;
          switch (d2) {
            case "init":
              d2 = a2.options || {};
              a2 = a2.factory;
              b2 = d2.encode;
              d2.cache = false;
              b2 && 0 === b2.indexOf("function") && (d2.encode = Function("return " + b2)());
              a2 ? (Function("return " + a2)()(self), self._index = new self.FlexSearch.Index(d2), delete self.FlexSearch) : self._index = new K(d2);
              break;
            default:
              a2 = a2.id, b2 = b2[d2].apply(b2, c2), postMessage("search" === d2 ? { id: a2, msg: b2 } : { id: a2 });
          }
        }
        ;
        let wa = 0;
        function O(a2) {
          if (!(this instanceof O)) return new O(a2);
          var b2;
          a2 ? D(b2 = a2.encode) && (a2.encode = b2.toString()) : a2 = {};
          (b2 = (self || window)._factory) && (b2 = b2.toString());
          const c2 = "undefined" === typeof window && self.exports, d2 = this;
          this.o = xa(b2, c2, a2.worker);
          this.h = v();
          if (this.o) {
            if (c2) this.o.on("message", function(e) {
              d2.h[e.id](e.msg);
              delete d2.h[e.id];
            });
            else this.o.onmessage = function(e) {
              e = e.data;
              d2.h[e.id](e.msg);
              delete d2.h[e.id];
            };
            this.o.postMessage({ task: "init", factory: b2, options: a2 });
          }
        }
        P("add");
        P("append");
        P("search");
        P("update");
        P("remove");
        function P(a2) {
          O.prototype[a2] = O.prototype[a2 + "Async"] = function() {
            const b2 = this, c2 = [].slice.call(arguments);
            var d2 = c2[c2.length - 1];
            let e;
            D(d2) && (e = d2, c2.splice(c2.length - 1, 1));
            d2 = new Promise(function(f) {
              setTimeout(function() {
                b2.h[++wa] = f;
                b2.o.postMessage({ task: a2, id: wa, args: c2 });
              });
            });
            return e ? (d2.then(e), this) : d2;
          };
        }
        function xa(a, b, c) {
          let d;
          try {
            d = b ? eval('new (require("worker_threads")["Worker"])("../dist/node/node.js")') : a ? new Worker(URL.createObjectURL(new Blob(["onmessage=" + va.toString()], { type: "text/javascript" }))) : new Worker(x(c) ? c : "worker/worker.js", { type: "module" });
          } catch (e) {
          }
          return d;
        }
        ;
        function Q(a2) {
          if (!(this instanceof Q)) return new Q(a2);
          var b2 = a2.document || a2.doc || a2, c2;
          this.K = [];
          this.h = [];
          this.A = [];
          this.register = v();
          this.key = (c2 = b2.key || b2.id) && S(c2, this.A) || "id";
          this.m = u(a2.fastupdate);
          this.C = (c2 = b2.store) && true !== c2 && [];
          this.store = c2 && v();
          this.I = (c2 = b2.tag) && S(c2, this.A);
          this.l = c2 && v();
          this.cache = (c2 = a2.cache) && new J(c2);
          a2.cache = false;
          this.o = a2.worker;
          this.async = false;
          c2 = v();
          let d2 = b2.index || b2.field || b2;
          x(d2) && (d2 = [d2]);
          for (let e = 0, f, g; e < d2.length; e++) f = d2[e], x(f) || (g = f, f = f.field), g = C(g) ? Object.assign({}, a2, g) : a2, this.o && (c2[f] = new O(g), c2[f].o || (this.o = false)), this.o || (c2[f] = new K(g, this.register)), this.K[e] = S(f, this.A), this.h[e] = f;
          if (this.C) for (a2 = b2.store, x(a2) && (a2 = [a2]), b2 = 0; b2 < a2.length; b2++) this.C[b2] = S(a2[b2], this.A);
          this.index = c2;
        }
        function S(a2, b2) {
          const c2 = a2.split(":");
          let d2 = 0;
          for (let e = 0; e < c2.length; e++) a2 = c2[e], 0 <= a2.indexOf("[]") && (a2 = a2.substring(0, a2.length - 2)) && (b2[d2] = true), a2 && (c2[d2++] = a2);
          d2 < c2.length && (c2.length = d2);
          return 1 < d2 ? c2 : c2[0];
        }
        function T(a2, b2) {
          if (x(b2)) a2 = a2[b2];
          else for (let c2 = 0; a2 && c2 < b2.length; c2++) a2 = a2[b2[c2]];
          return a2;
        }
        function U(a2, b2, c2, d2, e) {
          a2 = a2[e];
          if (d2 === c2.length - 1) b2[e] = a2;
          else if (a2) if (a2.constructor === Array) for (b2 = b2[e] = Array(a2.length), e = 0; e < a2.length; e++) U(a2, b2, c2, d2, e);
          else b2 = b2[e] || (b2[e] = v()), e = c2[++d2], U(a2, b2, c2, d2, e);
        }
        function V(a2, b2, c2, d2, e, f, g, h) {
          if (a2 = a2[g]) if (d2 === b2.length - 1) {
            if (a2.constructor === Array) {
              if (c2[d2]) {
                for (b2 = 0; b2 < a2.length; b2++) e.add(f, a2[b2], true, true);
                return;
              }
              a2 = a2.join(" ");
            }
            e.add(f, a2, h, true);
          } else if (a2.constructor === Array) for (g = 0; g < a2.length; g++) V(a2, b2, c2, d2, e, f, g, h);
          else g = b2[++d2], V(a2, b2, c2, d2, e, f, g, h);
        }
        t = Q.prototype;
        t.add = function(a2, b2, c2) {
          C(a2) && (b2 = a2, a2 = T(b2, this.key));
          if (b2 && (a2 || 0 === a2)) {
            if (!c2 && this.register[a2]) return this.update(a2, b2);
            for (let d2 = 0, e, f; d2 < this.h.length; d2++) f = this.h[d2], e = this.K[d2], x(e) && (e = [e]), V(b2, e, this.A, 0, this.index[f], a2, e[0], c2);
            if (this.I) {
              let d2 = T(b2, this.I), e = v();
              x(d2) && (d2 = [d2]);
              for (let f = 0, g, h; f < d2.length; f++) if (g = d2[f], !e[g] && (e[g] = 1, h = this.l[g] || (this.l[g] = []), !c2 || !h.includes(a2))) {
                if (h[h.length] = a2, this.m) {
                  const k = this.register[a2] || (this.register[a2] = []);
                  k[k.length] = h;
                }
              }
            }
            if (this.store && (!c2 || !this.store[a2])) {
              let d2;
              if (this.C) {
                d2 = v();
                for (let e = 0, f; e < this.C.length; e++) f = this.C[e], x(f) ? d2[f] = b2[f] : U(b2, d2, f, 0, f[0]);
              }
              this.store[a2] = d2 || b2;
            }
          }
          return this;
        };
        t.append = function(a2, b2) {
          return this.add(a2, b2, true);
        };
        t.update = function(a2, b2) {
          return this.remove(a2).add(a2, b2);
        };
        t.remove = function(a2) {
          C(a2) && (a2 = T(a2, this.key));
          if (this.register[a2]) {
            for (var b2 = 0; b2 < this.h.length && (this.index[this.h[b2]].remove(a2, !this.o), !this.m); b2++) ;
            if (this.I && !this.m) for (let c2 in this.l) {
              b2 = this.l[c2];
              const d2 = b2.indexOf(a2);
              -1 !== d2 && (1 < b2.length ? b2.splice(d2, 1) : delete this.l[c2]);
            }
            this.store && delete this.store[a2];
            delete this.register[a2];
          }
          return this;
        };
        t.search = function(a2, b2, c2, d2) {
          c2 || (!b2 && C(a2) ? (c2 = a2, a2 = "") : C(b2) && (c2 = b2, b2 = 0));
          let e = [], f = [], g, h, k, m, n, w, q = 0;
          if (c2) if (c2.constructor === Array) k = c2, c2 = null;
          else {
            a2 = c2.query || a2;
            k = (g = c2.pluck) || c2.index || c2.field;
            m = c2.tag;
            h = this.store && c2.enrich;
            n = "and" === c2.bool;
            b2 = c2.limit || b2 || 100;
            w = c2.offset || 0;
            if (m && (x(m) && (m = [m]), !a2)) {
              for (let l = 0, p; l < m.length; l++) if (p = ya.call(this, m[l], b2, w, h)) e[e.length] = p, q++;
              return q ? e : [];
            }
            x(k) && (k = [k]);
          }
          k || (k = this.h);
          n = n && (1 < k.length || m && 1 < m.length);
          const r = !d2 && (this.o || this.async) && [];
          for (let l = 0, p, z, B; l < k.length; l++) {
            let A;
            z = k[l];
            x(z) || (A = z, z = A.field, a2 = A.query || a2, b2 = A.limit || b2);
            if (r) r[l] = this.index[z].searchAsync(a2, b2, A || c2);
            else {
              d2 ? p = d2[l] : p = this.index[z].search(a2, b2, A || c2);
              B = p && p.length;
              if (m && B) {
                const y = [];
                let H = 0;
                n && (y[0] = [p]);
                for (let X = 0, pa, R; X < m.length; X++) if (pa = m[X], B = (R = this.l[pa]) && R.length) H++, y[y.length] = n ? [R] : R;
                H && (p = n ? ma(y, b2 || 100, w || 0) : na(p, y), B = p.length);
              }
              if (B) f[q] = z, e[q++] = p;
              else if (n) return [];
            }
          }
          if (r) {
            const l = this;
            return new Promise(function(p) {
              Promise.all(r).then(function(z) {
                p(l.search(
                  a2,
                  b2,
                  c2,
                  z
                ));
              });
            });
          }
          if (!q) return [];
          if (g && (!h || !this.store)) return e[0];
          for (let l = 0, p; l < f.length; l++) {
            p = e[l];
            p.length && h && (p = za.call(this, p));
            if (g) return p;
            e[l] = { field: f[l], result: p };
          }
          return e;
        };
        function ya(a2, b2, c2, d2) {
          let e = this.l[a2], f = e && e.length - c2;
          if (f && 0 < f) {
            if (f > b2 || c2) e = e.slice(c2, c2 + b2);
            d2 && (e = za.call(this, e));
            return { tag: a2, result: e };
          }
        }
        function za(a2) {
          const b2 = Array(a2.length);
          for (let c2 = 0, d2; c2 < a2.length; c2++) d2 = a2[c2], b2[c2] = { id: d2, doc: this.store[d2] };
          return b2;
        }
        t.contain = function(a2) {
          return !!this.register[a2];
        };
        t.get = function(a2) {
          return this.store[a2];
        };
        t.set = function(a2, b2) {
          this.store[a2] = b2;
          return this;
        };
        t.searchCache = oa;
        t.export = function(a2, b2, c2, d2, e) {
          e || (e = 0);
          d2 || (d2 = 0);
          if (d2 < this.h.length) {
            const f = this.h[d2], g = this.index[f];
            b2 = this;
            setTimeout(function() {
              g.export(a2, b2, e ? f : "", d2, e++) || (d2++, e = 1, b2.export(a2, b2, f, d2, e));
            });
          } else {
            let f, g;
            switch (e) {
              case 1:
                f = "tag";
                g = this.l;
                break;
              case 2:
                f = "store";
                g = this.store;
                break;
              default:
                return;
            }
            ra(a2, this, c2, f, d2, e, g);
          }
        };
        t.import = function(a2, b2) {
          if (b2) switch (x(b2) && (b2 = JSON.parse(b2)), a2) {
            case "tag":
              this.l = b2;
              break;
            case "reg":
              this.m = false;
              this.register = b2;
              for (let d2 = 0, e; d2 < this.h.length; d2++) e = this.index[this.h[d2]], e.register = b2, e.m = false;
              break;
            case "store":
              this.store = b2;
              break;
            default:
              a2 = a2.split(".");
              const c2 = a2[0];
              a2 = a2[1];
              c2 && a2 && this.index[c2].import(a2, b2);
          }
        };
        la(Q.prototype);
        var Ba = { encode: Aa, F: false, G: "" };
        const Ca = [F("[\xE0\xE1\xE2\xE3\xE4\xE5]"), "a", F("[\xE8\xE9\xEA\xEB]"), "e", F("[\xEC\xED\xEE\xEF]"), "i", F("[\xF2\xF3\xF4\xF5\xF6\u0151]"), "o", F("[\xF9\xFA\xFB\xFC\u0171]"), "u", F("[\xFD\u0177\xFF]"), "y", F("\xF1"), "n", F("[\xE7c]"), "k", F("\xDF"), "s", F(" & "), " and "];
        function Aa(a2) {
          var b2 = a2 = "" + a2;
          b2.normalize && (b2 = b2.normalize("NFD").replace(ea, ""));
          return ca.call(this, b2.toLowerCase(), !a2.normalize && Ca);
        }
        ;
        var Ea = { encode: Da, F: false, G: "strict" };
        const Fa = /[^a-z0-9]+/, Ga = { b: "p", v: "f", w: "f", z: "s", x: "s", "\xDF": "s", d: "t", n: "m", c: "k", g: "k", j: "k", q: "k", i: "e", y: "e", u: "o" };
        function Da(a2) {
          a2 = Aa.call(this, a2).join(" ");
          const b2 = [];
          if (a2) {
            const c2 = a2.split(Fa), d2 = c2.length;
            for (let e = 0, f, g = 0; e < d2; e++) if ((a2 = c2[e]) && (!this.filter || !this.filter[a2])) {
              f = a2[0];
              let h = Ga[f] || f, k = h;
              for (let m = 1; m < a2.length; m++) {
                f = a2[m];
                const n = Ga[f] || f;
                n && n !== k && (h += n, k = n);
              }
              b2[g++] = h;
            }
          }
          return b2;
        }
        ;
        var Ia = { encode: Ha, F: false, G: "" };
        const Ja = [F("ae"), "a", F("oe"), "o", F("sh"), "s", F("th"), "t", F("ph"), "f", F("pf"), "f", F("(?![aeo])h(?![aeo])"), "", F("(?!^[aeo])h(?!^[aeo])"), ""];
        function Ha(a2, b2) {
          a2 && (a2 = Da.call(this, a2).join(" "), 2 < a2.length && (a2 = E(a2, Ja)), b2 || (1 < a2.length && (a2 = ha(a2)), a2 && (a2 = a2.split(" "))));
          return a2 || [];
        }
        ;
        var La = { encode: Ka, F: false, G: "" };
        const Ma = F("(?!\\b)[aeo]");
        function Ka(a2) {
          a2 && (a2 = Ha.call(this, a2, true), 1 < a2.length && (a2 = a2.replace(Ma, "")), 1 < a2.length && (a2 = ha(a2)), a2 && (a2 = a2.split(" ")));
          return a2 || [];
        }
        ;
        G["latin:default"] = ja;
        G["latin:simple"] = Ba;
        G["latin:balance"] = Ea;
        G["latin:advanced"] = Ia;
        G["latin:extra"] = La;
        const W = self;
        let Y;
        const Z = { Index: K, Document: Q, Worker: O, registerCharset: function(a2, b2) {
          G[a2] = b2;
        }, registerLanguage: function(a2, b2) {
          ka[a2] = b2;
        } };
        (Y = W.define) && Y.amd ? Y([], function() {
          return Z;
        }) : W.exports ? W.exports = Z : W.FlexSearch = Z;
      })(exports);
    }
  });

  // <stdin>
  var import_flexsearch = __toESM(require_flexsearch_bundle());
  var { Document } = import_flexsearch.default;
  var search = document.getElementById("search__text");
  var suggestions = document.getElementById("search__suggestions");
  if (search !== null) {
    document.addEventListener("keydown", (e) => {
      if (e.ctrlKey && e.key === "/") {
        e.preventDefault();
        search.focus();
      } else if (e.key === "Escape") {
        search.blur();
        suggestions.classList.add("search__suggestions--hidden");
      }
    });
  }
  document.addEventListener("click", (e) => {
    const clickInsideSuggestions = suggestions.contains(e.target);
    if (!clickInsideSuggestions) {
      suggestions.classList.add("search__suggestions--hidden");
    }
  });
  document.addEventListener("keydown", (e) => {
    const suggestionsHidden = suggestions.classList.contains(
      "search__suggestions--hidden"
    );
    if (suggestionsHidden) return;
    const focusableSuggestions = [...suggestions.querySelectorAll("a")];
    if (focusableSuggestions.length === 0) return;
    const currentIndex = focusableSuggestions.indexOf(document.activeElement);
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextIndex2 = currentIndex + 1 < focusableSuggestions.length ? currentIndex + 1 : currentIndex;
      focusableSuggestions[nextIndex2].focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      nextIndex = currentIndex > 0 ? currentIndex - 1 : 0;
      focusableSuggestions[nextIndex].focus();
    }
  });
  (function() {
    const index = new Document({
      tokenize: "forward",
      cache: 100,
      document: {
        id: "id",
        store: ["href", "title", "description"],
        index: ["title", "description", "content"]
      }
    });
    index.add(
      {
        id: 0,
        href: "/projects/voxdex-ai-transcription/",
        title: "AI-Powered Podcast Transcription System",
        description: "AI Auto Transcription System# Introduction# About two years ago, right as the LLM craze was really popping off, I stumbled on WhisperAI&ndash;a tool released by OpenAI that let you transcribe audio (voice-to-text). I actually uncovered it when I was looking at a way to dictate some of my personal notes in neovim (vimwiki). I found nerd-dictation [link to nerd-dictation project] which was super amazing, but didn&rsquo;t work on my macbook and died on me as linux began the march away from x11 to wayland. Nerd-dictation required some of the security&hellip;&ldquo;openness&rdquo; that X11 afforded. I switched to wayland to get something working on my Pop_OS! machine, and when I did that, I lost my ability to use nerd-dictation.\n",
        content: "AI Auto Transcription System# Introduction# About two years ago, right as the LLM craze was really popping off, I stumbled on WhisperAI&ndash;a tool released by OpenAI that let you transcribe audio (voice-to-text). I actually uncovered it when I was looking at a way to dictate some of my personal notes in neovim (vimwiki). I found nerd-dictation [link to nerd-dictation project] which was super amazing, but didn&rsquo;t work on my macbook and died on me as linux began the march away from x11 to wayland. Nerd-dictation required some of the security&hellip;&ldquo;openness&rdquo; that X11 afforded. I switched to wayland to get something working on my Pop_OS! machine, and when I did that, I lost my ability to use nerd-dictation.\nThats was around the time I heard about WhisperCPP on a TWiT podcast. It&rsquo;s a fantastic project by Georgi Gerganov, and you can find information on it here [link to ggerganov].As an aside, Georgi Gerganov is the same guy of gguf fame. A leader in AI development/AI tool development / open source. He&rsquo;s ported the OpenAI Whisper code to C++ and even added support for the Core ML cores on Apple Silicon. His implementation is the fastest I&rsquo;ve seen so far (especially when taking advantage of the ML cores on the M-series chips). When I started playing around with it I realized it could do much more than dictation. Which gave me the idea for transcribing the podcasts I listen to.\nWhy?# As an avid listener of the TWiT (This Week in Tech) network for the last 18 years 20 years, I often find myself trying to remember what someone said, how something was phrased, or &ldquo;what was it that they said about privacy regulation?&rdquo; Obviously, it&rsquo;s pretty tough to remember the episode (or even the right show), and it&rsquo;s impractical to re-listen to thousands of hours of audio. So I had the idea of transcribing the audio and video so that it&rsquo;s easily searchable text.\nI want to say I was on paternity leave when I wrote the first very kludgy verion of this tool. It consisted of a couple of poorly written python scripts. Some of which I copy and pasted from stackoverflow and various forums on the internet. It was glued together with bash scripts and cron jobs&hellip;and as you can imagine it was incredibly fragile. Every time I rebooted the machine I had to go relaunch things. I tried to automate this but it was so finicky that I often needed to ssh into the machine and do it manually.\nI could blame it on sleep deprivation but my lack of software development skill was probably the biggest culprit. It was literally hacked together in the truest sense of the word.\nv2.0# Fast forward to now. The AI hype cycle is at peak hype and billions of VC dollars have been invested in LLMs and other AI tech.\nThen here I was, letting my AI tool languish on my server, not taking advantage of the progress of the last few years.\nThere were a few reasons I decided to dust this off:\nI wanted to reorganize my server rack. I wanted to virtualize my truenas server (my old gaming machine). To do that, I needed to free up the PCI slot on my proxmox server that my old GPU was sitting it. That was the GPU I was using to do the transcripts. Due to a limitation of the motherboard on my proxmox server, I can only passthrough that PCI slot, and I need it for my HBA card to give me enough sata connections for my truenas hard drives. Ultimately, this would let me spin down that server and save a few bucks on electricity (or, lets be honest, use it for something else and not save electricity). ROCm finally doesn&rsquo;t suck butt, and I figured I could run the transcription process on my desktop now using my Radeon 6900xt. It would let me use a much larger (more accurate model) and would be faster than my macbook air or the 1070ti in the server. Which btw, I bought secondhand from my brother-in-law specifically to do the transcription work since it was so painful to use ROCm back then. I literally spent $175 to get an nvidia card to avoid the pain that was ROCm. The aforementioned fragileness of my old setup resulted in it needing more manual intervention than I had time to provide so it just languished, broken, for a few months. Part of the old system required me to manually go in and &ldquo;identify&rdquo; speakers then find/replace the &ldquo;SPEAKER_01&rdquo; with &ldquo;Leo Laporte&rdquo; etc. I knew that an LLM should be able to do this. Claude Code could, theoretically, fill in the programming skill gap that plagued my previous attempt. Technical Solution# Core Components# flowchart TD A[RSS Feeds] --> B[Audio Downloader] B --> C[Audio Storage] C --> D1[TranscriptionWhisper/WhisperX] C --> D2[Diarizationpyannote.audio] D1 --> E[Merge Segments] D2 --> E E --> F[LLM Speaker ID] F --> G[Export FormatsTXT/JSON/SRT] G --> H[File Management] Key Technologies# Transcription Engine: OpenAI Whisper Speaker Diarization: WhisperX + pyannote.audio LLM Integration: Optional GPT/Claude integration Infrastructure: Python 3.10+, AMD ROCm/NVIDIA CUDA support Unique Features# Three-Tier Transcript System# It generates three distinct versions of each transcript to serve different use cases:\n1. Raw Transcription Output# Obviously a purely raw output is nice to have but its not the most &lsquo;usable&rsquo;.\nWelcome to the Intelligent Machines podcast. Today we&#39;re diving deep into the world of artificial intelligence and machine learning. I&#39;m excited to have our guest here to discuss the latest developments in neural networks and their applications in real-world scenarios. The field has been advancing at an incredible pace, especially with the emergence of large language models and their impact on various industries. 2. Speaker-Diarized Version# The diarized version, aka the version with the speakers being differentiated, is even better.\nSPEAKER_01: Welcome to the Intelligent Machines podcast. Today we&#39;re diving deep into the world of artificial intelligence and machine learning. SPEAKER_01: I&#39;m excited to have our guest here to discuss the latest developments in neural networks and their applications in real-world scenarios. SPEAKER_02: Thanks for having me on the show. SPEAKER_01: The field has been advancing at an incredible pace, especially with the emergence of large language models and their impact on various industries. SPEAKER_02: Absolutely, and what&#39;s particularly fascinating is how these models are being integrated into everyday applications. 3. LLM-Enhanced with Real Speaker Names# This is the real piece-de-resistance. Like I said before, I use to have to go into the diarized version (like you see above) and use context clues to figure out who SPEAKER_01 is. That was a very time consuming manual task and honestly I never got around to doing it for the thousands of episodes I transcribed and diarized.\nBut this new version uses an LLM to idenitify the speakers and make the changes. This part is trickier than it seems because the diarization part isn&rsquo;t the most accurate. It can get confused and think there are more speakers than their are because of ADs or things like overlapping conversation (which happens all of the time on podcasts and real life). Pyannote can struggle distinguishing speakers in those cases. But if you prompt an LLM well enough&hellip;\nLeo Laporte: Welcome to the Intelligent Machines podcast. Today we&#39;re diving deep into the world of artificial intelligence and machine learning. Leo Laporte: I&#39;m excited to have our guest here to discuss the latest developments in neural networks and their applications in real-world scenarios. Dr. Sarah Chen: Thanks for having me on the show. Leo Laporte: The field has been advancing at an incredible pace, especially with the emergence of large language models and their impact on various industries. Dr. Sarah Chen: Absolutely, and what&#39;s particularly fascinating is how these models are being integrated into everyday applications. Automation Capabilities# RSS Feed Batch Processing# VoxDex can process multiple podcast feeds automatically by configuring RSS sources:\n# config.yaml rss_feeds: - name: &#34;TWiT This Week in Tech&#34; url: &#34;https://feeds.twit.tv/twit.xml&#34; enabled: true - name: &#34;AI Podcast&#34; url: &#34;https://feeds.example.com/ai-podcast.xml&#34; enabled: true processing: max_episodes_per_run: 5 check_interval_hours: 6 # RSS processing example def process_rss_feeds(config): for feed in config[&#39;rss_feeds&#39;]: if feed[&#39;enabled&#39;]: episodes = fetch_new_episodes(feed[&#39;url&#39;]) for episode in episodes[:config[&#39;processing&#39;][&#39;max_episodes_per_run&#39;]]: download_and_process(episode) Configurable File Retention# Automatic cleanup based on age and storage limits:\n# File retention configuration retention: audio_files: keep_days: 30 max_size_gb: 100 transcripts: keep_days: 365 backup_to_cloud: true temp_files: cleanup_immediately: true # Cleanup implementation def cleanup_old_files(): # Remove audio files older than 30 days for file in get_audio_files(): if file.age_days &gt; config.retention.audio_files.keep_days: file.delete() # Archive old transcripts to cloud storage for transcript in get_old_transcripts(): if config.retention.transcripts.backup_to_cloud: upload_to_cloud(transcript) Multiple Output Formats# Generate TXT, JSON, and SRT simultaneously:\n# Export to multiple formats def export_transcript(segments, episode_metadata): base_filename = f&#34;{episode_metadata[&#39;show&#39;]}_{episode_metadata[&#39;date&#39;]}&#34; # Plain text format with open(f&#34;{base_filename}.txt&#34;, &#34;w&#34;) as f: for segment in segments: f.write(f&#34;{segment[&#39;speaker&#39;]}: {segment[&#39;text&#39;]}\\n\\n&#34;) # JSON format with metadata json_output = { &#34;metadata&#34;: episode_metadata, &#34;segments&#34;: [ { &#34;start_time&#34;: seg[&#39;start&#39;], &#34;end_time&#34;: seg[&#39;end&#39;], &#34;speaker&#34;: seg[&#39;speaker&#39;], &#34;text&#34;: seg[&#39;text&#39;] } for seg in segments ] } with open(f&#34;{base_filename}.json&#34;, &#34;w&#34;) as f: json.dump(json_output, f, indent=2) # SRT subtitle format with open(f&#34;{base_filename}.srt&#34;, &#34;w&#34;) as f: for i, segment in enumerate(segments, 1): f.write(f&#34;{i}\\n&#34;) f.write(f&#34;{format_time(segment[&#39;start&#39;])} --&gt; {format_time(segment[&#39;end&#39;])}\\n&#34;) f.write(f&#34;{segment[&#39;speaker&#39;]}: {segment[&#39;text&#39;]}\\n\\n&#34;) Sample Outputs# TXT Format (intelligent_machines_2024-10-05.txt):\nLeo Laporte: Welcome to the Intelligent Machines podcast. Today we&#39;re diving deep into the world of artificial intelligence and machine learning. Leo Laporte: I&#39;m excited to have our guest here to discuss the latest developments in neural networks and their applications in real-world scenarios. Dr. Sarah Chen: Thanks for having me on the show. Leo Laporte: The field has been advancing at an incredible pace, especially with the emergence of large language models and their impact on various industries. Dr. Sarah Chen: Absolutely, and what&#39;s particularly fascinating is how these models are being integrated into everyday applications. JSON Format (intelligent_machines_2024-10-05.json):\n{ &#34;metadata&#34;: { &#34;show&#34;: &#34;Intelligent Machines&#34;, &#34;date&#34;: &#34;2024-10-05&#34;, &#34;episode_title&#34;: &#34;Neural Networks in Practice&#34;, &#34;duration&#34;: &#34;3600&#34;, &#34;file_size&#34;: &#34;156MB&#34; }, &#34;segments&#34;: [ { &#34;start_time&#34;: &#34;00:00:00&#34;, &#34;end_time&#34;: &#34;00:00:08&#34;, &#34;speaker&#34;: &#34;Leo Laporte&#34;, &#34;text&#34;: &#34;Welcome to the Intelligent Machines podcast. Today we&#39;re diving deep into the world of artificial intelligence and machine learning.&#34; }, { &#34;start_time&#34;: &#34;00:00:08&#34;, &#34;end_time&#34;: &#34;00:00:16&#34;, &#34;speaker&#34;: &#34;Leo Laporte&#34;, &#34;text&#34;: &#34;I&#39;m excited to have our guest here to discuss the latest developments in neural networks and their applications in real-world scenarios.&#34; }, { &#34;start_time&#34;: &#34;00:00:16&#34;, &#34;end_time&#34;: &#34;00:00:18&#34;, &#34;speaker&#34;: &#34;Dr. Sarah Chen&#34;, &#34;text&#34;: &#34;Thanks for having me on the show.&#34; }, { &#34;start_time&#34;: &#34;00:00:18&#34;, &#34;end_time&#34;: &#34;00:00:28&#34;, &#34;speaker&#34;: &#34;Leo Laporte&#34;, &#34;text&#34;: &#34;The field has been advancing at an incredible pace, especially with the emergence of large language models and their impact on various industries.&#34; }, { &#34;start_time&#34;: &#34;00:00:28&#34;, &#34;end_time&#34;: &#34;00:00:35&#34;, &#34;speaker&#34;: &#34;Dr. Sarah Chen&#34;, &#34;text&#34;: &#34;Absolutely, and what&#39;s particularly fascinating is how these models are being integrated into everyday applications.&#34; } ] } SRT Format (intelligent_machines_2024-10-05.srt):\n1 00:00:00,000 --&gt; 00:00:08,000 Leo Laporte: Welcome to the Intelligent Machines podcast. Today we&#39;re diving deep into the world of artificial intelligence and machine learning. 2 00:00:08,000 --&gt; 00:00:16,000 Leo Laporte: I&#39;m excited to have our guest here to discuss the latest developments in neural networks and their applications in real-world scenarios. 3 00:00:16,000 --&gt; 00:00:18,000 Dr. Sarah Chen: Thanks for having me on the show. 4 00:00:18,000 --&gt; 00:00:28,000 Leo Laporte: The field has been advancing at an incredible pace, especially with the emergence of large language models and their impact on various industries. 5 00:00:28,000 --&gt; 00:00:35,000 Dr. Sarah Chen: Absolutely, and what&#39;s particularly fascinating is how these models are being integrated into everyday applications. Technical Challenges &amp; Solutions# Speaker diarization accuracy: The pyannote project has made some great strides and is impressive software. There is a huge active community on huggingface.com supporting it. That said, it still struggles a bit at identifying unique speakers when 1. you dont tell it exactly how many voices it should expect (and thats not as straightforward as it seems becauase you have ads, they play clips of audio, etc.) It also struggles when people over talk which happens all the time during normal converstaion and esepcially on conversational podcasts where latency and your typical zoom lag come into play. Its good enough though, and when you combine it with an LLM you can pretty accurately identify who is saying what.\nOne thing I had to prompt the LLM with was letting it know that the same person could be SPEAKER_01 and SPEAKER_05 because of the imprecise nature of the diarization from pyannote. The LLM, initially, would only assign a name to one of those, which makes sense if you are a dumb llm, so you have to let it know that they could be the name person and to use further context clues.\nGPU optimization learnings: I have another post about getting ROCm working. It was pretty seamless to get the whisperX code working locally with my GPU. I haven&rsquo;t done much in terms of optimizing. I changed to use the largest (english only) model which my GPU can handle. There is probably room for more tuning here. For now, I dont run it often enough and only do a handful of podcasts so if this isn&rsquo;t even going to move the needle on my electric bill.\nLLM integration challenges: I wasn&rsquo;t having much luck with the smaller (cheaper) LLMs like gpt5nano. I could probably spend a little more time tuning my prompts or tweaking the sampling code to make it work better for me, but I decided to just throw the bigger model at it and call it a day. Its not too expensive at this point. I need to work out the math but its probably not much more than a small coffee at starbucks (per month).\nFile management and processing pipeline: I added some configurable features to prune the downloaded podcasts. One of the issues I ran into with my old clunky setup was running out of diskspace because I downloaded, and never deleted, ALL of the episodes on my limited VM filesytem.\n# Retention configuration for managing storage retention: # Audio files (raw downloaded episodes) audio_files: keep_days: 7 # Delete after 1 week max_size_gb: 50 # Clean oldest when storage exceeds limit # Transcript files (.txt, .json, .srt) transcripts: keep_days: 365 # Keep transcripts for 1 year backup_before_delete: true backup_location: &#34;/path/to/backup&#34; # Temporary processing files temp_files: cleanup_immediately: true keep_on_error: true # Keep temp files if processing fails # Failed processing attempts failed_downloads: retry_after_days: 3 max_retries: 3 delete_after_days: 30 Results &amp; Performance# [Your metrics on:]\nTranscription accuracy Processing time comparisons Speaker identification success rates Resource requirements Lessons Learned# [Your insights on:]\nTechnical discoveries What you&rsquo;d do differently Future improvement ideas Open Source &amp; Next Steps# GitHub repository: https://github.com/wesgould/voxdex Community contributions welcome Planned enhancements Getting started guide "
      }
    ).add(
      {
        id: 1,
        href: "/recipes/roasted-tomato-burrata-dip/",
        title: "Roasted Tomato & Burrata Dip with Garlic Crostinis",
        description: "Stoney made this during his night to cook during the OBX trip in 2025. Ripe bursted cherry tomatoes, stir in burrata or stracciatella, and scoop it all up with crispy garlic crostinis.\nIngredients# # For the dip 2 cups cherry or grape tomatoes 2 Tbsp olive oil (or enough to coat the baking dish) \xBD tsp salt (or to taste) \xBC tsp freshly ground black pepper Pinch of red pepper flakes (optional, for heat) 1\u20132 cloves garlic, minced 1 Tbsp chopped fresh parsley 1 tsp dried oregano (or 1 Tbsp fresh, chopped) 1 burrata (or equivalent amount of stracciatella / burrata filling) Handful of fresh basil leaves, torn 2 Tbsp freshly grated Parmesan (more for serving, optional) # For the garlic crostinis 1 French baguette (or similar crusty bread) 2\u20133 Tbsp butter, softened 1 clove garlic, minced Pinch of salt 1 Tbsp chopped parsley 1 Tbsp grated Parmesan (optional) Instructions# 1. Preheat &amp; prep# Preheat your oven to 425 \xB0F (220 \xB0C).\n",
        content: "Stoney made this during his night to cook during the OBX trip in 2025. Ripe bursted cherry tomatoes, stir in burrata or stracciatella, and scoop it all up with crispy garlic crostinis.\nIngredients# # For the dip 2 cups cherry or grape tomatoes 2 Tbsp olive oil (or enough to coat the baking dish) \xBD tsp salt (or to taste) \xBC tsp freshly ground black pepper Pinch of red pepper flakes (optional, for heat) 1\u20132 cloves garlic, minced 1 Tbsp chopped fresh parsley 1 tsp dried oregano (or 1 Tbsp fresh, chopped) 1 burrata (or equivalent amount of stracciatella / burrata filling) Handful of fresh basil leaves, torn 2 Tbsp freshly grated Parmesan (more for serving, optional) # For the garlic crostinis 1 French baguette (or similar crusty bread) 2\u20133 Tbsp butter, softened 1 clove garlic, minced Pinch of salt 1 Tbsp chopped parsley 1 Tbsp grated Parmesan (optional) Instructions# 1. Preheat &amp; prep# Preheat your oven to 425 \xB0F (220 \xB0C).\n2. Roast the tomatoes# Place the cherry tomatoes in a baking dish. Drizzle with olive oil, ensuring the bottom is coated. Sprinkle with salt, pepper, red pepper flakes (if using), minced garlic, parsley, and oregano. Toss gently to coat everything evenly. Bake for 20\u201330 minutes, until the tomato skins burst. If some hold their shape, gently press them with the back of a spoon to help them burst. 3. Make the crostinis# While tomatoes are roasting, slice the baguette into ~\xBC- to \xBD-inch slices. In a small bowl, mix softened butter, minced garlic, a pinch of salt, parsley, and Parmesan (if using). Spread this garlic butter mixture onto each bread slice. Arrange the slices on a baking sheet and toast for 5\u20137 minutes, or until golden brown and crunchy. You can do this simultaneously with the tomatoes if your oven has space. 4. Assemble and serve# When the tomatoes are done, remove the baking dish from the oven. Immediately top with torn basil, grated Parmesan, and the burrata (or burrata filling). Gently stir everything so the warm tomatoes mingle with the creamy cheese. Transfer to a serving bowl or keep in the baking dish. Serve hot, alongside the garlic crostinis. Tips &amp; notes# Use very ripe tomatoes\u2014they&rsquo;ll burst more easily and release more flavor. If your burrata is whole, you can cut it open and stir in the creamy center, or just place the whole ball on top and break it when serving. For extra garlic flavor, rub a toasted crostini with a raw cut garlic clove. For more heat, increase red pepper flakes or drizzle with spicy olive oil just before serving. "
      }
    ).add(
      {
        id: 2,
        href: "/blog/shortcode-examples/",
        title: "Shortcode Examples",
        description: "Testing the new shortcodes implementation",
        content: "Shortcode Examples# This page demonstrates the newly implemented shortcodes.\nAdmonition Shortcodes# Note# Important Note This is a note admonition. It&rsquo;s useful for highlighting important information that readers should pay attention to. Info# Information This is an info admonition. Use this for general information that provides context or additional details. Tip# Pro Tip This is a tip admonition. Share helpful tips and tricks with your readers using this style. Success# Great Success This is a success admonition. Use this to highlight positive outcomes or successful implementations. Warning# Warning This is a warning admonition. Use this to alert readers about potential issues or things to be careful about. Error# Error This is an error admonition. Use this to highlight critical issues or problems that need attention. Example# Example Usage This is an example admonition. Use this to showcase code examples or demonstrate concepts.\necho &#34;Hello, World!&#34; Center Quote# The best way to predict the future is to invent it. Mermaid Diagrams# Flowchart# graph LR; A[Hard edge] -->|Link text| B(Round edge) B --> C{Decision} C -->|One| D[Result one] C -->|Two| E[Result two] Sequence Diagram# sequenceDiagram participant Alice participant Bob Alice->>John: Hello John, how are you? loop Healthcheck John->>John: Fight against hypochondria end Note right of John: Rational thoughts prevail! John-->>Alice: Great! John->>Bob: How about you? Bob-->>John: Jolly good! State Diagram# stateDiagram-v2 [*] --> Still Still --> [*] Still --> Moving Moving --> Still Moving --> Crash Crash --> [*] Class Diagram# classDiagram Animal <|-- Duck Animal <|-- Fish Animal <|-- Zebra Animal : +int age Animal : +String gender Animal: +isMammal() Animal: +mate() class Duck{ +String beakColor +swim() +quack() } class Fish{ -int sizeInFeet -canEat() } class Zebra{ +bool is_wild +run() } "
      }
    ).add(
      {
        id: 3,
        href: "/blog/open-webui/",
        title: "Using open-webui as a local ChatGPT replacement",
        description: "Using open-webui# I set up a local LLM using ROCm on my desktop in my last post. So I have the LLM running locally, but its pretty clunky and as a paying user of ChatGPT, I want that cleaner UI/UX. Enter open-webui. This is exactly what I was looking for as a front-end for the ollama server I set up.\nI decided to go with the Docker setup.\n",
        content: "Using open-webui# I set up a local LLM using ROCm on my desktop in my last post. So I have the LLM running locally, but its pretty clunky and as a paying user of ChatGPT, I want that cleaner UI/UX. Enter open-webui. This is exactly what I was looking for as a front-end for the ollama server I set up.\nI decided to go with the Docker setup.\nSince I fairly recently refreshed my install for Pop, I realized I didn&rsquo;t have Docker installed on my machine anymore. Setting up Docker on Pop is straightforward:\nInstall Docker# # Add Docker&#39;s official GPG key: sudo apt-get update sudo apt-get install ca-certificates curl sudo install -m 0755 -d /etc/apt/keyrings sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc sudo chmod a+r /etc/apt/keyrings/docker.asc # Add the repository to Apt sources: echo \\ &#34;deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \\ $(. /etc/os-release &amp;&amp; echo &#34;$VERSION_CODENAME&#34;) stable&#34; | \\ sudo tee /etc/apt/sources.list.d/docker.list &gt; /dev/null sudo apt-get update sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin You can check that Docker is installed by running docker --version. I prefer Docker Compose when I run containers.\nDocker Compose Configuration# This is what my compose file looks like:\nversion: &#39;3.8&#39; # Specify the version of Docker Compose services: open-webui: image: ghcr.io/open-webui/open-webui:main container_name: open-webui environment: - OLLAMA_BASE_URL=http://127.0.0.1:11434 volumes: - /location/on/host/tosavedata:/app/backend/data network_mode: host restart: always At this point, when you go to localhost:8080 you will see the web front end.\nThe Interface# The service makes you create an account. Its all local. Nothing is sent anywhere. There is a flag you can set when you spin up your docker container, but I decided to leave it this way since I may eventually set this up so my wife can use it too.\nThe interface is very familiar if you&rsquo;ve used ChatGPT before. Up at the top you can select your model to use. Its worth setting a default. It doesn&rsquo;t make you set a default, but it gets pretty annoying to open a new chat and have to manually pick a model each time. In my opinion, they should have it select a default on first use, but its not a huge deal at the end of the day.\nAnd that&rsquo;s really it. Now you have a ChatGPT like UX that lets you quickly switch between models, remembers your chats if you need to go back and reference them, and its all running locally.\nI plan on running LM Studio as well. Its a little more conducive to &lsquo;playing&rsquo; with the models and prompts and it gives easier access to a lot of the uncensored models that don&rsquo;t have the nanny protections built in. I also plan on setting up a RAG (Retrieval Augmented Generation)with some of my own data to see how useful I can make all of this.\n"
      }
    ).add(
      {
        id: 4,
        href: "/blog/rocm-on-pop/",
        title: "Running an LLM locally on Pop!_OS with ROCm support",
        description: "Running ROCm on Pop!# This has gotten sooo much easier than when I tried to set this up 2 years ago. ROCm has come a long way, but the support and tooling has advanced as well. Now you don&rsquo;t have to jump through tons of hoops to get AI libraries and software to work with ROCm. The last time I tried this, I needed to add ubuntu repos, edit my /etc/os-release file to pretend I was using ubuntu&quot;, and do a rain-dance to get my Raedeon 6900xt in a usable state.\n",
        content: "Running ROCm on Pop!# This has gotten sooo much easier than when I tried to set this up 2 years ago. ROCm has come a long way, but the support and tooling has advanced as well. Now you don&rsquo;t have to jump through tons of hoops to get AI libraries and software to work with ROCm. The last time I tried this, I needed to add ubuntu repos, edit my /etc/os-release file to pretend I was using ubuntu&quot;, and do a rain-dance to get my Raedeon 6900xt in a usable state.\nThen once that was done, you realize that none of the software and libraries incorporated ROCm support and get really sad that you sold your Nvidia GFX card because &ldquo;radeon works better on linux&rdquo;. Basically, 2 years ago, getting ROCm setup was a pain in the ass and your only reward was buggy or nonfunctioning software since the AI/ML world is built on CUDA. Now it&rsquo;s much better with ROCm supporting CUDA and/or most of the libraries incorporating ROCm. Things like pytorch now support AMD ROCm natively.\nGetting ROCm installed on Pop!_OS has been simplified to copying and pasting some commands:# wget https://repo.radeon.com/rocm/rocm.gpg.key -O - | gpg --dearmor | sudo tee /etc/apt/keyrings/rocm.gpg &gt; /dev/null echo &#34;deb [arch=amd64 signed-by=/etc/apt/keyrings/rocm.gpg] https://repo.radeon.com/rocm/apt/6.1 jammy main&#34; | sudo tee --append /etc/apt/sources.list.d/rocm.list echo -e &#39;Package: *\\nPin: release o=repo.radeon.com\\nPin-Priority: 600&#39; | sudo tee /etc/apt/preferences.d/rocm-pin-600 Then update and install:\nsudo apt update &amp;&amp; sudo apt install rocm Add user to the &lsquo;render&rsquo; group so your user profile has permission to use it.\nsudo usermod -a -G render $USER You can confirm it all works with:\nrocminfo Installing the actual language models:# Since we have ROCm installed and working properly, let&rsquo;s install a local LLM. I decided to use Ollama, which is Meta&rsquo;s open source model. Ollama.ai actually has a script that helps get it all up-and-running quickly. They even have a Linux version.\nI hate that this has become a common practice in the *nix community, because it&rsquo;s such a huge security risk, but they offer a script you can run if you copy and paste this command:\ncurl -fsSL https://ollama.com/install.sh | sh Only do this if you have reviewed the script and/or can REALLY trust the source. You are downloading a script from the internet and piping it into your shell to run.\nThere are manual steps here, though, that you can follow if you don&rsquo;t want to use the script: https://github.com/ollama/ollama/blob/main/docs/linux.md\nI ran the script (after I reviewed it!). If you&rsquo;ve done everything properly, you should be able to type:\nollama run llama3 The first time you run this it will download llama3, which can take a bit, but it will drop you into a prompt. Where you can talk to it like you would ChatGPT or any other LLM.\nAnd thats that! A working LLM on Pop!_OS using ROCm on your Radeon GFX card! The next step is adding a more user friendly, ChatGPT-like interface for it. This way you can discover and switch models easily, save your history, and easily set system prompts and your own guardrails&ndash;all locally, and privately. That will be on the next post when I have some time to tinker with it.\n"
      }
    ).add(
      {
        id: 5,
        href: "/blog/pop-refresh/",
        title: "Pop Refresh",
        description: "Pulled the trigger on a Pop_OS refresh# I&rsquo;ve been having an issue with Apex Legends. It&rsquo;s gotten progressively worse of the last few months to the point where it just doesn&rsquo;t work anymore. Thats the story for another blog post but I decided to go &ldquo;nuclear&rdquo; and do a pop-refresh https://support.system76.com/articles/pop-recovery\nI figured it wouldn&rsquo;t be a bad idea to clear out all of those config tweaks, orphaned programs, and all of that other stuff that, over years of use, builds up on your system.\n",
        content: "Pulled the trigger on a Pop_OS refresh# I&rsquo;ve been having an issue with Apex Legends. It&rsquo;s gotten progressively worse of the last few months to the point where it just doesn&rsquo;t work anymore. Thats the story for another blog post but I decided to go &ldquo;nuclear&rdquo; and do a pop-refresh https://support.system76.com/articles/pop-recovery\nI figured it wouldn&rsquo;t be a bad idea to clear out all of those config tweaks, orphaned programs, and all of that other stuff that, over years of use, builds up on your system.\nThe Pop Refresh Instructions Didn&rsquo;t Work For Me Because# The pop refresh instructions didn&rsquo;t work for me because:\nThe recovery partition was b0rked\nI had to create a live usb and do the refresh from there. Nothing I did could fix the recovery partition and it would just boot my into busybox initramfs where I couldn&rsquo;t do anything. It was a little disconcerting at first and a little panic inducing because you dont know wtf happened or if your data just got all screwed. I kept reminding myself I have several backups so if I had to start from scratch I could.\nBut, with my trusty live USB, I was able to execute the &ldquo;refresh&rdquo; install.\nWhat none of the instructions tell you\nWhat none of the instructions tell you is that when it logs back in you have to create a new account as if you are starting from scratch. Once you do that, you have to edit a users file because they make your old account a &ldquo;system account&rdquo;, so it wont show up in the gdm login page. Once you do that it shows up along with the new user you just created. Thankfully, everything is where you left it.\nAll non-system apps are gone\nAll non-system apps are gone. They warn you about this but what they dont tell you is that flatpaks dont go anywhere. And that makes sense because they are saved in your home folder and nothing in there was touched, but its worth nothing that any flatpaks will still be there and still function.\nSignal though kinda wigged out on me\nSignal though kinda wigged out on me. I ended up making a backup of the flatpak structure then reinstalling it. Obviously it doesn&rsquo;t retain the history, but I found I could copy and paste the /.var/app/org.signal.Signal/config/Signal from the backup to the new installs config directory and it worked&ndash;it pulled in all of my old messages etc. Note: I had already logged in and got Signal up and running before I moved the data from the backup. I named it the same thing as before (but I am not sure if that matters). This is probably worth a post by itself tbh.\nNeovim was a bit of a pain to reinstall\nNeovim was a bit of a pain to reinstall. I dont recall how I had installed it before but I reinstalled from source this time which changed the versions and broke my config. I was using a fairly modified kickstart.nvim config so I had to work through a few issues before I got it up and running again.\nSyncthing was super easy to reinstall\nSyncthing was super easy to reinstall actually once I remembered the steps. After I installed the .deb I went to the admin url and it just had all of my settings&ndash;which was nice.\nTailscale seems to have installed pretty seamlessly\nTailscale seems to have isntalled pretty seamlessly. It did create another version of my machine. So I had to manually remove the old host info, but I made sure I grabbed the acl settings from it beforehand. Hopefully I didn&rsquo;t miss anything but time will tell and its all fixable.\nPrograms I Had to Reinstall:# Neovim compile pre-requisites htop neofetch openssh-server - it seems like the known-hosts file will need to be updated for everything that connects to it. makes sense, but a little annoying. ripgrep zsh fzf syncthing tailscale dejadup - I had the option to install the flatpak, but because I didn&rsquo;t still have it on my system, I knew I installed it via .deb previously and I wanted to see if it would just use my config settings (that should still exist)&ndash; which it did. I guess in the future I could move to the flatpak version and it would remain installed during a refresh. steam &ndash; I used the deb. I&rsquo;ve bounced around from flatpak to deb multiple times. I gave the deb a shot because I have been having plenty of issues with apex on steam and getting banned from The Finals because ??? I&rsquo;m sure there will be plenty more programs I&rsquo;ll realize I need as I use my computer, but it&rsquo;s nice to start with a clean slate (edit: like all of the pre-requisites to run a hugo site like hugo, go, git, etc).\n"
      }
    ).add(
      {
        id: 6,
        href: "/recipes/stuffed-peppers/",
        title: "Stuffed Peppers",
        description: "These stuffed peppers are filled with a hearty mix of rice, ground meat, and tomato, then baked until the peppers are tender and everything comes together in one simple dish.\n",
        content: "These stuffed peppers are filled with a hearty mix of rice, ground meat, and tomato, then baked until the peppers are tender and everything comes together in one simple dish.\nIngredients# 3 bell peppers 2 Tbsp cooking oil, divided 1 lb Italian sausage 1 yellow onion, diced 3 garlic cloves, minced 1 tsp Italian seasoning 1/2 tsp garlic powder 1 1/4 tsp salt, divided 1/4 tsp freshly cracked black pepper 1 cup marinara sauce 1/2 cup uncooked long grain white rice 3/4 cup chicken broth 1 cup shredded mozzarella Instructions# Preheat the oven to 350\xB0F. Wash and dry each bell pepper, then cut the bell peppers in half horizontally. Make sure to cut them as evenly as possible. Using a sharp paring knife carefully cut and remove the stem from the top half of each bell pepper (see picture below). It&rsquo;s okay if there is a small hole left where the stem was removed. Prepare the bell peppers. Place each bell pepper half in a 9\xD713-inch casserole dish. Brush the bell peppers with 1 Tbsp oil and season with \xBC tsp of salt and \xBC tsp cracked black pepper. Bake the bell peppers in a preheated oven for 20 minutes to soften. After 20 minutes remove the bell peppers from the oven and set aside. Make the filling. While the bell peppers are baking, heat a large skillet over medium heat and add 1 Tbsp of oil. Brown the Italian sausage. Add the vegetables. Once the sausage has browned, add the diced onion and minced garlic to the skillet. Continue to saut\xE9 over medium heat until the onion is translucent and the garlic is fragrant. Combine remaining ingredients. Next add the uncooked rice, marinara sauce, Italian seasoning, garlic powder, 1 tsp of salt, and chicken broth to the skillet. Stir to combine. Cook the filling. Place a lid on the skillet, turn the heat up to medium-high, and allow the mixture to come to a full boil. Once boiling, immediately reduce the heat to medium-low and allow the mixture to simmer, without lifting the lid or stirring, for 20 minutes. After 20 minutes, turn the heat off and let it rest, without lifting the lid, for an additional 5 minutes. Fill the bell peppers. Next remove the lid, fluff the rice, and stir the mixture again to redistribute the ingredients. Begin to fill each bell pepper with the meat filling. Stuff as much filling as you can into each, filling them all the way to the top. Add cheese and bake. Top each bell pepper evenly with shredded mozzarella cheese. Loosely place some tented aluminum foil over the top of the casserole dish and bake for 15 minutes. After 15 minutes the bell peppers should be tender but not mushy. Broil the bell peppers. Now remove the foil and turn the heat on to broil. Broil the stuffed bell peppers for 2-3 minutes or just until the cheese gets a little brown on top. Be sure to watch the bell peppers closely at this step to prevent the cheese from over browning. "
      }
    ).add(
      {
        id: 7,
        href: "/blog/migration-pt2/",
        title: "Migration Pt2",
        description: "Updating DNS Records# This was a fairly straightforward process:\nLog into GitHub &gt; Go to your public repo &gt; Settings &gt; Pages: and enter your domain in the Custom Domain section Add your domain name www.wesgould.com Log into your DNS provider. Delete CNAME / A-RECORDs for www.wesgould.com and wesgould.com to avoid conflicts with the new records. ADD CNAME RECORD for www.wesgould.com. Add A-RECORD for wesgould.com. To create A records, point your apex domain to the IP addresses for GitHub Pages: - 185.199.108.153 - 185.199.109.153 - 185.199.110.153 - 185.199.111.153 ",
        content: "Updating DNS Records# This was a fairly straightforward process:\nLog into GitHub &gt; Go to your public repo &gt; Settings &gt; Pages: and enter your domain in the Custom Domain section Add your domain name www.wesgould.com Log into your DNS provider. Delete CNAME / A-RECORDs for www.wesgould.com and wesgould.com to avoid conflicts with the new records. ADD CNAME RECORD for www.wesgould.com. Add A-RECORD for wesgould.com. To create A records, point your apex domain to the IP addresses for GitHub Pages: - 185.199.108.153 - 185.199.109.153 - 185.199.110.153 - 185.199.111.153 To create AAAA records, point your apex domain to the IP addresses for GitHub Pages: - 2606:50c0:8000::153 - 2606:50c0:8001::153 - 2606:50c0:8002::153 - 2606:50c0:8003::153 Be impatient because &ldquo;it didn&rsquo;t work!&rdquo; (immediately). But it&rsquo;s DNS propagation and it&rsquo;s slow. I understand why it takes a while, and theoretically it could take days to fully propagate, but it also seems crazy that it&rsquo;s not instantaneous in 2023. That said, it probably took me longer to complain here than it did to propagate. Try accessing the site. GitHub may report an error at first under where you entered your custom domain, but check again, and it should work. wesgould.com is improperly configured Domain does not resolve to the GitHub Pages server. For more information, see documentation (NotServedByPagesError). Make sure you check the HTTPS box. Do one last terminal dig to see the changes like a nerd. Bug your wife and friends to see if they can get to your site. Pretend they are as excited as you are even though &ldquo;Okay now what&rdquo; is about all you&rsquo;ll get from them. That&rsquo;s an exact quote from my wife. "
      }
    ).add(
      {
        id: 8,
        href: "/recipes/homebakes/",
        title: "Homebakes",
        description: "Home Bakes# Family recipe from Oma passed down.\nIngredients# 2 cups Sugar 4 Tbls. Cocoa 1 stick Butter \xBD cup Milk \xBD cup Peanut Butter 2 \xBD cups 1 Minute Oatmeal Directions:# 1. Lay down two strips of waxed paper. (Foil can also be used in a pinch.)\n2. In a large saucepan, combine sugar and cocoa. Stir until well blended.\n",
        content: "Home Bakes# Family recipe from Oma passed down.\nIngredients# 2 cups Sugar 4 Tbls. Cocoa 1 stick Butter \xBD cup Milk \xBD cup Peanut Butter 2 \xBD cups 1 Minute Oatmeal Directions:# 1. Lay down two strips of waxed paper. (Foil can also be used in a pinch.)\n2. In a large saucepan, combine sugar and cocoa. Stir until well blended.\n3. Add milk and stir. Then add a stick of butter.\n4. Place over medium heat and cook until the mixture comes to a complete rolling boil, stirring often. Boil for 2 minutes (use a timer or watch the clock).\n5. Remove from the heat source.\n6. Add peanut butter and stir until it is all melted.\n7. Add oats and stir.\n8. Using a tablespoon, immediately spoon the mixture onto wax paper, working quickly.\n9. Allow the cookies to cool; they will set as they cool.\n"
      }
    ).add(
      {
        id: 9,
        href: "/blog/migrating-to-hugo/",
        title: "Migrating to Hugo",
        description: "It&rsquo;s been an&hellip;adventure.\nWhy Switch from Publii to Hugo?# I am switching from Publii to Hugo because I wanted to take advantage of the text notes I was already taking with Vimwiki for my various projects. The Publii interface was nice, but I&rsquo;m already writing notes in a format that doesn&rsquo;t require me to use their WYSIWYG editor. I know that seems lazy, but it&rsquo;s an extra step that caused just enough friction that I wouldn&rsquo;t update the blog.\n",
        content: "It&rsquo;s been an&hellip;adventure.\nWhy Switch from Publii to Hugo?# I am switching from Publii to Hugo because I wanted to take advantage of the text notes I was already taking with Vimwiki for my various projects. The Publii interface was nice, but I&rsquo;m already writing notes in a format that doesn&rsquo;t require me to use their WYSIWYG editor. I know that seems lazy, but it&rsquo;s an extra step that caused just enough friction that I wouldn&rsquo;t update the blog.\nI picked Hugo because it seemed simple, used text files vs. databases, etc., and honestly, I found a sick Gruvbox based theme that I liked. Gruvbox is the one true color palette.\nWorking through the kinks# Setting it up was actually really easy. I got it all working locally in about an hour, but when I went to deploy it to the S3 bucket, it just didn&rsquo;t work. I discovered that AWS S3 buckets don&rsquo;t like &ldquo;pretty URLs&rdquo;. In other words, S3 buckets need the URL with the &ldquo;.html&rdquo; at the end, or it throws an error.\nThe fix is using &ldquo;ugly URLs&rdquo;. This argument, added to the Hugo config.toml, should add the .html to the end of all of the URLs. It does that, but it also provides the ENTIRE URL. So, if you clicked the link to the &lsquo;blog&rsquo;, instead of going to wesgould.com/blog.html, it would go to wesgould.com/www.wesgould.com/blog.html. So either Hugo has a bug in it, or the way my particular theme is set up, that ALSO didn&rsquo;t work. After fighting it for entirely too long, I decided that I didn&rsquo;t want to recode the entire theme. I&rsquo;d just move from AWS to GitHub pages&ndash;which does support prettyURLs.\nIt seemed simple and would save me $0.50 a month (since getting TLS certs requires CloudFront, which costs the exorbitant $0.50/mo). It also aligned with the Git workflow I was already using.\nI read a couple of tutorials but ultimately ended up following this amazing YouTube video. It walks you through creating a &ldquo;working code&rdquo; repository and a public repository where you can publish your static site content.\nHooray! This will be easy peasy!\nBut, I ran into another problem and beat my head against the wall. The site deployed and seemed to work fine, except for the Blog URL. It was directing me to a weird readme. The source of the page referenced Jekyll and SEO optimizations. I grepped for those strings in my code and couldn&rsquo;t find them. Long story short, the culprit was a &ldquo;gh-pages&rdquo; branch of code in my website repo. Having a gh-pages branch (designed for Jekyll) in your repo tells GitHub to kick off an automated workflow to deploy a static site. Cool.\nI&rsquo;d started to follow this tutorial before I found that YouTube video. So, I had created a gh-pages branch and totally forgot about it. Apparently, that magical branch automatically injects stuff into your code/site as it&rsquo;s updated\u2014and in my case, broke the &ldquo;blog&rdquo; links. Deleting that branch fixed all of the problems.\nIt&rsquo;s working now, and I am looking forward to tuning it. The only thing I don&rsquo;t like is that it, probably correctly, follows the system setting for light vs. dark mode, even though I&rsquo;ve set the default to dark. Light mode Gruvbox is gross. I might try to fix it and submit a PR to the theme editor. I&rsquo;ve seen other themes that let users choose the system, light, or dark.\nThe last thing I need to do is clean up DNS so my actual domain displays this instead of my broken S3 version.\n"
      }
    ).add(
      {
        id: 10,
        href: "/projects/creating-nfs-shares/",
        title: "Creating NFS Shares",
        description: "Creating an NFS share# If you are trying to share between *nix systems, the Network File Servers (NFS) are really easy to set up. Note: If you are planning on sharing with Windows machines, SMB/Samba is a better option.\nIt should also be noted that NFS doesn&rsquo;t restrict, by default, to individual users. It limits to IPs and IP ranges&ndash;which makes it ideal for secure networks, but less-than-ideal for non-secure / public networks.\n",
        content: "Creating an NFS share# If you are trying to share between *nix systems, the Network File Servers (NFS) are really easy to set up. Note: If you are planning on sharing with Windows machines, SMB/Samba is a better option.\nIt should also be noted that NFS doesn&rsquo;t restrict, by default, to individual users. It limits to IPs and IP ranges&ndash;which makes it ideal for secure networks, but less-than-ideal for non-secure / public networks.\nIt&rsquo;s pretty straight forward (on debian/apt bases distributions):\nInstalling the NFS server# sudo apt-get update &amp;&amp; sudo apt-get install nfs-kernel-server Make the directory you would like to share. This directory can go anywhere but I think standard location is in the /mnt/ directory.\nsudo mkdir -p /mnt/your-directory-to-share This (below) changes the permissions to let all of the client machines access to the directory. You can change the permissions as well but for now I left it\nsudo chown -R nobody:nogroup /mnt/your-directory-to-share` Give the clients read,write, and execute permissions as well:\nsudo chmod -R 777 /mnt/your-directory-to-share` At this point your nfs-server is installed (not active) and your shared folder is setup. Now you need to grant access to the NFS share. To do that you have to edit the &rsquo;exports&rsquo; file&ndash;which is found at /etc/exports.\nsudo vim /etc/exports /mnt/your-directory-to-share &lt;ipaddress of the client&gt;(rw,sync,no_subtree_check) If you want to add specific IPs you have to create a new line for each of them. However, if you wanted to do an entire subnet/ip range you can write something like this: 192.168.1.0/24 (which would share 192.168.1.1-255)\nrw = read/write ; sync = means changes have to be written to disk before they are applied ; no_subtree_check = means what it says. Apparently, subtree checking causes more problems than its worth, so most people recommend using this flag to turn it off.\nAccording the NFS man pages and tutorials I found you are supposed to run the following in this order:\nsudo exportfs -a sudo systemctl restart nfs-kernel-server This threw an error for me. I ran them a second time and it seems to work. I think you have to have the nfs-kernel-server running before you can do sudo exportfs -a. When you run the restart command it actually starts it for the first time, then you can follow the steps properly.\nIf it was up to me, I think it should be:\nsudo systemctl start nfs-kernel-server sudo exportfs -a sudo systemctl restart nfs-kernel-server Connect your client# So now you have the server serving up the shared drive. Now you need to connect to it.\nOn your laptop/pc/whatever is connecting to the NFS server you need to install the NFS client and mount the drive.\nsudo apt-get install nfs-common Make a directory/mount point for this. Again, this can be anywhere. If you wanted it to be in your home folder it can be, but we&rsquo;ll stick with /mnt/nfsshare\nsudo mkdir -p /mnt/nfsshare Then you mount it:\nsudo mount &lt;ip-of-NFS-server&gt;:/mnt/your-directory-to-share /mnt/nfsshare And thats it. When you navigate to /mnt/nfsshare on your client machine you will see all of the contents of the nfs drive. Which at this point would be empty.\nIf you want to mount it permanently, just edit your /etc/fstab file by adding a line at the end:\nip-of-NFS-server&gt;:/mnt/your-directory-to-share /mnt/nfsshare nfs defaults 0 0 This article was updated on October 17, 2021\n"
      }
    ).add(
      {
        id: 11,
        href: "/recipes/enchilada-casserole/",
        title: "Enchilada Casserole",
        description: "One of Mom\u2019s favorite recipes from Kris H. &amp; Robin K.\nIngredients# 2 cups grated cheddar cheese 1/2 cup finely chopped green onion 2 cans cream of chicken soup 1 cup sour cream 1 can chopped green chilies 1/2 tsp salt 2 cans chicken (all white meat) OR 4 chicken breasts, cooked and chopped 12 corn tortillas, hand shredded Important Ingredient Note Use Chopped Green Chilies from the Mexican Food section - these come in very small cans. DO NOT GET FIRE-ROASTED versions! The cans look almost identical but the taste is completely different. Chicken Cooking Tip Cook raw chicken breasts by placing in a sauce pan, just cover with water, and bring to boil. Turn heat to low and simmer for 30 minutes to 1 hour until no pink remains in center. Remove chicken, cool, and chop into bite-sized pieces. This keeps the meat tender and moist. Instructions# Preheat oven to 350\xB0F.\n",
        content: "One of Mom\u2019s favorite recipes from Kris H. &amp; Robin K.\nIngredients# 2 cups grated cheddar cheese 1/2 cup finely chopped green onion 2 cans cream of chicken soup 1 cup sour cream 1 can chopped green chilies 1/2 tsp salt 2 cans chicken (all white meat) OR 4 chicken breasts, cooked and chopped 12 corn tortillas, hand shredded Important Ingredient Note Use Chopped Green Chilies from the Mexican Food section - these come in very small cans. DO NOT GET FIRE-ROASTED versions! The cans look almost identical but the taste is completely different. Chicken Cooking Tip Cook raw chicken breasts by placing in a sauce pan, just cover with water, and bring to boil. Turn heat to low and simmer for 30 minutes to 1 hour until no pink remains in center. Remove chicken, cool, and chop into bite-sized pieces. This keeps the meat tender and moist. Instructions# Preheat oven to 350\xB0F.\nPrepare the filling. Mix in a large sauce pan the chopped cooked chicken breasts, cream of chicken soup, sour cream, and green chilies. Stir until blended over low heat.\nCombine ingredients. Remove from heat and add cheddar cheese, green onion, and tortillas. Add salt and pepper to taste.\nAssemble casserole. Place all ingredients in a 9&quot; x 13&quot; casserole dish and top lightly with grated cheese.\nBake the casserole. Bake for 20 to 30 minutes at 350\xB0F until bubbling.\nServing Suggestion This casserole is delicious on its own or served with Tostitos for extra crunch! "
      }
    ).add(
      {
        id: 12,
        href: "/recipes/cincinatti-chili/",
        title: "Cincinatti Chili",
        description: "Ingredients# # For the chili 2 pounds ground beef (80:20 is good; 90:10 works as well and will obviously be less fatty) 1 6-ounce can tomato paste 4 cups water 1 (8-ounce) can tomato sauce 1 large onion, minced 6 cloves garlic, minced (pre-minced in the jar is fine) 3 tablespoons chili powder 1 teaspoon cumin 1 teaspoon cinnamon 3/4 teaspoon ground allspice 1/4 teaspoon ground cloves 1/2 teaspoon cayenne 2 teaspoons kosher salt 2 tablespoons Worcestershire sauce TIP: Measure all of your ingredients first. I usually set all of the spices on my left with a small bowl in front of me. As I measure and put each ingredient into the bowl, I move the spice bottle to the right side so I know I&rsquo;ve added it. It&rsquo;s really easy to forget which spices you&rsquo;ve measured out!\n",
        content: "Ingredients# # For the chili 2 pounds ground beef (80:20 is good; 90:10 works as well and will obviously be less fatty) 1 6-ounce can tomato paste 4 cups water 1 (8-ounce) can tomato sauce 1 large onion, minced 6 cloves garlic, minced (pre-minced in the jar is fine) 3 tablespoons chili powder 1 teaspoon cumin 1 teaspoon cinnamon 3/4 teaspoon ground allspice 1/4 teaspoon ground cloves 1/2 teaspoon cayenne 2 teaspoons kosher salt 2 tablespoons Worcestershire sauce TIP: Measure all of your ingredients first. I usually set all of the spices on my left with a small bowl in front of me. As I measure and put each ingredient into the bowl, I move the spice bottle to the right side so I know I&rsquo;ve added it. It&rsquo;s really easy to forget which spices you&rsquo;ve measured out!\nDirections# Cook the tomato paste: Heat a large, heavy-bottomed pot or Dutch oven over medium-high heat. Add the tomato paste to the dry pot and cook, constantly scraping the bottom with a wooden spoon or silicone spatula, until the tomato smells rich and toasty and you start to see browned (not burned) patches in the bottom of the pot. This should take 1 to 3 minutes.\nCombine the ingredients in a pot: Remove the pot from heat and add the ground beef and water. Mix them together into a sludge. It will not look pretty, but press on. There&rsquo;s a method to this madness. Return to medium-high heat and bring to a simmer, stirring all the while, so the sludge breaks up into a mealy paste. Add all the remaining ingredients.\nSimmer gently, uncovered, for 2 to 3 hours: Stir the chili often. You want the volume to reduce a bit. If it starts to lose too much water and is getting too thick, reduce the heat and cover with a lid&ndash;leaving just a bit for some steam to escape. It will be ready in an hour, but the longer you let it simmer the richer the flavor will be.\n"
      }
    ).add(
      {
        id: 13,
        href: "/blog/embed-video-files/",
        title: "Embed Video Files",
        description: "Use the video shortcode to embed your video files from Hugo Page Resources.\n",
        content: "Use the video shortcode to embed your video files from Hugo Page Resources.\nWith a page bundle looking like the following:\nembed-videos/ |-- index.md |-- my-video.jpg |-- my-video.mp4 |-- my-video.webm You can embed my-video like this:\n{{&lt; video src=&#34;my-video&#34; autoplay=&#34;true&#34; controls=&#34;false&#34; loop=&#34;true&#34; &gt;}} The shortcode looks for media files matching the filename my-video*. For each video MIME type file, a &lt;source&gt; element is added. The first image MIME type file is used as poster (thumbnail). It will render the following HTML:\n&lt;video autoplay loop poster=&#34;/blog/embed-videos/my-video.jpg&#34; width=&#34;100%&#34; playsinline &gt; &lt;source src=&#34;/blog/embed-videos/my-video.mp4&#34; type=&#34;video/mp4&#34; /&gt; &lt;source src=&#34;/blog/embed-videos/my-video.webm&#34; type=&#34;video/webm&#34; /&gt; &lt;/video&gt; You can set a Markdown caption, wrapping the &lt;video&gt; inside a &lt;figure&gt;.\nAdditionally, the shortcode allows you to set the following attributes:\nAttribute Default autoplay false controls true height loop false muted true preload width 100% playsinline true Learn more about the &lt;video&gt; attributes here.\n"
      }
    ).add(
      {
        id: 14,
        href: "/blog/image-optimization/",
        title: "Image Optimization",
        description: "The theme optimizes images by default with a custom Hugo&rsquo;s markdown render hook:\nThe theme creates resized versions for each image, ranging from 100 to 700 pixels wide. It generates WebP versions for each size if the original image format isn&rsquo;t WebP. The theme keeps the original file format as a fallback for browsers that don&rsquo;t support the WebP format. Images in SVG format are embedded as-is. Blog Post Cover Images# Use the front matter of your posts to add cover images:\n",
        content: "The theme optimizes images by default with a custom Hugo&rsquo;s markdown render hook:\nThe theme creates resized versions for each image, ranging from 100 to 700 pixels wide. It generates WebP versions for each size if the original image format isn&rsquo;t WebP. The theme keeps the original file format as a fallback for browsers that don&rsquo;t support the WebP format. Images in SVG format are embedded as-is. Blog Post Cover Images# Use the front matter of your posts to add cover images:\n--- cover: src: alexandre-van-thuan-mr9FouttLGY-unsplash.jpg alt: The interior of Stadsbiblioteket in Stockholm - Gunnar Asplunds library from 1928. The architecture is a transition between neoclassicism and functionalism. caption: By [Alexandre Van Thuan](https://unsplash.com/photos/mr9FouttLGY) --- Captions# Add captions to your inline images like this:\n--- ![Alt text](image-url.jpg &#34;Caption with **markdown support**&#34;) --- The main library in Vancouver is architecturally significant. The angles and levels contour together to produce a trippy scene. It&rsquo;s pretty from the outside but stunning from the inside. By Aaron Thomas JPEG and WebP Quality# The default quality is 75%. See the official Image Processing Config Hugo docs. Change it by adding the following to the config.toml file:\n[imaging] quality = 75 Resizing# By default, the theme creates resized versions of images ranging from 300 to 700 pixels wide in increments of 100 pixels. Override the resize behavior by adding the following to the config.toml file:\n[params] [params.imageResize] min = 300 max = 700 increment = 100 Lazy Loading# Images are lazily loaded by default using the loading=&quot;lazy&quot; attribute on HTML img tags.\n"
      }
    ).add(
      {
        id: 15,
        href: "/blog/turkey-trot-2019/",
        title: "Turkey Trot 2019",
        description: "Turkey Trot 2k19# Date: November 28, 2019\nThe family decided to go to a Turkey Trot before we ate Thanksgiving dinner. I bet my niece $1 that I would run it in under 40 minutes. I got &lt; 33 minutes (unofficially\u2014the times aren&rsquo;t posted yet).\nAbout 900 people signed up for this particular 5k!\nThe 2nd prize was a huge pie (and a $50 Dick&rsquo;s gift card, but you can&rsquo;t eat that so it&rsquo;s less important).\n",
        content: "Turkey Trot 2k19# Date: November 28, 2019\nThe family decided to go to a Turkey Trot before we ate Thanksgiving dinner. I bet my niece $1 that I would run it in under 40 minutes. I got &lt; 33 minutes (unofficially\u2014the times aren&rsquo;t posted yet).\nAbout 900 people signed up for this particular 5k!\nThe 2nd prize was a huge pie (and a $50 Dick&rsquo;s gift card, but you can&rsquo;t eat that so it&rsquo;s less important).\nDisclaimer: This post was narrated by my chief editor\u2014 my niece.\nThis article was updated on August 12, 2020\n"
      }
    ).add(
      {
        id: 16,
        href: "/blog/placeholder-text/",
        title: "Placeholder Text",
        description: "Lorem Ipsum Dolor Si Amet",
        content: "Lorem est tota propiore conpellat pectoribus de pectora summo.\nRedit teque digerit hominumque toris verebor lumina non cervice subde tollit usus habet Arctonque, furores quas nec ferunt. Quoque montibus nunc caluere tempus inhospita parcite confusaque translucet patri vestro qui optatis lumine cognoscere flos nubis! Fronde ipsamque patulos Dryopen deorum.\nExierant elisi ambit vivere dedere Duce pollice Eris modo Spargitque ferrea quos palude Rursus nulli murmur; hastile inridet ut ab gravi sententia! Nomine potitus silentia flumen, sustinet placuit petis in dilapsa erat sunt. Atria tractus malis.\nComas hunc haec pietate fetum procerum dixit Post torum vates letum Tiresia Flumen querellas Arcanaque montibus omnes Quidem et Vagus elidunt# The Van de Graaf Canon\nMane refeci capiebant unda mulcebat# Victa caducifer, malo vulnere contra dicere aurato, ludit regale, voca! Retorsit colit est profanae esse virescere furit nec; iaculi matertera et visa est, viribus. Divesque creatis, tecta novat collumque vulnus est, parvas. Faces illo pepulere tempus adest. Tendit flamma, ab opes virum sustinet, sidus sequendo urbis.\nIubar proles corpore raptos vero auctor imperium; sed et huic: manus caeli Lelegas tu lux. Verbis obstitit intus oblectamina fixis linguisque ausus sperare Echionides cornuaque tenent clausit possit. Omnia putatur. Praeteritae refert ausus; ferebant e primus lora nutat, vici quae mea ipse. Et iter nil spectatae vulnus haerentia iuste et exercebat, sui et.\nEurytus Hector, materna ipsumque ut Politen, nec, nate, ignari, vernum cohaesit sequitur. Vel mitis temploque vocatus, inque alis, oculos nomen non silvis corpore coniunx ne displicet illa. Crescunt non unus, vidit visa quantum inmiti flumina mortis facto sic: undique a alios vincula sunt iactata abdita! Suspenderat ego fuit tendit: luna, ante urbem Propoetides parte.\n"
      }
    );
    search.addEventListener("input", function() {
      const maxResultsCount = 5;
      const searchText = this.value;
      const searchResults = index.search(searchText, maxResultsCount, { enrich: true });
      const searchResultsMap = /* @__PURE__ */ new Map();
      for (const searchResult of searchResults.flatMap((r) => r.result)) {
        if (searchResultsMap.has(searchResult.href)) continue;
        searchResultsMap.set(searchResult.doc.href, searchResult.doc);
      }
      suggestions.innerHTML = "";
      suggestions.classList.remove("search__suggestions--hidden");
      if (searchResultsMap.size === 0 && searchText) {
        const noResultsMessage = document.createElement("div");
        noResultsMessage.innerHTML = `No results for "<strong>${searchText}</strong>"`;
        noResultsMessage.classList.add("search__no-results");
        suggestions.appendChild(noResultsMessage);
        return;
      }
      for (const [href, searchResult] of searchResultsMap) {
        const suggestion = document.createElement("a");
        suggestion.href = href;
        suggestion.classList.add("search__suggestion-item");
        suggestions.appendChild(suggestion);
        const title = document.createElement("div");
        title.textContent = searchResult.title;
        title.classList.add("search__suggestion-title");
        suggestion.appendChild(title);
        const description = document.createElement("div");
        description.textContent = searchResult.description;
        description.classList.add("search__suggestion-description");
        suggestion.appendChild(description);
        if (suggestions.childElementCount === maxResultsCount) break;
      }
    });
  })();
})();
//! Source: https://github.com/h-enk/doks/blob/master/assets/js/index.js
/*! Source: https://dev.to/shubhamprakash/trap-focus-using-javascript-6a3 */
//! Source: https://discourse.gohugo.io/t/range-length-or-last-element/3803/2
