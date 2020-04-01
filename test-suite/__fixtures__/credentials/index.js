
const { removeProof } = require('../helpers');

module.exports = [
    removeProof(require('../../../docs/edu/university-degree-verifiable-credential.json')),
    removeProof(require('../../../docs/cmtr/examples/v0.1/cmtr-verifiable-credential-v0.1.json')),
    removeProof(require('../../../docs/crude/examples/v1.0/crude-product-verifiable-credential-v1.0.json')),
    removeProof(require('../../../docs/prc/danube/prc.json'))
]