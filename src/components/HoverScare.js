import React, { useState } from "react";
import useSound from "use-sound";
import phasScare from "../audio/phas-scare.mp3";

const HoverScare = () => {
  //const [playScare] = useSound(phasScare, {volume: 0.25});

  const [play, { stop }] = useSound(phasScare, { volume: 1 });

  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        setIsHovering(true);
        play();
      }}
      onMouseLeave={() => {
        setIsHovering(false);
        stop();
      }}
      
      className="hover-scare"
    ></div>
  );
};

export default HoverScare;
