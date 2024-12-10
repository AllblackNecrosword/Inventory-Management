import React from "react";

const ViewProduct = ({ item }) => {
  console.log(item);
  return (
    <div>
      <img
        src={`http://localhost:5000/${item.image}`}
        alt={`${item.name} Image`}
        className="object-cover h-full w-full"
      />
      <h1 className="text-2xl font-semibold my-2">{item.name}</h1>
      <p>{item.description}</p>
      <div className="flex gap-x-5 my-2">
        <button className="btn">
          Quantity
          <div className="badge">{item.quantity}</div>
        </button>
        <button className="btn">
          SKU
          <div className="badge badge-secondary">{item.sku}</div>
        </button>
        <button className="btn">
          Price
          <div className="badge badge-success text-white">{item.price}</div>
        </button>
      </div>
      <h1>Created by: {item?.user?.name}</h1>
    </div>
  );
};

export default ViewProduct;
