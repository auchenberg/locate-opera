#!/usr/bin/env node

var locateOpera = require('./');

locateOpera().then(function(r) {
  console.log(r);
});
