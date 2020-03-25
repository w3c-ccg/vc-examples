const fetch = require('node-fetch')

const getJson = async url =>
    fetch(url, {
    headers: {
        Accept: 'application/ld+json',
    },
    method: 'get',
    }).then(data => data.json());

module.exports = {
    dids: require('./dids'),
    resolvers: require('./resolvers'),
    getJson
}