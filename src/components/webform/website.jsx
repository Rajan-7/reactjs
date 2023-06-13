import React, { useState } from "react";
import "./style.css";
import Menu from "./websiteApi";
import MenuCard from "./menubox";
import Navbar from "./navbar";
const Website = () => {
  const [menuData,setMenuData]=useState(Menu);
  return (
    <>
      <Navbar />
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Website;
