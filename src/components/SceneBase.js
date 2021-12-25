import VtuberLayout from "./vtubers/VtuberLayout";
import DestinyTitle from "./DestinyTitle";
import HoverScare from "./HoverScare";

function SceneBase() {
  return(
    <div className="scene-base mb-8">
      <DestinyTitle />
      <HoverScare />
      <VtuberLayout />
    </div>
  );
}

export default SceneBase;