const credentials = require("./credentials");
const verifiable_credentials = require("./verifiable_credentials");
const verifiable_presentations = require("./verifiable_presentations");
module.exports = {
  name: "Danube Tech",
  verify_credential_endpoint: "https://univerifier.io/api/verifier/credentials",
  verify_presentation_endpoint:
    "https://univerifier.io/api/verifier/presentations",
  credentials: [...credentials],
  verifiable_credentials: [...verifiable_credentials],
  verifiable_presentations: [...verifiable_presentations],
  issuers: [
    {
      name: "Universal Issuer",
      endpoint: "https://uniissuer.io/api/credentials/issueCredential",
      options: [
        {
          issuer: "did:sov:danube:TVfus95c1sHBZxf2NsETqt",
          assertionMethod: "did:sov:danube:TVfus95c1sHBZxf2NsETqt#key-1",
        },
      ],
    },
  ],
};
