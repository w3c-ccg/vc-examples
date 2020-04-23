const credentials = require("./credentials");
const verifiable_credentials = require("./verifiable_credentials");
const verifiable_presentations = require("./verifiable_presentations");
module.exports = {
  name: "Transmute",
  verify_credential_endpoint:
    "https://vc.transmute.world/v0.1.0/verify/credentials",
  verify_presentation_endpoint:
    "https://vc.transmute.world/v0.1.0/verify/presentations",
  credentials: [...credentials],
  verifiable_credentials: [...verifiable_credentials],
  verifiable_presentations: [...verifiable_presentations],
  issuers: [
    {
      name: "DID Web Issuer",
      endpoint: "https://vc.transmute.world/v0.0.0/credentials/issueCredential",
      options: [
        {
          issuer: "did:web:vc.transmute.world",
          assertionMethod:
            "did:web:vc.transmute.world#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
        },
      ],
    },
    {
      name: "DID Issuers",
      endpoint: "https://vc.transmute.world/v0.1.0/issue/credentials",
      options: [
        {
          issuer: "did:key:z6MkjRagNiMu91DduvCvgEsqLZDVzrJzFrwahc4tXLt9DoHd",
          assertionMethod:
            "did:key:z6MkjRagNiMu91DduvCvgEsqLZDVzrJzFrwahc4tXLt9DoHd#z6MkjRagNiMu91DduvCvgEsqLZDVzrJzFrwahc4tXLt9DoHd",
        },
        {
          issuer:
            "did:elem:ropsten:EiBJJPdo-ONF0jxqt8mZYEj9Z7FbdC87m2xvN0_HAbcoEg",
          assertionMethod:
            "did:elem:ropsten:EiBJJPdo-ONF0jxqt8mZYEj9Z7FbdC87m2xvN0_HAbcoEg#xqc3gS1gz1vch7R3RvNebWMjLvBOY-n_14feCYRPsUo",
        },
        {
          issuer:
            "did:v1:test:nym:z6MkhdmzFu659ZJ4XKj31vtEDmjvsi5yDZG5L7Caz63oP39k",
          assertionMethod:
            "did:v1:test:nym:z6MkhdmzFu659ZJ4XKj31vtEDmjvsi5yDZG5L7Caz63oP39k#z6MkiukuAuQAE8ozxvmahnQGzApvtW7KT5XXKfojjwbdEomY",
        },
      ],
    },
  ],
};
