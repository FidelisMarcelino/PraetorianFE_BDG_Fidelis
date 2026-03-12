import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductList from "./Marketplace/ProductList";
import AddProduct from "./Marketplace/AddProduct";
import EditProduct from "./Marketplace/EditProducts";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />}/>
        <Route path="/add" element={<AddProduct />}/>
        <Route path="/edit/:id" element={<EditProduct />}/>
      </Routes>
    </BrowserRouter>
  )
}