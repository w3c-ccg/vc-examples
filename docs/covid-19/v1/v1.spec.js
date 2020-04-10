const fs = require("fs");
const path = require("path");
const vc = require("vc-js");
const { Ed25519KeyPair } = require("crypto-ld");

const jsigs = require("jsonld-signatures");
const { Ed25519Signature2018 } = jsigs.suites;

const didDocKeys = require("../didDocKeys");
const documentLoader = require("../documentLoader");

const credential = require("./credential.json");

let verifiableCredential;
let verifiablePresentation;

describe("v1", () => {
  it("issue vc", async () => {
    const key = new Ed25519KeyPair(
      didDocKeys[
        "did:web:vc.transmute.world#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN"
      ]
    );
    const suite = new Ed25519Signature2018({
      key,
      date: "2019-12-11T03:50:55Z",
    });
    verifiableCredential = await vc.issue({
      credential,
      suite,
      documentLoader,
    });
    expect(verifiableCredential.proof).toBeDefined();
    fs.writeFileSync(
      path.resolve(__dirname, "./verifiable-credential.json"),
      JSON.stringify(verifiableCredential, null, 2)
    );
  });

  it("present vp", async () => {
    const id = "ebc6f1c2";
    const holder = "did:key:z6MkqNJSEiVgztATfHBfE2bamdCxsmLm52tB2j8QfyE5Ssu1";
    const challenge = "ebc6f1c2";
    const key = new Ed25519KeyPair(
      didDocKeys[
        "did:key:z6MkqNJSEiVgztATfHBfE2bamdCxsmLm52tB2j8QfyE5Ssu1#z6MkqNJSEiVgztATfHBfE2bamdCxsmLm52tB2j8QfyE5Ssu1"
      ]
    );
    const suite = new Ed25519Signature2018({
      key,
      date: "2019-12-11T03:50:55Z",
    });
    const presentation = vc.createPresentation({
      verifiableCredential,
      id,
      holder,
    });
    verifiablePresentation = await vc.signPresentation({
      presentation,
      suite,
      challenge,
      documentLoader,
    });
    expect(verifiablePresentation.proof).toBeDefined();
    fs.writeFileSync(
      path.resolve(__dirname, "./verifiable-presentation.json"),
      JSON.stringify(verifiablePresentation, null, 2)
    );
  });

  it("verify vp", async () => {
    const challenge = "ebc6f1c2";
    const suite = new Ed25519Signature2018({});
    const result = await vc.verify({
      presentation: verifiablePresentation,
      suite,
      challenge,
      documentLoader,
    });
    expect(result.verified).toBe(true);
  });
});
