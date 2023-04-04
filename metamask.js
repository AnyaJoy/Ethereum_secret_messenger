var Web3 = require('web3')
var web3 = new Web3('https://goerli.infura.io/v3/0d3314a63ac644e8874a4b614f5ec10f')

async function main() {
    var address0 = '0x3106f87A18e96df9d5D8b369530227F5cC887dE7'
    const address0PK = "e558f773cf0df24fa1914ffec236fd43d53763a01b83059bc1fe827c50d6ad3e";
    
    var address1 = '0xE758789ca997B63a1A59EAD28d22aB0D6f7897d6'

    web3.eth.getBalance(address0).then(console.log)
    web3.eth.getBalance(address1).then(console.log)

    const nonce = await web3.eth.getTransactionCount(address0)

    const transaction = {
        'to': address1, // faucet address to return eth
        'value': 100,
        'gas': 30000,
        // 'maxFeePerGas': 1000000108, - 2.5 by default
        'nonce': nonce,
        // optional data field to send message or execute smart contract
       };

    const signedTx = await web3.eth.accounts.signTransaction(transaction, address0PK);
    
    web3.eth.sendSignedTransaction(signedTx.rawTransaction, function(error, hash) {
        if (!error) {
        console.log(`🎉 The hash of your transaction is:, ${hash}`);
        } else {
        console.log("❗Something went wrong while submitting your transaction:", error)
        }
    })

}
main()



// web3.eth.getAccounts().then(accounts => console.log(accounts))



// web3.eth.getTransactionCount(address1).then((taxCount) => {
//     const rawTx1 = {
//         nonce: web3.utils.toHex(taxCount),
//         to: address1,
//         gasPrice: "0x09184e72a000",
//         gasLimit: "0x27100",
//         value: "0x01",
//         data: "0x000",
//     };

//     const tx = Transaction.fromTxData(rawTx1, { common });
//     const signedTx = await web3.eth.accounts.signTransaction(transaction, PRIVATE_KEY);
//     // const signedTx = tx.sign(hexPK0);
//     const serializedTx = signedTx.serialize();
//     web3.eth.sendSignedTransaction("0x" + serializedTx.toString("hex"), function(error, hash) {
//         if (!error) {
//           console.log("🎉 The hash of your transaction is: ", hash, "\n Check Alchemy's Mempool to view the status of your transaction!");
//         } else {
//           console.log("❗Something went wrong while submitting your transaction:", error)
//         }
//     })
// })

