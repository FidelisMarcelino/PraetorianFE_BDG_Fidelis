import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  const [title, setTitle] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();

    try {
      await axios.post("https://fakestoreapi.com/products", {
        title,
        price: parseFloat(price),
        description: "Sample Description",
        image: "https://i.pravatar.cc",
        category: "electronics",
      });

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <p className="text-2xl font-bold mb-4">Add Product</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="border p-2 w-full mb-3"
          placeholder="Title"
          value={title}
          onChange={(e : React.ChangeEvent<HTMLInputElement>) => {
            setTitle(e.target.value);
          }}
        />

        <input
          type="number"
          className="border p-2 w-full mb-3"
          placeholder="Price"
          value={price}
          onChange={(e : React.ChangeEvent<HTMLInputElement>) => {
            setPrice(e.target.value);
          }}
        />

        <button type="button" onClick={() => navigate("/")} className="bg-red-600 text-white px-4 py-2 rounded w-full">
          Cancel
        </button>

        <button type="submit" className="mt-1 bg-green-600 text-white px-4 py-2 rounded w-full">
          Save
        </button>
      </form>
    </div>
  );
}
