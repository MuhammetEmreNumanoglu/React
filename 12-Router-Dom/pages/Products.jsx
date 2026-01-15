import React from 'react'
import Product from "../components/Product"; // 👈 BUNU EKLE

function Products() {

const products= [ 
    {
        id:"1",
        name : "Bilgisayar",
        price : 50000 + " TL",
    }, {
        id:"2",
        name : "Telefon",
        price : 20000+ " TL",
    }, {
        id:"3",
        name : "Televizyon",
        price : 39000+ " TL",
    }
]

    return (

        <div>
            Products
           { products && products.map((product)=>(
            <Product key={product.id}  product = {product} ></Product>
        ))}
        </div>
    )
}

export default Products