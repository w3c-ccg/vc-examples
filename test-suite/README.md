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

### Adding an Verifier

Add a URL to [verifiers.json](./__fixtures__/verifiers/verifiers.json).

### Adding an Credential

Add a require statement to [credentials](./__fixtures__/credentials/index.js).

### Adding an Verification

Add a require statement to [verifiable-credentials](./__fixtures__/verifiable-credentials/index.js).

## Disclaimer

These tests, APIs and credential formats are subject to change. 

Expect the changes to be breaking / frustrating.