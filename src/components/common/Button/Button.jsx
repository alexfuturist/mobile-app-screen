import React from 'react';

import s from './Button.module.scss';

const Button = (props) => {
    return (
        <a className={s.button} href={props.href} onClick={props.onClick}>{props.text}</a>
    )
}

export default Button;