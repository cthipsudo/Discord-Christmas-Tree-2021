import VtuberLayout from "./vtubers/VtuberLayout";
import DestinyTitle from "./DestinyTitle";
import HoverScare from "./HoverScare";
import Memebook from "./Memebook";

function SceneBase() {
  return(
    <div className="scene-base mb-8">
      <DestinyTitle />
      <HoverScare />
      <Memebook />
      <VtuberLayout />
    </div>
  );
}

export default SceneBase;