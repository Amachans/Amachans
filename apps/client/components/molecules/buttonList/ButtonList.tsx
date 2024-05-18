import React from "react";

import { Button, ButtonProps } from "@/components/atoms/button/Button";

type Props = {
  buttons: ButtonProps[];
  children?: React.ReactNode;
};

export const ButtonList = ({ buttons, children }: Props) => {
  return (
    <div className="flex flex-col space-y-4">
      {buttons.map((props, i) => {
        return <Button {...props} key={i} />;
      })}
      {children}
    </div>
  );
};
