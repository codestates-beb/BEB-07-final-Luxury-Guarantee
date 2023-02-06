import React, { useState, useRef } from 'react';
import apiUrl from "../utils/api";
import axios from 'axios';
import isSigned from '../app/isSigned'

//명품 정보 등록 (기업전용)

const LuxuryResister = () => {
    const [imageSrc, setImageSrc] = useState('');
    const [inputValue, setInputValue] = useState({ category: 'MAN' });

    const handleChange = (e) => {
        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.value
        });
    };


    const imgRef = useRef();

    const saveImgFile = () => {
        const file = imgRef.current.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImageSrc(reader.result);
        };

    };

    const choice = ["MAN", "WOMAN", "ACC"]
    const options = choice.map((e) => {
        return <option key={e}>{e}</option>
    })

    const onSubmitHandler = () => {
        axios.post(`${apiUrl}/luxury_register`, {
            name: inputValue.name,
            serial: inputValue.serial,
            brand: inputValue.brand,
            category: inputValue.category,
            material: inputValue.material,
            designer: inputValue.designer,
            madeCountry: inputValue.madeCountry,
            factory: inputValue.factory,
            totalSupply: Number(inputValue.totalSupply),
            created_at: inputValue.createdDate,
            season: inputValue.season,
            price: Number(inputValue.price),
            image_url: imageSrc,
            description: inputValue.description,
            userId: isSigned().id,
        })
            .then(res => {
                document.location.href = '/mypage'
            })
    }


    return (
        
        <div className='flex justify-center mb-10 mt-10'>
            <div className="flex flex-col max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
    <div className="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
            Resister Your Luxury
            </div>
            <br></br>
            <input type="file" accept="image/*"
                className="media" onChange={saveImgFile} ref={imgRef}
            />
            {imageSrc && <img className="preview-img" src={imageSrc} alt="preview-img" />}
            <br></br>
                <div className=''>
                    name
                <input name='name' onChange={handleChange} value={inputValue.name || ""} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-600 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-700 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" />
                    </div>
                    <br></br>
               
                <div className=''>
                    serial
                </div>
                
                <input name='serial' onChange={handleChange} value={inputValue.serial || ""} className='rounded-lg border-transparent flex-1 appearance-none border border-gray-600 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-700 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent'  ></input>
                <br></br>
                <div className=''>
                    brand
                
                
                <input name='brand' onChange={handleChange} value={inputValue.brand || ""} className='rounded-lg border-transparent flex-1 appearance-none border border-gray-600 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-700 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent' ></input>
               </div>
               <br></br>
                <label>
                    category
                </label>
               
                <select name='category' onChange={handleChange} value={inputValue.category || ""} className='rounded-lg border-transparent flex-1 appearance-none border border-gray-600 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-700 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent' >{options}</select>
                <br></br>
                <label>
                    material and fabric
                </label>
                
                <input name='material' onChange={handleChange} value={inputValue.material || ""} className='rounded-lg border-transparent flex-1 appearance-none border border-gray-600 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-700 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent' ></input>
                <br></br>
                <label>
                    designer
                </label>
                
                <input name='designer' onChange={handleChange} value={inputValue.designer || ""} className='rounded-lg border-transparent flex-1 appearance-none border border-gray-600 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-700 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent' ></input>
                <br></br>
                <label>
                    madeCountry
                </label>
               
                <input name='madeCountry' onChange={handleChange} value={inputValue.madeCountry || ""} className='rounded-lg border-transparent flex-1 appearance-none border border-gray-600 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-700 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent' ></input>
                <br></br>
                <label>
                    factory
                </label>
               
                <input name='factory' onChange={handleChange} value={inputValue.factory || ""} className='rounded-lg border-transparent flex-1 appearance-none border border-gray-600 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-700 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent' ></input>
                <br></br>
                <label>
                    totalSupply
                </label>
                
                <input name='totalSupply' onChange={handleChange} value={inputValue.totalSupply || ""} className='rounded-lg border-transparent flex-1 appearance-none border border-gray-600 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-700 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent' ></input>
                <br></br>
                <label>
                    created_at
                </label>
               
                <input name='createdDate' onChange={handleChange} type='date' value={inputValue.createdDate || ""} className='rounded-lg border-transparent flex-1 appearance-none border border-gray-600 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-700 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent' ></input>
                <br></br>
                <label>
                    season
                </label>
               
                <input name='season' onChange={handleChange} value={inputValue.season || ""} className='rounded-lg border-transparent flex-1 appearance-none border border-gray-600 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-700 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent' ></input>
                <br></br>
                <label>
                    price
                </label>
               
                <input name='price' onChange={handleChange} value={inputValue.price || ""} className='rounded-lg border-transparent flex-1 appearance-none border border-gray-600 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-700 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent' ></input>
                <br></br>
                <label>
                    description
                </label>
              
                <input name='description' onChange={handleChange} value={inputValue.description || ""} className='rounded-lg border-transparent flex-1 appearance-none border border-gray-600 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-700 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent' ></input>
                <br></br>
            
            
                <button className='lux-resister bg-black hover:bg-black text-white font-bold py-2 px-4 rounded ' onClick={onSubmitHandler}>Create</button>
            </div>
            </div>
            
        
        
    )
}

export default LuxuryResister;