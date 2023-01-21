import React from 'react';
import { Link } from 'react-router-dom';
//개인용 회원가입 페이지
const SignupUser = () => {

    return (
        <div className='flex justify-center mb-10 mt-10'>

        <div class="flex flex-col max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
            <div class="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
                Create a new account
            </div>
            <span class="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
                Already have an account ?
                <Link to="/login" className="text-sm ml-1 text-blue-500 underline hover:text-blue-700">
                    Sign in
                    </Link>
            </span>
            <div class="p-6 mt-2">
                <form action="#">
                    <div class="flex flex-col mb-2">
                        <div class=" relative ">
                            <input type="text" id="create-account-username" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="username" placeholder="NickName"/>
                            </div>
                            
                        </div>
                        <div class="flex gap-4 mb-2">
                            <div class=" relative ">
                                <input type="email" id="create-account-email" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Email"/>
                                </div>
                               
                                </div>
                                <div class="flex flex-col mb-2">
                                    <div class=" relative ">
                                        <input type="password" id="create-account-password" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="PassWord"/>
                                        </div>
                                    </div>
                                    <div class="flex w-full my-4">
                                        <button type="submit" class="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                            Login
                                        </button>
                                    </div>
                                </form>
                                
                            </div>
                        </div>
                    </div>
    )
}

export default SignupUser;