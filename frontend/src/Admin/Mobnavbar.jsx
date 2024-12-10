import React from "react";

const Mobnavbar = () => {
  return (
    <nav className="flex justify-between mx-4 bg-stone-700 p-1 rounded-xl items-center">
      <div>
        <h2>Inventory pro</h2>
      </div>

      <div>
        <div class="avatar">
          <div class="w-8 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Mobnavbar;
