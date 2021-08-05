import React, {ChangeEvent, LegacyRef, RefObject} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostsType} from "../../../redux/store";

type ProfilePageType = {
    newPostText: string
    posts: Array<PostsType>
    addPost: (text: string) => void
    updateNewPostText: (text: string) => void
}

const MyPosts = (props: ProfilePageType) => {

    const postsElements = props.posts.map(arrElement => <Post message={arrElement.message}
                                                              likesCount={arrElement.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let onAddPost = () => {
        if (newPostElement.current !== null) {
            let text = newPostElement.current.value
            props.addPost(text)
        }
    }

    let onPostChange = () => {
        if (newPostElement.current?.value !== undefined) {
            let text = newPostElement.current.value
            props.updateNewPostText(text)
        }
    }

    const enterPressed = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') onAddPost()
    }

    return (
        <div>
            <div>
                <span><h3>My posts</h3></span>
                <div>
                    <textarea
                        placeholder="Enter text..."
                        ref={newPostElement}
                        value={props.newPostText}
                        onChange={onPostChange}
                        onKeyPress={enterPressed}
                    />
                </div>
                <button onClick={onAddPost}>Add Post</button>
            </div>
            <div className={s.posts}>{postsElements}</div>
        </div>
    )
}


export default MyPosts;