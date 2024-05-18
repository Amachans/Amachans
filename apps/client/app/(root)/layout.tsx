"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";

import { Header } from "@/components/atoms/header/Header";
import { config } from "@/lib/walletConect/config";

const queryClient = new QueryClient();
const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <div className="h-screen relative">
            <Header />
            <div className="p-12 flex justify-center">{children}</div>
          </div>
        </QueryClientProvider>
      </WagmiProvider>
    </div>
  );
};
export default Layout;
