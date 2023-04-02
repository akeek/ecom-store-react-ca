import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "../modules/home.module.css";
import { ShoppingCartContext } from "../shoppingCartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Item({ product }) {
  const { id, title, imageUrl, price, discountedPrice } = product;
  const { addToCart } = useContext(ShoppingCartContext);

  const alert = () => {
    toast.success("The item has been added!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <div className={styles.itemCard}>
      <div className={styles.imgContainer}>
        <img src={imageUrl} alt={title} className={styles.itemImg} />
        {price === discountedPrice ? (
          ""
        ) : (
          <div className={styles.discountBanner}>
            Take {Math.round(((price - discountedPrice) / price) * 100)}% off
          </div>
        )}
      </div>

      <h2 className={styles.itemHeader}>{title}</h2>
      <div className={styles.itemInfo}>
        <div className={styles.itemPrice}>
          {price !== discountedPrice && (
            <p className={styles.oldPrice}>
              <span>{price},-</span>
            </p>
          )}
          <p>{discountedPrice},-</p>
        </div>
      </div>
      <div className={styles.buttons}>
      <Link to={`item/${id}`} className={styles.itemLink}>
          View item
      </Link>
      <div></div>
      <button
        className={styles.addBtn}
        onClick={() => {
          addToCart({id, title, imageUrl, price, discountedPrice});
          alert();
        }}>Add to cart
      </button>
      <ToastContainer autoClose={1500} />
      </div>
    </div>
  );
}

export default Item;

