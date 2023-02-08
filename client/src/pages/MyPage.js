import React, { useEffect, useState } from 'react';
import isSigned from '../app/isSigned'
import apiUrl from "../utils/api";
import axios from 'axios';
import { Link } from 'react-router-dom';

const MyPage = () => {
	const [userInfo, setUserInfo] = useState("");

	useEffect(() => {
		const userData = isSigned();
		const userId = userData.id;
		if (!userData.isSigned) {
			alert('로그인이 필요합니다.');
			document.location.href = '/login';
		}

		axios.get(`${apiUrl}/mypage/${userId}`)
			.then(res => {
				setUserInfo(res.data);

			})
	}, []);

	const myItem = userInfo.Items;

	return (
		<div className="grid grid-cols-1 lg:grid-cols-1 gap-6 my-12 w-2xl container px-2 mx-auto">
			<div className="bg-white shadow rounded-lg p-10">
				<div className="flex flex-col gap-1 text-left items-left">
					<img className="h-32 w-32 bg-white p-2 rounded-full shadow mb-4" src="https://www.pngarts.com/files/10/Default-Profile-Picture-PNG-Download-Image.png" alt="" />
					<p className="text-[20px] mt-5"> Hello {userInfo.nickname}</p>
					<br></br>
					<p className="font-semibold mt-1">Wallet address</p>
					<p className=" mt-1">{userInfo.address}</p>
					<br></br>
					<p className="font-semibold mt-3">My Token: {userInfo.tokenAmount}</p>
					<p className="font-semibold mt-3">My ETH: {userInfo.ethAmount}</p>
					<br></br>
				</div>

				<div className="flex justify-start items-left gap-2 my-3">
					<div className="font-semibold text-center mx-4">
						<p className="text-black">102</p>
						<span className="text-gray-400">Review</span>
					</div>
					<div className="font-semibold text-center mx-4">
						<p className="text-black">102</p>
						<span className="text-gray-400">Sell</span>
					</div>
					<div className="font-semibold text-center mx-4">
						<p className="text-black">102</p>
						<span className="text-gray-400">Buy</span>
					</div>
				</div>
				<br></br>
				<div className="mypost font-semibold mt-3">Post {userInfo.post}</div>
				<div className='flex justify-end'>
					{userInfo.isCompany === true ? (<button className='lux-resister bg-black hover:bg-gray-600 text-white font-bold py-2 px-4 rounded '><Link to='/luxuryresister'>명품 등록하기</Link></button>) : (<></>)}

				</div>
			</div>

			<div className="grid mt-5 grid-cols-4 gap-6 justify-center items-center w-full ">

				<div>
					{userInfo.isCompany === true ?
						(<p className="font-semibold mt-3">내가 등록한 아이템</p>) :
						(<p className="font-semibold mt-3">내가 구매한 아이템</p>)}
					<br></br>
					{myItem && myItem.map((e) => (
						<div key={e.id} className='border-solid border-2 mb-5'>
							<p>{e.id}</p>
							<img alt='my-item' src={e.image_url}  ></img>
							<br></br>
							<p>{e.brand}</p>
							<br></br>
							<div className='flex justify-center'>
								{userInfo.isCompany === true ? (
									<Link to={`/luxurysell/${e.id}`}
										className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' >판매 등록하기</Link>
								) : (
									<Link to={`/luxuryselluser/${e.id}`} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>리셀 판매하기</Link>
								)}

							</div>
						</div>
					))}
				</div>

				{/* <div className="relative flex flex-col justify-between   bg-white   bg-cover text-gray-800  overflow-hidden cursor-pointer w-full object-cover object-center rounded shadow-md h-64 my-2" >
					<div className="absolute bg-gradient-to-t from-green-400 to-blue-400  opacity-50 inset-0 z-0"></div>
					<div className="relative flex flex-row items-end  h-72 w-full ">
						<div className="absolute right-0 top-0 m-2">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 p-2 text-gray-200 hover:text-blue-400 rounded-full hover:bg-white transition ease-in duration-200 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
							</svg>
						</div>
						<div className="p-6 rounded-lg  flex flex-col w-full z-10 ">
							<h4 className="mt-1 text-white text-xl font-semibold  leading-tight truncate">Loremipsum..
							</h4>
							<div className="flex justify-between items-center ">
								<div className="flex flex-col">
									<h2 className="text-sm flex items-center text-gray-300 font-normal">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
											</path>
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
										</svg>
										Dubai
									</h2>
								</div>
							</div>
							<div className="flex pt-4  text-sm text-gray-300">
								<div className="flex items-center mr-auto">
									<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
										</path>
									</svg>
									<p className="font-normal">4.5</p>
								</div>
								<div className="flex items-center font-medium text-white ">
									$1800
									<span className="text-gray-300 text-sm font-normal"> /wk</span>
								</div>
							</div>
						</div>
					</div>
				</div>
 */}
			</div>
		</div>
	)
}

export default MyPage;