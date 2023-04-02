import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "../../modules/cart.module.css";
import { ShoppingCartContext } from "../../shoppingCartContext";

function ItemInCart() {
  const { cart, discardFromCart, clearCart } = useContext(ShoppingCartContext);

  function summeryCart(cart) {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].discountedPrice;
    }
    return total.toFixed(2);
  }

  const discardItem = (itemId) => {
    discardFromCart(itemId);
  };

  return (
    <div className={styles.cart}>
      <h1 className={styles.heading}>Your Cart</h1>
      <div className={styles.cart}>
        {cart.map((item) => {
          return (
            <div key={item.id} className={styles.item}>
              <div className={styles.imgDiv}>
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className={styles.itemImg}
                />
              </div>
              <div>
                <h5 className={styles.title}>{item.title} </h5>
                <div className={styles.price}>{item.price !== item.discountedPrice && (
                <p className={styles.oldPrice}>{item.price},-</p>
                )}
                <p className={styles.newPrice}>{item.discountedPrice},-</p>
                </div>
              </div>
              <button
                className={styles.trashBtn}
                onClick={() => discardItem(item.id)}
              >
                <img src="/trashcan.png" alt="blue trashcan" />
              </button>
            </div>
          );
        })}
        <div>
          <h2>Your total: </h2>
          <p className={styles.summary}>{summeryCart(cart)},-</p>
        </div>
        <Link to="/success">
          <button
            className={styles.checkoutBtn}
            onClick={() => {
              clearCart(cart);
            }}
          >
            Checkout
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ItemInCart;