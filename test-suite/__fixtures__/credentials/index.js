
const { removeProof } = require('../helpers');

module.exports = [
    removeProof(require('../../../docs/edu/university-degree-verifiable-credential.json')),
    removeProof(require('../../../docs/cmtr/examples/v0.1/cmtr-verifiable-credential-v0.1.json'))
]