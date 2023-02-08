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
        <Button variant="gradient" className=" text-white text-[30px] pt-0 pb-0">Brand</Button>
      </MenuHandler>
      <MenuList>
        <MenuItem className=" text-black text-[30px] mt-5 mb-5"><Link to="/LuxuryGalleryMan">MAN</Link></MenuItem>
        <MenuItem className=" text-black text-[30px] mt-5 mb-5"><Link to="/LuxuryGalleryWomen">WOMEN</Link></MenuItem>
        <MenuItem className=" text-black text-[30px] mt-5 mb-5"><Link to="/LuxuryGalleryAcc">ACC</Link></MenuItem>
      </MenuList>
    </Menu>
  );
}

export default Category;