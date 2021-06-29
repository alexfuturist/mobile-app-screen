import React from 'react';

import s from './Preloader.module.scss';

const Preloader = (props) => {
    return (
        <div className={s.preloader}>
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div>
    )
}

export default Preloader;