'use strict';

const credentials = require('./credentials');
const verifiable_credentials = require('./verifiable_credentials');
const verifiable_presentations = require('./verifiable_presentations');

module.exports = {
  name: 'Transmute',
  // eslint-disable-next-line max-len
  verify_credential_endpoint: 'https://vc.transmute.world/v0.1.0/verify/credentials',
  // eslint-disable-next-line max-len
  verify_presentation_endpoint: 'https://vc.transmute.world/v0.1.0/verify/presentations',
  credentials: [...credentials],
  verifiable_credentials: [...verifiable_credentials],
  verifiable_presentations: [...verifiable_presentations],
  issuers: [
    {
      name: 'DID Web Issuer',
      endpoint: 'https://vc.transmute.world/v0.0.0/credentials/issueCredential',
      options: [
        {
          issuer: 'did:web:vc.transmute.world',
          // eslint-disable-next-line max-len
          assertionMethod: 'did:web:vc.transmute.world#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN',
        },
      ],
    },
    {
      name: 'DID Issuers',
      endpoint: 'https://vc.transmute.world/v0.1.0/issue/credentials',
      options: [
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
