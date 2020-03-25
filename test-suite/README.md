# Test Suite

This Test Suite uses the examples from this repo and some configuration settings, to prove interoperability between HTTP APIs for Resolution, Issuance and Verification, and Custom Credential Formats.

## Getting Started

```
npm i
npm run test
```

### Adding a Resolver

Add a URL to [resolvers.json](./resolvers/resolvers.json).

### Adding an Issuer

Add a URL to [issuers.json](./issuers/issuers.json).

### Adding an Verifier

Add a URL to [verifiers.json](./verifiers/verifiers.json).

### Adding an Credential

Add a require statement to [credentials](./credentials/index.js).

### Adding an Verification

Add a require statement to [verifiable-credentials](./verifiable-credentials/index.js).

## Disclaimer

These tests, APIs and credential formats are subject to change. 

Expect the changes to be breaking / frustrating.