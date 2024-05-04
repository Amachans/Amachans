const { ethers } = require("hardhat");
require("@nomicfoundation/hardhat-toolbox");

async function main() {
  const JocTest = await ethers.getContractFactory("AamachanTestStableCoin");
  const jocTest = await JocTest.deploy("0xF66f62ff346644657C13E136e15AF80E33e028f9", "0xF66f62ff346644657C13E136e15AF80E33e028f9");
  console.log("JocTest deployed to:", jocTest.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });


//the contract address to japan open chain testnet is here
//0x0ab80c8698C1ac5Fe9eA2eF197ed7144BE39Ac99