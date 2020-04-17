const credentials = require("./credentials");
const verifiable_credentials = require("./verifiable_credentials");
const verifiable_presentations = require("./verifiable_presentations");
module.exports = {
  name: "Mavennet",
  verify_credential_endpoint: "http://api.neo-flow.com/verifier/credentials",
  verify_presentation_endpoint:
    "http://api.neo-flow.com/verifier/presentations",
  credentials: [...credentials],
  verifiable_credentials: [...verifiable_credentials],
  verifiable_presentations: [...verifiable_presentations],
  issuers: [
    {
      name: "Neo Flow Issuer",
      endpoint: "http://api.neo-flow.com/credentials/issueCredential",
      options: [
        {
          issuer:
            "did:v1:test:nym:z6MkmbrHuhkzwWYeJjkBhTYktabXR22ECzk1WrHJPW69EsJY",
          assertionMethod:
            "did:v1:test:nym:z6MkmbrHuhkzwWYeJjkBhTYktabXR22ECzk1WrHJPW69EsJY#z6Mkmh3mQN5VNM6yXksw19kiBHLNud8vXSfHE84xtanMchbA",
        },
      ],
    },
  ],
};
