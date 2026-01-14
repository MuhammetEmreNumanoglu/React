import React from "react";

function Product(props) {
    const {productName, price} = props;
    return (
    
    
    <div>
      <div>Ürün Bilgileri</div>
      <hr />
      <div>
        <div>İsim :{productName}</div>
        <div>Fiyat : {price}</div>
        <hr />
      </div>
    </div>
  );
}

export default Product;
