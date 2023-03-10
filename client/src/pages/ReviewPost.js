import React, { useState, useEffect } from 'react';
import axios from 'axios';
import apiUrl from '../utils/api';
import isSigned from '../app/isSigned'
import { useParams } from 'react-router-dom';

//리뷰작성 페이지

const ReviewPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [itemInfo, setItemInfo] = useState('');
  const params = useParams();

  useEffect(() => {
    const id = params.id;
    const getData = async () => {
      try {
        const res = await axios.get(`${apiUrl}/luxurydetail/${id}`)
        if (res.data.length === 0 || res.data.userId !== isSigned().id || res.data.isReview === true) {
          alert('잘못된 접근입니다.');
          document.location.href = '/';
        }
        else {
          setItemInfo(res.data)
        }

      } catch (e) {
        console.log(e)
      }
    }
    getData();
  }, [params]);

  const userId = isSigned().id;

  const onTitleHandler = (e) => {
    setTitle(e.target.value)
  }
  const onContentHandler = (e) => {
    setContent(e.target.value)
  }

  const onSubmitHandler = () => {
    axios.post(`${apiUrl}/wpost`, {
      userId: userId,
      title: title,
      itemId: itemInfo.id,
      content: content,
      category: 'review',
      image_url: itemInfo.image_url,
      itemName: itemInfo.name
    })
      .then(() => {
        if (title === '') {
          alert('제목을 입력해주세요'); return;
        }

        if (content === '') {
          alert('내용을 입력해주세요'); return;
        }
        document.location.href = '/review'
      })
  }
  return (
    <div className="2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4">

      <div id="viewerBox" className="lg:p-10 md:p-6 p-4 bg-white rounded-md border-2">
        <div className="flex justify-end">
          <button aria-label="Close" className="focus:outline-none focus:ring-2 focus:ring-gray-800">
            <svg className="" width="32" height="32" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.8799 15.9996L23.6133 10.2796C23.8643 10.0285 24.0054 9.688 24.0054 9.33293C24.0054 8.97786 23.8643 8.63733 23.6133 8.38626C23.3622 8.13519 23.0217 7.99414 22.6666 7.99414C22.3115 7.99414 21.971 8.13519 21.7199 8.38626L15.9999 14.1196L10.2799 8.38626C10.0288 8.13519 9.68832 7.99414 9.33325 7.99414C8.97818 7.99414 8.63766 8.13519 8.38659 8.38626C8.13551 8.63733 7.99446 8.97786 7.99446 9.33293C7.99446 9.688 8.13551 10.0285 8.38659 10.2796L14.1199 15.9996L8.38659 21.7196C8.26161 21.8435 8.16242 21.991 8.09473 22.1535C8.02704 22.316 7.99219 22.4902 7.99219 22.6663C7.99219 22.8423 8.02704 23.0166 8.09473 23.179C8.16242 23.3415 8.26161 23.489 8.38659 23.6129C8.51054 23.7379 8.658 23.8371 8.82048 23.9048C8.98296 23.9725 9.15724 24.0073 9.33325 24.0073C9.50927 24.0073 9.68354 23.9725 9.84602 23.9048C10.0085 23.8371 10.156 23.7379 10.2799 23.6129L15.9999 17.8796L21.7199 23.6129C21.8439 23.7379 21.9913 23.8371 22.1538 23.9048C22.3163 23.9725 22.4906 24.0073 22.6666 24.0073C22.8426 24.0073 23.0169 23.9725 23.1794 23.9048C23.3418 23.8371 23.4893 23.7379 23.6133 23.6129C23.7382 23.489 23.8374 23.3415 23.9051 23.179C23.9728 23.0166 24.0077 22.8423 24.0077 22.6663C24.0077 22.4902 23.9728 22.316 23.9051 22.1535C23.8374 21.991 23.7382 21.8435 23.6133 21.7196L17.8799 15.9996Z" fill="#1F2937" />
            </svg>
          </button>
        </div>
        <div className="mt-3 md:mt-4 lg:mt-0 flex flex-col lg:flex-row items-strech justify-center lg:space-x-8">
          <div className="lg:w-1/2 flex justify-between items-strech bg-gray-50  px-2 py-20 md:py-6 md:px-6 lg:py-24">

            <div className="slider">
              <div className="slide-ana lg:relative">
                <div className="w-1/3 mr-10">
                  <img src={itemInfo.image_url} alt="A black chair with wooden legs" className="w-full h-full" />
                </div>
              </div>
            </div>

          </div>
          <div className="lg:w-1/2 flex flex-col justify-center mt-7 md:mt-8 lg:mt-0 pb-8 lg:pb-0">
            <div className="mb-10">
              <p className="">{itemInfo.name}</p>

            </div>
            <div className=" relative ">
              <label htmlFor="name-with-label" className="">
                Title
              </label>
              <input onChange={onTitleHandler} value={title} type="text" id="name-with-label" className="mb-8 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="title" placeholder="title" />
            </div>
            <label className="text-gray-700" htmlFor="name">
              <textarea onChange={onContentHandler} value={content} className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" id="content" placeholder="Enter your content" name="content" rows="5" cols="40">
              </textarea>
            </label>

            <p className="text-3xl font-medium text-gray-600  mt-8 md:mt-10"></p>
            <div className="flex items-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8 mt-8 md:mt-16">
              <button onClick={onSubmitHandler} className=" rounded-lg w-full md:w-3/5 border border-gray-800 text-base font-medium leading-none uppercase py-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 text-white">리뷰 작성하기</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewPost;