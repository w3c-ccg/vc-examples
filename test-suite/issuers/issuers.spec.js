
const fixtures = require('../__fixtures__');

describe('issuers', ()=>{
    fixtures.issuers.forEach((issuer)=>{
        describe(issuer, ()=>{
            fixtures.credentials.forEach((credential)=>{
                it('should issue ' + credential.type[1], async ()=>{
                    let options = undefined

                    if (issuer.indexOf('uniissuer') !== -1 || issuer.indexOf('univerifier') !== -1){
                        options = {
                            ...options,
                            assertionMethod: 'did:sov:danube:TVfus95c1sHBZxf2NsETqt#key-1'
                        }
                    }
                    const vc = await fixtures.postJson(issuer, { credential, options });
                    expect(vc.proof).toBeDefined()
                    fixtures.helpers.writeInteropEvidence('credential--' + issuer.split('/')[2] + '--' + credential.type[1] + '.json', vc)
                })
            })
        })
    })
})
