import React, { useState, useEffect } from "react";
import useSound from "use-sound";
import playlist from "../data/music";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlayCircle,
  faStopCircle,
  faFastBackward,
  faFastForward,
} from "@fortawesome/free-solid-svg-icons";

const MusicPlayer = () => {
  //console.log(soundUrl);
  const [playing, setPlaying] = useState(false);
  let [songIndex, setSongIndex] = useState(0);
  let [soundUrl, setSoundUrl] = useState(
    Object.values(playlist[songIndex].src)[0]
  );
  let [nowPlaying, setNowPlaying] = useState(
    playlist[songIndex].title
  );
  const [play, { stop, isPlaying }] = useSound(soundUrl, { volume: 0.5 });
  const changePlayButton = () => {
    setPlaying(!playing);
    if (playing) {
      console.log("stopped");
      stop();
    } else {
      console.log("playing");
      play();
    }
  };

  const incrementSongIndex = () => {
    stop();
    setPlaying(false);
    //console.log(songIndex);
    if (songIndex == playlist.length - 1) {
      setSongIndex(0);
      setSoundUrl(Object.values(playlist[songIndex].src)[0]);
      setNowPlaying(playlist[songIndex].title);
    } else {
      setSongIndex(songIndex++);
      setSoundUrl(Object.values(playlist[songIndex].src)[0]);
      setNowPlaying(playlist[songIndex].title);
    }
  };

  
  const decrementSongIndex = () => {
    stop();
    setPlaying(false);
    //console.log(songIndex);
    if (songIndex == 0) {
      setSongIndex(playlist.length-1);
      setSoundUrl(Object.values(playlist[songIndex].src)[0]);
      setNowPlaying(playlist[songIndex].title);
    } else {
      setSongIndex(songIndex--);
      setSoundUrl(Object.values(playlist[songIndex].src)[0]);
      setNowPlaying(playlist[songIndex].title);
    }
  };
  
  return (
    <div className="music-player flex-col items-center justify-evenly self-end gap-4 mr-8">
      <div className="flex items-center justify-evenly">
        <FontAwesomeIcon className={songIndex === 0 ? 'playing': 'playing'} onClick={decrementSongIndex} icon={faFastBackward} />
        <FontAwesomeIcon
          onClick={changePlayButton}
          icon={playing ? faStopCircle : faPlayCircle}
          size="2x"
        />
        <FontAwesomeIcon className={songIndex === 1 ? 'playing': 'playing'} onClick={incrementSongIndex} icon={faFastForward} />
      </div>
      <div>{nowPlaying}</div>
    </div>
  );
};
export default MusicPlayer;
