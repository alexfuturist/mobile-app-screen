import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.scss';

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={`wrapper ${s.wrapper}`}>
                <img className={s.header__img} src="https://i.pinimg.com/originals/b5/d2/f4/b5d2f4b06c0390c4dadb66da03ade490.png" />

                <div className={s.login}>
                    {props.isAuth
                        ?
                        <div>
                            <p className={s.loginName}>
                                {props.login}
                            </p>
                            <button className={s.logoutButton} onClick={props.logout}>
                                Вийти
                            </button>
                        </div>
                        :
                        <NavLink className={s.loginLink} to={'/login'}>
                            Авторизуватись
                        </NavLink>
                    }
                </div>
            </div>
        </header >
    );
}

export default Header;