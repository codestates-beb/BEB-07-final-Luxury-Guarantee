import React from 'react';
import { Link } from 'react-router-dom';
//회원가입 페이지 (기업용 개인용 선택칸 만들기)
const SignupMain = () => {

    return (
        <div className='h-[200px] flex items-center gap-8 justify-center'>
            <div className='inline-flex items-center'>
            <Link to="/signupcompany">
            <button type="button" class="py-4 px-6   text-black w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full">
                Corporate Member
            </button>
            </Link>
            </div>
            <div className='inline-flex items-center'>
            <Link to="/signupuser">
            <button type="button" class="py-4 px-6  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-black w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full">
                General Member
            </button>
            </Link>
            </div>
        </div>
    );
};

export default SignupMain;