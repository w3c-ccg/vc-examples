'use strict';

const credentials = require('./credentials');
const verifiable_credentials = require('./verifiable_credentials');
const verifiable_presentations = require('./verifiable_presentations');

module.exports = {
  name: 'sicpa',
  verify_credential_endpoint: 'http://localhost:8077/api/verifier/credentials',
  // eslint-disable-next-line max-len
  verify_presentation_endpoint: 'http://localhost:8077/api/verifier/presentations',
  credentials: [...credentials],
  verifiable_credentials: [...verifiable_credentials],
  verifiable_presentations: [...verifiable_presentations],
  issuers: [
    {
      name: 'SICPA issuer (did:sov)',
      endpoint: 'http://localhost:8077/api/credentials/issueCredential',
      options: [
        {
           issuer: "did:sov:staging:PiEVD2uU2qKEQ5oxx1BJ6A",
           assertionMethod: "did:sov:staging:PiEVD2uU2qKEQ5oxx1BJ6A#key-1",
        },
      ],
    }
  ],
};
