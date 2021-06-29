import React from 'react';
import LogoImage from 'assets/img/dist/svg/logo.svg'

const Logo = (props) => {
    return (
        <div>
            <img width="135" height="20" src={LogoImage} alt="logotype" />
        </div >
    );
}

export default Logo;