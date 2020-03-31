
const fixtures = require('../__fixtures__');

describe('vc-verifiers', ()=>{
    fixtures.vcVerifiers.forEach((verifier)=>{
        describe(verifier, ()=>{
            fixtures.verifiableCredentials.forEach((credential)=>{
                it('should verify ' + credential.type[1], async ()=>{
                    let options = { 
                        checks: ['proof'],
                    }
                    // Danube tech expects an empty options object...
                    // if (verifier.indexOf('danube') !== -1){
                    //     options = {};
                    // } 
                    const verificaton = await fixtures.postJson(verifier, {
                        verifiableCredential: credential,
                        options,
                    });
                    expect(verificaton.checks).toEqual([ 'proof' ])
                    fixtures.helpers.writeInteropEvidence('vc-verification--' + verifier.split('/')[2] + '--' + credential.type[1] + '.json', verificaton)
                })
            })
        })
    })
})