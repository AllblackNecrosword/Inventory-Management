import React, { useState } from "react";
import { Pencil, Eye, Trash2 } from "lucide-react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import UpdateProduct from "./UpdateProduct";
import ViewProduct from "./ViewProduct";

const Viewproducts = () => {
  const { allproducts } = useSelector((store) => store.product);
  const dispatch = useDispatch();

  // State to track selected product for update
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [viewProduct, setViewProduct] = useState(null);

  const deleteAlertHandler = (itemID) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteHandler(itemID);
      }
    });
  };

  const deleteHandler = async (itemID) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/product/deleteProduct/${itemID}`,
        {
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        // Reload the data or update Redux state here
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error!",
        text: "Failed to delete the item. Please try again.",
        icon: "error",
      });
    }
  };

  return (
    <div className="overflow-x-auto mt-2">
      <div className="p-2 text-2xl font-semibold">
        <h1>Inventory Items</h1>
      </div>
      <table className="table mt-5 h-full">
        <thead>
          <tr className="bg-slate-50">
            <th>S.N</th>
            <th>Name/Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allproducts.map((item, index) => (
            <tr key={item._id}>
              <td>{index + 1}</td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={`http://localhost:5000/${item.image}`}
                        alt={`${item.name} Image`}
                        className="object-cover h-full w-full"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{item.name}</div>
                    <div className="text-sm opacity-50">{item.category}</div>
                  </div>
                </div>
              </td>
              <td>{item.price}</td>
              <td>{item.sku}</td>
              <td>{item.price * item.sku}</td>
              <td>
                <button
                  className="btn"
                  onClick={() => setSelectedProduct(item)} // Set the selected product
                >
                  <Pencil />
                </button>
                <button
                  className="btn btn-ghost btn-xs"
                  onClick={() => setViewProduct(item)}
                >
                  <Eye />
                </button>
                <button className="btn btn-ghost btn-xs">
                  <Trash2 onClick={() => deleteAlertHandler(item._id)} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for Update */}
      {selectedProduct && (
        <dialog
          id="update_modal"
          className="modal modal-bottom sm:modal-middle"
          open
        >
          <div className="modal-box">
            <UpdateProduct item={selectedProduct} />
            <div className="modal-action">
              <button className="btn" onClick={() => setSelectedProduct(null)}>
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}
      {/* Modal for View */}
      {viewProduct && (
        <dialog
          id="update_modal"
          className="modal modal-bottom sm:modal-middle"
          open
        >
          <div className="modal-box">
            <ViewProduct item={viewProduct} />
            <div className="modal-action">
              <button className="btn" onClick={() => setViewProduct(null)}>
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default Viewproducts;
