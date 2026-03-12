import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ProductList() {
  const [title, setTitle] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setTitle(res.data.title);
        setPrice(res.data.price.toString());
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();

    try {
      await axios.put(`https://fakestoreapi.com/products/${id}`, {
        title,
        price: parseFloat(price),
        description: "Sample Description",
        image: "https://i.pravatar.cc",
        category: "electronics",
      });

      navigate("/");
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <p className="font-bold text-2xl mb-4">Edit Product</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="border p-2 w-full mb-3"
          placeholder="Title"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(e.target.value);
          }}
        />

        <input
          type="number"
          className="border p-2 w-full mb-3"
          placeholder="Price"
          value={price}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPrice(e.target.value);
          }}
        />

        <button
          type="button"
          onClick={() => navigate("/")}
          className="bg-red-600 text-white px-4 py-2 rounded w-full"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="mt-1 bg-green-600 text-white px-4 py-2 rounded w-full"
        >
          Save
        </button>
      </form>
    </div>
  );
}
