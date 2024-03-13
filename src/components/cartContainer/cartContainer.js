import { useEffect, useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import TotalPrice from "../commonComponents/totalPrice";
import { useLocation } from "react-router-dom";
import "./cartContainer.css";
import { Quantifier } from "../commonComponents/quantifier";
import { ToggleButton } from "react-bootstrap";

const Cart = () => {
  const [cart, setCart] = useLocalStorageState("cart", {});
  const [checkedState, setCheckedState] = useState([]);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    setCheckedState(Array(Object.keys(cart).length).fill(false));
  }, [location, cart]);

  const handleRemoveProduct = (productId) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      delete updatedCart[productId];
      return updatedCart;
    });
  };

  const handleUpdateQuantity = (productId, operation) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[productId]) {
        if (operation === "increase") {
          updatedCart[productId] = {
            ...updatedCart[productId],
            quantity: updatedCart[productId].quantity + 1,
          };
        } else {
          updatedCart[productId] = {
            ...updatedCart[productId],
            quantity: updatedCart[productId].quantity - 1,
          };
        }
      }
      return updatedCart;
    });
  };

  const handleImageClick = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

  const getProducts = () => Object.values(cart || {});

  const totalPrice = getProducts().reduce(
    (accumulator, product) => accumulator + product.price * product.quantity,
    0
  );

  return (
    <section className="cart">
      <h1>Cart</h1>
      <div className="container">
        {getProducts().map((product, index) => (
          <div className="product" key={product.id}>
            <ToggleButton
              id={`custom-checkbox-${index}`}
              type="checkbox"
              className="form-check-input"
              bsPrefix="checkbox-input form-check-input"
              value={checkedState[index]}
              checked={checkedState[index]}
              onChange={() => handleImageClick(index)}
            />
            <img src={product.images?.[0]} alt={product.title} />

            <h3>{product.title}</h3>

            <Quantifier
              removeProductCallback={() => handleRemoveProduct(product.id)}
              productId={product.id}
              handleUpdateQuantity={handleUpdateQuantity}
            />
          </div>
        ))}
      </div>
      <TotalPrice amount={totalPrice} />
    </section>
  );
};

export default Cart;
