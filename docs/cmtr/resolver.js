const didDocs = require("./didDocs");

const resolver = {
  resolve: did => {
    if (didDocs[did]) {
      return didDocs[did];
    }
    throw new Error("DID not resolved by mock resolver.");
  }
};

module.exports = resolver;
