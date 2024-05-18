import React from "react";

import { Label } from "@/components/atoms/typography/Label";

type Props = {
  variant: "vertical" | "horizontal";
  label: string;
  children: React.ReactNode;
};

export const LabeledValue = ({ variant, label, children }: Props) => {
  switch (variant) {
    default:
    case "vertical":
      return (
        <div className="space-y-2">
          <Label value={label} variant="label" />
          <div className="pl-8"> {children}</div>
        </div>
      );
    case "horizontal":
      return (
        <div className="flex items-center space-x-4">
          <Label value={label} variant="label" />
          <div>{children}</div>
        </div>
      );
  }
};
