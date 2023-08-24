import React from 'react';
import './navbar.css'

const NavbarJS = () => {
    return (
        <>
            <nav
                className="custom-navbar navbar navbar-expand-md navbar-dark bg-dark"
                aria-label="Furni navigation bar"
            >
                <div className="container">
                    <a className="navbar-brand" href="index.html">
                        Furni<span>.</span>
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarsFurni"
                        aria-controls="navbarsFurni"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarsFurni">
                        <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="index.html">
                                    Şekil
                                </a>
                                <div className="navbar-submenu">
                                    <ul className="submenu-items">
                                        <li><a href="#">Şekil 1</a></li>
                                        <li><a href="#">Şekil 2</a></li>
                                        <li><a href="#">Şekil 3</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a className="nav-link" href="shop.html">
                                    Renk
                                </a>
                            </li>
                            <li>
                                <a className="nav-link" href="about.html">
                                    Modern Halı Tarzları
                                </a>
                            </li>
                            <li>
                                <a className="nav-link" href="services.html">
                                    Premium Özel Desen Kilimler
                                </a>
                            </li>
                            <li>
                                <a className="nav-link" href="blog.html">
                                    Mutfak Halıları
                                </a>
                            </li>
                            <li>
                                <a className="nav-link" href="contact.html">
                                    Çocuk Halıları
                                </a>
                            </li>
                            <li>
                                <a className="nav-link" href="contact.html">
                                    İndirimler
                                </a>
                            </li>
                        </ul>
                        <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                            <li>
                                <a className="nav-link" href="#">
                                    <img src="images/user.svg" alt="User Icon"/>
                                </a>
                            </li>
                            <li>
                                <a className="nav-link" href="cart.html">
                                    <img src="images/cart.svg" alt="Cart Icon"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavbarJS;
