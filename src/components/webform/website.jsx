import React, { useState } from "react";
import "./style.css";
import Menu from "./websiteApi";
import MenuCard from "./menubox";
import Navbar from "./navbar";

const uniqueMenuList = [
  ...new Set(
    Menu.map((curElm) => {
      return curElm.category;
    })
  ),
  "All",
];
// console.log(uniqueMenuList);

const Website = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueMenuList);

  const filterItems = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }
    const updatedCategory = Menu.filter((curElm) => {
      return curElm.category === category;
    });
    setMenuData(updatedCategory);
  };
  return (
    <>
      <Navbar filterItems={filterItems} menuList={menuList} />
      <MenuCard menu={menuData} />
    </>
  );
};

export default Website;
