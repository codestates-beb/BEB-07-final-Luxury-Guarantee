import React, { useState, useEffect } from 'react';
import isSigned from '../app/isSigned'

import apiUrl from "../utils/api";
import axios from 'axios';

//로그인
const Exchange = () => {
    const [inputValue, setInputValue] = useState("");
    const [alertMessage, setAlertMessage] = useState("");

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
                } else {
                    console.log(res)
                    alert('토큰 구매가 완료되었습니다. 마이페이지에서 잔액을 확인해주세요.')
                    document.location.href = '/mypage'
                }
            })
    }

    return (
        <div className='m-5'>
            <h1 className='text-4xl'>Token Exchange</h1>
            <br>
            </br>
            <input className='number-input border-solid border-2 m-5 text-right' placeholder='원' onChange={handleChange} value={inputValue} ></input>
            <button className='bg-black hover:bg-gray-600 text-white font-bold py-2 px-4 rounded' onClick={onSubmitHandler}>토큰 구매</button>
            <p className='m-5 mt-0 text-red-500 font-bold'>{alertMessage}</p>
            <p>*LUX Token은 원화와 1:1 비율로 지급 됩니다.</p>
            <p>*일일 구매 한도는 2천만 LUX Token 입니다.</p>
        </div>
    )
}

export default Exchange;