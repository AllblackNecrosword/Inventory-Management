import useGetAllJobs from "@/hooks/useGetAllJobs";
import React, { useState } from "react";
import { useSelector } from "react-redux";

// const ProductTable = () => {
//   useGetAllJobs();
//   const { allproducts } = useSelector((store) => store.product);
//   const [input, setInput] = useState("");

//   const searchProduct = allproducts?.filter((product) =>
//     product.name.toLowerCase().includes(input.toLowerCase())
//   );

//   return (
//     <div className="bg-white">
//       <div className="flex justify-between mx-7 items-center my-6">
//         <h1 className="text-2xl my-2 font-semibold">List of Products</h1>
//         <input
//           className="bg-slate-100 rounded-lg border shadow-md h-10 px-3"
//           placeholder="Search"
//           onChange={(e) => setInput(e.target.value)}
//         />
//       </div>

//       <div className="overflow-x-auto text-black">
//         {searchProduct?.length === 0 ? (
//           <h1 className="text-center text-lg font-semibold my-6">
//             No Products Found
//           </h1>
//         ) : (
//           <table className="table">
//             {/* Table Head */}
//             <thead className="font-bold text-sm">
//               <tr className="text-black">
//                 <th>S.N</th>
//                 <th>Name</th>
//                 <th>Category</th>
//                 <th>Price</th>
//                 <th>Quantity</th>
//                 <th>Added by</th>
//               </tr>
//             </thead>
//             <tbody>
//               {searchProduct.map((element, index) => (
//                 <tr key={index}>
//                   <th>{index + 1}</th>
//                   <td>{element.name}</td>
//                   <td>{element.category}</td>
//                   <td>{element.price}</td>
//                   <td>{element.sku}</td>
//                   <td>{element.user.name}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductTable;
const ProductTable = () => {
  useGetAllJobs();
  const { allproducts } = useSelector((store) => store.product);
  const [input, setInput] = useState("");

  // Ensure allproducts is an array before calling .filter
  const searchProduct = Array.isArray(allproducts)
    ? allproducts.filter((product) =>
        product.name.toLowerCase().includes(input.toLowerCase())
      )
    : [];

  return (
    <div className="bg-white">
      <div className="flex justify-between mx-7 items-center my-6">
        <h1 className="text-2xl my-2 font-semibold">List of Products</h1>
        <input
          className="bg-slate-100 rounded-lg border shadow-md h-10 px-3"
          placeholder="Search"
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto text-black">
        {searchProduct.length === 0 ? (
          <h1 className="text-center text-lg font-semibold my-6">
            No Products Found
          </h1>
        ) : (
          <table className="table">
            {/* Table Head */}
            <thead className="font-bold text-sm">
              <tr className="text-black">
                <th>S.N</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Added by</th>
              </tr>
            </thead>
            <tbody>
              {searchProduct.map((element, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{element.name}</td>
                  <td>{element.category}</td>
                  <td>{element.price}</td>
                  <td>{element.sku}</td>
                  <td>{element.user.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ProductTable;
