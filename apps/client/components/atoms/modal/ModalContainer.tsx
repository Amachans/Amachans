import React from "react";

export type ModalContainerProps = {
  isOpened: boolean;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
};

export const ModalContainer = ({
  isOpened,
  setIsOpened,
  children,
}: ModalContainerProps) => {
  if (!isOpened) {
    return <></>;
  }
  return (
    <>
      <div className="absolute bg-white left-1/2 top-1/4 transform -translate-x-1/2 -translate-y-1/2 m-w-80 z-20 rounded p-8">
        {children}
      </div>
      <div
        className="fixed top-0 bg-black bg-opacity-50 w-full h-full z-10"
        onClick={() => {
          setIsOpened(false);
        }}
      ></div>
    </>
  );
};
