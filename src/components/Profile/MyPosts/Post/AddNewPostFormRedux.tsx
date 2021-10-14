import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthVC, required} from "../../../../utils/validators/validators";
import {TextArea} from "../../../common/ControlForms/FormsControls";

const maxLength10 = maxLengthVC(10)

export type PostsDataT = {
    newPostText: string
}

function AddNewPostForm(props: InjectedFormProps<PostsDataT>) {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={TextArea}
                   name='newPostText'
                   placeholder={'Enter Text...'}
                   validate={[required, maxLength10]}
            />

            <div>
                <button>Add Post</button>
            </div>
        </form>
    )
}

export const AddNewPostFormRedux = reduxForm<PostsDataT>({form: 'ProfileAddNewPostForm'})(AddNewPostForm)
