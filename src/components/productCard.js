import { Button, Image } from "react-bootstrap";
import "./product.css";
import CurrencyFormatter from "./commonComponents/currencyFormatter";

function ProductCard(productDetail) {
  return (
    <div className="card" style={{ backgroundColor: "#e6e7e9" }}>
      <Image
        src={productDetail?.productDetail?.images?.[0]}
        style={{ width: "100%" }}
        className="set-img-ratio"
      />
      <div className="product-card-attributes">
        <div className="product-title">
          {productDetail?.productDetail?.title}
        </div>
        <CurrencyFormatter amount={productDetail?.productDetail?.price} />
        <Button href="/cart" as="button">
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;
