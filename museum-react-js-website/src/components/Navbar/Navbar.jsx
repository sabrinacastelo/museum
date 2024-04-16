import React, { useState } from "react";
import images from "../../constants/images";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';



const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className="navbar">
            <div className="container flex">
                <div className="brand__and__toggler flex">
                    <Link to="/" href="index.html" alt="" className="navbar__brand">
                        <img src={images.logo} alt="site logo" />
                    </Link>
                    <button type="button" className="navbar__open--btn text__light" onClick={() => setToggleMenu(true)}>
                        <FaBars size={26} />
                    </button>
                </div>

                <div className="navbar__collapse">
                    <ul className="navbar__nav">
                        <li className="nav__item">
                            <Link to="/" className="nav__link text__upper fw_6 text__light nav__active">Início</Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/about" className="nav__link text__upper fw_6 text__light">Sobre</Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/expo" href="#work" className="nav__link text__upper fw_6 text__light">Exposições</Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/blog" className="nav__link text__upper fw__6 text__light">Blog</Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/events" href="#about" className="nav__link text__upper fw__6 text__light">Eventos</Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/visitor" href="#about" className="nav__link text__upper fw__6 text__light">Visitante</Link>
                        </li>
                    </ul>
                </div>

                {toggleMenu && (
                    <div className="navbar__smallscreen">
                        <button type="button" className="navbar__close--btn text__light" onClick={() => setToggleMenu(false)}>
                            <FaTimes size={32} />
                        </button>
                        <ul className="navbar__nav--smallscreen text__light">
                            <li className="nav__item">
                                <Link to="/" className="nav__link text__upper fw_6 text__light nav__active">Início</Link>
                            </li>
                            <li className="nav__item">
                                <Link to="/about" className="nav__link text__upper fw_6 text__light">Sobre</Link>                            </li>
                            <li className="nav__item">
                                <Link to="/expo" href="#work" className="nav__link text__upper fw_6 text__light">Exposições</Link>
                            </li>
                            <li className="nav__item">
                                <Link to="/blog" className="nav__link text__upper fw__6 text__light">Blog</Link>
                            </li>
                            <li className="nav__item">
                                <Link to="/events" href="#about" className="nav__link text__upper fw__6 text__light">Eventos</Link>
                            </li>
                            <li className="nav__item">
                                <Link to="/visitor" href="#about" className="nav__link text__upper fw__6 text__light">Visitante</Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar;