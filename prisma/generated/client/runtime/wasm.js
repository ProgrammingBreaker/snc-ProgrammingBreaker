"use strict";
var Ps = Object.create;
var It = Object.defineProperty;
var Cs = Object.getOwnPropertyDescriptor;
var Ts = Object.getOwnPropertyNames;
var As = Object.getPrototypeOf,
  Rs = Object.prototype.hasOwnProperty;
var ye = (e, t) => () => (e && (t = e((e = 0))), t);
var Ce = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
  st = (e, t) => {
    for (var r in t) It(e, r, { get: t[r], enumerable: !0 });
  },
  Pn = (e, t, r, n) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let i of Ts(t))
        !Rs.call(e, i) &&
          i !== r &&
          It(e, i, {
            get: () => t[i],
            enumerable: !(n = Cs(t, i)) || n.enumerable,
          });
    return e;
  };
var Le = (e, t, r) => (
    (r = e != null ? Ps(As(e)) : {}),
    Pn(
      t || !e || !e.__esModule
        ? It(r, "default", { value: e, enumerable: !0 })
        : r,
      e,
    )
  ),
  kr = (e) => Pn(It({}, "__esModule", { value: !0 }), e);
var y,
  c = ye(() => {
    "use strict";
    y = {
      nextTick: (e, ...t) => {
        setTimeout(() => {
          e(...t);
        }, 0);
      },
      env: {},
      version: "",
      cwd: () => "/",
      stderr: {},
      argv: ["/bin/node"],
    };
  });
var v,
  p = ye(() => {
    "use strict";
    v =
      globalThis.performance ??
      (() => {
        let e = Date.now();
        return { now: () => Date.now() - e };
      })();
  });
var x,
  f = ye(() => {
    "use strict";
    x = () => {};
    x.prototype = x;
  });
var b,
  m = ye(() => {
    "use strict";
    b = class {
      constructor(t) {
        this.value = t;
      }
      deref() {
        return this.value;
      }
    };
  });
var Vn = Ce((Qe) => {
  "use strict";
  d();
  c();
  p();
  f();
  m();
  var Sn = (e, t) => () => (
      t || e((t = { exports: {} }).exports, t), t.exports
    ),
    Ss = Sn((e) => {
      "use strict";
      (e.byteLength = l), (e.toByteArray = g), (e.fromByteArray = S);
      var t = [],
        r = [],
        n = typeof Uint8Array < "u" ? Uint8Array : Array,
        i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      for (o = 0, s = i.length; o < s; ++o)
        (t[o] = i[o]), (r[i.charCodeAt(o)] = o);
      var o, s;
      (r[45] = 62), (r[95] = 63);
      function a(A) {
        var R = A.length;
        if (R % 4 > 0)
          throw new Error("Invalid string. Length must be a multiple of 4");
        var I = A.indexOf("=");
        I === -1 && (I = R);
        var _ = I === R ? 0 : 4 - (I % 4);
        return [I, _];
      }
      function l(A) {
        var R = a(A),
          I = R[0],
          _ = R[1];
        return ((I + _) * 3) / 4 - _;
      }
      function u(A, R, I) {
        return ((R + I) * 3) / 4 - I;
      }
      function g(A) {
        var R,
          I = a(A),
          _ = I[0],
          F = I[1],
          k = new n(u(A, _, F)),
          N = 0,
          ie = F > 0 ? _ - 4 : _,
          V;
        for (V = 0; V < ie; V += 4)
          (R =
            (r[A.charCodeAt(V)] << 18) |
            (r[A.charCodeAt(V + 1)] << 12) |
            (r[A.charCodeAt(V + 2)] << 6) |
            r[A.charCodeAt(V + 3)]),
            (k[N++] = (R >> 16) & 255),
            (k[N++] = (R >> 8) & 255),
            (k[N++] = R & 255);
        return (
          F === 2 &&
            ((R = (r[A.charCodeAt(V)] << 2) | (r[A.charCodeAt(V + 1)] >> 4)),
            (k[N++] = R & 255)),
          F === 1 &&
            ((R =
              (r[A.charCodeAt(V)] << 10) |
              (r[A.charCodeAt(V + 1)] << 4) |
              (r[A.charCodeAt(V + 2)] >> 2)),
            (k[N++] = (R >> 8) & 255),
            (k[N++] = R & 255)),
          k
        );
      }
      function h(A) {
        return (
          t[(A >> 18) & 63] + t[(A >> 12) & 63] + t[(A >> 6) & 63] + t[A & 63]
        );
      }
      function E(A, R, I) {
        for (var _, F = [], k = R; k < I; k += 3)
          (_ =
            ((A[k] << 16) & 16711680) +
            ((A[k + 1] << 8) & 65280) +
            (A[k + 2] & 255)),
            F.push(h(_));
        return F.join("");
      }
      function S(A) {
        for (
          var R, I = A.length, _ = I % 3, F = [], k = 16383, N = 0, ie = I - _;
          N < ie;
          N += k
        )
          F.push(E(A, N, N + k > ie ? ie : N + k));
        return (
          _ === 1
            ? ((R = A[I - 1]), F.push(t[R >> 2] + t[(R << 4) & 63] + "=="))
            : _ === 2 &&
              ((R = (A[I - 2] << 8) + A[I - 1]),
              F.push(t[R >> 10] + t[(R >> 4) & 63] + t[(R << 2) & 63] + "=")),
          F.join("")
        );
      }
    }),
    ks = Sn((e) => {
      (e.read = function (t, r, n, i, o) {
        var s,
          a,
          l = o * 8 - i - 1,
          u = (1 << l) - 1,
          g = u >> 1,
          h = -7,
          E = n ? o - 1 : 0,
          S = n ? -1 : 1,
          A = t[r + E];
        for (
          E += S, s = A & ((1 << -h) - 1), A >>= -h, h += l;
          h > 0;
          s = s * 256 + t[r + E], E += S, h -= 8
        );
        for (
          a = s & ((1 << -h) - 1), s >>= -h, h += i;
          h > 0;
          a = a * 256 + t[r + E], E += S, h -= 8
        );
        if (s === 0) s = 1 - g;
        else {
          if (s === u) return a ? NaN : (A ? -1 : 1) * (1 / 0);
          (a = a + Math.pow(2, i)), (s = s - g);
        }
        return (A ? -1 : 1) * a * Math.pow(2, s - i);
      }),
        (e.write = function (t, r, n, i, o, s) {
          var a,
            l,
            u,
            g = s * 8 - o - 1,
            h = (1 << g) - 1,
            E = h >> 1,
            S = o === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            A = i ? 0 : s - 1,
            R = i ? 1 : -1,
            I = r < 0 || (r === 0 && 1 / r < 0) ? 1 : 0;
          for (
            r = Math.abs(r),
              isNaN(r) || r === 1 / 0
                ? ((l = isNaN(r) ? 1 : 0), (a = h))
                : ((a = Math.floor(Math.log(r) / Math.LN2)),
                  r * (u = Math.pow(2, -a)) < 1 && (a--, (u *= 2)),
                  a + E >= 1 ? (r += S / u) : (r += S * Math.pow(2, 1 - E)),
                  r * u >= 2 && (a++, (u /= 2)),
                  a + E >= h
                    ? ((l = 0), (a = h))
                    : a + E >= 1
                      ? ((l = (r * u - 1) * Math.pow(2, o)), (a = a + E))
                      : ((l = r * Math.pow(2, E - 1) * Math.pow(2, o)),
                        (a = 0)));
            o >= 8;
            t[n + A] = l & 255, A += R, l /= 256, o -= 8
          );
          for (
            a = (a << o) | l, g += o;
            g > 0;
            t[n + A] = a & 255, A += R, a /= 256, g -= 8
          );
          t[n + A - R] |= I * 128;
        });
    }),
    Mr = Ss(),
    Ve = ks(),
    Cn =
      typeof Symbol == "function" && typeof Symbol.for == "function"
        ? Symbol.for("nodejs.util.inspect.custom")
        : null;
  Qe.Buffer = C;
  Qe.SlowBuffer = Ns;
  Qe.INSPECT_MAX_BYTES = 50;
  var _t = 2147483647;
  Qe.kMaxLength = _t;
  C.TYPED_ARRAY_SUPPORT = Ms();
  !C.TYPED_ARRAY_SUPPORT &&
    typeof console < "u" &&
    typeof console.error == "function" &&
    console.error(
      "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.",
    );
  function Ms() {
    try {
      let e = new Uint8Array(1),
        t = {
          foo: function () {
            return 42;
          },
        };
      return (
        Object.setPrototypeOf(t, Uint8Array.prototype),
        Object.setPrototypeOf(e, t),
        e.foo() === 42
      );
    } catch {
      return !1;
    }
  }
  Object.defineProperty(C.prototype, "parent", {
    enumerable: !0,
    get: function () {
      if (C.isBuffer(this)) return this.buffer;
    },
  });
  Object.defineProperty(C.prototype, "offset", {
    enumerable: !0,
    get: function () {
      if (C.isBuffer(this)) return this.byteOffset;
    },
  });
  function we(e) {
    if (e > _t)
      throw new RangeError(
        'The value "' + e + '" is invalid for option "size"',
      );
    let t = new Uint8Array(e);
    return Object.setPrototypeOf(t, C.prototype), t;
  }
  function C(e, t, r) {
    if (typeof e == "number") {
      if (typeof t == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number',
        );
      return _r(e);
    }
    return kn(e, t, r);
  }
  C.poolSize = 8192;
  function kn(e, t, r) {
    if (typeof e == "string") return Is(e, t);
    if (ArrayBuffer.isView(e)) return _s(e);
    if (e == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
          typeof e,
      );
    if (
      ue(e, ArrayBuffer) ||
      (e && ue(e.buffer, ArrayBuffer)) ||
      (typeof SharedArrayBuffer < "u" &&
        (ue(e, SharedArrayBuffer) || (e && ue(e.buffer, SharedArrayBuffer))))
    )
      return On(e, t, r);
    if (typeof e == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number',
      );
    let n = e.valueOf && e.valueOf();
    if (n != null && n !== e) return C.from(n, t, r);
    let i = Ls(e);
    if (i) return i;
    if (
      typeof Symbol < "u" &&
      Symbol.toPrimitive != null &&
      typeof e[Symbol.toPrimitive] == "function"
    )
      return C.from(e[Symbol.toPrimitive]("string"), t, r);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
        typeof e,
    );
  }
  C.from = function (e, t, r) {
    return kn(e, t, r);
  };
  Object.setPrototypeOf(C.prototype, Uint8Array.prototype);
  Object.setPrototypeOf(C, Uint8Array);
  function Mn(e) {
    if (typeof e != "number")
      throw new TypeError('"size" argument must be of type number');
    if (e < 0)
      throw new RangeError(
        'The value "' + e + '" is invalid for option "size"',
      );
  }
  function Os(e, t, r) {
    return (
      Mn(e),
      e <= 0
        ? we(e)
        : t !== void 0
          ? typeof r == "string"
            ? we(e).fill(t, r)
            : we(e).fill(t)
          : we(e)
    );
  }
  C.alloc = function (e, t, r) {
    return Os(e, t, r);
  };
  function _r(e) {
    return Mn(e), we(e < 0 ? 0 : Lr(e) | 0);
  }
  C.allocUnsafe = function (e) {
    return _r(e);
  };
  C.allocUnsafeSlow = function (e) {
    return _r(e);
  };
  function Is(e, t) {
    if (((typeof t != "string" || t === "") && (t = "utf8"), !C.isEncoding(t)))
      throw new TypeError("Unknown encoding: " + t);
    let r = In(e, t) | 0,
      n = we(r),
      i = n.write(e, t);
    return i !== r && (n = n.slice(0, i)), n;
  }
  function Or(e) {
    let t = e.length < 0 ? 0 : Lr(e.length) | 0,
      r = we(t);
    for (let n = 0; n < t; n += 1) r[n] = e[n] & 255;
    return r;
  }
  function _s(e) {
    if (ue(e, Uint8Array)) {
      let t = new Uint8Array(e);
      return On(t.buffer, t.byteOffset, t.byteLength);
    }
    return Or(e);
  }
  function On(e, t, r) {
    if (t < 0 || e.byteLength < t)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (e.byteLength < t + (r || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let n;
    return (
      t === void 0 && r === void 0
        ? (n = new Uint8Array(e))
        : r === void 0
          ? (n = new Uint8Array(e, t))
          : (n = new Uint8Array(e, t, r)),
      Object.setPrototypeOf(n, C.prototype),
      n
    );
  }
  function Ls(e) {
    if (C.isBuffer(e)) {
      let t = Lr(e.length) | 0,
        r = we(t);
      return r.length === 0 || e.copy(r, 0, 0, t), r;
    }
    if (e.length !== void 0)
      return typeof e.length != "number" || Fr(e.length) ? we(0) : Or(e);
    if (e.type === "Buffer" && Array.isArray(e.data)) return Or(e.data);
  }
  function Lr(e) {
    if (e >= _t)
      throw new RangeError(
        "Attempt to allocate Buffer larger than maximum size: 0x" +
          _t.toString(16) +
          " bytes",
      );
    return e | 0;
  }
  function Ns(e) {
    return +e != e && (e = 0), C.alloc(+e);
  }
  C.isBuffer = function (e) {
    return e != null && e._isBuffer === !0 && e !== C.prototype;
  };
  C.compare = function (e, t) {
    if (
      (ue(e, Uint8Array) && (e = C.from(e, e.offset, e.byteLength)),
      ue(t, Uint8Array) && (t = C.from(t, t.offset, t.byteLength)),
      !C.isBuffer(e) || !C.isBuffer(t))
    )
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array',
      );
    if (e === t) return 0;
    let r = e.length,
      n = t.length;
    for (let i = 0, o = Math.min(r, n); i < o; ++i)
      if (e[i] !== t[i]) {
        (r = e[i]), (n = t[i]);
        break;
      }
    return r < n ? -1 : n < r ? 1 : 0;
  };
  C.isEncoding = function (e) {
    switch (String(e).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  };
  C.concat = function (e, t) {
    if (!Array.isArray(e))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (e.length === 0) return C.alloc(0);
    let r;
    if (t === void 0) for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
    let n = C.allocUnsafe(t),
      i = 0;
    for (r = 0; r < e.length; ++r) {
      let o = e[r];
      if (ue(o, Uint8Array))
        i + o.length > n.length
          ? (C.isBuffer(o) || (o = C.from(o)), o.copy(n, i))
          : Uint8Array.prototype.set.call(n, o, i);
      else if (C.isBuffer(o)) o.copy(n, i);
      else throw new TypeError('"list" argument must be an Array of Buffers');
      i += o.length;
    }
    return n;
  };
  function In(e, t) {
    if (C.isBuffer(e)) return e.length;
    if (ArrayBuffer.isView(e) || ue(e, ArrayBuffer)) return e.byteLength;
    if (typeof e != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
          typeof e,
      );
    let r = e.length,
      n = arguments.length > 2 && arguments[2] === !0;
    if (!n && r === 0) return 0;
    let i = !1;
    for (;;)
      switch (t) {
        case "ascii":
        case "latin1":
        case "binary":
          return r;
        case "utf8":
        case "utf-8":
          return Ir(e).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return r * 2;
        case "hex":
          return r >>> 1;
        case "base64":
          return Un(e).length;
        default:
          if (i) return n ? -1 : Ir(e).length;
          (t = ("" + t).toLowerCase()), (i = !0);
      }
  }
  C.byteLength = In;
  function Fs(e, t, r) {
    let n = !1;
    if (
      ((t === void 0 || t < 0) && (t = 0),
      t > this.length ||
        ((r === void 0 || r > this.length) && (r = this.length), r <= 0) ||
        ((r >>>= 0), (t >>>= 0), r <= t))
    )
      return "";
    for (e || (e = "utf8"); ; )
      switch (e) {
        case "hex":
          return Ws(this, t, r);
        case "utf8":
        case "utf-8":
          return Ln(this, t, r);
        case "ascii":
          return Qs(this, t, r);
        case "latin1":
        case "binary":
          return Js(this, t, r);
        case "base64":
          return Vs(this, t, r);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Gs(this, t, r);
        default:
          if (n) throw new TypeError("Unknown encoding: " + e);
          (e = (e + "").toLowerCase()), (n = !0);
      }
  }
  C.prototype._isBuffer = !0;
  function Ne(e, t, r) {
    let n = e[t];
    (e[t] = e[r]), (e[r] = n);
  }
  C.prototype.swap16 = function () {
    let e = this.length;
    if (e % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let t = 0; t < e; t += 2) Ne(this, t, t + 1);
    return this;
  };
  C.prototype.swap32 = function () {
    let e = this.length;
    if (e % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let t = 0; t < e; t += 4) Ne(this, t, t + 3), Ne(this, t + 1, t + 2);
    return this;
  };
  C.prototype.swap64 = function () {
    let e = this.length;
    if (e % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let t = 0; t < e; t += 8)
      Ne(this, t, t + 7),
        Ne(this, t + 1, t + 6),
        Ne(this, t + 2, t + 5),
        Ne(this, t + 3, t + 4);
    return this;
  };
  C.prototype.toString = function () {
    let e = this.length;
    return e === 0
      ? ""
      : arguments.length === 0
        ? Ln(this, 0, e)
        : Fs.apply(this, arguments);
  };
  C.prototype.toLocaleString = C.prototype.toString;
  C.prototype.equals = function (e) {
    if (!C.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
    return this === e ? !0 : C.compare(this, e) === 0;
  };
  C.prototype.inspect = function () {
    let e = "",
      t = Qe.INSPECT_MAX_BYTES;
    return (
      (e = this.toString("hex", 0, t)
        .replace(/(.{2})/g, "$1 ")
        .trim()),
      this.length > t && (e += " ... "),
      "<Buffer " + e + ">"
    );
  };
  Cn && (C.prototype[Cn] = C.prototype.inspect);
  C.prototype.compare = function (e, t, r, n, i) {
    if (
      (ue(e, Uint8Array) && (e = C.from(e, e.offset, e.byteLength)),
      !C.isBuffer(e))
    )
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
          typeof e,
      );
    if (
      (t === void 0 && (t = 0),
      r === void 0 && (r = e ? e.length : 0),
      n === void 0 && (n = 0),
      i === void 0 && (i = this.length),
      t < 0 || r > e.length || n < 0 || i > this.length)
    )
      throw new RangeError("out of range index");
    if (n >= i && t >= r) return 0;
    if (n >= i) return -1;
    if (t >= r) return 1;
    if (((t >>>= 0), (r >>>= 0), (n >>>= 0), (i >>>= 0), this === e)) return 0;
    let o = i - n,
      s = r - t,
      a = Math.min(o, s),
      l = this.slice(n, i),
      u = e.slice(t, r);
    for (let g = 0; g < a; ++g)
      if (l[g] !== u[g]) {
        (o = l[g]), (s = u[g]);
        break;
      }
    return o < s ? -1 : s < o ? 1 : 0;
  };
  function _n(e, t, r, n, i) {
    if (e.length === 0) return -1;
    if (
      (typeof r == "string"
        ? ((n = r), (r = 0))
        : r > 2147483647
          ? (r = 2147483647)
          : r < -2147483648 && (r = -2147483648),
      (r = +r),
      Fr(r) && (r = i ? 0 : e.length - 1),
      r < 0 && (r = e.length + r),
      r >= e.length)
    ) {
      if (i) return -1;
      r = e.length - 1;
    } else if (r < 0)
      if (i) r = 0;
      else return -1;
    if ((typeof t == "string" && (t = C.from(t, n)), C.isBuffer(t)))
      return t.length === 0 ? -1 : Tn(e, t, r, n, i);
    if (typeof t == "number")
      return (
        (t = t & 255),
        typeof Uint8Array.prototype.indexOf == "function"
          ? i
            ? Uint8Array.prototype.indexOf.call(e, t, r)
            : Uint8Array.prototype.lastIndexOf.call(e, t, r)
          : Tn(e, [t], r, n, i)
      );
    throw new TypeError("val must be string, number or Buffer");
  }
  function Tn(e, t, r, n, i) {
    let o = 1,
      s = e.length,
      a = t.length;
    if (
      n !== void 0 &&
      ((n = String(n).toLowerCase()),
      n === "ucs2" || n === "ucs-2" || n === "utf16le" || n === "utf-16le")
    ) {
      if (e.length < 2 || t.length < 2) return -1;
      (o = 2), (s /= 2), (a /= 2), (r /= 2);
    }
    function l(g, h) {
      return o === 1 ? g[h] : g.readUInt16BE(h * o);
    }
    let u;
    if (i) {
      let g = -1;
      for (u = r; u < s; u++)
        if (l(e, u) === l(t, g === -1 ? 0 : u - g)) {
          if ((g === -1 && (g = u), u - g + 1 === a)) return g * o;
        } else g !== -1 && (u -= u - g), (g = -1);
    } else
      for (r + a > s && (r = s - a), u = r; u >= 0; u--) {
        let g = !0;
        for (let h = 0; h < a; h++)
          if (l(e, u + h) !== l(t, h)) {
            g = !1;
            break;
          }
        if (g) return u;
      }
    return -1;
  }
  C.prototype.includes = function (e, t, r) {
    return this.indexOf(e, t, r) !== -1;
  };
  C.prototype.indexOf = function (e, t, r) {
    return _n(this, e, t, r, !0);
  };
  C.prototype.lastIndexOf = function (e, t, r) {
    return _n(this, e, t, r, !1);
  };
  function Ds(e, t, r, n) {
    r = Number(r) || 0;
    let i = e.length - r;
    n ? ((n = Number(n)), n > i && (n = i)) : (n = i);
    let o = t.length;
    n > o / 2 && (n = o / 2);
    let s;
    for (s = 0; s < n; ++s) {
      let a = parseInt(t.substr(s * 2, 2), 16);
      if (Fr(a)) return s;
      e[r + s] = a;
    }
    return s;
  }
  function Bs(e, t, r, n) {
    return Lt(Ir(t, e.length - r), e, r, n);
  }
  function $s(e, t, r, n) {
    return Lt(Ys(t), e, r, n);
  }
  function qs(e, t, r, n) {
    return Lt(Un(t), e, r, n);
  }
  function Us(e, t, r, n) {
    return Lt(Zs(t, e.length - r), e, r, n);
  }
  C.prototype.write = function (e, t, r, n) {
    if (t === void 0) (n = "utf8"), (r = this.length), (t = 0);
    else if (r === void 0 && typeof t == "string")
      (n = t), (r = this.length), (t = 0);
    else if (isFinite(t))
      (t = t >>> 0),
        isFinite(r)
          ? ((r = r >>> 0), n === void 0 && (n = "utf8"))
          : ((n = r), (r = void 0));
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported",
      );
    let i = this.length - t;
    if (
      ((r === void 0 || r > i) && (r = i),
      (e.length > 0 && (r < 0 || t < 0)) || t > this.length)
    )
      throw new RangeError("Attempt to write outside buffer bounds");
    n || (n = "utf8");
    let o = !1;
    for (;;)
      switch (n) {
        case "hex":
          return Ds(this, e, t, r);
        case "utf8":
        case "utf-8":
          return Bs(this, e, t, r);
        case "ascii":
        case "latin1":
        case "binary":
          return $s(this, e, t, r);
        case "base64":
          return qs(this, e, t, r);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Us(this, e, t, r);
        default:
          if (o) throw new TypeError("Unknown encoding: " + n);
          (n = ("" + n).toLowerCase()), (o = !0);
      }
  };
  C.prototype.toJSON = function () {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0),
    };
  };
  function Vs(e, t, r) {
    return t === 0 && r === e.length
      ? Mr.fromByteArray(e)
      : Mr.fromByteArray(e.slice(t, r));
  }
  function Ln(e, t, r) {
    r = Math.min(e.length, r);
    let n = [],
      i = t;
    for (; i < r; ) {
      let o = e[i],
        s = null,
        a = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
      if (i + a <= r) {
        let l, u, g, h;
        switch (a) {
          case 1:
            o < 128 && (s = o);
            break;
          case 2:
            (l = e[i + 1]),
              (l & 192) === 128 &&
                ((h = ((o & 31) << 6) | (l & 63)), h > 127 && (s = h));
            break;
          case 3:
            (l = e[i + 1]),
              (u = e[i + 2]),
              (l & 192) === 128 &&
                (u & 192) === 128 &&
                ((h = ((o & 15) << 12) | ((l & 63) << 6) | (u & 63)),
                h > 2047 && (h < 55296 || h > 57343) && (s = h));
            break;
          case 4:
            (l = e[i + 1]),
              (u = e[i + 2]),
              (g = e[i + 3]),
              (l & 192) === 128 &&
                (u & 192) === 128 &&
                (g & 192) === 128 &&
                ((h =
                  ((o & 15) << 18) |
                  ((l & 63) << 12) |
                  ((u & 63) << 6) |
                  (g & 63)),
                h > 65535 && h < 1114112 && (s = h));
        }
      }
      s === null
        ? ((s = 65533), (a = 1))
        : s > 65535 &&
          ((s -= 65536),
          n.push(((s >>> 10) & 1023) | 55296),
          (s = 56320 | (s & 1023))),
        n.push(s),
        (i += a);
    }
    return js(n);
  }
  var An = 4096;
  function js(e) {
    let t = e.length;
    if (t <= An) return String.fromCharCode.apply(String, e);
    let r = "",
      n = 0;
    for (; n < t; )
      r += String.fromCharCode.apply(String, e.slice(n, (n += An)));
    return r;
  }
  function Qs(e, t, r) {
    let n = "";
    r = Math.min(e.length, r);
    for (let i = t; i < r; ++i) n += String.fromCharCode(e[i] & 127);
    return n;
  }
  function Js(e, t, r) {
    let n = "";
    r = Math.min(e.length, r);
    for (let i = t; i < r; ++i) n += String.fromCharCode(e[i]);
    return n;
  }
  function Ws(e, t, r) {
    let n = e.length;
    (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
    let i = "";
    for (let o = t; o < r; ++o) i += Xs[e[o]];
    return i;
  }
  function Gs(e, t, r) {
    let n = e.slice(t, r),
      i = "";
    for (let o = 0; o < n.length - 1; o += 2)
      i += String.fromCharCode(n[o] + n[o + 1] * 256);
    return i;
  }
  C.prototype.slice = function (e, t) {
    let r = this.length;
    (e = ~~e),
      (t = t === void 0 ? r : ~~t),
      e < 0 ? ((e += r), e < 0 && (e = 0)) : e > r && (e = r),
      t < 0 ? ((t += r), t < 0 && (t = 0)) : t > r && (t = r),
      t < e && (t = e);
    let n = this.subarray(e, t);
    return Object.setPrototypeOf(n, C.prototype), n;
  };
  function Q(e, t, r) {
    if (e % 1 !== 0 || e < 0) throw new RangeError("offset is not uint");
    if (e + t > r)
      throw new RangeError("Trying to access beyond buffer length");
  }
  C.prototype.readUintLE = C.prototype.readUIntLE = function (e, t, r) {
    (e = e >>> 0), (t = t >>> 0), r || Q(e, t, this.length);
    let n = this[e],
      i = 1,
      o = 0;
    for (; ++o < t && (i *= 256); ) n += this[e + o] * i;
    return n;
  };
  C.prototype.readUintBE = C.prototype.readUIntBE = function (e, t, r) {
    (e = e >>> 0), (t = t >>> 0), r || Q(e, t, this.length);
    let n = this[e + --t],
      i = 1;
    for (; t > 0 && (i *= 256); ) n += this[e + --t] * i;
    return n;
  };
  C.prototype.readUint8 = C.prototype.readUInt8 = function (e, t) {
    return (e = e >>> 0), t || Q(e, 1, this.length), this[e];
  };
  C.prototype.readUint16LE = C.prototype.readUInt16LE = function (e, t) {
    return (
      (e = e >>> 0), t || Q(e, 2, this.length), this[e] | (this[e + 1] << 8)
    );
  };
  C.prototype.readUint16BE = C.prototype.readUInt16BE = function (e, t) {
    return (
      (e = e >>> 0), t || Q(e, 2, this.length), (this[e] << 8) | this[e + 1]
    );
  };
  C.prototype.readUint32LE = C.prototype.readUInt32LE = function (e, t) {
    return (
      (e = e >>> 0),
      t || Q(e, 4, this.length),
      (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
        this[e + 3] * 16777216
    );
  };
  C.prototype.readUint32BE = C.prototype.readUInt32BE = function (e, t) {
    return (
      (e = e >>> 0),
      t || Q(e, 4, this.length),
      this[e] * 16777216 +
        ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
    );
  };
  C.prototype.readBigUInt64LE = Te(function (e) {
    (e = e >>> 0), je(e, "offset");
    let t = this[e],
      r = this[e + 7];
    (t === void 0 || r === void 0) && at(e, this.length - 8);
    let n = t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24,
      i = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + r * 2 ** 24;
    return BigInt(n) + (BigInt(i) << BigInt(32));
  });
  C.prototype.readBigUInt64BE = Te(function (e) {
    (e = e >>> 0), je(e, "offset");
    let t = this[e],
      r = this[e + 7];
    (t === void 0 || r === void 0) && at(e, this.length - 8);
    let n = t * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e],
      i = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + r;
    return (BigInt(n) << BigInt(32)) + BigInt(i);
  });
  C.prototype.readIntLE = function (e, t, r) {
    (e = e >>> 0), (t = t >>> 0), r || Q(e, t, this.length);
    let n = this[e],
      i = 1,
      o = 0;
    for (; ++o < t && (i *= 256); ) n += this[e + o] * i;
    return (i *= 128), n >= i && (n -= Math.pow(2, 8 * t)), n;
  };
  C.prototype.readIntBE = function (e, t, r) {
    (e = e >>> 0), (t = t >>> 0), r || Q(e, t, this.length);
    let n = t,
      i = 1,
      o = this[e + --n];
    for (; n > 0 && (i *= 256); ) o += this[e + --n] * i;
    return (i *= 128), o >= i && (o -= Math.pow(2, 8 * t)), o;
  };
  C.prototype.readInt8 = function (e, t) {
    return (
      (e = e >>> 0),
      t || Q(e, 1, this.length),
      this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e]
    );
  };
  C.prototype.readInt16LE = function (e, t) {
    (e = e >>> 0), t || Q(e, 2, this.length);
    let r = this[e] | (this[e + 1] << 8);
    return r & 32768 ? r | 4294901760 : r;
  };
  C.prototype.readInt16BE = function (e, t) {
    (e = e >>> 0), t || Q(e, 2, this.length);
    let r = this[e + 1] | (this[e] << 8);
    return r & 32768 ? r | 4294901760 : r;
  };
  C.prototype.readInt32LE = function (e, t) {
    return (
      (e = e >>> 0),
      t || Q(e, 4, this.length),
      this[e] | (this[e + 1] << 8) | (this[e + 2] << 16) | (this[e + 3] << 24)
    );
  };
  C.prototype.readInt32BE = function (e, t) {
    return (
      (e = e >>> 0),
      t || Q(e, 4, this.length),
      (this[e] << 24) | (this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3]
    );
  };
  C.prototype.readBigInt64LE = Te(function (e) {
    (e = e >>> 0), je(e, "offset");
    let t = this[e],
      r = this[e + 7];
    (t === void 0 || r === void 0) && at(e, this.length - 8);
    let n =
      this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 + (r << 24);
    return (
      (BigInt(n) << BigInt(32)) +
      BigInt(t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24)
    );
  });
  C.prototype.readBigInt64BE = Te(function (e) {
    (e = e >>> 0), je(e, "offset");
    let t = this[e],
      r = this[e + 7];
    (t === void 0 || r === void 0) && at(e, this.length - 8);
    let n = (t << 24) + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e];
    return (
      (BigInt(n) << BigInt(32)) +
      BigInt(this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + r)
    );
  });
  C.prototype.readFloatLE = function (e, t) {
    return (
      (e = e >>> 0), t || Q(e, 4, this.length), Ve.read(this, e, !0, 23, 4)
    );
  };
  C.prototype.readFloatBE = function (e, t) {
    return (
      (e = e >>> 0), t || Q(e, 4, this.length), Ve.read(this, e, !1, 23, 4)
    );
  };
  C.prototype.readDoubleLE = function (e, t) {
    return (
      (e = e >>> 0), t || Q(e, 8, this.length), Ve.read(this, e, !0, 52, 8)
    );
  };
  C.prototype.readDoubleBE = function (e, t) {
    return (
      (e = e >>> 0), t || Q(e, 8, this.length), Ve.read(this, e, !1, 52, 8)
    );
  };
  function te(e, t, r, n, i, o) {
    if (!C.isBuffer(e))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (t > i || t < o)
      throw new RangeError('"value" argument is out of bounds');
    if (r + n > e.length) throw new RangeError("Index out of range");
  }
  C.prototype.writeUintLE = C.prototype.writeUIntLE = function (e, t, r, n) {
    if (((e = +e), (t = t >>> 0), (r = r >>> 0), !n)) {
      let s = Math.pow(2, 8 * r) - 1;
      te(this, e, t, r, s, 0);
    }
    let i = 1,
      o = 0;
    for (this[t] = e & 255; ++o < r && (i *= 256); )
      this[t + o] = (e / i) & 255;
    return t + r;
  };
  C.prototype.writeUintBE = C.prototype.writeUIntBE = function (e, t, r, n) {
    if (((e = +e), (t = t >>> 0), (r = r >>> 0), !n)) {
      let s = Math.pow(2, 8 * r) - 1;
      te(this, e, t, r, s, 0);
    }
    let i = r - 1,
      o = 1;
    for (this[t + i] = e & 255; --i >= 0 && (o *= 256); )
      this[t + i] = (e / o) & 255;
    return t + r;
  };
  C.prototype.writeUint8 = C.prototype.writeUInt8 = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || te(this, e, t, 1, 255, 0),
      (this[t] = e & 255),
      t + 1
    );
  };
  C.prototype.writeUint16LE = C.prototype.writeUInt16LE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || te(this, e, t, 2, 65535, 0),
      (this[t] = e & 255),
      (this[t + 1] = e >>> 8),
      t + 2
    );
  };
  C.prototype.writeUint16BE = C.prototype.writeUInt16BE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || te(this, e, t, 2, 65535, 0),
      (this[t] = e >>> 8),
      (this[t + 1] = e & 255),
      t + 2
    );
  };
  C.prototype.writeUint32LE = C.prototype.writeUInt32LE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || te(this, e, t, 4, 4294967295, 0),
      (this[t + 3] = e >>> 24),
      (this[t + 2] = e >>> 16),
      (this[t + 1] = e >>> 8),
      (this[t] = e & 255),
      t + 4
    );
  };
  C.prototype.writeUint32BE = C.prototype.writeUInt32BE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || te(this, e, t, 4, 4294967295, 0),
      (this[t] = e >>> 24),
      (this[t + 1] = e >>> 16),
      (this[t + 2] = e >>> 8),
      (this[t + 3] = e & 255),
      t + 4
    );
  };
  function Nn(e, t, r, n, i) {
    qn(t, n, i, e, r, 7);
    let o = Number(t & BigInt(4294967295));
    (e[r++] = o),
      (o = o >> 8),
      (e[r++] = o),
      (o = o >> 8),
      (e[r++] = o),
      (o = o >> 8),
      (e[r++] = o);
    let s = Number((t >> BigInt(32)) & BigInt(4294967295));
    return (
      (e[r++] = s),
      (s = s >> 8),
      (e[r++] = s),
      (s = s >> 8),
      (e[r++] = s),
      (s = s >> 8),
      (e[r++] = s),
      r
    );
  }
  function Fn(e, t, r, n, i) {
    qn(t, n, i, e, r, 7);
    let o = Number(t & BigInt(4294967295));
    (e[r + 7] = o),
      (o = o >> 8),
      (e[r + 6] = o),
      (o = o >> 8),
      (e[r + 5] = o),
      (o = o >> 8),
      (e[r + 4] = o);
    let s = Number((t >> BigInt(32)) & BigInt(4294967295));
    return (
      (e[r + 3] = s),
      (s = s >> 8),
      (e[r + 2] = s),
      (s = s >> 8),
      (e[r + 1] = s),
      (s = s >> 8),
      (e[r] = s),
      r + 8
    );
  }
  C.prototype.writeBigUInt64LE = Te(function (e, t = 0) {
    return Nn(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
  });
  C.prototype.writeBigUInt64BE = Te(function (e, t = 0) {
    return Fn(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
  });
  C.prototype.writeIntLE = function (e, t, r, n) {
    if (((e = +e), (t = t >>> 0), !n)) {
      let a = Math.pow(2, 8 * r - 1);
      te(this, e, t, r, a - 1, -a);
    }
    let i = 0,
      o = 1,
      s = 0;
    for (this[t] = e & 255; ++i < r && (o *= 256); )
      e < 0 && s === 0 && this[t + i - 1] !== 0 && (s = 1),
        (this[t + i] = (((e / o) >> 0) - s) & 255);
    return t + r;
  };
  C.prototype.writeIntBE = function (e, t, r, n) {
    if (((e = +e), (t = t >>> 0), !n)) {
      let a = Math.pow(2, 8 * r - 1);
      te(this, e, t, r, a - 1, -a);
    }
    let i = r - 1,
      o = 1,
      s = 0;
    for (this[t + i] = e & 255; --i >= 0 && (o *= 256); )
      e < 0 && s === 0 && this[t + i + 1] !== 0 && (s = 1),
        (this[t + i] = (((e / o) >> 0) - s) & 255);
    return t + r;
  };
  C.prototype.writeInt8 = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || te(this, e, t, 1, 127, -128),
      e < 0 && (e = 255 + e + 1),
      (this[t] = e & 255),
      t + 1
    );
  };
  C.prototype.writeInt16LE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || te(this, e, t, 2, 32767, -32768),
      (this[t] = e & 255),
      (this[t + 1] = e >>> 8),
      t + 2
    );
  };
  C.prototype.writeInt16BE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || te(this, e, t, 2, 32767, -32768),
      (this[t] = e >>> 8),
      (this[t + 1] = e & 255),
      t + 2
    );
  };
  C.prototype.writeInt32LE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || te(this, e, t, 4, 2147483647, -2147483648),
      (this[t] = e & 255),
      (this[t + 1] = e >>> 8),
      (this[t + 2] = e >>> 16),
      (this[t + 3] = e >>> 24),
      t + 4
    );
  };
  C.prototype.writeInt32BE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || te(this, e, t, 4, 2147483647, -2147483648),
      e < 0 && (e = 4294967295 + e + 1),
      (this[t] = e >>> 24),
      (this[t + 1] = e >>> 16),
      (this[t + 2] = e >>> 8),
      (this[t + 3] = e & 255),
      t + 4
    );
  };
  C.prototype.writeBigInt64LE = Te(function (e, t = 0) {
    return Nn(
      this,
      e,
      t,
      -BigInt("0x8000000000000000"),
      BigInt("0x7fffffffffffffff"),
    );
  });
  C.prototype.writeBigInt64BE = Te(function (e, t = 0) {
    return Fn(
      this,
      e,
      t,
      -BigInt("0x8000000000000000"),
      BigInt("0x7fffffffffffffff"),
    );
  });
  function Dn(e, t, r, n, i, o) {
    if (r + n > e.length) throw new RangeError("Index out of range");
    if (r < 0) throw new RangeError("Index out of range");
  }
  function Bn(e, t, r, n, i) {
    return (
      (t = +t),
      (r = r >>> 0),
      i || Dn(e, t, r, 4, 34028234663852886e22, -34028234663852886e22),
      Ve.write(e, t, r, n, 23, 4),
      r + 4
    );
  }
  C.prototype.writeFloatLE = function (e, t, r) {
    return Bn(this, e, t, !0, r);
  };
  C.prototype.writeFloatBE = function (e, t, r) {
    return Bn(this, e, t, !1, r);
  };
  function $n(e, t, r, n, i) {
    return (
      (t = +t),
      (r = r >>> 0),
      i || Dn(e, t, r, 8, 17976931348623157e292, -17976931348623157e292),
      Ve.write(e, t, r, n, 52, 8),
      r + 8
    );
  }
  C.prototype.writeDoubleLE = function (e, t, r) {
    return $n(this, e, t, !0, r);
  };
  C.prototype.writeDoubleBE = function (e, t, r) {
    return $n(this, e, t, !1, r);
  };
  C.prototype.copy = function (e, t, r, n) {
    if (!C.isBuffer(e)) throw new TypeError("argument should be a Buffer");
    if (
      (r || (r = 0),
      !n && n !== 0 && (n = this.length),
      t >= e.length && (t = e.length),
      t || (t = 0),
      n > 0 && n < r && (n = r),
      n === r || e.length === 0 || this.length === 0)
    )
      return 0;
    if (t < 0) throw new RangeError("targetStart out of bounds");
    if (r < 0 || r >= this.length) throw new RangeError("Index out of range");
    if (n < 0) throw new RangeError("sourceEnd out of bounds");
    n > this.length && (n = this.length),
      e.length - t < n - r && (n = e.length - t + r);
    let i = n - r;
    return (
      this === e && typeof Uint8Array.prototype.copyWithin == "function"
        ? this.copyWithin(t, r, n)
        : Uint8Array.prototype.set.call(e, this.subarray(r, n), t),
      i
    );
  };
  C.prototype.fill = function (e, t, r, n) {
    if (typeof e == "string") {
      if (
        (typeof t == "string"
          ? ((n = t), (t = 0), (r = this.length))
          : typeof r == "string" && ((n = r), (r = this.length)),
        n !== void 0 && typeof n != "string")
      )
        throw new TypeError("encoding must be a string");
      if (typeof n == "string" && !C.isEncoding(n))
        throw new TypeError("Unknown encoding: " + n);
      if (e.length === 1) {
        let o = e.charCodeAt(0);
        ((n === "utf8" && o < 128) || n === "latin1") && (e = o);
      }
    } else
      typeof e == "number"
        ? (e = e & 255)
        : typeof e == "boolean" && (e = Number(e));
    if (t < 0 || this.length < t || this.length < r)
      throw new RangeError("Out of range index");
    if (r <= t) return this;
    (t = t >>> 0), (r = r === void 0 ? this.length : r >>> 0), e || (e = 0);
    let i;
    if (typeof e == "number") for (i = t; i < r; ++i) this[i] = e;
    else {
      let o = C.isBuffer(e) ? e : C.from(e, n),
        s = o.length;
      if (s === 0)
        throw new TypeError(
          'The value "' + e + '" is invalid for argument "value"',
        );
      for (i = 0; i < r - t; ++i) this[i + t] = o[i % s];
    }
    return this;
  };
  var Ue = {};
  function Nr(e, t, r) {
    Ue[e] = class extends r {
      constructor() {
        super(),
          Object.defineProperty(this, "message", {
            value: t.apply(this, arguments),
            writable: !0,
            configurable: !0,
          }),
          (this.name = `${this.name} [${e}]`),
          this.stack,
          delete this.name;
      }
      get code() {
        return e;
      }
      set code(n) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: n,
          writable: !0,
        });
      }
      toString() {
        return `${this.name} [${e}]: ${this.message}`;
      }
    };
  }
  Nr(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function (e) {
      return e
        ? `${e} is outside of buffer bounds`
        : "Attempt to access memory outside buffer bounds";
    },
    RangeError,
  );
  Nr(
    "ERR_INVALID_ARG_TYPE",
    function (e, t) {
      return `The "${e}" argument must be of type number. Received type ${typeof t}`;
    },
    TypeError,
  );
  Nr(
    "ERR_OUT_OF_RANGE",
    function (e, t, r) {
      let n = `The value of "${e}" is out of range.`,
        i = r;
      return (
        Number.isInteger(r) && Math.abs(r) > 2 ** 32
          ? (i = Rn(String(r)))
          : typeof r == "bigint" &&
            ((i = String(r)),
            (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) &&
              (i = Rn(i)),
            (i += "n")),
        (n += ` It must be ${t}. Received ${i}`),
        n
      );
    },
    RangeError,
  );
  function Rn(e) {
    let t = "",
      r = e.length,
      n = e[0] === "-" ? 1 : 0;
    for (; r >= n + 4; r -= 3) t = `_${e.slice(r - 3, r)}${t}`;
    return `${e.slice(0, r)}${t}`;
  }
  function Hs(e, t, r) {
    je(t, "offset"),
      (e[t] === void 0 || e[t + r] === void 0) && at(t, e.length - (r + 1));
  }
  function qn(e, t, r, n, i, o) {
    if (e > r || e < t) {
      let s = typeof t == "bigint" ? "n" : "",
        a;
      throw (
        (o > 3
          ? t === 0 || t === BigInt(0)
            ? (a = `>= 0${s} and < 2${s} ** ${(o + 1) * 8}${s}`)
            : (a = `>= -(2${s} ** ${(o + 1) * 8 - 1}${s}) and < 2 ** ${(o + 1) * 8 - 1}${s}`)
          : (a = `>= ${t}${s} and <= ${r}${s}`),
        new Ue.ERR_OUT_OF_RANGE("value", a, e))
      );
    }
    Hs(n, i, o);
  }
  function je(e, t) {
    if (typeof e != "number") throw new Ue.ERR_INVALID_ARG_TYPE(t, "number", e);
  }
  function at(e, t, r) {
    throw Math.floor(e) !== e
      ? (je(e, r), new Ue.ERR_OUT_OF_RANGE(r || "offset", "an integer", e))
      : t < 0
        ? new Ue.ERR_BUFFER_OUT_OF_BOUNDS()
        : new Ue.ERR_OUT_OF_RANGE(
            r || "offset",
            `>= ${r ? 1 : 0} and <= ${t}`,
            e,
          );
  }
  var Ks = /[^+/0-9A-Za-z-_]/g;
  function zs(e) {
    if (((e = e.split("=")[0]), (e = e.trim().replace(Ks, "")), e.length < 2))
      return "";
    for (; e.length % 4 !== 0; ) e = e + "=";
    return e;
  }
  function Ir(e, t) {
    t = t || 1 / 0;
    let r,
      n = e.length,
      i = null,
      o = [];
    for (let s = 0; s < n; ++s) {
      if (((r = e.charCodeAt(s)), r > 55295 && r < 57344)) {
        if (!i) {
          if (r > 56319) {
            (t -= 3) > -1 && o.push(239, 191, 189);
            continue;
          } else if (s + 1 === n) {
            (t -= 3) > -1 && o.push(239, 191, 189);
            continue;
          }
          i = r;
          continue;
        }
        if (r < 56320) {
          (t -= 3) > -1 && o.push(239, 191, 189), (i = r);
          continue;
        }
        r = (((i - 55296) << 10) | (r - 56320)) + 65536;
      } else i && (t -= 3) > -1 && o.push(239, 191, 189);
      if (((i = null), r < 128)) {
        if ((t -= 1) < 0) break;
        o.push(r);
      } else if (r < 2048) {
        if ((t -= 2) < 0) break;
        o.push((r >> 6) | 192, (r & 63) | 128);
      } else if (r < 65536) {
        if ((t -= 3) < 0) break;
        o.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (r & 63) | 128);
      } else if (r < 1114112) {
        if ((t -= 4) < 0) break;
        o.push(
          (r >> 18) | 240,
          ((r >> 12) & 63) | 128,
          ((r >> 6) & 63) | 128,
          (r & 63) | 128,
        );
      } else throw new Error("Invalid code point");
    }
    return o;
  }
  function Ys(e) {
    let t = [];
    for (let r = 0; r < e.length; ++r) t.push(e.charCodeAt(r) & 255);
    return t;
  }
  function Zs(e, t) {
    let r,
      n,
      i,
      o = [];
    for (let s = 0; s < e.length && !((t -= 2) < 0); ++s)
      (r = e.charCodeAt(s)), (n = r >> 8), (i = r % 256), o.push(i), o.push(n);
    return o;
  }
  function Un(e) {
    return Mr.toByteArray(zs(e));
  }
  function Lt(e, t, r, n) {
    let i;
    for (i = 0; i < n && !(i + r >= t.length || i >= e.length); ++i)
      t[i + r] = e[i];
    return i;
  }
  function ue(e, t) {
    return (
      e instanceof t ||
      (e != null &&
        e.constructor != null &&
        e.constructor.name != null &&
        e.constructor.name === t.name)
    );
  }
  function Fr(e) {
    return e !== e;
  }
  var Xs = (function () {
    let e = "0123456789abcdef",
      t = new Array(256);
    for (let r = 0; r < 16; ++r) {
      let n = r * 16;
      for (let i = 0; i < 16; ++i) t[n + i] = e[r] + e[i];
    }
    return t;
  })();
  function Te(e) {
    return typeof BigInt > "u" ? ea : e;
  }
  function ea() {
    throw new Error("BigInt not supported");
  }
});
var w,
  d = ye(() => {
    "use strict";
    w = Le(Vn());
  });
