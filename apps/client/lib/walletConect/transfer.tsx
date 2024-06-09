import * as React from "react";
import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";

import { abi } from "./abi";

export function TransferFt() {
  const { data: hash, writeContract } = useWriteContract();
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const to = formData.get("address") as `0x${string}`;
    const value = formData.get("value") as string;
    writeContract({
      address: "0x890e7b769e2634CDd934b9C7f007227f7f0492B7",
      abi,
      functionName: "transfer",
      args: [BigInt(value), to],
    });
  }

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });
  return (
    <form onSubmit={submit}>
      <input name="address" placeholder="0xA0Cf…251e" required />
      <input name="value" placeholder="0.05" required />
      <button type="submit">Transfer</button>
      {hash && <div>Transaction Hash: {hash}</div>}
      {isConfirming && <div>Waiting for confirmation...</div>}
      {isConfirmed && <div>Transaction confirmed.</div>}
    </form>
  );
}
