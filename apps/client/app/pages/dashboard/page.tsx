import React from "react"
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import Link from "next/link";

export const Dashboard = () => {
    const router = useRouter();

    return (
        <div>
            <div>
                <div>
                    My Wallet
                </div>
                <div>
                    TODO: getAddressした結果をQRに変換して表示する
                </div>
            </div>

            <div>
                Address
            </div>

            <div>
                Balance
            </div>

            <div>
                <Link href="/dashboard"> {/* Linkコンポーネントでラップ */}
                    <Button>
                        Exit
                    </Button>
                </Link>
            </div>

        </div>
    )
}