const fixtures = require("../__fixtures__");

const { postJson, writeCredentialToDisc } = fixtures.helpers;

describe("issuers", () => {
  fixtures.issuers.forEach((issuer) => {
    describe(issuer, () => {
      fixtures.credentials.forEach((credential) => {
        it("should issue " + credential.type[1], async () => {
          let options = undefined;
          if (
            issuer.indexOf("uniissuer") !== -1 ||
            issuer.indexOf("univerifier") !== -1
          ) {
            options = {
              ...options,
              assertionMethod: "did:sov:danube:TVfus95c1sHBZxf2NsETqt#key-1",
            };
          }
          const vc = await postJson(issuer, { credential, options });
          expect(vc.proof).toBeDefined();
          writeCredentialToDisc(
            issuer.split("/")[2] + "--" + credential.type[1] + ".json",
            vc
          );
        });
      });
    });
  });
});
