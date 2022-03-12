import React from "react";

const Card = ({ title, count }) => {
  return (
    <div className="bg-[#686868] w-[100px] text-[#e9e9e9] pt-[5px] pr-[5px] rounded text-center">
      <p className="text-[16px] font-normal">{title}</p>
      <p className="text-[18px] font-medium text-[#ffffff]">{count}</p>
    </div>
  );
};

export default Card;
