import useSound from "use-sound";
import AmongSound from '../audio/among-us.mp3'

function AmongDumpy() {
  let clicked = false;
  const [play, { stop }] = useSound(AmongSound, { volume: 0.55 });
  const playSound = () => {
    if(!clicked) {
      clicked = true;
      play();
    } else {
      clicked = false;
      stop();
    }
  }

  return(
    <div onClick={playSound} className="among-us">
    </div>
  )
}

export default AmongDumpy;