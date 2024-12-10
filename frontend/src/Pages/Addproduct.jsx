import axios from "axios";
import React from "react";
import { useState } from "react";
const Addproduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    sku: "",
    category: "",
    quantity: 0,
    price: 0,
    description: "",
    image: null, // For image uploads
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    setFormData({ ...formData, image: file });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formdata = new FormData();
      formdata.append("name", formData.name);
      formdata.append("sku", formData.sku);
      formdata.append("category", formData.category);
      formdata.append("quantity", formData.quantity);
      formdata.append("price", formData.price);
      formdata.append("description", formData.description);
      if (formData.image) {
        formdata.append("image", formData.image);
      }
      const response = await axios.post(
        "http://localhost:5000/api/product/createProduct",
        formdata,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          }, // Required for cookies
        }
      );

      if (response.status === 200) {
        alert("Product Created Sucessfully");
        setFormData({
          name: "",
          sku: "",
          category: "",
          quantity: 0,
          price: 0,
          description: "",
          image: null,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto bg-white p-6 rounded-md shadow-md mt-8"
    >
      <h1 className="text-2xl font-semibold mb-6">Add New Product</h1>

      {/* Name */}
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Product Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      {/* SKU */}
      <div className="mb-4">
        <label
          htmlFor="sku"
          className="block text-sm font-medium text-gray-700"
        >
          SKU
        </label>
        <input
          type="text"
          id="sku"
          name="sku"
          value={formData.sku}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      {/* Category */}
      <div className="mb-4">
        <label
          htmlFor="category"
          className="block text-sm font-medium text-gray-700"
        >
          Category
        </label>
        <input
          type="text"
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      {/* Quantity */}
      <div className="mb-4">
        <label
          htmlFor="quantity"
          className="block text-sm font-medium text-gray-700"
        >
          Quantity
        </label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
          min="0"
        />
      </div>

      {/* Price */}
      <div className="mb-4">
        <label
          htmlFor="price"
          className="block text-sm font-medium text-gray-700"
        >
          Price
        </label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
          min="0"
          step="0.01"
        />
      </div>

      {/* Description */}
      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          rows="4"
          required
        ></textarea>
      </div>

      {/* Image */}
      <div className="mb-4">
        <label
          htmlFor="image"
          className="block text-sm font-medium text-gray-700"
        >
          Product Image
        </label>
        <input
          type="file"
          id="image"
          name="image"
          onChange={handleFileUpload}
          className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          accept="image/*"
        />
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600"
        >
          Add Product
        </button>
      </div>
    </form>
  );
};

export default Addproduct;
