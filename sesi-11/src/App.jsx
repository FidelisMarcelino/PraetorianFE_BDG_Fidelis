import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ProductList from "./Marketplace/ProductList";
import AddProduct from "./Marketplace/AddProduct";
import EditProduct from "./Marketplace/EditProduct";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />}/>
        <Route path="/add" element={<AddProduct />}/>
        <Route path="/edit/:id" element={<EditProduct />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
