import React from "react";

function Rates({ rates, loading }) {
  if (loading) {
    return <h2>loading...</h2>;
  }

  return (
    <ul>
      {rates.map((rate) => (
        <li key={rate.attributes.CrossOrder}>{rate.children[1].value}</li>
      ))}
    </ul>
  );
}

export default Rates;
