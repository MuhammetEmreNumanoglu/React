import React from "react";

function Product({ product }) {
  const { id, name, price } = product;

  return (
    <div>
      <h3>Ürün Detayı</h3>
      <h5>İsim : {name}</h5>
      <h5>Fiyat : {price}</h5>
    </div>
  );
}

export default Product;
