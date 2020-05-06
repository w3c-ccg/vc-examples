'use strict';

const credentials = require('./credentials');
const verifiable_credentials = require('./verifiable_credentials');
const verifiable_presentations = require('./verifiable_presentations');

module.exports = {
  name: 'SecureKey',
  // eslint-disable-next-line max-len
  verify_credential_endpoint: 'https://verifier.sandbox.trustbloc.dev/verifier/credentials',
  // eslint-disable-next-line max-len
  verify_presentation_endpoint: 'https://verifier.sandbox.trustbloc.dev/verifier/presentations',
  credentials: [...credentials],
  verifiable_credentials: [...verifiable_credentials],
  verifiable_presentations: [...verifiable_presentations],
  issuers: [
    {
      name: 'TrustBloc Issuer - TrustBloc DID',
      // eslint-disable-next-line max-len
      endpoint: 'https://issuer.sandbox.trustbloc.dev/vc-issuer-interop/credentials/issueCredential',
      options: [
        {
          // eslint-disable-next-line max-len
          issuer: 'did:trustbloc:testnet.trustbloc.dev:EiBtYHD1_ybxr9icxKxCWhOL7G1UoygLEJ2mXVznkrlBEA',
          // eslint-disable-next-line max-len
          assertionMethod: 'did:trustbloc:testnet.trustbloc.dev:EiBtYHD1_ybxr9icxKxCWhOL7G1UoygLEJ2mXVznkrlBEA#IhhisIjDfhneDSa_7f3H',
        },
      ],
    },
    {
      name: 'TrustBloc Issuer - DID Key',
      // eslint-disable-next-line max-len
      endpoint: 'https://issuer.sandbox.trustbloc.dev/vc-issuer-interop-key/credentials/issueCredential',
      options: [
        {
          // eslint-disable-next-line max-len
          issuer: 'did:key:z6MkjRagNiMu91DduvCvgEsqLZDVzrJzFrwahc4tXLt9DoHd',
          // eslint-disable-next-line max-len
          assertionMethod: 'did:key:z6MkjRagNiMu91DduvCvgEsqLZDVzrJzFrwahc4tXLt9DoHd#z6MkjRagNiMu91DduvCvgEsqLZDVzrJzFrwahc4tXLt9DoHd',
        },
      ],
    },
  ],
};
