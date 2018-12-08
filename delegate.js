const EOS = require('eosjs');

const config = {
    httpEndpoint: 'https://api-kylin.eosasia.one',
    chainId: '5fff1dae8dc8e2fc4d5b23b2c7665c97f9e9d8edf2b6485a86ba311c25639191',
    keyProvider: ['5KRP9bFk6bnKdSjd57CwvmNSpuYqXHquCQjJeADVQsTuztvDVbz'], //보내는 사람의 active key
};

EOS(config).transaction(tr => {
    tr.delegatebw({
        from:'t3seonjinson',
        receiver:'t4seonjinson',
        stake_net_quantity: '10.0000 EOS',
        stake_cpu_quantity: '0.0000 EOS',
        transfer: 1 //0--> 나한테 줄때, (빌림-receiver가 남일때), unstake시 다시 가져옴, 1--> 빌려준게아니고 준거.
    })
}).then(console.log).catch(console.error);