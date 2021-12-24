import './App.css';

//Components
import SceneBase from './components/SceneBase';
import SnowBG from './components/SnowBG';

function App() {
  return (
    <div className="App flex items-center justify-center">
      <SnowBG />
      <SceneBase />
    </div>
  );
}

export default App;
