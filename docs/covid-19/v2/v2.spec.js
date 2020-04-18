const fs = require("fs");
const path = require("path");

const { postJson } = require("../help");
const testCredential = require("./qSARS-CoV-2-Rapid-Test-Credential.json");
const issue_vc_endpoint =
  "https://vc.transmute.world/credentials/issueCredential";

describe("v2", () => {
  it("Linked Data Proof", async () => {
    const res = await postJson(issue_vc_endpoint, {
      credential: testCredential,
    });
    console.log(res);
  });
});
