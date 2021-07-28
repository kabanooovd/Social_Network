import React, {ChangeEvent, LegacyRef, RefObject} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {
    AddPostActionType,
    PostsType,
    UpdateTestActionType
} from "../../../redux/store";
import {addPostActionCreator, UpdateNewPostTextActionCreator} from "../../../redux/profileReducer";

type ProfilePageType = {
    newPostText: string
    posts: Array<PostsType>
    //addPost: (postMessage: string) => void
    //updateNewPostText: (text: string) => void
    dispatch: (action: AddPostActionType | UpdateTestActionType) => void
}

const MyPosts = (props: ProfilePageType) => {
    const postsElements = props.posts.map(arrElement => <Post message={arrElement.message}
                                                              likesCount={arrElement.likesCount}/>)

    const enterPressed = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            addPost()
        }
    }

    let newPostElement = React.createRef<HTMLTextAreaElement>();
    let addPost = () => {
        if (newPostElement.current !== null) {
            let text = newPostElement.current.value
            let action: AddPostActionType = addPostActionCreator(text)
            props.dispatch(action)
            let UpdateTextArea: UpdateTestActionType = UpdateNewPostTextActionCreator('')
            props.dispatch(UpdateTextArea)
        }
    }

    let onPostChange = () => {
        if (newPostElement.current?.value !== undefined) {
            let text = newPostElement.current?.value
            let action: UpdateTestActionType = UpdateNewPostTextActionCreator(text)
            props.dispatch(action)
        }
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
                <button onClick={addPost}>Add Post</button>
            </div>
            <div className={s.posts}>{postsElements}</div>
        </div>
    )
}


export default MyPosts;