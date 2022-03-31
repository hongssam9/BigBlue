import React from 'react';
import './Header.css'
import { TiShoppingCart } from 'react-icons/ti'


const Header = () => {
    return (
        <div className="header">
            <div className="header__title">
                <div className="header__title--line" id="title">ADD WEEKLY LESSON </div>
                <a href="/Cart"><div className="header__title--line" id="header__cart">
                    <TiShoppingCart /> CART
                </div>
                </a>
            </div>
            <div className="header__sdi">
                <a href="/Swimmers"><div className="header__sdi--options">Swimmers</div></a>
                <a href ="/"><div className="header__sdi--options">Days</div></a>
                <a href ="/Instructors"><div className="header__sdi--options">Instructors</div></a>
            </div>
        </div>
    );
};

export default Header;