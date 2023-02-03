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
        <>
            <h1>Resister Your Luxury</h1>
            <input type="file" accept="image/*"
                className="media" onChange={saveImgFile} ref={imgRef}
            />
            {imageSrc && <img className="preview-img" src={imageSrc} alt="preview-img" />}
            <div>
                <label>
                    name
                </label>
                <br></br>
                <input name='name' onChange={handleChange} value={inputValue.name || ""} className='border border-black' ></input>
                <br></br>
                <label>
                    serial
                </label>
                <br></br>
                <input name='serial' onChange={handleChange} value={inputValue.serial || ""} className='border border-black' ></input>
                <br></br>
                <label>
                    brand
                </label>
                <br></br>
                <input name='brand' onChange={handleChange} value={inputValue.brand || ""} className='border border-black' ></input>
                <br></br>
                <label>
                    category
                </label>
                <br></br>
                <select name='category' onChange={handleChange} value={inputValue.category || ""} className='border border-black' >{options}</select>
                <br></br>
                <label>
                    material and fabric
                </label>
                <br></br>
                <input name='material' onChange={handleChange} value={inputValue.material || ""} className='border border-black' ></input>
                <br></br>
                <label>
                    designer
                </label>
                <br></br>
                <input name='designer' onChange={handleChange} value={inputValue.designer || ""} className='border border-black' ></input>
                <br></br>
                <label>
                    madeCountry
                </label>
                <br></br>
                <input name='madeCountry' onChange={handleChange} value={inputValue.madeCountry || ""} className='border border-black' ></input>
                <br></br>
                <label>
                    factory
                </label>
                <br></br>
                <input name='factory' onChange={handleChange} value={inputValue.factory || ""} className='border border-black' ></input>
                <br></br>
                <label>
                    totalSupply
                </label>
                <br></br>
                <input name='totalSupply' onChange={handleChange} value={inputValue.totalSupply || ""} className='border border-black' ></input>
                <br></br>
                <label>
                    created_at
                </label>
                <br></br>
                <input name='createdDate' onChange={handleChange} type='date' value={inputValue.createdDate || ""} className='border border-black' ></input>
                <br></br>
                <label>
                    season
                </label>
                <br></br>
                <input name='season' onChange={handleChange} value={inputValue.season || ""} className='border border-black' ></input>
                <br></br>
                <label>
                    price
                </label>
                <br></br>
                <input name='price' onChange={handleChange} value={inputValue.price || ""} className='border border-black' ></input>
                <br></br>
                <label>
                    description
                </label>
                <br></br>
                <input name='description' onChange={handleChange} value={inputValue.description || ""} className='border border-black' ></input>
                <br></br>
            </div>
            <div>
                <button className='lux-resister bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ' onClick={onSubmitHandler}>명품 등록하기</button>
            </div>
        </>
    )
}

export default LuxuryResister;