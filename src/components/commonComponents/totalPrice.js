import CurrencyFormatter from "./currencyFormatter";

const TotalPrice = ({ amount }) => {
  return (
    <div className="totalPrice">
      Total: {<CurrencyFormatter amount={amount} />}
    </div>
  );
};

export default TotalPrice;
