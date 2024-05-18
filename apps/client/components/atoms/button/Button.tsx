import React from "react";

export type ButtonProps = {
  value: string;
  color: "primary" | "secondary" | "tertiary";
  onClick?: () => void;
};
export const Button = ({ value, color, onClick }: ButtonProps) => {
  var colorClass;
  switch (color) {
    default:
    case "primary":
      colorClass = "bg-green-600 text-white";
      break;
    case "secondary":
      colorClass = "bg-red-500 text-white";
      break;
    case "tertiary":
      colorClass = "bg-gray-400 text-white";
      break;
  }

  return (
    <button
      className={`tx-sm ${colorClass} py-2 px-8 rounded`}
      onClick={onClick}
    >
      <div>{value}</div>
    </button>
  );
};
