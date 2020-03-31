
const fixtures = require('../__fixtures__');

describe('vp-verifiers', ()=>{
    fixtures.vpVerifiers.forEach((verifier)=>{
        describe(verifier, ()=>{
            fixtures.verifiablePresentations.forEach((verifiablePresentation)=>{
                it('should verify ' + verifiablePresentation.verifiableCredential[0].type[1], async ()=>{
                    const verificaton = await fixtures.postJson(verifier, {
                        verifiablePresentation,
                        options: {
                            checks: ['proof'],
                        },
                    });
                    expect(verificaton.checks).toEqual([ 'proof' ])
                    fixtures.helpers.writeInteropEvidence('vp-verification--' + verifier.split('/')[2] + '--' + verifiablePresentation.verifiableCredential[0].type[1] + '.json', verificaton)
                })
            })
        })
    })
})