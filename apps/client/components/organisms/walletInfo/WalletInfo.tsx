import { useAccount, useBalance, useChainId } from "wagmi";

import { Label } from "@/components/atoms/typography/Label";
import { LabeledValue } from "@/components/molecules/LabeledValue/LabeledValue";

export const WalletInfo = () => {
  const { address } = useAccount();
  const chainId = useChainId();
  const { data } = useBalance({ address, chainId });

  return (
    <div className="space-y-2 p-4 rounded border border-red-500">
      <div className="flex justify-center">
        <Label value="My Wallet" variant="title" />
      </div>
      <LabeledValue variant="horizontal" label="Address">
        {address}
      </LabeledValue>
      <LabeledValue variant="horizontal" label="Balance">
        {data?.formatted}
      </LabeledValue>
    </div>
  );
};
