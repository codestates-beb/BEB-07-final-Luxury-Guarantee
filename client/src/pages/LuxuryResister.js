import React, { useState, useRef } from 'react';
import apiUrl from "../utils/api";
import axios from 'axios';
import isSigned from '../app/isSigned'
import Loading from '../components/Loading';
//명품 정보 등록 (기업전용)

const LuxuryResister = () => {
    const [loading, setLoading] = useState(false);
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
        if (file.length === 0) {
            return
        } else {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setImageSrc(reader.result);
            };

        }

    };

    const choice = ["MAN", "WOMEN", "ACC"]
    const options = choice.map((e) => {
        return <option key={e}>{e}</option>
    })

    const onSubmitHandler = () => {
        setLoading(true)
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
                console.log(res)
                document.location.href = '/mypage'
            })
    }


    return (
        <div className='flex justify-center mb-10 mt-10'>

            <div className="flex flex-col max-w-md px-4 py-8 bg-white rounded-lg shadow sm:px-6 md:px-8 lg:px-10">
                <div className="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl">
                    Resister Your Luxury
                </div>
                <br></br>
                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span></p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input type="file" id="dropzone-file"
                        className="media hidden" onChange={saveImgFile} ref={imgRef}
                    />
                </label>
                {imageSrc && <img className="preview-img" src={imageSrc} alt="preview-img" />}
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
                    price (token)
                </label>

                <input name='price' onChange={handleChange} value={inputValue.price || ""} className='rounded-lg border-transparent flex-1 appearance-none border border-gray-600 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-700 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent' ></input>
                <br></br>
                <label>
                    description
                </label>

                <input name='description' onChange={handleChange} value={inputValue.description || ""} className='rounded-lg border-transparent flex-1 appearance-none border border-gray-600 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-700 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent' ></input>
                <br></br>


                {loading ? <Loading /> : <button className='lux-resister bg-black hover:bg-black text-white font-bold py-2 px-4 rounded ' onClick={onSubmitHandler}>Create</button>}

            </div>
        </div>



    )
}

export default LuxuryResister;