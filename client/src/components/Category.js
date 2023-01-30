import React from 'react';
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
  } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
//카테고리
const Category = () => {
    return (
        <Menu>
          <MenuHandler>
            <Button variant="gradient" className=" text-white mr-6 text-[30px]">Brand</Button>
          </MenuHandler>
          <MenuList>
            <MenuItem className=" text-black text-[30px] mt-5 mb-5"><Link to="/LuxuryGallery">남성</Link></MenuItem>
            <MenuItem className=" text-black text-[30px] mt-5 mb-5"><Link to="/LuxuryGallery">여성</Link></MenuItem>
            <MenuItem className=" text-black text-[30px] mt-5 mb-5"><Link to="/LuxuryGallery">악세서리</Link></MenuItem>
          </MenuList>
        </Menu>
      );
}

export default Category;