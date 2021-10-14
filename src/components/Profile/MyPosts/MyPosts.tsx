import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {ProfilePageType} from "./MyPostsContainer";

const MyPosts = (props: ProfilePageType) => {

    const postsElements = props.posts.map(arrElement => <Post message={arrElement.message}
                                                              likesCount={arrElement.likesCount}
    />)

    let onAddPost = () => {
        props.addPost(props.newPostText)
    }

    const updateTextHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        props.updatePostTextValues(e.currentTarget.value)
    }

    return (
        <div>
            <div>
                <span>
                    <h3>My posts</h3>
                </span>
                <textarea onChange={updateTextHandler} value={props.newPostText} />
                <div>
                    <button onClick={onAddPost}>Post</button>
                </div>
            </div>
            <div className={s.posts}>{postsElements}</div>
        </div>
    )
}
export default MyPosts;


