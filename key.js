const EOS = require('eosjs');
const ecc = EOS.modules.ecc;

const config = {
    httpEndpoint: 'https://api-kylin.eosasia.one',
    chainId: '5fff1dae8dc8e2fc4d5b23b2c7665c97f9e9d8edf2b6485a86ba311c25639191'
};

ecc.randomKey().then(privateKey => {
    console.log('privateKey: ',privateKey);

    const pulicKey = ecc.privateToPublic(privateKey);
    console.log('publicKey: ',pulicKey);
});