function ta() {
  return !1;
}
var ra,
  na,
  Wn,
  Gn = ye(() => {
    "use strict";
    d();
    c();
    p();
    f();
    m();
    (ra = {}), (na = { existsSync: ta, promises: ra }), (Wn = na);
  });
var ii = Ce((mp, ni) => {
  "use strict";
  d();
  c();
  p();
  f();
  m();
  ni.exports = (Bt(), kr(qr)).format;
});
var qr = {};
st(qr, {
  default: () => sa,
  deprecate: () => si,
  format: () => ai,
  inspect: () => $t,
  promisify: () => oi,
});
function oi(e) {
  return (...t) =>
    new Promise((r, n) => {
      e(...t, (i, o) => {
        i ? n(i) : r(o);
      });
    });
}
function si(e, t) {
  return (...r) => (console.warn(t), e(...r));
}
function $t(e) {
  return JSON.stringify(e, (t, r) =>
    typeof r == "function"
      ? r.toString()
      : typeof r == "bigint"
        ? `${r}n`
        : r instanceof Error
          ? { ...r, message: r.message, stack: r.stack }
          : r,
  );
}
var ai,
  oa,
  sa,
  Bt = ye(() => {
    "use strict";
    d();
    c();
    p();
    f();
    m();
    (ai = ii()),
      (oa = { promisify: oi, deprecate: si, inspect: $t, format: ai }),
      (sa = oa);
  });
function pa(...e) {
  return e.join("/");
}
function fa(...e) {
  return e.join("/");
}
var pi,
  ma,
  da,
  ut,
  fi = ye(() => {
    "use strict";
    d();
    c();
    p();
    f();
    m();
    (pi = "/"),
      (ma = { sep: pi }),
      (da = { resolve: pa, posix: ma, join: fa, sep: pi }),
      (ut = da);
  });
var Ut,
  di = ye(() => {
    "use strict";
    d();
    c();
    p();
    f();
    m();
    Ut = class {
      constructor() {
        this.events = {};
      }
      on(t, r) {
        return (
          this.events[t] || (this.events[t] = []), this.events[t].push(r), this
        );
      }
      emit(t, ...r) {
        return this.events[t]
          ? (this.events[t].forEach((n) => {
              n(...r);
            }),
            !0)
          : !1;
      }
    };
  });
var hi = Ce((Af, gi) => {
  "use strict";
  d();
  c();
  p();
  f();
  m();
  gi.exports = (e, t = 1, r) => {
    if (
      ((r = { indent: " ", includeEmptyLines: !1, ...r }), typeof e != "string")
    )
      throw new TypeError(
        `Expected \`input\` to be a \`string\`, got \`${typeof e}\``,
      );
    if (typeof t != "number")
      throw new TypeError(
        `Expected \`count\` to be a \`number\`, got \`${typeof t}\``,
      );
    if (typeof r.indent != "string")
      throw new TypeError(
        `Expected \`options.indent\` to be a \`string\`, got \`${typeof r.indent}\``,
      );
    if (t === 0) return e;
    let n = r.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
    return e.replace(n, r.indent.repeat(t));
  };
});
var Ei = Ce((Bf, wi) => {
  "use strict";
  d();
  c();
  p();
  f();
  m();
  wi.exports = ({ onlyFirst: e = !1 } = {}) => {
    let t = [
      "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
      "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))",
    ].join("|");
    return new RegExp(t, e ? void 0 : "g");
  };
});
var xi = Ce((Qf, bi) => {
  "use strict";
  d();
  c();
  p();
  f();
  m();
  var ba = Ei();
  bi.exports = (e) => (typeof e == "string" ? e.replace(ba(), "") : e);
});
var Ti = Ce((zg, Ca) => {
  Ca.exports = {
    name: "@prisma/engines-version",
    version: "5.10.0-34.5a9203d0590c951969e85a7d07215503f4672eb9",
    main: "index.js",
    types: "index.d.ts",
    license: "Apache-2.0",
    author: "Tim Suchanek <suchanek@prisma.io>",
    prisma: { enginesVersion: "5a9203d0590c951969e85a7d07215503f4672eb9" },
    repository: {
      type: "git",
      url: "https://github.com/prisma/engines-wrapper.git",
      directory: "packages/engines-version",
    },
    devDependencies: { "@types/node": "18.19.15", typescript: "4.9.5" },
    files: ["index.js", "index.d.ts"],
    scripts: { build: "tsc -d" },
  };
});
var Ai = Ce(() => {
  "use strict";
  d();
  c();
  p();
  f();
  m();
});
var dn = Ce((PP, Oo) => {
  "use strict";
  d();
  c();
  p();
  f();
  m();
  Oo.exports = (function () {
    function e(t, r, n, i, o) {
      return t < r || n < r ? (t > n ? n + 1 : t + 1) : i === o ? r : r + 1;
    }
    return function (t, r) {
      if (t === r) return 0;
      if (t.length > r.length) {
        var n = t;
        (t = r), (r = n);
      }
      for (
        var i = t.length, o = r.length;
        i > 0 && t.charCodeAt(i - 1) === r.charCodeAt(o - 1);

      )
        i--, o--;
      for (var s = 0; s < i && t.charCodeAt(s) === r.charCodeAt(s); ) s++;
      if (((i -= s), (o -= s), i === 0 || o < 3)) return o;
      var a = 0,
        l,
        u,
        g,
        h,
        E,
        S,
        A,
        R,
        I,
        _,
        F,
        k,
        N = [];
      for (l = 0; l < i; l++) N.push(l + 1), N.push(t.charCodeAt(s + l));
      for (var ie = N.length - 1; a < o - 3; )
        for (
          I = r.charCodeAt(s + (u = a)),
            _ = r.charCodeAt(s + (g = a + 1)),
            F = r.charCodeAt(s + (h = a + 2)),
            k = r.charCodeAt(s + (E = a + 3)),
            S = a += 4,
            l = 0;
          l < ie;
          l += 2
        )
          (A = N[l]),
            (R = N[l + 1]),
            (u = e(A, u, g, I, R)),
            (g = e(u, g, h, _, R)),
            (h = e(g, h, E, F, R)),
            (S = e(h, E, S, k, R)),
            (N[l] = S),
            (E = h),
            (h = g),
            (g = u),
            (u = A);
      for (; a < o; )
        for (I = r.charCodeAt(s + (u = a)), S = ++a, l = 0; l < ie; l += 2)
          (A = N[l]), (N[l] = S = e(A, u, S, I, N[l + 1])), (u = A);
      return S;
    };
  })();
});
var Gu = {};
st(Gu, {
  Debug: () => Ur,
  Decimal: () => me,
  Extensions: () => Dr,
  MetricsClient: () => Ge,
  NotFoundError: () => Ee,
  PrismaClientInitializationError: () => D,
  PrismaClientKnownRequestError: () => J,
  PrismaClientRustPanicError: () => be,
  PrismaClientUnknownRequestError: () => W,
  PrismaClientValidationError: () => G,
  Public: () => Br,
  Sql: () => re,
  defineDmmfProperty: () => Ci,
  detectRuntime: () => Ie,
  empty: () => Si,
  getPrismaClient: () => bs,
  join: () => Ri,
  makeStrictEnum: () => xs,
  objectEnumValues: () => Qt,
  raw: () => Zr,
  sqltag: () => Xr,
  warnEnvConflicts: () => void 0,
  warnOnce: () => mt,
});
module.exports = kr(Gu);
d();
c();
p();
f();
m();
var Dr = {};
st(Dr, { defineExtension: () => jn, getExtensionContext: () => Qn });
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
function jn(e) {
  return typeof e == "function" ? e : (t) => t.$extends(e);
}
d();
c();
p();
f();
m();
function Qn(e) {
  return e;
}
var Br = {};
st(Br, { validator: () => Jn });
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
function Jn(...e) {
  return (t) => t;
}
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
var $r,
  Hn,
  Kn,
  zn,
  Yn = !0;
typeof y < "u" &&
  (({
    FORCE_COLOR: $r,
    NODE_DISABLE_COLORS: Hn,
    NO_COLOR: Kn,
    TERM: zn,
  } = y.env || {}),
  (Yn = y.stdout && y.stdout.isTTY));
var ia = {
  enabled:
    !Hn && Kn == null && zn !== "dumb" && (($r != null && $r !== "0") || Yn),
};
function q(e, t) {
  let r = new RegExp(`\\x1b\\[${t}m`, "g"),
    n = `\x1B[${e}m`,
    i = `\x1B[${t}m`;
  return function (o) {
    return !ia.enabled || o == null
      ? o
      : n + (~("" + o).indexOf(i) ? o.replace(r, i + n) : o) + i;
  };
}
var Qc = q(0, 0),
  Nt = q(1, 22),
  Ft = q(2, 22),
  Jc = q(3, 23),
  Zn = q(4, 24),
  Wc = q(7, 27),
  Gc = q(8, 28),
  Hc = q(9, 29),
  Kc = q(30, 39),
  Je = q(31, 39),
  Xn = q(32, 39),
  Dt = q(33, 39),
  ei = q(34, 39),
  zc = q(35, 39),
  ti = q(36, 39),
  Yc = q(37, 39),
  ri = q(90, 39),
  Zc = q(90, 39),
  Xc = q(40, 49),
  ep = q(41, 49),
  tp = q(42, 49),
  rp = q(43, 49),
  np = q(44, 49),
  ip = q(45, 49),
  op = q(46, 49),
  sp = q(47, 49);
d();
c();
p();
f();
m();
var aa = 100,
  li = ["green", "yellow", "blue", "magenta", "cyan", "red"],
  qt = [],
  ui = Date.now(),
  la = 0;
globalThis.DEBUG ??= y.env.DEBUG ?? "";
globalThis.DEBUG_COLORS ??= y.env.DEBUG_COLORS
  ? y.env.DEBUG_COLORS === "true"
  : !0;
var lt = {
  enable(e) {
    typeof e == "string" && (globalThis.DEBUG = e);
  },
  disable() {
    let e = globalThis.DEBUG;
    return (globalThis.DEBUG = ""), e;
  },
  enabled(e) {
    let t = globalThis.DEBUG.split(",").map((i) =>
        i.replace(/[.+?^${}()|[\]\\]/g, "\\$&"),
      ),
      r = t.some((i) =>
        i === "" || i[0] === "-"
          ? !1
          : e.match(RegExp(i.split("*").join(".*") + "$")),
      ),
      n = t.some((i) =>
        i === "" || i[0] !== "-"
          ? !1
          : e.match(RegExp(i.slice(1).split("*").join(".*") + "$")),
      );
    return r && !n;
  },
  log: (...e) => {
    let [t, r, ...n] = e,
      i;
    typeof require == "function" &&
    typeof y < "u" &&
    typeof y.stderr < "u" &&
    typeof y.stderr.write == "function"
      ? (i = (...o) => {
          let s = (Bt(), kr(qr));
          y.stderr.write(
            s.format(...o) +
              `
`,
          );
        })
      : (i = console.warn ?? console.log),
      i(`${t} ${r}`, ...n);
  },
  formatters: {},
};
function ua(e) {
  let t = {
      color: li[la++ % li.length],
      enabled: lt.enabled(e),
      namespace: e,
      log: lt.log,
      extend: () => {},
    },
    r = (...n) => {
      let { enabled: i, namespace: o, color: s, log: a } = t;
      if (
        (n.length !== 0 && qt.push([o, ...n]),
        qt.length > aa && qt.shift(),
        lt.enabled(o) || i)
      ) {
        let l = n.map((g) => (typeof g == "string" ? g : ca(g))),
          u = `+${Date.now() - ui}ms`;
        (ui = Date.now()), a(o, ...l, u);
      }
    };
  return new Proxy(r, { get: (n, i) => t[i], set: (n, i, o) => (t[i] = o) });
}
var Ur = new Proxy(ua, { get: (e, t) => lt[t], set: (e, t, r) => (lt[t] = r) });
function ca(e, t = 2) {
  let r = new Set();
  return JSON.stringify(
    e,
    (n, i) => {
      if (typeof i == "object" && i !== null) {
        if (r.has(i)) return "[Circular *]";
        r.add(i);
      } else if (typeof i == "bigint") return i.toString();
      return i;
    },
    t,
  );
}
function ci() {
  qt.length = 0;
}
var oe = Ur;
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
var Vr = [
  "darwin",
  "darwin-arm64",
  "debian-openssl-1.0.x",
  "debian-openssl-1.1.x",
  "debian-openssl-3.0.x",
  "rhel-openssl-1.0.x",
  "rhel-openssl-1.1.x",
  "rhel-openssl-3.0.x",
  "linux-arm64-openssl-1.1.x",
  "linux-arm64-openssl-1.0.x",
  "linux-arm64-openssl-3.0.x",
  "linux-arm-openssl-1.1.x",
  "linux-arm-openssl-1.0.x",
  "linux-arm-openssl-3.0.x",
  "linux-musl",
  "linux-musl-openssl-3.0.x",
  "linux-musl-arm64-openssl-1.1.x",
  "linux-musl-arm64-openssl-3.0.x",
  "linux-nixos",
  "linux-static-x64",
  "linux-static-arm64",
  "windows",
  "freebsd11",
  "freebsd12",
  "freebsd13",
  "freebsd14",
  "freebsd15",
  "openbsd",
  "netbsd",
  "arm",
];
d();
c();
p();
f();
m();
var mi = "library";
function ct(e) {
  let t = ga();
  return (
    t ||
    (e?.config.engineType === "library"
      ? "library"
      : e?.config.engineType === "binary"
        ? "binary"
        : mi)
  );
}
function ga() {
  let e = y.env.PRISMA_CLIENT_ENGINE_TYPE;
  return e === "library" ? "library" : e === "binary" ? "binary" : void 0;
}
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
var Fe;
((t) => {
  let e;
  ((k) => (
    (k.findUnique = "findUnique"),
    (k.findUniqueOrThrow = "findUniqueOrThrow"),
    (k.findFirst = "findFirst"),
    (k.findFirstOrThrow = "findFirstOrThrow"),
    (k.findMany = "findMany"),
    (k.create = "create"),
    (k.createMany = "createMany"),
    (k.update = "update"),
    (k.updateMany = "updateMany"),
    (k.upsert = "upsert"),
    (k.delete = "delete"),
    (k.deleteMany = "deleteMany"),
    (k.groupBy = "groupBy"),
    (k.count = "count"),
    (k.aggregate = "aggregate"),
    (k.findRaw = "findRaw"),
    (k.aggregateRaw = "aggregateRaw")
  ))((e = t.ModelAction ||= {}));
})((Fe ||= {}));
var ft = {};
st(ft, {
  error: () => wa,
  info: () => ya,
  log: () => ha,
  query: () => Ea,
  should: () => yi,
  tags: () => pt,
  warn: () => jr,
});
d();
c();
p();
f();
m();
var pt = {
    error: Je("prisma:error"),
    warn: Dt("prisma:warn"),
    info: ti("prisma:info"),
    query: ei("prisma:query"),
  },
  yi = { warn: () => !y.env.PRISMA_DISABLE_WARNINGS };
