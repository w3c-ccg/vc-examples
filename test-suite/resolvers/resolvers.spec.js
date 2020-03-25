
const fixtures = require('../__fixtures__');

describe('resolvers', ()=>{
    fixtures.resolvers.forEach((resolver)=>{
        describe(resolver, ()=>{
            fixtures.dids.forEach((did)=>{
                it('should resolve ' + did, async ()=>{
                    const doc = await fixtures.getJson(resolver + did)
                    expect(doc.didDocument.id).toBe(did)
                })
            })
        })
    })
})