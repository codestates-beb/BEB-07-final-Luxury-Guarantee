import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import apiUrl from "../utils/api";


//명품 갤러리

const LuxuryGalleryMan = () => {
    const [itemList, setItemList] = useState("");

    useEffect(() => {
        axios.get(`${apiUrl}/luxurylist`)
            .then(res => {
                const data = res.data;
                const accList = data.filter(e => e.category === 'MAN');
                setItemList(accList)
            })

    }, []);

    if (itemList.length === 0) {
        return (
            <h1>판매중인 아이템이 없습니다.</h1>
        )
    }

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-8 mx-auto">
                <div className="lg:flex lg:-mx-2">

                    <div className="mt-6 lg:mt-0 lg:px-2 lg:w-4/5 ">
                        <div className="flex items-center justify-between text-sm tracking-widest uppercase ">
                            <p className="text-gray-500 dark:text-gray-300">{itemList.length} Items</p>
                            <div className="flex items-center">
                                <p className="text-gray-500 dark:text-gray-300">Sort</p>
                                <select className="font-medium text-gray-700 bg-transparent dark:text-gray-500 focus:outline-none">


                                    <option value="#">Recommended</option>
                                    <option value="#">Size</option>
                                    <option value="#">Price</option>
                                </select>
                            </div>
                        </div>


                        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {itemList && itemList.map((e) => {
                                return (
                                    <div key={e.id}>
                                        <Link className="flex flex-col items-center justify-center w-full max-w-lg mx-auto" to={`/luxurydetail/${e.id}`}><img className="object-cover w-full rounded-md h-72 xl:h-80" alt='my-item' src={e.image_url}  >

                                        </img>
                                            <h4 className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">{e.name}</h4>
                                            <p className="text-blue-500">{e.price} LUX</p></Link>
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

export default LuxuryGalleryMan;