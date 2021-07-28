import React from 'react';
import s from '../MyPosts.module.css'

type MessagePropsType = {
    message: string
    likesCount: number
}



const Post = (props: MessagePropsType) => {
    return (
        <div className={s.item}>
            <div>
                <img src="https://million-wallpapers.ru/wallpapers/2/7/445164015493938/soldat.jpg" alt=""/>
            </div>
            <div>
                {props.message}
            </div>
            <div>
                Likes - {props.likesCount}
            </div>
        </div>
    )
}


export default Post;