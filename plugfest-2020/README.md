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

## Disclaimer

These tests, APIs and credential formats are subject to change.

Expect the changes to be breaking / frustrating.
