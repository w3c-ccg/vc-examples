const alice = {
  "@context": [
    "https://w3id.org/did/v0.11"
  ],
  "id": "did:key:z6MkqNJSEiVgztATfHBfE2bamdCxsmLm52tB2j8QfyE5Ssu1",
  "publicKey": [
    {
      "id": "did:key:z6MkqNJSEiVgztATfHBfE2bamdCxsmLm52tB2j8QfyE5Ssu1#z6MkqNJSEiVgztATfHBfE2bamdCxsmLm52tB2j8QfyE5Ssu1",
      "type": "Ed25519VerificationKey2018",
      "controller": "did:key:z6MkqNJSEiVgztATfHBfE2bamdCxsmLm52tB2j8QfyE5Ssu1",
      "publicKeyBase58": "Bv3PeUFFfLfzYnLxYTdjvXey4C4uf9dpLiDUqhG4Xf7d"
    }
  ],
  "authentication": [
    "did:key:z6MkqNJSEiVgztATfHBfE2bamdCxsmLm52tB2j8QfyE5Ssu1#z6MkqNJSEiVgztATfHBfE2bamdCxsmLm52tB2j8QfyE5Ssu1"
  ],
  "assertionMethod": [
    "did:key:z6MkqNJSEiVgztATfHBfE2bamdCxsmLm52tB2j8QfyE5Ssu1#z6MkqNJSEiVgztATfHBfE2bamdCxsmLm52tB2j8QfyE5Ssu1"
  ],
  "capabilityDelegation": [
    "did:key:z6MkqNJSEiVgztATfHBfE2bamdCxsmLm52tB2j8QfyE5Ssu1#z6MkqNJSEiVgztATfHBfE2bamdCxsmLm52tB2j8QfyE5Ssu1"
  ],
  "capabilityInvocation": [
    "did:key:z6MkqNJSEiVgztATfHBfE2bamdCxsmLm52tB2j8QfyE5Ssu1#z6MkqNJSEiVgztATfHBfE2bamdCxsmLm52tB2j8QfyE5Ssu1"
  ],
  "keyAgreement": [
    {
      "id": "did:key:z6MkqNJSEiVgztATfHBfE2bamdCxsmLm52tB2j8QfyE5Ssu1#zBzYFv5SHbUdAbfRggwZTzu2G5uWWvr2eaLksPDqGhiPmJ",
      "type": "X25519KeyAgreementKey2019",
      "controller": "did:key:z6MkqNJSEiVgztATfHBfE2bamdCxsmLm52tB2j8QfyE5Ssu1",
      "publicKeyBase58": "13YCiFUQ6stAZNiEY4u2jranfEhyHL35SsaMNkUJc9f6"
    }
  ]
};

const docs = [alice];

docs.map(didDoc => {
  module.exports[didDoc.id] = didDoc;
});
