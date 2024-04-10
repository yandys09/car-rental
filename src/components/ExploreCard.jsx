import React from "react";

const ExploreCard = ({ world }) => {
  return (
    <div className="relative w-full px-10 py-6 mt-16 text-center text-gray-900 border-2 rounded-lg shadow-xl cursor-pointer sm:mx-auto gradient-05 sm:p-8 border-third-color hover:shadow-third-color">
      <div className="mx-auto w-32 h-32 relative -mt-[85px] border-4 border-white rounded-full overflow-hidden">
        <img
          src={world.imgUrl}
          alt=""
          className="object-cover object-center h-32"
        />
      </div>
      <div className="">
        <h2 className="text-xl font-bold text-third-color">
          {world.title}
        </h2>
        <p className="mt-6 text-gray-500 ">
          {world.description}
        </p>
      </div>
    </div>
  );
};

export default ExploreCard;
