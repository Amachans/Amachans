const erc20BasicLib = require("@gusdk/erc20-basic")
const ethers = require('ethers')

async function deploy() {
  const provider = new ethers.providers.JsonRpcProvider({ url: "https://a1.ep.gu.net/t3/ba5125f1-76b7-4198-9b7c-ea6fc22e0aa6?key=Izq0XaI3WV9u40bXxWofv1cZqYI48SiJ7qFTgVRh" })
  const signer = new ethers.Wallet("3529714bce2ea8f85c2d4c492751cc7d689c0f08904063c2d2a96344aee470e7", provider);

  const factory = new erc20BasicLib.ERC20Basic__factory(signer)
  const erc20 = await factory.deploy(
      "test joc token", // 例：「TEST」
      "TJT", // 例：「TEST」
      100000, // 例：「100」
      18 // 例：「18」
  );

  return erc20.address
}

deploy().then(address => console.log(address));

//the contract address to japan open chain testnet is here
//0xca01C03CDd1fA29a07313dDeB27A6080d22D8287