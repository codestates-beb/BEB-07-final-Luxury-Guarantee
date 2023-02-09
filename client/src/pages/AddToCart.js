import React, { useEffect, useState } from 'react';
import axios from 'axios';
import apiUrl from '../utils/api';
import isSigned from '../app/isSigned';


const AddToCart = () => {
  const [cart, setCart] = useState([]);

  // const getTotalPrice = () => {
  //   let sum = 0;
  //   for (let i = 0; i < cart.items.length; i++) {
  //   sum += cart.items[i].price;
  //   }
  //   return sum;
  //   };

    const deleteItem = async (cartId) => {
      if (window.confirm('정말로 삭제하시겠습니까?')) {
        console.log(cartId)
        console.log(cart)
    try {
          await axios.post(`${apiUrl}/cartdeleteone`,{
            cartId : cart.items.id
          });
          const updatedCart = cart.items.filter((item) => item.id !== cartId);
          setCart(updatedCart);
        } catch (error) {
          
         
    console.error(error);
        }
      }
    };

    const id = isSigned().id;
        const getCartList = async () => {
            try {
                const res = await axios.get(`${apiUrl}/cart/${id}`)
                setCart(res.data)
                
                
            } catch (e) {
                console.log(e)
                
            }}
      
      getCartList();

      useEffect(() => {
        if (!isSigned().isSigned) {
            alert('로그인이 필요합니다.');
            document.location.href = '/login';
        }

    }, []);

    let sum = 0;
    for (let i = 0; i < cart.items.length; i++) {
          sum += cart.items[i].price;
         }

    console.log(sum)

    if(!cart) {
      return null;
    }

    const item = cart.items;

  return (
    <div className="h-screen bg-gray-100 pt-20">
      <h1 className="mb-10 text-center text-2xl font-bold">Cart</h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          {item && Array.isArray(item) && item.map((item, id) => {
            return(
              <div key={id} className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
            <img src={item.image_url} alt="" className="w-full rounded-lg sm:w-40" />
            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
              <div className="mt-5 sm:mt-0">
                <button className="text-lg font-bold text-gray-900">{item.goodsId}</button>
              </div>
              <div className="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                <div className="flex items-center border-gray-100">
                </div>
                <div className="flex items-center space-x-4">
                  <p className="text-lg">{item.price}</p>
                  <svg onClick={() => deleteItem(item.id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeLinejoin="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                    <path strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
            )
          })}
           
      <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
        <div className="flex justify-between">
          <p className="text-lg font-bold">Total</p>
          <div className="">
            <p className="mb-1 text-lg font-bold">{sum} LUX</p>
            <p className="text-sm text-gray-700">including VAT</p>
          </div>
        </div>
        <button className="mt-6 w-full rounded-md bg-black py-1.5 font-medium text-blue-50 hover:bg-gray-600">Check out</button>
      </div>
    </div>
  </div>
  </div>
    )
}

export default AddToCart;