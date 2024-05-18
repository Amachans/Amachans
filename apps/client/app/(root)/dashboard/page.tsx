// /dashboard/page.tsx
"use client";
import Image from "next/image";
import React, { useMemo, useState } from "react";
import { useAccount, useConnect } from "wagmi";

import { ButtonProps } from "@/components/atoms/button/Button";
import { ButtonList } from "@/components/molecules/buttonList/ButtonList";
import { Modal } from "@/components/organisms/modal/Modal";
import { Scanner } from "@/components/organisms/scanner/Scanner";
import { TransferInfo } from "@/components/organisms/transferInfo/TransferInfo";
import { WalletInfo } from "@/components/organisms/walletInfo/WalletInfo";

const Dashboard = () => {
  const [isScanned, setIsScanned] = useState(false);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const { connectors, connect } = useConnect();
  const { isConnected } = useAccount();

  const buttonList = useMemo(() => {
    const list: ButtonProps[] = [];

    if (!isConnected) {
      list.push({
        value: "Wallet Connect",
        color: "primary",
        onClick: () => {
          setIsModalOpened(!isModalOpened);
        },
      });
    }
    if (isScanned) {
      list.push({
        value: "Exit",
        color: "tertiary",
        onClick: () => {
          setIsScanned(false);
        },
      });
    }
    return list;
  }, [isConnected, isModalOpened, isScanned]);

  const walletButtonList: ButtonProps[] = useMemo(() => {
    return connectors.map((connector) => {
      return {
        value: connector.name,
        color: "primary",
        onClick: () =>
          connect(
            { connector },
            {
              onSuccess: () => {
                setIsModalOpened(false);
              },
            }
          ),
      };
    });
  }, [connect, connectors]);
  return (
    <>
      <div className="space-y-8 flex flex-col justify-center items-center">
        {!isScanned ? (
          <Scanner
            onClick={() => {
              setIsScanned(true);
            }}
          />
        ) : (
          <TransferInfo />
        )}

        {isConnected && <WalletInfo />}
        <ButtonList buttons={buttonList} />
      </div>
      <Modal
        isOpened={isModalOpened}
        setIsOpened={setIsModalOpened}
        title="Connect To JOC"
        buttonList={walletButtonList}
      >
        <div className="flex justify-center">
          <Image src={"joc.png"} alt="joc" height={200} width={200} />
        </div>
      </Modal>
    </>
  );
};
export default Dashboard;
