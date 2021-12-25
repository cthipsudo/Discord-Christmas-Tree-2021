import VtuberLayout from "./vtubers/VtuberLayout";
import DestinyTitle from "./DestinyTitle";
import HoverScare from "./HoverScare";
import Memebook from "./Memebook";
import TreeStar from "./TreeStar";
import DndBook from "./DndBook";

function SceneBase() {
  return(
    <div className="scene-base mb-8">
      <DestinyTitle />
      <HoverScare />
      <TreeStar />
      <DndBook />
      <Memebook />
      <VtuberLayout />
    </div>
  );
}

export default SceneBase;