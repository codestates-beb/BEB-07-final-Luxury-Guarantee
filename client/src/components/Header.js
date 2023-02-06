import React from 'react';
import { Link } from 'react-router-dom';
import Category from './Category';
import isSigned from '../app/isSigned'

const Header = () => {
  const userData = isSigned();

  const signOut = () => {
    sessionStorage.clear();
    document.location.href = '/';
  }

  return (
    <div className="header relative h-[271px] w-[1920px] pt-[80px] bg-black">
      <div className="logo absolute top-[30.27%] left-[4.84%] h-[119px] w-[153px] text-5xl font-normal text-white">
        <Link to="/">Luxury Guarantee</Link>
      </div>
      <div className='absolute top-5 left-[80%] h-[119px] w-[153px]  text-white text-3xl flex space-x-6'>

        <Link to="/mypage"><i className="fa-regular fa-user"></i></Link>

        <Link to="/"><i className="fa-solid fa-heart"></i></Link>
        <Link to="/cart"><i className="fa-solid fa-cart-shopping"></i></Link>
      </div>

      <div className="sub-menu mx-auto mb-3 w-[55%]">
        <div className='text-white absolute top-[38%] left-[68%] text-3xl'>
          <i className="fa-sharp fa-solid fa-magnifying-glass"></i>

        </div>
        <div className="search relative mx-auto mb-[33px] h-16 w-3/4 rounded-lg bg-gray-light drop-shadow-md">
          <input
            className="h-16 w-11/12 rounded-lg bg-gray-light pl-6 text-gray-dark focus:outline-none"
            placeholder="input post name or content"
          ></input>

        </div>
        <ul className="category flex w-full justify-center whitespace-nowrap first-line: ">

          <li>
            <Category />
          </li>


          <li>
            <Link to="/Recell" className="category-item text-white p-[30px] text-[30px]">
              Resell
            </Link>
          </li>

          <li>
            {userData.isSigned === false ?
              (
                <Link to="/login" className="category-item text-white p-[30px] text-[30px]">
                  Login
                </Link>
              ) : (
                <button onClick={signOut} className="category-item text-white p-[30px] text-[30px] pt-0 pb-0">Logout</button>
              )}

          </li>
          <li>
            {userData.isSigned === false ?
              (
                <Link to="/signupmain" className="category-item text-white p-[30px] text-[30px]">
                  Membership
                </Link>
              ) : (
                <Link to="post" className="category-item text-white p-[30px] text-[30px]">
                  Post
                </Link>
              )
            }

          </li>

        </ul>
      </div>
      <hr className="mx-auto h-[3px] w-11/12 rounded-sm bg-gray-dark" />
    </div >
  );
};

export default Header;