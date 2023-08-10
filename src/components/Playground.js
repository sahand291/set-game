import { useState, useRef } from "react";

import GameCartsList from "./GameCartsList";

import styles from "./Playground.module.css";

function Playground() {
  const [restart, setRestart] = useState(false);
  const [add3Carts, setAdd3Carts] = useState(false);
  const add3CartsIsActive = useRef(false);

  const restartGameHandler = () => {
    setRestart((prevState) => {
      return !prevState;
    });
  };

  const add3CartsHandler = () => {
    setAdd3Carts((prevState) => {
      return !prevState;
    });

    add3CartsIsActive.current = true;
  };
  return (
    <div className={styles.container}>
      <GameCartsList
        restart={restart}
        setRestart={setRestart}
        add3Carts={add3Carts}
        add3CartsIsActive={add3CartsIsActive}
      />
      <div className={styles.controls}>
        <button onClick={restartGameHandler}>restart</button>
        <button value={true} onClick={add3CartsHandler}>
          add 3 carts
        </button>
      </div>
    </div>
  );
}

export default Playground;
