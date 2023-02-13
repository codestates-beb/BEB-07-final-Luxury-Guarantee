import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import apiUrl from "../utils/api";
import isSigned from '../app/isSigned';

//명품 상세페이지

const LuxuryDetail = () => {
  const [itemInfo, setItemInfo] = useState('');
  const params = useParams();
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    const id = params.id;

    const getData = async () => {
      try {
        const res = await axios.get(`${apiUrl}/luxurydetail/${id}`)
        if (res.data.length === 0) {
          alert('존재하지 않는 상품입니다.');
          document.location.href = '/';
        }
        setItemInfo(res.data)
      } catch (e) {
        console.log(e)
      }
    }
    getData();
  }, [params]);

  const handleAddToCart = () => {
    axios.post(`${apiUrl}/cart`, {
      userId: isSigned().id,
      goodsId: itemInfo.id
    })
      .then(res => {
        if (res.data === 'already in cart') {
          setAlertMessage('이미 장바구니에 담긴 상품입니다.')
        } else {
          document.location.href = `/cart/${isSigned().id}`

        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  if (!itemInfo) {
    return null;
  }

  return (
    <div className="flex flex-center ">
      <div className=' left-div float-left w-1/3 mr-10'>
        <img alt='' src={itemInfo.image_url} className='border-solid border-2 mt-3 mb-3'></img>
      </div>
      <div className='right-div ml-10'>
        <div className='text-gray-400'>{itemInfo.brand}</div>
        <div className='text-5xl'>{itemInfo.name}</div>
        <br></br>

        <span>{itemInfo.price}</span>
        <span className='ml-2'>LUX</span>
        <br></br>
        <br></br>
        <span className='text-2xl'>{itemInfo.description}</span>
        <br></br>
        <br></br>
        <Link to={`../payment/${itemInfo.id}`}>
          <button className='bg-black hover:bg-gray-600 text-white font-bold py-2 px-4 rounded m-1'>구매하기</button>
        </Link>
        <button onClick={handleAddToCart} className='bg-black hover:bg-gray-600 text-white font-bold py-2 px-4 rounded m-1'>장바구니에 담기</button>
        <p className='text-red-500 mt-3'>{alertMessage}</p>
      </div>
    </div>

  )
}

export default LuxuryDetail;