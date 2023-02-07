import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import apiUrl from '../utils/api';
import axios from 'axios';
import photo from './img/main.jpg'
import isSigned from '../app/isSigned';
// 리뷰  a태그 나중에 링크로 바꾸기
const Review= () => {

    const[review, setReview] = useState([]);

    const userId = isSigned().nickname;

    async function getAllReview() {
        const res = await axios.get(`${apiUrl}/postlist`)
        return res
    }

    useEffect(() => {
        getAllReview().then((res) => {
          console.log(res.data);
          setReview([...res.data]);
        });
      }, []);
    
    return (
        
<div className="w-full p-12 bg-white">
    <div className="flex items-end justify-between mb-12 header">
        <div className="title">
            <p className="mb-4 ml-14 text-4xl font-bold text-gray-800">
                Review
            </p>
            <p className="text-2xl ml-14 font-light text-gray-400">
                리뷰를 해보아요!
            </p>
        </div>
        <div className="text-end">
            <form className="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
                <div className=" relative ">
                    <input type="text" id="&quot;form-subscribe-Search" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" placeholder="Enter a title"/>
                    </div>
                    <button className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-black rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
                        Search
                    </button>
                </form>
            </div>
        </div>
        <div className="grid grid-cols-4 gap-12 md:grid-cols-2 xl:grid-cols-3">
        {review.map((review, id)=> {
            return(
            <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
                <Link to={`/reviewdetail/${review.id}`} className="block w-full h-full">
                    <img alt="" src={photo} className="object-cover w-full max-h-40"/>
                    <div className="w-full p-4 bg-white dark:bg-gray-800">
                        <p className="font-medium text-indigo-500 text-md">
                            {/* 상품명 */}
                        </p>
                        <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                            {review.title}
                        </p>
                        <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                            {review.content}
                        </p>
                        <div className="flex items-center mt-4">
                            <Link to="" className="relative block">
                                <img alt="profil" src={photo} className="mx-auto object-cover rounded-full h-10 w-10 "/>
                            </Link>
                            <div className="flex flex-col justify-between ml-4 text-sm">
                                <p className="text-gray-800 dark:text-white">
                                    {userId}
                                </p>
                                <p className="text-gray-400 dark:text-gray-300">
                                    {review.createdAt.split("T")[0]}
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            )
        })}
            </div>
            </div>

    )
}

export default Review;