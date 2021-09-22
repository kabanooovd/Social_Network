import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type PostsDataT = {
    newPostText: string
}

function AddNewPostForm(props: InjectedFormProps<PostsDataT>) {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={'textarea'} name='newPostText' placeholder={'Enter Text...'}/>

            <div>
                <button>Add Post</button>
            </div>
        </form>
    )
}

export const AddNewPostFormRedux = reduxForm<PostsDataT>({form: 'ProfileAddNewPostForm'})(AddNewPostForm)
