import React from "react";

const Navbar = ({ filterItems, menuList }) => {
  return (
    <>
      <nav className="nav-btn">
        <div className="nav-btn-group">
          {menuList.map((curElm) => {
            return (
              <button
                className="nav-btn-group-items"
                onClick={() => filterItems(curElm)}
              >
               {curElm}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
