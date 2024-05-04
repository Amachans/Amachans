import React from "react";
import { Button as ButtonBase, ButtonProps as BaseProps } from "@mui/material"
import { ButtonHTMLAttributes } from "react"

export type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ variant, ...restProps }: ButtonProps) => {
    const overrideVariant = variant ?? "contained";
    const noShadowSx = { boxShadow: "none" }
    return (
        <ButtonBase
        variant = {overrideVariant}
        sx = {{ ...noShadowSx, textTransform: "none"}}
        {...restProps}
        />
    )
};
