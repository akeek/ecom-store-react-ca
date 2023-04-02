import React, { useContext } from "react";
import ItemInCart from "./item";
import Empty from "./empty";
import { ShoppingCartContext } from "../../shoppingCartContext";

function Cart() {
  const { cart } = useContext(ShoppingCartContext);

  return <>{cart.length === 0 ? <Empty /> : <ItemInCart />}</>;
}

export default Cart;