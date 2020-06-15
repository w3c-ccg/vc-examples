const transmute = require('./transmute');
const digital_bazaar = require('./digital_bazaar');
const danubetech = require('./danubetech');
const mavennet = require('./mavennet');
const trustbloc = require('./trustbloc');
const factom = require('./factom');
const sicpa = require('./sicpa');
const dock = require('./dock');

const vendor_map = {
  transmute,
  digital_bazaar,
  danubetech,
  mavennet,
  trustbloc,
  factom,
  sicpa,
  dock,
};

let vendors = [];

if(process.env.INTEROP_FOCUS) {
  vendors = [vendor_map[process.env.INTEROP_FOCUS]];
} else {
  vendors = Object.values(vendor_map);
}

module.exports = vendors;
