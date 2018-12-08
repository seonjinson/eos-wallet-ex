const EOS = require('eosjs');

const config = {
    httpEndpoint: 'https://api-kylin.eosasia.one',
    chainId: '5fff1dae8dc8e2fc4d5b23b2c7665c97f9e9d8edf2b6485a86ba311c25639191',
    keyProvider: ['5KRP9bFk6bnKdSjd57CwvmNSpuYqXHquCQjJeADVQsTuztvDVbz'], //보내는 사람의 active key
};

//eosio transfer
EOS(config).transfer('t3seonjinson','t4seonjinson','50.0000 EOS','test')
   .then(console.log).catch(console.error);

//transaction
EOS(config).transaction(
    {
      actions: [
        {
          account: 'eosio.token',  //contract name, eosio 의 system contract
          name: 'transfer',  //action name
          authorization: [{
            actor: 't3seonjinson',  //권한 누가?
            permission: 'active' //active 권한
          }],
          data: {
            from: 't3seonjinson',
            to: 't4seonjinson',
            quantity: '5.0000 EOS',
            memo: 'test2'
          }
        }
      ]
    }
  ).then(console.log).catch(console.error);

//transaction
  EOS(config).transaction('eosio.token',(coin => {
      coin.transfer('t3seonjinson','t4seonjinson','1.0000 EOS','test')
  })).then(console.log).catch(console.error);

//contract api
  EOS(config).contract('eosio.token'). //contract에 대한 정보를 가져옴
    then(coin => coin.transfer('t3seonjinson','t4seonjinson','3.0000 EOS','test contract api')).
    then(console.log).catch(console.error)