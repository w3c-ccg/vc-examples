const didDocs = require("./didDocs");

const resolver = {
  resolve: (did) => {
    let withoutFragment = did.split("#")[0];
    if (didDocs[withoutFragment]) {
      return didDocs[withoutFragment];
    }
    throw new Error("DID not resolved by mock resolver.");
  },
};

module.exports = resolver;
