// /transfer/page.tsx
"use client"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider, useAccount } from 'wagmi'
import { config } from '../../../lib/walletConect/config'
import { Account } from '../../../lib/walletConect/account' 
import { WalletOptions } from '../../../lib/walletConect/wallet-options' 

const queryClient = new QueryClient()

function ConnectWallet() { 
  const { isConnected } = useAccount() 
  if (isConnected) return <Account /> 
  return <WalletOptions /> 
} 

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}> 
        <ConnectWallet /> 
      </QueryClientProvider> 
    </WagmiProvider>
  )
}

export default App