function ha(...e) {
  console.log(...e);
}
function jr(e, ...t) {
  yi.warn() && console.warn(`${pt.warn} ${e}`, ...t);
}
function ya(e, ...t) {
  console.info(`${pt.info} ${e}`, ...t);
}
function wa(e, ...t) {
  console.error(`${pt.error} ${e}`, ...t);
}
function Ea(e, ...t) {
  console.log(`${pt.query} ${e}`, ...t);
}
d();
c();
p();
f();
m();
function Vt(e, t) {
  if (!e)
    throw new Error(
      `${t}. This should never happen. If you see this error, please, open an issue at https://pris.ly/prisma-prisma-bug-report`,
    );
}
d();
c();
p();
f();
m();
function De(e, t) {
  throw new Error(t);
}
d();
c();
p();
f();
m();
function Qr(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
d();
c();
p();
f();
m();
var Jr = (e, t) => e.reduce((r, n) => ((r[t(n)] = n), r), {});
d();
c();
p();
f();
m();
function We(e, t) {
  let r = {};
  for (let n of Object.keys(e)) r[n] = t(e[n], n);
  return r;
}
d();
c();
p();
f();
m();
function Wr(e, t) {
  if (e.length === 0) return;
  let r = e[0];
  for (let n = 1; n < e.length; n++) t(r, e[n]) < 0 && (r = e[n]);
  return r;
}
d();
c();
p();
f();
m();
function X(e, t) {
  Object.defineProperty(e, "name", { value: t, configurable: !0 });
}
d();
c();
p();
f();
m();
var vi = new Set(),
  mt = (e, t, ...r) => {
    vi.has(e) || (vi.add(e), jr(t, ...r));
  };
d();
c();
p();
f();
m();
var J = class extends Error {
  constructor(t, { code: r, clientVersion: n, meta: i, batchRequestIdx: o }) {
    super(t),
      (this.name = "PrismaClientKnownRequestError"),
      (this.code = r),
      (this.clientVersion = n),
      (this.meta = i),
      Object.defineProperty(this, "batchRequestIdx", {
        value: o,
        enumerable: !1,
        writable: !0,
      });
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientKnownRequestError";
  }
};
X(J, "PrismaClientKnownRequestError");
var Ee = class extends J {
  constructor(t, r) {
    super(t, { code: "P2025", clientVersion: r }),
      (this.name = "NotFoundError");
  }
};
X(Ee, "NotFoundError");
d();
c();
p();
f();
m();
var D = class e extends Error {
  constructor(t, r, n) {
    super(t),
      (this.name = "PrismaClientInitializationError"),
      (this.clientVersion = r),
      (this.errorCode = n),
      Error.captureStackTrace(e);
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientInitializationError";
  }
};
X(D, "PrismaClientInitializationError");
d();
c();
p();
f();
m();
var be = class extends Error {
  constructor(t, r) {
    super(t),
      (this.name = "PrismaClientRustPanicError"),
      (this.clientVersion = r);
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientRustPanicError";
  }
};
X(be, "PrismaClientRustPanicError");
d();
c();
p();
f();
m();
var W = class extends Error {
  constructor(t, { clientVersion: r, batchRequestIdx: n }) {
    super(t),
      (this.name = "PrismaClientUnknownRequestError"),
      (this.clientVersion = r),
      Object.defineProperty(this, "batchRequestIdx", {
        value: n,
        writable: !0,
        enumerable: !1,
      });
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientUnknownRequestError";
  }
};
X(W, "PrismaClientUnknownRequestError");
d();
c();
p();
f();
m();
var G = class extends Error {
  constructor(r, { clientVersion: n }) {
    super(r);
    this.name = "PrismaClientValidationError";
    this.clientVersion = n;
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientValidationError";
  }
};
X(G, "PrismaClientValidationError");
d();
c();
p();
f();
m();
var Ge = class {
  constructor(t) {
    this._engine = t;
  }
  prometheus(t) {
    return this._engine.metrics({ format: "prometheus", ...t });
  }
  json(t) {
    return this._engine.metrics({ format: "json", ...t });
  }
};
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
function dt(e) {
  let t;
  return {
    get() {
      return t || (t = { value: e() }), t.value;
    },
  };
}
function Ci(e, t) {
  let r = dt(() => xa(t));
  Object.defineProperty(e, "dmmf", { get: () => r.get() });
}
function xa(e) {
  throw new Error(
    "Prisma.dmmf is not available when running in edge runtimes.",
  );
}
function Gr(e) {
  return Object.entries(e).map(([t, r]) => ({ name: t, ...r }));
}
d();
c();
p();
f();
m();
var jt = Symbol(),
  Hr = new WeakMap(),
  xe = class {
    constructor(t) {
      t === jt
        ? Hr.set(this, `Prisma.${this._getName()}`)
        : Hr.set(
            this,
            `new Prisma.${this._getNamespace()}.${this._getName()}()`,
          );
    }
    _getName() {
      return this.constructor.name;
    }
    toString() {
      return Hr.get(this);
    }
  },
  gt = class extends xe {
    _getNamespace() {
      return "NullTypes";
    }
  },
  ht = class extends gt {};
Kr(ht, "DbNull");
var yt = class extends gt {};
Kr(yt, "JsonNull");
var wt = class extends gt {};
Kr(wt, "AnyNull");
var Qt = {
  classes: { DbNull: ht, JsonNull: yt, AnyNull: wt },
  instances: { DbNull: new ht(jt), JsonNull: new yt(jt), AnyNull: new wt(jt) },
};
function Kr(e, t) {
  Object.defineProperty(e, "name", { value: t, configurable: !0 });
}
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
function Et(e) {
  return {
    ok: !1,
    error: e,
    map() {
      return Et(e);
    },
    flatMap() {
      return Et(e);
    },
  };
}
var zr = class {
    constructor() {
      this.registeredErrors = [];
    }
    consumeError(t) {
      return this.registeredErrors[t];
    }
    registerNewError(t) {
      let r = 0;
      for (; this.registeredErrors[r] !== void 0; ) r++;
      return (this.registeredErrors[r] = { error: t }), r;
    }
  },
  Yr = (e) => {
    let t = new zr(),
      r = Be(t, e.startTransaction.bind(e)),
      n = {
        errorRegistry: t,
        queryRaw: Be(t, e.queryRaw.bind(e)),
        executeRaw: Be(t, e.executeRaw.bind(e)),
        provider: e.provider,
        startTransaction: async (...i) => (await r(...i)).map((s) => va(t, s)),
      };
    return (
      e.getConnectionInfo &&
        (n.getConnectionInfo = Pa(t, e.getConnectionInfo.bind(e))),
      n
    );
  },
  va = (e, t) => ({
    provider: t.provider,
    options: t.options,
    queryRaw: Be(e, t.queryRaw.bind(t)),
    executeRaw: Be(e, t.executeRaw.bind(t)),
    commit: Be(e, t.commit.bind(t)),
    rollback: Be(e, t.rollback.bind(t)),
  });
function Be(e, t) {
  return async (...r) => {
    try {
      return await t(...r);
    } catch (n) {
      let i = e.registerNewError(n);
      return Et({ kind: "GenericJs", id: i });
    }
  };
}
function Pa(e, t) {
  return (...r) => {
    try {
      return t(...r);
    } catch (n) {
      let i = e.registerNewError(n);
      return Et({ kind: "GenericJs", id: i });
    }
  };
}
var Es = Le(Ti());
var IA = Le(Ai());
di();
Gn();
fi();
d();
c();
p();
f();
m();
var re = class e {
  constructor(t, r) {
    if (t.length - 1 !== r.length)
      throw t.length === 0
        ? new TypeError("Expected at least 1 string")
        : new TypeError(
            `Expected ${t.length} strings to have ${t.length - 1} values`,
          );
    let n = r.reduce((s, a) => s + (a instanceof e ? a.values.length : 1), 0);
    (this.values = new Array(n)),
      (this.strings = new Array(n + 1)),
      (this.strings[0] = t[0]);
    let i = 0,
      o = 0;
    for (; i < r.length; ) {
      let s = r[i++],
        a = t[i];
      if (s instanceof e) {
        this.strings[o] += s.strings[0];
        let l = 0;
        for (; l < s.values.length; )
          (this.values[o++] = s.values[l++]), (this.strings[o] = s.strings[l]);
        this.strings[o] += a;
      } else (this.values[o++] = s), (this.strings[o] = a);
    }
  }
  get text() {
    let t = this.strings.length,
      r = 1,
      n = this.strings[0];
    for (; r < t; ) n += `$${r}${this.strings[r++]}`;
    return n;
  }
  get sql() {
    let t = this.strings.length,
      r = 1,
      n = this.strings[0];
    for (; r < t; ) n += `?${this.strings[r++]}`;
    return n;
  }
  get statement() {
    let t = this.strings.length,
      r = 1,
      n = this.strings[0];
    for (; r < t; ) n += `:${r}${this.strings[r++]}`;
    return n;
  }
  inspect() {
    return { text: this.text, sql: this.sql, values: this.values };
  }
};
function Ri(e, t = ",", r = "", n = "") {
  if (e.length === 0)
    throw new TypeError(
      "Expected `join([])` to be called with an array of multiple elements, but got an empty array",
    );
  return new re([r, ...Array(e.length - 1).fill(t), n], e);
}
function Zr(e) {
  return new re([e], []);
}
var Si = Zr("");
function Xr(e, ...t) {
  return new re(e, t);
}
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
function bt(e) {
  return {
    getKeys() {
      return Object.keys(e);
    },
    getPropertyValue(t) {
      return e[t];
    },
  };
}
d();
c();
p();
f();
m();
function ee(e, t) {
  return {
    getKeys() {
      return [e];
    },
    getPropertyValue() {
      return t();
    },
  };
}
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
var ce = class {
  constructor() {
    this._map = new Map();
  }
  get(t) {
    return this._map.get(t)?.value;
  }
  set(t, r) {
    this._map.set(t, { value: r });
  }
  getOrCreate(t, r) {
    let n = this._map.get(t);
    if (n) return n.value;
    let i = r();
    return this.set(t, i), i;
  }
};
function $e(e) {
  let t = new ce();
  return {
    getKeys() {
      return e.getKeys();
    },
    getPropertyValue(r) {
      return t.getOrCreate(r, () => e.getPropertyValue(r));
    },
    getPropertyDescriptor(r) {
      return e.getPropertyDescriptor?.(r);
    },
  };
}
d();
c();
p();
f();
m();
Bt();
d();
c();
p();
f();
m();
var Jt = { enumerable: !0, configurable: !0, writable: !0 };
function Wt(e) {
  let t = new Set(e);
  return {
    getOwnPropertyDescriptor: () => Jt,
    has: (r, n) => t.has(n),
    set: (r, n, i) => t.add(n) && Reflect.set(r, n, i),
    ownKeys: () => [...t],
  };
}
var ki = Symbol.for("nodejs.util.inspect.custom");
function pe(e, t) {
  let r = Ta(t),
    n = new Set(),
    i = new Proxy(e, {
      get(o, s) {
        if (n.has(s)) return o[s];
        let a = r.get(s);
        return a ? a.getPropertyValue(s) : o[s];
      },
      has(o, s) {
        if (n.has(s)) return !0;
        let a = r.get(s);
        return a ? a.has?.(s) ?? !0 : Reflect.has(o, s);
      },
      ownKeys(o) {
        let s = Mi(Reflect.ownKeys(o), r),
          a = Mi(Array.from(r.keys()), r);
        return [...new Set([...s, ...a, ...n])];
      },
      set(o, s, a) {
        return r.get(s)?.getPropertyDescriptor?.(s)?.writable === !1
          ? !1
          : (n.add(s), Reflect.set(o, s, a));
      },
      getOwnPropertyDescriptor(o, s) {
        let a = Reflect.getOwnPropertyDescriptor(o, s);
        if (a && !a.configurable) return a;
        let l = r.get(s);
        return l
          ? l.getPropertyDescriptor
            ? { ...Jt, ...l?.getPropertyDescriptor(s) }
            : Jt
          : a;
      },
      defineProperty(o, s, a) {
        return n.add(s), Reflect.defineProperty(o, s, a);
      },
    });
  return (
    (i[ki] = function (o, s, a = $t) {
      let l = { ...this };
      return delete l[ki], a(l, s);
    }),
    i
  );
}
function Ta(e) {
  let t = new Map();
  for (let r of e) {
    let n = r.getKeys();
    for (let i of n) t.set(i, r);
  }
  return t;
}
function Mi(e, t) {
  return e.filter((r) => t.get(r)?.has?.(r) ?? !0);
}
d();
c();
p();
f();
m();
function xt(e) {
  return {
    getKeys() {
      return e;
    },
    has() {
      return !1;
    },
    getPropertyValue() {},
  };
}
d();
c();
p();
f();
m();
function Gt(e, t) {
  return {
    batch: e,
    transaction:
      t?.kind === "batch"
        ? { isolationLevel: t.options.isolationLevel }
        : void 0,
  };
}
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
var He = class {
  constructor(t = 0, r) {
    this.context = r;
    this.lines = [];
    this.currentLine = "";
    this.currentIndent = 0;
    this.currentIndent = t;
  }
  write(t) {
    return typeof t == "string" ? (this.currentLine += t) : t.write(this), this;
  }
  writeJoined(t, r) {
    let n = r.length - 1;
    for (let i = 0; i < r.length; i++)
      this.write(r[i]), i !== n && this.write(t);
    return this;
  }
  writeLine(t) {
    return this.write(t).newLine();
  }
  newLine() {
    this.lines.push(this.indentedCurrentLine()),
      (this.currentLine = ""),
      (this.marginSymbol = void 0);
    let t = this.afterNextNewLineCallback;
    return (this.afterNextNewLineCallback = void 0), t?.(), this;
  }
  withIndent(t) {
    return this.indent(), t(this), this.unindent(), this;
  }
  afterNextNewline(t) {
    return (this.afterNextNewLineCallback = t), this;
  }
  indent() {
    return this.currentIndent++, this;
  }
  unindent() {
    return this.currentIndent > 0 && this.currentIndent--, this;
  }
  addMarginSymbol(t) {
    return (this.marginSymbol = t), this;
  }
  toString() {
    return this.lines.concat(this.indentedCurrentLine()).join(`
`);
  }
  getCurrentLineLength() {
    return this.currentLine.length;
  }
  indentedCurrentLine() {
    let t = this.currentLine.padStart(
      this.currentLine.length + 2 * this.currentIndent,
    );
    return this.marginSymbol ? this.marginSymbol + t.slice(1) : t;
  }
};
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
function Oi(e) {
  return e.substring(0, 1).toLowerCase() + e.substring(1);
}
d();
c();
p();
f();
m();
function Ke(e) {
  return (
    e instanceof Date || Object.prototype.toString.call(e) === "[object Date]"
  );
}
function Ht(e) {
  return e.toString() !== "Invalid Date";
}
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
var ze = 9e15,
  ke = 1e9,
  en = "0123456789abcdef",
  zt =
    "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
  Yt =
    "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
  tn = {
    precision: 20,
    rounding: 4,
    modulo: 1,
    toExpNeg: -7,
    toExpPos: 21,
    minE: -ze,
    maxE: ze,
    crypto: !1,
  },
  Ni,
  ve,
  L = !0,
  Xt = "[DecimalError] ",
  Se = Xt + "Invalid argument: ",
  Fi = Xt + "Precision limit exceeded",
  Di = Xt + "crypto unavailable",
  Bi = "[object Decimal]",
  Z = Math.floor,
  j = Math.pow,
  Aa = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
  Ra = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
  Sa = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
  $i = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
  le = 1e7,
  O = 7,
  ka = 9007199254740991,
  Ma = zt.length - 1,
  rn = Yt.length - 1,
  T = { toStringTag: Bi };
T.absoluteValue = T.abs = function () {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), M(e);
};
T.ceil = function () {
  return M(new this.constructor(this), this.e + 1, 2);
};
T.clampedTo = T.clamp = function (e, t) {
  var r,
    n = this,
    i = n.constructor;
  if (((e = new i(e)), (t = new i(t)), !e.s || !t.s)) return new i(NaN);
  if (e.gt(t)) throw Error(Se + t);
  return (r = n.cmp(e)), r < 0 ? e : n.cmp(t) > 0 ? t : new i(n);
};
T.comparedTo = T.cmp = function (e) {
  var t,
    r,
    n,
    i,
    o = this,
    s = o.d,
    a = (e = new o.constructor(e)).d,
    l = o.s,
    u = e.s;
  if (!s || !a)
    return !l || !u ? NaN : l !== u ? l : s === a ? 0 : !s ^ (l < 0) ? 1 : -1;
  if (!s[0] || !a[0]) return s[0] ? l : a[0] ? -u : 0;
  if (l !== u) return l;
  if (o.e !== e.e) return (o.e > e.e) ^ (l < 0) ? 1 : -1;
  for (n = s.length, i = a.length, t = 0, r = n < i ? n : i; t < r; ++t)
    if (s[t] !== a[t]) return (s[t] > a[t]) ^ (l < 0) ? 1 : -1;
  return n === i ? 0 : (n > i) ^ (l < 0) ? 1 : -1;
};
T.cosine = T.cos = function () {
  var e,
    t,
    r = this,
    n = r.constructor;
  return r.d
    ? r.d[0]
      ? ((e = n.precision),
        (t = n.rounding),
        (n.precision = e + Math.max(r.e, r.sd()) + O),
        (n.rounding = 1),
        (r = Oa(n, Qi(n, r))),
        (n.precision = e),
        (n.rounding = t),
        M(ve == 2 || ve == 3 ? r.neg() : r, e, t, !0))
      : new n(1)
    : new n(NaN);
};
T.cubeRoot = T.cbrt = function () {
  var e,
    t,
    r,
    n,
    i,
    o,
    s,
    a,
    l,
    u,
    g = this,
    h = g.constructor;
  if (!g.isFinite() || g.isZero()) return new h(g);
  for (
    L = !1,
      o = g.s * j(g.s * g, 1 / 3),
      !o || Math.abs(o) == 1 / 0
        ? ((r = z(g.d)),
          (e = g.e),
          (o = (e - r.length + 1) % 3) && (r += o == 1 || o == -2 ? "0" : "00"),
          (o = j(r, 1 / 3)),
          (e = Z((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2))),
          o == 1 / 0
            ? (r = "5e" + e)
            : ((r = o.toExponential()),
              (r = r.slice(0, r.indexOf("e") + 1) + e)),
          (n = new h(r)),
          (n.s = g.s))
        : (n = new h(o.toString())),
      s = (e = h.precision) + 3;
    ;

  )
    if (
      ((a = n),
      (l = a.times(a).times(a)),
      (u = l.plus(g)),
      (n = B(u.plus(g).times(a), u.plus(l), s + 2, 1)),
      z(a.d).slice(0, s) === (r = z(n.d)).slice(0, s))
    )
      if (((r = r.slice(s - 3, s + 1)), r == "9999" || (!i && r == "4999"))) {
        if (!i && (M(a, e + 1, 0), a.times(a).times(a).eq(g))) {
          n = a;
          break;
        }
        (s += 4), (i = 1);
      } else {
        (!+r || (!+r.slice(1) && r.charAt(0) == "5")) &&
          (M(n, e + 1, 1), (t = !n.times(n).times(n).eq(g)));
        break;
      }
  return (L = !0), M(n, e, h.rounding, t);
};
T.decimalPlaces = T.dp = function () {
  var e,
    t = this.d,
    r = NaN;
  if (t) {
    if (((e = t.length - 1), (r = (e - Z(this.e / O)) * O), (e = t[e]), e))
      for (; e % 10 == 0; e /= 10) r--;
    r < 0 && (r = 0);
  }
  return r;
};
T.dividedBy = T.div = function (e) {
  return B(this, new this.constructor(e));
};
T.dividedToIntegerBy = T.divToInt = function (e) {
  var t = this,
    r = t.constructor;
  return M(B(t, new r(e), 0, 1, 1), r.precision, r.rounding);
};
T.equals = T.eq = function (e) {
  return this.cmp(e) === 0;
};
T.floor = function () {
  return M(new this.constructor(this), this.e + 1, 3);
};
T.greaterThan = T.gt = function (e) {
  return this.cmp(e) > 0;
};
T.greaterThanOrEqualTo = T.gte = function (e) {
  var t = this.cmp(e);
  return t == 1 || t === 0;
};
T.hyperbolicCosine = T.cosh = function () {
  var e,
    t,
    r,
    n,
    i,
    o = this,
    s = o.constructor,
    a = new s(1);
  if (!o.isFinite()) return new s(o.s ? 1 / 0 : NaN);
  if (o.isZero()) return a;
  (r = s.precision),
    (n = s.rounding),
    (s.precision = r + Math.max(o.e, o.sd()) + 4),
    (s.rounding = 1),
    (i = o.d.length),
    i < 32
      ? ((e = Math.ceil(i / 3)), (t = (1 / tr(4, e)).toString()))
      : ((e = 16), (t = "2.3283064365386962890625e-10")),
    (o = Ye(s, 1, o.times(t), new s(1), !0));
  for (var l, u = e, g = new s(8); u--; )
    (l = o.times(o)), (o = a.minus(l.times(g.minus(l.times(g)))));
  return M(o, (s.precision = r), (s.rounding = n), !0);
};
T.hyperbolicSine = T.sinh = function () {
  var e,
    t,
    r,
    n,
    i = this,
    o = i.constructor;
  if (!i.isFinite() || i.isZero()) return new o(i);
  if (
    ((t = o.precision),
    (r = o.rounding),
    (o.precision = t + Math.max(i.e, i.sd()) + 4),
    (o.rounding = 1),
    (n = i.d.length),
    n < 3)
  )
    i = Ye(o, 2, i, i, !0);
  else {
    (e = 1.4 * Math.sqrt(n)),
      (e = e > 16 ? 16 : e | 0),
      (i = i.times(1 / tr(5, e))),
      (i = Ye(o, 2, i, i, !0));
    for (var s, a = new o(5), l = new o(16), u = new o(20); e--; )
      (s = i.times(i)), (i = i.times(a.plus(s.times(l.times(s).plus(u)))));
  }
  return (o.precision = t), (o.rounding = r), M(i, t, r, !0);
};
T.hyperbolicTangent = T.tanh = function () {
  var e,
    t,
    r = this,
    n = r.constructor;
  return r.isFinite()
    ? r.isZero()
      ? new n(r)
      : ((e = n.precision),
        (t = n.rounding),
        (n.precision = e + 7),
        (n.rounding = 1),
        B(r.sinh(), r.cosh(), (n.precision = e), (n.rounding = t)))
    : new n(r.s);
};
T.inverseCosine = T.acos = function () {
  var e,
    t = this,
    r = t.constructor,
    n = t.abs().cmp(1),
    i = r.precision,
    o = r.rounding;
  return n !== -1
    ? n === 0
      ? t.isNeg()
        ? ae(r, i, o)
        : new r(0)
      : new r(NaN)
    : t.isZero()
      ? ae(r, i + 4, o).times(0.5)
      : ((r.precision = i + 6),
        (r.rounding = 1),
        (t = t.asin()),
        (e = ae(r, i + 4, o).times(0.5)),
        (r.precision = i),
        (r.rounding = o),
        e.minus(t));
};
T.inverseHyperbolicCosine = T.acosh = function () {
  var e,
    t,
    r = this,
    n = r.constructor;
  return r.lte(1)
    ? new n(r.eq(1) ? 0 : NaN)
    : r.isFinite()
      ? ((e = n.precision),
        (t = n.rounding),
        (n.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4),
        (n.rounding = 1),
        (L = !1),
        (r = r.times(r).minus(1).sqrt().plus(r)),
        (L = !0),
        (n.precision = e),
        (n.rounding = t),
        r.ln())
      : new n(r);
};
T.inverseHyperbolicSine = T.asinh = function () {
  var e,
    t,
    r = this,
    n = r.constructor;
  return !r.isFinite() || r.isZero()
    ? new n(r)
    : ((e = n.precision),
      (t = n.rounding),
      (n.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6),
      (n.rounding = 1),
      (L = !1),
      (r = r.times(r).plus(1).sqrt().plus(r)),
      (L = !0),
      (n.precision = e),
      (n.rounding = t),
      r.ln());
};
T.inverseHyperbolicTangent = T.atanh = function () {
  var e,
    t,
    r,
    n,
    i = this,
    o = i.constructor;
  return i.isFinite()
    ? i.e >= 0
      ? new o(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN)
      : ((e = o.precision),
        (t = o.rounding),
        (n = i.sd()),
        Math.max(n, e) < 2 * -i.e - 1
          ? M(new o(i), e, t, !0)
          : ((o.precision = r = n - i.e),
            (i = B(i.plus(1), new o(1).minus(i), r + e, 1)),
            (o.precision = e + 4),
            (o.rounding = 1),
            (i = i.ln()),
            (o.precision = e),
            (o.rounding = t),
            i.times(0.5)))
    : new o(NaN);
};
T.inverseSine = T.asin = function () {
  var e,
    t,
    r,
    n,
    i = this,
    o = i.constructor;
  return i.isZero()
    ? new o(i)
    : ((t = i.abs().cmp(1)),
      (r = o.precision),
      (n = o.rounding),
      t !== -1
        ? t === 0
          ? ((e = ae(o, r + 4, n).times(0.5)), (e.s = i.s), e)
          : new o(NaN)
        : ((o.precision = r + 6),
          (o.rounding = 1),
          (i = i.div(new o(1).minus(i.times(i)).sqrt().plus(1)).atan()),
          (o.precision = r),
          (o.rounding = n),
          i.times(2)));
};
T.inverseTangent = T.atan = function () {
  var e,
    t,
    r,
    n,
    i,
    o,
    s,
    a,
    l,
    u = this,
    g = u.constructor,
    h = g.precision,
    E = g.rounding;
  if (u.isFinite()) {
    if (u.isZero()) return new g(u);
    if (u.abs().eq(1) && h + 4 <= rn)
      return (s = ae(g, h + 4, E).times(0.25)), (s.s = u.s), s;
  } else {
    if (!u.s) return new g(NaN);
    if (h + 4 <= rn) return (s = ae(g, h + 4, E).times(0.5)), (s.s = u.s), s;
  }
  for (
    g.precision = a = h + 10,
      g.rounding = 1,
      r = Math.min(28, (a / O + 2) | 0),
      e = r;
    e;
    --e
  )
    u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (
    L = !1, t = Math.ceil(a / O), n = 1, l = u.times(u), s = new g(u), i = u;
    e !== -1;

  )
    if (
      ((i = i.times(l)),
      (o = s.minus(i.div((n += 2)))),
      (i = i.times(l)),
      (s = o.plus(i.div((n += 2)))),
      s.d[t] !== void 0)
    )
      for (e = t; s.d[e] === o.d[e] && e--; );
  return (
    r && (s = s.times(2 << (r - 1))),
    (L = !0),
    M(s, (g.precision = h), (g.rounding = E), !0)
  );
};
T.isFinite = function () {
  return !!this.d;
};
T.isInteger = T.isInt = function () {
  return !!this.d && Z(this.e / O) > this.d.length - 2;
};
T.isNaN = function () {
  return !this.s;
};
T.isNegative = T.isNeg = function () {
  return this.s < 0;
};
T.isPositive = T.isPos = function () {
  return this.s > 0;
};
T.isZero = function () {
  return !!this.d && this.d[0] === 0;
};
T.lessThan = T.lt = function (e) {
  return this.cmp(e) < 0;
};
T.lessThanOrEqualTo = T.lte = function (e) {
  return this.cmp(e) < 1;
};
T.logarithm = T.log = function (e) {
  var t,
    r,
    n,
    i,
    o,
    s,
    a,
    l,
    u = this,
    g = u.constructor,
    h = g.precision,
    E = g.rounding,
    S = 5;
  if (e == null) (e = new g(10)), (t = !0);
  else {
    if (((e = new g(e)), (r = e.d), e.s < 0 || !r || !r[0] || e.eq(1)))
      return new g(NaN);
    t = e.eq(10);
  }
  if (((r = u.d), u.s < 0 || !r || !r[0] || u.eq(1)))
    return new g(r && !r[0] ? -1 / 0 : u.s != 1 ? NaN : r ? 0 : 1 / 0);
  if (t)
    if (r.length > 1) o = !0;
    else {
      for (i = r[0]; i % 10 === 0; ) i /= 10;
      o = i !== 1;
    }
  if (
    ((L = !1),
    (a = h + S),
    (s = Re(u, a)),
    (n = t ? Zt(g, a + 10) : Re(e, a)),
    (l = B(s, n, a, 1)),
    vt(l.d, (i = h), E))
  )
    do
      if (
        ((a += 10),
        (s = Re(u, a)),
        (n = t ? Zt(g, a + 10) : Re(e, a)),
        (l = B(s, n, a, 1)),
        !o)
      ) {
        +z(l.d).slice(i + 1, i + 15) + 1 == 1e14 && (l = M(l, h + 1, 0));
        break;
      }
    while (vt(l.d, (i += 10), E));
  return (L = !0), M(l, h, E);
};
T.minus = T.sub = function (e) {
  var t,
    r,
    n,
    i,
    o,
    s,
    a,
    l,
    u,
    g,
    h,
    E,
    S = this,
    A = S.constructor;
  if (((e = new A(e)), !S.d || !e.d))
    return (
      !S.s || !e.s
        ? (e = new A(NaN))
        : S.d
          ? (e.s = -e.s)
          : (e = new A(e.d || S.s !== e.s ? S : NaN)),
      e
    );
  if (S.s != e.s) return (e.s = -e.s), S.plus(e);
  if (
    ((u = S.d), (E = e.d), (a = A.precision), (l = A.rounding), !u[0] || !E[0])
  ) {
    if (E[0]) e.s = -e.s;
    else if (u[0]) e = new A(S);
    else return new A(l === 3 ? -0 : 0);
    return L ? M(e, a, l) : e;
  }
  if (((r = Z(e.e / O)), (g = Z(S.e / O)), (u = u.slice()), (o = g - r), o)) {
    for (
      h = o < 0,
        h
          ? ((t = u), (o = -o), (s = E.length))
          : ((t = E), (r = g), (s = u.length)),
        n = Math.max(Math.ceil(a / O), s) + 2,
        o > n && ((o = n), (t.length = 1)),
        t.reverse(),
        n = o;
      n--;

    )
      t.push(0);
    t.reverse();
  } else {
    for (n = u.length, s = E.length, h = n < s, h && (s = n), n = 0; n < s; n++)
      if (u[n] != E[n]) {
        h = u[n] < E[n];
        break;
      }
    o = 0;
  }
  for (
    h && ((t = u), (u = E), (E = t), (e.s = -e.s)),
      s = u.length,
      n = E.length - s;
    n > 0;
    --n
  )
    u[s++] = 0;
  for (n = E.length; n > o; ) {
    if (u[--n] < E[n]) {
      for (i = n; i && u[--i] === 0; ) u[i] = le - 1;
      --u[i], (u[n] += le);
    }
    u[n] -= E[n];
  }
  for (; u[--s] === 0; ) u.pop();
  for (; u[0] === 0; u.shift()) --r;
  return u[0]
    ? ((e.d = u), (e.e = er(u, r)), L ? M(e, a, l) : e)
    : new A(l === 3 ? -0 : 0);
};
T.modulo = T.mod = function (e) {
  var t,
    r = this,
    n = r.constructor;
  return (
    (e = new n(e)),
    !r.d || !e.s || (e.d && !e.d[0])
      ? new n(NaN)
      : !e.d || (r.d && !r.d[0])
        ? M(new n(r), n.precision, n.rounding)
        : ((L = !1),
          n.modulo == 9
            ? ((t = B(r, e.abs(), 0, 3, 1)), (t.s *= e.s))
            : (t = B(r, e, 0, n.modulo, 1)),
          (t = t.times(e)),
          (L = !0),
          r.minus(t))
  );
};
T.naturalExponential = T.exp = function () {
  return nn(this);
};
T.naturalLogarithm = T.ln = function () {
  return Re(this);
};
T.negated = T.neg = function () {
  var e = new this.constructor(this);
  return (e.s = -e.s), M(e);
};
T.plus = T.add = function (e) {
  var t,
    r,
    n,
    i,
    o,
    s,
    a,
    l,
    u,
    g,
    h = this,
    E = h.constructor;
  if (((e = new E(e)), !h.d || !e.d))
    return (
      !h.s || !e.s
        ? (e = new E(NaN))
        : h.d || (e = new E(e.d || h.s === e.s ? h : NaN)),
      e
    );
  if (h.s != e.s) return (e.s = -e.s), h.minus(e);
  if (
    ((u = h.d), (g = e.d), (a = E.precision), (l = E.rounding), !u[0] || !g[0])
  )
    return g[0] || (e = new E(h)), L ? M(e, a, l) : e;
  if (((o = Z(h.e / O)), (n = Z(e.e / O)), (u = u.slice()), (i = o - n), i)) {
    for (
      i < 0
        ? ((r = u), (i = -i), (s = g.length))
        : ((r = g), (n = o), (s = u.length)),
        o = Math.ceil(a / O),
        s = o > s ? o + 1 : s + 1,
        i > s && ((i = s), (r.length = 1)),
        r.reverse();
      i--;

    )
      r.push(0);
    r.reverse();
  }
  for (
    s = u.length,
      i = g.length,
      s - i < 0 && ((i = s), (r = g), (g = u), (u = r)),
      t = 0;
    i;

  )
    (t = ((u[--i] = u[i] + g[i] + t) / le) | 0), (u[i] %= le);
  for (t && (u.unshift(t), ++n), s = u.length; u[--s] == 0; ) u.pop();
  return (e.d = u), (e.e = er(u, n)), L ? M(e, a, l) : e;
};
T.precision = T.sd = function (e) {
  var t,
    r = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Se + e);
  return (
    r.d ? ((t = qi(r.d)), e && r.e + 1 > t && (t = r.e + 1)) : (t = NaN), t
  );
};
T.round = function () {
  var e = this,
    t = e.constructor;
  return M(new t(e), e.e + 1, t.rounding);
};
T.sine = T.sin = function () {
  var e,
    t,
    r = this,
    n = r.constructor;
  return r.isFinite()
    ? r.isZero()
      ? new n(r)
      : ((e = n.precision),
        (t = n.rounding),
        (n.precision = e + Math.max(r.e, r.sd()) + O),
        (n.rounding = 1),
        (r = _a(n, Qi(n, r))),
        (n.precision = e),
        (n.rounding = t),
        M(ve > 2 ? r.neg() : r, e, t, !0))
    : new n(NaN);
};
T.squareRoot = T.sqrt = function () {
  var e,
    t,
    r,
    n,
    i,
    o,
    s = this,
    a = s.d,
    l = s.e,
    u = s.s,
    g = s.constructor;
  if (u !== 1 || !a || !a[0])
    return new g(!u || (u < 0 && (!a || a[0])) ? NaN : a ? s : 1 / 0);
  for (
    L = !1,
      u = Math.sqrt(+s),
      u == 0 || u == 1 / 0
        ? ((t = z(a)),
          (t.length + l) % 2 == 0 && (t += "0"),
          (u = Math.sqrt(t)),
          (l = Z((l + 1) / 2) - (l < 0 || l % 2)),
          u == 1 / 0
            ? (t = "5e" + l)
            : ((t = u.toExponential()),
              (t = t.slice(0, t.indexOf("e") + 1) + l)),
          (n = new g(t)))
        : (n = new g(u.toString())),
      r = (l = g.precision) + 3;
    ;

  )
    if (
      ((o = n),
      (n = o.plus(B(s, o, r + 2, 1)).times(0.5)),
      z(o.d).slice(0, r) === (t = z(n.d)).slice(0, r))
    )
      if (((t = t.slice(r - 3, r + 1)), t == "9999" || (!i && t == "4999"))) {
        if (!i && (M(o, l + 1, 0), o.times(o).eq(s))) {
          n = o;
          break;
        }
        (r += 4), (i = 1);
      } else {
        (!+t || (!+t.slice(1) && t.charAt(0) == "5")) &&
          (M(n, l + 1, 1), (e = !n.times(n).eq(s)));
        break;
      }
  return (L = !0), M(n, l, g.rounding, e);
};
T.tangent = T.tan = function () {
  var e,
    t,
    r = this,
    n = r.constructor;
  return r.isFinite()
    ? r.isZero()
      ? new n(r)
      : ((e = n.precision),
        (t = n.rounding),
        (n.precision = e + 10),
        (n.rounding = 1),
        (r = r.sin()),
        (r.s = 1),
        (r = B(r, new n(1).minus(r.times(r)).sqrt(), e + 10, 0)),
        (n.precision = e),
        (n.rounding = t),
        M(ve == 2 || ve == 4 ? r.neg() : r, e, t, !0))
    : new n(NaN);
};
T.times = T.mul = function (e) {
  var t,
    r,
    n,
    i,
    o,
    s,
    a,
    l,
    u,
    g = this,
    h = g.constructor,
    E = g.d,
    S = (e = new h(e)).d;
  if (((e.s *= g.s), !E || !E[0] || !S || !S[0]))
    return new h(
      !e.s || (E && !E[0] && !S) || (S && !S[0] && !E)
        ? NaN
        : !E || !S
          ? e.s / 0
          : e.s * 0,
    );
  for (
    r = Z(g.e / O) + Z(e.e / O),
      l = E.length,
      u = S.length,
      l < u && ((o = E), (E = S), (S = o), (s = l), (l = u), (u = s)),
      o = [],
      s = l + u,
      n = s;
    n--;

  )
    o.push(0);
  for (n = u; --n >= 0; ) {
    for (t = 0, i = l + n; i > n; )
      (a = o[i] + S[n] * E[i - n - 1] + t),
        (o[i--] = a % le | 0),
        (t = (a / le) | 0);
    o[i] = (o[i] + t) % le | 0;
  }
  for (; !o[--s]; ) o.pop();
  return (
    t ? ++r : o.shift(),
    (e.d = o),
    (e.e = er(o, r)),
    L ? M(e, h.precision, h.rounding) : e
  );
};
T.toBinary = function (e, t) {
  return sn(this, 2, e, t);
};
T.toDecimalPlaces = T.toDP = function (e, t) {
  var r = this,
    n = r.constructor;
  return (
    (r = new n(r)),
    e === void 0
      ? r
      : (ne(e, 0, ke),
        t === void 0 ? (t = n.rounding) : ne(t, 0, 8),
        M(r, e + r.e + 1, t))
  );
};
T.toExponential = function (e, t) {
  var r,
    n = this,
    i = n.constructor;
  return (
    e === void 0
      ? (r = fe(n, !0))
      : (ne(e, 0, ke),
        t === void 0 ? (t = i.rounding) : ne(t, 0, 8),
        (n = M(new i(n), e + 1, t)),
        (r = fe(n, !0, e + 1))),
    n.isNeg() && !n.isZero() ? "-" + r : r
  );
};
T.toFixed = function (e, t) {
  var r,
    n,
    i = this,
    o = i.constructor;
  return (
    e === void 0
      ? (r = fe(i))
      : (ne(e, 0, ke),
        t === void 0 ? (t = o.rounding) : ne(t, 0, 8),
        (n = M(new o(i), e + i.e + 1, t)),
        (r = fe(n, !1, e + n.e + 1))),
    i.isNeg() && !i.isZero() ? "-" + r : r
  );
};
T.toFraction = function (e) {
  var t,
    r,
    n,
    i,
    o,
    s,
    a,
    l,
    u,
    g,
    h,
    E,
    S = this,
    A = S.d,
    R = S.constructor;
  if (!A) return new R(S);
  if (
    ((u = r = new R(1)),
    (n = l = new R(0)),
    (t = new R(n)),
    (o = t.e = qi(A) - S.e - 1),
    (s = o % O),
    (t.d[0] = j(10, s < 0 ? O + s : s)),
    e == null)
  )
    e = o > 0 ? t : u;
  else {
    if (((a = new R(e)), !a.isInt() || a.lt(u))) throw Error(Se + a);
    e = a.gt(t) ? (o > 0 ? t : u) : a;
  }
  for (
    L = !1,
      a = new R(z(A)),
      g = R.precision,
      R.precision = o = A.length * O * 2;
    (h = B(a, t, 0, 1, 1)), (i = r.plus(h.times(n))), i.cmp(e) != 1;

  )
    (r = n),
      (n = i),
      (i = u),
      (u = l.plus(h.times(i))),
      (l = i),
      (i = t),
      (t = a.minus(h.times(i))),
      (a = i);
  return (
    (i = B(e.minus(r), n, 0, 1, 1)),
    (l = l.plus(i.times(u))),
    (r = r.plus(i.times(n))),
    (l.s = u.s = S.s),
    (E =
      B(u, n, o, 1)
        .minus(S)
        .abs()
        .cmp(B(l, r, o, 1).minus(S).abs()) < 1
        ? [u, n]
        : [l, r]),
    (R.precision = g),
    (L = !0),
    E
  );
};
T.toHexadecimal = T.toHex = function (e, t) {
  return sn(this, 16, e, t);
};
T.toNearest = function (e, t) {
  var r = this,
    n = r.constructor;
  if (((r = new n(r)), e == null)) {
    if (!r.d) return r;
    (e = new n(1)), (t = n.rounding);
  } else {
    if (((e = new n(e)), t === void 0 ? (t = n.rounding) : ne(t, 0, 8), !r.d))
      return e.s ? r : e;
    if (!e.d) return e.s && (e.s = r.s), e;
  }
  return (
    e.d[0]
      ? ((L = !1), (r = B(r, e, 0, t, 1).times(e)), (L = !0), M(r))
      : ((e.s = r.s), (r = e)),
    r
  );
};
T.toNumber = function () {
  return +this;
};
T.toOctal = function (e, t) {
  return sn(this, 8, e, t);
};
T.toPower = T.pow = function (e) {
  var t,
    r,
    n,
    i,
    o,
    s,
    a = this,
    l = a.constructor,
    u = +(e = new l(e));
  if (!a.d || !e.d || !a.d[0] || !e.d[0]) return new l(j(+a, u));
  if (((a = new l(a)), a.eq(1))) return a;
  if (((n = l.precision), (o = l.rounding), e.eq(1))) return M(a, n, o);
  if (((t = Z(e.e / O)), t >= e.d.length - 1 && (r = u < 0 ? -u : u) <= ka))
    return (i = Ui(l, a, r, n)), e.s < 0 ? new l(1).div(i) : M(i, n, o);
  if (((s = a.s), s < 0)) {
    if (t < e.d.length - 1) return new l(NaN);
    if ((e.d[t] & 1 || (s = 1), a.e == 0 && a.d[0] == 1 && a.d.length == 1))
      return (a.s = s), a;
  }
  return (
    (r = j(+a, u)),
    (t =
      r == 0 || !isFinite(r)
        ? Z(u * (Math.log("0." + z(a.d)) / Math.LN10 + a.e + 1))
        : new l(r + "").e),
    t > l.maxE + 1 || t < l.minE - 1
      ? new l(t > 0 ? s / 0 : 0)
      : ((L = !1),
        (l.rounding = a.s = 1),
        (r = Math.min(12, (t + "").length)),
        (i = nn(e.times(Re(a, n + r)), n)),
        i.d &&
          ((i = M(i, n + 5, 1)),
          vt(i.d, n, o) &&
            ((t = n + 10),
            (i = M(nn(e.times(Re(a, t + r)), t), t + 5, 1)),
            +z(i.d).slice(n + 1, n + 15) + 1 == 1e14 && (i = M(i, n + 1, 0)))),
        (i.s = s),
        (L = !0),
        (l.rounding = o),
        M(i, n, o))
  );
};
T.toPrecision = function (e, t) {
  var r,
    n = this,
    i = n.constructor;
  return (
    e === void 0
      ? (r = fe(n, n.e <= i.toExpNeg || n.e >= i.toExpPos))
      : (ne(e, 1, ke),
        t === void 0 ? (t = i.rounding) : ne(t, 0, 8),
        (n = M(new i(n), e, t)),
        (r = fe(n, e <= n.e || n.e <= i.toExpNeg, e))),
    n.isNeg() && !n.isZero() ? "-" + r : r
  );
};
T.toSignificantDigits = T.toSD = function (e, t) {
  var r = this,
    n = r.constructor;
  return (
    e === void 0
      ? ((e = n.precision), (t = n.rounding))
      : (ne(e, 1, ke), t === void 0 ? (t = n.rounding) : ne(t, 0, 8)),
    M(new n(r), e, t)
  );
};
T.toString = function () {
  var e = this,
    t = e.constructor,
    r = fe(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + r : r;
};
T.truncated = T.trunc = function () {
  return M(new this.constructor(this), this.e + 1, 1);
};
T.valueOf = T.toJSON = function () {
  var e = this,
    t = e.constructor,
    r = fe(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
  return e.isNeg() ? "-" + r : r;
};
function z(e) {
  var t,
    r,
    n,
    i = e.length - 1,
    o = "",
    s = e[0];
  if (i > 0) {
    for (o += s, t = 1; t < i; t++)
      (n = e[t] + ""), (r = O - n.length), r && (o += Ae(r)), (o += n);
    (s = e[t]), (n = s + ""), (r = O - n.length), r && (o += Ae(r));
  } else if (s === 0) return "0";
  for (; s % 10 === 0; ) s /= 10;
  return o + s;
}
function ne(e, t, r) {
  if (e !== ~~e || e < t || e > r) throw Error(Se + e);
}
function vt(e, t, r, n) {
  var i, o, s, a;
  for (o = e[0]; o >= 10; o /= 10) --t;
  return (
    --t < 0 ? ((t += O), (i = 0)) : ((i = Math.ceil((t + 1) / O)), (t %= O)),
    (o = j(10, O - t)),
    (a = e[i] % o | 0),
    n == null
      ? t < 3
        ? (t == 0 ? (a = (a / 100) | 0) : t == 1 && (a = (a / 10) | 0),
          (s =
            (r < 4 && a == 99999) ||
            (r > 3 && a == 49999) ||
            a == 5e4 ||
            a == 0))
        : (s =
            (((r < 4 && a + 1 == o) || (r > 3 && a + 1 == o / 2)) &&
              ((e[i + 1] / o / 100) | 0) == j(10, t - 2) - 1) ||
            ((a == o / 2 || a == 0) && ((e[i + 1] / o / 100) | 0) == 0))
      : t < 4
        ? (t == 0
            ? (a = (a / 1e3) | 0)
            : t == 1
              ? (a = (a / 100) | 0)
              : t == 2 && (a = (a / 10) | 0),
          (s = ((n || r < 4) && a == 9999) || (!n && r > 3 && a == 4999)))
        : (s =
            (((n || r < 4) && a + 1 == o) || (!n && r > 3 && a + 1 == o / 2)) &&
            ((e[i + 1] / o / 1e3) | 0) == j(10, t - 3) - 1),
    s
  );
}
function Kt(e, t, r) {
  for (var n, i = [0], o, s = 0, a = e.length; s < a; ) {
    for (o = i.length; o--; ) i[o] *= t;
    for (i[0] += en.indexOf(e.charAt(s++)), n = 0; n < i.length; n++)
      i[n] > r - 1 &&
        (i[n + 1] === void 0 && (i[n + 1] = 0),
        (i[n + 1] += (i[n] / r) | 0),
        (i[n] %= r));
  }
  return i.reverse();
}
function Oa(e, t) {
  var r, n, i;
  if (t.isZero()) return t;
  (n = t.d.length),
    n < 32
      ? ((r = Math.ceil(n / 3)), (i = (1 / tr(4, r)).toString()))
      : ((r = 16), (i = "2.3283064365386962890625e-10")),
    (e.precision += r),
    (t = Ye(e, 1, t.times(i), new e(1)));
  for (var o = r; o--; ) {
    var s = t.times(t);
    t = s.times(s).minus(s).times(8).plus(1);
  }
  return (e.precision -= r), t;
}
var B = (function () {
  function e(n, i, o) {
    var s,
      a = 0,
      l = n.length;
    for (n = n.slice(); l--; )
      (s = n[l] * i + a), (n[l] = s % o | 0), (a = (s / o) | 0);
    return a && n.unshift(a), n;
  }
  function t(n, i, o, s) {
    var a, l;
    if (o != s) l = o > s ? 1 : -1;
    else
      for (a = l = 0; a < o; a++)
        if (n[a] != i[a]) {
          l = n[a] > i[a] ? 1 : -1;
          break;
        }
    return l;
  }
  function r(n, i, o, s) {
    for (var a = 0; o--; )
      (n[o] -= a), (a = n[o] < i[o] ? 1 : 0), (n[o] = a * s + n[o] - i[o]);
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function (n, i, o, s, a, l) {
    var u,
      g,
      h,
      E,
      S,
      A,
      R,
      I,
      _,
      F,
      k,
      N,
      ie,
      V,
      Ar,
      kt,
      ot,
      Rr,
      se,
      Mt,
      Ot = n.constructor,
      Sr = n.s == i.s ? 1 : -1,
      Y = n.d,
      $ = i.d;
    if (!Y || !Y[0] || !$ || !$[0])
      return new Ot(
        !n.s || !i.s || (Y ? $ && Y[0] == $[0] : !$)
          ? NaN
          : (Y && Y[0] == 0) || !$
            ? Sr * 0
            : Sr / 0,
      );
    for (
      l
        ? ((S = 1), (g = n.e - i.e))
        : ((l = le), (S = O), (g = Z(n.e / S) - Z(i.e / S))),
        se = $.length,
        ot = Y.length,
        _ = new Ot(Sr),
        F = _.d = [],
        h = 0;
      $[h] == (Y[h] || 0);
      h++
    );
    if (
      ($[h] > (Y[h] || 0) && g--,
      o == null
        ? ((V = o = Ot.precision), (s = Ot.rounding))
        : a
          ? (V = o + (n.e - i.e) + 1)
          : (V = o),
      V < 0)
    )
      F.push(1), (A = !0);
    else {
      if (((V = (V / S + 2) | 0), (h = 0), se == 1)) {
        for (E = 0, $ = $[0], V++; (h < ot || E) && V--; h++)
          (Ar = E * l + (Y[h] || 0)), (F[h] = (Ar / $) | 0), (E = Ar % $ | 0);
        A = E || h < ot;
      } else {
        for (
          E = (l / ($[0] + 1)) | 0,
            E > 1 &&
              (($ = e($, E, l)),
              (Y = e(Y, E, l)),
              (se = $.length),
              (ot = Y.length)),
            kt = se,
            k = Y.slice(0, se),
            N = k.length;
          N < se;

        )
          k[N++] = 0;
        (Mt = $.slice()), Mt.unshift(0), (Rr = $[0]), $[1] >= l / 2 && ++Rr;
        do
          (E = 0),
            (u = t($, k, se, N)),
            u < 0
              ? ((ie = k[0]),
                se != N && (ie = ie * l + (k[1] || 0)),
                (E = (ie / Rr) | 0),
                E > 1
                  ? (E >= l && (E = l - 1),
                    (R = e($, E, l)),
                    (I = R.length),
                    (N = k.length),
                    (u = t(R, k, I, N)),
                    u == 1 && (E--, r(R, se < I ? Mt : $, I, l)))
                  : (E == 0 && (u = E = 1), (R = $.slice())),
                (I = R.length),
                I < N && R.unshift(0),
                r(k, R, N, l),
                u == -1 &&
                  ((N = k.length),
                  (u = t($, k, se, N)),
                  u < 1 && (E++, r(k, se < N ? Mt : $, N, l))),
                (N = k.length))
              : u === 0 && (E++, (k = [0])),
            (F[h++] = E),
            u && k[0] ? (k[N++] = Y[kt] || 0) : ((k = [Y[kt]]), (N = 1));
        while ((kt++ < ot || k[0] !== void 0) && V--);
        A = k[0] !== void 0;
      }
      F[0] || F.shift();
    }
    if (S == 1) (_.e = g), (Ni = A);
    else {
      for (h = 1, E = F[0]; E >= 10; E /= 10) h++;
      (_.e = h + g * S - 1), M(_, a ? o + _.e + 1 : o, s, A);
    }
    return _;
  };
})();
function M(e, t, r, n) {
  var i,
    o,
    s,
    a,
    l,
    u,
    g,
    h,
    E,
    S = e.constructor;
  e: if (t != null) {
    if (((h = e.d), !h)) return e;
    for (i = 1, a = h[0]; a >= 10; a /= 10) i++;
    if (((o = t - i), o < 0))
      (o += O),
        (s = t),
        (g = h[(E = 0)]),
        (l = (g / j(10, i - s - 1)) % 10 | 0);
    else if (((E = Math.ceil((o + 1) / O)), (a = h.length), E >= a))
      if (n) {
        for (; a++ <= E; ) h.push(0);
        (g = l = 0), (i = 1), (o %= O), (s = o - O + 1);
      } else break e;
    else {
      for (g = a = h[E], i = 1; a >= 10; a /= 10) i++;
      (o %= O),
        (s = o - O + i),
        (l = s < 0 ? 0 : (g / j(10, i - s - 1)) % 10 | 0);
    }
    if (
      ((n =
        n ||
        t < 0 ||
        h[E + 1] !== void 0 ||
        (s < 0 ? g : g % j(10, i - s - 1))),
      (u =
        r < 4
          ? (l || n) && (r == 0 || r == (e.s < 0 ? 3 : 2))
          : l > 5 ||
            (l == 5 &&
              (r == 4 ||
                n ||
                (r == 6 &&
                  (o > 0 ? (s > 0 ? g / j(10, i - s) : 0) : h[E - 1]) % 10 &
                    1) ||
                r == (e.s < 0 ? 8 : 7)))),
      t < 1 || !h[0])
    )
      return (
        (h.length = 0),
        u
          ? ((t -= e.e + 1), (h[0] = j(10, (O - (t % O)) % O)), (e.e = -t || 0))
          : (h[0] = e.e = 0),
        e
      );
    if (
      (o == 0
        ? ((h.length = E), (a = 1), E--)
        : ((h.length = E + 1),
          (a = j(10, O - o)),
          (h[E] = s > 0 ? ((g / j(10, i - s)) % j(10, s) | 0) * a : 0)),
      u)
    )
      for (;;)
        if (E == 0) {
          for (o = 1, s = h[0]; s >= 10; s /= 10) o++;
          for (s = h[0] += a, a = 1; s >= 10; s /= 10) a++;
          o != a && (e.e++, h[0] == le && (h[0] = 1));
          break;
        } else {
          if (((h[E] += a), h[E] != le)) break;
          (h[E--] = 0), (a = 1);
        }
    for (o = h.length; h[--o] === 0; ) h.pop();
  }
  return (
    L &&
      (e.e > S.maxE
        ? ((e.d = null), (e.e = NaN))
        : e.e < S.minE && ((e.e = 0), (e.d = [0]))),
    e
  );
}
function fe(e, t, r) {
  if (!e.isFinite()) return ji(e);
  var n,
    i = e.e,
    o = z(e.d),
    s = o.length;
  return (
    t
      ? (r && (n = r - s) > 0
          ? (o = o.charAt(0) + "." + o.slice(1) + Ae(n))
          : s > 1 && (o = o.charAt(0) + "." + o.slice(1)),
        (o = o + (e.e < 0 ? "e" : "e+") + e.e))
      : i < 0
        ? ((o = "0." + Ae(-i - 1) + o), r && (n = r - s) > 0 && (o += Ae(n)))
        : i >= s
          ? ((o += Ae(i + 1 - s)),
            r && (n = r - i - 1) > 0 && (o = o + "." + Ae(n)))
          : ((n = i + 1) < s && (o = o.slice(0, n) + "." + o.slice(n)),
            r && (n = r - s) > 0 && (i + 1 === s && (o += "."), (o += Ae(n)))),
    o
  );
}
function er(e, t) {
  var r = e[0];
  for (t *= O; r >= 10; r /= 10) t++;
  return t;
}
function Zt(e, t, r) {
  if (t > Ma) throw ((L = !0), r && (e.precision = r), Error(Fi));
  return M(new e(zt), t, 1, !0);
}
function ae(e, t, r) {
  if (t > rn) throw Error(Fi);
  return M(new e(Yt), t, r, !0);
}
function qi(e) {
  var t = e.length - 1,
    r = t * O + 1;
  if (((t = e[t]), t)) {
    for (; t % 10 == 0; t /= 10) r--;
    for (t = e[0]; t >= 10; t /= 10) r++;
  }
  return r;
}
function Ae(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function Ui(e, t, r, n) {
  var i,
    o = new e(1),
    s = Math.ceil(n / O + 4);
  for (L = !1; ; ) {
    if (
      (r % 2 && ((o = o.times(t)), _i(o.d, s) && (i = !0)),
      (r = Z(r / 2)),
      r === 0)
    ) {
      (r = o.d.length - 1), i && o.d[r] === 0 && ++o.d[r];
      break;
    }
    (t = t.times(t)), _i(t.d, s);
  }
  return (L = !0), o;
}
function Ii(e) {
  return e.d[e.d.length - 1] & 1;
}
function Vi(e, t, r) {
  for (var n, i = new e(t[0]), o = 0; ++o < t.length; )
    if (((n = new e(t[o])), n.s)) i[r](n) && (i = n);
    else {
      i = n;
      break;
    }
  return i;
}
function nn(e, t) {
  var r,
    n,
    i,
    o,
    s,
    a,
    l,
    u = 0,
    g = 0,
    h = 0,
    E = e.constructor,
    S = E.rounding,
    A = E.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new E(
      e.d
        ? e.d[0]
          ? e.s < 0
            ? 0
            : 1 / 0
          : 1
        : e.s
          ? e.s < 0
            ? 0
            : e
          : NaN,
    );
  for (
    t == null ? ((L = !1), (l = A)) : (l = t), a = new E(0.03125);
    e.e > -2;

  )
    (e = e.times(a)), (h += 5);
  for (
    n = ((Math.log(j(2, h)) / Math.LN10) * 2 + 5) | 0,
      l += n,
      r = o = s = new E(1),
      E.precision = l;
    ;

  ) {
    if (
      ((o = M(o.times(e), l, 1)),
      (r = r.times(++g)),
      (a = s.plus(B(o, r, l, 1))),
      z(a.d).slice(0, l) === z(s.d).slice(0, l))
    ) {
      for (i = h; i--; ) s = M(s.times(s), l, 1);
      if (t == null)
        if (u < 3 && vt(s.d, l - n, S, u))
          (E.precision = l += 10), (r = o = a = new E(1)), (g = 0), u++;
        else return M(s, (E.precision = A), S, (L = !0));
      else return (E.precision = A), s;
    }
    s = a;
  }
}
function Re(e, t) {
  var r,
    n,
    i,
    o,
    s,
    a,
    l,
    u,
    g,
    h,
    E,
    S = 1,
    A = 10,
    R = e,
    I = R.d,
    _ = R.constructor,
    F = _.rounding,
    k = _.precision;
  if (R.s < 0 || !I || !I[0] || (!R.e && I[0] == 1 && I.length == 1))
    return new _(I && !I[0] ? -1 / 0 : R.s != 1 ? NaN : I ? 0 : R);
  if (
    (t == null ? ((L = !1), (g = k)) : (g = t),
    (_.precision = g += A),
    (r = z(I)),
    (n = r.charAt(0)),
    Math.abs((o = R.e)) < 15e14)
  ) {
    for (; (n < 7 && n != 1) || (n == 1 && r.charAt(1) > 3); )
      (R = R.times(e)), (r = z(R.d)), (n = r.charAt(0)), S++;
    (o = R.e),
      n > 1 ? ((R = new _("0." + r)), o++) : (R = new _(n + "." + r.slice(1)));
  } else
    return (
      (u = Zt(_, g + 2, k).times(o + "")),
      (R = Re(new _(n + "." + r.slice(1)), g - A).plus(u)),
      (_.precision = k),
      t == null ? M(R, k, F, (L = !0)) : R
    );
  for (
    h = R,
      l = s = R = B(R.minus(1), R.plus(1), g, 1),
      E = M(R.times(R), g, 1),
      i = 3;
    ;

  ) {
    if (
      ((s = M(s.times(E), g, 1)),
      (u = l.plus(B(s, new _(i), g, 1))),
      z(u.d).slice(0, g) === z(l.d).slice(0, g))
    )
      if (
        ((l = l.times(2)),
        o !== 0 && (l = l.plus(Zt(_, g + 2, k).times(o + ""))),
        (l = B(l, new _(S), g, 1)),
        t == null)
      )
        if (vt(l.d, g - A, F, a))
          (_.precision = g += A),
            (u = s = R = B(h.minus(1), h.plus(1), g, 1)),
            (E = M(R.times(R), g, 1)),
            (i = a = 1);
        else return M(l, (_.precision = k), F, (L = !0));
      else return (_.precision = k), l;
    (l = u), (i += 2);
  }
}
function ji(e) {
  return String((e.s * e.s) / 0);
}
function on(e, t) {
  var r, n, i;
  for (
    (r = t.indexOf(".")) > -1 && (t = t.replace(".", "")),
      (n = t.search(/e/i)) > 0
        ? (r < 0 && (r = n), (r += +t.slice(n + 1)), (t = t.substring(0, n)))
        : r < 0 && (r = t.length),
      n = 0;
    t.charCodeAt(n) === 48;
    n++
  );
  for (i = t.length; t.charCodeAt(i - 1) === 48; --i);
  if (((t = t.slice(n, i)), t)) {
    if (
      ((i -= n),
      (e.e = r = r - n - 1),
      (e.d = []),
      (n = (r + 1) % O),
      r < 0 && (n += O),
      n < i)
    ) {
      for (n && e.d.push(+t.slice(0, n)), i -= O; n < i; )
        e.d.push(+t.slice(n, (n += O)));
      (t = t.slice(n)), (n = O - t.length);
    } else n -= i;
    for (; n--; ) t += "0";
    e.d.push(+t),
      L &&
        (e.e > e.constructor.maxE
          ? ((e.d = null), (e.e = NaN))
          : e.e < e.constructor.minE && ((e.e = 0), (e.d = [0])));
  } else (e.e = 0), (e.d = [0]);
  return e;
}
function Ia(e, t) {
  var r, n, i, o, s, a, l, u, g;
  if (t.indexOf("_") > -1) {
    if (((t = t.replace(/(\d)_(?=\d)/g, "$1")), $i.test(t))) return on(e, t);
  } else if (t === "Infinity" || t === "NaN")
    return +t || (e.s = NaN), (e.e = NaN), (e.d = null), e;
  if (Ra.test(t)) (r = 16), (t = t.toLowerCase());
  else if (Aa.test(t)) r = 2;
  else if (Sa.test(t)) r = 8;
  else throw Error(Se + t);
  for (
    o = t.search(/p/i),
      o > 0
        ? ((l = +t.slice(o + 1)), (t = t.substring(2, o)))
        : (t = t.slice(2)),
      o = t.indexOf("."),
      s = o >= 0,
      n = e.constructor,
      s &&
        ((t = t.replace(".", "")),
        (a = t.length),
        (o = a - o),
        (i = Ui(n, new n(r), o, o * 2))),
      u = Kt(t, r, le),
      g = u.length - 1,
      o = g;
    u[o] === 0;
    --o
  )
    u.pop();
  return o < 0
    ? new n(e.s * 0)
    : ((e.e = er(u, g)),
      (e.d = u),
      (L = !1),
      s && (e = B(e, i, a * 4)),
      l && (e = e.times(Math.abs(l) < 54 ? j(2, l) : qe.pow(2, l))),
      (L = !0),
      e);
}
function _a(e, t) {
  var r,
    n = t.d.length;
  if (n < 3) return t.isZero() ? t : Ye(e, 2, t, t);
  (r = 1.4 * Math.sqrt(n)),
    (r = r > 16 ? 16 : r | 0),
    (t = t.times(1 / tr(5, r))),
    (t = Ye(e, 2, t, t));
  for (var i, o = new e(5), s = new e(16), a = new e(20); r--; )
    (i = t.times(t)), (t = t.times(o.plus(i.times(s.times(i).minus(a)))));
  return t;
}
function Ye(e, t, r, n, i) {
  var o,
    s,
    a,
    l,
    u = 1,
    g = e.precision,
    h = Math.ceil(g / O);
  for (L = !1, l = r.times(r), a = new e(n); ; ) {
    if (
      ((s = B(a.times(l), new e(t++ * t++), g, 1)),
      (a = i ? n.plus(s) : n.minus(s)),
      (n = B(s.times(l), new e(t++ * t++), g, 1)),
      (s = a.plus(n)),
      s.d[h] !== void 0)
    ) {
      for (o = h; s.d[o] === a.d[o] && o--; );
      if (o == -1) break;
    }
    (o = a), (a = n), (n = s), (s = o), u++;
  }
  return (L = !0), (s.d.length = h + 1), s;
}
function tr(e, t) {
  for (var r = e; --t; ) r *= e;
  return r;
}
function Qi(e, t) {
  var r,
    n = t.s < 0,
    i = ae(e, e.precision, 1),
    o = i.times(0.5);
  if (((t = t.abs()), t.lte(o))) return (ve = n ? 4 : 1), t;
  if (((r = t.divToInt(i)), r.isZero())) ve = n ? 3 : 2;
  else {
    if (((t = t.minus(r.times(i))), t.lte(o)))
      return (ve = Ii(r) ? (n ? 2 : 3) : n ? 4 : 1), t;
    ve = Ii(r) ? (n ? 1 : 4) : n ? 3 : 2;
  }
  return t.minus(i).abs();
}
function sn(e, t, r, n) {
  var i,
    o,
    s,
    a,
    l,
    u,
    g,
    h,
    E,
    S = e.constructor,
    A = r !== void 0;
  if (
    (A
      ? (ne(r, 1, ke), n === void 0 ? (n = S.rounding) : ne(n, 0, 8))
      : ((r = S.precision), (n = S.rounding)),
    !e.isFinite())
  )
    g = ji(e);
  else {
    for (
      g = fe(e),
        s = g.indexOf("."),
        A
          ? ((i = 2), t == 16 ? (r = r * 4 - 3) : t == 8 && (r = r * 3 - 2))
          : (i = t),
        s >= 0 &&
          ((g = g.replace(".", "")),
          (E = new S(1)),
          (E.e = g.length - s),
          (E.d = Kt(fe(E), 10, i)),
          (E.e = E.d.length)),
        h = Kt(g, 10, i),
        o = l = h.length;
      h[--l] == 0;

    )
      h.pop();
    if (!h[0]) g = A ? "0p+0" : "0";
    else {
      if (
        (s < 0
          ? o--
          : ((e = new S(e)),
            (e.d = h),
            (e.e = o),
            (e = B(e, E, r, n, 0, i)),
            (h = e.d),
            (o = e.e),
            (u = Ni)),
        (s = h[r]),
        (a = i / 2),
        (u = u || h[r + 1] !== void 0),
        (u =
          n < 4
            ? (s !== void 0 || u) && (n === 0 || n === (e.s < 0 ? 3 : 2))
            : s > a ||
              (s === a &&
                (n === 4 ||
                  u ||
                  (n === 6 && h[r - 1] & 1) ||
                  n === (e.s < 0 ? 8 : 7)))),
        (h.length = r),
        u)
      )
        for (; ++h[--r] > i - 1; ) (h[r] = 0), r || (++o, h.unshift(1));
      for (l = h.length; !h[l - 1]; --l);
      for (s = 0, g = ""; s < l; s++) g += en.charAt(h[s]);
      if (A) {
        if (l > 1)
          if (t == 16 || t == 8) {
            for (s = t == 16 ? 4 : 3, --l; l % s; l++) g += "0";
            for (h = Kt(g, i, t), l = h.length; !h[l - 1]; --l);
            for (s = 1, g = "1."; s < l; s++) g += en.charAt(h[s]);
          } else g = g.charAt(0) + "." + g.slice(1);
        g = g + (o < 0 ? "p" : "p+") + o;
      } else if (o < 0) {
        for (; ++o; ) g = "0" + g;
        g = "0." + g;
      } else if (++o > l) for (o -= l; o--; ) g += "0";
      else o < l && (g = g.slice(0, o) + "." + g.slice(o));
    }
    g = (t == 16 ? "0x" : t == 2 ? "0b" : t == 8 ? "0o" : "") + g;
  }
  return e.s < 0 ? "-" + g : g;
}
function _i(e, t) {
  if (e.length > t) return (e.length = t), !0;
}
function La(e) {
  return new this(e).abs();
}
function Na(e) {
  return new this(e).acos();
}
function Fa(e) {
  return new this(e).acosh();
}
function Da(e, t) {
  return new this(e).plus(t);
}
function Ba(e) {
  return new this(e).asin();
}
function $a(e) {
  return new this(e).asinh();
}
function qa(e) {
  return new this(e).atan();
}
function Ua(e) {
  return new this(e).atanh();
}
function Va(e, t) {
  (e = new this(e)), (t = new this(t));
  var r,
    n = this.precision,
    i = this.rounding,
    o = n + 4;
  return (
    !e.s || !t.s
      ? (r = new this(NaN))
      : !e.d && !t.d
        ? ((r = ae(this, o, 1).times(t.s > 0 ? 0.25 : 0.75)), (r.s = e.s))
        : !t.d || e.isZero()
          ? ((r = t.s < 0 ? ae(this, n, i) : new this(0)), (r.s = e.s))
          : !e.d || t.isZero()
            ? ((r = ae(this, o, 1).times(0.5)), (r.s = e.s))
            : t.s < 0
              ? ((this.precision = o),
                (this.rounding = 1),
                (r = this.atan(B(e, t, o, 1))),
                (t = ae(this, o, 1)),
                (this.precision = n),
                (this.rounding = i),
                (r = e.s < 0 ? r.minus(t) : r.plus(t)))
              : (r = this.atan(B(e, t, o, 1))),
    r
  );
}
function ja(e) {
  return new this(e).cbrt();
}
function Qa(e) {
  return M((e = new this(e)), e.e + 1, 2);
}
function Ja(e, t, r) {
  return new this(e).clamp(t, r);
}
function Wa(e) {
  if (!e || typeof e != "object") throw Error(Xt + "Object expected");
  var t,
    r,
    n,
    i = e.defaults === !0,
    o = [
      "precision",
      1,
      ke,
      "rounding",
      0,
      8,
      "toExpNeg",
      -ze,
      0,
      "toExpPos",
      0,
      ze,
      "maxE",
      0,
      ze,
      "minE",
      -ze,
      0,
      "modulo",
      0,
      9,
    ];
  for (t = 0; t < o.length; t += 3)
    if (((r = o[t]), i && (this[r] = tn[r]), (n = e[r]) !== void 0))
      if (Z(n) === n && n >= o[t + 1] && n <= o[t + 2]) this[r] = n;
      else throw Error(Se + r + ": " + n);
  if (((r = "crypto"), i && (this[r] = tn[r]), (n = e[r]) !== void 0))
    if (n === !0 || n === !1 || n === 0 || n === 1)
      if (n)
        if (
          typeof crypto < "u" &&
          crypto &&
          (crypto.getRandomValues || crypto.randomBytes)
        )
          this[r] = !0;
        else throw Error(Di);
      else this[r] = !1;
    else throw Error(Se + r + ": " + n);
  return this;
}
function Ga(e) {
  return new this(e).cos();
}
function Ha(e) {
  return new this(e).cosh();
}
function Ji(e) {
  var t, r, n;
  function i(o) {
    var s,
      a,
      l,
      u = this;
    if (!(u instanceof i)) return new i(o);
    if (((u.constructor = i), Li(o))) {
      (u.s = o.s),
        L
          ? !o.d || o.e > i.maxE
            ? ((u.e = NaN), (u.d = null))
            : o.e < i.minE
              ? ((u.e = 0), (u.d = [0]))
              : ((u.e = o.e), (u.d = o.d.slice()))
          : ((u.e = o.e), (u.d = o.d ? o.d.slice() : o.d));
      return;
    }
    if (((l = typeof o), l === "number")) {
      if (o === 0) {
        (u.s = 1 / o < 0 ? -1 : 1), (u.e = 0), (u.d = [0]);
        return;
      }
      if ((o < 0 ? ((o = -o), (u.s = -1)) : (u.s = 1), o === ~~o && o < 1e7)) {
        for (s = 0, a = o; a >= 10; a /= 10) s++;
        L
          ? s > i.maxE
            ? ((u.e = NaN), (u.d = null))
            : s < i.minE
              ? ((u.e = 0), (u.d = [0]))
              : ((u.e = s), (u.d = [o]))
          : ((u.e = s), (u.d = [o]));
        return;
      } else if (o * 0 !== 0) {
        o || (u.s = NaN), (u.e = NaN), (u.d = null);
        return;
      }
      return on(u, o.toString());
    } else if (l !== "string") throw Error(Se + o);
    return (
      (a = o.charCodeAt(0)) === 45
        ? ((o = o.slice(1)), (u.s = -1))
        : (a === 43 && (o = o.slice(1)), (u.s = 1)),
      $i.test(o) ? on(u, o) : Ia(u, o)
    );
  }
  if (
    ((i.prototype = T),
    (i.ROUND_UP = 0),
    (i.ROUND_DOWN = 1),
    (i.ROUND_CEIL = 2),
    (i.ROUND_FLOOR = 3),
    (i.ROUND_HALF_UP = 4),
    (i.ROUND_HALF_DOWN = 5),
    (i.ROUND_HALF_EVEN = 6),
    (i.ROUND_HALF_CEIL = 7),
    (i.ROUND_HALF_FLOOR = 8),
    (i.EUCLID = 9),
    (i.config = i.set = Wa),
    (i.clone = Ji),
    (i.isDecimal = Li),
    (i.abs = La),
    (i.acos = Na),
    (i.acosh = Fa),
    (i.add = Da),
    (i.asin = Ba),
    (i.asinh = $a),
    (i.atan = qa),
    (i.atanh = Ua),
    (i.atan2 = Va),
    (i.cbrt = ja),
    (i.ceil = Qa),
    (i.clamp = Ja),
    (i.cos = Ga),
    (i.cosh = Ha),
    (i.div = Ka),
    (i.exp = za),
    (i.floor = Ya),
    (i.hypot = Za),
    (i.ln = Xa),
    (i.log = el),
    (i.log10 = rl),
    (i.log2 = tl),
    (i.max = nl),
    (i.min = il),
    (i.mod = ol),
    (i.mul = sl),
    (i.pow = al),
    (i.random = ll),
    (i.round = ul),
    (i.sign = cl),
    (i.sin = pl),
    (i.sinh = fl),
    (i.sqrt = ml),
    (i.sub = dl),
    (i.sum = gl),
    (i.tan = hl),
    (i.tanh = yl),
    (i.trunc = wl),
    e === void 0 && (e = {}),
    e && e.defaults !== !0)
  )
    for (
      n = [
        "precision",
        "rounding",
        "toExpNeg",
        "toExpPos",
        "maxE",
        "minE",
        "modulo",
        "crypto",
      ],
        t = 0;
      t < n.length;

    )
      e.hasOwnProperty((r = n[t++])) || (e[r] = this[r]);
  return i.config(e), i;
}
function Ka(e, t) {
  return new this(e).div(t);
}
function za(e) {
  return new this(e).exp();
}
function Ya(e) {
  return M((e = new this(e)), e.e + 1, 3);
}
function Za() {
  var e,
    t,
    r = new this(0);
  for (L = !1, e = 0; e < arguments.length; )
    if (((t = new this(arguments[e++])), t.d)) r.d && (r = r.plus(t.times(t)));
    else {
      if (t.s) return (L = !0), new this(1 / 0);
      r = t;
    }
  return (L = !0), r.sqrt();
}
function Li(e) {
  return e instanceof qe || (e && e.toStringTag === Bi) || !1;
}
function Xa(e) {
  return new this(e).ln();
}
function el(e, t) {
  return new this(e).log(t);
}
function tl(e) {
  return new this(e).log(2);
}
function rl(e) {
  return new this(e).log(10);
}
function nl() {
  return Vi(this, arguments, "lt");
}
function il() {
  return Vi(this, arguments, "gt");
}
function ol(e, t) {
  return new this(e).mod(t);
}
function sl(e, t) {
  return new this(e).mul(t);
}
function al(e, t) {
  return new this(e).pow(t);
}
function ll(e) {
  var t,
    r,
    n,
    i,
    o = 0,
    s = new this(1),
    a = [];
  if (
    (e === void 0 ? (e = this.precision) : ne(e, 1, ke),
    (n = Math.ceil(e / O)),
    this.crypto)
  )
    if (crypto.getRandomValues)
      for (t = crypto.getRandomValues(new Uint32Array(n)); o < n; )
        (i = t[o]),
          i >= 429e7
            ? (t[o] = crypto.getRandomValues(new Uint32Array(1))[0])
            : (a[o++] = i % 1e7);
    else if (crypto.randomBytes) {
      for (t = crypto.randomBytes((n *= 4)); o < n; )
        (i =
          t[o] + (t[o + 1] << 8) + (t[o + 2] << 16) + ((t[o + 3] & 127) << 24)),
          i >= 214e7
            ? crypto.randomBytes(4).copy(t, o)
            : (a.push(i % 1e7), (o += 4));
      o = n / 4;
    } else throw Error(Di);
  else for (; o < n; ) a[o++] = (Math.random() * 1e7) | 0;
  for (
    n = a[--o],
      e %= O,
      n && e && ((i = j(10, O - e)), (a[o] = ((n / i) | 0) * i));
    a[o] === 0;
    o--
  )
    a.pop();
  if (o < 0) (r = 0), (a = [0]);
  else {
    for (r = -1; a[0] === 0; r -= O) a.shift();
    for (n = 1, i = a[0]; i >= 10; i /= 10) n++;
    n < O && (r -= O - n);
  }
  return (s.e = r), (s.d = a), s;
}
function ul(e) {
  return M((e = new this(e)), e.e + 1, this.rounding);
}
function cl(e) {
  return (e = new this(e)), e.d ? (e.d[0] ? e.s : 0 * e.s) : e.s || NaN;
}
function pl(e) {
  return new this(e).sin();
}
function fl(e) {
  return new this(e).sinh();
}
function ml(e) {
  return new this(e).sqrt();
}
function dl(e, t) {
  return new this(e).sub(t);
}
function gl() {
  var e = 0,
    t = arguments,
    r = new this(t[e]);
  for (L = !1; r.s && ++e < t.length; ) r = r.plus(t[e]);
  return (L = !0), M(r, this.precision, this.rounding);
}
function hl(e) {
  return new this(e).tan();
}
function yl(e) {
  return new this(e).tanh();
}
function wl(e) {
  return M((e = new this(e)), e.e + 1, 1);
}
T[Symbol.for("nodejs.util.inspect.custom")] = T.toString;
T[Symbol.toStringTag] = "Decimal";
var qe = (T.constructor = Ji(tn));
zt = new qe(zt);
Yt = new qe(Yt);
var me = qe;
function Ze(e) {
  return qe.isDecimal(e)
    ? !0
    : e !== null &&
        typeof e == "object" &&
        typeof e.s == "number" &&
        typeof e.e == "number" &&
        typeof e.toFixed == "function" &&
        Array.isArray(e.d);
}
d();
c();
p();
f();
m();
var Pt = class {
  constructor(t, r, n, i, o) {
    (this.modelName = t),
      (this.name = r),
      (this.typeName = n),
      (this.isList = i),
      (this.isEnum = o);
  }
  _toGraphQLInputType() {
    let t = this.isList ? "List" : "",
      r = this.isEnum ? "Enum" : "";
    return `${t}${r}${this.typeName}FieldRefInput<${this.modelName}>`;
  }
};
function Xe(e) {
  return e instanceof Pt;
}
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
var rr = class {
  constructor(t) {
    this.value = t;
  }
  write(t) {
    t.write(this.value);
  }
  markAsError() {
    this.value.markAsError();
  }
};
d();
c();
p();
f();
m();
var nr = (e) => e,
  ir = { bold: nr, red: nr, green: nr, dim: nr, enabled: !1 },
  Wi = { bold: Nt, red: Je, green: Xn, dim: Ft, enabled: !0 },
  et = {
    write(e) {
      e.writeLine(",");
    },
  };
d();
c();
p();
f();
m();
var de = class {
  constructor(t) {
    this.contents = t;
    this.isUnderlined = !1;
    this.color = (t) => t;
  }
  underline() {
    return (this.isUnderlined = !0), this;
  }
  setColor(t) {
    return (this.color = t), this;
  }
  write(t) {
    let r = t.getCurrentLineLength();
    t.write(this.color(this.contents)),
      this.isUnderlined &&
        t.afterNextNewline(() => {
          t.write(" ".repeat(r)).writeLine(
            this.color("~".repeat(this.contents.length)),
          );
        });
  }
};
d();
c();
p();
f();
m();
var Me = class {
  constructor() {
    this.hasError = !1;
  }
  markAsError() {
    return (this.hasError = !0), this;
  }
};
var tt = class extends Me {
  constructor() {
    super(...arguments);
    this.items = [];
  }
  addItem(r) {
    return this.items.push(new rr(r)), this;
  }
  getField(r) {
    return this.items[r];
  }
  getPrintWidth() {
    return this.items.length === 0
      ? 2
      : Math.max(...this.items.map((n) => n.value.getPrintWidth())) + 2;
  }
  write(r) {
    if (this.items.length === 0) {
      this.writeEmpty(r);
      return;
    }
    this.writeWithItems(r);
  }
  writeEmpty(r) {
    let n = new de("[]");
    this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n);
  }
  writeWithItems(r) {
    let { colors: n } = r.context;
    r
      .writeLine("[")
      .withIndent(() => r.writeJoined(et, this.items).newLine())
      .write("]"),
      this.hasError &&
        r.afterNextNewline(() => {
          r.writeLine(n.red("~".repeat(this.getPrintWidth())));
        });
  }
};
d();
c();
p();
f();
m();
var Gi = ": ",
  or = class {
    constructor(t, r) {
      this.name = t;
      this.value = r;
      this.hasError = !1;
    }
    markAsError() {
      this.hasError = !0;
    }
    getPrintWidth() {
      return this.name.length + this.value.getPrintWidth() + Gi.length;
    }
    write(t) {
      let r = new de(this.name);
      this.hasError && r.underline().setColor(t.context.colors.red),
        t.write(r).write(Gi).write(this.value);
    }
  };
d();
c();
p();
f();
m();
var H = class e extends Me {
  constructor() {
    super(...arguments);
    this.fields = {};
    this.suggestions = [];
  }
  addField(r) {
    this.fields[r.name] = r;
  }
  addSuggestion(r) {
    this.suggestions.push(r);
  }
  getField(r) {
    return this.fields[r];
  }
  getDeepField(r) {
    let [n, ...i] = r,
      o = this.getField(n);
    if (!o) return;
    let s = o;
    for (let a of i) {
      let l;
      if (
        (s.value instanceof e
          ? (l = s.value.getField(a))
          : s.value instanceof tt && (l = s.value.getField(Number(a))),
        !l)
      )
        return;
      s = l;
    }
    return s;
  }
  getDeepFieldValue(r) {
    return r.length === 0 ? this : this.getDeepField(r)?.value;
  }
  hasField(r) {
    return !!this.getField(r);
  }
  removeAllFields() {
    this.fields = {};
  }
  removeField(r) {
    delete this.fields[r];
  }
  getFields() {
    return this.fields;
  }
  isEmpty() {
    return Object.keys(this.fields).length === 0;
  }
  getFieldValue(r) {
    return this.getField(r)?.value;
  }
  getDeepSubSelectionValue(r) {
    let n = this;
    for (let i of r) {
      if (!(n instanceof e)) return;
      let o = n.getSubSelectionValue(i);
      if (!o) return;
      n = o;
    }
    return n;
  }
  getDeepSelectionParent(r) {
    let n = this.getSelectionParent();
    if (!n) return;
    let i = n;
    for (let o of r) {
      let s = i.value.getFieldValue(o);
      if (!s || !(s instanceof e)) return;
      let a = s.getSelectionParent();
      if (!a) return;
      i = a;
    }
    return i;
  }
  getSelectionParent() {
    let r = this.getField("select");
    if (r?.value instanceof e) return { kind: "select", value: r.value };
    let n = this.getField("include");
    if (n?.value instanceof e) return { kind: "include", value: n.value };
  }
  getSubSelectionValue(r) {
    return this.getSelectionParent()?.value.fields[r].value;
  }
  getPrintWidth() {
    let r = Object.values(this.fields);
    return r.length == 0 ? 2 : Math.max(...r.map((i) => i.getPrintWidth())) + 2;
  }
  write(r) {
    let n = Object.values(this.fields);
    if (n.length === 0 && this.suggestions.length === 0) {
      this.writeEmpty(r);
      return;
    }
    this.writeWithContents(r, n);
  }
  writeEmpty(r) {
    let n = new de("{}");
    this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n);
  }
  writeWithContents(r, n) {
    r.writeLine("{").withIndent(() => {
      r.writeJoined(et, [...n, ...this.suggestions]).newLine();
    }),
      r.write("}"),
      this.hasError &&
        r.afterNextNewline(() => {
          r.writeLine(r.context.colors.red("~".repeat(this.getPrintWidth())));
        });
  }
};
d();
c();
p();
f();
m();
var K = class extends Me {
  constructor(r) {
    super();
    this.text = r;
  }
  getPrintWidth() {
    return this.text.length;
  }
  write(r) {
    let n = new de(this.text);
    this.hasError && n.underline().setColor(r.context.colors.red), r.write(n);
  }
};
var an = class {
  constructor(t) {
    this.errorMessages = [];
    this.arguments = t;
  }
  write(t) {
    t.write(this.arguments);
  }
  addErrorMessage(t) {
    this.errorMessages.push(t);
  }
  renderAllMessages(t) {
    return this.errorMessages.map((r) => r(t)).join(`
`);
  }
};
function sr(e) {
  return new an(Hi(e));
}
function Hi(e) {
  let t = new H();
  for (let [r, n] of Object.entries(e)) {
    let i = new or(r, Ki(n));
    t.addField(i);
  }
  return t;
}
function Ki(e) {
  if (typeof e == "string") return new K(JSON.stringify(e));
  if (typeof e == "number" || typeof e == "boolean") return new K(String(e));
  if (typeof e == "bigint") return new K(`${e}n`);
  if (e === null) return new K("null");
  if (e === void 0) return new K("undefined");
  if (Ze(e)) return new K(`new Prisma.Decimal("${e.toFixed()}")`);
  if (e instanceof Uint8Array)
    return w.Buffer.isBuffer(e)
      ? new K(`Buffer.alloc(${e.byteLength})`)
      : new K(`new Uint8Array(${e.byteLength})`);
  if (e instanceof Date) {
    let t = Ht(e) ? e.toISOString() : "Invalid Date";
    return new K(`new Date("${t}")`);
  }
  return e instanceof xe
    ? new K(`Prisma.${e._getName()}`)
    : Xe(e)
      ? new K(`prisma.${Oi(e.modelName)}.$fields.${e.name}`)
      : Array.isArray(e)
        ? bl(e)
        : typeof e == "object"
          ? Hi(e)
          : new K(Object.prototype.toString.call(e));
}
function bl(e) {
  let t = new tt();
  for (let r of e) t.addItem(Ki(r));
  return t;
}
function zi(e) {
  if (e === void 0) return "";
  let t = sr(e);
  return new He(0, { colors: ir }).write(t).toString();
}
d();
c();
p();
f();
m();
var xl = "P2037";
function ar({ error: e, user_facing_error: t }, r, n) {
  return t.error_code
    ? new J(vl(t, n), {
        code: t.error_code,
        clientVersion: r,
        meta: t.meta,
        batchRequestIdx: t.batch_request_idx,
      })
    : new W(e, { clientVersion: r, batchRequestIdx: t.batch_request_idx });
}
function vl(e, t) {
  let r = e.message;
  return (
    (t === "postgresql" || t === "postgres" || t === "mysql") &&
      e.error_code === xl &&
      (r += `
Prisma Accelerate has built-in connection pooling to prevent such errors: https://pris.ly/client/error-accelerate`),
    r
  );
}
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
var ln = class {
  getLocation() {
    return null;
  }
};
function Oe(e) {
  return typeof $EnabledCallSite == "function" && e !== "minimal"
    ? new $EnabledCallSite()
    : new ln();
}
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
var Yi = { _avg: !0, _count: !0, _sum: !0, _min: !0, _max: !0 };
function rt(e = {}) {
  let t = Cl(e);
  return Object.entries(t).reduce(
    (n, [i, o]) => (
      Yi[i] !== void 0 ? (n.select[i] = { select: o }) : (n[i] = o), n
    ),
    { select: {} },
  );
}
function Cl(e = {}) {
  return typeof e._count == "boolean"
    ? { ...e, _count: { _all: e._count } }
    : e;
}
function lr(e = {}) {
  return (t) => (typeof e._count == "boolean" && (t._count = t._count._all), t);
}
function Zi(e, t) {
  let r = lr(e);
  return t({ action: "aggregate", unpacker: r, argsMapper: rt })(e);
}
d();
c();
p();
f();
m();
function Tl(e = {}) {
  let { select: t, ...r } = e;
  return typeof t == "object"
    ? rt({ ...r, _count: t })
    : rt({ ...r, _count: { _all: !0 } });
}
function Al(e = {}) {
  return typeof e.select == "object"
    ? (t) => lr(e)(t)._count
    : (t) => lr(e)(t)._count._all;
}
function Xi(e, t) {
  return t({ action: "count", unpacker: Al(e), argsMapper: Tl })(e);
}
d();
c();
p();
f();
m();
function Rl(e = {}) {
  let t = rt(e);
  if (Array.isArray(t.by))
    for (let r of t.by) typeof r == "string" && (t.select[r] = !0);
  else typeof t.by == "string" && (t.select[t.by] = !0);
  return t;
}
function Sl(e = {}) {
  return (t) => (
    typeof e?._count == "boolean" &&
      t.forEach((r) => {
        r._count = r._count._all;
      }),
    t
  );
}
function eo(e, t) {
  return t({ action: "groupBy", unpacker: Sl(e), argsMapper: Rl })(e);
}
function to(e, t, r) {
  if (t === "aggregate") return (n) => Zi(n, r);
  if (t === "count") return (n) => Xi(n, r);
  if (t === "groupBy") return (n) => eo(n, r);
}
d();
c();
p();
f();
m();
function ro(e, t) {
  let r = t.fields.filter((i) => !i.relationName),
    n = Jr(r, (i) => i.name);
  return new Proxy(
    {},
    {
      get(i, o) {
        if (o in i || typeof o == "symbol") return i[o];
        let s = n[o];
        if (s) return new Pt(e, o, s.type, s.isList, s.kind === "enum");
      },
      ...Wt(Object.keys(n)),
    },
  );
}
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
var no = (e) => (Array.isArray(e) ? e : e.split(".")),
  un = (e, t) => no(t).reduce((r, n) => r && r[n], e),
  io = (e, t, r) =>
    no(t).reduceRight(
      (n, i, o, s) => Object.assign({}, un(e, s.slice(0, o)), { [i]: n }),
      r,
    );
function kl(e, t) {
  return e === void 0 || t === void 0 ? [] : [...t, "select", e];
}
function Ml(e, t, r) {
  return t === void 0 ? e ?? {} : io(t, r, e || !0);
}
function cn(e, t, r, n, i, o) {
  let a = e._runtimeDataModel.models[t].fields.reduce(
    (l, u) => ({ ...l, [u.name]: u }),
    {},
  );
  return (l) => {
    let u = Oe(e._errorFormat),
      g = kl(n, i),
      h = Ml(l, o, g),
      E = r({ dataPath: g, callsite: u })(h),
      S = Ol(e, t);
    return new Proxy(E, {
      get(A, R) {
        if (!S.includes(R)) return A[R];
        let _ = [a[R].type, r, R],
          F = [g, h];
        return cn(e, ..._, ...F);
      },
      ...Wt([...S, ...Object.getOwnPropertyNames(E)]),
    });
  };
}
function Ol(e, t) {
  return e._runtimeDataModel.models[t].fields
    .filter((r) => r.kind === "object")
    .map((r) => r.name);
}
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
var Il = Le(hi());
var _l = {
    red: Je,
    gray: ri,
    dim: Ft,
    bold: Nt,
    underline: Zn,
    highlightSource: (e) => e.highlight(),
  },
  Ll = {
    red: (e) => e,
    gray: (e) => e,
    dim: (e) => e,
    bold: (e) => e,
    underline: (e) => e,
    highlightSource: (e) => e,
  };
function Nl({ message: e, originalMethod: t, isPanic: r, callArguments: n }) {
  return {
    functionName: `prisma.${t}()`,
    message: e,
    isPanic: r ?? !1,
    callArguments: n,
  };
}
function Fl(
  {
    functionName: e,
    location: t,
    message: r,
    isPanic: n,
    contextLines: i,
    callArguments: o,
  },
  s,
) {
  let a = [""],
    l = t ? " in" : ":";
  if (
    (n
      ? (a.push(
          s.red(
            `Oops, an unknown error occurred! This is ${s.bold("on us")}, you did nothing wrong.`,
          ),
        ),
        a.push(
          s.red(`It occurred in the ${s.bold(`\`${e}\``)} invocation${l}`),
        ))
      : a.push(s.red(`Invalid ${s.bold(`\`${e}\``)} invocation${l}`)),
    t && a.push(s.underline(Dl(t))),
    i)
  ) {
    a.push("");
    let u = [i.toString()];
    o && (u.push(o), u.push(s.dim(")"))), a.push(u.join("")), o && a.push("");
  } else a.push(""), o && a.push(o), a.push("");
  return (
    a.push(r),
    a.join(`
`)
  );
}
function Dl(e) {
  let t = [e.fileName];
  return (
    e.lineNumber && t.push(String(e.lineNumber)),
    e.columnNumber && t.push(String(e.columnNumber)),
    t.join(":")
  );
}
function nt(e) {
  let t = e.showColors ? _l : Ll,
    r;
  return (
    typeof $getTemplateParameters < "u"
      ? (r = $getTemplateParameters(e, t))
      : (r = Nl(e)),
    Fl(r, t)
  );
}
function oo(e, t, r, n) {
  return e === Fe.ModelAction.findFirstOrThrow ||
    e === Fe.ModelAction.findUniqueOrThrow
    ? Bl(t, r, n)
    : n;
}
function Bl(e, t, r) {
  return async (n) => {
    if ("rejectOnNotFound" in n.args) {
      let o = nt({
        originalMethod: n.clientMethod,
        callsite: n.callsite,
        message: "'rejectOnNotFound' option is not supported",
      });
      throw new G(o, { clientVersion: t });
    }
    return await r(n).catch((o) => {
      throw o instanceof J && o.code === "P2025"
        ? new Ee(`No ${e} found`, t)
        : o;
    });
  };
}
d();
c();
p();
f();
m();
function ge(e) {
  return e.replace(/^./, (t) => t.toLowerCase());
}
var $l = [
    "findUnique",
    "findUniqueOrThrow",
    "findFirst",
    "findFirstOrThrow",
    "create",
    "update",
    "upsert",
    "delete",
  ],
  ql = ["aggregate", "count", "groupBy"];
function pn(e, t) {
  let r = e._extensions.getAllModelExtensions(t) ?? {},
    n = [
      Ul(e, t),
      jl(e, t),
      bt(r),
      ee("name", () => t),
      ee("$name", () => t),
      ee("$parent", () => e._appliedParent),
    ];
  return pe({}, n);
}
function Ul(e, t) {
  let r = ge(t),
    n = Object.keys(Fe.ModelAction).concat("count");
  return {
    getKeys() {
      return n;
    },
    getPropertyValue(i) {
      let o = i,
        s = (l) => e._request(l);
      s = oo(o, t, e._clientVersion, s);
      let a = (l) => (u) => {
        let g = Oe(e._errorFormat);
        return e._createPrismaPromise((h) => {
          let E = {
            args: u,
            dataPath: [],
            action: o,
            model: t,
            clientMethod: `${r}.${i}`,
            jsModelName: r,
            transaction: h,
            callsite: g,
          };
          return s({ ...E, ...l });
        });
      };
      return $l.includes(o) ? cn(e, t, a) : Vl(i) ? to(e, i, a) : a({});
    },
  };
}
function Vl(e) {
  return ql.includes(e);
}
function jl(e, t) {
  return $e(
    ee("fields", () => {
      let r = e._runtimeDataModel.models[t];
      return ro(t, r);
    }),
  );
}
d();
c();
p();
f();
m();
function so(e) {
  return e.replace(/^./, (t) => t.toUpperCase());
}
var fn = Symbol();
function Ct(e) {
  let t = [Ql(e), ee(fn, () => e), ee("$parent", () => e._appliedParent)],
    r = e._extensions.getAllClientExtensions();
  return r && t.push(bt(r)), pe(e, t);
}
function Ql(e) {
  let t = Object.keys(e._runtimeDataModel.models),
    r = t.map(ge),
    n = [...new Set(t.concat(r))];
  return $e({
    getKeys() {
      return n;
    },
    getPropertyValue(i) {
      let o = so(i);
      if (e._runtimeDataModel.models[o] !== void 0) return pn(e, o);
      if (e._runtimeDataModel.models[i] !== void 0) return pn(e, i);
    },
    getPropertyDescriptor(i) {
      if (!r.includes(i)) return { enumerable: !1 };
    },
  });
}
function ao(e) {
  return e[fn] ? e[fn] : e;
}
function lo(e) {
  if (typeof e == "function") return e(this);
  if (e.client?.__AccelerateEngine) {
    let r = e.client.__AccelerateEngine;
    this._originalClient._engine = new r(
      this._originalClient._accelerateEngineConfig,
    );
  }
  let t = Object.create(this._originalClient, {
    _extensions: { value: this._extensions.append(e) },
    _appliedParent: { value: this, configurable: !0 },
    $use: { value: void 0 },
    $on: { value: void 0 },
  });
  return Ct(t);
}
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
function uo({ result: e, modelName: t, select: r, extensions: n }) {
  let i = n.getAllComputedFields(t);
  if (!i) return e;
  let o = [],
    s = [];
  for (let a of Object.values(i)) {
    if (r) {
      if (!r[a.name]) continue;
      let l = a.needs.filter((u) => !r[u]);
      l.length > 0 && s.push(xt(l));
    }
    Jl(e, a.needs) && o.push(Wl(a, pe(e, o)));
  }
  return o.length > 0 || s.length > 0 ? pe(e, [...o, ...s]) : e;
}
function Jl(e, t) {
  return t.every((r) => Qr(e, r));
}
function Wl(e, t) {
  return $e(ee(e.name, () => e.compute(t)));
}
d();
c();
p();
f();
m();
function ur({
  visitor: e,
  result: t,
  args: r,
  runtimeDataModel: n,
  modelName: i,
}) {
  if (Array.isArray(t)) {
    for (let s = 0; s < t.length; s++)
      t[s] = ur({
        result: t[s],
        args: r,
        modelName: i,
        runtimeDataModel: n,
        visitor: e,
      });
    return t;
  }
  let o = e(t, i, r) ?? t;
  return (
    r.include &&
      co({
        includeOrSelect: r.include,
        result: o,
        parentModelName: i,
        runtimeDataModel: n,
        visitor: e,
      }),
    r.select &&
      co({
        includeOrSelect: r.select,
        result: o,
        parentModelName: i,
        runtimeDataModel: n,
        visitor: e,
      }),
    o
  );
}
function co({
  includeOrSelect: e,
  result: t,
  parentModelName: r,
  runtimeDataModel: n,
  visitor: i,
}) {
  for (let [o, s] of Object.entries(e)) {
    if (!s || t[o] == null) continue;
    let l = n.models[r].fields.find((g) => g.name === o);
    if (!l || l.kind !== "object" || !l.relationName) continue;
    let u = typeof s == "object" ? s : {};
    t[o] = ur({
      visitor: i,
      result: t[o],
      args: u,
      modelName: l.type,
      runtimeDataModel: n,
    });
  }
}
function po({
  result: e,
  modelName: t,
  args: r,
  extensions: n,
  runtimeDataModel: i,
}) {
  return n.isEmpty() || e == null || typeof e != "object" || !i.models[t]
    ? e
    : ur({
        result: e,
        args: r ?? {},
        modelName: t,
        runtimeDataModel: i,
        visitor: (s, a, l) =>
          uo({ result: s, modelName: ge(a), select: l.select, extensions: n }),
      });
}
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
function fo(e) {
  if (e instanceof re) return Gl(e);
  if (Array.isArray(e)) {
    let r = [e[0]];
    for (let n = 1; n < e.length; n++) r[n] = Tt(e[n]);
    return r;
  }
  let t = {};
  for (let r in e) t[r] = Tt(e[r]);
  return t;
}
function Gl(e) {
  return new re(e.strings, e.values);
}
function Tt(e) {
  if (typeof e != "object" || e == null || e instanceof xe || Xe(e)) return e;
  if (Ze(e)) return new me(e.toFixed());
  if (Ke(e)) return new Date(+e);
  if (ArrayBuffer.isView(e)) return e.slice(0);
  if (Array.isArray(e)) {
    let t = e.length,
      r;
    for (r = Array(t); t--; ) r[t] = Tt(e[t]);
    return r;
  }
  if (typeof e == "object") {
    let t = {};
    for (let r in e)
      r === "__proto__"
        ? Object.defineProperty(t, r, {
            value: Tt(e[r]),
            configurable: !0,
            enumerable: !0,
            writable: !0,
          })
        : (t[r] = Tt(e[r]));
    return t;
  }
  De(e, "Unknown value");
}
function go(e, t, r, n = 0) {
  return e._createPrismaPromise((i) => {
    let o = t.customDataProxyFetch;
    return (
      "transaction" in t &&
        i !== void 0 &&
        (t.transaction?.kind === "batch" && t.transaction.lock.then(),
        (t.transaction = i)),
      n === r.length
        ? e._executeRequest(t)
        : r[n]({
            model: t.model,
            operation: t.model ? t.action : t.clientMethod,
            args: fo(t.args ?? {}),
            __internalParams: t,
            query: (s, a = t) => {
              let l = a.customDataProxyFetch;
              return (
                (a.customDataProxyFetch = Eo(o, l)),
                (a.args = s),
                go(e, a, r, n + 1)
              );
            },
          })
    );
  });
}
function ho(e, t) {
  let { jsModelName: r, action: n, clientMethod: i } = t,
    o = r ? n : i;
  if (e._extensions.isEmpty()) return e._executeRequest(t);
  let s = e._extensions.getAllQueryCallbacks(r ?? "$none", o);
  return go(e, t, s);
}
function yo(e) {
  return (t) => {
    let r = { requests: t },
      n = t[0].extensions.getAllBatchQueryCallbacks();
    return n.length ? wo(r, n, 0, e) : e(r);
  };
}
function wo(e, t, r, n) {
  if (r === t.length) return n(e);
  let i = e.customDataProxyFetch,
    o = e.requests[0].transaction;
  return t[r]({
    args: {
      queries: e.requests.map((s) => ({
        model: s.modelName,
        operation: s.action,
        args: s.args,
      })),
      transaction: o
        ? { isolationLevel: o.kind === "batch" ? o.isolationLevel : void 0 }
        : void 0,
    },
    __internalParams: e,
    query(s, a = e) {
      let l = a.customDataProxyFetch;
      return (a.customDataProxyFetch = Eo(i, l)), wo(a, t, r + 1, n);
    },
  });
}
var mo = (e) => e;
function Eo(e = mo, t = mo) {
  return (r) => e(t(r));
}
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
function xo(e, t, r) {
  let n = ge(r);
  return !t.result || !(t.result.$allModels || t.result[n])
    ? e
    : Hl({
        ...e,
        ...bo(t.name, e, t.result.$allModels),
        ...bo(t.name, e, t.result[n]),
      });
}
function Hl(e) {
  let t = new ce(),
    r = (n, i) =>
      t.getOrCreate(n, () =>
        i.has(n)
          ? [n]
          : (i.add(n), e[n] ? e[n].needs.flatMap((o) => r(o, i)) : [n]),
      );
  return We(e, (n) => ({ ...n, needs: r(n.name, new Set()) }));
}
function bo(e, t, r) {
  return r
    ? We(r, ({ needs: n, compute: i }, o) => ({
        name: o,
        needs: n ? Object.keys(n).filter((s) => n[s]) : [],
        compute: Kl(t, o, i),
      }))
    : {};
}
function Kl(e, t, r) {
  let n = e?.[t]?.compute;
  return n ? (i) => r({ ...i, [t]: n(i) }) : r;
}
function vo(e, t) {
  if (!t) return e;
  let r = { ...e };
  for (let n of Object.values(t))
    if (e[n.name]) for (let i of n.needs) r[i] = !0;
  return r;
}
var cr = class {
    constructor(t, r) {
      this.extension = t;
      this.previous = r;
      this.computedFieldsCache = new ce();
      this.modelExtensionsCache = new ce();
      this.queryCallbacksCache = new ce();
      this.clientExtensions = dt(() =>
        this.extension.client
          ? {
              ...this.previous?.getAllClientExtensions(),
              ...this.extension.client,
            }
          : this.previous?.getAllClientExtensions(),
      );
      this.batchCallbacks = dt(() => {
        let t = this.previous?.getAllBatchQueryCallbacks() ?? [],
          r = this.extension.query?.$__internalBatch;
        return r ? t.concat(r) : t;
      });
    }
    getAllComputedFields(t) {
      return this.computedFieldsCache.getOrCreate(t, () =>
        xo(this.previous?.getAllComputedFields(t), this.extension, t),
      );
    }
    getAllClientExtensions() {
      return this.clientExtensions.get();
    }
    getAllModelExtensions(t) {
      return this.modelExtensionsCache.getOrCreate(t, () => {
        let r = ge(t);
        return !this.extension.model ||
          !(this.extension.model[r] || this.extension.model.$allModels)
          ? this.previous?.getAllModelExtensions(t)
          : {
              ...this.previous?.getAllModelExtensions(t),
              ...this.extension.model.$allModels,
              ...this.extension.model[r],
            };
      });
    }
    getAllQueryCallbacks(t, r) {
      return this.queryCallbacksCache.getOrCreate(`${t}:${r}`, () => {
        let n = this.previous?.getAllQueryCallbacks(t, r) ?? [],
          i = [],
          o = this.extension.query;
        return !o || !(o[t] || o.$allModels || o[r] || o.$allOperations)
          ? n
          : (o[t] !== void 0 &&
              (o[t][r] !== void 0 && i.push(o[t][r]),
              o[t].$allOperations !== void 0 && i.push(o[t].$allOperations)),
            t !== "$none" &&
              o.$allModels !== void 0 &&
              (o.$allModels[r] !== void 0 && i.push(o.$allModels[r]),
              o.$allModels.$allOperations !== void 0 &&
                i.push(o.$allModels.$allOperations)),
            o[r] !== void 0 && i.push(o[r]),
            o.$allOperations !== void 0 && i.push(o.$allOperations),
            n.concat(i));
      });
    }
    getAllBatchQueryCallbacks() {
      return this.batchCallbacks.get();
    }
  },
  pr = class e {
    constructor(t) {
      this.head = t;
    }
    static empty() {
      return new e();
    }
    static single(t) {
      return new e(new cr(t));
    }
    isEmpty() {
      return this.head === void 0;
    }
    append(t) {
      return new e(new cr(t, this.head));
    }
    getAllComputedFields(t) {
      return this.head?.getAllComputedFields(t);
    }
    getAllClientExtensions() {
      return this.head?.getAllClientExtensions();
    }
    getAllModelExtensions(t) {
      return this.head?.getAllModelExtensions(t);
    }
    getAllQueryCallbacks(t, r) {
      return this.head?.getAllQueryCallbacks(t, r) ?? [];
    }
    getAllBatchQueryCallbacks() {
      return this.head?.getAllBatchQueryCallbacks() ?? [];
    }
  };
d();
c();
p();
f();
m();
var Po = oe("prisma:client"),
  Co = { Vercel: "vercel", "Netlify CI": "netlify" };
function To({ postinstall: e, ciName: t, clientVersion: r }) {
  if (
    (Po("checkPlatformCaching:postinstall", e),
    Po("checkPlatformCaching:ciName", t),
    e === !0 && t && t in Co)
  ) {
    let n = `Prisma has detected that this project was built on ${t}, which caches dependencies. This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered. To fix this, make sure to run the \`prisma generate\` command during the build process.

Learn how: https://pris.ly/d/${Co[t]}-build`;
    throw (console.error(n), new D(n, r));
  }
}
d();
c();
p();
f();
m();
function Ao(e, t) {
  return e
    ? e.datasources
      ? e.datasources
      : e.datasourceUrl
        ? { [t[0]]: { url: e.datasourceUrl } }
        : {}
    : {};
}
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
var zl = "Cloudflare-Workers",
  Yl = "node";
function Ie() {
  return typeof Netlify == "object"
    ? "netlify"
    : typeof EdgeRuntime == "string"
      ? "edge-light"
      : globalThis.navigator?.userAgent === zl
        ? "workerd"
        : globalThis.Deno
          ? "deno"
          : globalThis.__lagon__
            ? "lagon"
            : globalThis.process?.release?.name === Yl
              ? "node"
              : globalThis.Bun
                ? "bun"
                : globalThis.fastly
                  ? "fastly"
                  : "unknown";
}
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
function fr({
  inlineDatasources: e,
  overrideDatasources: t,
  env: r,
  clientVersion: n,
}) {
  let i,
    o = Object.keys(e)[0],
    s = e[o]?.url,
    a = t[o]?.url;
  if (
    (o === void 0
      ? (i = void 0)
      : a
        ? (i = a)
        : s?.value
          ? (i = s.value)
          : s?.fromEnvVar && (i = r[s.fromEnvVar]),
    s?.fromEnvVar !== void 0 && i === void 0)
  )
    throw Ie() === "workerd"
      ? new D(
          `error: Environment variable not found: ${s.fromEnvVar}.

In Cloudflare module Workers, environment variables are available only in the Worker's \`env\` parameter of \`fetch\`.
To solve this, provide the connection string directly: https://pris.ly/d/cloudflare-datasource-url`,
          n,
        )
      : new D(`error: Environment variable not found: ${s.fromEnvVar}.`, n);
  if (i === void 0)
    throw new D(
      "error: Missing URL environment variable, value, or override.",
      n,
    );
  return i;
}
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
function Ro(e) {
  if (e?.kind === "itx") return e.options.id;
}
d();
c();
p();
f();
m();
var mn,
  So = {
    async loadLibrary(e) {
      let { clientVersion: t, adapter: r, engineWasm: n } = e;
      if (r === void 0)
        throw new D(
          `The \`adapter\` option for \`PrismaClient\` is required in this context (${Ie()})`,
          t,
        );
      if (n === void 0)
        throw new D("WASM engine was unexpectedly `undefined`", t);
      mn === void 0 &&
        (mn = (async () => {
          let o = n.getRuntime(),
            s = await n.getQueryEngineWasmModule();
          if (s == null)
            throw new D(
              "The loaded wasm module was unexpectedly `undefined` or `null` once loaded",
              t,
            );
          let a = { "./query_engine_bg.js": o },
            l = new WebAssembly.Instance(s, a);
          return o.__wbg_set_wasm(l.exports), o.QueryEngine;
        })());
      let i = await mn;
      return {
        debugPanic() {
          return Promise.reject("{}");
        },
        dmmf() {
          return Promise.resolve("{}");
        },
        version() {
          return { commit: "unknown", version: "unknown" };
        },
        QueryEngine: i,
      };
    },
  };
var Zl = "P2036",
  he = oe("prisma:client:libraryEngine");
function Xl(e) {
  return e.item_type === "query" && "query" in e;
}
function eu(e) {
  return "level" in e ? e.level === "error" && e.message === "PANIC" : !1;
}
var Iv = [...Vr, "native"],
  ko = 0,
  At = class {
    constructor(t, r) {
      this.name = "LibraryEngine";
      (this.libraryLoader = r ?? So),
        (this.config = t),
        (this.libraryStarted = !1),
        (this.logQueries = t.logQueries ?? !1),
        (this.logLevel = t.logLevel ?? "error"),
        (this.logEmitter = t.logEmitter),
        (this.datamodel = t.inlineSchema),
        t.enableDebugLogs && (this.logLevel = "debug");
      let n = Object.keys(t.overrideDatasources)[0],
        i = t.overrideDatasources[n]?.url;
      n !== void 0 && i !== void 0 && (this.datasourceOverrides = { [n]: i }),
        (this.libraryInstantiationPromise = this.instantiateLibrary()),
        this.checkForTooManyEngines();
    }
    checkForTooManyEngines() {
      ko === 10 &&
        console.warn(
          `${Dt("warn(prisma-client)")} This is the 10th instance of Prisma Client being started. Make sure this is intentional.`,
        );
    }
    async transaction(t, r, n) {
      await this.start();
      let i = JSON.stringify(r),
        o;
      if (t === "start") {
        let a = JSON.stringify({
          max_wait: n.maxWait,
          timeout: n.timeout,
          isolation_level: n.isolationLevel,
        });
        o = await this.engine?.startTransaction(a, i);
      } else
        t === "commit"
          ? (o = await this.engine?.commitTransaction(n.id, i))
          : t === "rollback" &&
            (o = await this.engine?.rollbackTransaction(n.id, i));
      let s = this.parseEngineResponse(o);
      if (tu(s)) {
        let a = this.getExternalAdapterError(s);
        throw a
          ? a.error
          : new J(s.message, {
              code: s.error_code,
              clientVersion: this.config.clientVersion,
              meta: s.meta,
            });
      }
      return s;
    }
    async instantiateLibrary() {
      if ((he("internalSetup"), this.libraryInstantiationPromise))
        return this.libraryInstantiationPromise;
      (this.binaryTarget = await this.getCurrentBinaryTarget()),
        await this.loadEngine(),
        this.version();
    }
    async getCurrentBinaryTarget() {}
    parseEngineResponse(t) {
      if (!t)
        throw new W("Response from the Engine was empty", {
          clientVersion: this.config.clientVersion,
        });
      try {
        return JSON.parse(t);
      } catch {
        throw new W("Unable to JSON.parse response from engine", {
          clientVersion: this.config.clientVersion,
        });
      }
    }
    async loadEngine() {
      if (!this.engine) {
        this.QueryEngineConstructor ||
          ((this.library = await this.libraryLoader.loadLibrary(this.config)),
          (this.QueryEngineConstructor = this.library.QueryEngine));
        try {
          let t = new b(this),
            { adapter: r } = this.config;
          r && he("Using driver adapter: %O", r),
            (this.engine = new this.QueryEngineConstructor(
              {
                datamodel: this.datamodel,
                env: y.env,
                logQueries: this.config.logQueries ?? !1,
                ignoreEnvVarErrors: !0,
                datasourceOverrides: this.datasourceOverrides ?? {},
                logLevel: this.logLevel,
                configDir: this.config.cwd,
                engineProtocol: "json",
              },
              (n) => {
                t.deref()?.logger(n);
              },
              r,
            )),
            ko++;
        } catch (t) {
          let r = t,
            n = this.parseInitError(r.message);
          throw typeof n == "string"
            ? r
            : new D(n.message, this.config.clientVersion, n.error_code);
        }
      }
    }
    logger(t) {
      let r = this.parseEngineResponse(t);
      if (r) {
        if ("span" in r) {
          this.config.tracingHelper.createEngineSpan(r);
          return;
        }
        (r.level = r?.level.toLowerCase() ?? "unknown"),
          Xl(r)
            ? this.logEmitter.emit("query", {
                timestamp: new Date(),
                query: r.query,
                params: r.params,
                duration: Number(r.duration_ms),
                target: r.module_path,
              })
            : (eu(r),
              this.logEmitter.emit(r.level, {
                timestamp: new Date(),
                message: r.message,
                target: r.module_path,
              }));
      }
    }
    parseInitError(t) {
      try {
        return JSON.parse(t);
      } catch {}
      return t;
    }
    parseRequestError(t) {
      try {
        return JSON.parse(t);
      } catch {}
      return t;
    }
    onBeforeExit() {
      throw new Error(
        '"beforeExit" hook is not applicable to the library engine since Prisma 5.0.0, it is only relevant and implemented for the binary engine. Please add your event listener to the `process` object directly instead.',
      );
    }
    async start() {
      if (
        (await this.libraryInstantiationPromise,
        await this.libraryStoppingPromise,
        this.libraryStartingPromise)
      )
        return (
          he(
            `library already starting, this.libraryStarted: ${this.libraryStarted}`,
          ),
          this.libraryStartingPromise
        );
      if (this.libraryStarted) return;
      let t = async () => {
        he("library starting");
        try {
          let r = { traceparent: this.config.tracingHelper.getTraceParent() };
          await this.engine?.connect(JSON.stringify(r)),
            (this.libraryStarted = !0),
            he("library started");
        } catch (r) {
          let n = this.parseInitError(r.message);
          throw typeof n == "string"
            ? r
            : new D(n.message, this.config.clientVersion, n.error_code);
        } finally {
          this.libraryStartingPromise = void 0;
        }
      };
      return (
        (this.libraryStartingPromise = this.config.tracingHelper.runInChildSpan(
          "connect",
          t,
        )),
        this.libraryStartingPromise
      );
    }
    async stop() {
      if (
        (await this.libraryStartingPromise,
        await this.executingQueryPromise,
        this.libraryStoppingPromise)
      )
        return he("library is already stopping"), this.libraryStoppingPromise;
      if (!this.libraryStarted) return;
      let t = async () => {
        await new Promise((n) => setTimeout(n, 5)), he("library stopping");
        let r = { traceparent: this.config.tracingHelper.getTraceParent() };
        await this.engine?.disconnect(JSON.stringify(r)),
          (this.libraryStarted = !1),
          (this.libraryStoppingPromise = void 0),
          he("library stopped");
      };
      return (
        (this.libraryStoppingPromise = this.config.tracingHelper.runInChildSpan(
          "disconnect",
          t,
        )),
        this.libraryStoppingPromise
      );
    }
    version() {
      return (
        (this.versionInfo = this.library?.version()),
        this.versionInfo?.version ?? "unknown"
      );
    }
    debugPanic(t) {
      return this.library?.debugPanic(t);
    }
    async request(t, { traceparent: r, interactiveTransaction: n }) {
      he(`sending request, this.libraryStarted: ${this.libraryStarted}`);
      let i = JSON.stringify({ traceparent: r }),
        o = JSON.stringify(t);
      try {
        await this.start(),
          (this.executingQueryPromise = this.engine?.query(o, i, n?.id)),
          (this.lastQuery = o);
        let s = this.parseEngineResponse(await this.executingQueryPromise);
        if (s.errors)
          throw s.errors.length === 1
            ? this.buildQueryError(s.errors[0])
            : new W(JSON.stringify(s.errors), {
                clientVersion: this.config.clientVersion,
              });
        if (this.loggerRustPanic) throw this.loggerRustPanic;
        return { data: s, elapsed: 0 };
      } catch (s) {
        if (s instanceof D) throw s;
        s.code === "GenericFailure" && s.message?.startsWith("PANIC:");
        let a = this.parseRequestError(s.message);
        throw typeof a == "string"
          ? s
          : new W(
              `${a.message}
${a.backtrace}`,
              { clientVersion: this.config.clientVersion },
            );
      }
    }
    async requestBatch(t, { transaction: r, traceparent: n }) {
      he("requestBatch");
      let i = Gt(t, r);
      await this.start(),
        (this.lastQuery = JSON.stringify(i)),
        (this.executingQueryPromise = this.engine.query(
          this.lastQuery,
          JSON.stringify({ traceparent: n }),
          Ro(r),
        ));
      let o = await this.executingQueryPromise,
        s = this.parseEngineResponse(o);
      if (s.errors)
        throw s.errors.length === 1
          ? this.buildQueryError(s.errors[0])
          : new W(JSON.stringify(s.errors), {
              clientVersion: this.config.clientVersion,
            });
      let { batchResult: a, errors: l } = s;
      if (Array.isArray(a))
        return a.map((u) =>
          u.errors && u.errors.length > 0
            ? this.loggerRustPanic ?? this.buildQueryError(u.errors[0])
            : { data: u, elapsed: 0 },
        );
      throw l && l.length === 1
        ? new Error(l[0].error)
        : new Error(JSON.stringify(s));
    }
    buildQueryError(t) {
      t.user_facing_error.is_panic;
      let r = this.getExternalAdapterError(t.user_facing_error);
      return r
        ? r.error
        : ar(t, this.config.clientVersion, this.config.activeProvider);
    }
    getExternalAdapterError(t) {
      if (t.error_code === Zl && this.config.adapter) {
        let r = t.meta?.id;
        Vt(
          typeof r == "number",
          "Malformed external JS error received from the engine",
        );
        let n = this.config.adapter.errorRegistry.consumeError(r);
        return Vt(n, "External error with reported id was not registered"), n;
      }
    }
    async metrics(t) {
      await this.start();
      let r = await this.engine.metrics(JSON.stringify(t));
      return t.format === "prometheus" ? r : this.parseEngineResponse(r);
    }
  };
function tu(e) {
  return typeof e == "object" && e !== null && e.error_code !== void 0;
}
d();
c();
p();
f();
m();
var mr =
    "Accelerate has not been setup correctly. Make sure your client is using `.$extends(withAccelerate())`. See https://pris.ly/d/accelerate-getting-started",
  dr = class {
    constructor(t) {
      this.config = t;
      this.name = "AccelerateEngine";
      this.resolveDatasourceUrl =
        this.config.accelerateUtils?.resolveDatasourceUrl;
      this.getBatchRequestPayload =
        this.config.accelerateUtils?.getBatchRequestPayload;
      this.prismaGraphQLToJSError =
        this.config.accelerateUtils?.prismaGraphQLToJSError;
      this.PrismaClientUnknownRequestError =
        this.config.accelerateUtils?.PrismaClientUnknownRequestError;
      this.PrismaClientInitializationError =
        this.config.accelerateUtils?.PrismaClientInitializationError;
      this.PrismaClientKnownRequestError =
        this.config.accelerateUtils?.PrismaClientKnownRequestError;
      this.debug = this.config.accelerateUtils?.debug;
      this.engineVersion = this.config.accelerateUtils?.engineVersion;
      this.clientVersion = this.config.accelerateUtils?.clientVersion;
    }
    onBeforeExit(t) {}
    async start() {}
    async stop() {}
    version(t) {
      return "unknown";
    }
    transaction(t, r, n) {
      throw new D(mr, this.config.clientVersion);
    }
    metrics(t) {
      throw new D(mr, this.config.clientVersion);
    }
    request(t, r) {
      throw new D(mr, this.config.clientVersion);
    }
    requestBatch(t, r) {
      throw new D(mr, this.config.clientVersion);
    }
  };
function Mo({ copyEngine: e = !0 }, t) {
  let r;
  try {
    r = fr({
      inlineDatasources: t.inlineDatasources,
      overrideDatasources: t.overrideDatasources,
      env: { ...t.env, ...y.env },
      clientVersion: t.clientVersion,
    });
  } catch {}
  e &&
    r?.startsWith("prisma://") &&
    mt(
      "recommend--no-engine",
      "In production, we recommend using `prisma generate --no-engine` (See: `prisma generate --help`)",
    );
  let n = ct(t.generator),
    i = !!(r?.startsWith("prisma://") || !e),
    o = !!t.adapter,
    s = n === "library",
    a = n === "binary";
  if ((i && o) || (o && !1)) {
    let l;
    throw (
      (e
        ? r?.startsWith("prisma://")
          ? (l = [
              "Prisma Client was configured to use the `adapter` option but the URL was a `prisma://` URL.",
              "Please either use the `prisma://` URL or remove the `adapter` from the Prisma Client constructor.",
            ])
          : (l = [
              "Prisma Client was configured to use both the `adapter` and Accelerate, please chose one.",
            ])
        : (l = [
            "Prisma Client was configured to use the `adapter` option but `prisma generate` was run with `--no-engine`.",
            "Please run `prisma generate` without `--no-engine` to be able to use Prisma Client with the adapter.",
          ]),
      new G(
        l.join(`
`),
        { clientVersion: t.clientVersion },
      ))
    );
  }
  if (o) return new At(t);
  if (i) return new dr(t);
  {
    let l = [
      `PrismaClient failed to initialize because it wasn't configured to run in this environment (${Ie()}).`,
      "In order to run Prisma Client in an edge runtime, you will need to configure Accelerate: https://pris.ly/d/accelerate.",
    ];
    throw new G(
      l.join(`
`),
      { clientVersion: t.clientVersion },
    );
  }
  throw new G("Invalid client engine type, please use `library` or `binary`", {
    clientVersion: t.clientVersion,
  });
}
d();
c();
p();
f();
m();
function gr({ generator: e }) {
  return e?.previewFeatures ?? [];
}
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
var Fo = Le(dn());
d();
c();
p();
f();
m();
function Lo(e, t) {
  let r = No(e),
    n = ru(r),
    i = iu(n);
  i ? hr(i, t) : t.addErrorMessage(() => "Unknown error");
}
function No(e) {
  return e.errors.flatMap((t) => (t.kind === "Union" ? No(t) : [t]));
}
function ru(e) {
  let t = new Map(),
    r = [];
  for (let n of e) {
    if (n.kind !== "InvalidArgumentType") {
      r.push(n);
      continue;
    }
    let i = `${n.selectionPath.join(".")}:${n.argumentPath.join(".")}`,
      o = t.get(i);
    o
      ? t.set(i, {
          ...n,
          argument: {
            ...n.argument,
            typeNames: nu(o.argument.typeNames, n.argument.typeNames),
          },
        })
      : t.set(i, n);
  }
  return r.push(...t.values()), r;
}
function nu(e, t) {
  return [...new Set(e.concat(t))];
}
function iu(e) {
  return Wr(e, (t, r) => {
    let n = Io(t),
      i = Io(r);
    return n !== i ? n - i : _o(t) - _o(r);
  });
}
function Io(e) {
  let t = 0;
  return (
    Array.isArray(e.selectionPath) && (t += e.selectionPath.length),
    Array.isArray(e.argumentPath) && (t += e.argumentPath.length),
    t
  );
}
function _o(e) {
  switch (e.kind) {
    case "InvalidArgumentValue":
    case "ValueTooLarge":
      return 20;
    case "InvalidArgumentType":
      return 10;
    case "RequiredArgumentMissing":
      return -10;
    default:
      return 0;
  }
}
d();
c();
p();
f();
m();
var Pe = class {
  constructor(t, r) {
    this.name = t;
    this.value = r;
    this.isRequired = !1;
  }
  makeRequired() {
    return (this.isRequired = !0), this;
  }
  write(t) {
    let {
      colors: { green: r },
    } = t.context;
    t.addMarginSymbol(r(this.isRequired ? "+" : "?")),
      t.write(r(this.name)),
      this.isRequired || t.write(r("?")),
      t.write(r(": ")),
      typeof this.value == "string"
        ? t.write(r(this.value))
        : t.write(this.value);
  }
};
d();
c();
p();
f();
m();
var yr = class {
  constructor() {
    this.fields = [];
  }
  addField(t, r) {
    return (
      this.fields.push({
        write(n) {
          let { green: i, dim: o } = n.context.colors;
          n.write(i(o(`${t}: ${r}`))).addMarginSymbol(i(o("+")));
        },
      }),
      this
    );
  }
  write(t) {
    let {
      colors: { green: r },
    } = t.context;
    t.writeLine(r("{"))
      .withIndent(() => {
        t.writeJoined(et, this.fields).newLine();
      })
      .write(r("}"))
      .addMarginSymbol(r("+"));
  }
};
function hr(e, t) {
  switch (e.kind) {
    case "IncludeAndSelect":
      ou(e, t);
      break;
    case "IncludeOnScalar":
      su(e, t);
      break;
    case "EmptySelection":
      au(e, t);
      break;
    case "UnknownSelectionField":
      lu(e, t);
      break;
    case "UnknownArgument":
      uu(e, t);
      break;
    case "UnknownInputField":
      cu(e, t);
      break;
    case "RequiredArgumentMissing":
      pu(e, t);
      break;
    case "InvalidArgumentType":
      fu(e, t);
      break;
    case "InvalidArgumentValue":
      mu(e, t);
      break;
    case "ValueTooLarge":
      du(e, t);
      break;
    case "SomeFieldsMissing":
      gu(e, t);
      break;
    case "TooManyFieldsGiven":
      hu(e, t);
      break;
    case "Union":
      Lo(e, t);
      break;
    default:
      throw new Error("not implemented: " + e.kind);
  }
}
function ou(e, t) {
  let r = t.arguments.getDeepSubSelectionValue(e.selectionPath);
  r &&
    r instanceof H &&
    (r.getField("include")?.markAsError(), r.getField("select")?.markAsError()),
    t.addErrorMessage(
      (n) =>
        `Please ${n.bold("either")} use ${n.green("`include`")} or ${n.green("`select`")}, but ${n.red("not both")} at the same time.`,
    );
}
function su(e, t) {
  let [r, n] = wr(e.selectionPath),
    i = e.outputType,
    o = t.arguments.getDeepSelectionParent(r)?.value;
  if (o && (o.getField(n)?.markAsError(), i))
    for (let s of i.fields)
      s.isRelation && o.addSuggestion(new Pe(s.name, "true"));
  t.addErrorMessage((s) => {
    let a = `Invalid scalar field ${s.red(`\`${n}\``)} for ${s.bold("include")} statement`;
    return (
      i ? (a += ` on model ${s.bold(i.name)}. ${Rt(s)}`) : (a += "."),
      (a += `
Note that ${s.bold("include")} statements only accept relation fields.`),
      a
    );
  });
}
function au(e, t) {
  let r = e.outputType,
    n = t.arguments.getDeepSelectionParent(e.selectionPath)?.value,
    i = n?.isEmpty() ?? !1;
  n && (n.removeAllFields(), $o(n, r)),
    t.addErrorMessage((o) =>
      i
        ? `The ${o.red("`select`")} statement for type ${o.bold(r.name)} must not be empty. ${Rt(o)}`
        : `The ${o.red("`select`")} statement for type ${o.bold(r.name)} needs ${o.bold("at least one truthy value")}.`,
    );
}
function lu(e, t) {
  let [r, n] = wr(e.selectionPath),
    i = t.arguments.getDeepSelectionParent(r);
  i && (i.value.getField(n)?.markAsError(), $o(i.value, e.outputType)),
    t.addErrorMessage((o) => {
      let s = [`Unknown field ${o.red(`\`${n}\``)}`];
      return (
        i && s.push(`for ${o.bold(i.kind)} statement`),
        s.push(`on model ${o.bold(`\`${e.outputType.name}\``)}.`),
        s.push(Rt(o)),
        s.join(" ")
      );
    });
}
function uu(e, t) {
  let r = e.argumentPath[0],
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
  n instanceof H && (n.getField(r)?.markAsError(), yu(n, e.arguments)),
    t.addErrorMessage((i) =>
      Do(
        i,
        r,
        e.arguments.map((o) => o.name),
      ),
    );
}
function cu(e, t) {
  let [r, n] = wr(e.argumentPath),
    i = t.arguments.getDeepSubSelectionValue(e.selectionPath);
  if (i instanceof H) {
    i.getDeepField(e.argumentPath)?.markAsError();
    let o = i.getDeepFieldValue(r);
    o instanceof H && qo(o, e.inputType);
  }
  t.addErrorMessage((o) =>
    Do(
      o,
      n,
      e.inputType.fields.map((s) => s.name),
    ),
  );
}
function Do(e, t, r) {
  let n = [`Unknown argument \`${e.red(t)}\`.`],
    i = Eu(t, r);
  return (
    i && n.push(`Did you mean \`${e.green(i)}\`?`),
    r.length > 0 && n.push(Rt(e)),
    n.join(" ")
  );
}
function pu(e, t) {
  let r;
  t.addErrorMessage((l) =>
    r?.value instanceof K && r.value.text === "null"
      ? `Argument \`${l.green(o)}\` must not be ${l.red("null")}.`
      : `Argument \`${l.green(o)}\` is missing.`,
  );
  let n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
  if (!(n instanceof H)) return;
  let [i, o] = wr(e.argumentPath),
    s = new yr(),
    a = n.getDeepFieldValue(i);
  if (a instanceof H)
    if (
      ((r = a.getField(o)),
      r && a.removeField(o),
      e.inputTypes.length === 1 && e.inputTypes[0].kind === "object")
    ) {
      for (let l of e.inputTypes[0].fields)
        s.addField(l.name, l.typeNames.join(" | "));
      a.addSuggestion(new Pe(o, s).makeRequired());
    } else {
      let l = e.inputTypes.map(Bo).join(" | ");
      a.addSuggestion(new Pe(o, l).makeRequired());
    }
}
function Bo(e) {
  return e.kind === "list" ? `${Bo(e.elementType)}[]` : e.name;
}
function fu(e, t) {
  let r = e.argument.name,
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
  n instanceof H && n.getDeepFieldValue(e.argumentPath)?.markAsError(),
    t.addErrorMessage((i) => {
      let o = Er(
        "or",
        e.argument.typeNames.map((s) => i.green(s)),
      );
      return `Argument \`${i.bold(r)}\`: Invalid value provided. Expected ${o}, provided ${i.red(e.inferredType)}.`;
    });
}
function mu(e, t) {
  let r = e.argument.name,
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
  n instanceof H && n.getDeepFieldValue(e.argumentPath)?.markAsError(),
    t.addErrorMessage((i) => {
      let o = [`Invalid value for argument \`${i.bold(r)}\``];
      if (
        (e.underlyingError && o.push(`: ${e.underlyingError}`),
        o.push("."),
        e.argument.typeNames.length > 0)
      ) {
        let s = Er(
          "or",
          e.argument.typeNames.map((a) => i.green(a)),
        );
        o.push(` Expected ${s}.`);
      }
      return o.join("");
    });
}
function du(e, t) {
  let r = e.argument.name,
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath),
    i;
  if (n instanceof H) {
    let s = n.getDeepField(e.argumentPath)?.value;
    s?.markAsError(), s instanceof K && (i = s.text);
  }
  t.addErrorMessage((o) => {
    let s = ["Unable to fit value"];
    return (
      i && s.push(o.red(i)),
      s.push(`into a 64-bit signed integer for field \`${o.bold(r)}\``),
      s.join(" ")
    );
  });
}
function gu(e, t) {
  let r = e.argumentPath[e.argumentPath.length - 1],
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
  if (n instanceof H) {
    let i = n.getDeepFieldValue(e.argumentPath);
    i instanceof H && qo(i, e.inputType);
  }
  t.addErrorMessage((i) => {
    let o = [
      `Argument \`${i.bold(r)}\` of type ${i.bold(e.inputType.name)} needs`,
    ];
    return (
      e.constraints.minFieldCount === 1
        ? e.constraints.requiredFields
          ? o.push(
              `${i.green("at least one of")} ${Er(
                "or",
                e.constraints.requiredFields.map((s) => `\`${i.bold(s)}\``),
              )} arguments.`,
            )
          : o.push(`${i.green("at least one")} argument.`)
        : o.push(
            `${i.green(`at least ${e.constraints.minFieldCount}`)} arguments.`,
          ),
      o.push(Rt(i)),
      o.join(" ")
    );
  });
}
function hu(e, t) {
  let r = e.argumentPath[e.argumentPath.length - 1],
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath),
    i = [];
  if (n instanceof H) {
    let o = n.getDeepFieldValue(e.argumentPath);
    o instanceof H && (o.markAsError(), (i = Object.keys(o.getFields())));
  }
  t.addErrorMessage((o) => {
    let s = [
      `Argument \`${o.bold(r)}\` of type ${o.bold(e.inputType.name)} needs`,
    ];
    return (
      e.constraints.minFieldCount === 1 && e.constraints.maxFieldCount == 1
        ? s.push(`${o.green("exactly one")} argument,`)
        : e.constraints.maxFieldCount == 1
          ? s.push(`${o.green("at most one")} argument,`)
          : s.push(
              `${o.green(`at most ${e.constraints.maxFieldCount}`)} arguments,`,
            ),
      s.push(
        `but you provided ${Er(
          "and",
          i.map((a) => o.red(a)),
        )}. Please choose`,
      ),
      e.constraints.maxFieldCount === 1
        ? s.push("one.")
        : s.push(`${e.constraints.maxFieldCount}.`),
      s.join(" ")
    );
  });
}
function $o(e, t) {
  for (let r of t.fields)
    e.hasField(r.name) || e.addSuggestion(new Pe(r.name, "true"));
}
function yu(e, t) {
  for (let r of t)
    e.hasField(r.name) ||
      e.addSuggestion(new Pe(r.name, r.typeNames.join(" | ")));
}
function qo(e, t) {
  if (t.kind === "object")
    for (let r of t.fields)
      e.hasField(r.name) ||
        e.addSuggestion(new Pe(r.name, r.typeNames.join(" | ")));
}
function wr(e) {
  let t = [...e],
    r = t.pop();
  if (!r) throw new Error("unexpected empty path");
  return [t, r];
}
function Rt({ green: e, enabled: t }) {
  return (
    "Available options are " +
    (t ? `listed in ${e("green")}` : "marked with ?") +
    "."
  );
}
function Er(e, t) {
  if (t.length === 1) return t[0];
  let r = [...t],
    n = r.pop();
  return `${r.join(", ")} ${e} ${n}`;
}
var wu = 3;
function Eu(e, t) {
  let r = 1 / 0,
    n;
  for (let i of t) {
    let o = (0, Fo.default)(e, i);
    o > wu || (o < r && ((r = o), (n = i)));
  }
  return n;
}
function br({
  args: e,
  errors: t,
  errorFormat: r,
  callsite: n,
  originalMethod: i,
  clientVersion: o,
}) {
  let s = sr(e);
  for (let h of t) hr(h, s);
  let a = r === "pretty" ? Wi : ir,
    l = s.renderAllMessages(a),
    u = new He(0, { colors: a }).write(s).toString(),
    g = nt({
      message: l,
      callsite: n,
      originalMethod: i,
      showColors: r === "pretty",
      callArguments: u,
    });
  throw new G(g, { clientVersion: o });
}
var bu = {
  findUnique: "findUnique",
  findUniqueOrThrow: "findUniqueOrThrow",
  findFirst: "findFirst",
  findFirstOrThrow: "findFirstOrThrow",
  findMany: "findMany",
  count: "aggregate",
  create: "createOne",
  createMany: "createMany",
  update: "updateOne",
  updateMany: "updateMany",
  upsert: "upsertOne",
  delete: "deleteOne",
  deleteMany: "deleteMany",
  executeRaw: "executeRaw",
  queryRaw: "queryRaw",
  aggregate: "aggregate",
  groupBy: "groupBy",
  runCommandRaw: "runCommandRaw",
  findRaw: "findRaw",
  aggregateRaw: "aggregateRaw",
};
function Uo({
  modelName: e,
  action: t,
  args: r,
  runtimeDataModel: n,
  extensions: i,
  callsite: o,
  clientMethod: s,
  errorFormat: a,
  clientVersion: l,
}) {
  let u = new gn({
    runtimeDataModel: n,
    modelName: e,
    action: t,
    rootArgs: r,
    callsite: o,
    extensions: i,
    selectionPath: [],
    argumentPath: [],
    originalMethod: s,
    errorFormat: a,
    clientVersion: l,
  });
  return { modelName: e, action: bu[t], query: hn(r, u) };
}
function hn({ select: e, include: t, ...r } = {}, n) {
  return { arguments: jo(r, n), selection: xu(e, t, n) };
}
function xu(e, t, r) {
  return (
    e &&
      t &&
      r.throwValidationError({
        kind: "IncludeAndSelect",
        selectionPath: r.getSelectionPath(),
      }),
    e ? Cu(e, r) : vu(r, t)
  );
}
function vu(e, t) {
  let r = {};
  return (
    e.model && !e.isRawAction() && ((r.$composites = !0), (r.$scalars = !0)),
    t && Pu(r, t, e),
    r
  );
}
function Pu(e, t, r) {
  for (let [n, i] of Object.entries(t)) {
    let o = r.findField(n);
    o &&
      o?.kind !== "object" &&
      r.throwValidationError({
        kind: "IncludeOnScalar",
        selectionPath: r.getSelectionPath().concat(n),
        outputType: r.getOutputTypeDescription(),
      }),
      i === !0
        ? (e[n] = !0)
        : typeof i == "object" && (e[n] = hn(i, r.nestSelection(n)));
  }
}
function Cu(e, t) {
  let r = {},
    n = t.getComputedFields(),
    i = vo(e, n);
  for (let [o, s] of Object.entries(i)) {
    let a = t.findField(o);
    (n?.[o] && !a) ||
      (s === !0
        ? (r[o] = !0)
        : typeof s == "object" && (r[o] = hn(s, t.nestSelection(o))));
  }
  return r;
}
function Vo(e, t) {
  if (e === null) return null;
  if (typeof e == "string" || typeof e == "number" || typeof e == "boolean")
    return e;
  if (typeof e == "bigint") return { $type: "BigInt", value: String(e) };
  if (Ke(e)) {
    if (Ht(e)) return { $type: "DateTime", value: e.toISOString() };
    t.throwValidationError({
      kind: "InvalidArgumentValue",
      selectionPath: t.getSelectionPath(),
      argumentPath: t.getArgumentPath(),
      argument: { name: t.getArgumentName(), typeNames: ["Date"] },
      underlyingError: "Provided Date object is invalid",
    });
  }
  if (Xe(e))
    return {
      $type: "FieldRef",
      value: { _ref: e.name, _container: e.modelName },
    };
  if (Array.isArray(e)) return Tu(e, t);
  if (ArrayBuffer.isView(e))
    return { $type: "Bytes", value: w.Buffer.from(e).toString("base64") };
  if (Au(e)) return e.values;
  if (Ze(e)) return { $type: "Decimal", value: e.toFixed() };
  if (e instanceof xe) {
    if (e !== Qt.instances[e._getName()])
      throw new Error("Invalid ObjectEnumValue");
    return { $type: "Enum", value: e._getName() };
  }
  if (Ru(e)) return e.toJSON();
  if (typeof e == "object") return jo(e, t);
  t.throwValidationError({
    kind: "InvalidArgumentValue",
    selectionPath: t.getSelectionPath(),
    argumentPath: t.getArgumentPath(),
    argument: { name: t.getArgumentName(), typeNames: [] },
    underlyingError: `We could not serialize ${Object.prototype.toString.call(e)} value. Serialize the object to JSON or implement a ".toJSON()" method on it`,
  });
}
function jo(e, t) {
  if (e.$type) return { $type: "Raw", value: e };
  let r = {};
  for (let n in e) {
    let i = e[n];
    i !== void 0 && (r[n] = Vo(i, t.nestArgument(n)));
  }
  return r;
}
function Tu(e, t) {
  let r = [];
  for (let n = 0; n < e.length; n++) {
    let i = t.nestArgument(String(n)),
      o = e[n];
    o === void 0 &&
      t.throwValidationError({
        kind: "InvalidArgumentValue",
        selectionPath: i.getSelectionPath(),
        argumentPath: i.getArgumentPath(),
        argument: { name: `${t.getArgumentName()}[${n}]`, typeNames: [] },
        underlyingError:
          "Can not use `undefined` value within array. Use `null` or filter out `undefined` values",
      }),
      r.push(Vo(o, i));
  }
  return r;
}
function Au(e) {
  return typeof e == "object" && e !== null && e.__prismaRawParameters__ === !0;
}
function Ru(e) {
  return typeof e == "object" && e !== null && typeof e.toJSON == "function";
}
var gn = class e {
  constructor(t) {
    this.params = t;
    this.params.modelName &&
      (this.model = this.params.runtimeDataModel.models[this.params.modelName]);
  }
  throwValidationError(t) {
    br({
      errors: [t],
      originalMethod: this.params.originalMethod,
      args: this.params.rootArgs ?? {},
      callsite: this.params.callsite,
      errorFormat: this.params.errorFormat,
      clientVersion: this.params.clientVersion,
    });
  }
  getSelectionPath() {
    return this.params.selectionPath;
  }
  getArgumentPath() {
    return this.params.argumentPath;
  }
  getArgumentName() {
    return this.params.argumentPath[this.params.argumentPath.length - 1];
  }
  getOutputTypeDescription() {
    if (!(!this.params.modelName || !this.model))
      return {
        name: this.params.modelName,
        fields: this.model.fields.map((t) => ({
          name: t.name,
          typeName: "boolean",
          isRelation: t.kind === "object",
        })),
      };
  }
  isRawAction() {
    return [
      "executeRaw",
      "queryRaw",
      "runCommandRaw",
      "findRaw",
      "aggregateRaw",
    ].includes(this.params.action);
  }
  getComputedFields() {
    if (this.params.modelName)
      return this.params.extensions.getAllComputedFields(this.params.modelName);
  }
  findField(t) {
    return this.model?.fields.find((r) => r.name === t);
  }
  nestSelection(t) {
    let r = this.findField(t),
      n = r?.kind === "object" ? r.type : void 0;
    return new e({
      ...this.params,
      modelName: n,
      selectionPath: this.params.selectionPath.concat(t),
    });
  }
  nestArgument(t) {
    return new e({
      ...this.params,
      argumentPath: this.params.argumentPath.concat(t),
    });
  }
};
d();
c();
p();
f();
m();
var Qo = (e) => ({ command: e });
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
var Jo = (e) => e.strings.reduce((t, r, n) => `${t}@P${n}${r}`);
d();
c();
p();
f();
m();
function St(e) {
  try {
    return Wo(e, "fast");
  } catch {
    return Wo(e, "slow");
  }
}
function Wo(e, t) {
  return JSON.stringify(e.map((r) => Su(r, t)));
}
function Su(e, t) {
  return typeof e == "bigint"
    ? { prisma__type: "bigint", prisma__value: e.toString() }
    : Ke(e)
      ? { prisma__type: "date", prisma__value: e.toJSON() }
      : me.isDecimal(e)
        ? { prisma__type: "decimal", prisma__value: e.toJSON() }
        : w.Buffer.isBuffer(e)
          ? { prisma__type: "bytes", prisma__value: e.toString("base64") }
          : ku(e) || ArrayBuffer.isView(e)
            ? {
                prisma__type: "bytes",
                prisma__value: w.Buffer.from(e).toString("base64"),
              }
            : typeof e == "object" && t === "slow"
              ? Ho(e)
              : e;
}
function ku(e) {
  return e instanceof ArrayBuffer || e instanceof SharedArrayBuffer
    ? !0
    : typeof e == "object" && e !== null
      ? e[Symbol.toStringTag] === "ArrayBuffer" ||
        e[Symbol.toStringTag] === "SharedArrayBuffer"
      : !1;
}
function Ho(e) {
  if (typeof e != "object" || e === null) return e;
  if (typeof e.toJSON == "function") return e.toJSON();
  if (Array.isArray(e)) return e.map(Go);
  let t = {};
  for (let r of Object.keys(e)) t[r] = Go(e[r]);
  return t;
}
function Go(e) {
  return typeof e == "bigint" ? e.toString() : Ho(e);
}
var Mu = /^(\s*alter\s)/i,
  Ko = oe("prisma:client");
