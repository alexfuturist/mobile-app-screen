import React, { useEffect, useState } from 'react';
import s from './header-menu.module.scss';
import cn from 'classnames';
import Logo from './logo/logo';

const HeaderMenu = () => {

    const [menuActive, setMenuActive] = useState(false);

    useEffect(() => {
        if (menuActive === true) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "visible";
        }
    }, [menuActive]);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    }

    const closeMenu = () => {
        setMenuActive(false);
    }

    //Event Delegation
    const closeMenuAfterLink = (event) => {
        if (event.target.tagName.toLowerCase() === 'a') {
            setMenuActive(false);
        }
    }

    return (
        <div className={cn(s.menu, menuActive && s.menu_active)}>
            <div className="container">
                <div className={s.wrapper}>
                    <Logo />
                    <div className={s.burger} onClick={toggleMenu}>
                        <span></span>
                    </div>
                    <nav className={s.nav}>
                        <div className={s.nav_mobile} onClick={closeMenuAfterLink}>
                            <div className={s.nav_logo}>
                                <Logo />
                            </div>
                            <ul className={s.nav_list}>
                                <li className={s.nav_item}>
                                    <a href='#registration'>About me</a>
                                </li>
                                <li className={s.nav_item}>
                                    <a href="#registration">Relationships</a>
                                </li>
                                <li className={s.nav_item}>
                                    <a href="#registration">Users</a>
                                </li>
                                <li className={s.nav_item}>
                                    <a href="#registration">Sign Up</a>
                                </li>
                                <li className={s.nav_item}>
                                    <a href="#registration">Terms and Conditions</a>
                                </li>
                            </ul>
                            <ul className={s.nav_list}>
                                <li className={s.nav_item}>
                                    <a href="#registration">How it works</a>
                                </li>
                                <li className={s.nav_item}>
                                    <a href="#registration">Partnership</a>
                                </li>
                                <li className={s.nav_item}>
                                    <a href="#registration">Help</a>
                                </li>
                                <li className={s.nav_item}>
                                    <a href="#registration">Leave testimonial</a>
                                </li>
                                <li className={s.nav_item}>
                                    <a href="#registration">Contact us</a>
                                </li>
                            </ul>
                            <ul className={s.nav_list}>
                                <li className={s.nav_item}>
                                    <a href="#registration">Articles</a>
                                </li>
                                <li className={s.nav_item}>
                                    <a href="#registration">Our news</a>
                                </li>
                                <li className={s.nav_item}>
                                    <a href="#registration">Testimonials</a>
                                </li>
                                <li className={s.nav_item}>
                                    <a href="#registration">Licenses</a>
                                </li>
                                <li className={s.nav_item}>
                                    <a href="#registration">Privacy Policy</a>
                                </li>
                            </ul>
                        </div>
                        <div className={s.nav_desktop}>
                            <ul className={s.nav_list}>
                                <li className={s.nav_item}>
                                    <a href="#registration">About me</a>
                                </li>
                                <li className={s.nav_item}>
                                    <a href="#registration">Relationships</a>
                                </li>
                                <li className={s.nav_item}>
                                    <a href="#registration">Requirements</a>
                                </li>
                                <li className={s.nav_item}>
                                    <a href="#registration">Users</a>
                                </li>
                                <li className={s.nav_item}>
                                    <a href="#registration">Sign Up</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className={s.overlay} onClick={closeMenu}></div>
                </div>

            </div>
        </div>
    );
}

export default HeaderMenu;