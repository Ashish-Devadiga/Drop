import React from "react";

function Background() {
  return (
    <>
    <div className="w-full h-screen fixed z-[2]">
      <div className="absolute top-[5%] w-full py-10 flex justify-center text-zinc-600 font-semibold">
        Drop.Nitro
      </div>
      <h1 className="text-[10vw] leading-none tracking-tighter font-sm text-zinc-900 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-lg">
        Drop
      </h1>
      </div>
    </>
  );
}

export default Background;
