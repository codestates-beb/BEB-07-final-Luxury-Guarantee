import { useEffect, useState } from "react";
import apiUrl from "../utils/api";
import axios from "axios";
import { useParams } from "react-router-dom";
import isSigned from "../app/isSigned";


const ReviewDetail = () => {
    const [review, setReview] = useState([]);
    const params = useParams();
    const userId = isSigned().nickname;

    useEffect(() => {
        const id = params.id;
        const getReviewDetail = async () => {
            try {
                const res = await axios.get(`${apiUrl}/postdetail/${id}`)
                setReview(res.data);
            }
            catch (e) {
                console.log(e)
            }
        }
        getReviewDetail();
    }, [params]);

    return (
        <div className="2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4">
            <div id="viewerBox" className="lg:p-10 md:p-6 p-4 bg-white dark:bg-gray-900">
                <div className="mt-3 md:mt-4 lg:mt-0 flex flex-col lg:flex-row items-strech justify-center lg:space-x-8">
                    <div className="lg:w-1/2 flex justify-between items-strech bg-gray-50  px-2 py-20 md:py-6 md:px-6 lg:py-24">
                        <div className="flex">
                            <img alt='' src={review.image_url} className="w-full h-full" />
                        </div>
                    </div>
                    <div className="lg:w-1/2 h-1/2 flex flex-col justify-center mt-7 md:mt-8 lg:mt-0 pb-8 lg:pb-0">
                        <div>
                            <p className="text-base leading-normal text-gray-600 dark:text-white mt-2">{/**상품명 */}상품명</p>
                            <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white">{review.title}</h1>
                            <p className="text-base leading-normal text-gray-600 dark:text-white mt-2">{review.content}</p>
                        </div>
                        <div className="flex items-center">
                            <div className="flex flex-col justify-between text-sm">
                                <p className="text-gray-800 dark:text-white">
                                    {userId}
                                </p>
                                <p className="text-gray-400 dark:text-gray-300">
                                    {review.createdAt}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewDetail;