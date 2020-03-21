# University Degree Credential

This URL:

https://www.w3.org/2018/credentials/examples/v1

Includes definitons for an example university degree.

However the vocabulary defintion is:

```
"ex": "https://example.org/examples#",
```

Which does not provide human readable definitions for the example credentials.

[university-degree-verifiable-credential](./university-degree-verifiable-credential.json)

^ this credential is signed with `JsonWebSignature2020` and uses `publicKeyJwk`, which makes it easy to generate a VC-JWT format credential that uses the same verification key.