function yn(e, t, r, n) {
  if (
    !(e !== "postgresql" && e !== "cockroachdb") &&
    r.length > 0 &&
    Mu.exec(t)
  )
    throw new Error(`Running ALTER using ${n} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`);
}
var wn =
    ({ clientMethod: e, activeProvider: t }) =>
    (r) => {
      let n = "",
        i;
      if (Array.isArray(r)) {
        let [o, ...s] = r;
        (n = o), (i = { values: St(s || []), __prismaRawParameters__: !0 });
      } else
        switch (t) {
          case "sqlite":
          case "mysql": {
            (n = r.sql),
              (i = { values: St(r.values), __prismaRawParameters__: !0 });
            break;
          }
          case "cockroachdb":
          case "postgresql":
          case "postgres": {
            (n = r.text),
              (i = { values: St(r.values), __prismaRawParameters__: !0 });
            break;
          }
          case "sqlserver": {
            (n = Jo(r)),
              (i = { values: St(r.values), __prismaRawParameters__: !0 });
            break;
          }
          default:
            throw new Error(`The ${t} provider does not support ${e}`);
        }
      return (
        i?.values
          ? Ko(`prisma.${e}(${n}, ${i.values})`)
          : Ko(`prisma.${e}(${n})`),
        { query: n, parameters: i }
      );
    },
  zo = {
    requestArgsToMiddlewareArgs(e) {
      return [e.strings, ...e.values];
    },
    middlewareArgsToRequestArgs(e) {
      let [t, ...r] = e;
      return new re(t, r);
    },
  },
  Yo = {
    requestArgsToMiddlewareArgs(e) {
      return [e];
    },
    middlewareArgsToRequestArgs(e) {
      return e[0];
    },
  };
