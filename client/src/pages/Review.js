import React from 'react';
import { Link } from 'react-router-dom';
import photo from './img/main.jpg'
// 리뷰  a태그 나중에 링크로 바꾸기
const Review= () => {

    return (
        
<div className="w-full p-12 bg-white">
    <div className="flex items-end justify-between mb-12 header">
        <div className="title">
            <p className="mb-4 ml-14 text-4xl font-bold text-gray-800">
                제품 리뷰
            </p>
            <p className="text-2xl ml-14 font-light text-gray-400">
                리뷰를 해보아요!
            </p>
        </div>
        <div className="text-end">
            <form className="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
                <div className=" relative ">
                    <input type="text" id="&quot;form-subscribe-Search" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Enter a title"/>
                    </div>
                    <button className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
                        Search
                    </button>
                </form>
            </div>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
            <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
                <Link to="" className="block w-full h-full">
                    <img alt="" src={photo} className="object-cover w-full max-h-40"/>
                    <div className="w-full p-4 bg-white dark:bg-gray-800">
                        <p className="font-medium text-indigo-500 text-md">
                            Video
                        </p>
                        <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                            Work at home
                        </p>
                        <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                            Work at home, remote, is the new age of the job, every person can work at home....
                        </p>
                        <div className="flex items-center mt-4">
                            <Link to="" className="relative block">
                                <img alt="profil" src={photo} className="mx-auto object-cover rounded-full h-10 w-10 "/>
                            </Link>
                            <div className="flex flex-col justify-between ml-4 text-sm">
                                <p className="text-gray-800 dark:text-white">
                                    Jean Jacques
                                </p>
                                <p className="text-gray-400 dark:text-gray-300">
                                    20 mars 2029 - 6 min read
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
                <Link to="" className="block w-full h-full">
                    <img alt="" src={photo} className="object-cover w-full max-h-40"/>
                    <div className="w-full p-4 bg-white dark:bg-gray-800">
                        <p className="font-medium text-indigo-500 text-md">
                            Oui
                        </p>
                        <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                            test
                        </p>
                        <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                            The new supercar is here, 543 cv and 140 000$ !!
                        </p>
                        <div className="flex items-center mt-4">
                            <Link to="" className="relative block">
                                <img alt="profil" src={photo} className="mx-auto object-cover rounded-full h-10 w-10 "/>
                            </Link>
                            <div className="flex flex-col justify-between ml-4 text-sm">
                                <p className="text-gray-800 dark:text-white">
                                    Jean Jacques
                                </p>
                                <p className="text-gray-400 dark:text-gray-300">
                                    20 mars 2029 - 6 min read
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
                <Link to="" className="block w-full h-full">
                    <img alt="" src={photo} className="object-cover w-full max-h-40"/>
                    <div className="w-full p-4 bg-white dark:bg-gray-800">
                        <p className="font-medium text-indigo-500 text-md">
                            Oui
                        </p>
                        <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                            test
                        </p>
                        <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                            The new supercar is here, 543 cv and 140 000$ !!
                        </p>
                        <div className="flex items-center mt-4">
                            <Link to="" className="relative block">
                                <img alt="profil" src={photo} className="mx-auto object-cover rounded-full h-10 w-10 "/>
                            </Link>
                            <div className="flex flex-col justify-between ml-4 text-sm">
                                <p className="text-gray-800 dark:text-white">
                                    Jean Jacques
                                </p>
                                <p className="text-gray-400 dark:text-gray-300">
                                    20 mars 2029 - 6 min read
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
                <Link to="" className="block w-full h-full">
                    <img alt="" src={photo} className="object-cover w-full max-h-40"/>
                    <div className="w-full p-4 bg-white dark:bg-gray-800">
                        <p className="font-medium text-indigo-500 text-md">
                            제품 이름
                        </p>
                        <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                            test
                        </p>
                        <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                            The new supercar is here, 543 cv and 140 000$ !!
                        </p>
                        <div className="flex items-center mt-4">
                            <Link to="" className="relative block">
                                <img alt="profil" src={photo} className="mx-auto object-cover rounded-full h-10 w-10 "/>
                            </Link>
                            <div className="flex flex-col justify-between ml-4 text-sm">
                                <p className="text-gray-800 dark:text-white">
                                    Jean Jacques
                                </p>
                                <p className="text-gray-400 dark:text-gray-300">
                                    20 mars 2029 - 6 min read
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
                <Link to="" className="block w-full h-full">
                    <img alt="" src={photo} className="object-cover w-full max-h-40"/>
                    <div className="w-full p-4 bg-white dark:bg-gray-800">
                        <p className="font-medium text-indigo-500 text-md">
                            제품 이름
                        </p>
                        <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                            test
                        </p>
                        <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                            The new supercar is here, 543 cv and 140 000$ !!
                        </p>
                        <div className="flex items-center mt-4">
                            <Link to="" className="relative block">
                                <img alt="profil" src={photo} className="mx-auto object-cover rounded-full h-10 w-10 "/>
                            </Link>
                            <div className="flex flex-col justify-between ml-4 text-sm">
                                <p className="text-gray-800 dark:text-white">
                                    Jean Jacques
                                </p>
                                <p className="text-gray-400 dark:text-gray-300">
                                    20 mars 2029 - 6 min read
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
                <Link to="" className="block w-full h-full">
                    <img alt="" src={photo} className="object-cover w-full max-h-40"/>
                    <div className="w-full p-4 bg-white dark:bg-gray-800">
                        <p className="font-medium text-indigo-500 text-md">
                            Oui
                        </p>
                        <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                            test
                        </p>
                        <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                            The new supercar is here, 543 cv and 140 000$ !!
                        </p>
                        <div className="flex items-center mt-4">
                            <Link to="" className="relative block">
                                <img alt="profil" src={photo} className="mx-auto object-cover rounded-full h-10 w-10 "/>
                            </Link>
                            <div className="flex flex-col justify-between ml-4 text-sm">
                                <p className="text-gray-800 dark:text-white">
                                    Jean Jacques
                                </p>
                                <p className="text-gray-400 dark:text-gray-300">
                                    20 mars 2029 - 6 min read
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    </div>

    )
}

export default Review;