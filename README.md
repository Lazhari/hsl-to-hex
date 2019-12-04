# hsl-to-hex

[![Build Status](https://travis-ci.org/Lazhari/hsl-to-hex.svg?branch=master)](https://travis-ci.org/Lazhari/hsl-to-hex)

Convert HSL colors to RGB colors in hex format.

## Install

```sh
npm install --save @lazhari/hsl-to-hex
```

## API

```
require('hsl-to-hex') => Function
hsl(hue, saturation, luminosity) => String
```

## Example

```js
const hsl = require("@lazhari/hsl-to-hex");
const hue = 133;
const saturation = 40;
const luminosity = 60;
const hex = hsl(hue, saturation, luminosity);
console.log(hex); // #70c282
```

## License

MIT
