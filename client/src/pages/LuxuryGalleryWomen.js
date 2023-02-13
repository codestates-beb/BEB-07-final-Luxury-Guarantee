import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import apiUrl from "../utils/api";
import isSigned from '../app/isSigned';
import likeheart from '../pages/img/likeheart.png';
import emptyheart from "../pages/img/emptyheart.png";

//명품 갤러리

const LuxuryGalleryWomen = () => {
    const [itemList, setItemList] = useState("");

    useEffect(() => {
        axios.get(`${apiUrl}/luxurylist`)
            .then(res => {
                const data = res.data;
                const accList = data.filter(e => e.category === 'WOMEN');
                setItemList(accList)
            })

    }, []);


    const handleAddLike = async (id) => {
        await axios.post(`${apiUrl}/likeadd`, {
            userId: isSigned().id,
            goodsId: id
        })
            .then(res => {
                window.location.reload();
            });
    };

    const handleDeleteLike = async (id) => {
        await axios.post(`${apiUrl}/likedelete`, {
            userId: isSigned().id,
            goodsId: id
        })
            .then(res => {
                window.location.reload();
            });
    }

    if (itemList.length === 0) {
        return (
            <div className="h-screen bg-gray-100 pt-20">
                <h1 className="mb-10 text-center text-2xl font-bold">Womens</h1>
                <i className="fa-solid fa-person-dress flex justify-center mb-10 text-9xl text-gray-300"></i>
                <p className='text-center'>판매 중인 상품이 없습니다.</p>
            </div>
        )
    }

    return (
        <section className="bg-white ">
            <div className="container px-6 py-8 mx-auto">
                <div className="lg:flex lg:-mx-2">

                    <div className="mt-6 lg:mt-0 lg:px-2 lg:w-4/5 ">
                        <div className="flex items-center justify-between text-sm tracking-widest uppercase ">
                            <p className="text-gray-500">{itemList.length} Items</p>
                            <div className="flex items-center">
                                <p className="text-gray-500 dark:text-gray-300">Sort</p>
                                <select className="font-medium text-gray-700 bg-transparent focus:outline-none">


                                    <option value="#">Recommended</option>
                                    <option value="#">Size</option>
                                    <option value="#">Price</option>
                                </select>
                            </div>
                        </div>


                        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {itemList && itemList.map((e) => {
                                return (
                                    <div className='grid justify-items-center border-solid border-2 mt-3 mb-3' key={e.id}>
                                        <Link className="flex flex-col items-center justify-center w-full max-w-lg mx-auto border-b-2 " to={`/luxurydetail/${e.id}`}><img className="object-cover w-full rounded-md h-72 xl:h-80 " alt='my-item' src={e.image_url}  >
                                        </img></Link>
                                        <div className='flex items-center ml-3 mt-3 '>
                                            <div className='grid justify-items-center
                                            '>
                                                <h4 className="mt-2 text-lg font-medium text-gray-700">{e.name}</h4>
                                                <p className="text-blue-500">{e.price} LUX</p>
                                            </div>
                                            <div className='relative left-20'>
                                                <button>
                                                    {e.likecnt !== 0 ? (<img onClick={() => {
                                                        handleDeleteLike(e.id)
                                                    }} className="w-8" src={likeheart} alt="none" />) : (<img onClick={() => {
                                                        handleAddLike(e.id)
                                                    }} className="w-8" src={emptyheart} alt="none" />)}
                                                </button>
                                                <p>{e.likecnt}</p>
                                            </div>
                                        </div>
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

export default LuxuryGalleryWomen;