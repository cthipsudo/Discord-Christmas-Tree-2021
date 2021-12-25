import React from "react";
import useSound from "use-sound";
import playlist from "../data/music";

const MusicPlayer = () => {
  let soundUrl = playlist[0].src;
  const [play, { stop, isPlaying }] = useSound(soundUrl);

  return(
    <div className="music-player">
      <PlayButton
      active={isPlaying}
      size={60}
      iconColor="var(--color-background)"
      idleBackgroundColor="var(--color-text)"
      activeBackgroundColor="var(--color-primary)"
      play={play}
      stop={stop}
    />
    </div>
  );
}
export default MusicPlayer;