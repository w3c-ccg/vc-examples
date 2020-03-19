const alice = {
    "passphrase": null,
    "id": "did:key:z6MkqNJSEiVgztATfHBfE2bamdCxsmLm52tB2j8QfyE5Ssu1#z6MkqNJSEiVgztATfHBfE2bamdCxsmLm52tB2j8QfyE5Ssu1",
    "controller": "did:key:z6MkqNJSEiVgztATfHBfE2bamdCxsmLm52tB2j8QfyE5Ssu1",
    "type": "Ed25519VerificationKey2018",
    "privateKeyBase58": "uyBAkZGENz6dfbW7UMVoxzupF1gqkGCAGk2H22Fv6tZxSgLx8EQr8kiZZtMxFTDag5TySUTFf3FRCXybfv6izWj",
    "publicKeyBase58": "Bv3PeUFFfLfzYnLxYTdjvXey4C4uf9dpLiDUqhG4Xf7d"
}

const keys = [alice];

keys.map(didDocKey => {
  module.exports[didDocKey.id] = didDocKey;
});
