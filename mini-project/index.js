let input = document.getElementById("userInput");
const button = document.getElementById("setMessageButton");

input.addEventListener("input")
button.addEventListener("click", sendMessage);

var contract

async function main() {
    // Connect a the web3 provider
    if (typeof web3 !== 'undefined') {
        web3 = new Web3(ethereum);
    } else {
        web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));
    }

    web3.eth.defaultAccount = web3.eth.accounts[0];

    var RemixContract = new web3.eth.Contract(
      [ //abi
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
      "0x85e848C49F05C311EBfd3b4479917A5Fd12e188f", //contract address
      { from: "0xD777921c7469De83E6c2875541233a8F416d0375" } //sender address
    );

    contract = RemixContract.methods
    console.log(contract)
}
main()

async function sendMessage() {
    const message = input.value
    console.log(input.value)
    contract.setMessage(message)
    input.value=''
}
