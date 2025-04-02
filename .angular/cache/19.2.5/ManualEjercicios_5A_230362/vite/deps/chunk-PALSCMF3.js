import {
  fitToRange,
  hasValue,
  registry
} from "./chunk-G66GNOZZ.js";
import {
  __export
} from "./chunk-JADFG2II.js";

// node_modules/@amcharts/amcharts4/.internal/core/utils/Colors.js
var Colors_exports = {};
__export(Colors_exports, {
  brighten: () => brighten,
  getBrightnessStep: () => getBrightnessStep,
  getLightnessStep: () => getLightnessStep,
  hexToRgb: () => hexToRgb,
  hexToRgbWithAlpha: () => hexToRgbWithAlpha,
  hslToRgb: () => hslToRgb,
  hsvToRgb: () => hsvToRgb,
  interpolate: () => interpolate,
  isLight: () => isLight,
  lighten: () => lighten,
  pad2: () => pad2,
  rgb: () => rgb,
  rgbToHex: () => rgbToHex,
  rgbToHsl: () => rgbToHsl,
  rgbToHsv: () => rgbToHsv,
  rgbToRGBA: () => rgbToRGBA,
  rgbaToRgb: () => rgbaToRgb,
  saturate: () => saturate
});
var namedColors = {
  aliceblue: {
    r: 240,
    g: 248,
    b: 255
  },
  antiquewhite: {
    r: 250,
    g: 235,
    b: 215
  },
  aqua: {
    r: 0,
    g: 255,
    b: 255
  },
  aquamarine: {
    r: 127,
    g: 255,
    b: 212
  },
  azure: {
    r: 240,
    g: 255,
    b: 255
  },
  beige: {
    r: 245,
    g: 245,
    b: 220
  },
  bisque: {
    r: 255,
    g: 228,
    b: 196
  },
  black: {
    r: 0,
    g: 0,
    b: 0
  },
  blanchedalmond: {
    r: 255,
    g: 235,
    b: 205
  },
  blue: {
    r: 0,
    g: 0,
    b: 255
  },
  blueviolet: {
    r: 138,
    g: 43,
    b: 226
  },
  brown: {
    r: 165,
    g: 42,
    b: 42
  },
  burlywood: {
    r: 222,
    g: 184,
    b: 135
  },
  cadetblue: {
    r: 95,
    g: 158,
    b: 160
  },
  chartreuse: {
    r: 127,
    g: 255,
    b: 0
  },
  chocolate: {
    r: 210,
    g: 105,
    b: 30
  },
  coral: {
    r: 255,
    g: 127,
    b: 80
  },
  cornflowerblue: {
    r: 100,
    g: 149,
    b: 237
  },
  cornsilk: {
    r: 255,
    g: 248,
    b: 220
  },
  crimson: {
    r: 220,
    g: 20,
    b: 60
  },
  cyan: {
    r: 0,
    g: 255,
    b: 255
  },
  darkblue: {
    r: 0,
    g: 0,
    b: 139
  },
  darkcyan: {
    r: 0,
    g: 139,
    b: 139
  },
  darkgoldenrod: {
    r: 184,
    g: 134,
    b: 11
  },
  darkgray: {
    r: 169,
    g: 169,
    b: 169
  },
  darkgrey: {
    r: 169,
    g: 169,
    b: 169
  },
  darkgreen: {
    r: 0,
    g: 100,
    b: 0
  },
  darkkhaki: {
    r: 189,
    g: 183,
    b: 107
  },
  darkmagenta: {
    r: 139,
    g: 0,
    b: 139
  },
  darkolivegreen: {
    r: 85,
    g: 107,
    b: 47
  },
  darkorange: {
    r: 255,
    g: 140,
    b: 0
  },
  darkorchid: {
    r: 153,
    g: 50,
    b: 204
  },
  darkred: {
    r: 139,
    g: 0,
    b: 0
  },
  darksalmon: {
    r: 233,
    g: 150,
    b: 122
  },
  darkseagreen: {
    r: 143,
    g: 188,
    b: 143
  },
  darkslateblue: {
    r: 72,
    g: 61,
    b: 139
  },
  darkslategray: {
    r: 47,
    g: 79,
    b: 79
  },
  darkslategrey: {
    r: 47,
    g: 79,
    b: 79
  },
  darkturquoise: {
    r: 0,
    g: 206,
    b: 209
  },
  darkviolet: {
    r: 148,
    g: 0,
    b: 211
  },
  deeppink: {
    r: 255,
    g: 20,
    b: 147
  },
  deepskyblue: {
    r: 0,
    g: 191,
    b: 255
  },
  dimgray: {
    r: 105,
    g: 105,
    b: 105
  },
  dimgrey: {
    r: 105,
    g: 105,
    b: 105
  },
  dodgerblue: {
    r: 30,
    g: 144,
    b: 255
  },
  firebrick: {
    r: 178,
    g: 34,
    b: 34
  },
  floralwhite: {
    r: 255,
    g: 250,
    b: 240
  },
  forestgreen: {
    r: 34,
    g: 139,
    b: 34
  },
  fuchsia: {
    r: 255,
    g: 0,
    b: 255
  },
  gainsboro: {
    r: 220,
    g: 220,
    b: 220
  },
  ghostwhite: {
    r: 248,
    g: 248,
    b: 255
  },
  gold: {
    r: 255,
    g: 215,
    b: 0
  },
  goldenrod: {
    r: 218,
    g: 165,
    b: 32
  },
  gray: {
    r: 128,
    g: 128,
    b: 128
  },
  grey: {
    r: 128,
    g: 128,
    b: 128
  },
  green: {
    r: 0,
    g: 128,
    b: 0
  },
  greenyellow: {
    r: 173,
    g: 255,
    b: 47
  },
  honeydew: {
    r: 240,
    g: 255,
    b: 240
  },
  hotpink: {
    r: 255,
    g: 105,
    b: 180
  },
  indianred: {
    r: 205,
    g: 92,
    b: 92
  },
  indigo: {
    r: 75,
    g: 0,
    b: 130
  },
  ivory: {
    r: 255,
    g: 255,
    b: 240
  },
  khaki: {
    r: 240,
    g: 230,
    b: 140
  },
  lavender: {
    r: 230,
    g: 230,
    b: 250
  },
  lavenderblush: {
    r: 255,
    g: 240,
    b: 245
  },
  lawngreen: {
    r: 124,
    g: 252,
    b: 0
  },
  lemonchiffon: {
    r: 255,
    g: 250,
    b: 205
  },
  lightblue: {
    r: 173,
    g: 216,
    b: 230
  },
  lightcoral: {
    r: 240,
    g: 128,
    b: 128
  },
  lightcyan: {
    r: 224,
    g: 255,
    b: 255
  },
  lightgoldenrodyellow: {
    r: 250,
    g: 250,
    b: 210
  },
  lightgray: {
    r: 211,
    g: 211,
    b: 211
  },
  lightgrey: {
    r: 211,
    g: 211,
    b: 211
  },
  lightgreen: {
    r: 144,
    g: 238,
    b: 144
  },
  lightpink: {
    r: 255,
    g: 182,
    b: 193
  },
  lightsalmon: {
    r: 255,
    g: 160,
    b: 122
  },
  lightseagreen: {
    r: 32,
    g: 178,
    b: 170
  },
  lightskyblue: {
    r: 135,
    g: 206,
    b: 250
  },
  lightslategray: {
    r: 119,
    g: 136,
    b: 153
  },
  lightslategrey: {
    r: 119,
    g: 136,
    b: 153
  },
  lightsteelblue: {
    r: 176,
    g: 196,
    b: 222
  },
  lightyellow: {
    r: 255,
    g: 255,
    b: 224
  },
  lime: {
    r: 0,
    g: 255,
    b: 0
  },
  limegreen: {
    r: 50,
    g: 205,
    b: 50
  },
  linen: {
    r: 250,
    g: 240,
    b: 230
  },
  magenta: {
    r: 255,
    g: 0,
    b: 255
  },
  maroon: {
    r: 128,
    g: 0,
    b: 0
  },
  mediumaquamarine: {
    r: 102,
    g: 205,
    b: 170
  },
  mediumblue: {
    r: 0,
    g: 0,
    b: 205
  },
  mediumorchid: {
    r: 186,
    g: 85,
    b: 211
  },
  mediumpurple: {
    r: 147,
    g: 112,
    b: 219
  },
  mediumseagreen: {
    r: 60,
    g: 179,
    b: 113
  },
  mediumslateblue: {
    r: 123,
    g: 104,
    b: 238
  },
  mediumspringgreen: {
    r: 0,
    g: 250,
    b: 154
  },
  mediumturquoise: {
    r: 72,
    g: 209,
    b: 204
  },
  mediumvioletred: {
    r: 199,
    g: 21,
    b: 133
  },
  midnightblue: {
    r: 25,
    g: 25,
    b: 112
  },
  mintcream: {
    r: 245,
    g: 255,
    b: 250
  },
  mistyrose: {
    r: 255,
    g: 228,
    b: 225
  },
  moccasin: {
    r: 255,
    g: 228,
    b: 181
  },
  navajowhite: {
    r: 255,
    g: 222,
    b: 173
  },
  navy: {
    r: 0,
    g: 0,
    b: 128
  },
  oldlace: {
    r: 253,
    g: 245,
    b: 230
  },
  olive: {
    r: 128,
    g: 128,
    b: 0
  },
  olivedrab: {
    r: 107,
    g: 142,
    b: 35
  },
  orange: {
    r: 255,
    g: 165,
    b: 0
  },
  orangered: {
    r: 255,
    g: 69,
    b: 0
  },
  orchid: {
    r: 218,
    g: 112,
    b: 214
  },
  palegoldenrod: {
    r: 238,
    g: 232,
    b: 170
  },
  palegreen: {
    r: 152,
    g: 251,
    b: 152
  },
  paleturquoise: {
    r: 175,
    g: 238,
    b: 238
  },
  palevioletred: {
    r: 219,
    g: 112,
    b: 147
  },
  papayawhip: {
    r: 255,
    g: 239,
    b: 213
  },
  peachpuff: {
    r: 255,
    g: 218,
    b: 185
  },
  peru: {
    r: 205,
    g: 133,
    b: 63
  },
  pink: {
    r: 255,
    g: 192,
    b: 203
  },
  plum: {
    r: 221,
    g: 160,
    b: 221
  },
  powderblue: {
    r: 176,
    g: 224,
    b: 230
  },
  purple: {
    r: 128,
    g: 0,
    b: 128
  },
  rebeccapurple: {
    r: 102,
    g: 51,
    b: 153
  },
  red: {
    r: 255,
    g: 0,
    b: 0
  },
  rosybrown: {
    r: 188,
    g: 143,
    b: 143
  },
  royalblue: {
    r: 65,
    g: 105,
    b: 225
  },
  saddlebrown: {
    r: 139,
    g: 69,
    b: 19
  },
  salmon: {
    r: 250,
    g: 128,
    b: 114
  },
  sandybrown: {
    r: 244,
    g: 164,
    b: 96
  },
  seagreen: {
    r: 46,
    g: 139,
    b: 87
  },
  seashell: {
    r: 255,
    g: 245,
    b: 238
  },
  sienna: {
    r: 160,
    g: 82,
    b: 45
  },
  silver: {
    r: 192,
    g: 192,
    b: 192
  },
  skyblue: {
    r: 135,
    g: 206,
    b: 235
  },
  slateblue: {
    r: 106,
    g: 90,
    b: 205
  },
  slategray: {
    r: 112,
    g: 128,
    b: 144
  },
  slategrey: {
    r: 112,
    g: 128,
    b: 144
  },
  snow: {
    r: 255,
    g: 250,
    b: 250
  },
  springgreen: {
    r: 0,
    g: 255,
    b: 127
  },
  steelblue: {
    r: 70,
    g: 130,
    b: 180
  },
  tan: {
    r: 210,
    g: 180,
    b: 140
  },
  teal: {
    r: 0,
    g: 128,
    b: 128
  },
  thistle: {
    r: 216,
    g: 191,
    b: 216
  },
  tomato: {
    r: 255,
    g: 99,
    b: 71
  },
  turquoise: {
    r: 64,
    g: 224,
    b: 208
  },
  violet: {
    r: 238,
    g: 130,
    b: 238
  },
  wheat: {
    r: 245,
    g: 222,
    b: 179
  },
  white: {
    r: 255,
    g: 255,
    b: 255
  },
  whitesmoke: {
    r: 245,
    g: 245,
    b: 245
  },
  yellow: {
    r: 255,
    g: 255,
    b: 0
  },
  yellowgreen: {
    r: 154,
    g: 205,
    b: 50
  }
};
function rgb(color2, alpha) {
  var rgb2;
  if (namedColors[color2]) {
    rgb2 = namedColors[color2];
  } else if (color2.charAt(0) === "#") {
    rgb2 = hexToRgb(color2);
  } else if (color2.match(/^rgba?\(/)) {
    rgb2 = rgbaToRgb(color2);
  }
  if (!rgb2) {
    rgb2 = {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    };
  }
  if (hasValue(alpha)) {
    rgb2.a = alpha;
  }
  return rgb2;
}
function hexToRgb(hex) {
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : hexToRgbWithAlpha(hex);
}
function hexToRgbWithAlpha(hex) {
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b, a) {
    return r + r + g + g + b + b + a + a;
  });
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
    a: parseInt(result[4], 16) / 256
  } : void 0;
}
function rgbaToRgb(color2) {
  color2 = color2.replace(/[ ]/g, "");
  var matches = color2.match(/^rgb\(([0-9]*),([0-9]*),([0-9]*)\)/i);
  if (matches) {
    matches.push("1");
  } else {
    matches = color2.match(/^rgba\(([0-9]*),([0-9]*),([0-9]*),([.0-9]*)\)/i);
    if (!matches) {
      return;
    }
  }
  return {
    r: parseInt(matches[1]),
    g: parseInt(matches[2]),
    b: parseInt(matches[3]),
    a: parseFloat(matches[4])
  };
}
function rgbToHex(rgb2) {
  return "#" + pad2(rgb2.r.toString(16)) + pad2(rgb2.g.toString(16)) + pad2(rgb2.b.toString(16));
}
function rgbToRGBA(rgb2) {
  if (hasValue(rgb2.a) && rgb2.a !== 1) {
    return "rgba(" + rgb2.r + "," + rgb2.g + "," + rgb2.b + "," + rgb2.a + ")";
  } else {
    return "rgb(" + rgb2.r + "," + rgb2.g + "," + rgb2.b + ")";
  }
}
function pad2(c) {
  return c.length == 1 ? "0" + c : "" + c;
}
function interpolate(rgb1, rgb2, percent) {
  percent = fitToRange(percent, 0, 1);
  if (rgb1) {
    if (rgb2) {
      return {
        r: rgb1.r + Math.round((rgb2.r - rgb1.r) * percent),
        g: rgb1.g + Math.round((rgb2.g - rgb1.g) * percent),
        b: rgb1.b + Math.round((rgb2.b - rgb1.b) * percent),
        a: (rgb1.a || 1) + Math.round(((rgb2.a || 1) - (rgb1.a || 1)) * percent)
      };
    } else {
      return rgb1;
    }
  } else if (rgb2) {
    return rgb2;
  } else {
    return rgb1;
  }
}
function lighten(rgb2, percent) {
  if (rgb2) {
    return {
      r: Math.max(0, Math.min(255, rgb2.r + getLightnessStep(rgb2.r, percent))),
      g: Math.max(0, Math.min(255, rgb2.g + getLightnessStep(rgb2.g, percent))),
      b: Math.max(0, Math.min(255, rgb2.b + getLightnessStep(rgb2.b, percent))),
      a: rgb2.a
    };
  } else {
    return rgb2;
  }
}
function getLightnessStep(value, percent) {
  var base = percent > 0 ? 255 - value : value;
  return Math.round(base * percent);
}
function brighten(rgb2, percent) {
  if (rgb2) {
    var base = Math.min(Math.max(rgb2.r, rgb2.g, rgb2.b), 230);
    var step = getLightnessStep(base, percent);
    return {
      r: Math.max(0, Math.min(255, Math.round(rgb2.r + step))),
      g: Math.max(0, Math.min(255, Math.round(rgb2.g + step))),
      b: Math.max(0, Math.min(255, Math.round(rgb2.b + step))),
      a: rgb2.a
    };
  } else {
    return rgb2;
  }
}
function getBrightnessStep(value, percent) {
  var base = 255;
  return Math.round(base * percent);
}
function saturate(rgb2, saturation) {
  if (rgb2 == null || saturation == 1) {
    return rgb2;
  }
  var hsl = rgbToHsl(rgb2);
  hsl.s = saturation;
  return hslToRgb(hsl);
}
function hslToRgb(color2) {
  var r, g, b;
  var h = color2.h;
  var s = color2.s;
  var l = color2.l;
  if (s == 0) {
    r = g = b = l;
  } else {
    var hue2rgb = function hue2rgb2(p2, q2, t) {
      if (t < 0) {
        t += 1;
      }
      if (t > 1) {
        t -= 1;
      }
      if (t < 1 / 6) {
        return p2 + (q2 - p2) * 6 * t;
      }
      if (t < 1 / 2) {
        return q2;
      }
      if (t < 2 / 3) {
        return p2 + (q2 - p2) * (2 / 3 - t) * 6;
      }
      return p2;
    };
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255)
  };
}
function rgbToHsl(color2) {
  var r = color2.r / 255;
  var g = color2.g / 255;
  var b = color2.b / 255;
  var max = Math.max(r, g, b);
  var min = Math.min(r, g, b);
  var h = 0;
  var s = 0;
  var l = (max + min) / 2;
  if (max === min) {
    h = s = 0;
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return {
    h,
    s,
    l
  };
}
function rgbToHsv(color2) {
  var r = color2.r / 255;
  var g = color2.g / 255;
  var b = color2.b / 255;
  var max = Math.max(r, g, b), min = Math.min(r, g, b);
  var h = 0;
  var s = 0;
  var v = max;
  var d = max - min;
  s = max == 0 ? 0 : d / max;
  if (max == min) {
    h = 0;
  } else {
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return {
    h,
    s,
    v
  };
}
function hsvToRgb(color2) {
  var r = 0;
  var g = 0;
  var b = 0;
  var h = color2.h;
  var s = color2.s;
  var v = color2.v;
  var i = Math.floor(h * 6);
  var f = h * 6 - i;
  var p = v * (1 - s);
  var q = v * (1 - f * s);
  var t = v * (1 - (1 - f) * s);
  switch (i % 6) {
    case 0:
      r = v;
      g = t;
      b = p;
      break;
    case 1:
      r = q;
      g = v;
      b = p;
      break;
    case 2:
      r = p;
      g = v;
      b = t;
      break;
    case 3:
      r = p;
      g = q;
      b = v;
      break;
    case 4:
      r = t;
      g = p;
      b = v;
      break;
    case 5:
      r = v;
      g = p;
      b = q;
      break;
  }
  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255)
  };
}
function isLight(color2) {
  return (color2.r * 299 + color2.g * 587 + color2.b * 114) / 1e3 >= 128;
}

