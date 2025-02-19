import React from "react";
import { IoPlay } from "react-icons/io5";
import { IoPause } from "react-icons/io5";
import { motion } from "framer-motion";
function Card({ data, reference }) {
  return (
    <>
      <motion.div
        drag
        dragConstraints={reference}
        whileDrag={{ scale: 1.1 }}
        dragElastic={0.3}
        dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }}
        className="relative flex-shrink-0 w-60 h-72 bg-zinc-200/90 rounded-[40px] text-white shadow-xl border-1 border-zinc-100 px-8 py-10 overflow-hidden">
        <div className="footer absolute bottom-0 w-full left-0">
          <img src={data.poster} alt={data.songName} className="object-cover h-50 w-full"  draggable="false"  />
          <div className="p-7 py-0">
        <p className="text-zinc-800 text-lg font-sm mt-5 leading-tight">
          {data.songName}</p>
        <p className="text-zinc-800 text-sm font-bod-semibold mt-1 leading-tight">
          {data.artistName}</p>
        </div>
          <div className="flex items-center justify-between px-7 mb-4">
            <p className="text-sm text-zinc-800">{data.duration} - Minutes</p>
            <span className="bg-zinc-300 px-2 py-2 rounded-full">
              {data.close ? (
                <IoPause size=".8em" color="#000000" />
              ) : (
                <IoPlay size=".7em" color="#000000" />
              )}
            </span>
          </div>

          {data.tag.isOpen && (
            <div
              className={`tag w-full py-3 ${
                data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
              } flex item-center justify-center`}
            >
              <h3 className="text-md font-semibold">{data.tag.tagTitle}</h3>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
}

export default Card;
