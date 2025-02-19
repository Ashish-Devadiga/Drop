import React, { useState, useRef} from "react";
import Card from "./Card";

function Forground() {
  const ref = useRef(null);
  const data = [
    {
      poster: "https://i.ytimg.com/vi/vX2cDW8LUWk/maxresdefault.jpg",
      songName: "Excuses",
      artistName: "AP Dhillon",
      duration: "3:45",
      close: false,
      tag: { isOpen: true, tagTitle: "Play", tagColor: "blue" }
    },
    {
      poster: "https://imgs.search.brave.com/fW6IDDA7yrumZHAPSXSYsml_3DoJICHEZ-ef9frsKwU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzF0Mis5dHZ1bkwu/anBn",
      songName: "Cheap Thrills",
      artistName: "Sia",
      duration: "3:44",
      close: true,
      tag: { isOpen: false, tagTitle: "Play", tagColor: "blue" }
    },
    {
      poster: "https://imgs.search.brave.com/3mjWo2zgo-UMqboj91EW8jWuovSiwcp_roOVLYy-LqA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L3lv/dXR1YmUvaW1hZ2Vz/LzUvNTcvRWRfU2hl/ZXJhbl8tX1NoYXBl/X29mX1lvdV9PZmZp/Y2lhbF9WaWRlby9y/ZXZpc2lvbi9sYXRl/c3Qvc2NhbGUtdG8t/d2lkdGgtZG93bi8y/MjU_Y2I9MjAxNzA0/MjUwMTM0NDg.jpeg",
      songName: "Shape of You",
      artistName: "Ed Sheeran",
      duration: "3:53",
      close: false,
      tag: { isOpen: true, tagTitle: "Play", tagColor: "blue" }
    },
    
    {
      poster: "https://www.billboard.com/wp-content/uploads/media/dj-snake-ft-justin-bieber-let-me-love-you-vid-still-2016-billboard-1548.jpg?w=942&h=623&crop=1&resize=942%2C623",
      songName: "Let Me Love You",
      artistName: "DJ Snake ft. Justin Bieber",
      duration: "3:25",
      close: false,
      tag: { isOpen: true, tagTitle: "Play", tagColor: "blue" }
    },
    {
      poster: "https://i.ytimg.com/vi/gOMhN-hfMtY/maxresdefault.jpg", 
      songName: "Stan",
      artistName: "Eminem",
      duration: "6:44",
      close: false,
      tag: { isOpen: true, tagTitle: "Play", tagColor: "blue" }
    }
    
  ];
  
  return (
    <>
      <div  ref={ref}className="w-full h-full z-[3] top-0 left-0 fixed flex gap-10 flex-wrap p-10">
      {data.map((items, index)=>(
        <Card data={items} reference={ref} />
      ))}
      </div>
    </>
  );
}

export default Forground;
