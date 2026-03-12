import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: String;
};

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get<Product[]>(
          "https://fakestoreapi.com/products",
        );
        setProducts(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id: number): Promise<void> => {
    const confirmDelete = window.confirm("Delete this product?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`https://fakestoreapi.com/products/${id}`);
      setProducts((prev) => prev.filter((p) => p.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) return <p className="text-red-500">Loading...</p>;

  return(
    <div>
    <p className="text-3xl font-bold text-center mb-6 mt-10">
      Marketplace CRUD
    </p>

    <div className="flex justify-center mb-6">
      <button
        className="bg-green-600 text-white px-6 py-2 rounded"
        onClick={() => navigate("/add")}
      >
        + Add Product
      </button>
    </div>

    <div className="grid grid-cols-3 gap-6 m-4">
      {products.map((product: Product) => (
        <div key={product.id} className="bg-blue-100 p-4 rounded">
          <img
            src={product.image}
            alt={product.title}
            className="h-32 mx-auto mb-2"
          />
          <p className="font-semibold">{product.title}</p>
          <p>$ {product.price}</p>

          <button
            onClick={() => navigate(`/edit/${product.id}`)}
            className="bg-blue-600 text-white px-4 py-1 rounded w-full"
          >
            Edit
          </button>

          <button
            onClick={() => handleDelete(product.id)}
            className="bg-red-600 text-white px-4 py-1 rounded w-full mt-2"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  </div>
  )
}
