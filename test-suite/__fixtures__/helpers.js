const fs = require('fs');
const path = require('path');

const removeProof = (vc)=>{
    delete vc.proof;
    return vc;
}

const writeInteropEvidence = (evidencePath, evidenceData)=>{
    fs.writeFileSync(path.resolve(__dirname, '../data/', evidencePath), JSON.stringify(evidenceData, null, 2))
}

module.exports = {
    removeProof,
    writeInteropEvidence
}