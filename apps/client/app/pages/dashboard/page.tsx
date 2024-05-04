// /dashboard/page.tsx
"use client";
import Button from "@mui/material/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export const Dashboard = () => {
  const router = useRouter();

  return (
    <div>
      <div>
        <div>My Wallet</div>
        <div>TODO: getAddressした結果をQRに変換して表示する</div>
      </div>

      <div>Address</div>

      <div>Balance</div>

      <div>
        <Link href="transfer">
          {" "}
          {/* Linkコンポーネントでラップ */}
          <Button>Exit</Button>
        </Link>
      </div>
    </div>
  );
};
export default Dashboard;
