
const fixtures = require('../__fixtures__');

describe('issuerAssertionMethods', ()=>{
    fixtures.issuers.forEach((issuer)=>{
        describe(issuer, ()=>{
            fixtures.issuerAssertionMethods[issuer].forEach((assertionMethod)=>{
                describe(assertionMethod, ()=>{
                    fixtures.credentials.forEach((credential)=>{
                        it('should issue ' + credential.type[1], async ()=>{
                            let body = {
                                credential, 
                                options: {
                                    proofPurpose: 'assertionMethod',
                                    issuer: assertionMethod.split('#')[0],
                                    verificationMethod: assertionMethod,
                                } 
                            }
                            const vc = await fixtures.postJson('https://vc.transmute.world/vc-data-model/credentials', body);
                            expect(vc.proof).toBeDefined()
                            fixtures.helpers.writeInteropEvidence('credential--' + issuer.split('/')[2] + '--' + assertionMethod + '--' + credential.type[1] + '.json', vc)
                        })
                    })
                })
            })
        })
    })
})