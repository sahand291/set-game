import {useState} from 'react';
import Playground from './components/Playground';

import StartPage from './components/StartPage';

// import './App.css';

function App() {
  const [gameIsStarted, setGameIsStarted]= useState(false)

  const onStartGame = (start) => {
    setGameIsStarted(start)
  }
  return (
    <>

      {!gameIsStarted && <StartPage onStartGame={onStartGame}></StartPage>}

      {gameIsStarted && <Playground/>}
    </>
  );
}

export default App;