// node_modules/@amcharts/amcharts4/.internal/core/utils/Color.js
var Color = (
  /** @class */
  function() {
    function Color2(color2) {
      this._value = color2;
    }
    Object.defineProperty(Color2.prototype, "rgb", {
      /**
       * Returns [[iRGB]] representation of the color.
       *
       * @return RGB object
       */
      get: function() {
        return this._value;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Color2.prototype, "hex", {
      /**
       * Returns color hex value string, e.g. "#FF0000".
       *
       * @return Hex color code
       */
      get: function() {
        return this._value ? rgbToHex(this._value) : "none";
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Color2.prototype, "rgba", {
      /**
       * Returns an `rgba()` representation of the color, e.g.:
       * `rgba(255, 0, 0, 0.5)`.
       *
       * @return rgba color string
       */
      get: function() {
        return this._value ? rgbToRGBA(this._value) : "none";
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Color2.prototype, "alpha", {
      /**
       * Returns current transparency.
       *
       * @return Alpha (0-1)
       */
      get: function() {
        if (this._value != null && this._value.a != null) {
          return this._value.a;
        } else {
          return 1;
        }
      },
      /**
       * Set alpha (transparency) of the color.
       *
       * @param value Alpha (0-1)
       */
      set: function(value) {
        if (this._value) {
          this._value.a = value;
        }
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Color2.prototype, "lightColor", {
      /**
       * Returns current light color setting.
       *
       * @return Color
       */
      get: function() {
        if (!this._lightColor) {
          this._lightColor = new Color2({
            r: 255,
            g: 255,
            b: 255
          });
        }
        return this._lightColor;
      },
      /**
       * Sets "light" color. Used when determining contrasting color.
       *
       * @param color Color
       */
      set: function(color2) {
        this._lightColor = color2;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Color2.prototype, "darkColor", {
      /**
       * Returns current dark color setting.
       *
       * @return Color
       */
      get: function() {
        if (!this._darkColor) {
          this._darkColor = new Color2({
            r: 0,
            g: 0,
            b: 0
          });
        }
        return this._darkColor;
      },
      /**
       * Sets "dark" color. Used when determining contrasting color.
       *
       * @param color Color
       */
      set: function(color2) {
        this._darkColor = color2;
      },
      enumerable: true,
      configurable: true
    });
    Color2.prototype.toString = function() {
      return this.alpha < 1 ? this.rgba : this.hex;
    };
    Color2.prototype.lighten = function(percent) {
      return new Color2(lighten(this.rgb, percent));
    };
    Color2.prototype.brighten = function(percent) {
      return new Color2(brighten(this.rgb, percent));
    };
    Color2.prototype.saturate = function(saturation) {
      return new Color2(saturate(this.rgb, saturation));
    };
    Object.defineProperty(Color2.prototype, "alternative", {
      /**
       * Returns a either light or dark color that contrasts specifically with
       * this color.
       *
       * Uses properties `darkColor` (default black) and `lightColor` (default
       * white).
       *
       * Useful when determining which color label should be on a colored
       * background, so that it stands out.
       *
       * @return Contrasting color
       */
      get: function() {
        if (this.rgb != null) {
          return isLight(this.rgb) ? this.darkColor : this.lightColor;
        } else {
          throw new Error("Color does not exist");
        }
      },
      enumerable: true,
      configurable: true
    });
    return Color2;
  }()
);
function color(value, alpha) {
  if (!hasValue(value)) {
    return new Color(void 0);
  }
  if (typeof value == "string") {
    var cacheId = "_color_" + value + "_" + (alpha || "1");
    var cached = registry.getCache(cacheId);
    if (cached) {
      return new Color({
        r: cached.r,
        g: cached.g,
        b: cached.b,
        a: cached.a
      });
    }
    var rgb2 = rgb(value, alpha);
    registry.setCache(cacheId, rgb2);
    return new Color(rgb2);
  }
  if (value instanceof Color) {
    if (hasValue(alpha)) {
      value.alpha = alpha;
    }
    return value;
  }
  return new Color(value);
}
function isColor(value) {
  return value instanceof Color;
}
function castColor(value) {
  return color(value);
}
function toColor(value) {
  if (hasValue(value) && !isColor(value)) {
    return castColor(value);
  }
  return value;
}

export {
  interpolate,
  hslToRgb,
  rgbToHsl,
  Colors_exports,
  Color,
  color,
  isColor,
  castColor,
  toColor
};
//# sourceMappingURL=chunk-PALSCMF3.js.map
