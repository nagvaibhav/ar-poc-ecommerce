import { Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import useLocalStorageState from "use-local-storage-state";
import CurrencyFormatter from "../commonComponents/currencyFormatter";

function ProductDetailsModal(props) {
  const [cart, setCart] = useLocalStorageState("cart", {});

  console.log(props, "PPPPPPPPPPPPP");

  const addToCart = (product) => {
    product.quantity = 1;

    setCart((prevCart) => ({
      ...prevCart,
      [product.id]: product,
    }));
  };

  const isInCart = (productId) =>
    Object.keys(cart || {})?.includes(productId?.toString());
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter w-75"
      centered
      backdrop={false}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props?.productDetails?.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="text-center">
          <Image
            src={props?.productDetails?.images?.[0]}
            className="w-50 p-3"
          />
          <h3>{props?.productDetails?.title}</h3>
          <p>{props?.productDetails?.description}</p>
          <div className="price">
            {" "}
            <CurrencyFormatter amount={props?.productDetails?.price} />
          </div>
          <Button
            className="w-75"
            href="/cart"
            // onClick={props.onHide}
            disabled={isInCart(props?.productDetails?.id)}
            onClick={() => addToCart(props?.productDetails)}
          >
            Add to Cart
          </Button>
        </div>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button href="/cart" onClick={props.onHide}>
          Add to Cart
        </Button>
      </Modal.Footer> */}
    </Modal>
  );
}

export default ProductDetailsModal;
