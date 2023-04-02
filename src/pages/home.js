import React, { useState } from "react";
import styles from "../modules/home.module.css";
import Item from "../components/item";
import ApiFetchHook from "../apiFetchHook";

const url = "https://api.noroff.dev/api/v1/online-shop";
function Products({ products, isLoading, isError }) {
  if (isLoading) {
    return <p>Loading</p>;
  }
  if (isError) {
    return <div>Oooops... An error there has been</div>;
  }
  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <Item key={products.id} product={product} />
      ))}
    </div>
  );
}

function Home() {
  const [search, setSearch] = useState("");

  const { data, isLoading, isError } = ApiFetchHook(url);
  if (!isLoading) {
    console.log(data);
  }

  const query = data.filter((product) => {
    return product.title.toLowerCase().startsWith(search.toLowerCase());
  });

  return (
    <div>
      <div className={styles.topPart}>
        <h1 className={styles.H1}>Welcome to our online store</h1>
        <p className={styles.topText}>
          Welcome to our e-commerce site! We are thrilled to have you here and we hope that your online shopping experience with us will be nothing short of exceptional.
          Our platform offers an extensive range of products, from the latest fashion trends to high-tech gadgets, all at competitive prices.
        </p>
      </div>
      <h2 className={styles.H1}>All products</h2>
      <div className={styles.header}>
        <div className={styles.searchContainer}>
          <input
            className={styles.searchBar}
            type="text"
            placeholder="Search our products"
            disabled={isLoading}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div>
        {query.length > 0 ? (
          <Products products={query} isLoading={isLoading} isError={isError} />
        ) : (
          <div>
            <h2>No products match your searchword</h2>
          </div>
        )}
      </div>
    </div>
  );
}
export default Home;
