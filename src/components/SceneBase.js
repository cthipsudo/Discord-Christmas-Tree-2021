import VtuberLayout from "./vtubers/VtuberLayout";
import DestinyTitle from "./DestinyTitle";
import HoverScare from "./HoverScare";
import Memebook from "./Memebook";
import TreeStar from "./TreeStar";
import DndBook from "./DndBook";
import AmongDumpy from "./AmongDumpy";
import MainTransition from "./MainTransition";

function SceneBase() {
  return(
    <div className="scene-base mb-8">
      <DestinyTitle />
      <HoverScare />
      <TreeStar />
      <DndBook />
      <Memebook />
      <AmongDumpy />
      <MainTransition />
      <VtuberLayout />
    </div>
  );
}

export default SceneBase;