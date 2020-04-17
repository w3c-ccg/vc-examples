const fixtures = require("../__fixtures__");
const { postJson, writeCredentialVerificationToDisc } = fixtures.helpers;

describe("vc-verifiers", () => {
  fixtures.vcVerifiers.forEach((verifier) => {
    describe(verifier, () => {
      fixtures.verifiableCredentials.forEach((credential) => {
        it("should verify " + credential.type[1], async () => {
          let options = {
            checks: ["proof"],
          };
          const verificaton = await postJson(verifier, {
            verifiableCredential: credential,
            options,
          });
          expect(verificaton.checks).toEqual(["proof"]);
          writeCredentialVerificationToDisc(
            verifier.split("/")[2] + "--" + credential.type[1] + ".json",
            verificaton
          );
        });
      });
    });
  });
});
