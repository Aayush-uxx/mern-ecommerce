import useProducts from "@/hooks/useProducts";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

function AdminProducts() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    stock: "",
    imageFile: null,
  });
  const [editingId, setEditingId] = useState(null);
  const {
    products,
    loading,
    fetchProducts,
    handleCreate,
    handleUpdate,
    handleDelete,
  } = useProducts();
  useEffect(() => {
    fetchProducts();
  }, []);
  const handleForm = (e) => {
    e.preventDefault();
    if (editingId) {
      handleUpdate(editingId, formData);
    } else {
      handleCreate(formData);
    }
  };
  return (
    <div className="">
      <div>
        {products.map((product) => (
          <div key={product._id}>
            <img src={`http://localhost:5000/${product.image}`}></img>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <button
              onClick={() => {
                handleDelete(product._id);
              }}
            >
              Delete
            </button>

            <button
              onClick={() => {
                setEditingId(product._id);
                setFormData({
                  name: product.name,
                  price: product.price,
                  description: product.description,
                  category: product.category,
                  stock: product.stock,
                  imageFile: null,
                });
              }}
            >
              Edit
            </button>
          </div>
        ))}
      </div>
      <form onSubmit={handleForm}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={formData.name}
            placeholder="Name of Product"
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
            }}
          />
          <label>Price:</label>
          <input
            type="number"
            value={formData.price}
            onChange={(e) => {
              setFormData({ ...formData, price: e.target.value });
            }}
          />
          <label>Description</label>
          <input
            type="text"
            value={formData.description}
            onChange={(e) => {
              setFormData({ ...formData, description: e.target.value });
            }}
          />
          <label>Category</label>
          <input
            type="text"
            value={formData.category}
            onChange={(e) => {
              setFormData({ ...formData, category: e.target.value });
            }}
          />
          <label>Stock</label>
          <input
            type="number"
            value={formData.stock}
            onChange={(e) => {
              setFormData({ ...formData, stock: e.target.value });
            }}
          />
          <input
            type="file"
            onChange={(e) =>
              setFormData({ ...formData, imageFile: e.target.files[0] })
            }
          />
          <Button type="submit" disabled={loading}>
            {loading ? "Adding" : "Add"}
          </Button>
        </div>
      </form>
    </div>
  );
}
export default AdminProducts;
