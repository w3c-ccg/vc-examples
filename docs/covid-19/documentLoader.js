const fs = require("fs");
const path = require("path");

const jsonld = require("jsonld");

const resolver = require("./resolver");

const loadContext = (relativePath) => {
  return JSON.parse(
    fs.readFileSync(path.resolve(__dirname, relativePath)).toString()
  );
};

const contexts = {
  "https://www.w3.org/2018/credentials/v1": loadContext(
    "../contexts/credentials-v1.jsonld"
  ),
  "https://w3id.org/did/v0.11": loadContext("../contexts/did-v0.11.jsonld"),

  "https://w3c-ccg.github.io/vc-examples/covid-19/v1/v1.jsonld": loadContext(
    "./v1/v1.jsonld"
  ),
};

const documentLoader = async (url) => {
  // console.log(url);
  if (url.indexOf("did:") === 0) {
    const didDoc = resolver.resolve(url);
    return {
      contextUrl: null, // this is for a context via a link header
      document: didDoc, // this is the actual document that was loaded
      documentUrl: url, // this is the actual context URL after redirects
    };
  }

  const context = contexts[url];

  if (context) {
    return {
      contextUrl: null, // this is for a context via a link header
      document: context, // this is the actual document that was loaded
      documentUrl: url, // this is the actual context URL after redirects
    };
  }

  console.error("No custom context support for " + url);
  throw new Error("No custom context support for " + url);
};

module.exports = documentLoader;
