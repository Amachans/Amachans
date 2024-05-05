import { http, createConfig } from "wagmi";
import { base } from "wagmi/chains";
import { injected, metaMask, safe, walletConnect } from "wagmi/connectors";

import { mainnet } from "./jocChain";

const projectId = "bc511cf1af98c7de16bec0aa264995bb";

export const config = createConfig({
  chains: [mainnet, base],
  connectors: [injected(), walletConnect({ projectId }), metaMask(), safe()],
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
  },
});
