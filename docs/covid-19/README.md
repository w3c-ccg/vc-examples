# Immunity Passport

#### These are hypothetical, DO NOT USE THIS IN PRODUCTION.

## Communities Working on COVID-19 Credentials

- [http://covid19credentials.com](http://covid19credentials.com)
- DIF is forming a WG
- W3C CCG has hosted some good conversations on "W3C Credentials CG (Public List)" <public-credentials@w3.org>

## Standards and Tools

- [Credential Handler API 1.0](https://w3c-ccg.github.io/credential-handler-api/)
- [Verifiable Credentials Data Model 1.0](https://www.w3.org/TR/vc-data-model/)
- [Demo Issuer Website](https://github.com/decentralized-identity/c19-vc.com)

### Delivering Verifiable Credentials from a Website

<img src="./preview-2.png"/>

### Viewing a Verifiable Credential in a Web Wallet

<img src="./preview-1.png"/>

## Getting Started

Based on [this technologyreview.com article](https://www.technologyreview.com/2020/04/09/998974/covid-19s-cornavirus-antibody-test-outside/)

> “I would shudder to use IgM and IgG testing to figure out who’s immune and who’s not,” says Wells. “These tests are not ready for that.”

Based on [this medicinenet.com article](https://www.medicinenet.com/how_do_the_covid-19_coronavirus_tests_work/article.htm)

> Immunoglobulin tests for COVID-19 cannot confirm the presence of the virus in your system. It can only tell whether you have been exposed in the past or if you have never been exposed to SARS-CoV-2. Consequently, it should only be used alone as a screening test and should be used in tandem with a genetic-based test to determine a complete status. Genetic testing is the gold standard for COVID-19 diagnosis.

### We have to start somewhere...

Lets consider the 4 cases for the "immunoglobulin detection-based tests for COVID-19".

- Negative Result
- Positive Result, IgM only
- Positive Result, IgG only
- Positive Result, IgG and IgM

We only need 2 booleans to represent these cases, one for IgM and one for IgG.

```
    ...
    "IgM": false,
    "IgG": true,
```

The rest of this credential is based on https://digitalbazaar.github.io/citizenship-vocab

Uses the new schema.org definitions for COVID-19... see [schema.org](https://schema.org/docs/search_results.html?q=COVID-19).

Photo, name, gender, birthdate useful for matching with existing records, not everyone has a social security number or drivers license...

Embedding image data precludes transmission via QR Codes, worth considering alternative solutions...

This is what a verifier would see:

```json
{
  "@context": ["https://www.w3.org/2018/credentials/v1"],
  "type": ["VerifiablePresentation"],
  "verifiableCredential": [
    {
      "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://w3c-ccg.github.io/vc-examples/covid-19/v1/v1.jsonld"
      ],
      "id": "http://example.com/credential/123",
      "type": ["VerifiableCredential", "ImmunoglobulinDetectionTestCard"],
      "issuer": {
        "id": "did:web:vc.transmute.world",
        "location": {
          "@type": "CovidTestingFacility",
          "name": "Stanford Health Care",
          "url": "https://stanfordhealthcare.org/"
        }
      },
      "issuanceDate": "2019-12-11T03:50:55Z",
      "expirationDate": "2020-12-11T03:50:55Z",
      "name": "Immunoglobulin Detection Test Card",
      "description": "Immunoglobulin detection tests are based on the qualitative detection of IgM and IgG that are specifically generated by the body in response to SARS-CoV-2 infection.",
      "credentialSubject": {
        "id": "did:key:z6MkjRagNiMu91DduvCvgEsqLZDVzrJzFrwahc4tXLt9DoHd",
        "type": "ImmunoglobulinDetectionTestSubject",
        "givenName": "Louis",
        "familyName": "Pasteur",
        "birthDate": "1958-07-17",
        "IgM": false,
        "IgG": true,
        "image": "data:image/png;base64,..."
      },
      "proof": {
        "type": "Ed25519Signature2018",
        "created": "2019-12-11T03:50:55Z",
        "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..5CktVvfNo48sBj3Ox6UBen_ylr4L7zls89p1zy3Habf4Pbp4fEySsk67lRIWL68G8IiWhxBv-NFfjTQpC9K0Dw",
        "proofPurpose": "assertionMethod",
        "verificationMethod": "did:web:vc.transmute.world#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN"
      }
    }
  ],
  "id": "ebc6f1c2",
  "holder": "did:key:z6MkqNJSEiVgztATfHBfE2bamdCxsmLm52tB2j8QfyE5Ssu1",
  "proof": {
    "type": "Ed25519Signature2018",
    "created": "2019-12-11T03:50:55Z",
    "challenge": "ebc6f1c2",
    "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..jHQTvTmtIJ0qkN4NJwjCnnVoTTedVM243-WUEmyFWwwW6xsf2FglorU8zX5pqBmWr1UjCS-NZ2y8OdBDucUuBQ",
    "proofPurpose": "authentication",
    "verificationMethod": "did:key:z6MkqNJSEiVgztATfHBfE2bamdCxsmLm52tB2j8QfyE5Ssu1#z6MkqNJSEiVgztATfHBfE2bamdCxsmLm52tB2j8QfyE5Ssu1"
  }
}
```