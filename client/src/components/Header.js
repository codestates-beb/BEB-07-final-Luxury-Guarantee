
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header relative h-[271px] w-[1920px] pt-[80px] bg-black">
    <div className="logo absolute top-[30.27%] left-[4.84%] h-[119px] w-[153px] text-5xl font-normal text-white">
      <Link to="/">Luxury Guarantee</Link>
    </div>
    <div className="sub-menu mx-auto mb-3 w-[55%]">
      <div className="search relative mx-auto mb-[33px] h-16 w-3/4 rounded-lg bg-gray-light drop-shadow-md">
        <input
          className="h-16 w-11/12 rounded-lg bg-gray-light pl-6 text-gray-dark focus:outline-none"
          placeholder="input post name or content"
        ></input>
        <span className="material-symbols-outlined absolute inset-y-0 my-auto h-9 text-4xl hover:cursor-pointer">
          search
        </span>
      </div>
      <ul className="category flex w-full justify-center whitespace-nowrap first-line: ">
  
        <li>
          <Link to="/luxuryGallery" className="category-item text-white p-[30px] text-[30px]">
            Brand
          </Link>
        </li>
       
       
        <li>
          <Link to="/Recell" className="category-item text-white p-[30px] text-[30px]">
            Resell
          </Link>
        </li>
    
        <li>
          <Link to="/login" className="category-item text-white p-[30px] text-[30px]">
            Login
          </Link>
        </li>
        <li>
          <Link to="/signupmain" className="category-item text-white p-[30px] text-[30px]">
            Membership
          </Link>
        </li>
        
      </ul>
    </div>
    <hr className="mx-auto h-[3px] w-11/12 rounded-sm bg-gray-dark" />
  </div>
    );
};

export default Header;