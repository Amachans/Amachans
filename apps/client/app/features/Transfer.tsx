// /transfer/page.tsx
"use client";

// import { useRouter } from "next/navigation";
import React from "react";
import { useConnect } from "wagmi";

export const Transfer = () => {
  const { connectors, connect } = useConnect();
  return connectors.map((connector) => (
    <>
      <button onClick={() => connect({ connector })}>{connector.name}</button>
      <div>transfer to:</div>
      <div>Amount:</div>
    </>
  ));
};
