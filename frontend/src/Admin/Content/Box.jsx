import { ShoppingBasketIcon } from "lucide-react";
import React from "react";
import { CircleDollarSign } from "lucide-react";
import { CircleX } from "lucide-react";
import { ReceiptText } from "lucide-react";
import { useSelector } from "react-redux";
import store from "@/Redux/store";

const Box = () => {
  const { allproducts } = useSelector((store) => store.product);

  // console.log("all products", allproducts);
  return (
    <div className="">
      <h1 className="text-2xl font-semibold my-2">Analytics Dashboard</h1>
      <p></p>
      <div className="p-4 flex flex-wrap gap-5 justify-between text-black">
        <div className="flex flex-col items-center w-1/5 bg-amber-300  shadow-md  p-2">
          <span className="text-2xl font-medium text-black my-2">
            Total Product
          </span>
          <ShoppingBasketIcon size={64} color="white" />
          <div className="badge badge-neutral my-2">{allproducts.length}</div>
        </div>

        <div className="flex flex-col items-center w-1/5 bg-green-600 shadow-md  p-2">
          <span className="text-2xl font-medium text-black my-2">
            {" "}
            Store Value
          </span>
          <CircleDollarSign size={64} color="white" />
          <div className="badge badge-neutral my-2">2</div>
        </div>
        <div className="flex flex-col items-center w-1/5 bg-cyan-600 shadow-md   p-2">
          <span className="text-2xl font-medium text-black my-2">
            Out of Stock
          </span>
          <CircleX size={64} color="white" />
          <div className="badge badge-neutral my-2">2</div>
        </div>
        <div className="flex flex-col items-center w-1/5 bg-violet-600 shadow-md  p-2">
          <span className="text-2xl font-medium text-black my-2">
            Total Product
          </span>
          <ReceiptText size={64} color="white" />
          <div className="badge badge-neutral my-2">2</div>
        </div>
      </div>
    </div>
  );
};

export default Box;
