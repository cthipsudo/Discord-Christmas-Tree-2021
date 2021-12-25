import VtuberLayout from "./vtubers/VtuberLayout";
import DestinyTitle from "./DestinyTitle";
import HoverScare from "./HoverScare";
import Memebook from "./Memebook";
import TreeStar from "./TreeStar";
import DndBook from "./DndBook";
import AmongDumpy from "./AmongDumpy";

function SceneBase() {
  return(
    <div className="scene-base mb-8">
      <DestinyTitle />
      <HoverScare />
      <TreeStar />
      <DndBook />
      <Memebook />
      <AmongDumpy />
      <VtuberLayout />
    </div>
  );
}

export default SceneBase;