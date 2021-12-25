import VtuberLayout from "./vtubers/VtuberLayout";
import DestinyTitle from "./DestinyTitle";


function SceneBase() {
  return(
    <div className="scene-base mb-8">
      <DestinyTitle />
      <VtuberLayout />
    </div>
  );
}

export default SceneBase;