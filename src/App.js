import './App.css';

//Components
import Header from './components/Header';
import SceneBase from './components/SceneBase';
import SnowBG from './components/SnowBG';

function App() {
  return (
    <div className="App flex flex-col items-center justify-center">
      <Header />
      <SnowBG />
      <SceneBase />
    </div>
  );
}

export default App;
