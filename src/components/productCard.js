import { Button, Image } from "react-bootstrap";
import "./product.css";
import CurrencyFormatter from "./commonComponents/currencyFormatter";

function ProductCard(productDetail) {
  return (
    <div className="card">
      <Image
        src={productDetail?.productDetail?.images?.[0]}
        style={{ width: "100%" }}
        className="set-img-ratio"
      />
      <h4>{productDetail?.productDetail?.title}</h4>
      <p className="price">
        <CurrencyFormatter amount={productDetail?.productDetail?.price} />
      </p>
      <div>
        <Button href="/cart" as="button">
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;
