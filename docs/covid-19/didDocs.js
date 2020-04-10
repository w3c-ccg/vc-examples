const alice = {
  "@context": ["https://w3id.org/did/v0.11"],
  id: "did:key:z6MkqNJSEiVgztATfHBfE2bamdCxsmLm52tB2j8QfyE5Ssu1",
  publicKey: [
    {
      id:
        "did:key:z6MkqNJSEiVgztATfHBfE2bamdCxsmLm52tB2j8QfyE5Ssu1#z6MkqNJSEiVgztATfHBfE2bamdCxsmLm52tB2j8QfyE5Ssu1",
      type: "Ed25519VerificationKey2018",
      controller: "did:key:z6MkqNJSEiVgztATfHBfE2bamdCxsmLm52tB2j8QfyE5Ssu1",
      publicKeyBase58: "Bv3PeUFFfLfzYnLxYTdjvXey4C4uf9dpLiDUqhG4Xf7d",
    },
  ],
  authentication: [
    "did:key:z6MkqNJSEiVgztATfHBfE2bamdCxsmLm52tB2j8QfyE5Ssu1#z6MkqNJSEiVgztATfHBfE2bamdCxsmLm52tB2j8QfyE5Ssu1",
  ],
  assertionMethod: [
    "did:key:z6MkqNJSEiVgztATfHBfE2bamdCxsmLm52tB2j8QfyE5Ssu1#z6MkqNJSEiVgztATfHBfE2bamdCxsmLm52tB2j8QfyE5Ssu1",
  ],
  capabilityDelegation: [
    "did:key:z6MkqNJSEiVgztATfHBfE2bamdCxsmLm52tB2j8QfyE5Ssu1#z6MkqNJSEiVgztATfHBfE2bamdCxsmLm52tB2j8QfyE5Ssu1",
  ],
  capabilityInvocation: [
    "did:key:z6MkqNJSEiVgztATfHBfE2bamdCxsmLm52tB2j8QfyE5Ssu1#z6MkqNJSEiVgztATfHBfE2bamdCxsmLm52tB2j8QfyE5Ssu1",
  ],
  keyAgreement: [
    {
      id:
        "did:key:z6MkqNJSEiVgztATfHBfE2bamdCxsmLm52tB2j8QfyE5Ssu1#zBzYFv5SHbUdAbfRggwZTzu2G5uWWvr2eaLksPDqGhiPmJ",
      type: "X25519KeyAgreementKey2019",
      controller: "did:key:z6MkqNJSEiVgztATfHBfE2bamdCxsmLm52tB2j8QfyE5Ssu1",
      publicKeyBase58: "13YCiFUQ6stAZNiEY4u2jranfEhyHL35SsaMNkUJc9f6",
    },
  ],
};

