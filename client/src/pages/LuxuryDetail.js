import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import apiUrl from "../utils/api";

//명품 상세페이지

const LuxuryDetail = () => {
  const [itemInfo, setItemInfo] = useState('');
  const params = useParams();

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
  }, []);

  if (!itemInfo) {
    return null;
  }

  return (
    <div>
      <div className='left-div float-left w-1/3 mr-10'>
        <img src={itemInfo.image_url} className='border-solid border-2 mt-3 mb-3'></img>
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
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3'>구매하기</button>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3 ml-5'>장바구니에 담기</button>
      </div>
    </div>

  )
}

export default LuxuryDetail;