import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import apiUrl from '../utils/api';
import axios from 'axios';
import isSigned from '../app/isSigned';
// 리뷰  a태그 나중에 링크로 바꾸기
const Review = () => {
    const [review, setReview] = useState([]);

    const userId = isSigned().nickname;

    async function getAllReview() {
        const res = await axios.get(`${apiUrl}/postlist`)
        return res
    }

    useEffect(() => {
        getAllReview().then((res) => {
            setReview([...res.data]);
        });
    }, []);

    if (review.length === 0) {
        return (
            <div className="h-screen bg-gray-100 pt-20">
                <h1 className="mb-10 text-center text-2xl font-bold">Review</h1>
                <i className="fa-solid fa-comment flex justify-center mb-10 text-9xl text-gray-300"></i>
                <p className='text-center'>등록된 리뷰가 없습니다.</p>
            </div>
        )
    }

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
                            <input type="text" id="&quot;form-subscribe-Search" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" placeholder="Enter a title" />
                        </div>
                        <button className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-black rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-12 md:grid-cols-2 xl:grid-cols-3">
                {review.slice(0).reverse().map((review) => {
                    return (
                        <div key={review.id} className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80 border-2 ">
                            <Link to={`/reviewdetail/${review.id}`} className="block w-full h-full">
                                <img alt="" src={review.image_url} className="object-cover w-full max-h-40" />
                                <div className="w-full p-4 bg-white">
                                    <p className="font-medium text-indigo-500 text-md">
                                        {/* 상품명 */}
                                    </p>
                                    <p className="mb-2 text-xl font-medium text-gray-800">
                                        {review.title}
                                    </p>
                                    <p className="font-light text-gray-400 text-md">
                                        {review.content}
                                    </p>
                                    <div className="flex items-center mt-4">
                                        <div className="flex flex-col justify-between text-sm">
                                            <p className="text-gray-800 ">
                                                {userId}
                                            </p>
                                            <p className="text-gray-400">
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