import React from 'react';


export function BlueButton({ children }) {
  return (
    <button className="max-md:px-4 max-md:py-2  rounded-full bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
      {children}
    </button>
  );
}

export function OutlineButton({ children }) {
  return (
    <button className="max-md:px-4 max-md:py-2 rounded-full border border-blue-600 px-4 bg-white py-2 text-blue-600 hover:bg-blue-500 hover:text-white">
      {children}
    </button>
  );
}

