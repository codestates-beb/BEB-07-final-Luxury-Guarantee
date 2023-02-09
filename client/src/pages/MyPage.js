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
		else {
			axios.get(`${apiUrl}/mypage/${userId}`)
				.then(res => {
					setUserInfo(res.data);

				})
		}

	}, []);

	const myPost = userInfo.post;
	const myItem = userInfo.Items;
	const myLux = Number(userInfo.tokenAmount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

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
					<p className="font-semibold">My LUX: {myLux}</p>
					<p className="font-semibold mt-3">My ETH: {userInfo.ethAmount}</p>
					<br></br>
				</div>
				<div className="mypost font-semibold">FAQ {/*{myPost && myPost.map((post)=> (
					<div key={post.id}>
						<Link to={`/reviewdetail/${post.id}`}>
						<p>
							{post.title}
						</p>
						</Link> 
					</div>
				))}*/}
				</div>
				<br></br>
				<div className="mypost font-semibold mt-3">Post {myPost && myPost.map((post) => (
					<div key={post.id}>
						<Link to={`/reviewdetail/${post.id}`}>
							<p className='font-thin m-2'>
								{post.title}
							</p>

						</Link>
					</div>
				))}
				</div>
				<div className='flex justify-end'>
					{userInfo.isCompany === true ? (<button className='lux-resister bg-black hover:bg-gray-600 text-white font-bold py-2 px-4 rounded '><Link to='/luxuryresister'>명품 등록하기</Link></button>) : (<></>)}

				</div>
			</div>

			<div className="grid mt-5 grid-cols-4 gap-6 justify-center items-center w-full ">

				<div>
					{userInfo.isCompany === true ?
						(<p className="font-semibold mt-3">내가 등록한 아이템 (NFT)</p>) :
						(<p className="font-semibold mt-3">내가 구매한 아이템 (NFT)</p>)}
					<br></br>
					{myItem && myItem.map((e) => (
						<div key={e.id} className='border-solid border-2 mb-5 '>
							<p>{e.id}</p>
							<img alt='my-item' src={e.image_url}  ></img>
							<br></br>
							<p className='flex justify-center'>{e.brand}</p>
							<p className='flex justify-center'>{e.name}</p>
							<br></br>
							<div className='flex justify-center'>
								{e.isSelling === true ? (
									<p
										className='bg-black text-white font-bold py-2 px-4 rounded m-1' >판매중</p>
								) : userInfo.isCompany === true ? (
									<Link to={`/luxurysell/${e.id}`} className='bg-black hover:bg-gray-600 text-white font-bold py-2 px-4 rounded'>판매 등록하기</Link>
								) : (
									<Link to={`/luxuryselluser/${e.id}`} className='bg-black hover:bg-gray-600 text-white font-bold py-2 px-4 rounded m-1'>리셀 판매하기</Link>
								)}
								{e.isReview === false && userInfo.isCompany === false ? (
									<Link to={`/reviewpost/${e.id}`} className='bg-black hover:bg-gray-600 text-white font-bold py-2 px-4 rounded m-1'>리뷰 작성하기</Link>
								) : userInfo.isCompany === false ? (<p className='bg-black text-white font-bold py-2 px-4 rounded m-1'>리뷰 작성 완료</p>) : <></>}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default MyPage;