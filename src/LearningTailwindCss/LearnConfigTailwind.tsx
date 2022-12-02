import React, { FC } from "react";
type P = {};
const LearnConfigTailwind: FC<P> = () => {
  return (
    <div>
      <div className="relative bg-gray-300 p-">
        <div>
          <img
            className="my-10 skew-y-6 rounded-xl"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyJN66lqAeSpmX6ZhdbppNM8f4_71hzIiSWA&usqp=CAU"
            alt=""
          />
        </div>

        <div className="animate-spin absolute w-20 h-20 ml-10 mt-12 border-4 border-myCustom-second rounded-full ">
          <div className="w-4 h-4 bg-black rounded-full "></div>
        </div>

        <div className="flex  ">
          <div className="animate-spin-reverse w-20 h-20 border-4 rounded-full border-myCustom-first">
            <div className="w-4 h-4 bg-black rounded-full "></div>
          </div>

          <div className="animate-spin-reverse w-20 h-20 border-4 rounded-full border-myCustom-first  ">
            <div className="w-4 h-4 bg-black rounded-full "> </div>
          </div>
        </div>

        <div className="">Hello</div>
      </div>
    </div>
  );
};
export default LearnConfigTailwind;
