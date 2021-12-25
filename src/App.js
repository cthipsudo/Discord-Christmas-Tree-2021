import "./App.css";

//Components
import Header from "./components/Header";
import SceneBase from "./components/SceneBase";
import SnowBG from "./components/SnowBG";
import DiscordMembers from "./components/DiscordMembers";
import MusicPlayer from "./components/MusicPlayer";

function App() {
  return (
    <div className="app-wrapper">
      <div className="app flex flex-col items-center justify-center">
        <MusicPlayer />
        <Header />
        <SnowBG />
        <SceneBase />
        <DiscordMembers />
      </div>
      <div className="mobile-max-check flex items-center text-center">
        Hello, sorry this app does not work on mobile.
        <br/>
        Please use this app on a screen 1280px width or wider.
        <br/>
        <br/>
        Apologies and Merry Christmas!     
        </div>
    </div>
  );
}

export default App;
