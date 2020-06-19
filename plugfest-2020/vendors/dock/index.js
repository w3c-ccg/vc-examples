'use strict';

const credentials = require('./credentials');
const verifiable_credentials = require('./verifiable_credentials');
const verifiable_presentations = require('./verifiable_presentations');

module.exports = {
  name: 'Dock',
  // eslint-disable-next-line max-len
  verify_credential_endpoint: 'https://vcapi.dock.io/verifier/credentials',
  // eslint-disable-next-line max-len
  verify_presentation_endpoint: 'https://vcapi.dock.io/verifier/presentations',
  credentials: [...credentials],
  verifiable_credentials: [...verifiable_credentials],
  verifiable_presentations: [...verifiable_presentations],
  issuers: [
    {
      name: 'Dock v0.0.0 DID Issuer',
      endpoint: 'https://vcapi.dock.io/credentials/issueCredential',
      options: [
        {
          issuer: 'did:dock:5ENAMn7nCVtrnXRVBSptnx6m4MrzQRKiY5AyydigCDzwPXhN',
          // eslint-disable-next-line max-len
          assertionMethod: 'did:dock:5ENAMn7nCVtrnXRVBSptnx6m4MrzQRKiY5AyydigCDzwPXhN#keys-1',
        },
        {
          issuer: 'did:key:z6MkjRagNiMu91DduvCvgEsqLZDVzrJzFrwahc4tXLt9DoHd',
          // eslint-disable-next-line max-len
          assertionMethod: 'did:key:z6MkjRagNiMu91DduvCvgEsqLZDVzrJzFrwahc4tXLt9DoHd#z6MkjRagNiMu91DduvCvgEsqLZDVzrJzFrwahc4tXLt9DoHd',
        },
        {
          // eslint-disable-next-line max-len
          issuer: 'did:elem:ropsten:EiBJJPdo-ONF0jxqt8mZYEj9Z7FbdC87m2xvN0_HAbcoEg',
          // eslint-disable-next-line max-len
          assertionMethod: 'did:elem:ropsten:EiBJJPdo-ONF0jxqt8mZYEj9Z7FbdC87m2xvN0_HAbcoEg#xqc3gS1gz1vch7R3RvNebWMjLvBOY-n_14feCYRPsUo',
        },
        {
          // eslint-disable-next-line max-len
          issuer: 'did:v1:test:nym:z6MkhdmzFu659ZJ4XKj31vtEDmjvsi5yDZG5L7Caz63oP39k',
          // eslint-disable-next-line max-len
          assertionMethod: 'did:v1:test:nym:z6MkhdmzFu659ZJ4XKj31vtEDmjvsi5yDZG5L7Caz63oP39k#z6MkiukuAuQAE8ozxvmahnQGzApvtW7KT5XXKfojjwbdEomY',
        },
      ],
    },
  ],
};
