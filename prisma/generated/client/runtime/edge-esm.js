var ta = Object.create;
var nr = Object.defineProperty;
var ra = Object.getOwnPropertyDescriptor;
var na = Object.getOwnPropertyNames;
var ia = Object.getPrototypeOf,
  oa = Object.prototype.hasOwnProperty;
var Pt = ((e) =>
  typeof require != "undefined"
    ? require
    : typeof Proxy != "undefined"
      ? new Proxy(e, {
          get: (t, r) => (typeof require != "undefined" ? require : t)[r],
        })
      : e)(function (e) {
  if (typeof require != "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + e + '" is not supported');
});
var Ee = (e, t) => () => (e && (t = e((e = 0))), t);
var Re = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
  ir = (e, t) => {
    for (var r in t) nr(e, r, { get: t[r], enumerable: !0 });
  },
  Qn = (e, t, r, n) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let i of na(t))
        !oa.call(e, i) &&
          i !== r &&
          nr(e, i, {
            get: () => t[i],
            enumerable: !(n = ra(t, i)) || n.enumerable,
          });
    return e;
  };
var Ve = (e, t, r) => (
    (r = e != null ? ta(ia(e)) : {}),
    Qn(
      t || !e || !e.__esModule
        ? nr(r, "default", { value: e, enumerable: !0 })
        : r,
      e,
    )
  ),
  Gn = (e) => Qn(nr({}, "__esModule", { value: !0 }), e);
