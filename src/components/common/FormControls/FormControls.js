import React from "react";
import s from "./FormControls.module.scss";

export const Element = (Element) => ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={s.formControl + " " + (hasError ? s.error : " ")}>
            <div>
               <Element {...input} {...props}/>
            </div>
            {hasError && <span> {meta.error} </span>}
        </div>
    )
}