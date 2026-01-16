import React from 'react'
import Product from "../components/Product"; // 👈 BUNU EKLE
import { Outlet } from 'react-router-dom';
import {products } from '../data/products'
function Products() {



    return (

        <div>
            Products
           { products && products.map((product)=>(
            <Product key={product.id}  product = {product} ></Product>
        ))}
        <Outlet/>
        </div>
    )
}

export default Products