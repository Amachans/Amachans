import { http, createConfig } from "wagmi";
import { base, mainnet } from "wagmi/chains";
import { walletConnect } from "wagmi/connectors";

const projectId = "bc511cf1af98c7de16bec0aa264995bb";

export const config = createConfig({
  chains: [mainnet, base],
  connectors: [walletConnect({ projectId })],
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
  },
});