d();
c();
p();
f();
m();
function En(e) {
  return function (r) {
    let n,
      i = (o = e) => {
        try {
          return o === void 0 || o?.kind === "itx"
            ? (n ??= Zo(r(o)))
            : Zo(r(o));
        } catch (s) {
          return Promise.reject(s);
        }
      };
    return {
      then(o, s) {
        return i().then(o, s);
      },
      catch(o) {
        return i().catch(o);
      },
      finally(o) {
        return i().finally(o);
      },
      requestTransaction(o) {
        let s = i(o);
        return s.requestTransaction ? s.requestTransaction(o) : s;
      },
      [Symbol.toStringTag]: "PrismaPromise",
    };
  };
}
function Zo(e) {
  return typeof e.then == "function" ? e : Promise.resolve(e);
}
d();
c();
p();
f();
m();
var Xo = {
    isEnabled() {
      return !1;
    },
    getTraceParent() {
      return "00-10-10-00";
    },
    async createEngineSpan() {},
    getActiveContext() {},
    runInChildSpan(e, t) {
      return t();
    },
  },
  bn = class {
    isEnabled() {
      return this.getGlobalTracingHelper().isEnabled();
    }
    getTraceParent(t) {
      return this.getGlobalTracingHelper().getTraceParent(t);
    }
    createEngineSpan(t) {
      return this.getGlobalTracingHelper().createEngineSpan(t);
    }
    getActiveContext() {
      return this.getGlobalTracingHelper().getActiveContext();
    }
    runInChildSpan(t, r) {
      return this.getGlobalTracingHelper().runInChildSpan(t, r);
    }
    getGlobalTracingHelper() {
      return globalThis.PRISMA_INSTRUMENTATION?.helper ?? Xo;
    }
  };
