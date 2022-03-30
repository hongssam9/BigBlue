import React from 'react';
import './Header.css'
import { TiShoppingCart } from 'react-icons/ti'


const Header = () => {
    return (
        <div className="header">
            <div className="header__title">
                <div className="header__title--line" id="title">ADD WEEKLY LESSON </div>
                <div className="header__title--line" id="header__cart">
                    <TiShoppingCart /> CART
                </div>
            </div>
            <div className="header__sdi">
                <div className="header__sdi--options">Swimmers</div>
                <div className="header__sdi--options">Days</div>
                <div className="header__sdi--options">Instructors</div>
            </div>
        </div>
    );
};

export default Header;