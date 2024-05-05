const erc20BasicLib = require("@gusdk/erc20-basic")
const ethers = require('ethers')

async function getTokenName(tokenAddress) {
  endpointUrl = 'https://a1.ep.gu.net/t3/ba5125f1-76b7-4198-9b7c-ea6fc22e0aa6?key=Izq0XaI3WV9u40bXxWofv1cZqYI48SiJ7qFTgVRh'
  const provider = new ethers.providers.JsonRpcProvider({url:endpointUrl})

  const coin = erc20BasicLib.ERC20Basic__factory.connect(tokenAddress, provider);
  return await coin.name()
}

const tokenAddress = '0xca01C03CDd1fA29a07313dDeB27A6080d22D8287'
getTokenName(tokenAddress).then(value => console.log(value));