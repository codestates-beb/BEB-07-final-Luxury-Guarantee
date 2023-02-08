import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import isSigned from '../app/isSigned'
import axios from 'axios';
import apiUrl from "../utils/api";


//명품 판매 정보등록 (기업전용)


const LuxurySell = () => {
    const [itemInfo, setItemInfo] = useState('');
    const [inputValue, setInputValue] = useState('');

    const params = useParams();

    useEffect(() => {
        if (!isSigned().isSigned) {
            alert('로그인이 필요합니다.');
            document.location.href = '/login';
        }
        const id = params.id;
        const getData = async () => {
            try {
                const res = await axios.get(`${apiUrl}/beforesalelist/${id}`)
                if (res.data.length === 0 || res.data[0].userId !== isSigned().id) {
                    alert('잘못된 접근입니다.');
                    document.location.href = '/';
                }
                setItemInfo(res.data)
            } catch (e) {
                console.log(e)
            }
        }
        getData();
    }, [params]);

    const handleChange = (e) => {
        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.value
        });
    };

    const onSubmitHandler = () => {
        axios.post(`${apiUrl}/addsellcompany`, {
            id: Number(params.id),
            content: inputValue.content,
            price: Number(inputValue.price)
        })
            .then(res => {
                console.log(res)
            })
    }


    if (!itemInfo) {
        return null;
    }

    return (
        <div>
            <div className='left-div float-left w-1/3 mr-10'>
                <img alt='' src={itemInfo[0].image_url} className='border-solid border-2 mt-3 mb-3'></img>
            </div>
            <div className='right-div ml-10'>
                <div className='text-gray-400'>{itemInfo[0].brand}</div>
                <div className='text-5xl'>{itemInfo[0].name}</div>
                <br></br>
                <label>
                    price
                </label>
                <br></br>
                <input className='border-solid border-2 text-right	' name='price' onChange={handleChange} value={inputValue.price || ""} />
                <span className='ml-2'>LUX token</span>
                <br></br>
                <label>
                    content
                </label>
                <br></br>
                <textarea className='border-solid border-2 h-48 w-80 ' name='content' onChange={handleChange} value={inputValue.content || ""} />
                <br></br>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3' onClick={onSubmitHandler}>판매 등록</button>
            </div>
        </div>

    )
}

export default LuxurySell;