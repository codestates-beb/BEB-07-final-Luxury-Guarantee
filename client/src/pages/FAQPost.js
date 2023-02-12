import { useEffect, useState } from "react";
import apiUrl from "../utils/api";
import axios from "axios";


const FAQPost = () => {

    const [faqTitle, setFaqTitle] = useState("");
    const [faqContent, setFaqContent] = useState("");
  
    const onFaqTitleHandler = (e) => {
      setFaqTitle(e.target.value)
    }
    const onFaqContentHandler = (e) => {
      setFaqContent(e.target.value)
    }
  
    // const onSubmitHandler = () => {
    //     if (faqTitle === '') {
    //       alert('제목을 입력해주세요'); return;
    //     }
      
    //     if (faqContent === '') {
    //       alert('내용을 입력해주세요'); return;
    //     }
      
    //     axios.post(`${apiUrl}/faqpost`, {
    //       userId: userId,
    //       title: faqTitle,
    //       content: faqContent
    //     })
    //       .then(() => {
    //         document.location.href = '/faq';
    //       })
    //       .catch((error) => {
    //         console.error(error);
    //       });
    //   }
    
      
    return (
        <div>
             <div className=" relative ">
    <label htmlfor="name-with-label" className="text-white">
        Title
    </label>
    <input onClick={onFaqTitleHandler}  type="text" id="name-with-label" className="mb-8 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="title" placeholder="title"/>
    </div>
        <label className="text-gray-700" htmlfor="name">
    <textarea onClick={onFaqContentHandler} className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" id="content" placeholder="Enter your content" name="content" rows="5" cols="40">
    </textarea>
</label>

        <p className="text-3xl font-medium text-gray-600 dark:text-white mt-8 md:mt-10"></p>
        <div className="flex items-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8 mt-8 md:mt-16">
          <button className=" rounded-lg w-full md:w-3/5 border border-gray-800 text-base font-medium leading-none uppercase py-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 text-white dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200">리뷰 작성하기</button>
        </div>

        </div>
    )
}

export default FAQPost;