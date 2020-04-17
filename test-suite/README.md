# Test Suite

This Test Suite uses the examples from this repo and some configuration settings, to prove interoperability between HTTP APIs for Resolution, Issuance and Verification, and Custom Credential Formats.

## Getting Started

```
npm i
npm run test
```

### Adding a Resolver

Add a URL to [resolvers.json](./__fixtures__/resolvers/resolvers.json).

### Adding an Issuer

Add a URL to [issuers.json](./__fixtures__/issuers/issuers.json).

### Adding a Verifier

Add a URL to [verifiers.json](./__fixtures__/verifiers/verifiers.json).

### Adding a Credential

Add a require statement to [credentials](./__fixtures__/credentials/index.js).

### Adding a Verification

Add a require statement to [verifiable-credentials](./__fixtures__/verifiable-credentials/index.js).

## Test Cases

### Required Functionality:

#### _Issuer_

1. Issuer must return 201 HTTP-Response when a credential is successfully issued.
2. Issuer must support the vc-credential data model with no options field.
3. Issuer must support issuance of credentials with at least 2 different DID methods as an issuer
4. Issuer must return a 400 HTTP-Response when the request is rejected.
5. Issuer must reject if the issuer is not a did or issuer.id is not a did.
6. Issuer must reject if the proofPurpose is not supported in controller
7. Issuer must reject if the verificationMethod does not exist
8. Issuer must reject if the credential does not contain a context
9. Issuer must reject a malformed JSON-LD context.

#### _Verifier_

1. Verifier must check for a Credential Signature Failure due to mutation of the jws property
2. Verifier must check for a Credential Signature Failure due to lack of create field
3. Verifier must check for a Credential Signature Failure due to invalid proofPurpose
4. Verifier must reject an added property to the credential
5. Verifier must reject a removed property to the credential
6. Verifier must reject a mutated property to the credential
7. Verifier must reject an added property to the proof object
8. Verifier must reject a removed property to the proof object
9. Verifier must reject a mutated property to the proof object
10. Verifier must be able to verify credentials with atleast 2 different DID methods as the did issuer
11. Verifier must be able to verify presentations when the issuer, holder and subject are different
12. Verifier must be able to verify presentations when the issuer, holder and subject are the same
13. Verifier response must adhere to proof verification format for credential and presentation
14. Verifier error response must provide an error object
15. Verifier must support the the Ed25519 Cryptographic Suite.
16. Verifier must return a 400 HTTP-Response if the issuer is not a did or issuer.id is not a did.

#### Optional Functionality

1. Issuer may support composition of credentials
2. Issuer may support issuance of presentations
3. Verifier may verify a presentation with multiple credentials.
4. Verifier may reject an expired credential
5. Verifier may reject an expired key
6. Issuer/Verifier may support domain and challenge

## Disclaimer

These tests, APIs and credential formats are subject to change.

Expect the changes to be breaking / frustrating.
