import React, { useEffect, useState } from 'react';
import isSigned from '../app/isSigned'
import apiUrl from "../utils/api";
import axios from 'axios';
import { Link } from 'react-router-dom';
//좋아요 Like
const Like = () => {
	const [likeList, setlikeList] = useState("");

	useEffect(() => {
		const userData = isSigned();
		const userId = userData.id;
		if (!userData.isSigned) {
			alert('로그인이 필요합니다.');
			document.location.href = '/login';
		}

		axios.get(`${apiUrl}/likelist/${userId}`)
			.then(res => {
				setlikeList(res.data);
			})
	}, []);
    let lists = likeList.likes;
    return (
        <div>
            {
                lists && lists.map((item) => {
                    return(
                        <div>
                            <p><img alt='like' key={item.id} src={item.image_url}></img></p>
                            <p>{item.price}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Like;