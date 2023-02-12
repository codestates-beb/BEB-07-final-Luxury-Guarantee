import React, { useEffect, useState } from 'react';
import axios from 'axios';
import apiUrl from '../utils/api';
import isSigned from '../app/isSigned';
import { Link } from 'react-router-dom';

const AddToCart = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState('');
  const [selectItem, setSelectItem] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [allDeleteModal, setAllDeleteModal] = useState(false);
  const item = cart.items;

  const deleteItem = async () => {
    try {
      await axios.post(`${apiUrl}/cartdeleteone`, {
        cartId: selectItem,
      });
      setShowModal(false)
      window.location.replace(`/cart/${isSigned().id}`)
    } catch (error) {
      console.error(error);
    }
  };

  const deleteAllItem = async () => {

    try {
      await axios.post(`${apiUrl}/cartdeletemany`, {
        userId: isSigned().id
      });
      setAllDeleteModal(false)

      setCart([]);
      setTotalPrice(0);
    } catch (error) {
      console.error(error);
    }

  };

  useEffect(() => {
    if (!isSigned().isSigned) {
      alert('로그인이 필요합니다.');
      document.location.href = '/login';
    } else {
      const id = isSigned().id;
      const getCartList = async () => {
        try {
          const res = await axios.get(`${apiUrl}/cart/${id}`)
          setCart(res.data)
          let sum = 0;
          for (let i = 0; i < res.data.items.length; i++) {
            sum += res.data.items[i].price;
          }
          setTotalPrice(sum);
        } catch (e) {
          console.log(e)
        }
      }
      getCartList();
    }
  }, []);

  if (cart.length === 0 || item.length === 0) {
    return (
      <div className="h-screen bg-gray-100 pt-20">
        <h1 className="mb-10 text-center text-2xl font-bold">Cart</h1>
        <i className="fa-solid fa-cart-shopping flex justify-center mb-10 text-9xl text-gray-300"></i>
        <p className='text-center'>장바구니에 담긴 상품이 없습니다.</p>
      </div>
    )
  }

  return (
    <div className="h-screen bg-gray-100 pt-20">
      <h1 className="mb-10 text-center text-2xl font-bold">Cart</h1>

      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">

        {item && Array.isArray(item) && item.map((item, id) => {
          return (
            <div key={id} className="rounded-lg md:w-2/3">
              <div className="justify-between  rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                <img src={item.image_url} alt="" className="w-auto rounded-lg sm:w-40" />
                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                  <div className="mt-5 sm:mt-0">
                    <p className="text-lg font-bold text-gray-900">{item.goodsId}</p>
                  </div>
                  <div className="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div className="flex items-center border-gray-100">
                    </div>
                    <div className="flex items-center space-x-4">
                      <p className="text-lg">{item.price} LUX</p>
                      <svg onClick={() => {
                        setSelectItem(item.id);
                        setShowModal(true);
                      }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeLinejoin="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                        <path strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />

                      </svg>
                      {showModal ? (
                        <>
                          <div
                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                          >
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                              {/*content*/}
                              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                    해당 상품을 삭제하시겠습니까?
                                  </p>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                  <button
                                    className="bg-black text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => deleteItem()}
                                  >
                                    네
                                  </button>
                                  <button
                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                  >
                                    아니오
                                  </button>

                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}

        <div className="mt-6 h-auto rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div>
            <button onClick={() => setAllDeleteModal(true)} className="mb-4 w-4/12 rounded-md bg-black py-1.5 text-xs text-blue-50 hover:bg-gray-600">장바구니 비우기</button>
            {allDeleteModal ? (
              <>
                <div
                  className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*body*/}
                      <div className="relative p-6 flex-auto">
                        <p className="my-4 text-slate-500 text-lg leading-relaxed">
                          장바구니를 비우시겠습니까?
                        </p>
                      </div>
                      {/*footer*/}
                      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                          className="bg-black text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => deleteAllItem()}
                        >
                          네
                        </button>
                        <button
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setAllDeleteModal(false)}
                        >
                          아니오
                        </button>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
          </div>
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>


            <div className="">
              <p className="mb-1 text-lg font-bold">{totalPrice} LUX</p>
              <p className="text-sm text-gray-700">including VAT</p>
            </div>
          </div>
          <Link to='/payment'>
            <button className="mt-6 w-full rounded-md bg-black py-1.5 font-medium text-blue-50 hover:bg-gray-600">Check out</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AddToCart;