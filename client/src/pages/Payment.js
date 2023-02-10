import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import isSigned from '../app/isSigned'

import axios from 'axios';
import apiUrl from "../utils/api";

//결제 페이지
const Payment = () => {
    const [userInfo, setUserInfo] = useState('');
    const [itemInfo, setItemInfo] = useState('');
    const [alertMessage, setAlertMessage] = useState('');
    const params = useParams();

    useEffect(() => {
        const id = params.id;
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

    const directBuy = () => {
        axios.post(`${apiUrl}/directbuy`, {
            userId: userInfo.id,
            goodsId: itemInfo.id,
        })
            .then(res => {
                console.log(res)
                if (res.data === 'not enough token from buy_user') {
                    setAlertMessage('*토큰 잔액이 부족합니다.')
                } else {
                    alert('구매가 완료되었습니다. 마이페이지에서 확인해주세요.')
                    document.location.href = '/mypage'
                }
            })
    }

    return (

        <div className="w-full bg-white border-t border-b border-gray-200 px-5 py-10 text-gray-800">
            <div className="w-full">
                <div className="-mx-3 md:flex items-start">
                    <div className="px-3 md:w-7/12 lg:pr-10">
                        <div className="w-full mx-auto text-gray-800 font-light mb-6 border-b border-gray-200 pb-6">
                            <div className="w-full flex items-center">
                                <div className="overflow-hidden rounded-lg w-48 h-48 bg-gray-50 border border-gray-200">
                                    <img src={itemInfo.image_url} alt="" />
                                </div>
                                <div className="flex-grow pl-8">
                                    <button className="font-semibold uppercase text-gray-600">{itemInfo.name}</button>
                                    <p className="text-gray-400">x 1</p>
                                </div>
                                <div>
                                    <span className="font-semibold text-gray-400 text-sm">LUX</span>
                                    <span className="font-semibold text-gray-600 text-xl ml-1">${itemInfo.price}</span><span className="font-semibold text-gray-600 text-sm">.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="mb-6 pb-6 border-b border-gray-200">
                            <div className="-mx-2 flex items-end justify-end">
                                <div className="flex-grow px-2 lg:max-w-xs">
                                    <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Discount code</label>
                                    <div>
                                        <input className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-black transition-colors" placeholder="XXXXXX" type="text" />
                                    </div>
                                </div>
                                <div className="px-2">
                                    <button className="block w-full max-w-xs mx-auto border border-transparent bg-black hover:bg-gray-500 focus:bg-gray-500 text-white rounded-md px-5 py-2 font-semibold">APPLY</button>
                                </div>
                            </div>
                        </div>
                        <div className="mb-6 pb-6 border-b border-gray-200 text-gray-800">
                            <div className="w-full flex mb-3 items-center">
                                <div className="flex-grow">
                                    <span className="text-gray-600">Subtotal</span>
                                </div>
                                <div className="pl-3">
                                    <span className="font-semibold text-gray-400 text-sm">LUX</span>
                                    <span className="font-semibold ml-1">${itemInfo.price - itemInfo.price * 0.01}</span>
                                </div>
                            </div>
                            <div className="w-full flex items-center">
                                <div className="flex-grow">
                                    <span className="text-gray-600">Taxes (GST)</span>
                                </div>
                                <div className="pl-3">
                                    <span className="font-semibold text-gray-400 text-sm">LUX</span>
                                    <span className="font-semibold ml-1">${itemInfo.price * 0.01}</span>
                                </div>
                            </div>
                        </div>
                        <div className="mb-6 pb-6 border-b border-gray-200 md:border-none text-gray-800 text-xl">
                            <div className="w-full flex items-center">
                                <div className="flex-grow">
                                    <span className="text-gray-600">Total</span>
                                </div>
                                <div className="pl-3">
                                    <span className="font-semibold text-gray-400 text-sm">LUX</span> <span className="font-semibold">${itemInfo.price}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-3 md:w-5/12">
                        <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-3 text-gray-800 font-light mb-6">
                            <div className="w-full flex mb-3 items-center">
                                <div className="w-32">
                                    <span className="text-gray-600 font-semibold">Contact</span>
                                </div>
                                <div className="flex-grow pl-3">
                                    <span>Scott Windon</span>
                                </div>
                            </div>
                            <div className="w-full flex items-center">
                                <div className="w-32">
                                    <span className="text-gray-600 font-semibold">Billing Address</span>
                                </div>
                                <div className="flex-grow pl-3">
                                    <span>123 George Street, Sydney, NSW 2000 Australia</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6">
                            <div className="w-full p-3 border-b border-gray-200">
                                <div className="mb-5">
                                    <label htmlFor="type1" className="flex items-center">
                                        <input type="radio" className="form-radio h-5 w-5 text-black" name="type" id="type1" checked='' disabled="disabled" />
                                        <img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" className="h-6 ml-3" alt='' />
                                        <p className='text-red-500 text-sm ml-2'>*카드/PayPal 결제는 추후 지원 예정입니다.</p>
                                    </label>
                                </div>
                                <div>
                                    <div className="mb-3">
                                        <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Name on card</label>
                                        <div>
                                            <input className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-black transition-colors" placeholder="Your Name" type="text" disabled="disabled" />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Card number</label>
                                        <div>
                                            <input className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-black transition-colors" placeholder="0000 0000 0000 0000" type="text" disabled="disabled" />
                                        </div>
                                    </div>
                                    <div className="mb-3 -mx-2 flex items-end">
                                        <div className="px-2 w-1/4">
                                            <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Expiration date</label>
                                            <div>
                                                <select className="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-black transition-colors cursor-pointer" >
                                                    <option value="01">01 - January</option>
                                                    <option value="02">02 - February</option>
                                                    <option value="03">03 - March</option>
                                                    <option value="04">04 - April</option>
                                                    <option value="05">05 - May</option>
                                                    <option value="06">06 - June</option>
                                                    <option value="07">07 - July</option>
                                                    <option value="08">08 - August</option>
                                                    <option value="09">09 - September</option>
                                                    <option value="10">10 - October</option>
                                                    <option value="11">11 - November</option>
                                                    <option value="12">12 - December</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="px-2 w-1/4">
                                            <select className="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-black transition-colors cursor-pointer">
                                                <option value="2020">2020</option>
                                                <option value="2021">2021</option>
                                                <option value="2022">2022</option>
                                                <option value="2023">2023</option>
                                                <option value="2024">2024</option>
                                                <option value="2025">2025</option>
                                                <option value="2026">2026</option>
                                                <option value="2027">2027</option>
                                                <option value="2028">2028</option>
                                                <option value="2029">2029</option>
                                            </select>
                                        </div>
                                        <div className="px-2 w-1/4">
                                            <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Security code</label>
                                            <div>
                                                <input className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-black transition-colors" placeholder="000" type="text" disabled="disabled" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full p-3">
                                <label htmlFor="type2" className="flex items-center">
                                    <input type="radio" className="form-radio h-5 w-5 text-black" name="type" id="type2" checked='' disabled="disabled" />
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" width="80" className="ml-3" alt='' />
                                </label>
                            </div>
                            <div className="w-full p-3 border-t border-gray-200">
                                <label htmlFor="type2" className="flex items-center ">
                                    <input type="radio" className="form-radio h-5 w-5 text-black" name="type" id="type2" checked='checked' readOnly />
                                    <p className='ml-3 font-semibold'>LUX Token </p>
                                    <p className='ml-1'>(토큰 보유량: {userInfo.tokenAmount})</p>
                                    <br></br>
                                    <p className='text-red-500 text-sm ml-3'> {alertMessage}</p>
                                </label>
                            </div>
                        </div>
                        <div>
                            <button className="block w-full max-w-xs mx-auto bg-black hover:bg-gray-700 focus:bg-black text-white rounded-lg px-3 py-2 font-semibold" onClick={directBuy}><i className="mdi mdi-lock-outline mr-1"></i> PAY NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment;