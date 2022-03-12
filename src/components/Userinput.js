import React from "react";

function Userinput({ label, ...props }) {
  return (
    <div>
      <label className="sr-only">{label}</label>
      <input
        type="text"
        className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        placeholder={label}
        {...props}
      />
    </div>
  );
}

export default Userinput;
