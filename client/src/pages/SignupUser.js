import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { status } from '../app/store';
import axios from 'axios';
import apiUrl from '../utils/api';
//개인용 회원가입 페이지
const SignupUser = () => {

    const [Email, setEmail] = useState("");
    const [Name, setName] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
    const [Signup, setSignup] = useRecoilState(status)

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    }
    const onNameHandler = (event) => {
        setName(event.currentTarget.value);
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }
    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value);
    }
    const onSubmitHandler = () => {
        if(Password !== ConfirmPassword){
            return alert("비밀번호가 다릅니다.")
        }

        axios.post(`${apiUrl}/newuser`,{
            userId: Email,
            nickname: Name,
            password: Password
            
        })
            .then(res => {
                console.log(res.data)
                const signData = {
                    userId: res.data.message.userId,
                    address: res.data.message.address,
                    nickname: res.data.message.nickname,
                    isCompany: res.data.message.isCompany,
                    isSigned: true
                }
                setSignup(() => signData)
               sessionStorage.setItem('signData', JSON.stringify(signData))
                document.location.href = '/'
            })
    }


    return (
        <div className='flex justify-center mb-10 mt-10'>

            <div className="flex flex-col max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
                <div className="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
                    Create a new account
                </div>
                <span className="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
                    Already have an account ?
                    <Link to="/login" className="text-sm ml-1 text-blue-500 underline hover:text-blue-700">
                        Sign in
                    </Link>
                </span>
                <div className="p-6 mt-2">
                        <div className="flex flex-col mb-2">
                            <div className=" relative ">
                                <input type="text" value={Name} onChange={onNameHandler} id="create-account-username" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" name="username" placeholder="NickName" />
                            </div>

                        </div>
                        <div className="flex gap-4 mb-2">
                            <div className=" relative ">
                                <input type="email" value={Email} onChange={onEmailHandler} id="create-account-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" placeholder="Email" />
                            </div>

                        </div>
                        <div className="flex flex-col mb-2">
                            <div className=" relative ">
                                <input type="password" value={Password} onChange={onPasswordHandler} id="create-account-password" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" placeholder="PassWord" />
                            </div>
                        </div>
                        <div className="flex flex-col mb-2">
                            <div className=" relative ">
                                <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} id="create-account-password" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" placeholder="ConfirmPassWord" />
                            </div>
                        </div>
                        <div className="flex w-full my-4">
                            <button onClick={onSubmitHandler} className="py-2 px-4  bg-black hover:bg-black focus:ring-black focus:ring-offset-black text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                submit
                            </button>
                        </div>

                </div>
            </div>
        </div>
    )
}

export default SignupUser;