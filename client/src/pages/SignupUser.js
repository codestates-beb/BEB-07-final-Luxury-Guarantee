import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import apiUrl from '../utils/api';
import Loading from '../components/Loading';

//개인용 회원가입 페이지
const SignupUser = () => {
    const [loading, setLoading] = useState(false);
    const [Id, setId] = useState("");
    const [IdVaild, setIdValid] = useState("");
    const [Name, setName] = useState("");
    const [NameValid, setNameValid] = useState("");
    const [Password, setPassword] = useState("");
    const [PasswordValid, setPasswordValid] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [passwordConfirmMessage, setPasswordConfirmMessage] =
        useState("");

    const onCheckPassword = (event) => {
        //  6 ~ 18자 영문, 숫자 조합
        const currentPassword = event.currentTarget.value;
        setPassword(currentPassword);
        const regExp = /^(?=.*[0-9])(?=.*[a-zA-Z])[0-9a-zA-Z]{6,}$/;
        if (!regExp.test(currentPassword)) {
            setPasswordValid("숫자+영문자 6자리 이상 입력해주세요")
        } else {
            setPasswordValid("안전한 비밀번호입니다.")
        }
    }

    const onCheckPasswordConfirm = (e) => {
        const currentPasswordConfirm = e.target.value;
        setPasswordConfirm(currentPasswordConfirm);
        if (Password !== currentPasswordConfirm) {
            setPasswordConfirmMessage("비밀번호가 일치하지 않습니다.");
        } else {
            setPasswordConfirmMessage("");
        }
    };

    const onCheckId = (event) => {
        const currentId = event.currentTarget.value;
        setId(currentId);

        if (currentId.length < 4) {
            setIdValid("ID 는 4글자 이상 입력해주세요")
        } else {
            setIdValid("")
        }
    }

    const onCheckName = (event) => {
        const currentName = event.currentTarget.value;
        setName(currentName)
        if (currentName.length < 3) {
            setNameValid("3자리 이상 입력해주세요.")
        } else {
            setNameValid("")
        }
    }

    const onSubmitHandler = () => {
        const passwordRegEx = /^(?=.*[0-9])(?=.*[a-zA-Z])[0-9a-zA-Z]{6,}$/;
        if (!passwordRegEx.test(Password)) {
            alert("숫자+영문자 6자리 이상 입력해주세요");
            return;
        }
        else if (Password !== passwordConfirm) {
            alert("비밀번호가 일치하지 않습니다.")
        }
        else {
            setLoading(true);
            axios.post(`${apiUrl}/newuser`, {
                userId: Id,
                nickname: Name,
                password: Password

            })
                .then(res => {
                    if (res.data === "same id exist") {
                        setIdValid("사용중인 아이디입니다.")
                        setLoading(false);
                    }
                    else if (res.data === "same nickname exist") {
                        setNameValid("사용중인 닉네임입니다.")
                        setLoading(false);
                    }
                    else {
                        const signData = res.data.message;
                        signData['isSigned'] = true;
                        sessionStorage.setItem('signData', JSON.stringify(signData));
                        document.location.href = '/'
                    }
                })
        }
    }


    return (
        <div className='flex justify-center mb-10 mt-10'>

            <div className="flex flex-col max-w-md px-4 py-8 bg-white rounded-lg shadow sm:px-6 md:px-8 lg:px-10 border-2">
                <div className="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl ">
                    Create a new account
                </div>
                <span className="justify-center text-sm text-center text-gray-500 flex-items-center ">
                    Already have an account ?
                    <Link to="/login" className="text-sm ml-1 text-blue-500 underline hover:text-blue-700">
                        Sign in
                    </Link>
                </span>
                <div className="p-6 mt-2">
                    <div className="flex flex-col mb-3">
                        <div className=" relative">
                            <input type="text" value={Name} onChange={onCheckName} id="create-account-username" className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" name="username" placeholder="NickName" />
                            <p className='text-xs mt-2'>{NameValid}</p>
                        </div>

                    </div>
                    <div className="flex flex-col mb-3">
                        <div className=" relative ">
                            <input value={Id} onChange={onCheckId} id="create-account-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" placeholder="Id" />
                            <p className='text-xs mt-2'>{IdVaild}</p>
                        </div>

                    </div>
                    <div className="flex flex-col mb-3">
                        <div className=" relative ">
                            <input type="password" value={Password} onChange={onCheckPassword} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" placeholder="PassWord" />
                            <p className='text-xs mt-2'>{PasswordValid}</p>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className=" relative ">
                            <input type="password" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" placeholder="ConfirmPassWord" value={passwordConfirm} onChange={onCheckPasswordConfirm} />
                            <p className='text-xs mt-2'>{passwordConfirmMessage}</p>
                        </div>
                    </div>
                    <div className="flex w-full mt-4">
                        {loading ? <Loading /> : <button onClick={onSubmitHandler} className="py-2 px-4  bg-black hover:bg-black focus:ring-black focus:ring-offset-black text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Submit
                        </button>}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SignupUser;
