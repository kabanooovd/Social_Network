import React, {ReactNode} from "react";
import s from './FormsControls.module.css'

const FormControl = ({meta, children} : {input: any, meta: any, children: React.ReactNode}) => {
    const showError = meta.touched && meta.error

    return(
        <div className={s.formControl + ' ' + (showError ? s.error : '')}>
            <div>
                {children}
            </div>
            { showError && <span>{meta.error}</span> }
        </div>
    )
}


export const TextArea = (props: any) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}


export const Input = (props: any) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}

