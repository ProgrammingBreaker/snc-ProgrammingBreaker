import React, { FunctionComponent } from "react";
import classNames from "classnames";

export const CardSkeleton: FunctionComponent = () => {
  return (
    <div className="w-[300px] relative bg-no-repeat bg-cover h-auto z-0 rounded-xl overflow-hidden m-4 bg-gray-50 animate-pulse shadow-lg">
      <div className="relative top-0 left-0 w-full h-full z-10 bg-black/50 flex items-center justify-center flex-col py-6 px-12 gap-2">
        <div className="rounded-full border-white border-2 object-cover w-32 h-32 bg-gray-400" />
        <div className="w-32 h-6 bg-gray-200 rounded mt-4" />
        <div className="w-24 h-5 bg-gray-200 rounded mt-2" />
        <div className="flex flex-row justify-between items-center gap-4 mt-4">
          <div className="w-20 h-4 bg-gray-200 rounded" />
          <div className="w-20 h-4 bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  );
};
