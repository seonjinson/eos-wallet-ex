const EOS = require('eosjs');

const config = {
    httpEndpoint: 'https://api-kylin.eosasia.one',
    chainId: '5fff1dae8dc8e2fc4d5b23b2c7665c97f9e9d8edf2b6485a86ba311c25639191'
};

EOS(config).getAccount('t3seonjinson',(error,account)=>{
    if(error){
        console.error(error);
    }
    console.log(account);
});

EOS(config).getAccount({account_name:'t3seonjinson'}).
then(console.log).catch(console.error);