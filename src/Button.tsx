import React, { ButtonHTMLAttributes, FC } from "react";
type P = {
  children: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<P> = (props) => {
  return <button {...props} className="px-5 py-1 bg-gray-600 rounded-md text-white hover:bg-gray-700 ">{props.children}</button>;
};

export default Button;
