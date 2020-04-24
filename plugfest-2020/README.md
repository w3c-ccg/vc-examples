# Test Suite

This Test Suite uses the examples from this repo and some configuration settings, to prove interoperability between HTTP APIs for Resolution, Issuance and Verification, and Custom Credential Formats.

- [ ] All tests passing with UniversityDegreeCredential
- [ ] All tests passing with each vendor testing only their credential types.
- [ ] All tests passing with each vendor testing each vendor's credential types.

## Getting Started

```
npm i
npm run test
```

You can focus a specific vendor for testing purposes by ensuring

1. [vendors](./vendors/index.js) has been updated.

1. `INTEROP_FOCUS=digital_bazaar npm run test`

There are shorthand tests for this [package.json](./package.json):

```
npm run test:transmute
npm run test:digital_bazaar
```

### Adding a Vendor

See instuctions above.

### Adding a Credential

Add a file named CredentialType.json to `./vendor/<name>/credentials` directory.

Make sure the file DOES NOT contain a proof.

### Adding an Issuer to a Vendor

Each vendor can support multiple issuers. See [this example](./vendors/transmute/index.js).

### Adding an Verifier to a Vendor

See [this example](./vendors/transmute/index.js).

## Test Cases

### Issuer

#### Issue Credential HTTP API

1. The Issuer's Issue Credential HTTP API MUST return a 201 HTTP response status code after successful credential issuance.
2. The Issuer's Issue Credential HTTP API MUST require `"credential"` in the body of the POST request. The field `"credential"` MUST be conformant to [Verifiable Credentials Data Model 1.0](https://www.w3.org/TR/vc-data-model/).
3. The Issuer's Issue Credential HTTP API MUST support the issuance of credentials with at least 2 different DID methods as the `"issuer"` on a Verifiable Credential.
4. The Issuer's Issue Credential HTTP API MUST return a 400 HTTP response status code when the request is rejected.
5. The Issuer's Issue Credential HTTP API MUST return a Verifiable Credential with the value of its `"issuer"` or `"issuer.id"` as a URI in the body of the response.
6. The Issuer's Issue Credential HTTP API MUST reject if the value of `"options.proofPurpose"` in the body of the POST request is not supported.
7. The Issuer's Issue Credential HTTP API MUST reject if the value of `"options.assertionMethod"` in the body of the POST request does not exist.
8. The Issuer's Issue Credential HTTP API MUST reject if the value of `"credential"` in the body of the POST request does not contain a context.
9. The Issuer's Issue Credential HTTP API MUST reject if the value of `"credential"` in the body of the POST request contains a malformed JSON-LD context.
10. The Issuer's Issue Credential HTTP API MUST must support no `"options"` in the body of the POST request.

#### Verifier

#### Verify Credential HTTP API

1. The Verifier's Verify Credential HTTP API MUST fail to verify a Verifiable Credential with a mutated signature value (ex. a mutated jws) in the proof.
2. The Verifier's Verify Credential HTTP API MUST fail to verify a Verifiable Credential with the `"created"` property removed from the proof.
3. The Verifier's Verify Credential HTTP API MUST fail to verify a Verifiable Credential with a mutated `"proofPurpose"` in the proof.
4. The Verifier's Verify Credential HTTP API MUST fail to verify a Verifiable Credential with an added property to the credential.
5. The Verifier's Verify Credential HTTP API MUST fail to verify a Verifiable Credential with a removed property from the credential.
6. The Verifier's Verify Credential HTTP API MUST fail to verify a Verifiable Credential with a mutated property to the credential.
7. The Verifier's Verify Credential HTTP API MUST fail to verify a Verifiable Credential with an added property to the proof.
8. The Verifier's Verify Credential HTTP API MUST fail to verify a Verifiable Credential a removed property to the proof.
9. The Verifier's Verify Credential HTTP API MUST fail to verify a Verifiable Credential with a mutated property to the proof.
10. The Verifier's Verify Credential HTTP API MUST verify a Verifiable Credential with at least 2 different DID methods set as the issuer property for a credential.
11. The Verifier's Verify Credential HTTP API MUST adhere to the proof verification format.
12. The Verifier's Verify Credential HTTP API MUST return a 400 HTTP response status code when the request is rejected.
13. The Verifier's Verify Credential HTTP API MUST support the verification of, JSON-LD Proof, Ed25519Signature2018.

#### Verify Presentation HTTP API

1. The Verifier's Verify Presentation HTTP API MUST verify a Verifiable Presentation where the credential's issuer, presentation's holder and credential's subject are different.
2. The Verifier's Verify Presentation HTTP API MUST verify a Verifiable Presentation where the credential's issuer, presentation's holder and credential's subject are the same.
3. The Verifier's Verify Presentation HTTP API MUST adhere to the proof verification format.
4. The Verifier's Verify Presentation HTTP API MUST return a 400 HTTP response status code when the request is rejected.
5. The Verifier's Verify Presentation HTTP API MUST support the verification of, JSON-LD Proof, Ed25519Signature2018.
6. The Verifier's Verify Presentation HTTP API MUST support `"options.challenge"` in the body of the POST request.

## Disclaimer

These tests, APIs and credential formats are subject to change.

Expect the changes to be breaking / frustrating.
