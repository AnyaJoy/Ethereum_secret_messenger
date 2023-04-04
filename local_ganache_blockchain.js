const { Transaction } = require("@ethereumjs/tx");
const { default: Common, Chain, Hardfork } = require("@ethereumjs/common");
var Web3 = require('web3')
var web3 = new Web3('http://127.0.0.1:7545')

const common = Common.custom(
    {
        name: "my-private-blockchain",
        networkId: 5777, chainId: 1337,
    },
    {
        baseChain: Chain.Mainnet,
        hardfork: Hardfork.Istanbul,
    });


// web3.eth.getAccounts().then(accounts => console.log(accounts))

var address0 = '0xD777921c7469De83E6c2875541233a8F416d0375'
const address0PK = "c79c1e79f4b51ac9953115cb2bf8249c114d78171ee51147766adc901e43607e";
const hexPK0 = Buffer.from(address0PK, "hex");

var address1 = '0x99312d2A9Ba50327Ad46122701d85E837D4B5Bc0'

web3.eth.getBalance(address0).then(console.log)
web3.eth.getBalance(address1).then(console.log)

const rawTx1 = {
    nonce: "0x00",
    to: address1,
    gasPrice: "0x09184e72a000",
    gasLimit: "0x27100",
    value: "0x01",
    data: "0x000",
};

const tx = Transaction.fromTxData(rawTx1, { common });
const signedTx = tx.sign(hexPK0);
const serializedTx = signedTx.serialize();
web3.eth.sendSignedTransaction("0x" + serializedTx.toString("hex")) .then(console.log);