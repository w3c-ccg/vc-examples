'use strict';

const credentials = require('./credentials');
const verifiable_credentials = require('./verifiable_credentials');
const verifiable_presentations = require('./verifiable_presentations');

module.exports = {
  name: 'Digital Bazaar',
  // eslint-disable-next-line max-len
  verify_credential_endpoint: 'https://verifier.interop.digitalbazaar.com/verifier/credentials',
  // eslint-disable-next-line max-len
  verify_presentation_endpoint: 'https://verifier.interop.digitalbazaar.com/verifier/presentations',
  credentials: [...credentials],
  verifiable_credentials: [...verifiable_credentials],
  verifiable_presentations: [...verifiable_presentations],
  issuers: [
    {
      name: 'DID Key Issuer',
      // eslint-disable-next-line max-len
      endpoint: 'https://issuer.interop.digitalbazaar.com/credentials/did%3Akey%3Az6MkkHSTSr9DSNLoioiVEZq8RKm9Sn1Xs4SjZXgzQASBMdc3/issueCredential',
      options: [
        {
          issuer: 'did:key:z6Mkg9AkjefxdJFSphkStzXwHQnbweN43mCqA37aANGRxF1o',
          // eslint-disable-next-line max-len
          assertionMethod: 'did:key:z6Mkg9AkjefxdJFSphkStzXwHQnbweN43mCqA37aANGRxF1o#z6Mkg9AkjefxdJFSphkStzXwHQnbweN43mCqA37aANGRxF1o',
        },
      ],
    },
  ],
};
