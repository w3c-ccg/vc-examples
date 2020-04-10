const fs = require("fs");
const path = require("path");
const jsigs = require("jsonld-signatures");
const { Ed25519KeyPair } = require("crypto-ld");
const vc = require("vc-js");

var Validator = require("jsonschema").Validator;
var v = new Validator();

const documentLoader = require("./documentLoader");
const credentialSchema = require("./examples/v0.2/cmtr-credential-schema-v0.2.json");
const credential = require("./examples/v0.2/cmtr-credential-v0.2.json");

const didDocKeys = require("./didDocKeys");

const { Ed25519Signature2018 } = jsigs.suites;
const { AssertionProofPurpose } = jsigs.purposes;

const key = new Ed25519KeyPair(
  didDocKeys[
    "did:key:z6MkqNJSEiVgztATfHBfE2bamdCxsmLm52tB2j8QfyE5Ssu1#z6MkqNJSEiVgztATfHBfE2bamdCxsmLm52tB2j8QfyE5Ssu1"
  ]
);
const suite = new Ed25519Signature2018({
  key,
  date: "2019-12-11T03:50:55Z",
});

let verifiableCredentialSchema;
let verifiableCredential;
let verifiablePresentation;

describe("cmtr-v0.2", () => {
  describe("issue and verify verifiableCredentialSchema", () => {
    it("should fail when verifiableCredentialSchema is mutated", async () => {
      expect.assertions(1);
      verifiableCredentialSchema = await jsigs.sign(
        { ...credentialSchema },
        {
          documentLoader,
          suite,
          purpose: new AssertionProofPurpose(),
          compactProof: false,
        }
      );
      delete verifiableCredentialSchema.author;
      const result = await jsigs.verify(verifiableCredentialSchema, {
        documentLoader,
        suite,
        purpose: new AssertionProofPurpose({}),
      });
      expect(result.verified).toBe(false);
    });

    it("should pass when verifiableCredentialSchema is not mutated", async () => {
      verifiableCredentialSchema = await jsigs.sign(
        { ...credentialSchema },
        {
          documentLoader,
          suite,
          purpose: new AssertionProofPurpose(),
          compactProof: false,
        }
      );
      fs.writeFileSync(
        path.resolve(
          __dirname,
          "./examples/v0.2/cmtr-verifiable-credential-schema-v0.2.json"
        ),
        JSON.stringify(verifiableCredentialSchema, null, 2)
      );

      // console.log(JSON.stringify(verifiableCredentialSchema, null, 2));
      const result = await jsigs.verify(verifiableCredentialSchema, {
        documentLoader,
        suite,
        purpose: new AssertionProofPurpose({}),
      });
      expect(result.verified).toBe(true);
    });
  });

  describe("issue and verify verifiableCredential", () => {
    it("should fail when verifiableCredential is mutated ", async () => {
      verifiableCredential = await vc.issue({
        credential: { ...credential },
        suite,
        documentLoader,
      });
      delete verifiableCredential.id;
      const result = await vc.verify({
        credential: { ...verifiableCredential },
        suite,
        documentLoader,
      });
      // console.log(JSON.stringify(signed, null, 2));
      expect(result.verified).toBe(false);
    });
    it("should pass when verifiableCredential is not mutated ", async () => {
      verifiableCredential = await vc.issue({
        credential: { ...credential },
        suite,
        documentLoader,
      });
      const result = await vc.verifyCredential({
        credential: verifiableCredential,
        suite,
        documentLoader,
      });
      fs.writeFileSync(
        path.resolve(
          __dirname,
          "./examples/v0.2/cmtr-verifiable-credential-v0.2.json"
        ),
        JSON.stringify(verifiableCredential, null, 2)
      );

      expect(result.verified).toBe(true);
    });
  });

  describe("prove and verify Verifiable Presentation", () => {
    it("should pass when verifiableCredential is not mutated ", async () => {
      const id = "ebc6f1c2";
      const holder = "did:key:z6MkqNJSEiVgztATfHBfE2bamdCxsmLm52tB2j8QfyE5Ssu1";
      const challenge = "ebc6f1c2";
      const presentation = vc.createPresentation({
        verifiableCredential,
        id,
        holder,
      });
      expect(presentation.type).toEqual(["VerifiablePresentation"]);
      verifiablePresentation = await vc.signPresentation({
        presentation,
        suite,
        challenge,
        documentLoader,
      });

      const result = await vc.verify({
        presentation: verifiablePresentation,
        suite,
        challenge,
        documentLoader,
      });
      fs.writeFileSync(
        path.resolve(
          __dirname,
          "./examples/v0.2/cmtr-verifiable-presentation-v0.2.json"
        ),
        JSON.stringify(verifiablePresentation, null, 2)
      );

      // console.log(JSON.stringify(verifiableCredential, null, 2));
      expect(result.verified).toBe(true);
    });
  });

  describe("validate verifiableCredential with verifiableCredentialSchema", () => {
    it("should pass when credentialSubject matches verifiableCredentialSchema", async () => {
      v.validate(
        verifiableCredential.credentialSubject,
        verifiableCredentialSchema.schema,
        {
          throwError: true,
        }
      );
    });
    it("should fail when credentialSubject does not match verifiableCredentialSchema", async () => {
      expect.assertions(1);
      try {
        let broken = { ...verifiableCredential.credentialSubject };
        delete broken.cmtr;
        v.validate(broken, verifiableCredentialSchema.schema, {
          throwError: true,
        });
      } catch (e) {
        expect(e.message).toBe('requires property "cmtr"');
      }
    });
  });
});