function es(e) {
  return e.includes("tracing") ? new bn() : Xo;
}
d();
c();
p();
f();
m();
function ts(e, t = () => {}) {
  let r,
    n = new Promise((i) => (r = i));
  return {
    then(i) {
      return --e === 0 && r(t()), i?.(n);
    },
  };
}
d();
c();
p();
f();
m();
var Ou = ["$connect", "$disconnect", "$on", "$transaction", "$use", "$extends"],
  rs = Ou;
d();
c();
p();
f();
m();
function ns(e) {
  return typeof e == "string"
    ? e
    : e.reduce(
        (t, r) => {
          let n = typeof r == "string" ? r : r.level;
          return n === "query"
            ? t
            : t && (r === "info" || t === "info")
              ? "info"
              : n;
        },
        void 0,
      );
}
d();
c();
p();
f();
m();
var xr = class {
  constructor() {
    this._middlewares = [];
  }
  use(t) {
    this._middlewares.push(t);
  }
  get(t) {
    return this._middlewares[t];
  }
  has(t) {
    return !!this._middlewares[t];
  }
  length() {
    return this._middlewares.length;
  }
};
d();
c();
p();
f();
m();
var os = Le(xi());
d();
c();
p();
f();
m();
function vr(e) {
  return typeof e.batchRequestIdx == "number";
}
d();
c();
p();
f();
m();
function Pr(e) {
  return e === null
    ? e
    : Array.isArray(e)
      ? e.map(Pr)
      : typeof e == "object"
        ? Iu(e)
          ? _u(e)
          : We(e, Pr)
        : e;
}
function Iu(e) {
  return e !== null && typeof e == "object" && typeof e.$type == "string";
}
function _u({ $type: e, value: t }) {
  switch (e) {
    case "BigInt":
      return BigInt(t);
    case "Bytes":
      return w.Buffer.from(t, "base64");
    case "DateTime":
      return new Date(t);
    case "Decimal":
      return new me(t);
    case "Json":
      return JSON.parse(t);
    default:
      De(t, "Unknown tagged value");
  }
}
d();
c();
p();
f();
m();
function is(e) {
  if (e.action !== "findUnique" && e.action !== "findUniqueOrThrow") return;
  let t = [];
  return (
    e.modelName && t.push(e.modelName),
    e.query.arguments && t.push(xn(e.query.arguments)),
    t.push(xn(e.query.selection)),
    t.join("")
  );
}
function xn(e) {
  return `(${Object.keys(e)
    .sort()
    .map((r) => {
      let n = e[r];
      return typeof n == "object" && n !== null ? `(${r} ${xn(n)})` : r;
    })
    .join(" ")})`;
}
d();
c();
p();
f();
m();
var Lu = {
  aggregate: !1,
  aggregateRaw: !1,
  createMany: !0,
  createOne: !0,
  deleteMany: !0,
  deleteOne: !0,
  executeRaw: !0,
  findFirst: !1,
  findFirstOrThrow: !1,
  findMany: !1,
  findRaw: !1,
  findUnique: !1,
  findUniqueOrThrow: !1,
  groupBy: !1,
  queryRaw: !1,
  runCommandRaw: !0,
  updateMany: !0,
  updateOne: !0,
  upsertOne: !0,
};
function vn(e) {
  return Lu[e];
}
d();
c();
p();
f();
m();
var Cr = class {
  constructor(t) {
    this.options = t;
    this.tickActive = !1;
    this.batches = {};
  }
  request(t) {
    let r = this.options.batchBy(t);
    return r
      ? (this.batches[r] ||
          ((this.batches[r] = []),
          this.tickActive ||
            ((this.tickActive = !0),
            y.nextTick(() => {
              this.dispatchBatches(), (this.tickActive = !1);
            }))),
        new Promise((n, i) => {
          this.batches[r].push({ request: t, resolve: n, reject: i });
        }))
      : this.options.singleLoader(t);
  }
  dispatchBatches() {
    for (let t in this.batches) {
      let r = this.batches[t];
      delete this.batches[t],
        r.length === 1
          ? this.options
              .singleLoader(r[0].request)
              .then((n) => {
                n instanceof Error ? r[0].reject(n) : r[0].resolve(n);
              })
              .catch((n) => {
                r[0].reject(n);
              })
          : (r.sort((n, i) => this.options.batchOrder(n.request, i.request)),
            this.options
              .batchLoader(r.map((n) => n.request))
              .then((n) => {
                if (n instanceof Error)
                  for (let i = 0; i < r.length; i++) r[i].reject(n);
                else
                  for (let i = 0; i < r.length; i++) {
                    let o = n[i];
                    o instanceof Error ? r[i].reject(o) : r[i].resolve(o);
                  }
              })
              .catch((n) => {
                for (let i = 0; i < r.length; i++) r[i].reject(n);
              }));
    }
  }
  get [Symbol.toStringTag]() {
    return "DataLoader";
  }
};
var Nu = oe("prisma:client:request_handler"),
  Tr = class {
    constructor(t, r) {
      (this.logEmitter = r),
        (this.client = t),
        (this.dataloader = new Cr({
          batchLoader: yo(async ({ requests: n, customDataProxyFetch: i }) => {
            let { transaction: o, otelParentCtx: s } = n[0],
              a = n.map((h) => h.protocolQuery),
              l = this.client._tracingHelper.getTraceParent(s),
              u = n.some((h) => vn(h.protocolQuery.action));
            return (
              await this.client._engine.requestBatch(a, {
                traceparent: l,
                transaction: Fu(o),
                containsWrite: u,
                customDataProxyFetch: i,
              })
            ).map((h, E) => {
              if (h instanceof Error) return h;
              try {
                return this.mapQueryEngineResult(n[E], h);
              } catch (S) {
                return S;
              }
            });
          }),
          singleLoader: async (n) => {
            let i = n.transaction?.kind === "itx" ? ss(n.transaction) : void 0,
              o = await this.client._engine.request(n.protocolQuery, {
                traceparent: this.client._tracingHelper.getTraceParent(),
                interactiveTransaction: i,
                isWrite: vn(n.protocolQuery.action),
                customDataProxyFetch: n.customDataProxyFetch,
              });
            return this.mapQueryEngineResult(n, o);
          },
          batchBy: (n) =>
            n.transaction?.id
              ? `transaction-${n.transaction.id}`
              : is(n.protocolQuery),
          batchOrder(n, i) {
            return n.transaction?.kind === "batch" &&
              i.transaction?.kind === "batch"
              ? n.transaction.index - i.transaction.index
              : 0;
          },
        }));
    }
    async request(t) {
      try {
        return await this.dataloader.request(t);
      } catch (r) {
        let {
          clientMethod: n,
          callsite: i,
          transaction: o,
          args: s,
          modelName: a,
        } = t;
        this.handleAndLogRequestError({
          error: r,
          clientMethod: n,
          callsite: i,
          transaction: o,
          args: s,
          modelName: a,
        });
      }
    }
    mapQueryEngineResult({ dataPath: t, unpacker: r }, n) {
      let i = n?.data,
        o = n?.elapsed,
        s = this.unpack(i, t, r);
      return y.env.PRISMA_CLIENT_GET_TIME ? { data: s, elapsed: o } : s;
    }
    handleAndLogRequestError(t) {
      try {
        this.handleRequestError(t);
      } catch (r) {
        throw (
          (this.logEmitter &&
            this.logEmitter.emit("error", {
              message: r.message,
              target: t.clientMethod,
              timestamp: new Date(),
            }),
          r)
        );
      }
    }
    handleRequestError({
      error: t,
      clientMethod: r,
      callsite: n,
      transaction: i,
      args: o,
      modelName: s,
    }) {
      if ((Nu(t), Du(t, i) || t instanceof Ee)) throw t;
      if (t instanceof J && Bu(t)) {
        let l = as(t.meta);
        br({
          args: o,
          errors: [l],
          callsite: n,
          errorFormat: this.client._errorFormat,
          originalMethod: r,
          clientVersion: this.client._clientVersion,
        });
      }
      let a = t.message;
      if (
        (n &&
          (a = nt({
            callsite: n,
            originalMethod: r,
            isPanic: t.isPanic,
            showColors: this.client._errorFormat === "pretty",
            message: a,
          })),
        (a = this.sanitizeMessage(a)),
        t.code)
      ) {
        let l = s ? { modelName: s, ...t.meta } : t.meta;
        throw new J(a, {
          code: t.code,
          clientVersion: this.client._clientVersion,
          meta: l,
          batchRequestIdx: t.batchRequestIdx,
        });
      } else {
        if (t.isPanic) throw new be(a, this.client._clientVersion);
        if (t instanceof W)
          throw new W(a, {
            clientVersion: this.client._clientVersion,
            batchRequestIdx: t.batchRequestIdx,
          });
        if (t instanceof D) throw new D(a, this.client._clientVersion);
        if (t instanceof be) throw new be(a, this.client._clientVersion);
      }
      throw ((t.clientVersion = this.client._clientVersion), t);
    }
    sanitizeMessage(t) {
      return this.client._errorFormat && this.client._errorFormat !== "pretty"
        ? (0, os.default)(t)
        : t;
    }
    unpack(t, r, n) {
      if (!t || (t.data && (t = t.data), !t)) return t;
      let i = Object.values(t)[0],
        o = r.filter((a) => a !== "select" && a !== "include"),
        s = Pr(un(i, o));
      return n ? n(s) : s;
    }
    get [Symbol.toStringTag]() {
      return "RequestHandler";
    }
  };
