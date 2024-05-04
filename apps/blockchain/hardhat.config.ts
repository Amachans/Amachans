import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    joc: {
      url: "https://a1.ep.gu.net/t3/ba5125f1-76b7-4198-9b7c-ea6fc22e0aa6?key=Izq0XaI3WV9u40bXxWofv1cZqYI48SiJ7qFTgVRh",
      accounts: ["3529714bce2ea8f85c2d4c492751cc7d689c0f08904063c2d2a96344aee470e7"],
      chainId: 81
    }
  },
  jocTestnetScan: {
    apiKey: "Izq0XaI3WV9u40bXxWofv1cZqYI48SiJ7qFTgVRh"
  }
};

export default config;
