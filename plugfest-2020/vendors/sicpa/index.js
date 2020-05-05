'use strict';

const credentials = require('./credentials');
const verifiable_credentials = require('./verifiable_credentials');
const verifiable_presentations = require('./verifiable_presentations');

module.exports = {
  name: 'sicpa',
  verify_credential_endpoint: 'https://svip-interop.ocs-support.com/api/verifier/credentials',
  // eslint-disable-next-line max-len
  verify_presentation_endpoint: 'https://svip-interop.ocs-support.com/api/verifier/presentations',
  credentials: [...credentials],
  verifiable_credentials: [...verifiable_credentials],
  verifiable_presentations: [...verifiable_presentations],
  issuers: [
    {
        name: 'DID sov issuer',
        endpoint: 'https://svip-interop.ocs-support.com/api/credentials/issueCredential',
        options: [
          {
             issuer: "did:sov:staging:PiEVD2uU2qKEQ5oxx1BJ6A",
             assertionMethod: "did:sov:staging:PiEVD2uU2qKEQ5oxx1BJ6A#key-1",
          },
        ],
      },
        {
        name: 'DID Key Issuer',
        // eslint-disable-next-line max-len
        endpoint: 'https://svip-interop.ocs-support.com/api/credentials/issueCredential',
        options: [
          {
            issuer: 'did:key:z6MkrqCMy45WhL3UEa1gGTHUtr17AvU4czfP5fH9KNDoYaYN',
            assertionMethod: 'did:key:z6MkrqCMy45WhL3UEa1gGTHUtr17AvU4czfP5fH9KNDoYaYN#z6MkrqCMy45WhL3UEa1gGTHUtr17AvU4czfP5fH9KNDoYaYN',
          },
        ],
      }
  ],
};
