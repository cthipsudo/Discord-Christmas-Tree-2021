import "./App.css";

//Components
import Header from "./components/Header";
import SceneBase from "./components/SceneBase";
import SnowBG from "./components/SnowBG";
import DiscordMembers from "./components/DiscordMembers";

function App() {
  return (
    <div className="app-wrapper">
      <div className="app flex flex-col items-center justify-center">
        <Header />
        <SnowBG />
        <SceneBase />
        <DiscordMembers />
      </div>
    </div>
  );
}

export default App;
