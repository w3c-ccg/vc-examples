const fetch = require('node-fetch')

const getJson = async url =>
    fetch(url, {
    headers: {
        Accept: 'application/ld+json',
    },
    method: 'get',
    }).then(data => data.json());

const postJson = async (url, body) =>
    fetch(url, {
    headers: {
        Accept: 'application/ld+json',
        'Content-Type': 'application/json',
    },
    method: 'post',
    body: JSON.stringify(body)
    }).then(data => data.json());

module.exports = {
    getJson,
    postJson,
    dids: require('./dids'),
    issuers: require('./issuers'),
    verifiers: require('./verifiers'),
    resolvers: require('./resolvers'),
    credentials: require('./credentials'),
    verifiableCredentials: require('./verifiable-credentials'),
    helpers:require('./helpers')
}