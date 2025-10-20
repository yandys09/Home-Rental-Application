import React from "react";

const Hero = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="max-w-6xl lg:mx-auto p-5 md:px-10 lg:px-0 w-full grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="flex flex-col justify-center gap-8">
          <h1 className="font-bold text-[40px] leading-[48px] lg:text-[48px] lg:leading-[60px]">
            RentRite: Feel at Home, Whatever Your are!
          </h1>

          <p className="text-[20px] md:text-[24px] font-normal leading-[30px] md:leading-9 tracking-[2%] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
        <img
          src="https://media.istockphoto.com/id/155700839/photo/a-beautiful-home-available-for-rent.jpg?s=612x612&w=0&k=20&c=aPwqJ67O3CGGItsDoI8fuGwAuTR3L3B80tImG2mlQQ8="
          alt="" width={1000} height={1000} className="max-h-[70vh] object-contain object-center"
        />
      </div>
    </div>
  );
};

export default Hero;
