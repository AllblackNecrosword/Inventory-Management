// import React from "react";
// import ProductTable from "./ProductTable";
// import Box from "./Box";
// import Analysis from "./Analysis";

// const HomeContent = () => {
//   return (
//     <div>
//       <div className="w-11/12 mx-auto bg-gray-100 mt-12 rounded-xl">
//         <Box />
//       </div>
//       <div className="w-11/12 mx-auto border mt-8 rounded-xl bg-white ">
//          <ProductTable />
//       </div>

//     </div>
//   );
// };

// export default HomeContent;
import React from "react";
import ProductTable from "./ProductTable";
import Box from "./Box";
import Analysis from "./Analysis";

const HomeContent = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto bg-gray-100 mt-12 rounded-xl">
        <Box />
      </div>
      <div className="w-11/12 mx-auto  mt-8 rounded-xl flex gap-x-3 ">
        {/* ProductTable */}
        <div className="flex-1 border-r p-4 bg-white rounded-md">
          <ProductTable />
        </div>
        {/* Analysis */}
        <div className="flex-1 p-4 bg-white rounded-md">
          <Analysis />
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
