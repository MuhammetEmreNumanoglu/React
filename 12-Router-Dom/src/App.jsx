import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About.jsx";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import NotFoundPage from "../pages/NotFoundPage.jsx";
import Header from "../components/Header.jsx";
import About1 from "../pages/About1.jsx";
import About2 from "../pages/About2.jsx";
import ProductDetails from "../pages/ProductDetails.jsx";
import { useParams } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}>
            <Route path="employee" element={<About1 />}></Route>
            <Route path="company" element={<About2 />}></Route>
          </Route>
          <Route path="/products" element={<Products />}>
            <Route
              path="product-details/:id"
              element={<ProductDetails />}
            ></Route>
          </Route>

          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
