'use strict';

const credentials = require('./credentials');
const verifiable_credentials = require('./verifiable_credentials');
const verifiable_presentations = require('./verifiable_presentations');

module.exports = {
  name: 'Mavennet',
  verify_credential_endpoint: 'https://api.neo-flow.com/verifier/credentials',
  // eslint-disable-next-line max-len
  verify_presentation_endpoint:
    'https://api.neo-flow.com/verifier/presentations',
  credentials: [...credentials],
  verifiable_credentials: [...verifiable_credentials],
  verifiable_presentations: [...verifiable_presentations],
  issuers: [
    {
      name: 'Neo Flow Issuer',
      endpoint: 'https://api.neo-flow.com/credentials/issueCredential',
      // endpoint: "http://localhost:4000/credentials/issueCredential",
      options: [
        {
          // eslint-disable-next-line max-len
          issuer: 'did:key:z6MkiTsvjrrPNDZ1rrg9QDEYCFWCmEswT6U2cEkScb7edQ9b',
          // eslint-disable-next-line max-len
          assertionMethod:
            'did:key:z6MkiTsvjrrPNDZ1rrg9QDEYCFWCmEswT6U2cEkScb7edQ9b#z6MkiTsvjrrPNDZ1rrg9QDEYCFWCmEswT6U2cEkScb7edQ9b',
        },
        {
          // eslint-disable-next-line max-len
          issuer:
            'did:v1:test:nym:z6MkfG5HTrBXzsAP8AbayNpG3ZaoyM4PCqNPrdWQRSpHDV6J',
          // eslint-disable-next-line max-len
          assertionMethod:
            'did:v1:test:nym:z6MkfG5HTrBXzsAP8AbayNpG3ZaoyM4PCqNPrdWQRSpHDV6J#z6MkqfvdBsFw4QdGrZrnx7L1EKfY5zh9tT4gumUGsMMEZHY3',
        },
      ],
    },
  ],
};
