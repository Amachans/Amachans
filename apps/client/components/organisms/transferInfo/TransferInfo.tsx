import { Input } from "@/components/atoms/Input/Input";
import { LabeledValue } from "@/components/molecules/LabeledValue/LabeledValue";

export const TransferInfo = () => {
  const mockAddress = "0x123456678abcdef";
  return (
    <div className="space-y-2 p-4 rounded bg-yellow-100">
      <LabeledValue variant="vertical" label="Transfer To">
        {mockAddress}
      </LabeledValue>
      <LabeledValue variant="vertical" label="Payment Amount">
        <Input />
      </LabeledValue>
    </div>
  );
};
