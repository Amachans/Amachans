// /transfer/page.tsx
"use client";

// import { useRouter } from "next/navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { useConnect } from "wagmi";
import { WagmiProvider } from "wagmi";

import { config } from "@/lib/walletConnect/config";

export const Transfer = () => {
  const { connectors, connect } = useConnect();
  const queryClient = new QueryClient();
  return connectors.map((connector) => (
    <WagmiProvider config={config} key={connector.uid}>
      <QueryClientProvider client={queryClient}>
        <div>
          <button onClick={() => connect({ connector })}>
            {connector.name}
          </button>
          <div>transfer to:</div>
          <div>Amount:</div>
        </div>
      </QueryClientProvider>
    </WagmiProvider>
  ));
};

export default Transfer;
