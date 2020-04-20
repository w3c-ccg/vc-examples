const credentials = require("./credentials");
const verifiable_credentials = require("./verifiable_credentials");
const verifiable_presentations = require("./verifiable_presentations");
module.exports = {
  name: "SICPA",
  verify_credential_endpoint: "http://svip-verifier.ocs-support.com/api/verifier/credentials",
  verify_presentation_endpoint:
    "http://svip-verifier.ocs-support.com/api/verifier/presentations",
  credentials: [...credentials],
  verifiable_credentials: [...verifiable_credentials],
  verifiable_presentations: [...verifiable_presentations],
  issuers: [
    {
      name: "Eos issuer",
      endpoint: "http://localhost:8080/api/credentials/issueCredential",
      options: [
        {
          issuer: "did:sov:staging:PiEVD2uU2qKEQ5oxx1BJ6A",
          assertionMethod: "did:sov:staging:PiEVD2uU2qKEQ5oxx1BJ6A#key-1",
        },
      ],
    },
  ],
};
