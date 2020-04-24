const fetch = require('node-fetch');

const getJson = async url => {
  const res = await fetch(url, {
    headers: {
      Accept: 'application/ld+json',
    },
    method: 'get',
  });

  const resBody = await res.json();
  if(res.status > 300) {
    console.error('ERROR with GET: ', url);
    console.error(resBody);
  }
  return res;
};

const postJson = async (url, body) => {
  const res = await fetch(url, {
    headers: {
      Accept: 'application/ld+json,application/json',
      'Content-Type': 'application/json',
    },
    method: 'post',
    body: JSON.stringify(body),
  });
  const resBody = await res.json();
  // if (res.status > 300) {
  //   console.error("ERROR with POST: ", url);
  //   console.error("BODY: ", JSON.stringify(body, null, 2));
  //   console.error(resBody);
  // }
  return {status: res.status, body: resBody};
};

module.exports = {
  getJson,
  postJson,
};
