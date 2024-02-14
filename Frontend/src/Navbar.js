import React from 'react';

function Navbar() {
  return (
    <div>
      <div className="flex justify-between bg-black text-white flex-row flex-shrink">
        <div className="space-x-2 ml-2 mr-2">LOGO</div>
        <div className="flex mr-2 space-x-6 justify-evenly flex-row">
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">Login in</a>
          <a href="#">Create Account</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
