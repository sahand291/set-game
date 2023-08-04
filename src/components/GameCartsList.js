import { useState, useEffect, useCallback } from "react";
import GameCart from "./GameCart";

import carts from "../store/carts";
import styles from "./GameCartsList.module.css";
// carst = carts from main store
// allCarts = carts that remained on this set to show

const allRandomCarts = [];

function GameCartsList(props) {
  const [playgroundCarts, setPlaygroundCarts] = useState([]);
  const [selectedCarts, setSelectedCarts] = useState([]);
  const [deselectCarts, setDeselectCarts] = useState(false);
  // const [firstRender, setFirstRender] = useState(false)
  // const [setIsValid, setSetIsValid] = useState(false);

  useEffect(() => {
    setPlaygroundCarts([]);

    allRandomCarts.splice(0, allRandomCarts.length);
    const allCarts = [...carts];

    for (let index = 0; index < carts.length; index++) {
      let randomIndex = Math.floor(Math.random() * allCarts.length);
      let cart = allCarts[randomIndex];
      allCarts.splice(randomIndex, 1);

      allRandomCarts.push(cart);
    }

    for (let index = 0; index < 12; index++) {
      let cart = allRandomCarts.pop();
      setPlaygroundCarts((prevState) => {
        return [cart, ...prevState];
      });
    }
    setDeselectCarts((prevState) => !prevState);
  }, [props.restart]);
  ///==========================================================
  //add 3 carts
  //====================================
  useEffect(() => {
    if (props.add3CartsIsActive.current) {
      const newCarts = allRandomCarts.splice(0, 3);
      setPlaygroundCarts((prevState) => [...newCarts, ...prevState]);
    }

    props.add3CartsIsActive.current = false;
  }, [props.add3Carts, props.add3CartsIsActive]);

  //========================================
  // validate set function
  //=====================================
  const validateSet = useCallback(() => {
    console.log("******validating*****");
    console.log(selectedCarts);
    console.log("*********************");

    let shapes = selectedCarts.map((cart) => cart.shape);
    let colors = selectedCarts.map((cart) => cart.color);
    let patterns = selectedCarts.map((cart) => cart.pattern);
    let counts = selectedCarts.map((cart) => cart.count);

    let shapeIsOk =
      (shapes[0] === shapes[1] && shapes[1] === shapes[2]) ||
      (shapes[0] !== shapes[1] &&
        shapes[1] !== shapes[2] &&
        shapes[0] !== shapes[2]);
    let colorIsOk =
      (colors[0] === colors[1] && colors[1] === colors[2]) ||
      (colors[0] !== colors[1] &&
        colors[1] !== colors[2] &&
        colors[0] !== colors[2]);
    let patternIsOk =
      (patterns[0] === patterns[1] && patterns[1] === patterns[2]) ||
      (patterns[0] !== patterns[1] &&
        patterns[1] !== patterns[2] &&
        patterns[0] !== patterns[2]);
    let countIsOk =
      (counts[0] === counts[1] && counts[1] === counts[2]) ||
      (counts[0] !== counts[1] &&
        counts[1] !== counts[2] &&
        counts[0] !== counts[2]);
    
    console.log(shapeIsOk && colorIsOk && patternIsOk && countIsOk);
    return shapeIsOk && colorIsOk && patternIsOk && countIsOk;
  }, [selectedCarts]);

  //**********replase founded set carts with new ones :) */
  const replaceCarts = useCallback(() => {
    const pgCartsTMP = playgroundCarts;
    selectedCarts.forEach((slctdCart) => {
      const pgCartIndex = pgCartsTMP.findIndex((pgCart) => {
        return slctdCart.id === pgCart.id;
      });
      playgroundCarts.length <= 12
        ? pgCartsTMP.splice(pgCartIndex, 1, allRandomCarts.pop())
        : pgCartsTMP.splice(pgCartIndex, 1);
    });
    setPlaygroundCarts(pgCartsTMP);
    console.log(allRandomCarts.length);
  }, [playgroundCarts, selectedCarts]);
  //------------------------------------------------------
  //??????????????????????????????????????????????????????
  //------------------------------------------------------

  useEffect(() => {
    //validating if all 3 unique carts selected
    if (selectedCarts.length === 3) {
      const setIsValid = validateSet();
      if (setIsValid) {
        replaceCarts();
      } else {
        setDeselectCarts((prevState) => !prevState);
      }
      setSelectedCarts([]);
      // setDeselectCarts(false)
    }
  }, [
    setSelectedCarts,
    selectedCarts,
    validateSet,
    replaceCarts,
    playgroundCarts,
  ]);

  // -----------------------------------------------------

  //------------------------------------------------------

  const selectedCartsHandler = (slctdCart) => {
    if (
      !selectedCarts.find((cart) => {
        return cart.id === slctdCart.id;
      })
    ) {
      setSelectedCarts((prevState) => {
        return [...prevState, slctdCart];
      });
    } else {
      const selectedCartsTMP = selectedCarts.filter((cart) => {
        return cart.id !== slctdCart.id;
      });
      setSelectedCarts(selectedCartsTMP);
    }
  };
  //-------------------------------------------------------
  //----------------------------------------------------
  const pgCarts = playgroundCarts.map((cart) => (
    <GameCart
      onSelectCart={selectedCartsHandler}
      key={cart.id}
      cart={cart}
      setDeselectCarts={setDeselectCarts}
      deselectCarts={deselectCarts}
    ></GameCart>
  ));

  let gridStyle;

  if (playgroundCarts.length === 12) {
    gridStyle = `${styles.carts} ${styles["carts__grid-4cols"]}`;
  } else if (playgroundCarts.length === 15) {
    gridStyle = `${styles.carts} ${styles["carts__grid-5cols"]}`;
  } else if (playgroundCarts.length === 18) {
    gridStyle = `${styles.carts} ${styles["carts__grid-6cols"]}`;
  }

  return <ul className={gridStyle}>{pgCarts}</ul>;
}

export default GameCartsList;
