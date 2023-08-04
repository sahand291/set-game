// import {useState} from 'react';

import styles from "./StartPage.module.css";

function StartPage(props) {
  // const [isStarted, setIsStarted] = useState(false);

  const startGameHandler =()=>{
    props.onStartGame(true)
  }
  return (
    <div className={styles.container}>
      <h1>SET GAME</h1>
      <button onClick={startGameHandler}>Start</button>
    </div>
  );
}

export default StartPage;
