import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import ApiFetchHook from "../apiFetchHook";
import styles from "../modules/singleitem.module.css";
import { ShoppingCartContext } from "../shoppingCartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SingleItem() {
  const params = useParams();
  let url = `https://api.noroff.dev/api/v1/online-shop/`;
  const { data, isLoading, isError } = ApiFetchHook(url + params.id);

  const alert = () => {
    toast.success("The item has been added!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const { addToCart } = useContext(ShoppingCartContext);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>An error has accured</div>;
  }

  return (
    <div className={styles.card}>
      <div>
        <h1>{data.title}</h1>
      </div>
      <div className={styles.rating}>
        {data.rating ? <p>Average Rating: {data.rating}</p> : ""}
      </div>
      <div>
        <img
          src={data.imageUrl}
          alt={data.title}
          className={styles.productImg}
        />
        <p className={styles.description}>{data.description}</p>
        <p className={styles.price}>
          {" "}
          {data.price === data.discountedPrice
            ? `${data.price} kr `
            : <div>
              <p className={styles.oldPrice}>{data.price},-</p>
              <p className={styles.newPrice}> On sale for {data.discountedPrice},-</p>
              <p>Save: {Math.round((data.price - data.discountedPrice)).toFixed(2)},-</p>
            </div>}
        </p>
      </div>
      <section>
        {data.reviews ? (
          <div className={styles.reviewInfo}>
            <h3>Reviews:</h3>
            {data.reviews.map((review) => {
              return (
                <div key={review.id}>
                  <span className={styles.reviewName}>Name: </span><span>{review.username}</span>
                  <br></br>
                  <span className={styles.reviewName}>Rating: </span><span>{review.rating}</span>
                  <br></br>
                  <span className={styles.reviewName}>Review: </span><span>"{review.description}"</span>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}
        <button
          className={styles.btn}
          onClick={() => {
            addToCart(data);
            alert();
            console.log(data)
          }}>Add to cart
        </button>
        <ToastContainer autoClose={1500} />
      </section>
    </div>
  );
}

export default SingleItem;
