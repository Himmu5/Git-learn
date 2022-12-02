import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Selector } from "./Selector";

type P = {};

const Increment: FC<P> = () => {

  const count = useSelector(Selector);

  return (
    <div className=" p-10 bg-myCustom-second text-white font-bold ">
      <p className="text-2xl font-bold ">{count}</p>
    </div>
  );
};
export default Increment;