const bob = {
  "@context": "https://w3id.org/did/v0.11",
  id: "did:web:vc.transmute.world",
  publicKey: [
    {
      id:
        "did:web:vc.transmute.world#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
      type: "Ed25519VerificationKey2018",
      controller: "did:web:vc.transmute.world",
      privateKeyBase58:
        "3X9WCEbjyVZMYMfB45vFpTqx3YCULX2AtEUsqqQ7HwgooXscme1fzNHrwUkP2nCp4WNdZjciDdzGGfSZPsrUMdUL",
      publicKeyBase58: "DqS5F3GVe3rCxucgi4JBNagjv4dKoHc8TDLDw9kR58Pz",
    },
    {
      id:
        "did:web:vc.transmute.world#_Qq0UL2Fq651Q0Fjd6TvnYE-faHiOpRlPVQcY_-tA4A",
      type: "JwsVerificationKey2020",
      controller: "did:web:vc.transmute.world",
      publicKeyJwk: {
        crv: "Ed25519",
        x: "VCpo2LMLhn6iWku8MKvSLg2ZAoC-nlOyPVQaO3FxVeQ",
        kty: "OKP",
        kid: "_Qq0UL2Fq651Q0Fjd6TvnYE-faHiOpRlPVQcY_-tA4A",
      },
      privateKeyJwk: {
        crv: "Ed25519",
        x: "VCpo2LMLhn6iWku8MKvSLg2ZAoC-nlOyPVQaO3FxVeQ",
        d: "tP7VWE16yMQWUO2G250yvoevfbfxY25GjHglTP3ZOyU",
        kty: "OKP",
        kid: "_Qq0UL2Fq651Q0Fjd6TvnYE-faHiOpRlPVQcY_-tA4A",
      },
    },
    {
      id:
        "did:web:vc.transmute.world#4SZ-StXrp5Yd4_4rxHVTCYTHyt4zyPfN1fIuYsm6k3A",
      type: "JwsVerificationKey2020",
      controller: "did:web:vc.transmute.world",
      publicKeyJwk: {
        crv: "secp256k1",
        x: "Z4Y3NNOxv0J6tCgqOBFnHnaZhJF6LdulT7z8A-2D5_8",
        y: "i5a2NtJoUKXkLm6q8nOEu9WOkso1Ag6FTUT6k_LMnGk",
        kty: "EC",
        kid: "4SZ-StXrp5Yd4_4rxHVTCYTHyt4zyPfN1fIuYsm6k3A",
      },
      privateKeyJwk: {
        crv: "secp256k1",
        x: "Z4Y3NNOxv0J6tCgqOBFnHnaZhJF6LdulT7z8A-2D5_8",
        y: "i5a2NtJoUKXkLm6q8nOEu9WOkso1Ag6FTUT6k_LMnGk",
        d: "l7iiiJMmZyoizalGnNjbG9oLd9P7f2-EFGoV7n4xVeo",
        kty: "EC",
        kid: "4SZ-StXrp5Yd4_4rxHVTCYTHyt4zyPfN1fIuYsm6k3A",
      },
    },
    {
      id:
        "did:web:vc.transmute.world#n4cQ-I_WkHMcwXBJa7IHkYu8CMfdNcZKnKsOrnHLpFs",
      type: "JwsVerificationKey2020",
      controller: "did:web:vc.transmute.world",
      publicKeyJwk: {
        e: "AQAB",
        n:
          "omwsC1AqEk6whvxyOltCFWheSQvv1MExu5RLCMT4jVk9khJKv8JeMXWe3bWHatjPskdf2dlaGkW5QjtOnUKL742mvr4tCldKS3ULIaT1hJInMHHxj2gcubO6eEegACQ4QSu9LO0H-LM_L3DsRABB7Qja8HecpyuspW1Tu_DbqxcSnwendamwL52V17eKhlO4uXwv2HFlxufFHM0KmCJujIKyAxjD_m3q__IiHUVHD1tDIEvLPhG9Azsn3j95d-saIgZzPLhQFiKluGvsjrSkYU5pXVWIsV-B2jtLeeLC14XcYxWDUJ0qVopxkBvdlERcNtgF4dvW4X00EHj4vCljFw",
        kty: "RSA",
        kid: "n4cQ-I_WkHMcwXBJa7IHkYu8CMfdNcZKnKsOrnHLpFs",
      },
      privateKeyJwk: {
        e: "AQAB",
        n:
          "omwsC1AqEk6whvxyOltCFWheSQvv1MExu5RLCMT4jVk9khJKv8JeMXWe3bWHatjPskdf2dlaGkW5QjtOnUKL742mvr4tCldKS3ULIaT1hJInMHHxj2gcubO6eEegACQ4QSu9LO0H-LM_L3DsRABB7Qja8HecpyuspW1Tu_DbqxcSnwendamwL52V17eKhlO4uXwv2HFlxufFHM0KmCJujIKyAxjD_m3q__IiHUVHD1tDIEvLPhG9Azsn3j95d-saIgZzPLhQFiKluGvsjrSkYU5pXVWIsV-B2jtLeeLC14XcYxWDUJ0qVopxkBvdlERcNtgF4dvW4X00EHj4vCljFw",
        d:
          "JucD0Z3cxc_FJj-22FVdSaVa1-IdCndPgx8sragH5EsYnTD2aGGUkAIdD_tXuPa_IHNJ-PK_SwWiLsPnu3Dh9XmXE56XSR_JMrOQ-_j3uU4MRuUzt2Z3Yt8ybXayUvZZ5voj8GvBegbsvl8sp8jsAWsajXgItF2Yl3LNGHnDE4IsiPs4lCFABA2I8fGMikCYyNv3QY3od8E9FeFWPNha3fekmmKm0FKzYg0lsylv6Md0yn-zEt4wYgQ8SvRgbMf0oPm_DE8Geq80h6ON32nOGap4w4fc4e5jwzjnzLOXebhTXiKew8UMezo3cVy-gFZJ2wdrtGFOiwWtI77iEZ-ByQ",
        p:
          "z0GEr1zooT4VybgvcHB3s42ddhPiCgcDdgO6BlxcDDlN6jj-KxxvEqbam6MCNksXCj5WLh4j31GFdLDFs1onsZKJhtXS_CQ8-24ApmAZxuwgEEKHp6L0fKQwXO0mx4vqs2vGSrZvKB_SZ6iWV_PL0l4pA0Nb3iDVvLyKaNLO85s",
        q:
          "yJ9SYD1BkdmDzT2dCNmlG5KBdBaCYE4kdEvm7ootn7ChmZ5gLw4aP69XO1JFO8DV7rXzPVmToALBMU6jD8wMvh4rAPM_oiq46QRfBJJz9chpfkXEj15gOpimwzUNMmGs2our1zc8qoyXBMYiYflwZa89BAZjFwhgfMSkV_bEHDU",
        dp:
          "HpMHw-bs2nySMkPdm7S7s908UWL1gY0vUYWTN8UAPz1k5RyrQijbqeC7dyJA_UluiLBRflQr7pHUIjbBs4elO2jmqOF6Un_2DxFXPzQGGXZT9JIb-PrtHkYKbGr_wYg-g2Fuyy7GjyDCpVAVfbwVYV9KpZSWRNqLLWCS-ou-w-k",
        dq:
          "K-zeL14aFiHmvrAnysFEaiYIm-81unpBdwkLVd0BIj6dEzJe4s6WpqzwT3ey2uNcs7g4uoz7SoRv4ijSgOnvPE0Eo1-e5hWuiK5BU5HxO7YWiuQhpjZGoW28zW63JfnGy87a3_MjIEBJ7GypKIRhvJHCrTfsyCU4Yvj29p97zqU",
        qi:
          "DF0fN8KJTlU_DVgCaji0j5ISQDiPbjtcWNwkpK_DpO86Rnuxhw5iFFYzujEL6OuX9rD_OvpKwIYok6sdpopj9MGmXTkcD5wvfjGS4wtaE6HYRQvo-a0Q4JWZgeozbZW83f6fBPE_3ktrLYyzsbYpGkGEOJEG9SzNcqC9_G_XCVg",
        kty: "RSA",
        kid: "n4cQ-I_WkHMcwXBJa7IHkYu8CMfdNcZKnKsOrnHLpFs",
      },
    },
    {
      id:
        "did:web:vc.transmute.world#_TKzHv2jFIyvdTGF1Dsgwngfdg3SH6TpDv0Ta1aOEkw",
      type: "JwsVerificationKey2020",
      controller: "did:web:vc.transmute.world",
      publicKeyJwk: {
        crv: "P-256",
        x: "38M1FDts7Oea7urmseiugGW7tWc3mLpJh6rKe7xINZ8",
        y: "nDQW6XZ7b_u2Sy9slofYLlG03sOEoug3I0aAPQ0exs4",
        kty: "EC",
        kid: "_TKzHv2jFIyvdTGF1Dsgwngfdg3SH6TpDv0Ta1aOEkw",
      },
      privateKeyJwk: {
        crv: "P-256",
        x: "38M1FDts7Oea7urmseiugGW7tWc3mLpJh6rKe7xINZ8",
        y: "nDQW6XZ7b_u2Sy9slofYLlG03sOEoug3I0aAPQ0exs4",
        d: "jo3AJc3hrH_Ms39W_4dAl2Qm3gAs9JrNijO6n30sIWc",
        kty: "EC",
        kid: "_TKzHv2jFIyvdTGF1Dsgwngfdg3SH6TpDv0Ta1aOEkw",
      },
    },
    {
      id:
        "did:web:vc.transmute.world#8wgRfY3sWmzoeAL-78-oALNvNj67ZlQxd1ss_NX1hZY",
      type: "JwsVerificationKey2020",
      controller: "did:web:vc.transmute.world",
      publicKeyJwk: {
        crv: "P-384",
        x: "GnLl6mDti7a2VUIZP5w6pcRX8q5nvEIgB3Q_5RI2p9F_QVsaAlDN7IG68Jn0dS_F",
        y: "jq4QoAHKiIzezDp88s_cxSPXtuXYFliuCGndgU4Qp8l91xzD1spCmFIzQgVjqvcP",
        kty: "EC",
        kid: "8wgRfY3sWmzoeAL-78-oALNvNj67ZlQxd1ss_NX1hZY",
      },
      privateKeyJwk: {
        crv: "P-384",
        x: "GnLl6mDti7a2VUIZP5w6pcRX8q5nvEIgB3Q_5RI2p9F_QVsaAlDN7IG68Jn0dS_F",
        y: "jq4QoAHKiIzezDp88s_cxSPXtuXYFliuCGndgU4Qp8l91xzD1spCmFIzQgVjqvcP",
        d: "y4XrDr7xFBV46bhLGsNlelS_niTvziFxNlOrUwoAfHy0Ll9KOyzq8Z1zq_RxWZZv",
        kty: "EC",
        kid: "8wgRfY3sWmzoeAL-78-oALNvNj67ZlQxd1ss_NX1hZY",
      },
    },
    {
      id:
        "did:web:vc.transmute.world#NjQ6Y_ZMj6IUK_XkgCDwtKHlNTUTVjEYOWZtxhp1n-E",
      type: "JwsVerificationKey2020",
      controller: "did:web:vc.transmute.world",
      publicKeyJwk: {
        crv: "P-521",
        x:
          "AVlZG23LyXYwlbjbGPMxZbHmJpDSu-IvpuKigEN2pzgWtSo--Rwd-n78nrWnZzeDc187Ln3qHlw5LRGrX4qgLQ-y",
        y:
          "ANIbFeRdPHf1WYMCUjcPz-ZhecZFybOqLIJjVOlLETH7uPlyG0gEoMWnIZXhQVypPy_HtUiUzdnSEPAylYhHBTX2",
        kty: "EC",
        kid: "NjQ6Y_ZMj6IUK_XkgCDwtKHlNTUTVjEYOWZtxhp1n-E",
      },
      privateKeyJwk: {
        crv: "P-521",
        x:
          "AVlZG23LyXYwlbjbGPMxZbHmJpDSu-IvpuKigEN2pzgWtSo--Rwd-n78nrWnZzeDc187Ln3qHlw5LRGrX4qgLQ-y",
        y:
          "ANIbFeRdPHf1WYMCUjcPz-ZhecZFybOqLIJjVOlLETH7uPlyG0gEoMWnIZXhQVypPy_HtUiUzdnSEPAylYhHBTX2",
        d:
          "AfT-rRwGJJXa1uZL0VLBlGFM1Lj4AlOIKu6LZfOpIXTLO8DPC8RC6hlY1PcUvY5p4ifrRJo7Xrha373RBoB4A94y",
        kty: "EC",
        kid: "NjQ6Y_ZMj6IUK_XkgCDwtKHlNTUTVjEYOWZtxhp1n-E",
      },
    },
  ],
  authentication: [
    "did:web:vc.transmute.world#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
    "",
    "did:web:vc.transmute.world#4SZ-StXrp5Yd4_4rxHVTCYTHyt4zyPfN1fIuYsm6k3A",
    "did:web:vc.transmute.world#n4cQ-I_WkHMcwXBJa7IHkYu8CMfdNcZKnKsOrnHLpFs",
    "did:web:vc.transmute.world#_TKzHv2jFIyvdTGF1Dsgwngfdg3SH6TpDv0Ta1aOEkw",
    "did:web:vc.transmute.world#8wgRfY3sWmzoeAL-78-oALNvNj67ZlQxd1ss_NX1hZY",
    "did:web:vc.transmute.world#NjQ6Y_ZMj6IUK_XkgCDwtKHlNTUTVjEYOWZtxhp1n-E",
  ],
  assertionMethod: [
    "did:web:vc.transmute.world#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
    "did:web:vc.transmute.world#_Qq0UL2Fq651Q0Fjd6TvnYE-faHiOpRlPVQcY_-tA4A",
    "did:web:vc.transmute.world#4SZ-StXrp5Yd4_4rxHVTCYTHyt4zyPfN1fIuYsm6k3A",
    "did:web:vc.transmute.world#n4cQ-I_WkHMcwXBJa7IHkYu8CMfdNcZKnKsOrnHLpFs",
    "did:web:vc.transmute.world#_TKzHv2jFIyvdTGF1Dsgwngfdg3SH6TpDv0Ta1aOEkw",
    "did:web:vc.transmute.world#8wgRfY3sWmzoeAL-78-oALNvNj67ZlQxd1ss_NX1hZY",
    "did:web:vc.transmute.world#NjQ6Y_ZMj6IUK_XkgCDwtKHlNTUTVjEYOWZtxhp1n-E",
  ],
  capabilityDelegation: [
    "did:web:vc.transmute.world#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
    "did:web:vc.transmute.world#_Qq0UL2Fq651Q0Fjd6TvnYE-faHiOpRlPVQcY_-tA4A",
    "did:web:vc.transmute.world#4SZ-StXrp5Yd4_4rxHVTCYTHyt4zyPfN1fIuYsm6k3A",
    "did:web:vc.transmute.world#n4cQ-I_WkHMcwXBJa7IHkYu8CMfdNcZKnKsOrnHLpFs",
    "did:web:vc.transmute.world#_TKzHv2jFIyvdTGF1Dsgwngfdg3SH6TpDv0Ta1aOEkw",
    "did:web:vc.transmute.world#8wgRfY3sWmzoeAL-78-oALNvNj67ZlQxd1ss_NX1hZY",
    "did:web:vc.transmute.world#NjQ6Y_ZMj6IUK_XkgCDwtKHlNTUTVjEYOWZtxhp1n-E",
  ],
  capabilityInvocation: [
    "did:web:vc.transmute.world#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
    "did:web:vc.transmute.world#_Qq0UL2Fq651Q0Fjd6TvnYE-faHiOpRlPVQcY_-tA4A",
    "did:web:vc.transmute.world#4SZ-StXrp5Yd4_4rxHVTCYTHyt4zyPfN1fIuYsm6k3A",
    "did:web:vc.transmute.world#n4cQ-I_WkHMcwXBJa7IHkYu8CMfdNcZKnKsOrnHLpFs",
    "did:web:vc.transmute.world#_TKzHv2jFIyvdTGF1Dsgwngfdg3SH6TpDv0Ta1aOEkw",
    "did:web:vc.transmute.world#8wgRfY3sWmzoeAL-78-oALNvNj67ZlQxd1ss_NX1hZY",
    "did:web:vc.transmute.world#NjQ6Y_ZMj6IUK_XkgCDwtKHlNTUTVjEYOWZtxhp1n-E",
  ],
  keyAgreement: [
    {
      id:
        "did:web:vc.transmute.world#zC5iai1sL93gQxn8LKh1i42fTbpfar65dVx4NYznYfG3Y5",
      type: "X25519KeyAgreementKey2019",
      controller: "did:web:vc.transmute.world",
      publicKeyBase58: "6DrzegWwfw8Xg5MsHX95sVnJaPmtXP214B5X9hkG9oRs",
    },
  ],
};

const docs = [alice, bob];

docs.map((didDoc) => {
  module.exports[didDoc.id] = didDoc;
});
