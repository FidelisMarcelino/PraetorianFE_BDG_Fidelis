import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("https://fakestoreapi.com/products", {
      title,
      price: parseFloat(price),
      description: "Sample Description",
      image: "https://via.placeholder.com/150",
      category: "electronics",
    });

    navigate("/");
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <p className="text-2xl font-bold mb-4">Add Product</p>

      <form onSubmit={handleSubmit}>
        <input
          className="border p-2 w-full mb-3"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="border p-2 w-full mb-3"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button className="bg-red-600 text-white px-4 py-2 rounded w-full">
            Cancel
        </button>

        <button className="mt-1 bg-green-600 text-white px-4 py-2 rounded w-full">
            Save
        </button>
        
      </form>
    </div>
  );
}
