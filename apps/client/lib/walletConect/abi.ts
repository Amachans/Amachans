export const abi = [
  {
    name: "transfer",
    type: "function",
    stateMutability: "nonpayable",
    inputs: [
      { internalType: "uint256", name: "value", type: "uint256" },
      { internalType: "address", name: "to", type: "address" },
    ],
    outputs: [],
  },
] as const;
