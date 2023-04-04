var Web3 = require('web3')
var web3 = new Web3('http://127.0.0.1:7545')

web3.eth.getTransactionCount('0xD777921c7469De83E6c2875541233a8F416d0375').then(console.log)