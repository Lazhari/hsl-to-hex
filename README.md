# hsl-to-hex

[![Build Status](https://travis-ci.org/Lazhari/hsl-to-hex.svg?branch=master)](https://travis-ci.org/Lazhari/hsl-to-hex)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Lazhari_hsl-to-hex&metric=alert_status)](https://sonarcloud.io/dashboard?id=Lazhari_hsl-to-hex)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=Lazhari_hsl-to-hex&metric=coverage)](https://sonarcloud.io/dashboard?id=Lazhari_hsl-to-hex)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=Lazhari_hsl-to-hex&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=Lazhari_hsl-to-hex)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=Lazhari_hsl-to-hex&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=Lazhari_hsl-to-hex)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=Lazhari_hsl-to-hex&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=Lazhari_hsl-to-hex)

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
