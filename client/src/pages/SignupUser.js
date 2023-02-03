import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import apiUrl from '../utils/api';
//개인용 회원가입 페이지
const SignupUser = () => {

    const [Id, setId] = useState("");
    const [IdVaild, setIdValid] = useState("");
    const [isId, setIsId] = useState(false);

    const [Name, setName] = useState("");
    const [NameValid, setNameValid] = useState("");
    const [isName, setIsName] = useState(false);

    const [Password, setPassword] = useState("");
    const [PasswordValid, setPasswordValid] = useState("");
    const [isPassword, setIsPassword] = useState(false)

    const [AlertMessage, setAlertMessage] = useState("")

    const onCheckPassword = (event) => {
        //  6 ~ 18자 영문, 숫자 조합
        const currentPassword = event.currentTarget.value;
        setPassword(currentPassword);

        const regExp = /^[a-zA-z0-9]{6,18}$/
        
        if(!regExp.test(currentPassword)) {
            setPasswordValid("숫자+영문자 6자리 이상 입력해주세요")
            setIsPassword(false)
        } else {
            setPasswordValid("안전한 비밀번호입니다.")
            setIsPassword(true)
        }
    }

    const onCheckId = (event) => {
        const currentId = event.currentTarget.value;
        setId(currentId);

        if(currentId.length < 4) {
            setIdValid("이메일 형식에 맞게 작성해주세요")
            setIsId(false);
        } else {
            setIdValid("")
            setIsId(true);
        }
    }

    const onCheckName = (event) => {
        const currentName = event.currentTarget.value;
        setName(currentName)
        if(currentName.length < 3) {
            setNameValid("3자리 이상 입력해주세요.")
            setIsName(false);
        }else {
            setNameValid("")
            setIsName(true);
        }
    }

    const onSubmitHandler = () => {
        axios.post(`${apiUrl}/newuser`,{
            userId: Id,
            nickname: Name,
            password: Password
            
        })
            .then(res => {
                if(res.data.message === "same id exist"){
                    setAlertMessage("아이디가 중복됩니다.")
                } 
                else if(res.data.message === "same nickname exist"){
                    setAlertMessage("닉네임이 중복됩니다.")
                }
                else {
                
                console.log(res.data)
                const signData = {
                    userId: res.data.message.userId,
                    address: res.data.message.address,
                    nickname: res.data.message.nickname,
                    isCompany: res.data.message.isCompany,
                    isSigned: true
                }
                sessionStorage.setItem('signData', JSON.stringify(signData))
                document.location.href = '/'
    }})
        
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
                        <div className="flex flex-col mb-3">
                            <div className=" relative">
                                <input type="text" value={Name} onChange={onCheckName} id="create-account-username" className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" name="username" placeholder="NickName" />
                                <p className='text-white text-base mt-2'>{NameValid}</p>
                            </div>

                        </div>
                        <div className="flex flex-col mb-3">
                            <div className=" relative ">
                                <input type="email" value={Id} onChange={onCheckId} id="create-account-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" placeholder="Id" />
                                <p className='text-white text-base mt-2'>{IdVaild}</p>
                            </div>

                        </div>
                        <div className="flex flex-col mb-3">
                            <div className=" relative ">
                                <input type="password" value={Password} onChange={onCheckPassword} id="create-account-password" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" placeholder="PassWord" />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className=" relative ">
                                <input type="password" id="create-account-password" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" placeholder="ConfirmPassWord" />
                                <p className='text-white text-xs mt-2'>{PasswordValid}</p>
                            </div>
                        </div>
                        <div className="flex w-full mt-4">
                            <button onClick={onSubmitHandler} className="py-2 px-4  bg-black hover:bg-black focus:ring-black focus:ring-offset-black text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                Login
                            </button>
                        </div>

                </div>
            </div>
        </div>
    )
}

export default SignupUser;
