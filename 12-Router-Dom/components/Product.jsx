import React from "react";
import { useNavigate } from "react-router-dom";
function Product({ product }) {
  const { id, name, price } = product;
  const navigate = useNavigate();


  return (
    <div>
      <h3>Ürün Detayı</h3>
      <h5>İsim : {name}</h5>
      <h5>Fiyat : {price}</h5>
      <button onClick={()=>{navigate("product-details/"+id)}} >Detayına git</button>
    </div>
  );
}

export default Product;
