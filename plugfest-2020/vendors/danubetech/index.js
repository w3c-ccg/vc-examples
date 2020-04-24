'use strict';

const credentials = require('./credentials');
const verifiable_credentials = require('./verifiable_credentials');
const verifiable_presentations = require('./verifiable_presentations');

module.exports = {
  name: 'Danube Tech',
  verify_credential_endpoint: 'https://univerifier.io/api/verifier/credentials',
  // eslint-disable-next-line max-len
  verify_presentation_endpoint: 'https://univerifier.io/api/verifier/presentations',
  credentials: [...credentials],
  verifiable_credentials: [...verifiable_credentials],
  verifiable_presentations: [...verifiable_presentations],
  issuers: [
    {
      name: 'Universal Issuer (did:sov)',
      endpoint: 'https://uniissuer.io/api/credentials/issueCredential',
      options: [
        {
          issuer: 'did:sov:danube:VZoG2R1UneUscisG1eLxJb',
          assertionMethod: 'did:sov:danube:VZoG2R1UneUscisG1eLxJb#key-1',
        },
      ],
    },
    {
      name: 'Universal Issuer (did:v1)',
      endpoint: 'https://uniissuer.io/api/credentials/issueCredential',
      options: [
        {
          // eslint-disable-next-line max-len
          issuer: 'did:v1:test:nym:z6MktyAYL7sVcmPQPTbbMqrnGMNwp6zkvRvKREs94f81fA1K',
          // eslint-disable-next-line max-len
          assertionMethod: 'did:v1:test:nym:z6MktyAYL7sVcmPQPTbbMqrnGMNwp6zkvRvKREs94f81fA1K#z6MkgumSeJ8FGqFjXFPJSsT2EFCNYVvx5RXDQ6oBYDrmtiDb',
        },
      ],
    }
  ],
};
