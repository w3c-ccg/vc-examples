
const fixtures = require('../__fixtures__');

describe('vp-verifiers', ()=>{
    fixtures.vpVerifiers.forEach((verifier)=>{
        describe(verifier, ()=>{
            fixtures.verifiableCredentials.forEach((credential)=>{
                it('should verify ' + credential.type[1], async ()=>{
                    const verificaton = await fixtures.postJson(verifier, credential);
                    expect(verificaton.checks).toEqual([ 'proof' ])
                    fixtures.helpers.writeInteropEvidence('vp-verification--' + verifier.split('/')[2] + '--' + credential.type[1] + '.json', verificaton)
                })
            })
        })
    })
})