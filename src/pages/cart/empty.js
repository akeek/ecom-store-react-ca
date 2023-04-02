import { Link } from "react-router-dom";
import styles from "../../modules/empty.module.css";

function Empty() {
  return (
    <div>
      <h1 className={styles.H1}>You have nothing in your cart</h1>
      <div className={styles.container}>
        <Link to={"/"}>
          <button className={styles.emptyBtn}>Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
}

export default Empty;