var y,
  c = Ee(() => {
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
var Hn,
  b,
  p = Ee(() => {
    "use strict";
    b =
      (Hn = globalThis.performance) != null
        ? Hn
        : (() => {
            let e = Date.now();
            return { now: () => Date.now() - e };
          })();
  });
var E,
  f = Ee(() => {
    "use strict";
    E = () => {};
    E.prototype = E;
  });
var m = Ee(() => {
  "use strict";
});
var fi = Re((nt) => {
  "use strict";
  d();
  c();
  p();
  f();
  m();
  var Zn = (e, t) => () => (
      t || e((t = { exports: {} }).exports, t), t.exports
    ),
    sa = Zn((e) => {
      "use strict";
      (e.byteLength = u), (e.toByteArray = g), (e.fromByteArray = S);
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
        var D = A.indexOf("=");
        D === -1 && (D = R);
        var M = D === R ? 0 : 4 - (D % 4);
        return [D, M];
      }
      function u(A) {
        var R = a(A),
          D = R[0],
          M = R[1];
        return ((D + M) * 3) / 4 - M;
      }
      function l(A, R, D) {
        return ((R + D) * 3) / 4 - D;
      }
      function g(A) {
        var R,
          D = a(A),
          M = D[0],
          B = D[1],
          I = new n(l(A, M, B)),
          L = 0,
          X = B > 0 ? M - 4 : M,
          F;
        for (F = 0; F < X; F += 4)
          (R =
            (r[A.charCodeAt(F)] << 18) |
            (r[A.charCodeAt(F + 1)] << 12) |
            (r[A.charCodeAt(F + 2)] << 6) |
            r[A.charCodeAt(F + 3)]),
            (I[L++] = (R >> 16) & 255),
            (I[L++] = (R >> 8) & 255),
            (I[L++] = R & 255);
        return (
          B === 2 &&
            ((R = (r[A.charCodeAt(F)] << 2) | (r[A.charCodeAt(F + 1)] >> 4)),
            (I[L++] = R & 255)),
          B === 1 &&
            ((R =
              (r[A.charCodeAt(F)] << 10) |
              (r[A.charCodeAt(F + 1)] << 4) |
              (r[A.charCodeAt(F + 2)] >> 2)),
            (I[L++] = (R >> 8) & 255),
            (I[L++] = R & 255)),
          I
        );
      }
      function h(A) {
        return (
          t[(A >> 18) & 63] + t[(A >> 12) & 63] + t[(A >> 6) & 63] + t[A & 63]
        );
      }
      function v(A, R, D) {
        for (var M, B = [], I = R; I < D; I += 3)
          (M =
            ((A[I] << 16) & 16711680) +
            ((A[I + 1] << 8) & 65280) +
            (A[I + 2] & 255)),
            B.push(h(M));
        return B.join("");
      }
      function S(A) {
        for (
          var R, D = A.length, M = D % 3, B = [], I = 16383, L = 0, X = D - M;
          L < X;
          L += I
        )
          B.push(v(A, L, L + I > X ? X : L + I));
        return (
          M === 1
            ? ((R = A[D - 1]), B.push(t[R >> 2] + t[(R << 4) & 63] + "=="))
            : M === 2 &&
              ((R = (A[D - 2] << 8) + A[D - 1]),
              B.push(t[R >> 10] + t[(R >> 4) & 63] + t[(R << 2) & 63] + "=")),
          B.join("")
        );
      }
    }),
    aa = Zn((e) => {
      (e.read = function (t, r, n, i, o) {
        var s,
          a,
          u = o * 8 - i - 1,
          l = (1 << u) - 1,
          g = l >> 1,
          h = -7,
          v = n ? o - 1 : 0,
          S = n ? -1 : 1,
          A = t[r + v];
        for (
          v += S, s = A & ((1 << -h) - 1), A >>= -h, h += u;
          h > 0;
          s = s * 256 + t[r + v], v += S, h -= 8
        );
        for (
          a = s & ((1 << -h) - 1), s >>= -h, h += i;
          h > 0;
          a = a * 256 + t[r + v], v += S, h -= 8
        );
        if (s === 0) s = 1 - g;
        else {
          if (s === l) return a ? NaN : (A ? -1 : 1) * (1 / 0);
          (a = a + Math.pow(2, i)), (s = s - g);
        }
        return (A ? -1 : 1) * a * Math.pow(2, s - i);
      }),
        (e.write = function (t, r, n, i, o, s) {
          var a,
            u,
            l,
            g = s * 8 - o - 1,
            h = (1 << g) - 1,
            v = h >> 1,
            S = o === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            A = i ? 0 : s - 1,
            R = i ? 1 : -1,
            D = r < 0 || (r === 0 && 1 / r < 0) ? 1 : 0;
          for (
            r = Math.abs(r),
              isNaN(r) || r === 1 / 0
                ? ((u = isNaN(r) ? 1 : 0), (a = h))
                : ((a = Math.floor(Math.log(r) / Math.LN2)),
                  r * (l = Math.pow(2, -a)) < 1 && (a--, (l *= 2)),
                  a + v >= 1 ? (r += S / l) : (r += S * Math.pow(2, 1 - v)),
                  r * l >= 2 && (a++, (l /= 2)),
                  a + v >= h
                    ? ((u = 0), (a = h))
                    : a + v >= 1
                      ? ((u = (r * l - 1) * Math.pow(2, o)), (a = a + v))
                      : ((u = r * Math.pow(2, v - 1) * Math.pow(2, o)),
                        (a = 0)));
            o >= 8;
            t[n + A] = u & 255, A += R, u /= 256, o -= 8
          );
          for (
            a = (a << o) | u, g += o;
            g > 0;
            t[n + A] = a & 255, A += R, a /= 256, g -= 8
          );
          t[n + A - R] |= D * 128;
        });
    }),
    Hr = sa(),
    tt = aa(),
    Wn =
      typeof Symbol == "function" && typeof Symbol.for == "function"
        ? Symbol.for("nodejs.util.inspect.custom")
        : null;
  nt.Buffer = T;
  nt.SlowBuffer = ma;
  nt.INSPECT_MAX_BYTES = 50;
  var or = 2147483647;
  nt.kMaxLength = or;
  T.TYPED_ARRAY_SUPPORT = ua();
  !T.TYPED_ARRAY_SUPPORT &&
    typeof console < "u" &&
    typeof console.error == "function" &&
    console.error(
      "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.",
    );
  function ua() {
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
    } catch (e) {
      return !1;
    }
  }
  Object.defineProperty(T.prototype, "parent", {
    enumerable: !0,
    get: function () {
      if (T.isBuffer(this)) return this.buffer;
    },
  });
  Object.defineProperty(T.prototype, "offset", {
    enumerable: !0,
    get: function () {
      if (T.isBuffer(this)) return this.byteOffset;
    },
  });
  function be(e) {
    if (e > or)
      throw new RangeError(
        'The value "' + e + '" is invalid for option "size"',
      );
    let t = new Uint8Array(e);
    return Object.setPrototypeOf(t, T.prototype), t;
  }
  function T(e, t, r) {
    if (typeof e == "number") {
      if (typeof t == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number',
        );
      return zr(e);
    }
    return Xn(e, t, r);
  }
  T.poolSize = 8192;
  function Xn(e, t, r) {
    if (typeof e == "string") return ca(e, t);
    if (ArrayBuffer.isView(e)) return pa(e);
    if (e == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
          typeof e,
      );
    if (
      me(e, ArrayBuffer) ||
      (e && me(e.buffer, ArrayBuffer)) ||
      (typeof SharedArrayBuffer < "u" &&
        (me(e, SharedArrayBuffer) || (e && me(e.buffer, SharedArrayBuffer))))
    )
      return ti(e, t, r);
    if (typeof e == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number',
      );
    let n = e.valueOf && e.valueOf();
    if (n != null && n !== e) return T.from(n, t, r);
    let i = fa(e);
    if (i) return i;
    if (
      typeof Symbol < "u" &&
      Symbol.toPrimitive != null &&
      typeof e[Symbol.toPrimitive] == "function"
    )
      return T.from(e[Symbol.toPrimitive]("string"), t, r);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
        typeof e,
    );
  }
  T.from = function (e, t, r) {
    return Xn(e, t, r);
  };
  Object.setPrototypeOf(T.prototype, Uint8Array.prototype);
  Object.setPrototypeOf(T, Uint8Array);
  function ei(e) {
    if (typeof e != "number")
      throw new TypeError('"size" argument must be of type number');
    if (e < 0)
      throw new RangeError(
        'The value "' + e + '" is invalid for option "size"',
      );
  }
  function la(e, t, r) {
    return (
      ei(e),
      e <= 0
        ? be(e)
        : t !== void 0
          ? typeof r == "string"
            ? be(e).fill(t, r)
            : be(e).fill(t)
          : be(e)
    );
  }
  T.alloc = function (e, t, r) {
    return la(e, t, r);
  };
  function zr(e) {
    return ei(e), be(e < 0 ? 0 : Yr(e) | 0);
  }
  T.allocUnsafe = function (e) {
    return zr(e);
  };
  T.allocUnsafeSlow = function (e) {
    return zr(e);
  };
  function ca(e, t) {
    if (((typeof t != "string" || t === "") && (t = "utf8"), !T.isEncoding(t)))
      throw new TypeError("Unknown encoding: " + t);
    let r = ri(e, t) | 0,
      n = be(r),
      i = n.write(e, t);
    return i !== r && (n = n.slice(0, i)), n;
  }
  function Wr(e) {
    let t = e.length < 0 ? 0 : Yr(e.length) | 0,
      r = be(t);
    for (let n = 0; n < t; n += 1) r[n] = e[n] & 255;
    return r;
  }
  function pa(e) {
    if (me(e, Uint8Array)) {
      let t = new Uint8Array(e);
      return ti(t.buffer, t.byteOffset, t.byteLength);
    }
    return Wr(e);
  }
  function ti(e, t, r) {
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
      Object.setPrototypeOf(n, T.prototype),
      n
    );
  }
  function fa(e) {
    if (T.isBuffer(e)) {
      let t = Yr(e.length) | 0,
        r = be(t);
      return r.length === 0 || e.copy(r, 0, 0, t), r;
    }
    if (e.length !== void 0)
      return typeof e.length != "number" || Xr(e.length) ? be(0) : Wr(e);
    if (e.type === "Buffer" && Array.isArray(e.data)) return Wr(e.data);
  }
  function Yr(e) {
    if (e >= or)
      throw new RangeError(
        "Attempt to allocate Buffer larger than maximum size: 0x" +
          or.toString(16) +
          " bytes",
      );
    return e | 0;
  }
  function ma(e) {
    return +e != e && (e = 0), T.alloc(+e);
  }
  T.isBuffer = function (e) {
    return e != null && e._isBuffer === !0 && e !== T.prototype;
  };
  T.compare = function (e, t) {
    if (
      (me(e, Uint8Array) && (e = T.from(e, e.offset, e.byteLength)),
      me(t, Uint8Array) && (t = T.from(t, t.offset, t.byteLength)),
      !T.isBuffer(e) || !T.isBuffer(t))
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
  T.isEncoding = function (e) {
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
  T.concat = function (e, t) {
    if (!Array.isArray(e))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (e.length === 0) return T.alloc(0);
    let r;
    if (t === void 0) for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
    let n = T.allocUnsafe(t),
      i = 0;
    for (r = 0; r < e.length; ++r) {
      let o = e[r];
      if (me(o, Uint8Array))
        i + o.length > n.length
          ? (T.isBuffer(o) || (o = T.from(o)), o.copy(n, i))
          : Uint8Array.prototype.set.call(n, o, i);
      else if (T.isBuffer(o)) o.copy(n, i);
      else throw new TypeError('"list" argument must be an Array of Buffers');
      i += o.length;
    }
    return n;
  };
  function ri(e, t) {
    if (T.isBuffer(e)) return e.length;
    if (ArrayBuffer.isView(e) || me(e, ArrayBuffer)) return e.byteLength;
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
          return Kr(e).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return r * 2;
        case "hex":
          return r >>> 1;
        case "base64":
          return pi(e).length;
        default:
          if (i) return n ? -1 : Kr(e).length;
          (t = ("" + t).toLowerCase()), (i = !0);
      }
  }
  T.byteLength = ri;
  function da(e, t, r) {
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
          return Ta(this, t, r);
        case "utf8":
        case "utf-8":
          return ii(this, t, r);
        case "ascii":
          return Pa(this, t, r);
        case "latin1":
        case "binary":
          return va(this, t, r);
        case "base64":
          return ba(this, t, r);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Ca(this, t, r);
        default:
          if (n) throw new TypeError("Unknown encoding: " + e);
          (e = (e + "").toLowerCase()), (n = !0);
      }
  }
  T.prototype._isBuffer = !0;
  function je(e, t, r) {
    let n = e[t];
    (e[t] = e[r]), (e[r] = n);
  }
  T.prototype.swap16 = function () {
    let e = this.length;
    if (e % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let t = 0; t < e; t += 2) je(this, t, t + 1);
    return this;
  };
  T.prototype.swap32 = function () {
    let e = this.length;
    if (e % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let t = 0; t < e; t += 4) je(this, t, t + 3), je(this, t + 1, t + 2);
    return this;
  };
  T.prototype.swap64 = function () {
    let e = this.length;
    if (e % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let t = 0; t < e; t += 8)
      je(this, t, t + 7),
        je(this, t + 1, t + 6),
        je(this, t + 2, t + 5),
        je(this, t + 3, t + 4);
    return this;
  };
  T.prototype.toString = function () {
    let e = this.length;
    return e === 0
      ? ""
      : arguments.length === 0
        ? ii(this, 0, e)
        : da.apply(this, arguments);
  };
  T.prototype.toLocaleString = T.prototype.toString;
  T.prototype.equals = function (e) {
    if (!T.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
    return this === e ? !0 : T.compare(this, e) === 0;
  };
  T.prototype.inspect = function () {
    let e = "",
      t = nt.INSPECT_MAX_BYTES;
    return (
      (e = this.toString("hex", 0, t)
        .replace(/(.{2})/g, "$1 ")
        .trim()),
      this.length > t && (e += " ... "),
      "<Buffer " + e + ">"
    );
  };
  Wn && (T.prototype[Wn] = T.prototype.inspect);
  T.prototype.compare = function (e, t, r, n, i) {
    if (
      (me(e, Uint8Array) && (e = T.from(e, e.offset, e.byteLength)),
      !T.isBuffer(e))
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
      u = this.slice(n, i),
      l = e.slice(t, r);
    for (let g = 0; g < a; ++g)
      if (u[g] !== l[g]) {
        (o = u[g]), (s = l[g]);
        break;
      }
    return o < s ? -1 : s < o ? 1 : 0;
  };
  function ni(e, t, r, n, i) {
    if (e.length === 0) return -1;
    if (
      (typeof r == "string"
        ? ((n = r), (r = 0))
        : r > 2147483647
          ? (r = 2147483647)
          : r < -2147483648 && (r = -2147483648),
      (r = +r),
      Xr(r) && (r = i ? 0 : e.length - 1),
      r < 0 && (r = e.length + r),
      r >= e.length)
    ) {
      if (i) return -1;
      r = e.length - 1;
    } else if (r < 0)
      if (i) r = 0;
      else return -1;
    if ((typeof t == "string" && (t = T.from(t, n)), T.isBuffer(t)))
      return t.length === 0 ? -1 : Kn(e, t, r, n, i);
    if (typeof t == "number")
      return (
        (t = t & 255),
        typeof Uint8Array.prototype.indexOf == "function"
          ? i
            ? Uint8Array.prototype.indexOf.call(e, t, r)
            : Uint8Array.prototype.lastIndexOf.call(e, t, r)
          : Kn(e, [t], r, n, i)
      );
    throw new TypeError("val must be string, number or Buffer");
  }
  function Kn(e, t, r, n, i) {
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
    function u(g, h) {
      return o === 1 ? g[h] : g.readUInt16BE(h * o);
    }
    let l;
    if (i) {
      let g = -1;
      for (l = r; l < s; l++)
        if (u(e, l) === u(t, g === -1 ? 0 : l - g)) {
          if ((g === -1 && (g = l), l - g + 1 === a)) return g * o;
        } else g !== -1 && (l -= l - g), (g = -1);
    } else
      for (r + a > s && (r = s - a), l = r; l >= 0; l--) {
        let g = !0;
        for (let h = 0; h < a; h++)
          if (u(e, l + h) !== u(t, h)) {
            g = !1;
            break;
          }
        if (g) return l;
      }
    return -1;
  }
  T.prototype.includes = function (e, t, r) {
    return this.indexOf(e, t, r) !== -1;
  };
  T.prototype.indexOf = function (e, t, r) {
    return ni(this, e, t, r, !0);
  };
  T.prototype.lastIndexOf = function (e, t, r) {
    return ni(this, e, t, r, !1);
  };
  function ga(e, t, r, n) {
    r = Number(r) || 0;
    let i = e.length - r;
    n ? ((n = Number(n)), n > i && (n = i)) : (n = i);
    let o = t.length;
    n > o / 2 && (n = o / 2);
    let s;
    for (s = 0; s < n; ++s) {
      let a = parseInt(t.substr(s * 2, 2), 16);
      if (Xr(a)) return s;
      e[r + s] = a;
    }
    return s;
  }
  function ha(e, t, r, n) {
    return sr(Kr(t, e.length - r), e, r, n);
  }
  function ya(e, t, r, n) {
    return sr(Ia(t), e, r, n);
  }
  function wa(e, t, r, n) {
    return sr(pi(t), e, r, n);
  }
  function Ea(e, t, r, n) {
    return sr(ka(t, e.length - r), e, r, n);
  }
  T.prototype.write = function (e, t, r, n) {
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
          return ga(this, e, t, r);
        case "utf8":
        case "utf-8":
          return ha(this, e, t, r);
        case "ascii":
        case "latin1":
        case "binary":
          return ya(this, e, t, r);
        case "base64":
          return wa(this, e, t, r);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Ea(this, e, t, r);
        default:
          if (o) throw new TypeError("Unknown encoding: " + n);
          (n = ("" + n).toLowerCase()), (o = !0);
      }
  };
  T.prototype.toJSON = function () {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0),
    };
  };
  function ba(e, t, r) {
    return t === 0 && r === e.length
      ? Hr.fromByteArray(e)
      : Hr.fromByteArray(e.slice(t, r));
  }
  function ii(e, t, r) {
    r = Math.min(e.length, r);
    let n = [],
      i = t;
    for (; i < r; ) {
      let o = e[i],
        s = null,
        a = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
      if (i + a <= r) {
        let u, l, g, h;
        switch (a) {
          case 1:
            o < 128 && (s = o);
            break;
          case 2:
            (u = e[i + 1]),
              (u & 192) === 128 &&
                ((h = ((o & 31) << 6) | (u & 63)), h > 127 && (s = h));
            break;
          case 3:
            (u = e[i + 1]),
              (l = e[i + 2]),
              (u & 192) === 128 &&
                (l & 192) === 128 &&
                ((h = ((o & 15) << 12) | ((u & 63) << 6) | (l & 63)),
                h > 2047 && (h < 55296 || h > 57343) && (s = h));
            break;
          case 4:
            (u = e[i + 1]),
              (l = e[i + 2]),
              (g = e[i + 3]),
              (u & 192) === 128 &&
                (l & 192) === 128 &&
                (g & 192) === 128 &&
                ((h =
                  ((o & 15) << 18) |
                  ((u & 63) << 12) |
                  ((l & 63) << 6) |
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
    return xa(n);
  }
  var zn = 4096;
  function xa(e) {
    let t = e.length;
    if (t <= zn) return String.fromCharCode.apply(String, e);
    let r = "",
      n = 0;
    for (; n < t; )
      r += String.fromCharCode.apply(String, e.slice(n, (n += zn)));
    return r;
  }
  function Pa(e, t, r) {
    let n = "";
    r = Math.min(e.length, r);
    for (let i = t; i < r; ++i) n += String.fromCharCode(e[i] & 127);
    return n;
  }
  function va(e, t, r) {
    let n = "";
    r = Math.min(e.length, r);
    for (let i = t; i < r; ++i) n += String.fromCharCode(e[i]);
    return n;
  }
  function Ta(e, t, r) {
    let n = e.length;
    (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
    let i = "";
    for (let o = t; o < r; ++o) i += Da[e[o]];
    return i;
  }
  function Ca(e, t, r) {
    let n = e.slice(t, r),
      i = "";
    for (let o = 0; o < n.length - 1; o += 2)
      i += String.fromCharCode(n[o] + n[o + 1] * 256);
    return i;
  }
  T.prototype.slice = function (e, t) {
    let r = this.length;
    (e = ~~e),
      (t = t === void 0 ? r : ~~t),
      e < 0 ? ((e += r), e < 0 && (e = 0)) : e > r && (e = r),
      t < 0 ? ((t += r), t < 0 && (t = 0)) : t > r && (t = r),
      t < e && (t = e);
    let n = this.subarray(e, t);
    return Object.setPrototypeOf(n, T.prototype), n;
  };
  function W(e, t, r) {
    if (e % 1 !== 0 || e < 0) throw new RangeError("offset is not uint");
    if (e + t > r)
      throw new RangeError("Trying to access beyond buffer length");
  }
  T.prototype.readUintLE = T.prototype.readUIntLE = function (e, t, r) {
    (e = e >>> 0), (t = t >>> 0), r || W(e, t, this.length);
    let n = this[e],
      i = 1,
      o = 0;
    for (; ++o < t && (i *= 256); ) n += this[e + o] * i;
    return n;
  };
  T.prototype.readUintBE = T.prototype.readUIntBE = function (e, t, r) {
    (e = e >>> 0), (t = t >>> 0), r || W(e, t, this.length);
    let n = this[e + --t],
      i = 1;
    for (; t > 0 && (i *= 256); ) n += this[e + --t] * i;
    return n;
  };
  T.prototype.readUint8 = T.prototype.readUInt8 = function (e, t) {
    return (e = e >>> 0), t || W(e, 1, this.length), this[e];
  };
  T.prototype.readUint16LE = T.prototype.readUInt16LE = function (e, t) {
    return (
      (e = e >>> 0), t || W(e, 2, this.length), this[e] | (this[e + 1] << 8)
    );
  };
  T.prototype.readUint16BE = T.prototype.readUInt16BE = function (e, t) {
    return (
      (e = e >>> 0), t || W(e, 2, this.length), (this[e] << 8) | this[e + 1]
    );
  };
  T.prototype.readUint32LE = T.prototype.readUInt32LE = function (e, t) {
    return (
      (e = e >>> 0),
      t || W(e, 4, this.length),
      (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
        this[e + 3] * 16777216
    );
  };
  T.prototype.readUint32BE = T.prototype.readUInt32BE = function (e, t) {
    return (
      (e = e >>> 0),
      t || W(e, 4, this.length),
      this[e] * 16777216 +
        ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
    );
  };
  T.prototype.readBigUInt64LE = Se(function (e) {
    (e = e >>> 0), rt(e, "offset");
    let t = this[e],
      r = this[e + 7];
    (t === void 0 || r === void 0) && vt(e, this.length - 8);
    let n = t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24,
      i = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + r * 2 ** 24;
    return BigInt(n) + (BigInt(i) << BigInt(32));
  });
  T.prototype.readBigUInt64BE = Se(function (e) {
    (e = e >>> 0), rt(e, "offset");
    let t = this[e],
      r = this[e + 7];
    (t === void 0 || r === void 0) && vt(e, this.length - 8);
    let n = t * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e],
      i = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + r;
    return (BigInt(n) << BigInt(32)) + BigInt(i);
  });
  T.prototype.readIntLE = function (e, t, r) {
    (e = e >>> 0), (t = t >>> 0), r || W(e, t, this.length);
    let n = this[e],
      i = 1,
      o = 0;
    for (; ++o < t && (i *= 256); ) n += this[e + o] * i;
    return (i *= 128), n >= i && (n -= Math.pow(2, 8 * t)), n;
  };
  T.prototype.readIntBE = function (e, t, r) {
    (e = e >>> 0), (t = t >>> 0), r || W(e, t, this.length);
    let n = t,
      i = 1,
      o = this[e + --n];
    for (; n > 0 && (i *= 256); ) o += this[e + --n] * i;
    return (i *= 128), o >= i && (o -= Math.pow(2, 8 * t)), o;
  };
  T.prototype.readInt8 = function (e, t) {
    return (
      (e = e >>> 0),
      t || W(e, 1, this.length),
      this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e]
    );
  };
  T.prototype.readInt16LE = function (e, t) {
    (e = e >>> 0), t || W(e, 2, this.length);
    let r = this[e] | (this[e + 1] << 8);
    return r & 32768 ? r | 4294901760 : r;
  };
  T.prototype.readInt16BE = function (e, t) {
    (e = e >>> 0), t || W(e, 2, this.length);
    let r = this[e + 1] | (this[e] << 8);
    return r & 32768 ? r | 4294901760 : r;
  };
  T.prototype.readInt32LE = function (e, t) {
    return (
      (e = e >>> 0),
      t || W(e, 4, this.length),
      this[e] | (this[e + 1] << 8) | (this[e + 2] << 16) | (this[e + 3] << 24)
    );
  };
  T.prototype.readInt32BE = function (e, t) {
    return (
      (e = e >>> 0),
      t || W(e, 4, this.length),
      (this[e] << 24) | (this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3]
    );
  };
  T.prototype.readBigInt64LE = Se(function (e) {
    (e = e >>> 0), rt(e, "offset");
    let t = this[e],
      r = this[e + 7];
    (t === void 0 || r === void 0) && vt(e, this.length - 8);
    let n =
      this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 + (r << 24);
    return (
      (BigInt(n) << BigInt(32)) +
      BigInt(t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24)
    );
  });
  T.prototype.readBigInt64BE = Se(function (e) {
    (e = e >>> 0), rt(e, "offset");
    let t = this[e],
      r = this[e + 7];
    (t === void 0 || r === void 0) && vt(e, this.length - 8);
    let n = (t << 24) + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e];
    return (
      (BigInt(n) << BigInt(32)) +
      BigInt(this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + r)
    );
  });
  T.prototype.readFloatLE = function (e, t) {
    return (
      (e = e >>> 0), t || W(e, 4, this.length), tt.read(this, e, !0, 23, 4)
    );
  };
  T.prototype.readFloatBE = function (e, t) {
    return (
      (e = e >>> 0), t || W(e, 4, this.length), tt.read(this, e, !1, 23, 4)
    );
  };
  T.prototype.readDoubleLE = function (e, t) {
    return (
      (e = e >>> 0), t || W(e, 8, this.length), tt.read(this, e, !0, 52, 8)
    );
  };
  T.prototype.readDoubleBE = function (e, t) {
    return (
      (e = e >>> 0), t || W(e, 8, this.length), tt.read(this, e, !1, 52, 8)
    );
  };
  function oe(e, t, r, n, i, o) {
    if (!T.isBuffer(e))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (t > i || t < o)
      throw new RangeError('"value" argument is out of bounds');
    if (r + n > e.length) throw new RangeError("Index out of range");
  }
  T.prototype.writeUintLE = T.prototype.writeUIntLE = function (e, t, r, n) {
    if (((e = +e), (t = t >>> 0), (r = r >>> 0), !n)) {
      let s = Math.pow(2, 8 * r) - 1;
      oe(this, e, t, r, s, 0);
    }
    let i = 1,
      o = 0;
    for (this[t] = e & 255; ++o < r && (i *= 256); )
      this[t + o] = (e / i) & 255;
    return t + r;
  };
  T.prototype.writeUintBE = T.prototype.writeUIntBE = function (e, t, r, n) {
    if (((e = +e), (t = t >>> 0), (r = r >>> 0), !n)) {
      let s = Math.pow(2, 8 * r) - 1;
      oe(this, e, t, r, s, 0);
    }
    let i = r - 1,
      o = 1;
    for (this[t + i] = e & 255; --i >= 0 && (o *= 256); )
      this[t + i] = (e / o) & 255;
    return t + r;
  };
  T.prototype.writeUint8 = T.prototype.writeUInt8 = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || oe(this, e, t, 1, 255, 0),
      (this[t] = e & 255),
      t + 1
    );
  };
  T.prototype.writeUint16LE = T.prototype.writeUInt16LE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || oe(this, e, t, 2, 65535, 0),
      (this[t] = e & 255),
      (this[t + 1] = e >>> 8),
      t + 2
    );
  };
  T.prototype.writeUint16BE = T.prototype.writeUInt16BE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || oe(this, e, t, 2, 65535, 0),
      (this[t] = e >>> 8),
      (this[t + 1] = e & 255),
      t + 2
    );
  };
  T.prototype.writeUint32LE = T.prototype.writeUInt32LE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || oe(this, e, t, 4, 4294967295, 0),
      (this[t + 3] = e >>> 24),
      (this[t + 2] = e >>> 16),
      (this[t + 1] = e >>> 8),
      (this[t] = e & 255),
      t + 4
    );
  };
  T.prototype.writeUint32BE = T.prototype.writeUInt32BE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || oe(this, e, t, 4, 4294967295, 0),
      (this[t] = e >>> 24),
      (this[t + 1] = e >>> 16),
      (this[t + 2] = e >>> 8),
      (this[t + 3] = e & 255),
      t + 4
    );
  };
  function oi(e, t, r, n, i) {
    ci(t, n, i, e, r, 7);
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
  function si(e, t, r, n, i) {
    ci(t, n, i, e, r, 7);
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
  T.prototype.writeBigUInt64LE = Se(function (e, t = 0) {
    return oi(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
  });
  T.prototype.writeBigUInt64BE = Se(function (e, t = 0) {
    return si(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
  });
  T.prototype.writeIntLE = function (e, t, r, n) {
    if (((e = +e), (t = t >>> 0), !n)) {
      let a = Math.pow(2, 8 * r - 1);
      oe(this, e, t, r, a - 1, -a);
    }
    let i = 0,
      o = 1,
      s = 0;
    for (this[t] = e & 255; ++i < r && (o *= 256); )
      e < 0 && s === 0 && this[t + i - 1] !== 0 && (s = 1),
        (this[t + i] = (((e / o) >> 0) - s) & 255);
    return t + r;
  };
  T.prototype.writeIntBE = function (e, t, r, n) {
    if (((e = +e), (t = t >>> 0), !n)) {
      let a = Math.pow(2, 8 * r - 1);
      oe(this, e, t, r, a - 1, -a);
    }
    let i = r - 1,
      o = 1,
      s = 0;
    for (this[t + i] = e & 255; --i >= 0 && (o *= 256); )
      e < 0 && s === 0 && this[t + i + 1] !== 0 && (s = 1),
        (this[t + i] = (((e / o) >> 0) - s) & 255);
    return t + r;
  };
  T.prototype.writeInt8 = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || oe(this, e, t, 1, 127, -128),
      e < 0 && (e = 255 + e + 1),
      (this[t] = e & 255),
      t + 1
    );
  };
  T.prototype.writeInt16LE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || oe(this, e, t, 2, 32767, -32768),
      (this[t] = e & 255),
      (this[t + 1] = e >>> 8),
      t + 2
    );
  };
  T.prototype.writeInt16BE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || oe(this, e, t, 2, 32767, -32768),
      (this[t] = e >>> 8),
      (this[t + 1] = e & 255),
      t + 2
    );
  };
  T.prototype.writeInt32LE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || oe(this, e, t, 4, 2147483647, -2147483648),
      (this[t] = e & 255),
      (this[t + 1] = e >>> 8),
      (this[t + 2] = e >>> 16),
      (this[t + 3] = e >>> 24),
      t + 4
    );
  };
  T.prototype.writeInt32BE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || oe(this, e, t, 4, 2147483647, -2147483648),
      e < 0 && (e = 4294967295 + e + 1),
      (this[t] = e >>> 24),
      (this[t + 1] = e >>> 16),
      (this[t + 2] = e >>> 8),
      (this[t + 3] = e & 255),
      t + 4
    );
  };
  T.prototype.writeBigInt64LE = Se(function (e, t = 0) {
    return oi(
      this,
      e,
      t,
      -BigInt("0x8000000000000000"),
      BigInt("0x7fffffffffffffff"),
    );
  });
  T.prototype.writeBigInt64BE = Se(function (e, t = 0) {
    return si(
      this,
      e,
      t,
      -BigInt("0x8000000000000000"),
      BigInt("0x7fffffffffffffff"),
    );
  });
  function ai(e, t, r, n, i, o) {
    if (r + n > e.length) throw new RangeError("Index out of range");
    if (r < 0) throw new RangeError("Index out of range");
  }
  function ui(e, t, r, n, i) {
    return (
      (t = +t),
      (r = r >>> 0),
      i || ai(e, t, r, 4, 34028234663852886e22, -34028234663852886e22),
      tt.write(e, t, r, n, 23, 4),
      r + 4
    );
  }
  T.prototype.writeFloatLE = function (e, t, r) {
    return ui(this, e, t, !0, r);
  };
  T.prototype.writeFloatBE = function (e, t, r) {
    return ui(this, e, t, !1, r);
  };
  function li(e, t, r, n, i) {
    return (
      (t = +t),
      (r = r >>> 0),
      i || ai(e, t, r, 8, 17976931348623157e292, -17976931348623157e292),
      tt.write(e, t, r, n, 52, 8),
      r + 8
    );
  }
  T.prototype.writeDoubleLE = function (e, t, r) {
    return li(this, e, t, !0, r);
  };
  T.prototype.writeDoubleBE = function (e, t, r) {
    return li(this, e, t, !1, r);
  };
  T.prototype.copy = function (e, t, r, n) {
    if (!T.isBuffer(e)) throw new TypeError("argument should be a Buffer");
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
  T.prototype.fill = function (e, t, r, n) {
    if (typeof e == "string") {
      if (
        (typeof t == "string"
          ? ((n = t), (t = 0), (r = this.length))
          : typeof r == "string" && ((n = r), (r = this.length)),
        n !== void 0 && typeof n != "string")
      )
        throw new TypeError("encoding must be a string");
      if (typeof n == "string" && !T.isEncoding(n))
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
      let o = T.isBuffer(e) ? e : T.from(e, n),
        s = o.length;
      if (s === 0)
        throw new TypeError(
          'The value "' + e + '" is invalid for argument "value"',
        );
      for (i = 0; i < r - t; ++i) this[i + t] = o[i % s];
    }
    return this;
  };
  var et = {};
  function Zr(e, t, r) {
    et[e] = class extends r {
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
  Zr(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function (e) {
      return e
        ? `${e} is outside of buffer bounds`
        : "Attempt to access memory outside buffer bounds";
    },
    RangeError,
  );
  Zr(
    "ERR_INVALID_ARG_TYPE",
    function (e, t) {
      return `The "${e}" argument must be of type number. Received type ${typeof t}`;
    },
    TypeError,
  );
  Zr(
    "ERR_OUT_OF_RANGE",
    function (e, t, r) {
      let n = `The value of "${e}" is out of range.`,
        i = r;
      return (
        Number.isInteger(r) && Math.abs(r) > 2 ** 32
          ? (i = Yn(String(r)))
          : typeof r == "bigint" &&
            ((i = String(r)),
            (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) &&
              (i = Yn(i)),
            (i += "n")),
        (n += ` It must be ${t}. Received ${i}`),
        n
      );
    },
    RangeError,
  );
  function Yn(e) {
    let t = "",
      r = e.length,
      n = e[0] === "-" ? 1 : 0;
    for (; r >= n + 4; r -= 3) t = `_${e.slice(r - 3, r)}${t}`;
    return `${e.slice(0, r)}${t}`;
  }
  function Aa(e, t, r) {
    rt(t, "offset"),
      (e[t] === void 0 || e[t + r] === void 0) && vt(t, e.length - (r + 1));
  }
  function ci(e, t, r, n, i, o) {
    if (e > r || e < t) {
      let s = typeof t == "bigint" ? "n" : "",
        a;
      throw (
        (o > 3
          ? t === 0 || t === BigInt(0)
            ? (a = `>= 0${s} and < 2${s} ** ${(o + 1) * 8}${s}`)
            : (a = `>= -(2${s} ** ${(o + 1) * 8 - 1}${s}) and < 2 ** ${(o + 1) * 8 - 1}${s}`)
          : (a = `>= ${t}${s} and <= ${r}${s}`),
        new et.ERR_OUT_OF_RANGE("value", a, e))
      );
    }
    Aa(n, i, o);
  }
  function rt(e, t) {
    if (typeof e != "number") throw new et.ERR_INVALID_ARG_TYPE(t, "number", e);
  }
  function vt(e, t, r) {
    throw Math.floor(e) !== e
      ? (rt(e, r), new et.ERR_OUT_OF_RANGE(r || "offset", "an integer", e))
      : t < 0
        ? new et.ERR_BUFFER_OUT_OF_BOUNDS()
        : new et.ERR_OUT_OF_RANGE(
            r || "offset",
            `>= ${r ? 1 : 0} and <= ${t}`,
            e,
          );
  }
  var Ra = /[^+/0-9A-Za-z-_]/g;
  function Sa(e) {
    if (((e = e.split("=")[0]), (e = e.trim().replace(Ra, "")), e.length < 2))
      return "";
    for (; e.length % 4 !== 0; ) e = e + "=";
    return e;
  }
  function Kr(e, t) {
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
  function Ia(e) {
    let t = [];
    for (let r = 0; r < e.length; ++r) t.push(e.charCodeAt(r) & 255);
    return t;
  }
  function ka(e, t) {
    let r,
      n,
      i,
      o = [];
    for (let s = 0; s < e.length && !((t -= 2) < 0); ++s)
      (r = e.charCodeAt(s)), (n = r >> 8), (i = r % 256), o.push(i), o.push(n);
    return o;
  }
  function pi(e) {
    return Hr.toByteArray(Sa(e));
  }
  function sr(e, t, r, n) {
    let i;
    for (i = 0; i < n && !(i + r >= t.length || i >= e.length); ++i)
      t[i + r] = e[i];
    return i;
  }
  function me(e, t) {
    return (
      e instanceof t ||
      (e != null &&
        e.constructor != null &&
        e.constructor.name != null &&
        e.constructor.name === t.name)
    );
  }
  function Xr(e) {
    return e !== e;
  }
  var Da = (function () {
    let e = "0123456789abcdef",
      t = new Array(256);
    for (let r = 0; r < 16; ++r) {
      let n = r * 16;
      for (let i = 0; i < 16; ++i) t[n + i] = e[r] + e[i];
    }
    return t;
  })();
  function Se(e) {
    return typeof BigInt > "u" ? Ma : e;
  }
  function Ma() {
    throw new Error("BigInt not supported");
  }
});
var w,
  d = Ee(() => {
    "use strict";
    w = Ve(fi());
  });
function Oa() {
  return !1;
}
var Na,
  _a,
  wi,
  Ei = Ee(() => {
    "use strict";
    d();
    c();
    p();
    f();
    m();
    (Na = {}), (_a = { existsSync: Oa, promises: Na }), (wi = _a);
  });
var Di = Re((of, ki) => {
  "use strict";
  d();
  c();
  p();
  f();
  m();
  ki.exports = (lr(), Gn(tn)).format;
});
var tn = {};
ir(tn, {
  default: () => Ba,
  deprecate: () => Oi,
  format: () => Ni,
  inspect: () => cr,
  promisify: () => Mi,
});
function Mi(e) {
  return (...t) =>
    new Promise((r, n) => {
      e(...t, (i, o) => {
        i ? n(i) : r(o);
      });
    });
}
function Oi(e, t) {
  return (...r) => (console.warn(t), e(...r));
}
function cr(e) {
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
var Ni,
  Fa,
  Ba,
  lr = Ee(() => {
    "use strict";
    d();
    c();
    p();
    f();
    m();
    (Ni = Di()),
      (Fa = { promisify: Mi, deprecate: Oi, inspect: cr, format: Ni }),
      (Ba = Fa);
  });
function ja(...e) {
  return e.join("/");
}
function Ja(...e) {
  return e.join("/");
}
var Vi,
  Qa,
  Ga,
  Ct,
  ji = Ee(() => {
    "use strict";
    d();
    c();
    p();
    f();
    m();
    (Vi = "/"),
      (Qa = { sep: Vi }),
      (Ga = { resolve: ja, posix: Qa, join: Ja, sep: Vi }),
      (Ct = Ga);
  });
var fr,
  Qi = Ee(() => {
    "use strict";
    d();
    c();
    p();
    f();
    m();
    fr = class {
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
var Hi = Re((pm, Gi) => {
  "use strict";
  d();
  c();
  p();
  f();
  m();
  Gi.exports = (e, t = 1, r) => {
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
var zi = Re((vm, Ki) => {
  "use strict";
  d();
  c();
  p();
  f();
  m();
  Ki.exports = ({ onlyFirst: e = !1 } = {}) => {
    let t = [
      "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
      "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))",
    ].join("|");
    return new RegExp(t, e ? void 0 : "g");
  };
});
var Zi = Re((Im, Yi) => {
  "use strict";
  d();
  c();
  p();
  f();
  m();
  var Za = zi();
  Yi.exports = (e) => (typeof e == "string" ? e.replace(Za(), "") : e);
});
var to = Re((Ch, nu) => {
  nu.exports = {
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
var ro = Re(() => {
  "use strict";
  d();
  c();
  p();
  f();
  m();
});
var Ln = Re((K2, fs) => {
  "use strict";
  d();
  c();
  p();
  f();
  m();
  fs.exports = (function () {
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
        u,
        l,
        g,
        h,
        v,
        S,
        A,
        R,
        D,
        M,
        B,
        I,
        L = [];
      for (u = 0; u < i; u++) L.push(u + 1), L.push(t.charCodeAt(s + u));
      for (var X = L.length - 1; a < o - 3; )
        for (
          D = r.charCodeAt(s + (l = a)),
            M = r.charCodeAt(s + (g = a + 1)),
            B = r.charCodeAt(s + (h = a + 2)),
            I = r.charCodeAt(s + (v = a + 3)),
            S = a += 4,
            u = 0;
          u < X;
          u += 2
        )
          (A = L[u]),
            (R = L[u + 1]),
            (l = e(A, l, g, D, R)),
            (g = e(l, g, h, M, R)),
            (h = e(g, h, v, B, R)),
            (S = e(h, v, S, I, R)),
            (L[u] = S),
            (v = h),
            (h = g),
            (g = l),
            (l = A);
      for (; a < o; )
        for (D = r.charCodeAt(s + (l = a)), S = ++a, u = 0; u < X; u += 2)
          (A = L[u]), (L[u] = S = e(A, l, S, D, L[u + 1])), (l = A);
      return S;
    };
  })();
});
d();
c();
p();
f();
m();
var gi = {};
ir(gi, { defineExtension: () => mi, getExtensionContext: () => di });
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
function mi(e) {
  return typeof e == "function" ? e : (t) => t.$extends(e);
}
d();
c();
p();
f();
m();
function di(e) {
  return e;
}
var yi = {};
ir(yi, { validator: () => hi });
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
function hi(...e) {
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
var en,
  bi,
  xi,
  Pi,
  vi = !0;
typeof y != "undefined" &&
  (({
    FORCE_COLOR: en,
    NODE_DISABLE_COLORS: bi,
    NO_COLOR: xi,
    TERM: Pi,
  } = y.env || {}),
  (vi = y.stdout && y.stdout.isTTY));
var La = {
  enabled:
    !bi && xi == null && Pi !== "dumb" && ((en != null && en !== "0") || vi),
};
function V(e, t) {
  let r = new RegExp(`\\x1b\\[${t}m`, "g"),
    n = `\x1B[${e}m`,
    i = `\x1B[${t}m`;
  return function (o) {
    return !La.enabled || o == null
      ? o
      : n + (~("" + o).indexOf(i) ? o.replace(r, i + n) : o) + i;
  };
}
var _p = V(0, 0),
  ar = V(1, 22),
  ur = V(2, 22),
  Lp = V(3, 23),
  Ti = V(4, 24),
  Fp = V(7, 27),
  Bp = V(8, 28),
  $p = V(9, 29),
  qp = V(30, 39),
  it = V(31, 39),
  Ci = V(32, 39),
  Ai = V(33, 39),
  Ri = V(34, 39),
  Up = V(35, 39),
  Si = V(36, 39),
  Vp = V(37, 39),
  Ii = V(90, 39),
  jp = V(90, 39),
  Jp = V(40, 49),
  Qp = V(41, 49),
  Gp = V(42, 49),
  Hp = V(43, 49),
  Wp = V(44, 49),
  Kp = V(45, 49),
  zp = V(46, 49),
  Yp = V(47, 49);
d();
c();
p();
f();
m();
var $a = 100,
  _i = ["green", "yellow", "blue", "magenta", "cyan", "red"],
  pr = [],
  Li = Date.now(),
  qa = 0,
  Fi,
  Bi;
(Bi = globalThis.DEBUG) != null ||
  (globalThis.DEBUG = (Fi = y.env.DEBUG) != null ? Fi : "");
var $i;
($i = globalThis.DEBUG_COLORS) != null ||
  (globalThis.DEBUG_COLORS = y.env.DEBUG_COLORS
    ? y.env.DEBUG_COLORS === "true"
    : !0);
var Tt = {
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
    var o;
    let [t, r, ...n] = e,
      i;
    typeof Pt == "function" &&
    typeof y != "undefined" &&
    typeof y.stderr != "undefined" &&
    typeof y.stderr.write == "function"
      ? (i = (...s) => {
          let a = (lr(), Gn(tn));
          y.stderr.write(
            a.format(...s) +
              `
`,
          );
        })
      : (i = (o = console.warn) != null ? o : console.log),
      i(`${t} ${r}`, ...n);
  },
  formatters: {},
};
function Ua(e) {
  let t = {
      color: _i[qa++ % _i.length],
      enabled: Tt.enabled(e),
      namespace: e,
      log: Tt.log,
      extend: () => {},
    },
    r = (...n) => {
      let { enabled: i, namespace: o, color: s, log: a } = t;
      if (
        (n.length !== 0 && pr.push([o, ...n]),
        pr.length > $a && pr.shift(),
        Tt.enabled(o) || i)
      ) {
        let u = n.map((g) => (typeof g == "string" ? g : Va(g))),
          l = `+${Date.now() - Li}ms`;
        (Li = Date.now()), a(o, ...u, l);
      }
    };
  return new Proxy(r, { get: (n, i) => t[i], set: (n, i, o) => (t[i] = o) });
}
var qi = new Proxy(Ua, { get: (e, t) => Tt[t], set: (e, t, r) => (Tt[t] = r) });
function Va(e, t = 2) {
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
function Ui() {
  pr.length = 0;
}
var ne = qi;
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
var Ji = "library";
function At(e) {
  let t = Ha();
  return (
    t ||
    ((e == null ? void 0 : e.config.engineType) === "library"
      ? "library"
      : (e == null ? void 0 : e.config.engineType) === "binary"
        ? "binary"
        : Ji)
  );
}
function Ha() {
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
var Ie;
((t) => {
  let e;
  ((I) => (
    (I.findUnique = "findUnique"),
    (I.findUniqueOrThrow = "findUniqueOrThrow"),
    (I.findFirst = "findFirst"),
    (I.findFirstOrThrow = "findFirstOrThrow"),
    (I.findMany = "findMany"),
    (I.create = "create"),
    (I.createMany = "createMany"),
    (I.update = "update"),
    (I.updateMany = "updateMany"),
    (I.upsert = "upsert"),
    (I.delete = "delete"),
    (I.deleteMany = "deleteMany"),
    (I.groupBy = "groupBy"),
    (I.count = "count"),
    (I.aggregate = "aggregate"),
    (I.findRaw = "findRaw"),
    (I.aggregateRaw = "aggregateRaw")
  ))((e = t.ModelAction || (t.ModelAction = {})));
})(Ie || (Ie = {}));
var ot = {};
ir(ot, {
  error: () => za,
  info: () => Ka,
  log: () => Wa,
  query: () => Ya,
  should: () => Wi,
  tags: () => Rt,
  warn: () => rn,
});
d();
c();
p();
f();
m();
var Rt = {
    error: it("prisma:error"),
    warn: Ai("prisma:warn"),
    info: Si("prisma:info"),
    query: Ri("prisma:query"),
  },
  Wi = { warn: () => !y.env.PRISMA_DISABLE_WARNINGS };
function Wa(...e) {
  console.log(...e);
}
function rn(e, ...t) {
  Wi.warn() && console.warn(`${Rt.warn} ${e}`, ...t);
}
function Ka(e, ...t) {
  console.info(`${Rt.info} ${e}`, ...t);
}
function za(e, ...t) {
  console.error(`${Rt.error} ${e}`, ...t);
}
function Ya(e, ...t) {
  console.log(`${Rt.query} ${e}`, ...t);
}
d();
c();
p();
f();
m();
function Je(e, t) {
  throw new Error(t);
}
d();
c();
p();
f();
m();
function nn(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
d();
c();
p();
f();
m();
var on = (e, t) => e.reduce((r, n) => ((r[t(n)] = n), r), {});
d();
c();
p();
f();
m();
function st(e, t) {
  let r = {};
  for (let n of Object.keys(e)) r[n] = t(e[n], n);
  return r;
}
d();
c();
p();
f();
m();
function sn(e, t) {
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
function N(e, t) {
  Object.defineProperty(e, "name", { value: t, configurable: !0 });
}
d();
c();
p();
f();
m();
var Xi = new Set(),
  mr = (e, t, ...r) => {
    Xi.has(e) || (Xi.add(e), rn(t, ...r));
  };
d();
c();
p();
f();
m();
var Y = class extends Error {
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
N(Y, "PrismaClientKnownRequestError");
var ke = class extends Y {
  constructor(t, r) {
    super(t, { code: "P2025", clientVersion: r }),
      (this.name = "NotFoundError");
  }
};
N(ke, "NotFoundError");
d();
c();
p();
f();
m();
var G = class e extends Error {
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
N(G, "PrismaClientInitializationError");
d();
c();
p();
f();
m();
var De = class extends Error {
  constructor(t, r) {
    super(t),
      (this.name = "PrismaClientRustPanicError"),
      (this.clientVersion = r);
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientRustPanicError";
  }
};
N(De, "PrismaClientRustPanicError");
d();
c();
p();
f();
m();
var ue = class extends Error {
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
N(ue, "PrismaClientUnknownRequestError");
d();
c();
p();
f();
m();
var te = class extends Error {
  constructor(r, { clientVersion: n }) {
    super(r);
    this.name = "PrismaClientValidationError";
    this.clientVersion = n;
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientValidationError";
  }
};
N(te, "PrismaClientValidationError");
d();
c();
p();
f();
m();
var St = class {
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
function It(e) {
  let t;
  return {
    get() {
      return t || (t = { value: e() }), t.value;
    },
  };
}
function Xa(e, t) {
  let r = It(() => eu(t));
  Object.defineProperty(e, "dmmf", { get: () => r.get() });
}
function eu(e) {
  return {
    datamodel: { models: an(e.models), enums: an(e.enums), types: an(e.types) },
  };
}
function an(e) {
  return Object.entries(e).map(([t, r]) => ({ name: t, ...r }));
}
d();
c();
p();
f();
m();
var dr = Symbol(),
  un = new WeakMap(),
  xe = class {
    constructor(t) {
      t === dr
        ? un.set(this, `Prisma.${this._getName()}`)
        : un.set(
            this,
            `new Prisma.${this._getNamespace()}.${this._getName()}()`,
          );
    }
    _getName() {
      return this.constructor.name;
    }
    toString() {
      return un.get(this);
    }
  },
  kt = class extends xe {
    _getNamespace() {
      return "NullTypes";
    }
  },
  Dt = class extends kt {};
cn(Dt, "DbNull");
var Mt = class extends kt {};
cn(Mt, "JsonNull");
var Ot = class extends kt {};
cn(Ot, "AnyNull");
var ln = {
  classes: { DbNull: Dt, JsonNull: Mt, AnyNull: Ot },
  instances: { DbNull: new Dt(dr), JsonNull: new Mt(dr), AnyNull: new Ot(dr) },
};
function cn(e, t) {
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
function Nt(e) {
  return {
    ok: !1,
    error: e,
    map() {
      return Nt(e);
    },
    flatMap() {
      return Nt(e);
    },
  };
}
var pn = class {
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
  fn = (e) => {
    let t = new pn(),
      r = Qe(t, e.startTransaction.bind(e)),
      n = {
        errorRegistry: t,
        queryRaw: Qe(t, e.queryRaw.bind(e)),
        executeRaw: Qe(t, e.executeRaw.bind(e)),
        provider: e.provider,
        startTransaction: async (...i) => (await r(...i)).map((s) => tu(t, s)),
      };
    return (
      e.getConnectionInfo &&
        (n.getConnectionInfo = ru(t, e.getConnectionInfo.bind(e))),
      n
    );
  },
  tu = (e, t) => ({
    provider: t.provider,
    options: t.options,
    queryRaw: Qe(e, t.queryRaw.bind(t)),
    executeRaw: Qe(e, t.executeRaw.bind(t)),
    commit: Qe(e, t.commit.bind(t)),
    rollback: Qe(e, t.rollback.bind(t)),
  });
function Qe(e, t) {
  return async (...r) => {
    try {
      return await t(...r);
    } catch (n) {
      let i = e.registerNewError(n);
      return Nt({ kind: "GenericJs", id: i });
    }
  };
}
function ru(e, t) {
  return (...r) => {
    try {
      return t(...r);
    } catch (n) {
      let i = e.registerNewError(n);
      return Nt({ kind: "GenericJs", id: i });
    }
  };
}
var ea = Ve(to());
var iD = Ve(ro());
Qi();
Ei();
ji();
d();
c();
p();
f();
m();
var le = class e {
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
        let u = 0;
        for (; u < s.values.length; )
          (this.values[o++] = s.values[u++]), (this.strings[o] = s.strings[u]);
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
function iu(e, t = ",", r = "", n = "") {
  if (e.length === 0)
    throw new TypeError(
      "Expected `join([])` to be called with an array of multiple elements, but got an empty array",
    );
  return new le([r, ...Array(e.length - 1).fill(t), n], e);
}
function no(e) {
  return new le([e], []);
}
var ou = no("");
function io(e, ...t) {
  return new le(e, t);
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
function _t(e) {
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
function ie(e, t) {
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
var de = class {
  constructor() {
    this._map = new Map();
  }
  get(t) {
    var r;
    return (r = this._map.get(t)) == null ? void 0 : r.value;
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
function Ge(e) {
  let t = new de();
  return {
    getKeys() {
      return e.getKeys();
    },
    getPropertyValue(r) {
      return t.getOrCreate(r, () => e.getPropertyValue(r));
    },
    getPropertyDescriptor(r) {
      var n;
      return (n = e.getPropertyDescriptor) == null ? void 0 : n.call(e, r);
    },
  };
}
d();
c();
p();
f();
m();
lr();
d();
c();
p();
f();
m();
var gr = { enumerable: !0, configurable: !0, writable: !0 };
function hr(e) {
  let t = new Set(e);
  return {
    getOwnPropertyDescriptor: () => gr,
    has: (r, n) => t.has(n),
    set: (r, n, i) => t.add(n) && Reflect.set(r, n, i),
    ownKeys: () => [...t],
  };
}
var oo = Symbol.for("nodejs.util.inspect.custom");
function ge(e, t) {
  let r = su(t),
    n = new Set(),
    i = new Proxy(e, {
      get(o, s) {
        if (n.has(s)) return o[s];
        let a = r.get(s);
        return a ? a.getPropertyValue(s) : o[s];
      },
      has(o, s) {
        var u, l;
        if (n.has(s)) return !0;
        let a = r.get(s);
        return a
          ? (l = (u = a.has) == null ? void 0 : u.call(a, s)) != null
            ? l
            : !0
          : Reflect.has(o, s);
      },
      ownKeys(o) {
        let s = so(Reflect.ownKeys(o), r),
          a = so(Array.from(r.keys()), r);
        return [...new Set([...s, ...a, ...n])];
      },
      set(o, s, a) {
        var l, g;
        let u = r.get(s);
        return ((g =
          (l = u == null ? void 0 : u.getPropertyDescriptor) == null
            ? void 0
            : l.call(u, s)) == null
          ? void 0
          : g.writable) === !1
          ? !1
          : (n.add(s), Reflect.set(o, s, a));
      },
      getOwnPropertyDescriptor(o, s) {
        let a = Reflect.getOwnPropertyDescriptor(o, s);
        if (a && !a.configurable) return a;
        let u = r.get(s);
        return u
          ? u.getPropertyDescriptor
            ? { ...gr, ...(u == null ? void 0 : u.getPropertyDescriptor(s)) }
            : gr
          : a;
      },
      defineProperty(o, s, a) {
        return n.add(s), Reflect.defineProperty(o, s, a);
      },
    });
  return (
    (i[oo] = function (o, s, a = cr) {
      let u = { ...this };
      return delete u[oo], a(u, s);
    }),
    i
  );
}
function su(e) {
  let t = new Map();
  for (let r of e) {
    let n = r.getKeys();
    for (let i of n) t.set(i, r);
  }
  return t;
}
function so(e, t) {
  return e.filter((r) => {
    var i, o;
    let n = t.get(r);
    return (o =
      (i = n == null ? void 0 : n.has) == null ? void 0 : i.call(n, r)) != null
      ? o
      : !0;
  });
}
d();
c();
p();
f();
m();
function Lt(e) {
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
function yr(e, t) {
  return {
    batch: e,
    transaction:
      (t == null ? void 0 : t.kind) === "batch"
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
var at = class {
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
    return (this.afterNextNewLineCallback = void 0), t == null || t(), this;
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
function ao(e) {
  return e.substring(0, 1).toLowerCase() + e.substring(1);
}
d();
c();
p();
f();
m();
function ut(e) {
  return (
    e instanceof Date || Object.prototype.toString.call(e) === "[object Date]"
  );
}
function wr(e) {
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
var lt = 9e15,
  _e = 1e9,
  mn = "0123456789abcdef",
  br =
    "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
  xr =
    "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
  dn = {
    precision: 20,
    rounding: 4,
    modulo: 1,
    toExpNeg: -7,
    toExpPos: 21,
    minE: -lt,
    maxE: lt,
    crypto: !1,
  },
  po,
  Pe,
  _ = !0,
  vr = "[DecimalError] ",
  Ne = vr + "Invalid argument: ",
  fo = vr + "Precision limit exceeded",
  mo = vr + "crypto unavailable",
  go = "[object Decimal]",
  re = Math.floor,
  H = Math.pow,
  au = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
  uu = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
  lu = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
  ho = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
  pe = 1e7,
  O = 7,
  cu = 9007199254740991,
  pu = br.length - 1,
  gn = xr.length - 1,
  C = { toStringTag: go };
C.absoluteValue = C.abs = function () {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), k(e);
};
C.ceil = function () {
  return k(new this.constructor(this), this.e + 1, 2);
};
C.clampedTo = C.clamp = function (e, t) {
  var r,
    n = this,
    i = n.constructor;
  if (((e = new i(e)), (t = new i(t)), !e.s || !t.s)) return new i(NaN);
  if (e.gt(t)) throw Error(Ne + t);
  return (r = n.cmp(e)), r < 0 ? e : n.cmp(t) > 0 ? t : new i(n);
};
C.comparedTo = C.cmp = function (e) {
  var t,
    r,
    n,
    i,
    o = this,
    s = o.d,
    a = (e = new o.constructor(e)).d,
    u = o.s,
    l = e.s;
  if (!s || !a)
    return !u || !l ? NaN : u !== l ? u : s === a ? 0 : !s ^ (u < 0) ? 1 : -1;
  if (!s[0] || !a[0]) return s[0] ? u : a[0] ? -l : 0;
  if (u !== l) return u;
  if (o.e !== e.e) return (o.e > e.e) ^ (u < 0) ? 1 : -1;
  for (n = s.length, i = a.length, t = 0, r = n < i ? n : i; t < r; ++t)
    if (s[t] !== a[t]) return (s[t] > a[t]) ^ (u < 0) ? 1 : -1;
  return n === i ? 0 : (n > i) ^ (u < 0) ? 1 : -1;
};
C.cosine = C.cos = function () {
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
        (r = fu(n, xo(n, r))),
        (n.precision = e),
        (n.rounding = t),
        k(Pe == 2 || Pe == 3 ? r.neg() : r, e, t, !0))
      : new n(1)
    : new n(NaN);
};
C.cubeRoot = C.cbrt = function () {
  var e,
    t,
    r,
    n,
    i,
    o,
    s,
    a,
    u,
    l,
    g = this,
    h = g.constructor;
  if (!g.isFinite() || g.isZero()) return new h(g);
  for (
    _ = !1,
      o = g.s * H(g.s * g, 1 / 3),
      !o || Math.abs(o) == 1 / 0
        ? ((r = Z(g.d)),
          (e = g.e),
          (o = (e - r.length + 1) % 3) && (r += o == 1 || o == -2 ? "0" : "00"),
          (o = H(r, 1 / 3)),
          (e = re((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2))),
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
      (u = a.times(a).times(a)),
      (l = u.plus(g)),
      (n = q(l.plus(g).times(a), l.plus(u), s + 2, 1)),
      Z(a.d).slice(0, s) === (r = Z(n.d)).slice(0, s))
    )
      if (((r = r.slice(s - 3, s + 1)), r == "9999" || (!i && r == "4999"))) {
        if (!i && (k(a, e + 1, 0), a.times(a).times(a).eq(g))) {
          n = a;
          break;
        }
        (s += 4), (i = 1);
      } else {
        (!+r || (!+r.slice(1) && r.charAt(0) == "5")) &&
          (k(n, e + 1, 1), (t = !n.times(n).times(n).eq(g)));
        break;
      }
  return (_ = !0), k(n, e, h.rounding, t);
};
C.decimalPlaces = C.dp = function () {
  var e,
    t = this.d,
    r = NaN;
  if (t) {
    if (((e = t.length - 1), (r = (e - re(this.e / O)) * O), (e = t[e]), e))
      for (; e % 10 == 0; e /= 10) r--;
    r < 0 && (r = 0);
  }
  return r;
};
C.dividedBy = C.div = function (e) {
  return q(this, new this.constructor(e));
};
C.dividedToIntegerBy = C.divToInt = function (e) {
  var t = this,
    r = t.constructor;
  return k(q(t, new r(e), 0, 1, 1), r.precision, r.rounding);
};
C.equals = C.eq = function (e) {
  return this.cmp(e) === 0;
};
C.floor = function () {
  return k(new this.constructor(this), this.e + 1, 3);
};
C.greaterThan = C.gt = function (e) {
  return this.cmp(e) > 0;
};
C.greaterThanOrEqualTo = C.gte = function (e) {
  var t = this.cmp(e);
  return t == 1 || t === 0;
};
C.hyperbolicCosine = C.cosh = function () {
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
      ? ((e = Math.ceil(i / 3)), (t = (1 / Cr(4, e)).toString()))
      : ((e = 16), (t = "2.3283064365386962890625e-10")),
    (o = ct(s, 1, o.times(t), new s(1), !0));
  for (var u, l = e, g = new s(8); l--; )
    (u = o.times(o)), (o = a.minus(u.times(g.minus(u.times(g)))));
  return k(o, (s.precision = r), (s.rounding = n), !0);
};
C.hyperbolicSine = C.sinh = function () {
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
    i = ct(o, 2, i, i, !0);
  else {
    (e = 1.4 * Math.sqrt(n)),
      (e = e > 16 ? 16 : e | 0),
      (i = i.times(1 / Cr(5, e))),
      (i = ct(o, 2, i, i, !0));
    for (var s, a = new o(5), u = new o(16), l = new o(20); e--; )
      (s = i.times(i)), (i = i.times(a.plus(s.times(u.times(s).plus(l)))));
  }
  return (o.precision = t), (o.rounding = r), k(i, t, r, !0);
};
C.hyperbolicTangent = C.tanh = function () {
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
        q(r.sinh(), r.cosh(), (n.precision = e), (n.rounding = t)))
    : new n(r.s);
};
C.inverseCosine = C.acos = function () {
  var e,
    t = this,
    r = t.constructor,
    n = t.abs().cmp(1),
    i = r.precision,
    o = r.rounding;
  return n !== -1
    ? n === 0
      ? t.isNeg()
        ? ce(r, i, o)
        : new r(0)
      : new r(NaN)
    : t.isZero()
      ? ce(r, i + 4, o).times(0.5)
      : ((r.precision = i + 6),
        (r.rounding = 1),
        (t = t.asin()),
        (e = ce(r, i + 4, o).times(0.5)),
        (r.precision = i),
        (r.rounding = o),
        e.minus(t));
};
C.inverseHyperbolicCosine = C.acosh = function () {
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
        (_ = !1),
        (r = r.times(r).minus(1).sqrt().plus(r)),
        (_ = !0),
        (n.precision = e),
        (n.rounding = t),
        r.ln())
      : new n(r);
};
C.inverseHyperbolicSine = C.asinh = function () {
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
      (_ = !1),
      (r = r.times(r).plus(1).sqrt().plus(r)),
      (_ = !0),
      (n.precision = e),
      (n.rounding = t),
      r.ln());
};
C.inverseHyperbolicTangent = C.atanh = function () {
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
          ? k(new o(i), e, t, !0)
          : ((o.precision = r = n - i.e),
            (i = q(i.plus(1), new o(1).minus(i), r + e, 1)),
            (o.precision = e + 4),
            (o.rounding = 1),
            (i = i.ln()),
            (o.precision = e),
            (o.rounding = t),
            i.times(0.5)))
    : new o(NaN);
};
C.inverseSine = C.asin = function () {
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
          ? ((e = ce(o, r + 4, n).times(0.5)), (e.s = i.s), e)
          : new o(NaN)
        : ((o.precision = r + 6),
          (o.rounding = 1),
          (i = i.div(new o(1).minus(i.times(i)).sqrt().plus(1)).atan()),
          (o.precision = r),
          (o.rounding = n),
          i.times(2)));
};
C.inverseTangent = C.atan = function () {
  var e,
    t,
    r,
    n,
    i,
    o,
    s,
    a,
    u,
    l = this,
    g = l.constructor,
    h = g.precision,
    v = g.rounding;
  if (l.isFinite()) {
    if (l.isZero()) return new g(l);
    if (l.abs().eq(1) && h + 4 <= gn)
      return (s = ce(g, h + 4, v).times(0.25)), (s.s = l.s), s;
  } else {
    if (!l.s) return new g(NaN);
    if (h + 4 <= gn) return (s = ce(g, h + 4, v).times(0.5)), (s.s = l.s), s;
  }
  for (
    g.precision = a = h + 10,
      g.rounding = 1,
      r = Math.min(28, (a / O + 2) | 0),
      e = r;
    e;
    --e
  )
    l = l.div(l.times(l).plus(1).sqrt().plus(1));
  for (
    _ = !1, t = Math.ceil(a / O), n = 1, u = l.times(l), s = new g(l), i = l;
    e !== -1;

  )
    if (
      ((i = i.times(u)),
      (o = s.minus(i.div((n += 2)))),
      (i = i.times(u)),
      (s = o.plus(i.div((n += 2)))),
      s.d[t] !== void 0)
    )
      for (e = t; s.d[e] === o.d[e] && e--; );
  return (
    r && (s = s.times(2 << (r - 1))),
    (_ = !0),
    k(s, (g.precision = h), (g.rounding = v), !0)
  );
};
C.isFinite = function () {
  return !!this.d;
};
C.isInteger = C.isInt = function () {
  return !!this.d && re(this.e / O) > this.d.length - 2;
};
C.isNaN = function () {
  return !this.s;
};
C.isNegative = C.isNeg = function () {
  return this.s < 0;
};
C.isPositive = C.isPos = function () {
  return this.s > 0;
};
C.isZero = function () {
  return !!this.d && this.d[0] === 0;
};
C.lessThan = C.lt = function (e) {
  return this.cmp(e) < 0;
};
C.lessThanOrEqualTo = C.lte = function (e) {
  return this.cmp(e) < 1;
};
C.logarithm = C.log = function (e) {
  var t,
    r,
    n,
    i,
    o,
    s,
    a,
    u,
    l = this,
    g = l.constructor,
    h = g.precision,
    v = g.rounding,
    S = 5;
  if (e == null) (e = new g(10)), (t = !0);
  else {
    if (((e = new g(e)), (r = e.d), e.s < 0 || !r || !r[0] || e.eq(1)))
      return new g(NaN);
    t = e.eq(10);
  }
  if (((r = l.d), l.s < 0 || !r || !r[0] || l.eq(1)))
    return new g(r && !r[0] ? -1 / 0 : l.s != 1 ? NaN : r ? 0 : 1 / 0);
  if (t)
    if (r.length > 1) o = !0;
    else {
      for (i = r[0]; i % 10 === 0; ) i /= 10;
      o = i !== 1;
    }
  if (
    ((_ = !1),
    (a = h + S),
    (s = Oe(l, a)),
    (n = t ? Pr(g, a + 10) : Oe(e, a)),
    (u = q(s, n, a, 1)),
    Ft(u.d, (i = h), v))
  )
    do
      if (
        ((a += 10),
        (s = Oe(l, a)),
        (n = t ? Pr(g, a + 10) : Oe(e, a)),
        (u = q(s, n, a, 1)),
        !o)
      ) {
        +Z(u.d).slice(i + 1, i + 15) + 1 == 1e14 && (u = k(u, h + 1, 0));
        break;
      }
    while (Ft(u.d, (i += 10), v));
  return (_ = !0), k(u, h, v);
};
C.minus = C.sub = function (e) {
  var t,
    r,
    n,
    i,
    o,
    s,
    a,
    u,
    l,
    g,
    h,
    v,
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
    ((l = S.d), (v = e.d), (a = A.precision), (u = A.rounding), !l[0] || !v[0])
  ) {
    if (v[0]) e.s = -e.s;
    else if (l[0]) e = new A(S);
    else return new A(u === 3 ? -0 : 0);
    return _ ? k(e, a, u) : e;
  }
  if (((r = re(e.e / O)), (g = re(S.e / O)), (l = l.slice()), (o = g - r), o)) {
    for (
      h = o < 0,
        h
          ? ((t = l), (o = -o), (s = v.length))
          : ((t = v), (r = g), (s = l.length)),
        n = Math.max(Math.ceil(a / O), s) + 2,
        o > n && ((o = n), (t.length = 1)),
        t.reverse(),
        n = o;
      n--;

    )
      t.push(0);
    t.reverse();
  } else {
    for (n = l.length, s = v.length, h = n < s, h && (s = n), n = 0; n < s; n++)
      if (l[n] != v[n]) {
        h = l[n] < v[n];
        break;
      }
    o = 0;
  }
  for (
    h && ((t = l), (l = v), (v = t), (e.s = -e.s)),
      s = l.length,
      n = v.length - s;
    n > 0;
    --n
  )
    l[s++] = 0;
  for (n = v.length; n > o; ) {
    if (l[--n] < v[n]) {
      for (i = n; i && l[--i] === 0; ) l[i] = pe - 1;
      --l[i], (l[n] += pe);
    }
    l[n] -= v[n];
  }
  for (; l[--s] === 0; ) l.pop();
  for (; l[0] === 0; l.shift()) --r;
  return l[0]
    ? ((e.d = l), (e.e = Tr(l, r)), _ ? k(e, a, u) : e)
    : new A(u === 3 ? -0 : 0);
};
C.modulo = C.mod = function (e) {
  var t,
    r = this,
    n = r.constructor;
  return (
    (e = new n(e)),
    !r.d || !e.s || (e.d && !e.d[0])
      ? new n(NaN)
      : !e.d || (r.d && !r.d[0])
        ? k(new n(r), n.precision, n.rounding)
        : ((_ = !1),
          n.modulo == 9
            ? ((t = q(r, e.abs(), 0, 3, 1)), (t.s *= e.s))
            : (t = q(r, e, 0, n.modulo, 1)),
          (t = t.times(e)),
          (_ = !0),
          r.minus(t))
  );
};
C.naturalExponential = C.exp = function () {
  return hn(this);
};
C.naturalLogarithm = C.ln = function () {
  return Oe(this);
};
C.negated = C.neg = function () {
  var e = new this.constructor(this);
  return (e.s = -e.s), k(e);
};
C.plus = C.add = function (e) {
  var t,
    r,
    n,
    i,
    o,
    s,
    a,
    u,
    l,
    g,
    h = this,
    v = h.constructor;
  if (((e = new v(e)), !h.d || !e.d))
    return (
      !h.s || !e.s
        ? (e = new v(NaN))
        : h.d || (e = new v(e.d || h.s === e.s ? h : NaN)),
      e
    );
  if (h.s != e.s) return (e.s = -e.s), h.minus(e);
  if (
    ((l = h.d), (g = e.d), (a = v.precision), (u = v.rounding), !l[0] || !g[0])
  )
    return g[0] || (e = new v(h)), _ ? k(e, a, u) : e;
  if (((o = re(h.e / O)), (n = re(e.e / O)), (l = l.slice()), (i = o - n), i)) {
    for (
      i < 0
        ? ((r = l), (i = -i), (s = g.length))
        : ((r = g), (n = o), (s = l.length)),
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
    s = l.length,
      i = g.length,
      s - i < 0 && ((i = s), (r = g), (g = l), (l = r)),
      t = 0;
    i;

  )
    (t = ((l[--i] = l[i] + g[i] + t) / pe) | 0), (l[i] %= pe);
  for (t && (l.unshift(t), ++n), s = l.length; l[--s] == 0; ) l.pop();
  return (e.d = l), (e.e = Tr(l, n)), _ ? k(e, a, u) : e;
};
C.precision = C.sd = function (e) {
  var t,
    r = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Ne + e);
  return (
    r.d ? ((t = yo(r.d)), e && r.e + 1 > t && (t = r.e + 1)) : (t = NaN), t
  );
};
C.round = function () {
  var e = this,
    t = e.constructor;
  return k(new t(e), e.e + 1, t.rounding);
};
C.sine = C.sin = function () {
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
        (r = du(n, xo(n, r))),
        (n.precision = e),
        (n.rounding = t),
        k(Pe > 2 ? r.neg() : r, e, t, !0))
    : new n(NaN);
};
C.squareRoot = C.sqrt = function () {
  var e,
    t,
    r,
    n,
    i,
    o,
    s = this,
    a = s.d,
    u = s.e,
    l = s.s,
    g = s.constructor;
  if (l !== 1 || !a || !a[0])
    return new g(!l || (l < 0 && (!a || a[0])) ? NaN : a ? s : 1 / 0);
  for (
    _ = !1,
      l = Math.sqrt(+s),
      l == 0 || l == 1 / 0
        ? ((t = Z(a)),
          (t.length + u) % 2 == 0 && (t += "0"),
          (l = Math.sqrt(t)),
          (u = re((u + 1) / 2) - (u < 0 || u % 2)),
          l == 1 / 0
            ? (t = "5e" + u)
            : ((t = l.toExponential()),
              (t = t.slice(0, t.indexOf("e") + 1) + u)),
          (n = new g(t)))
        : (n = new g(l.toString())),
      r = (u = g.precision) + 3;
    ;

  )
    if (
      ((o = n),
      (n = o.plus(q(s, o, r + 2, 1)).times(0.5)),
      Z(o.d).slice(0, r) === (t = Z(n.d)).slice(0, r))
    )
      if (((t = t.slice(r - 3, r + 1)), t == "9999" || (!i && t == "4999"))) {
        if (!i && (k(o, u + 1, 0), o.times(o).eq(s))) {
          n = o;
          break;
        }
        (r += 4), (i = 1);
      } else {
        (!+t || (!+t.slice(1) && t.charAt(0) == "5")) &&
          (k(n, u + 1, 1), (e = !n.times(n).eq(s)));
        break;
      }
  return (_ = !0), k(n, u, g.rounding, e);
};
C.tangent = C.tan = function () {
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
        (r = q(r, new n(1).minus(r.times(r)).sqrt(), e + 10, 0)),
        (n.precision = e),
        (n.rounding = t),
        k(Pe == 2 || Pe == 4 ? r.neg() : r, e, t, !0))
    : new n(NaN);
};
C.times = C.mul = function (e) {
  var t,
    r,
    n,
    i,
    o,
    s,
    a,
    u,
    l,
    g = this,
    h = g.constructor,
    v = g.d,
    S = (e = new h(e)).d;
  if (((e.s *= g.s), !v || !v[0] || !S || !S[0]))
    return new h(
      !e.s || (v && !v[0] && !S) || (S && !S[0] && !v)
        ? NaN
        : !v || !S
          ? e.s / 0
          : e.s * 0,
    );
  for (
    r = re(g.e / O) + re(e.e / O),
      u = v.length,
      l = S.length,
      u < l && ((o = v), (v = S), (S = o), (s = u), (u = l), (l = s)),
      o = [],
      s = u + l,
      n = s;
    n--;

  )
    o.push(0);
  for (n = l; --n >= 0; ) {
    for (t = 0, i = u + n; i > n; )
      (a = o[i] + S[n] * v[i - n - 1] + t),
        (o[i--] = a % pe | 0),
        (t = (a / pe) | 0);
    o[i] = (o[i] + t) % pe | 0;
  }
  for (; !o[--s]; ) o.pop();
  return (
    t ? ++r : o.shift(),
    (e.d = o),
    (e.e = Tr(o, r)),
    _ ? k(e, h.precision, h.rounding) : e
  );
};
C.toBinary = function (e, t) {
  return wn(this, 2, e, t);
};
C.toDecimalPlaces = C.toDP = function (e, t) {
  var r = this,
    n = r.constructor;
  return (
    (r = new n(r)),
    e === void 0
      ? r
      : (se(e, 0, _e),
        t === void 0 ? (t = n.rounding) : se(t, 0, 8),
        k(r, e + r.e + 1, t))
  );
};
C.toExponential = function (e, t) {
  var r,
    n = this,
    i = n.constructor;
  return (
    e === void 0
      ? (r = he(n, !0))
      : (se(e, 0, _e),
        t === void 0 ? (t = i.rounding) : se(t, 0, 8),
        (n = k(new i(n), e + 1, t)),
        (r = he(n, !0, e + 1))),
    n.isNeg() && !n.isZero() ? "-" + r : r
  );
};
C.toFixed = function (e, t) {
  var r,
    n,
    i = this,
    o = i.constructor;
  return (
    e === void 0
      ? (r = he(i))
      : (se(e, 0, _e),
        t === void 0 ? (t = o.rounding) : se(t, 0, 8),
        (n = k(new o(i), e + i.e + 1, t)),
        (r = he(n, !1, e + n.e + 1))),
    i.isNeg() && !i.isZero() ? "-" + r : r
  );
};
C.toFraction = function (e) {
  var t,
    r,
    n,
    i,
    o,
    s,
    a,
    u,
    l,
    g,
    h,
    v,
    S = this,
    A = S.d,
    R = S.constructor;
  if (!A) return new R(S);
  if (
    ((l = r = new R(1)),
    (n = u = new R(0)),
    (t = new R(n)),
    (o = t.e = yo(A) - S.e - 1),
    (s = o % O),
    (t.d[0] = H(10, s < 0 ? O + s : s)),
    e == null)
  )
    e = o > 0 ? t : l;
  else {
    if (((a = new R(e)), !a.isInt() || a.lt(l))) throw Error(Ne + a);
    e = a.gt(t) ? (o > 0 ? t : l) : a;
  }
  for (
    _ = !1,
      a = new R(Z(A)),
      g = R.precision,
      R.precision = o = A.length * O * 2;
    (h = q(a, t, 0, 1, 1)), (i = r.plus(h.times(n))), i.cmp(e) != 1;

  )
    (r = n),
      (n = i),
      (i = l),
      (l = u.plus(h.times(i))),
      (u = i),
      (i = t),
      (t = a.minus(h.times(i))),
      (a = i);
  return (
    (i = q(e.minus(r), n, 0, 1, 1)),
    (u = u.plus(i.times(l))),
    (r = r.plus(i.times(n))),
    (u.s = l.s = S.s),
    (v =
      q(l, n, o, 1)
        .minus(S)
        .abs()
        .cmp(q(u, r, o, 1).minus(S).abs()) < 1
        ? [l, n]
        : [u, r]),
    (R.precision = g),
    (_ = !0),
    v
  );
};
C.toHexadecimal = C.toHex = function (e, t) {
  return wn(this, 16, e, t);
};
C.toNearest = function (e, t) {
  var r = this,
    n = r.constructor;
  if (((r = new n(r)), e == null)) {
    if (!r.d) return r;
    (e = new n(1)), (t = n.rounding);
  } else {
    if (((e = new n(e)), t === void 0 ? (t = n.rounding) : se(t, 0, 8), !r.d))
      return e.s ? r : e;
    if (!e.d) return e.s && (e.s = r.s), e;
  }
  return (
    e.d[0]
      ? ((_ = !1), (r = q(r, e, 0, t, 1).times(e)), (_ = !0), k(r))
      : ((e.s = r.s), (r = e)),
    r
  );
};
C.toNumber = function () {
  return +this;
};
C.toOctal = function (e, t) {
  return wn(this, 8, e, t);
};
C.toPower = C.pow = function (e) {
  var t,
    r,
    n,
    i,
    o,
    s,
    a = this,
    u = a.constructor,
    l = +(e = new u(e));
  if (!a.d || !e.d || !a.d[0] || !e.d[0]) return new u(H(+a, l));
  if (((a = new u(a)), a.eq(1))) return a;
  if (((n = u.precision), (o = u.rounding), e.eq(1))) return k(a, n, o);
  if (((t = re(e.e / O)), t >= e.d.length - 1 && (r = l < 0 ? -l : l) <= cu))
    return (i = wo(u, a, r, n)), e.s < 0 ? new u(1).div(i) : k(i, n, o);
  if (((s = a.s), s < 0)) {
    if (t < e.d.length - 1) return new u(NaN);
    if ((e.d[t] & 1 || (s = 1), a.e == 0 && a.d[0] == 1 && a.d.length == 1))
      return (a.s = s), a;
  }
  return (
    (r = H(+a, l)),
    (t =
      r == 0 || !isFinite(r)
        ? re(l * (Math.log("0." + Z(a.d)) / Math.LN10 + a.e + 1))
        : new u(r + "").e),
    t > u.maxE + 1 || t < u.minE - 1
      ? new u(t > 0 ? s / 0 : 0)
      : ((_ = !1),
        (u.rounding = a.s = 1),
        (r = Math.min(12, (t + "").length)),
        (i = hn(e.times(Oe(a, n + r)), n)),
        i.d &&
          ((i = k(i, n + 5, 1)),
          Ft(i.d, n, o) &&
            ((t = n + 10),
            (i = k(hn(e.times(Oe(a, t + r)), t), t + 5, 1)),
            +Z(i.d).slice(n + 1, n + 15) + 1 == 1e14 && (i = k(i, n + 1, 0)))),
        (i.s = s),
        (_ = !0),
        (u.rounding = o),
        k(i, n, o))
  );
};
C.toPrecision = function (e, t) {
  var r,
    n = this,
    i = n.constructor;
  return (
    e === void 0
      ? (r = he(n, n.e <= i.toExpNeg || n.e >= i.toExpPos))
      : (se(e, 1, _e),
        t === void 0 ? (t = i.rounding) : se(t, 0, 8),
        (n = k(new i(n), e, t)),
        (r = he(n, e <= n.e || n.e <= i.toExpNeg, e))),
    n.isNeg() && !n.isZero() ? "-" + r : r
  );
};
C.toSignificantDigits = C.toSD = function (e, t) {
  var r = this,
    n = r.constructor;
  return (
    e === void 0
      ? ((e = n.precision), (t = n.rounding))
      : (se(e, 1, _e), t === void 0 ? (t = n.rounding) : se(t, 0, 8)),
    k(new n(r), e, t)
  );
};
C.toString = function () {
  var e = this,
    t = e.constructor,
    r = he(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + r : r;
};
C.truncated = C.trunc = function () {
  return k(new this.constructor(this), this.e + 1, 1);
};
C.valueOf = C.toJSON = function () {
  var e = this,
    t = e.constructor,
    r = he(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
  return e.isNeg() ? "-" + r : r;
};
function Z(e) {
  var t,
    r,
    n,
    i = e.length - 1,
    o = "",
    s = e[0];
  if (i > 0) {
    for (o += s, t = 1; t < i; t++)
      (n = e[t] + ""), (r = O - n.length), r && (o += Me(r)), (o += n);
    (s = e[t]), (n = s + ""), (r = O - n.length), r && (o += Me(r));
  } else if (s === 0) return "0";
  for (; s % 10 === 0; ) s /= 10;
  return o + s;
}
function se(e, t, r) {
  if (e !== ~~e || e < t || e > r) throw Error(Ne + e);
}
function Ft(e, t, r, n) {
  var i, o, s, a;
  for (o = e[0]; o >= 10; o /= 10) --t;
  return (
    --t < 0 ? ((t += O), (i = 0)) : ((i = Math.ceil((t + 1) / O)), (t %= O)),
    (o = H(10, O - t)),
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
              ((e[i + 1] / o / 100) | 0) == H(10, t - 2) - 1) ||
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
            ((e[i + 1] / o / 1e3) | 0) == H(10, t - 3) - 1),
    s
  );
}
function Er(e, t, r) {
  for (var n, i = [0], o, s = 0, a = e.length; s < a; ) {
    for (o = i.length; o--; ) i[o] *= t;
    for (i[0] += mn.indexOf(e.charAt(s++)), n = 0; n < i.length; n++)
      i[n] > r - 1 &&
        (i[n + 1] === void 0 && (i[n + 1] = 0),
        (i[n + 1] += (i[n] / r) | 0),
        (i[n] %= r));
  }
  return i.reverse();
}
function fu(e, t) {
  var r, n, i;
  if (t.isZero()) return t;
  (n = t.d.length),
    n < 32
      ? ((r = Math.ceil(n / 3)), (i = (1 / Cr(4, r)).toString()))
      : ((r = 16), (i = "2.3283064365386962890625e-10")),
    (e.precision += r),
    (t = ct(e, 1, t.times(i), new e(1)));
  for (var o = r; o--; ) {
    var s = t.times(t);
    t = s.times(s).minus(s).times(8).plus(1);
  }
  return (e.precision -= r), t;
}
var q = (function () {
  function e(n, i, o) {
    var s,
      a = 0,
      u = n.length;
    for (n = n.slice(); u--; )
      (s = n[u] * i + a), (n[u] = s % o | 0), (a = (s / o) | 0);
    return a && n.unshift(a), n;
  }
  function t(n, i, o, s) {
    var a, u;
    if (o != s) u = o > s ? 1 : -1;
    else
      for (a = u = 0; a < o; a++)
        if (n[a] != i[a]) {
          u = n[a] > i[a] ? 1 : -1;
          break;
        }
    return u;
  }
  function r(n, i, o, s) {
    for (var a = 0; o--; )
      (n[o] -= a), (a = n[o] < i[o] ? 1 : 0), (n[o] = a * s + n[o] - i[o]);
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function (n, i, o, s, a, u) {
    var l,
      g,
      h,
      v,
      S,
      A,
      R,
      D,
      M,
      B,
      I,
      L,
      X,
      F,
      Ze,
      $e,
      fe,
      qe,
      Q,
      Ae,
      Ue = n.constructor,
      Xe = n.s == i.s ? 1 : -1,
      ee = n.d,
      U = i.d;
    if (!ee || !ee[0] || !U || !U[0])
      return new Ue(
        !n.s || !i.s || (ee ? U && ee[0] == U[0] : !U)
          ? NaN
          : (ee && ee[0] == 0) || !U
            ? Xe * 0
            : Xe / 0,
      );
    for (
      u
        ? ((S = 1), (g = n.e - i.e))
        : ((u = pe), (S = O), (g = re(n.e / S) - re(i.e / S))),
        Q = U.length,
        fe = ee.length,
        M = new Ue(Xe),
        B = M.d = [],
        h = 0;
      U[h] == (ee[h] || 0);
      h++
    );
    if (
      (U[h] > (ee[h] || 0) && g--,
      o == null
        ? ((F = o = Ue.precision), (s = Ue.rounding))
        : a
          ? (F = o + (n.e - i.e) + 1)
          : (F = o),
      F < 0)
    )
      B.push(1), (A = !0);
    else {
      if (((F = (F / S + 2) | 0), (h = 0), Q == 1)) {
        for (v = 0, U = U[0], F++; (h < fe || v) && F--; h++)
          (Ze = v * u + (ee[h] || 0)), (B[h] = (Ze / U) | 0), (v = Ze % U | 0);
        A = v || h < fe;
      } else {
        for (
          v = (u / (U[0] + 1)) | 0,
            v > 1 &&
              ((U = e(U, v, u)),
              (ee = e(ee, v, u)),
              (Q = U.length),
              (fe = ee.length)),
            $e = Q,
            I = ee.slice(0, Q),
            L = I.length;
          L < Q;

        )
          I[L++] = 0;
        (Ae = U.slice()), Ae.unshift(0), (qe = U[0]), U[1] >= u / 2 && ++qe;
        do
          (v = 0),
            (l = t(U, I, Q, L)),
            l < 0
              ? ((X = I[0]),
                Q != L && (X = X * u + (I[1] || 0)),
                (v = (X / qe) | 0),
                v > 1
                  ? (v >= u && (v = u - 1),
                    (R = e(U, v, u)),
                    (D = R.length),
                    (L = I.length),
                    (l = t(R, I, D, L)),
                    l == 1 && (v--, r(R, Q < D ? Ae : U, D, u)))
                  : (v == 0 && (l = v = 1), (R = U.slice())),
                (D = R.length),
                D < L && R.unshift(0),
                r(I, R, L, u),
                l == -1 &&
                  ((L = I.length),
                  (l = t(U, I, Q, L)),
                  l < 1 && (v++, r(I, Q < L ? Ae : U, L, u))),
                (L = I.length))
              : l === 0 && (v++, (I = [0])),
            (B[h++] = v),
            l && I[0] ? (I[L++] = ee[$e] || 0) : ((I = [ee[$e]]), (L = 1));
        while (($e++ < fe || I[0] !== void 0) && F--);
        A = I[0] !== void 0;
      }
      B[0] || B.shift();
    }
    if (S == 1) (M.e = g), (po = A);
    else {
      for (h = 1, v = B[0]; v >= 10; v /= 10) h++;
      (M.e = h + g * S - 1), k(M, a ? o + M.e + 1 : o, s, A);
    }
    return M;
  };
})();
function k(e, t, r, n) {
  var i,
    o,
    s,
    a,
    u,
    l,
    g,
    h,
    v,
    S = e.constructor;
  e: if (t != null) {
    if (((h = e.d), !h)) return e;
    for (i = 1, a = h[0]; a >= 10; a /= 10) i++;
    if (((o = t - i), o < 0))
      (o += O),
        (s = t),
        (g = h[(v = 0)]),
        (u = (g / H(10, i - s - 1)) % 10 | 0);
    else if (((v = Math.ceil((o + 1) / O)), (a = h.length), v >= a))
      if (n) {
        for (; a++ <= v; ) h.push(0);
        (g = u = 0), (i = 1), (o %= O), (s = o - O + 1);
      } else break e;
    else {
      for (g = a = h[v], i = 1; a >= 10; a /= 10) i++;
      (o %= O),
        (s = o - O + i),
        (u = s < 0 ? 0 : (g / H(10, i - s - 1)) % 10 | 0);
    }
    if (
      ((n =
        n ||
        t < 0 ||
        h[v + 1] !== void 0 ||
        (s < 0 ? g : g % H(10, i - s - 1))),
      (l =
        r < 4
          ? (u || n) && (r == 0 || r == (e.s < 0 ? 3 : 2))
          : u > 5 ||
            (u == 5 &&
              (r == 4 ||
                n ||
                (r == 6 &&
                  (o > 0 ? (s > 0 ? g / H(10, i - s) : 0) : h[v - 1]) % 10 &
                    1) ||
                r == (e.s < 0 ? 8 : 7)))),
      t < 1 || !h[0])
    )
      return (
        (h.length = 0),
        l
          ? ((t -= e.e + 1), (h[0] = H(10, (O - (t % O)) % O)), (e.e = -t || 0))
          : (h[0] = e.e = 0),
        e
      );
    if (
      (o == 0
        ? ((h.length = v), (a = 1), v--)
        : ((h.length = v + 1),
          (a = H(10, O - o)),
          (h[v] = s > 0 ? ((g / H(10, i - s)) % H(10, s) | 0) * a : 0)),
      l)
    )
      for (;;)
        if (v == 0) {
          for (o = 1, s = h[0]; s >= 10; s /= 10) o++;
          for (s = h[0] += a, a = 1; s >= 10; s /= 10) a++;
          o != a && (e.e++, h[0] == pe && (h[0] = 1));
          break;
        } else {
          if (((h[v] += a), h[v] != pe)) break;
          (h[v--] = 0), (a = 1);
        }
    for (o = h.length; h[--o] === 0; ) h.pop();
  }
  return (
    _ &&
      (e.e > S.maxE
        ? ((e.d = null), (e.e = NaN))
        : e.e < S.minE && ((e.e = 0), (e.d = [0]))),
    e
  );
}
function he(e, t, r) {
  if (!e.isFinite()) return bo(e);
  var n,
    i = e.e,
    o = Z(e.d),
    s = o.length;
  return (
    t
      ? (r && (n = r - s) > 0
          ? (o = o.charAt(0) + "." + o.slice(1) + Me(n))
          : s > 1 && (o = o.charAt(0) + "." + o.slice(1)),
        (o = o + (e.e < 0 ? "e" : "e+") + e.e))
      : i < 0
        ? ((o = "0." + Me(-i - 1) + o), r && (n = r - s) > 0 && (o += Me(n)))
        : i >= s
          ? ((o += Me(i + 1 - s)),
            r && (n = r - i - 1) > 0 && (o = o + "." + Me(n)))
          : ((n = i + 1) < s && (o = o.slice(0, n) + "." + o.slice(n)),
            r && (n = r - s) > 0 && (i + 1 === s && (o += "."), (o += Me(n)))),
    o
  );
}
function Tr(e, t) {
  var r = e[0];
  for (t *= O; r >= 10; r /= 10) t++;
  return t;
}
function Pr(e, t, r) {
  if (t > pu) throw ((_ = !0), r && (e.precision = r), Error(fo));
  return k(new e(br), t, 1, !0);
}
function ce(e, t, r) {
  if (t > gn) throw Error(fo);
  return k(new e(xr), t, r, !0);
}
function yo(e) {
  var t = e.length - 1,
    r = t * O + 1;
  if (((t = e[t]), t)) {
    for (; t % 10 == 0; t /= 10) r--;
    for (t = e[0]; t >= 10; t /= 10) r++;
  }
  return r;
}
function Me(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function wo(e, t, r, n) {
  var i,
    o = new e(1),
    s = Math.ceil(n / O + 4);
  for (_ = !1; ; ) {
    if (
      (r % 2 && ((o = o.times(t)), lo(o.d, s) && (i = !0)),
      (r = re(r / 2)),
      r === 0)
    ) {
      (r = o.d.length - 1), i && o.d[r] === 0 && ++o.d[r];
      break;
    }
    (t = t.times(t)), lo(t.d, s);
  }
  return (_ = !0), o;
}
function uo(e) {
  return e.d[e.d.length - 1] & 1;
}
function Eo(e, t, r) {
  for (var n, i = new e(t[0]), o = 0; ++o < t.length; )
    if (((n = new e(t[o])), n.s)) i[r](n) && (i = n);
    else {
      i = n;
      break;
    }
  return i;
}
function hn(e, t) {
  var r,
    n,
    i,
    o,
    s,
    a,
    u,
    l = 0,
    g = 0,
    h = 0,
    v = e.constructor,
    S = v.rounding,
    A = v.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new v(
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
    t == null ? ((_ = !1), (u = A)) : (u = t), a = new v(0.03125);
    e.e > -2;

  )
    (e = e.times(a)), (h += 5);
  for (
    n = ((Math.log(H(2, h)) / Math.LN10) * 2 + 5) | 0,
      u += n,
      r = o = s = new v(1),
      v.precision = u;
    ;

  ) {
    if (
      ((o = k(o.times(e), u, 1)),
      (r = r.times(++g)),
      (a = s.plus(q(o, r, u, 1))),
      Z(a.d).slice(0, u) === Z(s.d).slice(0, u))
    ) {
      for (i = h; i--; ) s = k(s.times(s), u, 1);
      if (t == null)
        if (l < 3 && Ft(s.d, u - n, S, l))
          (v.precision = u += 10), (r = o = a = new v(1)), (g = 0), l++;
        else return k(s, (v.precision = A), S, (_ = !0));
      else return (v.precision = A), s;
    }
    s = a;
  }
}
function Oe(e, t) {
  var r,
    n,
    i,
    o,
    s,
    a,
    u,
    l,
    g,
    h,
    v,
    S = 1,
    A = 10,
    R = e,
    D = R.d,
    M = R.constructor,
    B = M.rounding,
    I = M.precision;
  if (R.s < 0 || !D || !D[0] || (!R.e && D[0] == 1 && D.length == 1))
    return new M(D && !D[0] ? -1 / 0 : R.s != 1 ? NaN : D ? 0 : R);
  if (
    (t == null ? ((_ = !1), (g = I)) : (g = t),
    (M.precision = g += A),
    (r = Z(D)),
    (n = r.charAt(0)),
    Math.abs((o = R.e)) < 15e14)
  ) {
    for (; (n < 7 && n != 1) || (n == 1 && r.charAt(1) > 3); )
      (R = R.times(e)), (r = Z(R.d)), (n = r.charAt(0)), S++;
    (o = R.e),
      n > 1 ? ((R = new M("0." + r)), o++) : (R = new M(n + "." + r.slice(1)));
  } else
    return (
      (l = Pr(M, g + 2, I).times(o + "")),
      (R = Oe(new M(n + "." + r.slice(1)), g - A).plus(l)),
      (M.precision = I),
      t == null ? k(R, I, B, (_ = !0)) : R
    );
  for (
    h = R,
      u = s = R = q(R.minus(1), R.plus(1), g, 1),
      v = k(R.times(R), g, 1),
      i = 3;
    ;

  ) {
    if (
      ((s = k(s.times(v), g, 1)),
      (l = u.plus(q(s, new M(i), g, 1))),
      Z(l.d).slice(0, g) === Z(u.d).slice(0, g))
    )
      if (
        ((u = u.times(2)),
        o !== 0 && (u = u.plus(Pr(M, g + 2, I).times(o + ""))),
        (u = q(u, new M(S), g, 1)),
        t == null)
      )
        if (Ft(u.d, g - A, B, a))
          (M.precision = g += A),
            (l = s = R = q(h.minus(1), h.plus(1), g, 1)),
            (v = k(R.times(R), g, 1)),
            (i = a = 1);
        else return k(u, (M.precision = I), B, (_ = !0));
      else return (M.precision = I), u;
    (u = l), (i += 2);
  }
}
function bo(e) {
  return String((e.s * e.s) / 0);
}
function yn(e, t) {
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
      _ &&
        (e.e > e.constructor.maxE
          ? ((e.d = null), (e.e = NaN))
          : e.e < e.constructor.minE && ((e.e = 0), (e.d = [0])));
  } else (e.e = 0), (e.d = [0]);
  return e;
}
function mu(e, t) {
  var r, n, i, o, s, a, u, l, g;
  if (t.indexOf("_") > -1) {
    if (((t = t.replace(/(\d)_(?=\d)/g, "$1")), ho.test(t))) return yn(e, t);
  } else if (t === "Infinity" || t === "NaN")
    return +t || (e.s = NaN), (e.e = NaN), (e.d = null), e;
  if (uu.test(t)) (r = 16), (t = t.toLowerCase());
  else if (au.test(t)) r = 2;
  else if (lu.test(t)) r = 8;
  else throw Error(Ne + t);
  for (
    o = t.search(/p/i),
      o > 0
        ? ((u = +t.slice(o + 1)), (t = t.substring(2, o)))
        : (t = t.slice(2)),
      o = t.indexOf("."),
      s = o >= 0,
      n = e.constructor,
      s &&
        ((t = t.replace(".", "")),
        (a = t.length),
        (o = a - o),
        (i = wo(n, new n(r), o, o * 2))),
      l = Er(t, r, pe),
      g = l.length - 1,
      o = g;
    l[o] === 0;
    --o
  )
    l.pop();
  return o < 0
    ? new n(e.s * 0)
    : ((e.e = Tr(l, g)),
      (e.d = l),
      (_ = !1),
      s && (e = q(e, i, a * 4)),
      u && (e = e.times(Math.abs(u) < 54 ? H(2, u) : He.pow(2, u))),
      (_ = !0),
      e);
}
function du(e, t) {
  var r,
    n = t.d.length;
  if (n < 3) return t.isZero() ? t : ct(e, 2, t, t);
  (r = 1.4 * Math.sqrt(n)),
    (r = r > 16 ? 16 : r | 0),
    (t = t.times(1 / Cr(5, r))),
    (t = ct(e, 2, t, t));
  for (var i, o = new e(5), s = new e(16), a = new e(20); r--; )
    (i = t.times(t)), (t = t.times(o.plus(i.times(s.times(i).minus(a)))));
  return t;
}
function ct(e, t, r, n, i) {
  var o,
    s,
    a,
    u,
    l = 1,
    g = e.precision,
    h = Math.ceil(g / O);
  for (_ = !1, u = r.times(r), a = new e(n); ; ) {
    if (
      ((s = q(a.times(u), new e(t++ * t++), g, 1)),
      (a = i ? n.plus(s) : n.minus(s)),
      (n = q(s.times(u), new e(t++ * t++), g, 1)),
      (s = a.plus(n)),
      s.d[h] !== void 0)
    ) {
      for (o = h; s.d[o] === a.d[o] && o--; );
      if (o == -1) break;
    }
    (o = a), (a = n), (n = s), (s = o), l++;
  }
  return (_ = !0), (s.d.length = h + 1), s;
}
function Cr(e, t) {
  for (var r = e; --t; ) r *= e;
  return r;
}
function xo(e, t) {
  var r,
    n = t.s < 0,
    i = ce(e, e.precision, 1),
    o = i.times(0.5);
  if (((t = t.abs()), t.lte(o))) return (Pe = n ? 4 : 1), t;
  if (((r = t.divToInt(i)), r.isZero())) Pe = n ? 3 : 2;
  else {
    if (((t = t.minus(r.times(i))), t.lte(o)))
      return (Pe = uo(r) ? (n ? 2 : 3) : n ? 4 : 1), t;
    Pe = uo(r) ? (n ? 1 : 4) : n ? 3 : 2;
  }
  return t.minus(i).abs();
}
function wn(e, t, r, n) {
  var i,
    o,
    s,
    a,
    u,
    l,
    g,
    h,
    v,
    S = e.constructor,
    A = r !== void 0;
  if (
    (A
      ? (se(r, 1, _e), n === void 0 ? (n = S.rounding) : se(n, 0, 8))
      : ((r = S.precision), (n = S.rounding)),
    !e.isFinite())
  )
    g = bo(e);
  else {
    for (
      g = he(e),
        s = g.indexOf("."),
        A
          ? ((i = 2), t == 16 ? (r = r * 4 - 3) : t == 8 && (r = r * 3 - 2))
          : (i = t),
        s >= 0 &&
          ((g = g.replace(".", "")),
          (v = new S(1)),
          (v.e = g.length - s),
          (v.d = Er(he(v), 10, i)),
          (v.e = v.d.length)),
        h = Er(g, 10, i),
        o = u = h.length;
      h[--u] == 0;

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
            (e = q(e, v, r, n, 0, i)),
            (h = e.d),
            (o = e.e),
            (l = po)),
        (s = h[r]),
        (a = i / 2),
        (l = l || h[r + 1] !== void 0),
        (l =
          n < 4
            ? (s !== void 0 || l) && (n === 0 || n === (e.s < 0 ? 3 : 2))
            : s > a ||
              (s === a &&
                (n === 4 ||
                  l ||
                  (n === 6 && h[r - 1] & 1) ||
                  n === (e.s < 0 ? 8 : 7)))),
        (h.length = r),
        l)
      )
        for (; ++h[--r] > i - 1; ) (h[r] = 0), r || (++o, h.unshift(1));
      for (u = h.length; !h[u - 1]; --u);
      for (s = 0, g = ""; s < u; s++) g += mn.charAt(h[s]);
      if (A) {
        if (u > 1)
          if (t == 16 || t == 8) {
            for (s = t == 16 ? 4 : 3, --u; u % s; u++) g += "0";
            for (h = Er(g, i, t), u = h.length; !h[u - 1]; --u);
            for (s = 1, g = "1."; s < u; s++) g += mn.charAt(h[s]);
          } else g = g.charAt(0) + "." + g.slice(1);
        g = g + (o < 0 ? "p" : "p+") + o;
      } else if (o < 0) {
        for (; ++o; ) g = "0" + g;
        g = "0." + g;
      } else if (++o > u) for (o -= u; o--; ) g += "0";
      else o < u && (g = g.slice(0, o) + "." + g.slice(o));
    }
    g = (t == 16 ? "0x" : t == 2 ? "0b" : t == 8 ? "0o" : "") + g;
  }
  return e.s < 0 ? "-" + g : g;
}
function lo(e, t) {
  if (e.length > t) return (e.length = t), !0;
}
function gu(e) {
  return new this(e).abs();
}
function hu(e) {
  return new this(e).acos();
}
function yu(e) {
  return new this(e).acosh();
}
function wu(e, t) {
  return new this(e).plus(t);
}
function Eu(e) {
  return new this(e).asin();
}
function bu(e) {
  return new this(e).asinh();
}
function xu(e) {
  return new this(e).atan();
}
function Pu(e) {
  return new this(e).atanh();
}
function vu(e, t) {
  (e = new this(e)), (t = new this(t));
  var r,
    n = this.precision,
    i = this.rounding,
    o = n + 4;
  return (
    !e.s || !t.s
      ? (r = new this(NaN))
      : !e.d && !t.d
        ? ((r = ce(this, o, 1).times(t.s > 0 ? 0.25 : 0.75)), (r.s = e.s))
        : !t.d || e.isZero()
          ? ((r = t.s < 0 ? ce(this, n, i) : new this(0)), (r.s = e.s))
          : !e.d || t.isZero()
            ? ((r = ce(this, o, 1).times(0.5)), (r.s = e.s))
            : t.s < 0
              ? ((this.precision = o),
                (this.rounding = 1),
                (r = this.atan(q(e, t, o, 1))),
                (t = ce(this, o, 1)),
                (this.precision = n),
                (this.rounding = i),
                (r = e.s < 0 ? r.minus(t) : r.plus(t)))
              : (r = this.atan(q(e, t, o, 1))),
    r
  );
}
function Tu(e) {
  return new this(e).cbrt();
}
function Cu(e) {
  return k((e = new this(e)), e.e + 1, 2);
}
function Au(e, t, r) {
  return new this(e).clamp(t, r);
}
function Ru(e) {
  if (!e || typeof e != "object") throw Error(vr + "Object expected");
  var t,
    r,
    n,
    i = e.defaults === !0,
    o = [
      "precision",
      1,
      _e,
      "rounding",
      0,
      8,
      "toExpNeg",
      -lt,
      0,
      "toExpPos",
      0,
      lt,
      "maxE",
      0,
      lt,
      "minE",
      -lt,
      0,
      "modulo",
      0,
      9,
    ];
  for (t = 0; t < o.length; t += 3)
    if (((r = o[t]), i && (this[r] = dn[r]), (n = e[r]) !== void 0))
      if (re(n) === n && n >= o[t + 1] && n <= o[t + 2]) this[r] = n;
      else throw Error(Ne + r + ": " + n);
  if (((r = "crypto"), i && (this[r] = dn[r]), (n = e[r]) !== void 0))
    if (n === !0 || n === !1 || n === 0 || n === 1)
      if (n)
        if (
          typeof crypto != "undefined" &&
          crypto &&
          (crypto.getRandomValues || crypto.randomBytes)
        )
          this[r] = !0;
        else throw Error(mo);
      else this[r] = !1;
    else throw Error(Ne + r + ": " + n);
  return this;
}
function Su(e) {
  return new this(e).cos();
}
function Iu(e) {
  return new this(e).cosh();
}
function Po(e) {
  var t, r, n;
  function i(o) {
    var s,
      a,
      u,
      l = this;
    if (!(l instanceof i)) return new i(o);
    if (((l.constructor = i), co(o))) {
      (l.s = o.s),
        _
          ? !o.d || o.e > i.maxE
            ? ((l.e = NaN), (l.d = null))
            : o.e < i.minE
              ? ((l.e = 0), (l.d = [0]))
              : ((l.e = o.e), (l.d = o.d.slice()))
          : ((l.e = o.e), (l.d = o.d ? o.d.slice() : o.d));
      return;
    }
    if (((u = typeof o), u === "number")) {
      if (o === 0) {
        (l.s = 1 / o < 0 ? -1 : 1), (l.e = 0), (l.d = [0]);
        return;
      }
      if ((o < 0 ? ((o = -o), (l.s = -1)) : (l.s = 1), o === ~~o && o < 1e7)) {
        for (s = 0, a = o; a >= 10; a /= 10) s++;
        _
          ? s > i.maxE
            ? ((l.e = NaN), (l.d = null))
            : s < i.minE
              ? ((l.e = 0), (l.d = [0]))
              : ((l.e = s), (l.d = [o]))
          : ((l.e = s), (l.d = [o]));
        return;
      } else if (o * 0 !== 0) {
        o || (l.s = NaN), (l.e = NaN), (l.d = null);
        return;
      }
      return yn(l, o.toString());
    } else if (u !== "string") throw Error(Ne + o);
    return (
      (a = o.charCodeAt(0)) === 45
        ? ((o = o.slice(1)), (l.s = -1))
        : (a === 43 && (o = o.slice(1)), (l.s = 1)),
      ho.test(o) ? yn(l, o) : mu(l, o)
    );
  }
  if (
    ((i.prototype = C),
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
    (i.config = i.set = Ru),
    (i.clone = Po),
    (i.isDecimal = co),
    (i.abs = gu),
    (i.acos = hu),
    (i.acosh = yu),
    (i.add = wu),
    (i.asin = Eu),
    (i.asinh = bu),
    (i.atan = xu),
    (i.atanh = Pu),
    (i.atan2 = vu),
    (i.cbrt = Tu),
    (i.ceil = Cu),
    (i.clamp = Au),
    (i.cos = Su),
    (i.cosh = Iu),
    (i.div = ku),
    (i.exp = Du),
    (i.floor = Mu),
    (i.hypot = Ou),
    (i.ln = Nu),
    (i.log = _u),
    (i.log10 = Fu),
    (i.log2 = Lu),
    (i.max = Bu),
    (i.min = $u),
    (i.mod = qu),
    (i.mul = Uu),
    (i.pow = Vu),
    (i.random = ju),
    (i.round = Ju),
    (i.sign = Qu),
    (i.sin = Gu),
    (i.sinh = Hu),
    (i.sqrt = Wu),
    (i.sub = Ku),
    (i.sum = zu),
    (i.tan = Yu),
    (i.tanh = Zu),
    (i.trunc = Xu),
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
function ku(e, t) {
  return new this(e).div(t);
}
function Du(e) {
  return new this(e).exp();
}
function Mu(e) {
  return k((e = new this(e)), e.e + 1, 3);
}
function Ou() {
  var e,
    t,
    r = new this(0);
  for (_ = !1, e = 0; e < arguments.length; )
    if (((t = new this(arguments[e++])), t.d)) r.d && (r = r.plus(t.times(t)));
    else {
      if (t.s) return (_ = !0), new this(1 / 0);
      r = t;
    }
  return (_ = !0), r.sqrt();
}
function co(e) {
  return e instanceof He || (e && e.toStringTag === go) || !1;
}
function Nu(e) {
  return new this(e).ln();
}
function _u(e, t) {
  return new this(e).log(t);
}
function Lu(e) {
  return new this(e).log(2);
}
function Fu(e) {
  return new this(e).log(10);
}
function Bu() {
  return Eo(this, arguments, "lt");
}
function $u() {
  return Eo(this, arguments, "gt");
}
function qu(e, t) {
  return new this(e).mod(t);
}
function Uu(e, t) {
  return new this(e).mul(t);
}
function Vu(e, t) {
  return new this(e).pow(t);
}
function ju(e) {
  var t,
    r,
    n,
    i,
    o = 0,
    s = new this(1),
    a = [];
  if (
    (e === void 0 ? (e = this.precision) : se(e, 1, _e),
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
    } else throw Error(mo);
  else for (; o < n; ) a[o++] = (Math.random() * 1e7) | 0;
  for (
    n = a[--o],
      e %= O,
      n && e && ((i = H(10, O - e)), (a[o] = ((n / i) | 0) * i));
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
function Ju(e) {
  return k((e = new this(e)), e.e + 1, this.rounding);
}
function Qu(e) {
  return (e = new this(e)), e.d ? (e.d[0] ? e.s : 0 * e.s) : e.s || NaN;
}
function Gu(e) {
  return new this(e).sin();
}
function Hu(e) {
  return new this(e).sinh();
}
function Wu(e) {
  return new this(e).sqrt();
}
function Ku(e, t) {
  return new this(e).sub(t);
}
function zu() {
  var e = 0,
    t = arguments,
    r = new this(t[e]);
  for (_ = !1; r.s && ++e < t.length; ) r = r.plus(t[e]);
  return (_ = !0), k(r, this.precision, this.rounding);
}
function Yu(e) {
  return new this(e).tan();
}
function Zu(e) {
  return new this(e).tanh();
}
function Xu(e) {
  return k((e = new this(e)), e.e + 1, 1);
}
C[Symbol.for("nodejs.util.inspect.custom")] = C.toString;
C[Symbol.toStringTag] = "Decimal";
var He = (C.constructor = Po(dn));
br = new He(br);
xr = new He(xr);
var ve = He;
function pt(e) {
  return He.isDecimal(e)
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
var Bt = class {
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
function ft(e) {
  return e instanceof Bt;
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
var Ar = class {
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
var Rr = (e) => e,
  Sr = { bold: Rr, red: Rr, green: Rr, dim: Rr, enabled: !1 },
  vo = { bold: ar, red: it, green: Ci, dim: ur, enabled: !0 },
  mt = {
    write(e) {
      e.writeLine(",");
    },
  };
d();
c();
p();
f();
m();
var ye = class {
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
var Le = class {
  constructor() {
    this.hasError = !1;
  }
  markAsError() {
    return (this.hasError = !0), this;
  }
};
var dt = class extends Le {
  constructor() {
    super(...arguments);
    this.items = [];
  }
  addItem(r) {
    return this.items.push(new Ar(r)), this;
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
    let n = new ye("[]");
    this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n);
  }
  writeWithItems(r) {
    let { colors: n } = r.context;
    r
      .writeLine("[")
      .withIndent(() => r.writeJoined(mt, this.items).newLine())
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
var To = ": ",
  Ir = class {
    constructor(t, r) {
      this.name = t;
      this.value = r;
      this.hasError = !1;
    }
    markAsError() {
      this.hasError = !0;
    }
    getPrintWidth() {
      return this.name.length + this.value.getPrintWidth() + To.length;
    }
    write(t) {
      let r = new ye(this.name);
      this.hasError && r.underline().setColor(t.context.colors.red),
        t.write(r).write(To).write(this.value);
    }
  };
d();
c();
p();
f();
m();
var K = class e extends Le {
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
      let u;
      if (
        (s.value instanceof e
          ? (u = s.value.getField(a))
          : s.value instanceof dt && (u = s.value.getField(Number(a))),
        !u)
      )
        return;
      s = u;
    }
    return s;
  }
  getDeepFieldValue(r) {
    var n;
    return r.length === 0
      ? this
      : (n = this.getDeepField(r)) == null
        ? void 0
        : n.value;
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
    var n;
    return (n = this.getField(r)) == null ? void 0 : n.value;
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
    if ((r == null ? void 0 : r.value) instanceof e)
      return { kind: "select", value: r.value };
    let n = this.getField("include");
    if ((n == null ? void 0 : n.value) instanceof e)
      return { kind: "include", value: n.value };
  }
  getSubSelectionValue(r) {
    var n;
    return (n = this.getSelectionParent()) == null
      ? void 0
      : n.value.fields[r].value;
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
    let n = new ye("{}");
    this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n);
  }
  writeWithContents(r, n) {
    r.writeLine("{").withIndent(() => {
      r.writeJoined(mt, [...n, ...this.suggestions]).newLine();
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
var z = class extends Le {
  constructor(r) {
    super();
    this.text = r;
  }
  getPrintWidth() {
    return this.text.length;
  }
  write(r) {
    let n = new ye(this.text);
    this.hasError && n.underline().setColor(r.context.colors.red), r.write(n);
  }
};
var En = class {
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
function kr(e) {
  return new En(Co(e));
}
function Co(e) {
  let t = new K();
  for (let [r, n] of Object.entries(e)) {
    let i = new Ir(r, Ao(n));
    t.addField(i);
  }
  return t;
}
function Ao(e) {
  if (typeof e == "string") return new z(JSON.stringify(e));
  if (typeof e == "number" || typeof e == "boolean") return new z(String(e));
  if (typeof e == "bigint") return new z(`${e}n`);
  if (e === null) return new z("null");
  if (e === void 0) return new z("undefined");
  if (pt(e)) return new z(`new Prisma.Decimal("${e.toFixed()}")`);
  if (e instanceof Uint8Array)
    return w.Buffer.isBuffer(e)
      ? new z(`Buffer.alloc(${e.byteLength})`)
      : new z(`new Uint8Array(${e.byteLength})`);
  if (e instanceof Date) {
    let t = wr(e) ? e.toISOString() : "Invalid Date";
    return new z(`new Date("${t}")`);
  }
  return e instanceof xe
    ? new z(`Prisma.${e._getName()}`)
    : ft(e)
      ? new z(`prisma.${ao(e.modelName)}.$fields.${e.name}`)
      : Array.isArray(e)
        ? tl(e)
        : typeof e == "object"
          ? Co(e)
          : new z(Object.prototype.toString.call(e));
}
function tl(e) {
  let t = new dt();
  for (let r of e) t.addItem(Ao(r));
  return t;
}
function Ro(e) {
  if (e === void 0) return "";
  let t = kr(e);
  return new at(0, { colors: Sr }).write(t).toString();
}
d();
c();
p();
f();
m();
var rl = "P2037";
function $t({ error: e, user_facing_error: t }, r, n) {
  return t.error_code
    ? new Y(nl(t, n), {
        code: t.error_code,
        clientVersion: r,
        meta: t.meta,
        batchRequestIdx: t.batch_request_idx,
      })
    : new ue(e, { clientVersion: r, batchRequestIdx: t.batch_request_idx });
}
function nl(e, t) {
  let r = e.message;
  return (
    (t === "postgresql" || t === "postgres" || t === "mysql") &&
      e.error_code === rl &&
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
var bn = class {
  getLocation() {
    return null;
  }
};
function Fe(e) {
  return typeof $EnabledCallSite == "function" && e !== "minimal"
    ? new $EnabledCallSite()
    : new bn();
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
var So = { _avg: !0, _count: !0, _sum: !0, _min: !0, _max: !0 };
function gt(e = {}) {
  let t = ol(e);
  return Object.entries(t).reduce(
    (n, [i, o]) => (
      So[i] !== void 0 ? (n.select[i] = { select: o }) : (n[i] = o), n
    ),
    { select: {} },
  );
}
function ol(e = {}) {
  return typeof e._count == "boolean"
    ? { ...e, _count: { _all: e._count } }
    : e;
}
function Dr(e = {}) {
  return (t) => (typeof e._count == "boolean" && (t._count = t._count._all), t);
}
function Io(e, t) {
  let r = Dr(e);
  return t({ action: "aggregate", unpacker: r, argsMapper: gt })(e);
}
d();
c();
p();
f();
m();
function sl(e = {}) {
  let { select: t, ...r } = e;
  return typeof t == "object"
    ? gt({ ...r, _count: t })
    : gt({ ...r, _count: { _all: !0 } });
}
function al(e = {}) {
  return typeof e.select == "object"
    ? (t) => Dr(e)(t)._count
    : (t) => Dr(e)(t)._count._all;
}
function ko(e, t) {
  return t({ action: "count", unpacker: al(e), argsMapper: sl })(e);
}
d();
c();
p();
f();
m();
function ul(e = {}) {
  let t = gt(e);
  if (Array.isArray(t.by))
    for (let r of t.by) typeof r == "string" && (t.select[r] = !0);
  else typeof t.by == "string" && (t.select[t.by] = !0);
  return t;
}
function ll(e = {}) {
  return (t) => (
    typeof (e == null ? void 0 : e._count) == "boolean" &&
      t.forEach((r) => {
        r._count = r._count._all;
      }),
    t
  );
}
function Do(e, t) {
  return t({ action: "groupBy", unpacker: ll(e), argsMapper: ul })(e);
}
function Mo(e, t, r) {
  if (t === "aggregate") return (n) => Io(n, r);
  if (t === "count") return (n) => ko(n, r);
  if (t === "groupBy") return (n) => Do(n, r);
}
d();
c();
p();
f();
m();
function Oo(e, t) {
  let r = t.fields.filter((i) => !i.relationName),
    n = on(r, (i) => i.name);
  return new Proxy(
    {},
    {
      get(i, o) {
        if (o in i || typeof o == "symbol") return i[o];
        let s = n[o];
        if (s) return new Bt(e, o, s.type, s.isList, s.kind === "enum");
      },
      ...hr(Object.keys(n)),
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
var No = (e) => (Array.isArray(e) ? e : e.split(".")),
  xn = (e, t) => No(t).reduce((r, n) => r && r[n], e),
  _o = (e, t, r) =>
    No(t).reduceRight(
      (n, i, o, s) => Object.assign({}, xn(e, s.slice(0, o)), { [i]: n }),
      r,
    );
function cl(e, t) {
  return e === void 0 || t === void 0 ? [] : [...t, "select", e];
}
function pl(e, t, r) {
  return t === void 0 ? (e != null ? e : {}) : _o(t, r, e || !0);
}
function Pn(e, t, r, n, i, o) {
  let a = e._runtimeDataModel.models[t].fields.reduce(
    (u, l) => ({ ...u, [l.name]: l }),
    {},
  );
  return (u) => {
    let l = Fe(e._errorFormat),
      g = cl(n, i),
      h = pl(u, o, g),
      v = r({ dataPath: g, callsite: l })(h),
      S = fl(e, t);
    return new Proxy(v, {
      get(A, R) {
        if (!S.includes(R)) return A[R];
        let M = [a[R].type, r, R],
          B = [g, h];
        return Pn(e, ...M, ...B);
      },
      ...hr([...S, ...Object.getOwnPropertyNames(v)]),
    });
  };
}
function fl(e, t) {
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
var ml = Ve(Hi());
var dl = {
    red: it,
    gray: Ii,
    dim: ur,
    bold: ar,
    underline: Ti,
    highlightSource: (e) => e.highlight(),
  },
  gl = {
    red: (e) => e,
    gray: (e) => e,
    dim: (e) => e,
    bold: (e) => e,
    underline: (e) => e,
    highlightSource: (e) => e,
  };
function hl({ message: e, originalMethod: t, isPanic: r, callArguments: n }) {
  return {
    functionName: `prisma.${t}()`,
    message: e,
    isPanic: r != null ? r : !1,
    callArguments: n,
  };
}
function yl(
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
    u = t ? " in" : ":";
  if (
    (n
      ? (a.push(
          s.red(
            `Oops, an unknown error occurred! This is ${s.bold("on us")}, you did nothing wrong.`,
          ),
        ),
        a.push(
          s.red(`It occurred in the ${s.bold(`\`${e}\``)} invocation${u}`),
        ))
      : a.push(s.red(`Invalid ${s.bold(`\`${e}\``)} invocation${u}`)),
    t && a.push(s.underline(wl(t))),
    i)
  ) {
    a.push("");
    let l = [i.toString()];
    o && (l.push(o), l.push(s.dim(")"))), a.push(l.join("")), o && a.push("");
  } else a.push(""), o && a.push(o), a.push("");
  return (
    a.push(r),
    a.join(`
`)
  );
}
function wl(e) {
  let t = [e.fileName];
  return (
    e.lineNumber && t.push(String(e.lineNumber)),
    e.columnNumber && t.push(String(e.columnNumber)),
    t.join(":")
  );
}
function ht(e) {
  let t = e.showColors ? dl : gl,
    r;
  return (
    typeof $getTemplateParameters != "undefined"
      ? (r = $getTemplateParameters(e, t))
      : (r = hl(e)),
    yl(r, t)
  );
}
function Lo(e, t, r, n) {
  return e === Ie.ModelAction.findFirstOrThrow ||
    e === Ie.ModelAction.findUniqueOrThrow
    ? El(t, r, n)
    : n;
}
function El(e, t, r) {
  return async (n) => {
    if ("rejectOnNotFound" in n.args) {
      let o = ht({
        originalMethod: n.clientMethod,
        callsite: n.callsite,
        message: "'rejectOnNotFound' option is not supported",
      });
      throw new te(o, { clientVersion: t });
    }
    return await r(n).catch((o) => {
      throw o instanceof Y && o.code === "P2025"
        ? new ke(`No ${e} found`, t)
        : o;
    });
  };
}
d();
c();
p();
f();
m();
function we(e) {
  return e.replace(/^./, (t) => t.toLowerCase());
}
var bl = [
    "findUnique",
    "findUniqueOrThrow",
    "findFirst",
    "findFirstOrThrow",
    "create",
    "update",
    "upsert",
    "delete",
  ],
  xl = ["aggregate", "count", "groupBy"];
function vn(e, t) {
  var i;
  let r = (i = e._extensions.getAllModelExtensions(t)) != null ? i : {},
    n = [
      Pl(e, t),
      Tl(e, t),
      _t(r),
      ie("name", () => t),
      ie("$name", () => t),
      ie("$parent", () => e._appliedParent),
    ];
  return ge({}, n);
}
function Pl(e, t) {
  let r = we(t),
    n = Object.keys(Ie.ModelAction).concat("count");
  return {
    getKeys() {
      return n;
    },
    getPropertyValue(i) {
      let o = i,
        s = (u) => e._request(u);
      s = Lo(o, t, e._clientVersion, s);
      let a = (u) => (l) => {
        let g = Fe(e._errorFormat);
        return e._createPrismaPromise((h) => {
          let v = {
            args: l,
            dataPath: [],
            action: o,
            model: t,
            clientMethod: `${r}.${i}`,
            jsModelName: r,
            transaction: h,
            callsite: g,
          };
          return s({ ...v, ...u });
        });
      };
      return bl.includes(o) ? Pn(e, t, a) : vl(i) ? Mo(e, i, a) : a({});
    },
  };
}
function vl(e) {
  return xl.includes(e);
}
function Tl(e, t) {
  return Ge(
    ie("fields", () => {
      let r = e._runtimeDataModel.models[t];
      return Oo(t, r);
    }),
  );
}
d();
c();
p();
f();
m();
function Fo(e) {
  return e.replace(/^./, (t) => t.toUpperCase());
}
var Tn = Symbol();
function qt(e) {
  let t = [Cl(e), ie(Tn, () => e), ie("$parent", () => e._appliedParent)],
    r = e._extensions.getAllClientExtensions();
  return r && t.push(_t(r)), ge(e, t);
}
function Cl(e) {
  let t = Object.keys(e._runtimeDataModel.models),
    r = t.map(we),
    n = [...new Set(t.concat(r))];
  return Ge({
    getKeys() {
      return n;
    },
    getPropertyValue(i) {
      let o = Fo(i);
      if (e._runtimeDataModel.models[o] !== void 0) return vn(e, o);
      if (e._runtimeDataModel.models[i] !== void 0) return vn(e, i);
    },
    getPropertyDescriptor(i) {
      if (!r.includes(i)) return { enumerable: !1 };
    },
  });
}
function Bo(e) {
  return e[Tn] ? e[Tn] : e;
}
function $o(e) {
  var r;
  if (typeof e == "function") return e(this);
  if ((r = e.client) != null && r.__AccelerateEngine) {
    let n = e.client.__AccelerateEngine;
    this._originalClient._engine = new n(
      this._originalClient._accelerateEngineConfig,
    );
  }
  let t = Object.create(this._originalClient, {
    _extensions: { value: this._extensions.append(e) },
    _appliedParent: { value: this, configurable: !0 },
    $use: { value: void 0 },
    $on: { value: void 0 },
  });
  return qt(t);
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
function qo({ result: e, modelName: t, select: r, extensions: n }) {
  let i = n.getAllComputedFields(t);
  if (!i) return e;
  let o = [],
    s = [];
  for (let a of Object.values(i)) {
    if (r) {
      if (!r[a.name]) continue;
      let u = a.needs.filter((l) => !r[l]);
      u.length > 0 && s.push(Lt(u));
    }
    Al(e, a.needs) && o.push(Rl(a, ge(e, o)));
  }
  return o.length > 0 || s.length > 0 ? ge(e, [...o, ...s]) : e;
}
function Al(e, t) {
  return t.every((r) => nn(e, r));
}
function Rl(e, t) {
  return Ge(ie(e.name, () => e.compute(t)));
}
d();
c();
p();
f();
m();
function Mr({
  visitor: e,
  result: t,
  args: r,
  runtimeDataModel: n,
  modelName: i,
}) {
  var s;
  if (Array.isArray(t)) {
    for (let a = 0; a < t.length; a++)
      t[a] = Mr({
        result: t[a],
        args: r,
        modelName: i,
        runtimeDataModel: n,
        visitor: e,
      });
    return t;
  }
  let o = (s = e(t, i, r)) != null ? s : t;
  return (
    r.include &&
      Uo({
        includeOrSelect: r.include,
        result: o,
        parentModelName: i,
        runtimeDataModel: n,
        visitor: e,
      }),
    r.select &&
      Uo({
        includeOrSelect: r.select,
        result: o,
        parentModelName: i,
        runtimeDataModel: n,
        visitor: e,
      }),
    o
  );
}
function Uo({
  includeOrSelect: e,
  result: t,
  parentModelName: r,
  runtimeDataModel: n,
  visitor: i,
}) {
  for (let [o, s] of Object.entries(e)) {
    if (!s || t[o] == null) continue;
    let u = n.models[r].fields.find((g) => g.name === o);
    if (!u || u.kind !== "object" || !u.relationName) continue;
    let l = typeof s == "object" ? s : {};
    t[o] = Mr({
      visitor: i,
      result: t[o],
      args: l,
      modelName: u.type,
      runtimeDataModel: n,
    });
  }
}
function Vo({
  result: e,
  modelName: t,
  args: r,
  extensions: n,
  runtimeDataModel: i,
}) {
  return n.isEmpty() || e == null || typeof e != "object" || !i.models[t]
    ? e
    : Mr({
        result: e,
        args: r != null ? r : {},
        modelName: t,
        runtimeDataModel: i,
        visitor: (s, a, u) =>
          qo({ result: s, modelName: we(a), select: u.select, extensions: n }),
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
function jo(e) {
  if (e instanceof le) return Sl(e);
  if (Array.isArray(e)) {
    let r = [e[0]];
    for (let n = 1; n < e.length; n++) r[n] = Ut(e[n]);
    return r;
  }
  let t = {};
  for (let r in e) t[r] = Ut(e[r]);
  return t;
}
function Sl(e) {
  return new le(e.strings, e.values);
}
function Ut(e) {
  if (typeof e != "object" || e == null || e instanceof xe || ft(e)) return e;
  if (pt(e)) return new ve(e.toFixed());
  if (ut(e)) return new Date(+e);
  if (ArrayBuffer.isView(e)) return e.slice(0);
  if (Array.isArray(e)) {
    let t = e.length,
      r;
    for (r = Array(t); t--; ) r[t] = Ut(e[t]);
    return r;
  }
  if (typeof e == "object") {
    let t = {};
    for (let r in e)
      r === "__proto__"
        ? Object.defineProperty(t, r, {
            value: Ut(e[r]),
            configurable: !0,
            enumerable: !0,
            writable: !0,
          })
        : (t[r] = Ut(e[r]));
    return t;
  }
  Je(e, "Unknown value");
}
function Qo(e, t, r, n = 0) {
  return e._createPrismaPromise((i) => {
    var s, a;
    let o = t.customDataProxyFetch;
    return (
      "transaction" in t &&
        i !== void 0 &&
        (((s = t.transaction) == null ? void 0 : s.kind) === "batch" &&
          t.transaction.lock.then(),
        (t.transaction = i)),
      n === r.length
        ? e._executeRequest(t)
        : r[n]({
            model: t.model,
            operation: t.model ? t.action : t.clientMethod,
            args: jo((a = t.args) != null ? a : {}),
            __internalParams: t,
            query: (u, l = t) => {
              let g = l.customDataProxyFetch;
              return (
                (l.customDataProxyFetch = Ko(o, g)),
                (l.args = u),
                Qo(e, l, r, n + 1)
              );
            },
          })
    );
  });
}
function Go(e, t) {
  let { jsModelName: r, action: n, clientMethod: i } = t,
    o = r ? n : i;
  if (e._extensions.isEmpty()) return e._executeRequest(t);
  let s = e._extensions.getAllQueryCallbacks(r != null ? r : "$none", o);
  return Qo(e, t, s);
}
function Ho(e) {
  return (t) => {
    let r = { requests: t },
      n = t[0].extensions.getAllBatchQueryCallbacks();
    return n.length ? Wo(r, n, 0, e) : e(r);
  };
}
function Wo(e, t, r, n) {
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
      let u = a.customDataProxyFetch;
      return (a.customDataProxyFetch = Ko(i, u)), Wo(a, t, r + 1, n);
    },
  });
}
var Jo = (e) => e;
function Ko(e = Jo, t = Jo) {
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
function Yo(e, t, r) {
  let n = we(r);
  return !t.result || !(t.result.$allModels || t.result[n])
    ? e
    : Il({
        ...e,
        ...zo(t.name, e, t.result.$allModels),
        ...zo(t.name, e, t.result[n]),
      });
}
function Il(e) {
  let t = new de(),
    r = (n, i) =>
      t.getOrCreate(n, () =>
        i.has(n)
          ? [n]
          : (i.add(n), e[n] ? e[n].needs.flatMap((o) => r(o, i)) : [n]),
      );
  return st(e, (n) => ({ ...n, needs: r(n.name, new Set()) }));
}
function zo(e, t, r) {
  return r
    ? st(r, ({ needs: n, compute: i }, o) => ({
        name: o,
        needs: n ? Object.keys(n).filter((s) => n[s]) : [],
        compute: kl(t, o, i),
      }))
    : {};
}
function kl(e, t, r) {
  var i;
  let n = (i = e == null ? void 0 : e[t]) == null ? void 0 : i.compute;
  return n ? (o) => r({ ...o, [t]: n(o) }) : r;
}
function Zo(e, t) {
  if (!t) return e;
  let r = { ...e };
  for (let n of Object.values(t))
    if (e[n.name]) for (let i of n.needs) r[i] = !0;
  return r;
}
var Or = class {
    constructor(t, r) {
      this.extension = t;
      this.previous = r;
      this.computedFieldsCache = new de();
      this.modelExtensionsCache = new de();
      this.queryCallbacksCache = new de();
      this.clientExtensions = It(() => {
        var t, r;
        return this.extension.client
          ? {
              ...((r = this.previous) == null
                ? void 0
                : r.getAllClientExtensions()),
              ...this.extension.client,
            }
          : (t = this.previous) == null
            ? void 0
            : t.getAllClientExtensions();
      });
      this.batchCallbacks = It(() => {
        var n, i, o;
        let t =
            (i =
              (n = this.previous) == null
                ? void 0
                : n.getAllBatchQueryCallbacks()) != null
              ? i
              : [],
          r = (o = this.extension.query) == null ? void 0 : o.$__internalBatch;
        return r ? t.concat(r) : t;
      });
    }
    getAllComputedFields(t) {
      return this.computedFieldsCache.getOrCreate(t, () => {
        var r;
        return Yo(
          (r = this.previous) == null ? void 0 : r.getAllComputedFields(t),
          this.extension,
          t,
        );
      });
    }
    getAllClientExtensions() {
      return this.clientExtensions.get();
    }
    getAllModelExtensions(t) {
      return this.modelExtensionsCache.getOrCreate(t, () => {
        var n, i;
        let r = we(t);
        return !this.extension.model ||
          !(this.extension.model[r] || this.extension.model.$allModels)
          ? (n = this.previous) == null
            ? void 0
            : n.getAllModelExtensions(t)
          : {
              ...((i = this.previous) == null
                ? void 0
                : i.getAllModelExtensions(t)),
              ...this.extension.model.$allModels,
              ...this.extension.model[r],
            };
      });
    }
    getAllQueryCallbacks(t, r) {
      return this.queryCallbacksCache.getOrCreate(`${t}:${r}`, () => {
        var s, a;
        let n =
            (a =
              (s = this.previous) == null
                ? void 0
                : s.getAllQueryCallbacks(t, r)) != null
              ? a
              : [],
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
  Nr = class e {
    constructor(t) {
      this.head = t;
    }
    static empty() {
      return new e();
    }
    static single(t) {
      return new e(new Or(t));
    }
    isEmpty() {
      return this.head === void 0;
    }
    append(t) {
      return new e(new Or(t, this.head));
    }
    getAllComputedFields(t) {
      var r;
      return (r = this.head) == null ? void 0 : r.getAllComputedFields(t);
    }
    getAllClientExtensions() {
      var t;
      return (t = this.head) == null ? void 0 : t.getAllClientExtensions();
    }
    getAllModelExtensions(t) {
      var r;
      return (r = this.head) == null ? void 0 : r.getAllModelExtensions(t);
    }
    getAllQueryCallbacks(t, r) {
      var n, i;
      return (i =
        (n = this.head) == null ? void 0 : n.getAllQueryCallbacks(t, r)) != null
        ? i
        : [];
    }
    getAllBatchQueryCallbacks() {
      var t, r;
      return (r =
        (t = this.head) == null ? void 0 : t.getAllBatchQueryCallbacks()) !=
        null
        ? r
        : [];
    }
  };
d();
c();
p();
f();
m();
var Xo = ne("prisma:client"),
  es = { Vercel: "vercel", "Netlify CI": "netlify" };
function ts({ postinstall: e, ciName: t, clientVersion: r }) {
  if (
    (Xo("checkPlatformCaching:postinstall", e),
    Xo("checkPlatformCaching:ciName", t),
    e === !0 && t && t in es)
  ) {
    let n = `Prisma has detected that this project was built on ${t}, which caches dependencies. This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered. To fix this, make sure to run the \`prisma generate\` command during the build process.

Learn how: https://pris.ly/d/${es[t]}-build`;
    throw (console.error(n), new G(n, r));
  }
}
d();
c();
p();
f();
m();
function rs(e, t) {
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
var Dl = "Cloudflare-Workers",
  Ml = "node";
function Cn() {
  var e, t, r;
  return typeof Netlify == "object"
    ? "netlify"
    : typeof EdgeRuntime == "string"
      ? "edge-light"
      : ((e = globalThis.navigator) == null ? void 0 : e.userAgent) === Dl
        ? "workerd"
        : globalThis.Deno
          ? "deno"
          : globalThis.__lagon__
            ? "lagon"
            : ((r = (t = globalThis.process) == null ? void 0 : t.release) ==
                null
                  ? void 0
                  : r.name) === Ml
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
d();
c();
p();
f();
m();
function yt({
  inlineDatasources: e,
  overrideDatasources: t,
  env: r,
  clientVersion: n,
}) {
  var u, l;
  let i,
    o = Object.keys(e)[0],
    s = (u = e[o]) == null ? void 0 : u.url,
    a = (l = t[o]) == null ? void 0 : l.url;
  if (
    (o === void 0
      ? (i = void 0)
      : a
        ? (i = a)
        : s != null && s.value
          ? (i = s.value)
          : s != null && s.fromEnvVar && (i = r[s.fromEnvVar]),
    (s == null ? void 0 : s.fromEnvVar) !== void 0 && i === void 0)
  )
    throw Cn() === "workerd"
      ? new G(
          `error: Environment variable not found: ${s.fromEnvVar}.

In Cloudflare module Workers, environment variables are available only in the Worker's \`env\` parameter of \`fetch\`.
To solve this, provide the connection string directly: https://pris.ly/d/cloudflare-datasource-url`,
          n,
        )
      : new G(`error: Environment variable not found: ${s.fromEnvVar}.`, n);
  if (i === void 0)
    throw new G(
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
var _r = class extends Error {
  constructor(t, r) {
    super(t), (this.clientVersion = r.clientVersion), (this.cause = r.cause);
  }
  get [Symbol.toStringTag]() {
    return this.name;
  }
};
var ae = class extends _r {
  constructor(t, r) {
    var n;
    super(t, r), (this.isRetryable = (n = r.isRetryable) != null ? n : !0);
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
function $(e, t) {
  return { ...e, isRetryable: t };
}
var wt = class extends ae {
  constructor(r) {
    super("This request must be retried", $(r, !0));
    this.name = "ForcedRetryError";
    this.code = "P5001";
  }
};
N(wt, "ForcedRetryError");
d();
c();
p();
f();
m();
var We = class extends ae {
  constructor(r, n) {
    super(r, $(n, !1));
    this.name = "InvalidDatasourceError";
    this.code = "P6001";
  }
};
N(We, "InvalidDatasourceError");
d();
c();
p();
f();
m();
var Ke = class extends ae {
  constructor(r, n) {
    super(r, $(n, !1));
    this.name = "NotImplementedYetError";
    this.code = "P5004";
  }
};
N(Ke, "NotImplementedYetError");
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
var j = class extends ae {
  constructor(t, r) {
    super(t, r), (this.response = r.response);
    let n = this.response.headers.get("prisma-request-id");
    if (n) {
      let i = `(The request id was: ${n})`;
      this.message = this.message + " " + i;
    }
  }
};
var ze = class extends j {
  constructor(r) {
    super("Schema needs to be uploaded", $(r, !0));
    this.name = "SchemaMissingError";
    this.code = "P5005";
  }
};
N(ze, "SchemaMissingError");
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
var An = "This request could not be understood by the server",
  Vt = class extends j {
    constructor(r, n, i) {
      super(n || An, $(r, !1));
      this.name = "BadRequestError";
      this.code = "P5000";
      i && (this.code = i);
    }
  };
N(Vt, "BadRequestError");
d();
c();
p();
f();
m();
var jt = class extends j {
  constructor(r, n) {
    super("Engine not started: healthcheck timeout", $(r, !0));
    this.name = "HealthcheckTimeoutError";
    this.code = "P5013";
    this.logs = n;
  }
};
N(jt, "HealthcheckTimeoutError");
d();
c();
p();
f();
m();
var Jt = class extends j {
  constructor(r, n, i) {
    super(n, $(r, !0));
    this.name = "EngineStartupError";
    this.code = "P5014";
    this.logs = i;
  }
};
N(Jt, "EngineStartupError");
d();
c();
p();
f();
m();
var Qt = class extends j {
  constructor(r) {
    super("Engine version is not supported", $(r, !1));
    this.name = "EngineVersionNotSupportedError";
    this.code = "P5012";
  }
};
N(Qt, "EngineVersionNotSupportedError");
d();
c();
p();
f();
m();
var Rn = "Request timed out",
  Gt = class extends j {
    constructor(r, n = Rn) {
      super(n, $(r, !1));
      this.name = "GatewayTimeoutError";
      this.code = "P5009";
    }
  };
N(Gt, "GatewayTimeoutError");
d();
c();
p();
f();
m();
var Ol = "Interactive transaction error",
  Ht = class extends j {
    constructor(r, n = Ol) {
      super(n, $(r, !1));
      this.name = "InteractiveTransactionError";
      this.code = "P5015";
    }
  };
N(Ht, "InteractiveTransactionError");
d();
c();
p();
f();
m();
var Nl = "Request parameters are invalid",
  Wt = class extends j {
    constructor(r, n = Nl) {
      super(n, $(r, !1));
      this.name = "InvalidRequestError";
      this.code = "P5011";
    }
  };
N(Wt, "InvalidRequestError");
d();
c();
p();
f();
m();
var Sn = "Requested resource does not exist",
  Kt = class extends j {
    constructor(r, n = Sn) {
      super(n, $(r, !1));
      this.name = "NotFoundError";
      this.code = "P5003";
    }
  };
N(Kt, "NotFoundError");
d();
c();
p();
f();
m();
var In = "Unknown server error",
  Et = class extends j {
    constructor(r, n, i) {
      super(n || In, $(r, !0));
      this.name = "ServerError";
      this.code = "P5006";
      this.logs = i;
    }
  };
N(Et, "ServerError");
d();
c();
p();
f();
m();
var kn = "Unauthorized, check your connection string",
  zt = class extends j {
    constructor(r, n = kn) {
      super(n, $(r, !1));
      this.name = "UnauthorizedError";
      this.code = "P5007";
    }
  };
N(zt, "UnauthorizedError");
d();
c();
p();
f();
m();
var Dn = "Usage exceeded, retry again later",
  Yt = class extends j {
    constructor(r, n = Dn) {
      super(n, $(r, !0));
      this.name = "UsageExceededError";
      this.code = "P5008";
    }
  };
N(Yt, "UsageExceededError");
async function _l(e) {
  let t;
  try {
    t = await e.text();
  } catch (r) {
    return { type: "EmptyError" };
  }
  try {
    let r = JSON.parse(t);
    if (typeof r == "string")
      switch (r) {
        case "InternalDataProxyError":
          return { type: "DataProxyError", body: r };
        default:
          return { type: "UnknownTextError", body: r };
      }
    if (typeof r == "object" && r !== null) {
      if ("is_panic" in r && "message" in r && "error_code" in r)
        return { type: "QueryEngineError", body: r };
      if (
        "EngineNotStarted" in r ||
        "InteractiveTransactionMisrouted" in r ||
        "InvalidRequestError" in r
      ) {
        let n = Object.values(r)[0].reason;
        return typeof n == "string" &&
          !["SchemaMissing", "EngineVersionNotSupported"].includes(n)
          ? { type: "UnknownJsonError", body: r }
          : { type: "DataProxyError", body: r };
      }
    }
    return { type: "UnknownJsonError", body: r };
  } catch (r) {
    return t === ""
      ? { type: "EmptyError" }
      : { type: "UnknownTextError", body: t };
  }
}
async function Zt(e, t) {
  if (e.ok) return;
  let r = { clientVersion: t, response: e },
    n = await _l(e);
  if (n.type === "QueryEngineError")
    throw new Y(n.body.message, { code: n.body.error_code, clientVersion: t });
  if (n.type === "DataProxyError") {
    if (n.body === "InternalDataProxyError")
      throw new Et(r, "Internal Data Proxy error");
    if ("EngineNotStarted" in n.body) {
      if (n.body.EngineNotStarted.reason === "SchemaMissing") return new ze(r);
      if (n.body.EngineNotStarted.reason === "EngineVersionNotSupported")
        throw new Qt(r);
      if ("EngineStartupError" in n.body.EngineNotStarted.reason) {
        let { msg: i, logs: o } =
          n.body.EngineNotStarted.reason.EngineStartupError;
        throw new Jt(r, i, o);
      }
      if ("KnownEngineStartupError" in n.body.EngineNotStarted.reason) {
        let { msg: i, error_code: o } =
          n.body.EngineNotStarted.reason.KnownEngineStartupError;
        throw new G(i, t, o);
      }
      if ("HealthcheckTimeout" in n.body.EngineNotStarted.reason) {
        let { logs: i } = n.body.EngineNotStarted.reason.HealthcheckTimeout;
        throw new jt(r, i);
      }
    }
    if ("InteractiveTransactionMisrouted" in n.body) {
      let i = {
        IDParseError: "Could not parse interactive transaction ID",
        NoQueryEngineFoundError:
          "Could not find Query Engine for the specified host and transaction ID",
        TransactionStartError: "Could not start interactive transaction",
      };
      throw new Ht(r, i[n.body.InteractiveTransactionMisrouted.reason]);
    }
    if ("InvalidRequestError" in n.body)
      throw new Wt(r, n.body.InvalidRequestError.reason);
  }
  if (e.status === 401 || e.status === 403) throw new zt(r, bt(kn, n));
  if (e.status === 404) return new Kt(r, bt(Sn, n));
  if (e.status === 429) throw new Yt(r, bt(Dn, n));
  if (e.status === 504) throw new Gt(r, bt(Rn, n));
  if (e.status >= 500) throw new Et(r, bt(In, n));
  if (e.status >= 400) throw new Vt(r, bt(An, n));
}
function bt(e, t) {
  return t.type === "EmptyError" ? e : `${e}: ${JSON.stringify(t)}`;
}
d();
c();
p();
f();
m();
function ns(e) {
  let t = Math.pow(2, e) * 50,
    r = Math.ceil(Math.random() * t) - Math.ceil(t / 2),
    n = t + r;
  return new Promise((i) => setTimeout(() => i(n), n));
}
d();
c();
p();
f();
m();
var Te = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function is(e) {
  let t = new TextEncoder().encode(e),
    r = "",
    n = t.byteLength,
    i = n % 3,
    o = n - i,
    s,
    a,
    u,
    l,
    g;
  for (let h = 0; h < o; h = h + 3)
    (g = (t[h] << 16) | (t[h + 1] << 8) | t[h + 2]),
      (s = (g & 16515072) >> 18),
      (a = (g & 258048) >> 12),
      (u = (g & 4032) >> 6),
      (l = g & 63),
      (r += Te[s] + Te[a] + Te[u] + Te[l]);
  return (
    i == 1
      ? ((g = t[o]),
        (s = (g & 252) >> 2),
        (a = (g & 3) << 4),
        (r += Te[s] + Te[a] + "=="))
      : i == 2 &&
        ((g = (t[o] << 8) | t[o + 1]),
        (s = (g & 64512) >> 10),
        (a = (g & 1008) >> 4),
        (u = (g & 15) << 2),
        (r += Te[s] + Te[a] + Te[u] + "=")),
    r
  );
}
d();
c();
p();
f();
m();
function os(e) {
  var r;
  if (
    !!(
      (r = e.generator) != null &&
      r.previewFeatures.some((n) => n.toLowerCase().includes("metrics"))
    )
  )
    throw new G(
      "The `metrics` preview feature is not yet available with Accelerate.\nPlease remove `metrics` from the `previewFeatures` in your schema.\n\nMore information about Accelerate: https://pris.ly/d/accelerate",
      e.clientVersion,
    );
}
d();
c();
p();
f();
m();
function Ll(e) {
  return e[0] * 1e3 + e[1] / 1e6;
}
function ss(e) {
  return new Date(Ll(e));
}
d();
c();
p();
f();
m();
var as = {
  "@prisma/debug": "workspace:*",
  "@prisma/engines-version":
    "5.10.0-34.5a9203d0590c951969e85a7d07215503f4672eb9",
  "@prisma/fetch-engine": "workspace:*",
  "@prisma/get-platform": "workspace:*",
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
var Xt = class extends ae {
  constructor(r, n) {
    super(
      `Cannot fetch data from service:
${r}`,
      $(n, !0),
    );
    this.name = "RequestError";
    this.code = "P5010";
  }
};
N(Xt, "RequestError");
async function Ye(e, t, r = (n) => n) {
  var i;
  let n = t.clientVersion;
  try {
    return typeof fetch == "function"
      ? await r(fetch)(e, t)
      : await r(Mn)(e, t);
  } catch (o) {
    let s = (i = o.message) != null ? i : "Unknown error";
    throw new Xt(s, { clientVersion: n });
  }
}
function Bl(e) {
  return { ...e.headers, "Content-Type": "application/json" };
}
function $l(e) {
  return { method: e.method, headers: Bl(e) };
}
function ql(e, t) {
  return {
    text: () => Promise.resolve(w.Buffer.concat(e).toString()),
    json: () =>
      Promise.resolve().then(() => JSON.parse(w.Buffer.concat(e).toString())),
    ok: t.statusCode >= 200 && t.statusCode <= 299,
    status: t.statusCode,
    url: t.url,
    headers: new On(t.headers),
  };
}
async function Mn(e, t = {}) {
  let r = Ul("https"),
    n = $l(t),
    i = [],
    { origin: o } = new URL(e);
  return new Promise((s, a) => {
    var l;
    let u = r.request(e, n, (g) => {
      let {
        statusCode: h,
        headers: { location: v },
      } = g;
      h >= 301 &&
        h <= 399 &&
        v &&
        (v.startsWith("http") === !1 ? s(Mn(`${o}${v}`, t)) : s(Mn(v, t))),
        g.on("data", (S) => i.push(S)),
        g.on("end", () => s(ql(i, g))),
        g.on("error", a);
    });
    u.on("error", a), u.end((l = t.body) != null ? l : "");
  });
}
var Ul = typeof Pt != "undefined" ? Pt : () => {},
  On = class {
    constructor(t = {}) {
      this.headers = new Map();
      for (let [r, n] of Object.entries(t))
        if (typeof n == "string") this.headers.set(r, n);
        else if (Array.isArray(n)) for (let i of n) this.headers.set(r, i);
    }
    append(t, r) {
      this.headers.set(t, r);
    }
    delete(t) {
      this.headers.delete(t);
    }
    get(t) {
      var r;
      return (r = this.headers.get(t)) != null ? r : null;
    }
    has(t) {
      return this.headers.has(t);
    }
    set(t, r) {
      this.headers.set(t, r);
    }
    forEach(t, r) {
      for (let [n, i] of this.headers) t.call(r, i, n, this);
    }
  };
var Vl = /^[1-9][0-9]*\.[0-9]+\.[0-9]+$/,
  us = ne("prisma:client:dataproxyEngine");
async function jl(e, t) {
  var s, a, u;
  let r = as["@prisma/engines-version"],
    n = (s = t.clientVersion) != null ? s : "unknown";
  if (y.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION)
    return y.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION;
  if (e.includes("accelerate") && n !== "0.0.0" && n !== "in-memory") return n;
  let [i, o] = (a = n == null ? void 0 : n.split("-")) != null ? a : [];
  if (o === void 0 && Vl.test(i)) return i;
  if (o !== void 0 || n === "0.0.0" || n === "in-memory") {
    if (e.startsWith("localhost") || e.startsWith("127.0.0.1")) return "0.0.0";
    let [l] = (u = r.split("-")) != null ? u : [],
      [g, h, v] = l.split("."),
      S = Jl(`<=${g}.${h}.${v}`),
      A = await Ye(S, { clientVersion: n });
    if (!A.ok)
      throw new Error(
        `Failed to fetch stable Prisma version, unpkg.com status ${A.status} ${A.statusText}, response body: ${(await A.text()) || "<empty body>"}`,
      );
    let R = await A.text();
    us("length of body fetched from unpkg.com", R.length);
    let D;
    try {
      D = JSON.parse(R);
    } catch (M) {
      throw (
        (console.error("JSON.parse error: body fetched from unpkg.com: ", R), M)
      );
    }
    return D.version;
  }
  throw new Ke(
    "Only `major.minor.patch` versions are supported by Accelerate.",
    { clientVersion: n },
  );
}
async function ls(e, t) {
  let r = await jl(e, t);
  return us("version", r), r;
}
function Jl(e) {
  return encodeURI(`https://unpkg.com/prisma@${e}/package.json`);
}
var cs = 3,
  Nn = ne("prisma:client:dataproxyEngine"),
  _n = class {
    constructor({
      apiKey: t,
      tracingHelper: r,
      logLevel: n,
      logQueries: i,
      engineHash: o,
    }) {
      (this.apiKey = t),
        (this.tracingHelper = r),
        (this.logLevel = n),
        (this.logQueries = i),
        (this.engineHash = o);
    }
    build({ traceparent: t, interactiveTransaction: r } = {}) {
      let n = {
        Authorization: `Bearer ${this.apiKey}`,
        "Prisma-Engine-Hash": this.engineHash,
      };
      this.tracingHelper.isEnabled() &&
        (n.traceparent = t != null ? t : this.tracingHelper.getTraceParent()),
        r && (n["X-transaction-id"] = r.id);
      let i = this.buildCaptureSettings();
      return i.length > 0 && (n["X-capture-telemetry"] = i.join(", ")), n;
    }
    buildCaptureSettings() {
      let t = [];
      return (
        this.tracingHelper.isEnabled() && t.push("tracing"),
        this.logLevel && t.push(this.logLevel),
        this.logQueries && t.push("query"),
        t
      );
    }
  },
  er = class {
    constructor(t) {
      this.name = "DataProxyEngine";
      os(t),
        (this.config = t),
        (this.env = { ...t.env, ...(typeof y != "undefined" ? y.env : {}) }),
        (this.inlineSchema = is(t.inlineSchema)),
        (this.inlineDatasources = t.inlineDatasources),
        (this.inlineSchemaHash = t.inlineSchemaHash),
        (this.clientVersion = t.clientVersion),
        (this.engineHash = t.engineVersion),
        (this.logEmitter = t.logEmitter),
        (this.tracingHelper = t.tracingHelper);
    }
    apiKey() {
      return this.headerBuilder.apiKey;
    }
    version() {
      return this.engineHash;
    }
    async start() {
      this.startPromise !== void 0 && (await this.startPromise),
        (this.startPromise = (async () => {
          let [t, r] = this.extractHostAndApiKey();
          (this.host = t),
            (this.headerBuilder = new _n({
              apiKey: r,
              tracingHelper: this.tracingHelper,
              logLevel: this.config.logLevel,
              logQueries: this.config.logQueries,
              engineHash: this.engineHash,
            })),
            (this.remoteClientVersion = await ls(t, this.config)),
            Nn("host", this.host);
        })()),
        await this.startPromise;
    }
    async stop() {}
    propagateResponseExtensions(t) {
      var r, n;
      (r = t == null ? void 0 : t.logs) != null &&
        r.length &&
        t.logs.forEach((i) => {
          switch (i.level) {
            case "debug":
            case "error":
            case "trace":
            case "warn":
            case "info":
              break;
            case "query": {
              let o =
                typeof i.attributes.query == "string" ? i.attributes.query : "";
              if (!this.tracingHelper.isEnabled()) {
                let [s] = o.split("/* traceparent");
                o = s;
              }
              this.logEmitter.emit("query", {
                query: o,
                timestamp: ss(i.timestamp),
                duration: Number(i.attributes.duration_ms),
                params: i.attributes.params,
                target: i.attributes.target,
              });
            }
          }
        }),
        (n = t == null ? void 0 : t.traces) != null &&
          n.length &&
          this.tracingHelper.createEngineSpan({ span: !0, spans: t.traces });
    }
    onBeforeExit() {
      throw new Error(
        '"beforeExit" hook is not applicable to the remote query engine',
      );
    }
    async url(t) {
      return (
        await this.start(),
        `https://${this.host}/${this.remoteClientVersion}/${this.inlineSchemaHash}/${t}`
      );
    }
    async uploadSchema() {
      let t = { name: "schemaUpload", internal: !0 };
      return this.tracingHelper.runInChildSpan(t, async () => {
        let r = await Ye(await this.url("schema"), {
          method: "PUT",
          headers: this.headerBuilder.build(),
          body: this.inlineSchema,
          clientVersion: this.clientVersion,
        });
        r.ok || Nn("schema response status", r.status);
        let n = await Zt(r, this.clientVersion);
        if (n)
          throw (
            (this.logEmitter.emit("warn", {
              message: `Error while uploading schema: ${n.message}`,
              timestamp: new Date(),
              target: "",
            }),
            n)
          );
        this.logEmitter.emit("info", {
          message: `Schema (re)uploaded (hash: ${this.inlineSchemaHash})`,
          timestamp: new Date(),
          target: "",
        });
      });
    }
    request(
      t,
      { traceparent: r, interactiveTransaction: n, customDataProxyFetch: i },
    ) {
      return this.requestInternal({
        body: t,
        traceparent: r,
        interactiveTransaction: n,
        customDataProxyFetch: i,
      });
    }
    async requestBatch(
      t,
      { traceparent: r, transaction: n, customDataProxyFetch: i },
    ) {
      let o = (n == null ? void 0 : n.kind) === "itx" ? n.options : void 0,
        s = yr(t, n),
        { batchResult: a, elapsed: u } = await this.requestInternal({
          body: s,
          customDataProxyFetch: i,
          interactiveTransaction: o,
          traceparent: r,
        });
      return a.map((l) =>
        "errors" in l && l.errors.length > 0
          ? $t(l.errors[0], this.clientVersion, this.config.activeProvider)
          : { data: l, elapsed: u },
      );
    }
    requestInternal({
      body: t,
      traceparent: r,
      customDataProxyFetch: n,
      interactiveTransaction: i,
    }) {
      return this.withRetry({
        actionGerund: "querying",
        callback: async ({ logHttpCall: o }) => {
          let s = i
            ? `${i.payload.endpoint}/graphql`
            : await this.url("graphql");
          o(s);
          let a = await Ye(
            s,
            {
              method: "POST",
              headers: this.headerBuilder.build({
                traceparent: r,
                interactiveTransaction: i,
              }),
              body: JSON.stringify(t),
              clientVersion: this.clientVersion,
            },
            n,
          );
          a.ok || Nn("graphql response status", a.status),
            await this.handleError(await Zt(a, this.clientVersion));
          let u = await a.json(),
            l = u.extensions;
          if ((l && this.propagateResponseExtensions(l), u.errors))
            throw u.errors.length === 1
              ? $t(
                  u.errors[0],
                  this.config.clientVersion,
                  this.config.activeProvider,
                )
              : new ue(u.errors, { clientVersion: this.config.clientVersion });
          return u;
        },
      });
    }
    async transaction(t, r, n) {
      let i = {
        start: "starting",
        commit: "committing",
        rollback: "rolling back",
      };
      return this.withRetry({
        actionGerund: `${i[t]} transaction`,
        callback: async ({ logHttpCall: o }) => {
          if (t === "start") {
            let s = JSON.stringify({
                max_wait: n.maxWait,
                timeout: n.timeout,
                isolation_level: n.isolationLevel,
              }),
              a = await this.url("transaction/start");
            o(a);
            let u = await Ye(a, {
              method: "POST",
              headers: this.headerBuilder.build({ traceparent: r.traceparent }),
              body: s,
              clientVersion: this.clientVersion,
            });
            await this.handleError(await Zt(u, this.clientVersion));
            let l = await u.json(),
              g = l.extensions;
            g && this.propagateResponseExtensions(g);
            let h = l.id,
              v = l["data-proxy"].endpoint;
            return { id: h, payload: { endpoint: v } };
          } else {
            let s = `${n.payload.endpoint}/${t}`;
            o(s);
            let a = await Ye(s, {
              method: "POST",
              headers: this.headerBuilder.build({ traceparent: r.traceparent }),
              clientVersion: this.clientVersion,
            });
            await this.handleError(await Zt(a, this.clientVersion));
            let l = (await a.json()).extensions;
            l && this.propagateResponseExtensions(l);
            return;
          }
        },
      });
    }
    extractHostAndApiKey() {
      let t = { clientVersion: this.clientVersion },
        r = Object.keys(this.inlineDatasources)[0],
        n = yt({
          inlineDatasources: this.inlineDatasources,
          overrideDatasources: this.config.overrideDatasources,
          clientVersion: this.clientVersion,
          env: this.env,
        }),
        i;
      try {
        i = new URL(n);
      } catch (l) {
        throw new We(
          `Error validating datasource \`${r}\`: the URL must start with the protocol \`prisma://\``,
          t,
        );
      }
      let { protocol: o, host: s, searchParams: a } = i;
      if (o !== "prisma:")
        throw new We(
          `Error validating datasource \`${r}\`: the URL must start with the protocol \`prisma://\``,
          t,
        );
      let u = a.get("api_key");
      if (u === null || u.length < 1)
        throw new We(
          `Error validating datasource \`${r}\`: the URL must contain a valid API key`,
          t,
        );
      return [s, u];
    }
    metrics() {
      throw new Ke("Metrics are not yet supported for Accelerate", {
        clientVersion: this.clientVersion,
      });
    }
    async withRetry(t) {
      var r;
      for (let n = 0; ; n++) {
        let i = (o) => {
          this.logEmitter.emit("info", {
            message: `Calling ${o} (n=${n})`,
            timestamp: new Date(),
            target: "",
          });
        };
        try {
          return await t.callback({ logHttpCall: i });
        } catch (o) {
          if (!(o instanceof ae) || !o.isRetryable) throw o;
          if (n >= cs) throw o instanceof wt ? o.cause : o;
          this.logEmitter.emit("warn", {
            message: `Attempt ${n + 1}/${cs} failed for ${t.actionGerund}: ${(r = o.message) != null ? r : "(unknown)"}`,
            timestamp: new Date(),
            target: "",
          });
          let s = await ns(n);
          this.logEmitter.emit("warn", {
            message: `Retrying after ${s}ms`,
            timestamp: new Date(),
            target: "",
          });
        }
      }
    }
    async handleError(t) {
      if (t instanceof ze)
        throw (
          (await this.uploadSchema(),
          new wt({ clientVersion: this.clientVersion, cause: t }))
        );
      if (t) throw t;
    }
  };
function ps({ copyEngine: e = !0 }, t) {
  let r;
  try {
    r = yt({
      inlineDatasources: t.inlineDatasources,
      overrideDatasources: t.overrideDatasources,
      env: { ...t.env, ...y.env },
      clientVersion: t.clientVersion,
    });
  } catch (u) {}
  e &&
    r != null &&
    r.startsWith("prisma://") &&
    mr(
      "recommend--no-engine",
      "In production, we recommend using `prisma generate --no-engine` (See: `prisma generate --help`)",
    );
  let n = At(t.generator),
    i = !!((r != null && r.startsWith("prisma://")) || !e),
    o = !!t.adapter,
    s = n === "library",
    a = n === "binary";
  if ((i && o) || o) {
    let u;
    throw (
      ((u = [
        "Prisma Client was configured to use the `adapter` option but it was imported via its `/edge` endpoint.",
        "Please either remove the `/edge` endpoint or remove the `adapter` from the Prisma Client constructor.",
      ]),
      new te(
        u.join(`
`),
        { clientVersion: t.clientVersion },
      ))
    );
  }
  if (i) return new er(t);
  throw new te("Invalid client engine type, please use `library` or `binary`", {
    clientVersion: t.clientVersion,
  });
}
d();
c();
p();
f();
m();
function Lr({ generator: e }) {
  var t;
  return (t = e == null ? void 0 : e.previewFeatures) != null ? t : [];
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
var ys = Ve(Ln());
d();
c();
p();
f();
m();
function gs(e, t) {
  let r = hs(e),
    n = Ql(r),
    i = Hl(n);
  i ? Fr(i, t) : t.addErrorMessage(() => "Unknown error");
}
function hs(e) {
  return e.errors.flatMap((t) => (t.kind === "Union" ? hs(t) : [t]));
}
function Ql(e) {
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
            typeNames: Gl(o.argument.typeNames, n.argument.typeNames),
          },
        })
      : t.set(i, n);
  }
  return r.push(...t.values()), r;
}
function Gl(e, t) {
  return [...new Set(e.concat(t))];
}
function Hl(e) {
  return sn(e, (t, r) => {
    let n = ms(t),
      i = ms(r);
    return n !== i ? n - i : ds(t) - ds(r);
  });
}
function ms(e) {
  let t = 0;
  return (
    Array.isArray(e.selectionPath) && (t += e.selectionPath.length),
    Array.isArray(e.argumentPath) && (t += e.argumentPath.length),
    t
  );
}
function ds(e) {
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
var Ce = class {
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
var Br = class {
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
        t.writeJoined(mt, this.fields).newLine();
      })
      .write(r("}"))
      .addMarginSymbol(r("+"));
  }
};
function Fr(e, t) {
  switch (e.kind) {
    case "IncludeAndSelect":
      Wl(e, t);
      break;
    case "IncludeOnScalar":
      Kl(e, t);
      break;
    case "EmptySelection":
      zl(e, t);
      break;
    case "UnknownSelectionField":
      Yl(e, t);
      break;
    case "UnknownArgument":
      Zl(e, t);
      break;
    case "UnknownInputField":
      Xl(e, t);
      break;
    case "RequiredArgumentMissing":
      ec(e, t);
      break;
    case "InvalidArgumentType":
      tc(e, t);
      break;
    case "InvalidArgumentValue":
      rc(e, t);
      break;
    case "ValueTooLarge":
      nc(e, t);
      break;
    case "SomeFieldsMissing":
      ic(e, t);
      break;
    case "TooManyFieldsGiven":
      oc(e, t);
      break;
    case "Union":
      gs(e, t);
      break;
    default:
      throw new Error("not implemented: " + e.kind);
  }
}
function Wl(e, t) {
  var n, i;
  let r = t.arguments.getDeepSubSelectionValue(e.selectionPath);
  r &&
    r instanceof K &&
    ((n = r.getField("include")) == null || n.markAsError(),
    (i = r.getField("select")) == null || i.markAsError()),
    t.addErrorMessage(
      (o) =>
        `Please ${o.bold("either")} use ${o.green("`include`")} or ${o.green("`select`")}, but ${o.red("not both")} at the same time.`,
    );
}
function Kl(e, t) {
  var s, a;
  let [r, n] = $r(e.selectionPath),
    i = e.outputType,
    o = (s = t.arguments.getDeepSelectionParent(r)) == null ? void 0 : s.value;
  if (o && ((a = o.getField(n)) == null || a.markAsError(), i))
    for (let u of i.fields)
      u.isRelation && o.addSuggestion(new Ce(u.name, "true"));
  t.addErrorMessage((u) => {
    let l = `Invalid scalar field ${u.red(`\`${n}\``)} for ${u.bold("include")} statement`;
    return (
      i ? (l += ` on model ${u.bold(i.name)}. ${tr(u)}`) : (l += "."),
      (l += `
Note that ${u.bold("include")} statements only accept relation fields.`),
      l
    );
  });
}
function zl(e, t) {
  var o, s;
  let r = e.outputType,
    n =
      (o = t.arguments.getDeepSelectionParent(e.selectionPath)) == null
        ? void 0
        : o.value,
    i = (s = n == null ? void 0 : n.isEmpty()) != null ? s : !1;
  n && (n.removeAllFields(), bs(n, r)),
    t.addErrorMessage((a) =>
      i
        ? `The ${a.red("`select`")} statement for type ${a.bold(r.name)} must not be empty. ${tr(a)}`
        : `The ${a.red("`select`")} statement for type ${a.bold(r.name)} needs ${a.bold("at least one truthy value")}.`,
    );
}
function Yl(e, t) {
  var o;
  let [r, n] = $r(e.selectionPath),
    i = t.arguments.getDeepSelectionParent(r);
  i &&
    ((o = i.value.getField(n)) == null || o.markAsError(),
    bs(i.value, e.outputType)),
    t.addErrorMessage((s) => {
      let a = [`Unknown field ${s.red(`\`${n}\``)}`];
      return (
        i && a.push(`for ${s.bold(i.kind)} statement`),
        a.push(`on model ${s.bold(`\`${e.outputType.name}\``)}.`),
        a.push(tr(s)),
        a.join(" ")
      );
    });
}
function Zl(e, t) {
  var i;
  let r = e.argumentPath[0],
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
  n instanceof K &&
    ((i = n.getField(r)) == null || i.markAsError(), sc(n, e.arguments)),
    t.addErrorMessage((o) =>
      ws(
        o,
        r,
        e.arguments.map((s) => s.name),
      ),
    );
}
function Xl(e, t) {
  var o;
  let [r, n] = $r(e.argumentPath),
    i = t.arguments.getDeepSubSelectionValue(e.selectionPath);
  if (i instanceof K) {
    (o = i.getDeepField(e.argumentPath)) == null || o.markAsError();
    let s = i.getDeepFieldValue(r);
    s instanceof K && xs(s, e.inputType);
  }
  t.addErrorMessage((s) =>
    ws(
      s,
      n,
      e.inputType.fields.map((a) => a.name),
    ),
  );
}
function ws(e, t, r) {
  let n = [`Unknown argument \`${e.red(t)}\`.`],
    i = uc(t, r);
  return (
    i && n.push(`Did you mean \`${e.green(i)}\`?`),
    r.length > 0 && n.push(tr(e)),
    n.join(" ")
  );
}
function ec(e, t) {
  let r;
  t.addErrorMessage((u) =>
    (r == null ? void 0 : r.value) instanceof z && r.value.text === "null"
      ? `Argument \`${u.green(o)}\` must not be ${u.red("null")}.`
      : `Argument \`${u.green(o)}\` is missing.`,
  );
  let n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
  if (!(n instanceof K)) return;
  let [i, o] = $r(e.argumentPath),
    s = new Br(),
    a = n.getDeepFieldValue(i);
  if (a instanceof K)
    if (
      ((r = a.getField(o)),
      r && a.removeField(o),
      e.inputTypes.length === 1 && e.inputTypes[0].kind === "object")
    ) {
      for (let u of e.inputTypes[0].fields)
        s.addField(u.name, u.typeNames.join(" | "));
      a.addSuggestion(new Ce(o, s).makeRequired());
    } else {
      let u = e.inputTypes.map(Es).join(" | ");
      a.addSuggestion(new Ce(o, u).makeRequired());
    }
}
function Es(e) {
  return e.kind === "list" ? `${Es(e.elementType)}[]` : e.name;
}
function tc(e, t) {
  var i;
  let r = e.argument.name,
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
  n instanceof K &&
    ((i = n.getDeepFieldValue(e.argumentPath)) == null || i.markAsError()),
    t.addErrorMessage((o) => {
      let s = qr(
        "or",
        e.argument.typeNames.map((a) => o.green(a)),
      );
      return `Argument \`${o.bold(r)}\`: Invalid value provided. Expected ${s}, provided ${o.red(e.inferredType)}.`;
    });
}
function rc(e, t) {
  var i;
  let r = e.argument.name,
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
  n instanceof K &&
    ((i = n.getDeepFieldValue(e.argumentPath)) == null || i.markAsError()),
    t.addErrorMessage((o) => {
      let s = [`Invalid value for argument \`${o.bold(r)}\``];
      if (
        (e.underlyingError && s.push(`: ${e.underlyingError}`),
        s.push("."),
        e.argument.typeNames.length > 0)
      ) {
        let a = qr(
          "or",
          e.argument.typeNames.map((u) => o.green(u)),
        );
        s.push(` Expected ${a}.`);
      }
      return s.join("");
    });
}
function nc(e, t) {
  let r = e.argument.name,
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath),
    i;
  if (n instanceof K) {
    let o = n.getDeepField(e.argumentPath),
      s = o == null ? void 0 : o.value;
    s == null || s.markAsError(), s instanceof z && (i = s.text);
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
function ic(e, t) {
  let r = e.argumentPath[e.argumentPath.length - 1],
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
  if (n instanceof K) {
    let i = n.getDeepFieldValue(e.argumentPath);
    i instanceof K && xs(i, e.inputType);
  }
  t.addErrorMessage((i) => {
    let o = [
      `Argument \`${i.bold(r)}\` of type ${i.bold(e.inputType.name)} needs`,
    ];
    return (
      e.constraints.minFieldCount === 1
        ? e.constraints.requiredFields
          ? o.push(
              `${i.green("at least one of")} ${qr(
                "or",
                e.constraints.requiredFields.map((s) => `\`${i.bold(s)}\``),
              )} arguments.`,
            )
          : o.push(`${i.green("at least one")} argument.`)
        : o.push(
            `${i.green(`at least ${e.constraints.minFieldCount}`)} arguments.`,
          ),
      o.push(tr(i)),
      o.join(" ")
    );
  });
}
function oc(e, t) {
  let r = e.argumentPath[e.argumentPath.length - 1],
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath),
    i = [];
  if (n instanceof K) {
    let o = n.getDeepFieldValue(e.argumentPath);
    o instanceof K && (o.markAsError(), (i = Object.keys(o.getFields())));
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
        `but you provided ${qr(
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
function bs(e, t) {
  for (let r of t.fields)
    e.hasField(r.name) || e.addSuggestion(new Ce(r.name, "true"));
}
function sc(e, t) {
  for (let r of t)
    e.hasField(r.name) ||
      e.addSuggestion(new Ce(r.name, r.typeNames.join(" | ")));
}
function xs(e, t) {
  if (t.kind === "object")
    for (let r of t.fields)
      e.hasField(r.name) ||
        e.addSuggestion(new Ce(r.name, r.typeNames.join(" | ")));
}
function $r(e) {
  let t = [...e],
    r = t.pop();
  if (!r) throw new Error("unexpected empty path");
  return [t, r];
}
function tr({ green: e, enabled: t }) {
  return (
    "Available options are " +
    (t ? `listed in ${e("green")}` : "marked with ?") +
    "."
  );
}
function qr(e, t) {
  if (t.length === 1) return t[0];
  let r = [...t],
    n = r.pop();
  return `${r.join(", ")} ${e} ${n}`;
}
var ac = 3;
function uc(e, t) {
  let r = 1 / 0,
    n;
  for (let i of t) {
    let o = (0, ys.default)(e, i);
    o > ac || (o < r && ((r = o), (n = i)));
  }
  return n;
}
function Ur({
  args: e,
  errors: t,
  errorFormat: r,
  callsite: n,
  originalMethod: i,
  clientVersion: o,
}) {
  let s = kr(e);
  for (let h of t) Fr(h, s);
  let a = r === "pretty" ? vo : Sr,
    u = s.renderAllMessages(a),
    l = new at(0, { colors: a }).write(s).toString(),
    g = ht({
      message: u,
      callsite: n,
      originalMethod: i,
      showColors: r === "pretty",
      callArguments: l,
    });
  throw new te(g, { clientVersion: o });
}
var lc = {
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
function Ps({
  modelName: e,
  action: t,
  args: r,
  runtimeDataModel: n,
  extensions: i,
  callsite: o,
  clientMethod: s,
  errorFormat: a,
  clientVersion: u,
}) {
  let l = new Fn({
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
    clientVersion: u,
  });
  return { modelName: e, action: lc[t], query: Bn(r, l) };
}
function Bn({ select: e, include: t, ...r } = {}, n) {
  return { arguments: Ts(r, n), selection: cc(e, t, n) };
}
function cc(e, t, r) {
  return (
    e &&
      t &&
      r.throwValidationError({
        kind: "IncludeAndSelect",
        selectionPath: r.getSelectionPath(),
      }),
    e ? mc(e, r) : pc(r, t)
  );
}
function pc(e, t) {
  let r = {};
  return (
    e.model && !e.isRawAction() && ((r.$composites = !0), (r.$scalars = !0)),
    t && fc(r, t, e),
    r
  );
}
function fc(e, t, r) {
  for (let [n, i] of Object.entries(t)) {
    let o = r.findField(n);
    o &&
      (o == null ? void 0 : o.kind) !== "object" &&
      r.throwValidationError({
        kind: "IncludeOnScalar",
        selectionPath: r.getSelectionPath().concat(n),
        outputType: r.getOutputTypeDescription(),
      }),
      i === !0
        ? (e[n] = !0)
        : typeof i == "object" && (e[n] = Bn(i, r.nestSelection(n)));
  }
}
function mc(e, t) {
  let r = {},
    n = t.getComputedFields(),
    i = Zo(e, n);
  for (let [o, s] of Object.entries(i)) {
    let a = t.findField(o);
    (n != null && n[o] && !a) ||
      (s === !0
        ? (r[o] = !0)
        : typeof s == "object" && (r[o] = Bn(s, t.nestSelection(o))));
  }
  return r;
}
function vs(e, t) {
  if (e === null) return null;
  if (typeof e == "string" || typeof e == "number" || typeof e == "boolean")
    return e;
  if (typeof e == "bigint") return { $type: "BigInt", value: String(e) };
  if (ut(e)) {
    if (wr(e)) return { $type: "DateTime", value: e.toISOString() };
    t.throwValidationError({
      kind: "InvalidArgumentValue",
      selectionPath: t.getSelectionPath(),
      argumentPath: t.getArgumentPath(),
      argument: { name: t.getArgumentName(), typeNames: ["Date"] },
      underlyingError: "Provided Date object is invalid",
    });
  }
  if (ft(e))
    return {
      $type: "FieldRef",
      value: { _ref: e.name, _container: e.modelName },
    };
  if (Array.isArray(e)) return dc(e, t);
  if (ArrayBuffer.isView(e))
    return { $type: "Bytes", value: w.Buffer.from(e).toString("base64") };
  if (gc(e)) return e.values;
  if (pt(e)) return { $type: "Decimal", value: e.toFixed() };
  if (e instanceof xe) {
    if (e !== ln.instances[e._getName()])
      throw new Error("Invalid ObjectEnumValue");
    return { $type: "Enum", value: e._getName() };
  }
  if (hc(e)) return e.toJSON();
  if (typeof e == "object") return Ts(e, t);
  t.throwValidationError({
    kind: "InvalidArgumentValue",
    selectionPath: t.getSelectionPath(),
    argumentPath: t.getArgumentPath(),
    argument: { name: t.getArgumentName(), typeNames: [] },
    underlyingError: `We could not serialize ${Object.prototype.toString.call(e)} value. Serialize the object to JSON or implement a ".toJSON()" method on it`,
  });
}
function Ts(e, t) {
  if (e.$type) return { $type: "Raw", value: e };
  let r = {};
  for (let n in e) {
    let i = e[n];
    i !== void 0 && (r[n] = vs(i, t.nestArgument(n)));
  }
  return r;
}
function dc(e, t) {
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
      r.push(vs(o, i));
  }
  return r;
}
function gc(e) {
  return typeof e == "object" && e !== null && e.__prismaRawParameters__ === !0;
}
function hc(e) {
  return typeof e == "object" && e !== null && typeof e.toJSON == "function";
}
var Fn = class e {
  constructor(t) {
    this.params = t;
    this.params.modelName &&
      (this.model = this.params.runtimeDataModel.models[this.params.modelName]);
  }
  throwValidationError(t) {
    var r;
    Ur({
      errors: [t],
      originalMethod: this.params.originalMethod,
      args: (r = this.params.rootArgs) != null ? r : {},
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
    var r;
    return (r = this.model) == null
      ? void 0
      : r.fields.find((n) => n.name === t);
  }
  nestSelection(t) {
    let r = this.findField(t),
      n = (r == null ? void 0 : r.kind) === "object" ? r.type : void 0;
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
var Cs = (e) => ({ command: e });
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
var As = (e) => e.strings.reduce((t, r, n) => `${t}@P${n}${r}`);
d();
c();
p();
f();
m();
function rr(e) {
  try {
    return Rs(e, "fast");
  } catch (t) {
    return Rs(e, "slow");
  }
}
function Rs(e, t) {
  return JSON.stringify(e.map((r) => yc(r, t)));
}
function yc(e, t) {
  return typeof e == "bigint"
    ? { prisma__type: "bigint", prisma__value: e.toString() }
    : ut(e)
      ? { prisma__type: "date", prisma__value: e.toJSON() }
      : ve.isDecimal(e)
        ? { prisma__type: "decimal", prisma__value: e.toJSON() }
        : w.Buffer.isBuffer(e)
          ? { prisma__type: "bytes", prisma__value: e.toString("base64") }
          : wc(e) || ArrayBuffer.isView(e)
            ? {
                prisma__type: "bytes",
                prisma__value: w.Buffer.from(e).toString("base64"),
              }
            : typeof e == "object" && t === "slow"
              ? Is(e)
              : e;
}
function wc(e) {
  return e instanceof ArrayBuffer || e instanceof SharedArrayBuffer
    ? !0
    : typeof e == "object" && e !== null
      ? e[Symbol.toStringTag] === "ArrayBuffer" ||
        e[Symbol.toStringTag] === "SharedArrayBuffer"
      : !1;
}
function Is(e) {
  if (typeof e != "object" || e === null) return e;
  if (typeof e.toJSON == "function") return e.toJSON();
  if (Array.isArray(e)) return e.map(Ss);
  let t = {};
  for (let r of Object.keys(e)) t[r] = Ss(e[r]);
  return t;
}
function Ss(e) {
  return typeof e == "bigint" ? e.toString() : Is(e);
}
var Ec = /^(\s*alter\s)/i,
  ks = ne("prisma:client");
function $n(e, t, r, n) {
  if (
    !(e !== "postgresql" && e !== "cockroachdb") &&
    r.length > 0 &&
    Ec.exec(t)
  )
    throw new Error(`Running ALTER using ${n} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`);
}
var qn =
    ({ clientMethod: e, activeProvider: t }) =>
    (r) => {
      let n = "",
        i;
      if (Array.isArray(r)) {
        let [o, ...s] = r;
        (n = o), (i = { values: rr(s || []), __prismaRawParameters__: !0 });
      } else
        switch (t) {
          case "sqlite":
          case "mysql": {
            (n = r.sql),
              (i = { values: rr(r.values), __prismaRawParameters__: !0 });
            break;
          }
          case "cockroachdb":
          case "postgresql":
          case "postgres": {
            (n = r.text),
              (i = { values: rr(r.values), __prismaRawParameters__: !0 });
            break;
          }
          case "sqlserver": {
            (n = As(r)),
              (i = { values: rr(r.values), __prismaRawParameters__: !0 });
            break;
          }
          default:
            throw new Error(`The ${t} provider does not support ${e}`);
        }
      return (
        i != null && i.values
          ? ks(`prisma.${e}(${n}, ${i.values})`)
          : ks(`prisma.${e}(${n})`),
        { query: n, parameters: i }
      );
    },
  Ds = {
    requestArgsToMiddlewareArgs(e) {
      return [e.strings, ...e.values];
    },
    middlewareArgsToRequestArgs(e) {
      let [t, ...r] = e;
      return new le(t, r);
    },
  },
  Ms = {
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
function Un(e) {
  return function (r) {
    let n,
      i = (o = e) => {
        try {
          return o === void 0 || (o == null ? void 0 : o.kind) === "itx"
            ? n != null
              ? n
              : (n = Os(r(o)))
            : Os(r(o));
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
function Os(e) {
  return typeof e.then == "function" ? e : Promise.resolve(e);
}
d();
c();
p();
f();
m();
var Ns = {
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
  Vn = class {
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
      var t, r;
      return (r =
        (t = globalThis.PRISMA_INSTRUMENTATION) == null ? void 0 : t.helper) !=
        null
        ? r
        : Ns;
    }
  };
function _s(e) {
  return e.includes("tracing") ? new Vn() : Ns;
}
d();
c();
p();
f();
m();
function Ls(e, t = () => {}) {
  let r,
    n = new Promise((i) => (r = i));
  return {
    then(i) {
      return --e === 0 && r(t()), i == null ? void 0 : i(n);
    },
  };
}
d();
c();
p();
f();
m();
var bc = ["$connect", "$disconnect", "$on", "$transaction", "$use", "$extends"],
  Fs = bc;
d();
c();
p();
f();
m();
function Bs(e) {
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
var Vr = class {
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
var qs = Ve(Zi());
d();
c();
p();
f();
m();
function jr(e) {
  return typeof e.batchRequestIdx == "number";
}
d();
c();
p();
f();
m();
function Jr(e) {
  return e === null
    ? e
    : Array.isArray(e)
      ? e.map(Jr)
      : typeof e == "object"
        ? xc(e)
          ? Pc(e)
          : st(e, Jr)
        : e;
}
function xc(e) {
  return e !== null && typeof e == "object" && typeof e.$type == "string";
}
function Pc({ $type: e, value: t }) {
  switch (e) {
    case "BigInt":
      return BigInt(t);
    case "Bytes":
      return w.Buffer.from(t, "base64");
    case "DateTime":
      return new Date(t);
    case "Decimal":
      return new ve(t);
    case "Json":
      return JSON.parse(t);
    default:
      Je(t, "Unknown tagged value");
  }
}
d();
c();
p();
f();
m();
function $s(e) {
  if (e.action !== "findUnique" && e.action !== "findUniqueOrThrow") return;
  let t = [];
  return (
    e.modelName && t.push(e.modelName),
    e.query.arguments && t.push(jn(e.query.arguments)),
    t.push(jn(e.query.selection)),
    t.join("")
  );
}
function jn(e) {
  return `(${Object.keys(e)
    .sort()
    .map((r) => {
      let n = e[r];
      return typeof n == "object" && n !== null ? `(${r} ${jn(n)})` : r;
    })
    .join(" ")})`;
}
d();
c();
p();
f();
m();
var vc = {
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
function Jn(e) {
  return vc[e];
}
d();
c();
p();
f();
m();
var Qr = class {
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
var Tc = ne("prisma:client:request_handler"),
  Gr = class {
    constructor(t, r) {
      (this.logEmitter = r),
        (this.client = t),
        (this.dataloader = new Qr({
          batchLoader: Ho(async ({ requests: n, customDataProxyFetch: i }) => {
            let { transaction: o, otelParentCtx: s } = n[0],
              a = n.map((h) => h.protocolQuery),
              u = this.client._tracingHelper.getTraceParent(s),
              l = n.some((h) => Jn(h.protocolQuery.action));
            return (
              await this.client._engine.requestBatch(a, {
                traceparent: u,
                transaction: Cc(o),
                containsWrite: l,
                customDataProxyFetch: i,
              })
            ).map((h, v) => {
              if (h instanceof Error) return h;
              try {
                return this.mapQueryEngineResult(n[v], h);
              } catch (S) {
                return S;
              }
            });
          }),
          singleLoader: async (n) => {
            var s;
            let i =
                ((s = n.transaction) == null ? void 0 : s.kind) === "itx"
                  ? Us(n.transaction)
                  : void 0,
              o = await this.client._engine.request(n.protocolQuery, {
                traceparent: this.client._tracingHelper.getTraceParent(),
                interactiveTransaction: i,
                isWrite: Jn(n.protocolQuery.action),
                customDataProxyFetch: n.customDataProxyFetch,
              });
            return this.mapQueryEngineResult(n, o);
          },
          batchBy: (n) => {
            var i;
            return (i = n.transaction) != null && i.id
              ? `transaction-${n.transaction.id}`
              : $s(n.protocolQuery);
          },
          batchOrder(n, i) {
            var o, s;
            return ((o = n.transaction) == null ? void 0 : o.kind) ===
              "batch" &&
              ((s = i.transaction) == null ? void 0 : s.kind) === "batch"
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
      let i = n == null ? void 0 : n.data,
        o = n == null ? void 0 : n.elapsed,
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
      if ((Tc(t), Ac(t, i) || t instanceof ke)) throw t;
      if (t instanceof Y && Rc(t)) {
        let u = Vs(t.meta);
        Ur({
          args: o,
          errors: [u],
          callsite: n,
          errorFormat: this.client._errorFormat,
          originalMethod: r,
          clientVersion: this.client._clientVersion,
        });
      }
      let a = t.message;
      if (
        (n &&
          (a = ht({
            callsite: n,
            originalMethod: r,
            isPanic: t.isPanic,
            showColors: this.client._errorFormat === "pretty",
            message: a,
          })),
        (a = this.sanitizeMessage(a)),
        t.code)
      ) {
        let u = s ? { modelName: s, ...t.meta } : t.meta;
        throw new Y(a, {
          code: t.code,
          clientVersion: this.client._clientVersion,
          meta: u,
          batchRequestIdx: t.batchRequestIdx,
        });
      } else {
        if (t.isPanic) throw new De(a, this.client._clientVersion);
        if (t instanceof ue)
          throw new ue(a, {
            clientVersion: this.client._clientVersion,
            batchRequestIdx: t.batchRequestIdx,
          });
        if (t instanceof G) throw new G(a, this.client._clientVersion);
        if (t instanceof De) throw new De(a, this.client._clientVersion);
      }
      throw ((t.clientVersion = this.client._clientVersion), t);
    }
    sanitizeMessage(t) {
      return this.client._errorFormat && this.client._errorFormat !== "pretty"
        ? (0, qs.default)(t)
        : t;
    }
    unpack(t, r, n) {
      if (!t || (t.data && (t = t.data), !t)) return t;
      let i = Object.values(t)[0],
        o = r.filter((a) => a !== "select" && a !== "include"),
        s = Jr(xn(i, o));
      return n ? n(s) : s;
    }
    get [Symbol.toStringTag]() {
      return "RequestHandler";
    }
  };
function Cc(e) {
  if (e) {
    if (e.kind === "batch")
      return { kind: "batch", options: { isolationLevel: e.isolationLevel } };
    if (e.kind === "itx") return { kind: "itx", options: Us(e) };
    Je(e, "Unknown transaction kind");
  }
}
function Us(e) {
  return { id: e.id, payload: e.payload };
}
function Ac(e, t) {
  return (
    jr(e) &&
    (t == null ? void 0 : t.kind) === "batch" &&
    e.batchRequestIdx !== t.index
  );
}
function Rc(e) {
  return e.code === "P2009" || e.code === "P2012";
}
function Vs(e) {
  if (e.kind === "Union") return { kind: "Union", errors: e.errors.map(Vs) };
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
var js = "5.10.2";
var Js = js;
d();
c();
p();
f();
m();
function Qs(e) {
  return e.map((t) => {
    let r = {};
    for (let n of Object.keys(t)) r[n] = Gs(t[n]);
    return r;
  });
}
function Gs({ prisma__type: e, prisma__value: t }) {
  switch (e) {
    case "bigint":
      return BigInt(t);
    case "bytes":
      return w.Buffer.from(t, "base64");
    case "decimal":
      return new ve(t);
    case "datetime":
    case "date":
      return new Date(t);
    case "time":
      return new Date(`1970-01-01T${t}Z`);
    case "array":
      return t.map(Gs);
    default:
      return t;
  }
}
d();
c();
p();
f();
m();
var zs = Ve(Ln());
d();
c();
p();
f();
m();
var J = class extends Error {
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
N(J, "PrismaClientConstructorValidationError");
var Hs = [
    "datasources",
    "datasourceUrl",
    "errorFormat",
    "adapter",
    "log",
    "transactionOptions",
    "__internal",
  ],
  Ws = ["pretty", "colorless", "minimal"],
  Ks = ["info", "query", "warn", "error"],
  Ic = {
    datasources: (e, { datasourceNames: t }) => {
      if (e) {
        if (typeof e != "object" || Array.isArray(e))
          throw new J(
            `Invalid value ${JSON.stringify(e)} for "datasources" provided to PrismaClient constructor`,
          );
        for (let [r, n] of Object.entries(e)) {
          if (!t.includes(r)) {
            let i = xt(r, t) || ` Available datasources: ${t.join(", ")}`;
            throw new J(
              `Unknown datasource ${r} provided to PrismaClient constructor.${i}`,
            );
          }
          if (typeof n != "object" || Array.isArray(n))
            throw new J(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
          if (n && typeof n == "object")
            for (let [i, o] of Object.entries(n)) {
              if (i !== "url")
                throw new J(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
              if (typeof o != "string")
                throw new J(`Invalid value ${JSON.stringify(o)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
            }
        }
      }
    },
    adapter: (e, t) => {
      if (e === null) return;
      if (e === void 0)
        throw new J(
          '"adapter" property must not be undefined, use null to conditionally disable driver adapters.',
        );
      if (!Lr(t).includes("driverAdapters"))
        throw new J(
          '"adapter" property can only be provided to PrismaClient constructor when "driverAdapters" preview feature is enabled.',
        );
      if (At() === "binary")
        throw new J(
          'Cannot use a driver adapter with the "binary" Query Engine. Please use the "library" Query Engine.',
        );
    },
    datasourceUrl: (e) => {
      if (typeof e != "undefined" && typeof e != "string")
        throw new J(`Invalid value ${JSON.stringify(e)} for "datasourceUrl" provided to PrismaClient constructor.
Expected string or undefined.`);
    },
    errorFormat: (e) => {
      if (e) {
        if (typeof e != "string")
          throw new J(
            `Invalid value ${JSON.stringify(e)} for "errorFormat" provided to PrismaClient constructor.`,
          );
        if (!Ws.includes(e)) {
          let t = xt(e, Ws);
          throw new J(
            `Invalid errorFormat ${e} provided to PrismaClient constructor.${t}`,
          );
        }
      }
    },
    log: (e) => {
      if (!e) return;
      if (!Array.isArray(e))
        throw new J(
          `Invalid value ${JSON.stringify(e)} for "log" provided to PrismaClient constructor.`,
        );
      function t(r) {
        if (typeof r == "string" && !Ks.includes(r)) {
          let n = xt(r, Ks);
          throw new J(
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
              let s = xt(i, o);
              throw new J(
                `Invalid value ${JSON.stringify(i)} for "emit" in logLevel provided to PrismaClient constructor.${s}`,
              );
            }
          },
        };
        if (r && typeof r == "object")
          for (let [i, o] of Object.entries(r))
            if (n[i]) n[i](o);
            else
              throw new J(
                `Invalid property ${i} for "log" provided to PrismaClient constructor`,
              );
      }
    },
    transactionOptions: (e) => {
      if (!e) return;
      let t = e.maxWait;
      if (t != null && t <= 0)
        throw new J(
          `Invalid value ${t} for maxWait in "transactionOptions" provided to PrismaClient constructor. maxWait needs to be greater than 0`,
        );
      let r = e.timeout;
      if (r != null && r <= 0)
        throw new J(
          `Invalid value ${r} for timeout in "transactionOptions" provided to PrismaClient constructor. timeout needs to be greater than 0`,
        );
    },
    __internal: (e) => {
      if (!e) return;
      let t = ["debug", "engine", "configOverride"];
      if (typeof e != "object")
        throw new J(
          `Invalid value ${JSON.stringify(e)} for "__internal" to PrismaClient constructor`,
        );
      for (let [r] of Object.entries(e))
        if (!t.includes(r)) {
          let n = xt(r, t);
          throw new J(
            `Invalid property ${JSON.stringify(r)} for "__internal" provided to PrismaClient constructor.${n}`,
          );
        }
    },
  };
function Ys(e, t) {
  for (let [r, n] of Object.entries(e)) {
    if (!Hs.includes(r)) {
      let i = xt(r, Hs);
      throw new J(
        `Unknown property ${r} provided to PrismaClient constructor.${i}`,
      );
    }
    Ic[r](n, t);
  }
  if (e.datasourceUrl && e.datasources)
    throw new J(
      'Can not use "datasourceUrl" and "datasources" options at the same time. Pick one of them',
    );
}
function xt(e, t) {
  if (t.length === 0 || typeof e != "string") return "";
  let r = kc(e, t);
  return r ? ` Did you mean "${r}"?` : "";
}
function kc(e, t) {
  if (t.length === 0) return null;
  let r = t.map((i) => ({ value: i, distance: (0, zs.default)(e, i) }));
  r.sort((i, o) => (i.distance < o.distance ? -1 : 1));
  let n = r[0];
  return n.distance < 3 ? n.value : null;
}
d();
c();
p();
f();
m();
function Zs(e) {
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
          u = (l) => {
            o || ((o = !0), r(l));
          };
        for (let l = 0; l < e.length; l++)
          e[l].then(
            (g) => {
              (n[l] = g), a();
            },
            (g) => {
              if (!jr(g)) {
                u(g);
                return;
              }
              g.batchRequestIdx === l ? u(g) : (i || (i = g), a());
            },
          );
      });
}
var Be = ne("prisma:client");
typeof globalThis == "object" && (globalThis.NODE_CLIENT = !0);
var Dc = {
    requestArgsToMiddlewareArgs: (e) => e,
    middlewareArgsToRequestArgs: (e) => e,
  },
  Mc = Symbol.for("prisma.client.transaction.id"),
  Oc = {
    id: 0,
    nextId() {
      return ++this.id;
    },
  };
function Nc(e) {
  class t {
    constructor(n) {
      this._originalClient = this;
      this._middlewares = new Vr();
      this._createPrismaPromise = Un();
      this.$extends = $o;
      var u, l, g, h, v, S, A, R, D, M, B, I, L, X;
      (e =
        (g =
          (l =
            (u = n == null ? void 0 : n.__internal) == null
              ? void 0
              : u.configOverride) == null
            ? void 0
            : l.call(u, e)) != null
          ? g
          : e),
        ts(e),
        n && Ys(n, e);
      let i = n != null && n.adapter ? fn(n.adapter) : void 0,
        o = new fr().on("error", () => {});
      (this._extensions = Nr.empty()),
        (this._previewFeatures = Lr(e)),
        (this._clientVersion = (h = e.clientVersion) != null ? h : Js),
        (this._activeProvider = e.activeProvider),
        (this._tracingHelper = _s(this._previewFeatures));
      let s = {
          rootEnvPath:
            e.relativeEnvPaths.rootEnvPath &&
            Ct.resolve(e.dirname, e.relativeEnvPaths.rootEnvPath),
          schemaEnvPath:
            e.relativeEnvPaths.schemaEnvPath &&
            Ct.resolve(e.dirname, e.relativeEnvPaths.schemaEnvPath),
        },
        a = (v = e.injectableEdgeEnv) == null ? void 0 : v.call(e);
      try {
        let F = n != null ? n : {},
          Ze = (S = F.__internal) != null ? S : {},
          $e = Ze.debug === !0;
        $e && ne.enable("prisma:client");
        let fe = Ct.resolve(e.dirname, e.relativePath);
        wi.existsSync(fe) || (fe = e.dirname),
          Be("dirname", e.dirname),
          Be("relativePath", e.relativePath),
          Be("cwd", fe);
        let qe = Ze.engine || {};
        if (
          (F.errorFormat
            ? (this._errorFormat = F.errorFormat)
            : y.env.NODE_ENV === "production"
              ? (this._errorFormat = "minimal")
              : y.env.NO_COLOR
                ? (this._errorFormat = "colorless")
                : (this._errorFormat = "colorless"),
          (this._runtimeDataModel = e.runtimeDataModel),
          (this._engineConfig = {
            cwd: fe,
            dirname: e.dirname,
            enableDebugLogs: $e,
            allowTriggerPanic: qe.allowTriggerPanic,
            datamodelPath: Ct.join(
              e.dirname,
              (A = e.filename) != null ? A : "schema.prisma",
            ),
            prismaPath: (R = qe.binaryPath) != null ? R : void 0,
            engineEndpoint: qe.endpoint,
            generator: e.generator,
            showColors: this._errorFormat === "pretty",
            logLevel: F.log && Bs(F.log),
            logQueries:
              F.log &&
              !!(typeof F.log == "string"
                ? F.log === "query"
                : F.log.find((Q) =>
                    typeof Q == "string" ? Q === "query" : Q.level === "query",
                  )),
            env: (D = a == null ? void 0 : a.parsed) != null ? D : {},
            flags: [],
            engineWasm: e.engineWasm,
            clientVersion: e.clientVersion,
            engineVersion: e.engineVersion,
            previewFeatures: this._previewFeatures,
            activeProvider: e.activeProvider,
            inlineSchema: e.inlineSchema,
            overrideDatasources: rs(F, e.datasourceNames),
            inlineDatasources: e.inlineDatasources,
            inlineSchemaHash: e.inlineSchemaHash,
            tracingHelper: this._tracingHelper,
            transactionOptions: {
              maxWait:
                (B = (M = F.transactionOptions) == null ? void 0 : M.maxWait) !=
                null
                  ? B
                  : 2e3,
              timeout:
                (L = (I = F.transactionOptions) == null ? void 0 : I.timeout) !=
                null
                  ? L
                  : 5e3,
              isolationLevel:
                (X = F.transactionOptions) == null ? void 0 : X.isolationLevel,
            },
            logEmitter: o,
            isBundled: e.isBundled,
            adapter: i,
          }),
          (this._accelerateEngineConfig = {
            ...this._engineConfig,
            accelerateUtils: {
              resolveDatasourceUrl: yt,
              getBatchRequestPayload: yr,
              prismaGraphQLToJSError: $t,
              PrismaClientUnknownRequestError: ue,
              PrismaClientInitializationError: G,
              PrismaClientKnownRequestError: Y,
              debug: ne("prisma:client:accelerateEngine"),
              engineVersion: ea.version,
              clientVersion: e.clientVersion,
            },
          }),
          Be("clientVersion", e.clientVersion),
          (this._engine = ps(e, this._engineConfig)),
          (this._requestHandler = new Gr(this, o)),
          F.log)
        )
          for (let Q of F.log) {
            let Ae =
              typeof Q == "string" ? Q : Q.emit === "stdout" ? Q.level : null;
            Ae &&
              this.$on(Ae, (Ue) => {
                var Xe;
                ot.log(
                  `${(Xe = ot.tags[Ae]) != null ? Xe : ""}`,
                  Ue.message || Ue.query,
                );
              });
          }
        this._metrics = new St(this._engine);
      } catch (F) {
        throw ((F.clientVersion = this._clientVersion), F);
      }
      return (this._appliedParent = qt(this));
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
        Ui();
      }
    }
    $executeRawInternal(n, i, o, s) {
      let a = this._activeProvider;
      return this._request({
        action: "executeRaw",
        args: o,
        transaction: n,
        clientMethod: i,
        argsMapper: qn({ clientMethod: i, activeProvider: a }),
        callsite: Fe(this._errorFormat),
        dataPath: [],
        middlewareArgsMapper: s,
      });
    }
    $executeRaw(n, ...i) {
      return this._createPrismaPromise((o) => {
        if (n.raw !== void 0 || n.sql !== void 0) {
          let [s, a] = Xs(n, i);
          return (
            $n(
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
        throw new te(
          "`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n",
          { clientVersion: this._clientVersion },
        );
      });
    }
    $executeRawUnsafe(n, ...i) {
      return this._createPrismaPromise(
        (o) => (
          $n(
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
        throw new te(
          `The ${e.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`,
          { clientVersion: this._clientVersion },
        );
      return this._createPrismaPromise((i) =>
        this._request({
          args: n,
          clientMethod: "$runCommandRaw",
          dataPath: [],
          action: "runCommandRaw",
          argsMapper: Cs,
          callsite: Fe(this._errorFormat),
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
        argsMapper: qn({ clientMethod: i, activeProvider: a }),
        callsite: Fe(this._errorFormat),
        dataPath: [],
        middlewareArgsMapper: s,
      }).then(Qs);
    }
    $queryRaw(n, ...i) {
      return this._createPrismaPromise((o) => {
        if (n.raw !== void 0 || n.sql !== void 0)
          return this.$queryRawInternal(o, "$queryRaw", ...Xs(n, i));
        throw new te(
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
      let o = Oc.nextId(),
        s = Ls(n.length),
        a = n.map((u, l) => {
          var v, S, A;
          if ((u == null ? void 0 : u[Symbol.toStringTag]) !== "PrismaPromise")
            throw new Error(
              "All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.",
            );
          let g =
              (v = i == null ? void 0 : i.isolationLevel) != null
                ? v
                : this._engineConfig.transactionOptions.isolationLevel,
            h = { kind: "batch", id: o, index: l, isolationLevel: g, lock: s };
          return (A =
            (S = u.requestTransaction) == null ? void 0 : S.call(u, h)) != null
            ? A
            : u;
        });
      return Zs(a);
    }
    async _transactionWithCallback({ callback: n, options: i }) {
      var l, g, h;
      let o = { traceparent: this._tracingHelper.getTraceParent() },
        s = {
          maxWait:
            (l = i == null ? void 0 : i.maxWait) != null
              ? l
              : this._engineConfig.transactionOptions.maxWait,
          timeout:
            (g = i == null ? void 0 : i.timeout) != null
              ? g
              : this._engineConfig.transactionOptions.timeout,
          isolationLevel:
            (h = i == null ? void 0 : i.isolationLevel) != null
              ? h
              : this._engineConfig.transactionOptions.isolationLevel,
        },
        a = await this._engine.transaction("start", o, s),
        u;
      try {
        let v = { kind: "itx", ...a };
        (u = await n(this._createItxClient(v))),
          await this._engine.transaction("commit", o, a);
      } catch (v) {
        throw (
          (await this._engine.transaction("rollback", o, a).catch(() => {}), v)
        );
      }
      return u;
    }
    _createItxClient(n) {
      return qt(
        ge(Bo(this), [
          ie("_appliedParent", () => this._appliedParent._createItxClient(n)),
          ie("_createPrismaPromise", () => Un(n)),
          ie(Mc, () => n.id),
          Lt(Fs),
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
      var l;
      n.otelParentCtx = this._tracingHelper.getActiveContext();
      let i = (l = n.middlewareArgsMapper) != null ? l : Dc,
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
        u = async (g) => {
          let h = this._middlewares.get(++a);
          if (h)
            return this._tracingHelper.runInChildSpan(s.middleware, (M) =>
              h(g, (B) => (M == null || M.end(), u(B))),
            );
          let { runInTransaction: v, args: S, ...A } = g,
            R = { ...n, ...A };
          S && (R.args = i.middlewareArgsToRequestArgs(S)),
            n.transaction !== void 0 && v === !1 && delete R.transaction;
          let D = await Go(this, R);
          return R.model
            ? Vo({
                result: D,
                modelName: R.model,
                args: R.args,
                extensions: this._extensions,
                runtimeDataModel: this._runtimeDataModel,
              })
            : D;
        };
      return this._tracingHelper.runInChildSpan(s.operation, () => u(o));
    }
    async _executeRequest({
      args: n,
      clientMethod: i,
      dataPath: o,
      callsite: s,
      action: a,
      model: u,
      argsMapper: l,
      transaction: g,
      unpacker: h,
      otelParentCtx: v,
      customDataProxyFetch: S,
    }) {
      try {
        n = l ? l(n) : n;
        let A = { name: "serialize" },
          R = this._tracingHelper.runInChildSpan(A, () =>
            Ps({
              modelName: u,
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
          ne.enabled("prisma:client") &&
            (Be("Prisma Client call:"),
            Be(`prisma.${i}(${Ro(n)})`),
            Be("Generated request:"),
            Be(
              JSON.stringify(R, null, 2) +
                `
`,
            )),
          (g == null ? void 0 : g.kind) === "batch" && (await g.lock),
          this._requestHandler.request({
            protocolQuery: R,
            modelName: u,
            action: a,
            clientMethod: i,
            dataPath: o,
            callsite: s,
            args: n,
            extensions: this._extensions,
            transaction: g,
            unpacker: h,
            otelParentCtx: v,
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
        throw new te(
          "`metrics` preview feature must be enabled in order to access metrics API",
          { clientVersion: this._clientVersion },
        );
      return this._metrics;
    }
    _hasPreviewFlag(n) {
      var i;
      return !!(
        (i = this._engineConfig.previewFeatures) != null && i.includes(n)
      );
    }
  }
  return t;
}
function Xs(e, t) {
  return _c(e) ? [new le(e, t), Ds] : [e, Ms];
}
function _c(e) {
  return Array.isArray(e) && Array.isArray(e.raw);
}
d();
c();
p();
f();
m();
var Lc = new Set([
  "toJSON",
  "$$typeof",
  "asymmetricMatch",
  Symbol.iterator,
  Symbol.toStringTag,
  Symbol.isConcatSpreadable,
  Symbol.toPrimitive,
]);
function Fc(e) {
  return new Proxy(e, {
    get(t, r) {
      if (r in t) return t[r];
      if (!Lc.has(r)) throw new TypeError(`Invalid enum value: ${String(r)}`);
    },
  });
}
d();
c();
p();
f();
m();
var export_warnEnvConflicts = void 0;
export {
  qi as Debug,
  ve as Decimal,
  gi as Extensions,
  St as MetricsClient,
  ke as NotFoundError,
  G as PrismaClientInitializationError,
  Y as PrismaClientKnownRequestError,
  De as PrismaClientRustPanicError,
  ue as PrismaClientUnknownRequestError,
  te as PrismaClientValidationError,
  yi as Public,
  le as Sql,
  Xa as defineDmmfProperty,
  Cn as detectRuntime,
  ou as empty,
  Nc as getPrismaClient,
  iu as join,
  Fc as makeStrictEnum,
  ln as objectEnumValues,
  no as raw,
  io as sqltag,
  export_warnEnvConflicts as warnEnvConflicts,
  mr as warnOnce,
};
//# sourceMappingURL=edge-esm.js.map
