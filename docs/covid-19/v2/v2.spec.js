const fs = require("fs");
const path = require("path");
const jose = require("jose");
const moment = require("moment");
const { postJson } = require("../help");
const testCredential = require("./qSARS-CoV-2-Rapid-Test-Credential.json");
const testBadge = require("./qSARS-CoV-2-Travel-Badge-Credential.json");

const credentials = [testCredential, testBadge].map((c) => {
  delete c.proof;
  return c;
});

const issue_vc_endpoint =
  "https://vc.transmute.world/credentials/issueCredential";

const key = {
  id: "did:web:vc.transmute.world#_Qq0UL2Fq651Q0Fjd6TvnYE-faHiOpRlPVQcY_-tA4A",
  type: "JwsVerificationKey2020",
  controller: "did:web:vc.transmute.world",
  publicKeyJwk: {
    crv: "Ed25519",
    x: "VCpo2LMLhn6iWku8MKvSLg2ZAoC-nlOyPVQaO3FxVeQ",
    kty: "OKP",
    kid: "_Qq0UL2Fq651Q0Fjd6TvnYE-faHiOpRlPVQcY_-tA4A",
  },
  privateKeyJwk: {
    crv: "Ed25519",
    x: "VCpo2LMLhn6iWku8MKvSLg2ZAoC-nlOyPVQaO3FxVeQ",
    d: "tP7VWE16yMQWUO2G250yvoevfbfxY25GjHglTP3ZOyU",
    kty: "OKP",
    kid: "_Qq0UL2Fq651Q0Fjd6TvnYE-faHiOpRlPVQcY_-tA4A",
  },
};

describe("v2", () => {
  it("Linked Data Proof", async () => {
    await Promise.all(
      credentials.map(async (credential) => {
        let res = await postJson(issue_vc_endpoint, {
          credential: {
            ...credential,
          },
          options: {
            issuer: {
              ...credential.issuer,
              id:
                "did:elem:ropsten:EiBJJPdo-ONF0jxqt8mZYEj9Z7FbdC87m2xvN0_HAbcoEg",
            },
            assertionMethod:
              "did:elem:ropsten:EiBJJPdo-ONF0jxqt8mZYEj9Z7FbdC87m2xvN0_HAbcoEg#xqc3gS1gz1vch7R3RvNebWMjLvBOY-n_14feCYRPsUo",
          },
        });
        console.log(res);
        fs.writeFileSync(
          path.resolve(__dirname, credential.type[1] + ".json"),
          JSON.stringify(res.body, null, 2)
        );
      })
    );
  });

  it("JSON Web Token", async () => {
    await Promise.all(
      credentials.map(async (credential) => {
        credential.issuer.id = key.controller;
        const jwtPayload = {
          sub: credential.credentialSubject.id,
          iss: key.controller,
          nbf: moment(credential.issuanceDate).unix(),
          exp: moment(credential.expirationDate).unix(),
          vc: credential,
        };

        // console.log(JSON.stringify(jwtPayload, null, 2));
        const jwt = jose.JWT.sign(
          jwtPayload,
          jose.JWK.asKey(key.privateKeyJwk),
          {
            iat: false, // do not overrite iat
            kid: true, // pushes kid to JWT Header,
            // beware that kid can anything...
            // an incredibily terrible property of jose...
          }
        );

        fs.writeFileSync(
          path.resolve(__dirname, credential.type[1] + ".jwt"),
          jwt
        );
      })
    );
  });
});
