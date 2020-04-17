# Test Suite

This Test Suite uses the examples from this repo and some configuration settings, to prove interoperability between HTTP APIs for Resolution, Issuance and Verification, and Custom Credential Formats.

## Getting Started

```
npm i
npm run test
```

You can focus a specific vendor for testing purposes by ensuring

1. [vendors](./vendors/index.js) has been updated.

1. `INTEROP_FOCUS=digital_bazaar npm run test`

There are shorthand tests for this also:

```
npm run test:transmute
npm run test:digital_bazaar
```

## Disclaimer

These tests, APIs and credential formats are subject to change.

Expect the changes to be breaking / frustrating.
