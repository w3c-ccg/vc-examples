const alice = {
  passphrase: null,
  id:
    "did:key:z6MkqNJSEiVgztATfHBfE2bamdCxsmLm52tB2j8QfyE5Ssu1#z6MkqNJSEiVgztATfHBfE2bamdCxsmLm52tB2j8QfyE5Ssu1",
  controller: "did:key:z6MkqNJSEiVgztATfHBfE2bamdCxsmLm52tB2j8QfyE5Ssu1",
  type: "Ed25519VerificationKey2018",
  privateKeyBase58:
    "uyBAkZGENz6dfbW7UMVoxzupF1gqkGCAGk2H22Fv6tZxSgLx8EQr8kiZZtMxFTDag5TySUTFf3FRCXybfv6izWj",
  publicKeyBase58: "Bv3PeUFFfLfzYnLxYTdjvXey4C4uf9dpLiDUqhG4Xf7d",
};

const bob = {
  id:
    "did:web:vc.transmute.world#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
  type: "Ed25519VerificationKey2018",
  controller: "did:web:vc.transmute.world",
  privateKeyBase58:
    "3X9WCEbjyVZMYMfB45vFpTqx3YCULX2AtEUsqqQ7HwgooXscme1fzNHrwUkP2nCp4WNdZjciDdzGGfSZPsrUMdUL",
  publicKeyBase58: "DqS5F3GVe3rCxucgi4JBNagjv4dKoHc8TDLDw9kR58Pz",
};

const keys = [alice, bob];

keys.map((didDocKey) => {
  module.exports[didDocKey.id] = didDocKey;
});
