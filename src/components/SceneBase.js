import VtuberLayout from "./vtubers/VtuberLayout";
import DestinyTitle from "./DestinyTitle";


function SceneBase() {
  return(
    <div className="scene-base">
      <DestinyTitle />
      <VtuberLayout />
    </div>
  );
}

export default SceneBase;