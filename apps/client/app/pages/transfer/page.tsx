"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";

import { Transfer } from "@/app/features/Transfer";
import { config } from "@/lib/walletConnect/config";

const transferPage = () => {
  const queryClient = new QueryClient();
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <Transfer />
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default transferPage;
