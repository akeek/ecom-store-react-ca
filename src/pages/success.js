import { Link } from "react-router-dom";
import styles from "../modules/success.module.css";

function CheckoutSuccess() {
  return (
    <div className={styles.card}>
      <h1 className={styles.title}>Your order was successful and will be processed!</h1>
      <img src="./bluethumb.svg" alt="" className={styles.thumb} />
      <p>
        The order will be shipped within 1-3 business days.
      </p>
      <div>
        <Link to={"/"}>
          <button className={styles.shopBtn}>Back to Shopping</button>
        </Link>
      </div>
    </div>
  );
}

export default CheckoutSuccess;