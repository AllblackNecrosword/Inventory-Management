import React from "react";

const Banner = () => {
  return (
    <div className="relative opacity-90 ">
      {/* Background Image */}
      <img
        className="w-full h-screen object-cover"
        src="https://images.pexels.com/photos/7947707/pexels-photo-7947707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Beautiful scenery"
      />
      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Inventory Pro
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl">
          Your ultimate solution for seamless inventory management. Track,
          manage, and optimize your stock effortlessly.
        </p>
      </div>
    </div>
  );
};

export default Banner;
