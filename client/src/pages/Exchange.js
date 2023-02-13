import React, { useState, useEffect } from 'react';
import isSigned from '../app/isSigned'

import apiUrl from "../utils/api";
import axios from 'axios';

//로그인
const Exchange = () => {
    const [inputValue, setInputValue] = useState("");
    const [alertMessage, setAlertMessage] = useState("");
    const [exceed, setExceed] = useState('');

    const handleChange = (e) => {
        const value = e.target.value;
        const removedCommaValue = Number(value.replaceAll(",", ""));

        setInputValue(removedCommaValue.toLocaleString());
    }

    useEffect(() => {
        const userData = isSigned();
        if (!userData.isSigned) {
            alert('로그인이 필요합니다.');
            document.location.href = '/login';
        }
    }, []);

    const onSubmitHandler = () => {
        axios.post(`${apiUrl}/tokentransfer`, {
            userId: isSigned().userId,
            amount: Number(inputValue.replaceAll(",", "")),
        })
            .then(res => {
                if (res.data === "not enough body params") {
                    setAlertMessage('값을 입력해주세요.');
                    setExceed('');
                }
                else if(res.data.message === "exceed the daily limit for exchanges") {
                    setExceed(`오늘 교환할 수 있는 남은 토큰의 양은 ${res.data.more} 입니다.`);
                    setAlertMessage('');
                }
                else {
                    console.log(res);
                        alert('토큰 구매가 완료되었습니다. 마이페이지에서 잔액을 확인해주세요.')
                        document.location.href = '/mypage'
                }
            })
        }

        return ( 
            <div className='flex justify-center m-10'>
              <div className='w-1/2'>
                <h1 className='text-4xl text-center'>Token Exchange</h1>
                <br />
                <input 
                  className='ml-56 border-2 border-solid number-input m-5 text-right placeholder-gray-500 rounded-lg p-2' 
                  placeholder='원' 
                  onChange={handleChange} 
                  value={inputValue} 
                />
                <button 
                  className='bg-black hover:bg-gray-600 font-bold py-2 px-4 rounded text-white mt-5' 
                  onClick={onSubmitHandler}
                >
                  토큰 구매
                </button>
                <p className='font-bold ml-56 text-red-500'>{exceed}</p>
                <p className='font-bold ml-56 text-red-500'>{alertMessage}</p>
                <p className='text-gray-500 text-center mt-5'>
                  *LUX Token은 원화와 1:1 비율로 지급 됩니다.
                </p>
                <p className='text-gray-500 text-center'>
                  *일일 구매 한도는 2천만 LUX Token 입니다.
                </p>
              </div>
            </div>
          );
         
          
          
          
          
}

export default Exchange;