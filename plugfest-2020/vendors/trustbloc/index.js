const credentials = require("./credentials");
const verifiable_credentials = require("./verifiable_credentials");
const verifiable_presentations = require("./verifiable_presentations");
module.exports = {
  name: "Secure Key",
  verify_credential_endpoint:
    "https://verifier.sandbox.trustbloc.dev/verifier/credentials",
  verify_presentation_endpoint:
    "https://verifier.sandbox.trustbloc.dev/verifier/presentations",
  credentials: [...credentials],
  verifiable_credentials: [...verifiable_credentials],
  verifiable_presentations: [...verifiable_presentations],
  issuers: [
    {
      name: "TrustBloc Issuer",
      endpoint:
        "https://issuer.sandbox.trustbloc.dev/vc-issuer-interop/credentials/issueCredential",
      options: [
        {
          issuer:
            "did:trustbloc:testnet.trustbloc.dev:EiBPf79yB-k9A-7bg3nbaoZCYqRi20X5_Luv4gC1hpbprA==",
          assertionMethod:
            "did:trustbloc:testnet.trustbloc.dev:EiBPf79yB-k9A-7bg3nbaoZCYqRi20X5_Luv4gC1hpbprA==#key-1",
        },
      ],
    },
  ],
};
