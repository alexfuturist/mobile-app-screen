import React from 'react';

import s from './FormButton.module.scss';

const FormButton = (props) => {
    return (
        <button className={s.button} type="submit" onClick={props.onClick}>{props.text}</button>
    )
}

export default FormButton;