let input = document.getElementById("userInput");
const button = document.getElementById("setMessageButton");
const ethereumButton = document.getElementById("enableEthereumButton");

input.addEventListener("input", console.log(''))
button.addEventListener("click", sendMessage);
ethereumButton.addEventListener("click", connectEthereum);

var contract

async function main() {
    // Connect a the web3 provider
    if (typeof web3 !== 'undefined') {
        web3 = new Web3(ethereum);
    } else {
        web3 = new Web3(new Web3.providers.HttpProvider("https://goerli.infura.io/v3/0d3314a63ac644e8874a4b614f5ec10f"));
        // web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));
    }

    web3.eth.defaultAccount = web3.eth.accounts[0];

    var RemixContract = new web3.eth.Contract(
      [  //abi
        {
          constant: false,
          inputs: [
            {
              name: "x",
              type: "string",
            },
          ],
          name: "setMessage",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "getMessage",
          outputs: [
            {
              name: "",
              type: "string",
            },
          ],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
      ],
      "0x50D05467Ce89a76f40b9a079DB15a1cD43ABc188",
    //   "0x85e848C49F05C311EBfd3b4479917A5Fd12e188f", //contract address
      { from: "0xD777921c7469De83E6c2875541233a8F416d0375" } //sender address
    );

    contract = RemixContract.methods
    console.log(contract)
}
main()

async function sendMessage() {
    const message = input.value
    console.log(input.value)
    contract.setMessage(message).send()
    input.value=''
}

async function connectEthereum() {
    console.log('here')
    ethereum.request({ method: 'eth_requestAccounts' });
}
