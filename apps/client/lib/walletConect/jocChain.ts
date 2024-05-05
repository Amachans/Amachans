import { type Chain } from "viem";

export const mainnet = {
  id: 81,
  name: "Japan Open Chain (Mainnet)",
  nativeCurrency: {
    name: "Japan Open Chain Token",
    symbol: "JOC",
    decimals: 18,
  },
  rpcUrls: {
    default: { http: ["https://rpc-1.japanopenchain.org:8545"] },
  },
  blockExplorers: {
    default: { name: "Jocscan", url: "https://explorer.japanopenchain.org" },
  },
  contracts: {
    ensRegistry: {
      address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
    },
    ensUniversalResolver: {
      address: "0xE4Acdd618deED4e6d2f03b9bf62dc6118FC9A4da",
      blockCreated: 16773775,
    },
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 14353601,
    },
    amachanContract: {
      address: "0x0ab80c8698C1ac5Fe9eA2eF197ed7144BE39Ac99",
      blockCreated: 11037692,
    },
  },
} as const satisfies Chain;
