import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import axios from "axios";

export default function ProductCRUD() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const openAddModal = () => {
    setIsEditing(false);
    setIsEditing(null);
    setTitle("");
    setPrice("");
    setShowModal(true);
  };

  const handleEdit = (product) => {
    setIsEditing(true);
    setEditingId(product.id);
    setTitle(product.title);
    setPrice(product.price);
    setShowModal(true);
  }

  const handleSubmit = async () => {
    if (!title || !price) {
      alert("Please fill in all fields");
      return;
    }

    const productData = {
      title,
      price: parseFloat(price),
      description: "Sample Description",
      image: "https://via.placeholder.com/150",
      category: "electronics",
    };

    try {
      if (isEditing) {
        // Update
        const res = await axios.put(
          `https://fakestoreapi.com/products/${editingId}`,
          productData,
        );

        const updatedProducts = products.map((product) => {
          product.id === editingId ? res.data : product;
        });

        setProducts(updatedProducts);
      } else {
        // Add
        const res = await axios.post(
          "https://fakestoreapi.com/products",
          productData,
        );

        setProducts([...products, res.data]);
      }

      setShowModal(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this product?",
    );

    if (!confirmed) return;

    try {
      await axios.delete(`https://fakestoreapi.com/products/${id}`);
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) return <p className="text-center">Loading...</p>;

  // Frontend
  return (
    <>
      <div className="mt-12 p-6">
        {/* Title */}
        <p className="text-3xl font-bold text-center text-blue-700 mb-4">
          Marketplace CRUD
        </p>

        {/* Add New Product */}
        <div className="flex justify-center mb-6">
          <button
            onClick={openAddModal}
            className="bg-green-600 text-white px-6 py-2 rounded cursor-pointer"
          >
            + Add Product
          </button>
        </div>

        {/* Product List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-blue-100 rounded-md p-4 flex flex-col h-full"
            >
              <div>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-40 mx-auto object-contain mb-4"
                />

                <p className="text-2xl font-semibold line-clamp-2">
                  {product.title}
                </p>
              </div>

              <div>
                <p>{product.price}</p>

                <button
                  onClick={() => handleEdit(product)}
                  className="bg-blue-600 text-white px-4 py-2 rounded mb-2 mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="bg-red-600 text-white px-4 py-2 rounded mb-2"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Show modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
            <div className="bg-white p-6 rounded w-96">
              <p className="text-xl font-bold mb-4">
                {isEditing ? "Edit Product" : "Add Product"}
              </p>

              <input
                type="text"
                placeholder="Product Title"
                className="border p-2 w-full mb-3"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <input
                type="text"
                placeholder="Price"
                className="border p-2 w-full mb-3"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />

              <div className="flex justify-end gap-2">
                <button onClick={() => setShowModal(false)} className="bg-gray-400 text-white px-4 py-2 rounded">
                  Cancel
                </button>

                <button onClick={handleSubmit} className={`${isEditing ? "bg-blue-600" : "bg-green-600"} text-white px-4 py-2 rounded`}>
                  {isEditing ? "Update" : "Add"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
