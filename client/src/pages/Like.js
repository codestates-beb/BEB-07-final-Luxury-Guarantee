import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import apiUrl from "../utils/api";
import isSigned from '../app/isSigned';

//찜 목록

const LuxuryGallery = () => {
    const [likeList, setLikeList] = useState([]);
    const userData = isSigned();

    useEffect(() => {
        const userId = userData.id;
        if (!userData.isSigned) {
            alert('로그인이 필요합니다.');
            document.location.href = '/login';
        }
        else {
            axios.get(`${apiUrl}/likelist/${userId}`)
                .then(res => {
                    setLikeList(res.data.likes);
                })
        }

    }, []);

    const handleAddToCart = (id) => {
        axios.post(`${apiUrl}/cart`, {
            userId: userData.id,
            goodsId: id,
        })
            .then(res => {
                console.log(res);
            })
            .catch(error => {
                console.error(error);
            });
    };

    if (likeList.length === 0) {
        return (
            <div className="h-screen bg-gray-100 pt-20">
                <h1 className="mb-10 text-center text-2xl font-bold">Like</h1>
                <i className="fa-solid fa-heart flex justify-center mb-10 text-9xl text-gray-300"></i>
                <p className='text-center'>찜한 상품이 없습니다.</p>
            </div>
        )
    }

    return (
        <section className="bg-white ">
            <div className="container px-6 py-8 mx-auto">
                <div className="lg:flex lg:-mx-2">

                    <div className="mt-6 lg:mt-0 lg:px-2 lg:w-4/5 ">
                        <div className="flex items-center justify-between text-sm tracking-widest uppercase ">
                            <p className="text-gray-500 ">{likeList.length} Items</p>
                            <div className="flex items-center">
                                <p className="text-gray-500 ">Sort</p>
                                <select className="font-medium text-gray-700 bg-transparent focus:outline-none">
                                    <option value="#">Recommended</option>
                                    <option value="#">Size</option>
                                    <option value="#">Price</option>
                                </select>
                            </div>
                        </div>


                        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
                            {likeList && likeList.map((e) => {
                                return (
                                    <div key={e.id} className='border-2'>
                                        <Link className="flex flex-col items-center justify-center w-full max-w-lg mx-auto " to={`/luxurydetail/${e.goodsId}`}><img className="object-cover w-full rounded-md h-72 xl:h-80" alt='my-item' src={e.image_url}  >

                                        </img>
                                            <h4 className="mt-2 text-lg font-medium text-gray-700 ">{e.name}</h4>
                                            <p className="text-blue-500">{e.price} LUX</p></Link>


                                        <button onClick={() => handleAddToCart(e.goodsId)} className="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                            </svg>
                                            <span className="mx-1">Add to cart</span>
                                        </button>
                                    </div>
                                )

                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default LuxuryGallery;