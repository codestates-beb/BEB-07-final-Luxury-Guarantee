import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import isSigned from '../app/isSigned'
import axios from 'axios';
import apiUrl from "../utils/api";

//명품 판매 정보등록 (회원전용)

const LuxurySell = () => {
    const [itemInfo, setItemInfo] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [imageSrc, setImageSrc] = useState([]);
    const [isToken, setIsToken] = useState('');

    const params = useParams();

    useEffect(() => {
        if (!isSigned().isSigned) {
            alert('로그인이 필요합니다.');
            document.location.href = '/login';
        }
        const id = params.id;
        const getData = async () => {
            try {
                const res = await axios.get(`${apiUrl}/beforereselllist/${id}`)
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
    const imgRef = useRef();
    const saveImgFile = () => {
        const file = imgRef.current.files[0];

        if (file.length === 0) {
            return
        }
        else {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                if (imageSrc.length >= 3) {
                    alert("이미지는 최대 3개까지만 업로드 가능합니다");
                }
                else {
                    imageSrc.push(reader.result);
                    setImageSrc([...imageSrc]);

                }
            }
        };
    }

    const onSubmitHandler = () => {
        axios.post(`${apiUrl}/addselluser`, {
            id: Number(params.id),
            images: imageSrc,
            content: inputValue.content,
            price: Number(inputValue.price)
        })
            .then(res => {
                console.log(res)
                if (res.data === 'not enough token') {
                    setIsToken("보유하신 토큰의 양이 부족합니다.");
                }
                else {
                    document.location.href = '/Recell';
                }

            })
    }
    if (!itemInfo) {
        return null;
    }

    console.log(itemInfo)
    return (
        <div>
            <div className='content-start'>
                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to image Upload</span></p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>

                    <input type="file" id="dropzone-file"
                        className="media hidden" onChange={saveImgFile} ref={imgRef}
                    />
                </label>
                <p className="text-gray-500">*제품 사용 사진을 업로드 해주세요.</p>
                <p className="text-gray-500">*사진은 최대 3장까지 업로드 가능합니다.</p>
                <div className='flex items-center w-[480px]'>
                    {imageSrc && imageSrc.map((e) => {
                        return (
                            <img className="preview-img border-solid border-2 m-3 " key={e} src={e} alt="" />
                        )
                    })}
                </div>
            </div>
            <div className='right-div ml-10 mt-10'>
                <div className='text-gray-400'>{itemInfo[0].brand}</div>
                <div className='text-5xl'>{itemInfo[0].name}</div>
                <img src={itemInfo[0].image_url} alt=''></img>
                <br></br>
                <label>
                    price
                </label>
                <br></br>
                <input className='border-solid border-2 text-right	' name='price' onChange={handleChange} value={inputValue.price || ""} />
                <span className='ml-2'>LUX token</span>
                <br></br>
                <p className='text-red-500 font-bold'>{isToken}</p>
                <br></br>
                <label>
                    content
                </label>
                <br></br>
                <textarea className='border-solid border-2 h-48 w-80 ' name='content' onChange={handleChange} value={inputValue.content || ""} />
                <br></br>
                <button className='bg-black hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mt-3 mb-3' onClick={onSubmitHandler}>리셀 판매 등록</button>
            </div>
        </div>

    )
}

export default LuxurySell;