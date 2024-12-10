import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UpdateProduct = ({ item }) => {
  const [input, setInput] = useState({
    name: item?.name || "",
    category: item?.category || "",
    price: item?.price || "",
    quantity: item?.quantity || "",
    sku: item?.sku || "",
    description: item?.description || "",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:5000/api/product/updateProduct`,
        { ...input, productID: item._id },
        {
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        navigate("/dash");
        alert("Sucessfully updated");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="flex flex-wrap gap-4">
        {/* Image */}
        <div className="w-full mb-4">
          <img
            src={`http://localhost:5000/${item.image}`}
            alt={`${item.name} Image`}
            className="object-cover w-full"
          />
        </div>

        {/* Input Fields */}
        <div className="flex flex-wrap w-full gap-4">
          {/* First Input Field */}
          <div className="flex flex-col w-full md:w-1/2">
            <label htmlFor="name" className="block mb-1">
              Product Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={input.name}
              onChange={inputHandler}
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Second Input Field */}
          <div className="flex flex-col w-full md:w-1/2">
            <label htmlFor="category" className="block mb-1">
              Product Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              onChange={inputHandler}
              value={input.category}
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Third Input Field */}
          <div className="flex flex-col w-full md:w-1/2">
            <label htmlFor="price" className="block mb-1">
              Product Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={input.price}
              onChange={inputHandler}
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Fourth Input Field */}
          <div className="flex flex-col w-full md:w-1/2">
            <label htmlFor="quantity" className="block mb-1">
              Product Quantity
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              onChange={inputHandler}
              value={input.quantity}
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="flex flex-col w-full md:w-1/2">
            <label htmlFor="quantity" className="block mb-1">
              Product SKU
            </label>
            <input
              type="sku"
              id="sku"
              name="sku"
              onChange={inputHandler}
              value={input.sku}
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Fifth Input Field */}
          <div className="flex flex-col w-full md:w-1/2">
            <label htmlFor="description" className="block mb-1">
              Product Description
            </label>
            <textarea
              id="description"
              name="description"
              onChange={inputHandler}
              value={input.description || ""}
              className="textarea textarea-bordered w-full"
              rows="3"
            ></textarea>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
