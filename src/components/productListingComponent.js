import { useEffect, useState } from "react";
import ProductCard from "./productCard";
import RecommendedItems from "./recommendedItems/recommendedItems";
import "./product.css";
import productList from "../json/productsList.json";

function ProductListingContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    // const getData = await fetch("https://dummyjson.com/product").then((res) =>
    //   res.json()
    // );
    // setProducts(getData.products);
    setProducts(productList?.products);
  };
  console.log(products, "PPPPPPPPPPPPPPPPPPPP");
  return (
    <>
      <h1
        className="page-title"
        style={{
          fontFamily: "Libre Baskerville, serif",
          backgroundColor: "lightslategray",
          padding: "20px",
          margin: "-20px",
          fontWeight: "700",
        }}
      >
        Product Listing Page
      </h1>
      <RecommendedItems />
      <div className="product-listing">
        {products?.map((productDetail, index) => {
          return <ProductCard productDetail={productDetail} />;
        })}
      </div>
    </>
  );
}

export default ProductListingContainer;
