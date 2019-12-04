const toRgb = require("hsl-to-rgb-for-reals");
const debug = require("debug")("hsl-to-hex");

function max(val, n) {
  debug(`ensuring ${val} is no more than ${n}`);
  return val > n ? n : val;
}

function min(val, n) {
  debug(`ensuring ${val} is no less than ${n}`);
  return val < n ? n : val;
}

function cycle(val) {
  debug(`resolving ${val} within the 0-259 range`);
  val = max(val, 1e7);
  val = min(val, -1e7);
  while (val < 0) {
    val += 360;
  }
  while (val > 359) {
    val -= 360;
  }
  return val;
}

function hsl(hue, saturation, luminosity) {
  hue = cycle(hue);
  saturation = min(max(saturation, 100), 0);
  luminosity = min(max(luminosity, 100), 0);

  saturation /= 100;
  luminosity /= 100;

  const rgb = toRgb(hue, saturation, luminosity);

  return `#${rgb.map(n => (256 + n).toString(16).substr(-2)).join("")}`;
}

module.exports = hsl;
