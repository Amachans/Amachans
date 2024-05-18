import Image from "next/image";
import React from "react";

import { Label } from "@/components/atoms/typography/Label";

type Props = {
  onClick?: () => void;
};
export const Scanner = ({ onClick }: Props): React.ReactNode => {
  return (
    <div className="space-y-1 hover:cursor-pointer" onClick={onClick}>
      <Label value="Scan to Transfer" variant="title" />
      <div className="flex justify-center">
        <Image src={"scanner.png"} alt="qr scanner" width={100} height={100} />
      </div>
    </div>
  );
};