function Fu(e) {
  if (e) {
    if (e.kind === "batch")
      return { kind: "batch", options: { isolationLevel: e.isolationLevel } };
    if (e.kind === "itx") return { kind: "itx", options: ss(e) };
    De(e, "Unknown transaction kind");
  }
}
function ss(e) {
  return { id: e.id, payload: e.payload };
}
function Du(e, t) {
  return vr(e) && t?.kind === "batch" && e.batchRequestIdx !== t.index;
}
function Bu(e) {
  return e.code === "P2009" || e.code === "P2012";
}
function as(e) {
  if (e.kind === "Union") return { kind: "Union", errors: e.errors.map(as) };
  if (Array.isArray(e.selectionPath)) {
    let [, ...t] = e.selectionPath;
    return { ...e, selectionPath: t };
  }
  return e;
}
d();
c();
p();
f();
m();
var ls = "5.10.2";
var us = ls;
d();
c();
p();
f();
m();
function cs(e) {
  return e.map((t) => {
    let r = {};
    for (let n of Object.keys(t)) r[n] = ps(t[n]);
    return r;
  });
}
function ps({ prisma__type: e, prisma__value: t }) {
  switch (e) {
    case "bigint":
      return BigInt(t);
    case "bytes":
      return w.Buffer.from(t, "base64");
    case "decimal":
      return new me(t);
    case "datetime":
    case "date":
      return new Date(t);
    case "time":
      return new Date(`1970-01-01T${t}Z`);
    case "array":
      return t.map(ps);
    default:
      return t;
  }
}
d();
c();
p();
f();
m();
var gs = Le(dn());
d();
c();
p();
f();
m();
var U = class extends Error {
  constructor(t) {
    super(
      t +
        `
Read more at https://pris.ly/d/client-constructor`,
    ),
      (this.name = "PrismaClientConstructorValidationError");
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientConstructorValidationError";
  }
};
X(U, "PrismaClientConstructorValidationError");
var fs = [
    "datasources",
    "datasourceUrl",
    "errorFormat",
    "adapter",
    "log",
    "transactionOptions",
    "__internal",
  ],
  ms = ["pretty", "colorless", "minimal"],
  ds = ["info", "query", "warn", "error"],
  qu = {
    datasources: (e, { datasourceNames: t }) => {
      if (e) {
        if (typeof e != "object" || Array.isArray(e))
          throw new U(
            `Invalid value ${JSON.stringify(e)} for "datasources" provided to PrismaClient constructor`,
          );
        for (let [r, n] of Object.entries(e)) {
          if (!t.includes(r)) {
            let i = it(r, t) || ` Available datasources: ${t.join(", ")}`;
            throw new U(
              `Unknown datasource ${r} provided to PrismaClient constructor.${i}`,
            );
          }
          if (typeof n != "object" || Array.isArray(n))
            throw new U(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
          if (n && typeof n == "object")
            for (let [i, o] of Object.entries(n)) {
              if (i !== "url")
                throw new U(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
              if (typeof o != "string")
                throw new U(`Invalid value ${JSON.stringify(o)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
            }
        }
      }
    },
    adapter: (e, t) => {
      if (e === null) return;
      if (e === void 0)
        throw new U(
          '"adapter" property must not be undefined, use null to conditionally disable driver adapters.',
        );
      if (!gr(t).includes("driverAdapters"))
        throw new U(
          '"adapter" property can only be provided to PrismaClient constructor when "driverAdapters" preview feature is enabled.',
        );
      if (ct() === "binary")
        throw new U(
          'Cannot use a driver adapter with the "binary" Query Engine. Please use the "library" Query Engine.',
        );
    },
    datasourceUrl: (e) => {
      if (typeof e < "u" && typeof e != "string")
        throw new U(`Invalid value ${JSON.stringify(e)} for "datasourceUrl" provided to PrismaClient constructor.
Expected string or undefined.`);
    },
    errorFormat: (e) => {
      if (e) {
        if (typeof e != "string")
          throw new U(
            `Invalid value ${JSON.stringify(e)} for "errorFormat" provided to PrismaClient constructor.`,
          );
        if (!ms.includes(e)) {
          let t = it(e, ms);
          throw new U(
            `Invalid errorFormat ${e} provided to PrismaClient constructor.${t}`,
          );
        }
      }
    },
    log: (e) => {
      if (!e) return;
      if (!Array.isArray(e))
        throw new U(
          `Invalid value ${JSON.stringify(e)} for "log" provided to PrismaClient constructor.`,
        );
      function t(r) {
        if (typeof r == "string" && !ds.includes(r)) {
          let n = it(r, ds);
          throw new U(
            `Invalid log level "${r}" provided to PrismaClient constructor.${n}`,
          );
        }
      }
      for (let r of e) {
        t(r);
        let n = {
          level: t,
          emit: (i) => {
            let o = ["stdout", "event"];
            if (!o.includes(i)) {
              let s = it(i, o);
              throw new U(
                `Invalid value ${JSON.stringify(i)} for "emit" in logLevel provided to PrismaClient constructor.${s}`,
              );
            }
          },
        };
        if (r && typeof r == "object")
          for (let [i, o] of Object.entries(r))
            if (n[i]) n[i](o);
            else
              throw new U(
                `Invalid property ${i} for "log" provided to PrismaClient constructor`,
              );
      }
    },
    transactionOptions: (e) => {
      if (!e) return;
      let t = e.maxWait;
      if (t != null && t <= 0)
        throw new U(
          `Invalid value ${t} for maxWait in "transactionOptions" provided to PrismaClient constructor. maxWait needs to be greater than 0`,
        );
      let r = e.timeout;
      if (r != null && r <= 0)
        throw new U(
          `Invalid value ${r} for timeout in "transactionOptions" provided to PrismaClient constructor. timeout needs to be greater than 0`,
        );
    },
    __internal: (e) => {
      if (!e) return;
      let t = ["debug", "engine", "configOverride"];
      if (typeof e != "object")
        throw new U(
          `Invalid value ${JSON.stringify(e)} for "__internal" to PrismaClient constructor`,
        );
      for (let [r] of Object.entries(e))
        if (!t.includes(r)) {
          let n = it(r, t);
          throw new U(
            `Invalid property ${JSON.stringify(r)} for "__internal" provided to PrismaClient constructor.${n}`,
          );
        }
    },
  };
function hs(e, t) {
  for (let [r, n] of Object.entries(e)) {
    if (!fs.includes(r)) {
      let i = it(r, fs);
      throw new U(
        `Unknown property ${r} provided to PrismaClient constructor.${i}`,
      );
    }
    qu[r](n, t);
  }
  if (e.datasourceUrl && e.datasources)
    throw new U(
      'Can not use "datasourceUrl" and "datasources" options at the same time. Pick one of them',
    );
}
function it(e, t) {
  if (t.length === 0 || typeof e != "string") return "";
  let r = Uu(e, t);
  return r ? ` Did you mean "${r}"?` : "";
}
function Uu(e, t) {
  if (t.length === 0) return null;
  let r = t.map((i) => ({ value: i, distance: (0, gs.default)(e, i) }));
  r.sort((i, o) => (i.distance < o.distance ? -1 : 1));
  let n = r[0];
  return n.distance < 3 ? n.value : null;
}
d();
c();
p();
f();
m();
function ys(e) {
  return e.length === 0
    ? Promise.resolve([])
    : new Promise((t, r) => {
        let n = new Array(e.length),
          i = null,
          o = !1,
          s = 0,
          a = () => {
            o || (s++, s === e.length && ((o = !0), i ? r(i) : t(n)));
          },
          l = (u) => {
            o || ((o = !0), r(u));
          };
        for (let u = 0; u < e.length; u++)
          e[u].then(
            (g) => {
              (n[u] = g), a();
            },
            (g) => {
              if (!vr(g)) {
                l(g);
                return;
              }
              g.batchRequestIdx === u ? l(g) : (i || (i = g), a());
            },
          );
      });
}
var _e = oe("prisma:client");
typeof globalThis == "object" && (globalThis.NODE_CLIENT = !0);
var Vu = {
    requestArgsToMiddlewareArgs: (e) => e,
    middlewareArgsToRequestArgs: (e) => e,
  },
  ju = Symbol.for("prisma.client.transaction.id"),
  Qu = {
    id: 0,
    nextId() {
      return ++this.id;
    },
  };
function bs(e) {
  class t {
    constructor(n) {
      this._originalClient = this;
      this._middlewares = new xr();
      this._createPrismaPromise = En();
      this.$extends = lo;
      (e = n?.__internal?.configOverride?.(e) ?? e), To(e), n && hs(n, e);
      let i = n?.adapter ? Yr(n.adapter) : void 0,
        o = new Ut().on("error", () => {});
      (this._extensions = pr.empty()),
        (this._previewFeatures = gr(e)),
        (this._clientVersion = e.clientVersion ?? us),
        (this._activeProvider = e.activeProvider),
        (this._tracingHelper = es(this._previewFeatures));
      let s = {
          rootEnvPath:
            e.relativeEnvPaths.rootEnvPath &&
            ut.resolve(e.dirname, e.relativeEnvPaths.rootEnvPath),
          schemaEnvPath:
            e.relativeEnvPaths.schemaEnvPath &&
            ut.resolve(e.dirname, e.relativeEnvPaths.schemaEnvPath),
        },
        a = e.injectableEdgeEnv?.();
      try {
        let l = n ?? {},
          u = l.__internal ?? {},
          g = u.debug === !0;
        g && oe.enable("prisma:client");
        let h = ut.resolve(e.dirname, e.relativePath);
        Wn.existsSync(h) || (h = e.dirname),
          _e("dirname", e.dirname),
          _e("relativePath", e.relativePath),
          _e("cwd", h);
        let E = u.engine || {};
        if (
          (l.errorFormat
            ? (this._errorFormat = l.errorFormat)
            : y.env.NODE_ENV === "production"
              ? (this._errorFormat = "minimal")
              : y.env.NO_COLOR
                ? (this._errorFormat = "colorless")
                : (this._errorFormat = "colorless"),
          (this._runtimeDataModel = e.runtimeDataModel),
          (this._engineConfig = {
            cwd: h,
            dirname: e.dirname,
            enableDebugLogs: g,
            allowTriggerPanic: E.allowTriggerPanic,
            datamodelPath: ut.join(e.dirname, e.filename ?? "schema.prisma"),
            prismaPath: E.binaryPath ?? void 0,
            engineEndpoint: E.endpoint,
            generator: e.generator,
            showColors: this._errorFormat === "pretty",
            logLevel: l.log && ns(l.log),
            logQueries:
              l.log &&
              !!(typeof l.log == "string"
                ? l.log === "query"
                : l.log.find((S) =>
                    typeof S == "string" ? S === "query" : S.level === "query",
                  )),
            env: a?.parsed ?? {},
            flags: [],
            engineWasm: e.engineWasm,
            clientVersion: e.clientVersion,
            engineVersion: e.engineVersion,
            previewFeatures: this._previewFeatures,
            activeProvider: e.activeProvider,
            inlineSchema: e.inlineSchema,
            overrideDatasources: Ao(l, e.datasourceNames),
            inlineDatasources: e.inlineDatasources,
            inlineSchemaHash: e.inlineSchemaHash,
            tracingHelper: this._tracingHelper,
            transactionOptions: {
              maxWait: l.transactionOptions?.maxWait ?? 2e3,
              timeout: l.transactionOptions?.timeout ?? 5e3,
              isolationLevel: l.transactionOptions?.isolationLevel,
            },
            logEmitter: o,
            isBundled: e.isBundled,
            adapter: i,
          }),
          (this._accelerateEngineConfig = {
            ...this._engineConfig,
            accelerateUtils: {
              resolveDatasourceUrl: fr,
              getBatchRequestPayload: Gt,
              prismaGraphQLToJSError: ar,
              PrismaClientUnknownRequestError: W,
              PrismaClientInitializationError: D,
              PrismaClientKnownRequestError: J,
              debug: oe("prisma:client:accelerateEngine"),
              engineVersion: Es.version,
              clientVersion: e.clientVersion,
            },
          }),
          _e("clientVersion", e.clientVersion),
          (this._engine = Mo(e, this._engineConfig)),
          (this._requestHandler = new Tr(this, o)),
          l.log)
        )
          for (let S of l.log) {
            let A =
              typeof S == "string" ? S : S.emit === "stdout" ? S.level : null;
            A &&
              this.$on(A, (R) => {
                ft.log(`${ft.tags[A] ?? ""}`, R.message || R.query);
              });
          }
        this._metrics = new Ge(this._engine);
      } catch (l) {
        throw ((l.clientVersion = this._clientVersion), l);
      }
      return (this._appliedParent = Ct(this));
    }
    get [Symbol.toStringTag]() {
      return "PrismaClient";
    }
    $use(n) {
      this._middlewares.use(n);
    }
    $on(n, i) {
      n === "beforeExit"
        ? this._engine.onBeforeExit(i)
        : n && this._engineConfig.logEmitter.on(n, i);
    }
    $connect() {
      try {
        return this._engine.start();
      } catch (n) {
        throw ((n.clientVersion = this._clientVersion), n);
      }
    }
    async $disconnect() {
      try {
        await this._engine.stop();
      } catch (n) {
        throw ((n.clientVersion = this._clientVersion), n);
      } finally {
        ci();
      }
    }
    $executeRawInternal(n, i, o, s) {
      let a = this._activeProvider;
      return this._request({
        action: "executeRaw",
        args: o,
        transaction: n,
        clientMethod: i,
        argsMapper: wn({ clientMethod: i, activeProvider: a }),
        callsite: Oe(this._errorFormat),
        dataPath: [],
        middlewareArgsMapper: s,
      });
    }
    $executeRaw(n, ...i) {
      return this._createPrismaPromise((o) => {
        if (n.raw !== void 0 || n.sql !== void 0) {
          let [s, a] = ws(n, i);
          return (
            yn(
              this._activeProvider,
              s.text,
              s.values,
              Array.isArray(n)
                ? "prisma.$executeRaw`<SQL>`"
                : "prisma.$executeRaw(sql`<SQL>`)",
            ),
            this.$executeRawInternal(o, "$executeRaw", s, a)
          );
        }
        throw new G(
          "`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n",
          { clientVersion: this._clientVersion },
        );
      });
    }
    $executeRawUnsafe(n, ...i) {
      return this._createPrismaPromise(
        (o) => (
          yn(
            this._activeProvider,
            n,
            i,
            "prisma.$executeRawUnsafe(<SQL>, [...values])",
          ),
          this.$executeRawInternal(o, "$executeRawUnsafe", [n, ...i])
        ),
      );
    }
    $runCommandRaw(n) {
      if (e.activeProvider !== "mongodb")
        throw new G(
          `The ${e.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`,
          { clientVersion: this._clientVersion },
        );
      return this._createPrismaPromise((i) =>
        this._request({
          args: n,
          clientMethod: "$runCommandRaw",
          dataPath: [],
          action: "runCommandRaw",
          argsMapper: Qo,
          callsite: Oe(this._errorFormat),
          transaction: i,
        }),
      );
    }
    async $queryRawInternal(n, i, o, s) {
      let a = this._activeProvider;
      return this._request({
        action: "queryRaw",
        args: o,
        transaction: n,
        clientMethod: i,
        argsMapper: wn({ clientMethod: i, activeProvider: a }),
        callsite: Oe(this._errorFormat),
        dataPath: [],
        middlewareArgsMapper: s,
      }).then(cs);
    }
    $queryRaw(n, ...i) {
      return this._createPrismaPromise((o) => {
        if (n.raw !== void 0 || n.sql !== void 0)
          return this.$queryRawInternal(o, "$queryRaw", ...ws(n, i));
        throw new G(
          "`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n",
          { clientVersion: this._clientVersion },
        );
      });
    }
    $queryRawUnsafe(n, ...i) {
      return this._createPrismaPromise((o) =>
        this.$queryRawInternal(o, "$queryRawUnsafe", [n, ...i]),
      );
    }
    _transactionWithArray({ promises: n, options: i }) {
      let o = Qu.nextId(),
        s = ts(n.length),
        a = n.map((l, u) => {
          if (l?.[Symbol.toStringTag] !== "PrismaPromise")
            throw new Error(
              "All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.",
            );
          let g =
              i?.isolationLevel ??
              this._engineConfig.transactionOptions.isolationLevel,
            h = { kind: "batch", id: o, index: u, isolationLevel: g, lock: s };
          return l.requestTransaction?.(h) ?? l;
        });
      return ys(a);
    }
    async _transactionWithCallback({ callback: n, options: i }) {
      let o = { traceparent: this._tracingHelper.getTraceParent() },
        s = {
          maxWait: i?.maxWait ?? this._engineConfig.transactionOptions.maxWait,
          timeout: i?.timeout ?? this._engineConfig.transactionOptions.timeout,
          isolationLevel:
            i?.isolationLevel ??
            this._engineConfig.transactionOptions.isolationLevel,
        },
        a = await this._engine.transaction("start", o, s),
        l;
      try {
        let u = { kind: "itx", ...a };
        (l = await n(this._createItxClient(u))),
          await this._engine.transaction("commit", o, a);
      } catch (u) {
        throw (
          (await this._engine.transaction("rollback", o, a).catch(() => {}), u)
        );
      }
      return l;
    }
    _createItxClient(n) {
      return Ct(
        pe(ao(this), [
          ee("_appliedParent", () => this._appliedParent._createItxClient(n)),
          ee("_createPrismaPromise", () => En(n)),
          ee(ju, () => n.id),
          xt(rs),
        ]),
      );
    }
    $transaction(n, i) {
      let o;
      typeof n == "function"
        ? (o = () => this._transactionWithCallback({ callback: n, options: i }))
        : (o = () => this._transactionWithArray({ promises: n, options: i }));
      let s = { name: "transaction", attributes: { method: "$transaction" } };
      return this._tracingHelper.runInChildSpan(s, o);
    }
    _request(n) {
      n.otelParentCtx = this._tracingHelper.getActiveContext();
      let i = n.middlewareArgsMapper ?? Vu,
        o = {
          args: i.requestArgsToMiddlewareArgs(n.args),
          dataPath: n.dataPath,
          runInTransaction: !!n.transaction,
          action: n.action,
          model: n.model,
        },
        s = {
          middleware: {
            name: "middleware",
            middleware: !0,
            attributes: { method: "$use" },
            active: !1,
          },
          operation: {
            name: "operation",
            attributes: {
              method: o.action,
              model: o.model,
              name: o.model ? `${o.model}.${o.action}` : o.action,
            },
          },
        },
        a = -1,
        l = async (u) => {
          let g = this._middlewares.get(++a);
          if (g)
            return this._tracingHelper.runInChildSpan(s.middleware, (I) =>
              g(u, (_) => (I?.end(), l(_))),
            );
          let { runInTransaction: h, args: E, ...S } = u,
            A = { ...n, ...S };
          E && (A.args = i.middlewareArgsToRequestArgs(E)),
            n.transaction !== void 0 && h === !1 && delete A.transaction;
          let R = await ho(this, A);
          return A.model
            ? po({
                result: R,
                modelName: A.model,
                args: A.args,
                extensions: this._extensions,
                runtimeDataModel: this._runtimeDataModel,
              })
            : R;
        };
      return this._tracingHelper.runInChildSpan(s.operation, () => l(o));
    }
    async _executeRequest({
      args: n,
      clientMethod: i,
      dataPath: o,
      callsite: s,
      action: a,
      model: l,
      argsMapper: u,
      transaction: g,
      unpacker: h,
      otelParentCtx: E,
      customDataProxyFetch: S,
    }) {
      try {
        n = u ? u(n) : n;
        let A = { name: "serialize" },
          R = this._tracingHelper.runInChildSpan(A, () =>
            Uo({
              modelName: l,
              runtimeDataModel: this._runtimeDataModel,
              action: a,
              args: n,
              clientMethod: i,
              callsite: s,
              extensions: this._extensions,
              errorFormat: this._errorFormat,
              clientVersion: this._clientVersion,
            }),
          );
        return (
          oe.enabled("prisma:client") &&
            (_e("Prisma Client call:"),
            _e(`prisma.${i}(${zi(n)})`),
            _e("Generated request:"),
            _e(
              JSON.stringify(R, null, 2) +
                `
`,
            )),
          g?.kind === "batch" && (await g.lock),
          this._requestHandler.request({
            protocolQuery: R,
            modelName: l,
            action: a,
            clientMethod: i,
            dataPath: o,
            callsite: s,
            args: n,
            extensions: this._extensions,
            transaction: g,
            unpacker: h,
            otelParentCtx: E,
            otelChildCtx: this._tracingHelper.getActiveContext(),
            customDataProxyFetch: S,
          })
        );
      } catch (A) {
        throw ((A.clientVersion = this._clientVersion), A);
      }
    }
    get $metrics() {
      if (!this._hasPreviewFlag("metrics"))
        throw new G(
          "`metrics` preview feature must be enabled in order to access metrics API",
          { clientVersion: this._clientVersion },
        );
      return this._metrics;
    }
    _hasPreviewFlag(n) {
      return !!this._engineConfig.previewFeatures?.includes(n);
    }
  }
  return t;
}
function ws(e, t) {
  return Ju(e) ? [new re(e, t), zo] : [e, Yo];
}
function Ju(e) {
  return Array.isArray(e) && Array.isArray(e.raw);
}
d();
c();
p();
f();
m();
var Wu = new Set([
  "toJSON",
  "$$typeof",
  "asymmetricMatch",
  Symbol.iterator,
  Symbol.toStringTag,
  Symbol.isConcatSpreadable,
  Symbol.toPrimitive,
]);
function xs(e) {
  return new Proxy(e, {
    get(t, r) {
      if (r in t) return t[r];
      if (!Wu.has(r)) throw new TypeError(`Invalid enum value: ${String(r)}`);
    },
  });
}
d();
c();
p();
f();
m();
0 &&
  (module.exports = {
    Debug,
    Decimal,
    Extensions,
    MetricsClient,
    NotFoundError,
    PrismaClientInitializationError,
    PrismaClientKnownRequestError,
    PrismaClientRustPanicError,
    PrismaClientUnknownRequestError,
    PrismaClientValidationError,
    Public,
    Sql,
    defineDmmfProperty,
    detectRuntime,
    empty,
    getPrismaClient,
    join,
    makeStrictEnum,
    objectEnumValues,
    raw,
    sqltag,
    warnEnvConflicts,
    warnOnce,
  });
//# sourceMappingURL=wasm.js.map
