import { useState, useEffect } from "react";
import styles from "./GameCart.module.css";

function GameCart(props) {
  const [cartSelected, setCartSelected] = useState(false);
  let cartStyle;

  useEffect(() => {
    console.log("new cart");
    const timer = setTimeout(() => {
      setCartSelected(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [props.deselectCarts]);

  cartSelected
    ? (cartStyle = `${styles.cart} ${styles.selected}`)
    : (cartStyle = `${styles.cart}`);


  let cartPatternImage = [];
  for (let i = 0; i < props.cart.count; i++) {
    cartPatternImage.push(props.cart.img);
  }
  const cartPatern = cartPatternImage.map((item) => (
    <img key={props.cart.id + Math.random()} src={item} alt="ogs"></img>
  ));

  // let cartStyle = `${styles.cart}`;
  const selectCartHnadler = () => {
    props.onSelectCart(props.cart);
    setCartSelected((prevState) => {
      return !prevState;
    });
  };

  return (
    <li className={cartStyle} onClick={selectCartHnadler}>
      {cartPatern}
    </li>
  );
}

export default GameCart;
