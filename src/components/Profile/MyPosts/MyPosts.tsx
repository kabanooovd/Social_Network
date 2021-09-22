import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {ProfilePageType} from "./MyPostsContainer";
import {AddNewPostFormRedux, PostsDataT} from "./Post/AddNewPostFormRedux";

const MyPosts = (props: ProfilePageType) => {

    const postsElements = props.posts.map(arrElement => <Post message={arrElement.message}
                                                              likesCount={arrElement.likesCount}
    />)

    let onAddPost = (values: PostsDataT) => props.addPost(values.newPostText)

    return (
        <div>
            <div>
                <span>
                    <h3>My posts</h3>
                </span>
                <AddNewPostFormRedux onSubmit={onAddPost}/>
            </div>
            <div className={s.posts}>{postsElements}</div>
        </div>
    )
}
export default MyPosts;


