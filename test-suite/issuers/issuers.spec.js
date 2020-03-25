
const fixtures = require('../__fixtures__');

describe('issuers', ()=>{
    fixtures.issuers.forEach((issuer)=>{
        describe(issuer, ()=>{
            fixtures.credentials.forEach((credential)=>{
                it('should issue ' + credential.type[1], async ()=>{
                    const vc = await fixtures.postJson(issuer, credential);
                    expect(vc.proof).toBeDefined()
                    fixtures.helpers.writeInteropEvidence('credential--' + issuer.split('/')[2] + '--' + credential.type[1] + '.json', vc)
                })
            })
        })
    })
})