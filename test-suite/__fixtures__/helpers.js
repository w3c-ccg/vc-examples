const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch");

const removeProof = (vc) => {
  delete vc.proof;
  return vc;
};

const writeCredentialToDisc = (evidencePath, evidenceData) => {
  fs.writeFileSync(
    path.resolve(__dirname, "../data/vcs/", evidencePath),
    JSON.stringify(evidenceData, null, 2)
  );
};

const writeCredentialVerificationToDisc = (evidencePath, evidenceData) => {
  fs.writeFileSync(
    path.resolve(__dirname, "../data/verified_vcs/", evidencePath),
    JSON.stringify(evidenceData, null, 2)
  );
};

const writeVerifiablePresentationVerificationToDisc = (
  evidencePath,
  evidenceData
) => {
  fs.writeFileSync(
    path.resolve(__dirname, "../data/verified_vps/", evidencePath),
    JSON.stringify(evidenceData, null, 2)
  );
};

const writeInteropEvidence = (evidencePath, evidenceData) => {
  fs.writeFileSync(
    path.resolve(__dirname, "../data/", evidencePath),
    JSON.stringify(evidenceData, null, 2)
  );
};

const getJson = async (url) => {
  const res = await fetch(url, {
    headers: {
      Accept: "application/ld+json,application/json",
    },
    method: "get",
  });

  const resBody = await res.json();
  if (res.status > 300) {
    console.error("ERROR with GET: ", url);
    console.error(resBody);
  }
  return resBody;
};

const postJson = async (url, body) => {
  const res = await fetch(url, {
    headers: {
      Accept: "application/ld+json,application/json",
      "Content-Type": "application/json",
    },
    method: "post",
    body: JSON.stringify(body),
  });
  const resBody = await res.json();
  if (res.status > 300) {
    console.error("ERROR with POST: ", url);
    console.error("BODY: ", JSON.stringify(body, null, 2));
    console.error(resBody);
  }
  return resBody;
};

module.exports = {
  getJson,
  postJson,
  removeProof,
  writeInteropEvidence,
  writeCredentialToDisc,
  writeCredentialVerificationToDisc,
  writeVerifiablePresentationVerificationToDisc,
};
