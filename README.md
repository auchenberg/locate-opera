# locate-opera [![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

Find Opera on your system.

Based on [`locate-chrome`](https://github.com/davidtheclark/locate-chrome).

## Usage

```js
var locateOpera = require('locate-opera');
// Use a callback
locateOpera(function(l) {
  console.log(l);
});
// Use the returned Promise
locateOpera.then(function(l) {
  console.log(l);
});
```

### CLI Usage

`stdout` path to Opera (or `null`):
```bash
> locate-opera
# /Applications/Opera.app/Contents/MacOS/Opera
```

Open Opera (you'll need to use quotes if Opera's path has spaces in it):

```bash
> "`locate-opera`"
```
