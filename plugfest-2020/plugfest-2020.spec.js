const uuid = require("uuid-random");
const help = require("./help");
const vendors = require("./vendors");

describe("Plugfest 2020", () => {
  vendors.forEach((vendor) => {
    describe(vendor.name, () => {
      describe("Issuer HTTP APIs", () => {
        let issuer_vms = [];
        vendor.issuers.forEach((issuer) => {
          describe(issuer.name + " " + issuer.endpoint, () => {
            describe("1. Issuer must return 201 HTTP-Response when a credential is successfully issued.", () => {
              it("positive test", async () => {
                if(issuer.endpoint.includes('digitalbazaar.com')) {
                  vendor.credentials = annotateWithUniqueId(vendor.credentials);
                }
                const body = {
                  credential: vendor.credentials[0],
                };
                const res = await help.postJson(issuer.endpoint, body);
                expect(res.status).toBe(201);
                expect(res.body.proof).toBeDefined();
              });
            });

            describe("2. Issuer must support the vc-credential data model with no options field.", () => {
              it("positive test", async () => {
                if(issuer.endpoint.includes('digitalbazaar.com')) {
                  vendor.credentials = annotateWithUniqueId(vendor.credentials);
                }
                const body = {
                  credential: vendor.credentials[0],
                };
                const res = await help.postJson(issuer.endpoint, body);
                expect(res.status).toBe(201);
                expect(res.body.proof).toBeDefined();
              });
            });

            describe("3.1 Can issue with all supplied options", () => {
              it("test each option for " + issuer.name, async () => {
                await Promise.all(
                  issuer.options.map(async (issuer_options) => {
                    if(issuer.endpoint.includes('digitalbazaar.com')) {
                      vendor.credentials =
                        annotateWithUniqueId(vendor.credentials);
                    }
                    const body = {
                      credential: vendor.credentials[0],
                      options: { ...issuer_options },
                    };
                    const res = await help.postJson(issuer.endpoint, body);
                    expect(res.status).toBe(201);
                    expect(res.body.proof).toBeDefined();
                    if (
                      issuer_vms.indexOf(res.body.proof.verificationMethod) ===
                      -1
                    ) {
                      issuer_vms.push(res.body.proof.verificationMethod);
                    }
                  })
                );
              });
            });

            describe("4. Issuer must return a 400 HTTP-Response when the request is rejected.", () => {
              it("positive test", async () => {
                if(issuer.endpoint.includes('digitalbazaar.com')) {
                  vendor.credentials = annotateWithUniqueId(vendor.credentials);
                }
                const body = {
                  credential: {
                    ...vendor.credentials[0],
                    "@context": "force_error",
                  },
                };
                const res = await help.postJson(issuer.endpoint, body);
                expect(res.status).toBe(400);
              });
            });

            describe.skip("5. Issuer must reject if the issuer is not a did or issuer.id is not a did.", () => {
              it("should 400 when issuer is not a did", async () => {
                if(issuer.endpoint.includes('digitalbazaar.com')) {
                  vendor.credentials = annotateWithUniqueId(vendor.credentials);
                }
                const body = {
                  credential: {
                    ...vendor.credentials[0],
                    issuer: "foo",
                  },
                };
                const res = await help.postJson(issuer.endpoint, body);
                expect(res.status).toBe(400);
              });

              it("should 400 when issuer.id is not a did", async () => {
                if(issuer.endpoint.includes('digitalbazaar.com')) {
                  vendor.credentials = annotateWithUniqueId(vendor.credentials);
                }
                const body = {
                  credential: {
                    ...vendor.credentials[0],
                    issuer: {
                      id: "foo",
                    },
                  },
                };
                const res = await help.postJson(issuer.endpoint, body);
                expect(res.status).toBe(400);
              });
            });

            describe("6. Issuer must reject if the proofPurpose is not supported in controller", () => {
              it("positive test", async () => {
                if(issuer.endpoint.includes('digitalbazaar.com')) {
                  vendor.credentials = annotateWithUniqueId(vendor.credentials);
                }
                const body = {
                  credential: {
                    ...vendor.credentials[0],
                  },
                  options: {
                    proofPurpose: "foo",
                  },
                };
                const res = await help.postJson(issuer.endpoint, body);
                expect(res.status).toBe(400);
              });
            });

            describe("7. Issuer must reject if the verificationMethod does not exist", () => {
              it("positive test", async () => {
                if(issuer.endpoint.includes('digitalbazaar.com')) {
                  vendor.credentials = annotateWithUniqueId(vendor.credentials);
                }
                const body = {
                  credential: {
                    ...vendor.credentials[0],
                  },
                  options: {
                    ...issuer.options[0],
                    assertionMethod: "foo",
                  },
                };
                const res = await help.postJson(issuer.endpoint, body);
                expect(res.status).toBe(400);
              });
            });

            describe("8. Issuer must reject if the credential does not contain a context", () => {
              it("positive test", async () => {
                if(issuer.endpoint.includes('digitalbazaar.com')) {
                  vendor.credentials = annotateWithUniqueId(vendor.credentials);
                }
                const body = {
                  credential: {
                    ...vendor.credentials[0],
                  },
                };
                delete body.credential["@context"];
                const res = await help.postJson(issuer.endpoint, body);
                expect(res.status).toBe(400);
              });
            });

            describe("9. Issuer must reject a malformed JSON-LD context.", () => {
              it("positive test", async () => {
                if(issuer.endpoint.includes('digitalbazaar.com')) {
                  vendor.credentials = annotateWithUniqueId(vendor.credentials);
                }
                const body = {
                  credential: {
                    ...vendor.credentials[0],
                  },
                };
                body.credential["@context"] = [
                  "https://www.w3.org/2018/credentials/v1",
                  "broken",
                ];
                const res = await help.postJson(issuer.endpoint, body);
                expect(res.status).toBe(400);
              });
            });
          });
        });
        describe("3.2 Issuer must support issuance of credentials with at least 2 different DID methods as an issuer", () => {
          it("meets criteria after all issuers have been tested", async () => {
            expect(issuer_vms.length).toBeGreaterThanOrEqual(2);
          });
        });
      });

      describe("Verifier", () => {
        describe("1. Verifier must check for a Credential Signature Failure due to mutation of the jws property", () => {
          it("should pass with no mutation", async () => {
            const endpoint = vendor.verify_credential_endpoint;
            const body = {
              verifiableCredential: {
                ...vendor.verifiable_credentials[0],
              },
              options: {
                checks: ["proof"]
              }
            };
            const res = await help.postJson(endpoint, body);
            expect(res.status).toBe(200);
            expect(res.body.checks).toEqual(["proof"]);
          });
          it("should fail with with mutation", async () => {
            const endpoint = vendor.verify_credential_endpoint;
            const body = {
              verifiableCredential: {
                ...vendor.verifiable_credentials[0],
              },
              options: {
                checks: ["proof"]
              }
            };
            body.verifiableCredential.proof.jws += "bar";
            const res = await help.postJson(endpoint, body);
            expect(res.status).toBe(400);
          });
        });

        describe("2. Verifier must check for a Credential Signature Failure due to lack of create field", () => {
          it("should fail with without created in proof", async () => {
            const endpoint = vendor.verify_credential_endpoint;
            const body = {
              verifiableCredential: {
                ...vendor.verifiable_credentials[0],
              },
              options: {
                checks: ["proof"]
              }
            };
            delete body.verifiableCredential.proof.created;
            const res = await help.postJson(endpoint, body);
            expect(res.status).toBe(400);
          });
        });

        describe("3. Verifier must check for a Credential Signature Failure due to invalid proofPurpose", () => {
          it("should fail ", async () => {
            const endpoint = vendor.verify_credential_endpoint;
            const body = {
              verifiableCredential: {
                ...vendor.verifiable_credentials[0],
              },
              options: {
                checks: ["proof"]
              }
            };
            body.verifiableCredential.proof.proofPurpose = "bar";
            const res = await help.postJson(endpoint, body);
            expect(res.status).toBe(400);
          });
        });

        describe("4. Verifier must reject an added property to the credential", () => {
          it("should fail", async () => {
            const endpoint = vendor.verify_credential_endpoint;
            const body = {
              verifiableCredential: {
                ...vendor.verifiable_credentials[0],
              },
              options: {
                checks: ["proof"]
              }
            };
            body.verifiableCredential.newProp = "foo";
            const res = await help.postJson(endpoint, body);
            expect(res.status).toBe(400);
          });
        });

        describe("5. Verifier must reject a removed property to the credential", () => {
          it("should fail", async () => {
            const endpoint = vendor.verify_credential_endpoint;
            const body = {
              verifiableCredential: {
                ...vendor.verifiable_credentials[0],
              },
              options: {
                checks: ["proof"]
              }
            };
            delete body.verifiableCredential.issuer;
            const res = await help.postJson(endpoint, body);
            expect(res.status).toBe(400);
          });
        });

        describe("6. Verifier must reject a mutated property to the credential", () => {
          it("should fail ", async () => {
            const endpoint = vendor.verify_credential_endpoint;
            const body = {
              verifiableCredential: {
                ...vendor.verifiable_credentials[0],
              },
              options: {
                checks: ["proof"]
              }
            };
            body.verifiableCredential.issuer = "bar";
            const res = await help.postJson(endpoint, body);
            expect(res.status).toBe(400);
          });
        });

        describe("7. Verifier must reject an added property to the proof object", () => {
          it("should fail ", async () => {
            const endpoint = vendor.verify_credential_endpoint;
            const body = {
              verifiableCredential: {
                ...vendor.verifiable_credentials[0],
              },
              options: {
                checks: ["proof"]
              }
            };
            body.verifiableCredential.proof.newProp = "bar";
            const res = await help.postJson(endpoint, body);
            expect(res.status).toBe(400);
          });
        });

        describe("8. Verifier must reject a removed property to the proof object", () => {
          it("should fail ", async () => {
            const endpoint = vendor.verify_credential_endpoint;
            const body = {
              verifiableCredential: {
                ...vendor.verifiable_credentials[0],
              },
              options: {
                checks: ["proof"]
              }
            };
            delete body.verifiableCredential.proof.proofPurpose;
            const res = await help.postJson(endpoint, body);
            expect(res.status).toBe(400);
          });
        });

        describe("9. Verifier must reject a mutated property to the proof object", () => {
          it("should fail ", async () => {
            const endpoint = vendor.verify_credential_endpoint;
            const body = {
              verifiableCredential: {
                ...vendor.verifiable_credentials[0],
              },
              options: {
                checks: ["proof"]
              }
            };
            body.verifiableCredential.proof.created += "bar";
            const res = await help.postJson(endpoint, body);
            expect(res.status).toBe(400);
          });
        });

        describe.skip("10. Verifier must be able to verify credentials with at least 2 different DID methods as the did issuer", () => {
          it("should pass", async () => {
            const endpoint = vendor.verify_credential_endpoint;
            const unique_issuers = [];
            await Promise.all(
              vendor.verifiable_credentials.map(async (vc) => {
                const body = {
                  verifiableCredential: vc,
                };
                const res = await help.postJson(endpoint, body);

                expect(res.status).toBe(200);
                if (unique_issuers.indexOf(vc.issuer) === -1) {
                  unique_issuers.push(vc.issuer);
                }
              })
            );
            expect(unique_issuers.length).toBeGreaterThanOrEqual(2);
          });
        });

        describe("12. Verifier must handle variations on issuer, holder and subject", () => {
          describe("issuer, holder and subject are the same", () => {
            it("should pass", async () => {
              const endpoint = vendor.verify_presentation_endpoint;
              // this logic needs to account for object and string variations...
              const test_vps = vendor.verifiable_presentations.filter((vp) => {
                return (
                  vp.holder === vp.verifiableCredential[0].issuer &&
                  vp.holder === vp.verifiableCredential[0].credentialSubject.id
                );
              });
              const solutions = [];
              await Promise.all(
                test_vps.map(async (vp) => {
                  const body = {
                    verifiablePresentation: vp,
                    options: {
                      challenge: vp.proof.challenge,
                      checks: ["proof"]
                    },
                  };
                  const res = await help.postJson(endpoint, body);
                  expect(res.status).toBe(200);
                  solutions.push(vp);
                })
              );
              expect(solutions.length).toBeGreaterThanOrEqual(1);
            });
          });
          describe("issuer, holder and subject are the different", () => {
            it.skip("should pass", async () => {
              const endpoint = vendor.verify_presentation_endpoint;
              const solutions = [];
              // this logic needs to account for object and string variations...
              const test_vps = vendor.verifiable_presentations.filter((vp) => {
                return (
                  vp.holder !== vp.verifiableCredential[0].issuer &&
                  vp.holder !==
                    vp.verifiableCredential[0].credentialSubject.id &&
                  vp.verifiableCredential[0].issuer !==
                    vp.verifiableCredential[0].credentialSubject.id
                );
              });
              await Promise.all(
                test_vps.map(async (vp) => {
                  // this logic needs to account for objet and string variations...
                  expect(vp.holder).not.toBe(vp.verifiableCredential[0].issuer);
                  expect(vp.holder).not.toBe(
                    vp.verifiableCredential[0].credentialSubject.id
                  );
                  const body = {
                    verifiablePresentation: vp,
                    options: {
                      challenge: vp.proof.challenge,
                      checks: ["proof"]
                    },
                  };
                  const res = await help.postJson(endpoint, body);
                  expect(res.status).toBe(200);
                  solutions.push(vp);
                })
              );
              expect(solutions.length).toBeGreaterThanOrEqual(1);
            });
          });
        });

        describe("13. Verifier response must adhere to proof verification format for credential and presentation", () => {
          it.skip("credential", async () => {
            const endpoint = vendor.verify_credential_endpoint;
            const body = {
              verifiableCredential: {
                ...vendor.verifiable_credentials[0],
              },
              options: {
                checks: ["proof"]
              }
            };
            const res = await help.postJson(endpoint, body);
            expect(res.status).toBe(200);
            expect(res.body.checks).toEqual(["proof"]);
          });

          it("presentation", async () => {
            const endpoint = vendor.verify_presentation_endpoint;
            const body = {
              verifiablePresentation: {
                ...vendor.verifiable_presentations[0],
              },
              options: {
                challenge: vendor.verifiable_presentations[0].proof.challenge,
                checks: ["proof"]
              },
            };
            const res = await help.postJson(endpoint, body);
            expect(res.status).toBe(200);
            expect(res.body.checks).toEqual(["proof"]);
          });
        });

        describe.skip("14. Verifier error response must provide an error object", () => {
          it("should have error", async () => {
            const endpoint = vendor.verify_presentation_endpoint;
            const body = {
              verifiablePresentation: {
                ...vendor.verifiable_presentations[0],
              },
            };
            const res = await help.postJson(endpoint, body);
            expect(res.status).toBe(400);
            expect(res.body.error).toBeDefined();
          });
        });

        // Reguires valid VC where issuer is not a DID...
        describe.skip("16. Verifier must return a 400 HTTP-Response if the issuer is not a did or issuer.id is not a did.", () => {
          it("should have error", async () => {
            expect(false).toBe(true);
          });
        });
      });
    });
  });
});

function annotateWithUniqueId(credentials) {
  return credentials.map(credential => ({
    ...credential,
    id: `${credential.id}#${uuid()}`
  }));
}
