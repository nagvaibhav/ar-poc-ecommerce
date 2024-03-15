const CurrencyFormatter = ({ amount }) => {
  const formattedAmount = amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return <span className="currency">{formattedAmount}</span>;
};

export default CurrencyFormatter;
