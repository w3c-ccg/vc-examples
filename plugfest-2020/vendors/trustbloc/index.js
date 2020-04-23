const credentials = require("./credentials");
const verifiable_credentials = require("./verifiable_credentials");
const verifiable_presentations = require("./verifiable_presentations");
module.exports = {
  name: "SecureKey",
  verify_credential_endpoint:
    "https://verifier.sandbox.trustbloc.dev/verifier/credentials",
  verify_presentation_endpoint:
    "https://verifier.sandbox.trustbloc.dev/verifier/presentations",
  credentials: [...credentials],
  verifiable_credentials: [...verifiable_credentials],
  verifiable_presentations: [...verifiable_presentations],
  issuers: [
    {
      name: "TrustBloc Issuer - TrustBloc DID",
      endpoint:
        "https://issuer.sandbox.trustbloc.dev/vc-issuer-interop/credentials/issueCredential",
      options: [
        {
          issuer:
            "did:trustbloc:testnet.trustbloc.dev:EiCK3DGsh6BzGNm4gSTW1UMWHkGk3OrQ52pfTkYH1_DLlg",
          assertionMethod:
            "did:trustbloc:testnet.trustbloc.dev:EiCK3DGsh6BzGNm4gSTW1UMWHkGk3OrQ52pfTkYH1_DLlg#key-1",
        },
      ],
    },
    {
      name: "TrustBloc Issuer - DID Key",
      endpoint:
          "https://issuer.sandbox.trustbloc.dev/vc-issuer-interop-key/credentials/issueCredential",
      options: [
        {
          issuer:
              "did:key:z6MkjRagNiMu91DduvCvgEsqLZDVzrJzFrwahc4tXLt9DoHd",
          assertionMethod:
              "did:key:z6MkjRagNiMu91DduvCvgEsqLZDVzrJzFrwahc4tXLt9DoHd#z6MkjRagNiMu91DduvCvgEsqLZDVzrJzFrwahc4tXLt9DoHd",
        },
      ],
    },
  ],
};
