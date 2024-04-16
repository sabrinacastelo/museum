import images from "../constants/images";
import './Blog.css';
import React, { useState } from "react";
import "../about/About.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Footer from "../components/Footer/Footer";

const Blog = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <>
            <nav className="navbars">
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
                                <Link to="/about" className="nav__link text__upper fw_6 text__light">Sobre</Link>                        </li>
                            <li className="nav__item">
                                <Link to="/expo" className="nav__link text__upper fw__6 text__light">Exposições</Link>
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
                                    <Link to="/about" className="nav__link text__upper fw_6 text__light">Sobre</Link>
                                </li>
                                <li className="nav__item">
                                    <Link to="/expo" className="nav__link text__upper fw__6 text__light">Exposições</Link>
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
            <div className="containers">
                <div className="post">
                    <h2>Title of the First Blog Post</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec ante ac libero interdum ullamcorper. Nullam et justo ut odio tincidunt suscipit vitae non lacus. Sed tristique nisi at lectus tincidunt, sit amet suscipit nunc porta. Ut ac lorem purus.</p>
                    <p className="author">Author: John Doe</p>
                    <p className="date">Published on: April 13, 2024</p>
                    <img src={images.signature} alt="site logo" />
                    <button className="read-more-btn">Ler Mais</button>
                </div>

                <div className="post">
                    <h2>Another Blog Post</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec ante ac libero interdum ullamcorper. Nullam et justo ut odio tincidunt suscipit vitae non lacus. Sed tristique nisi at lectus tincidunt, sit amet suscipit nunc porta. Ut ac lorem purus.</p>
                    <p className="author">Author: Jane Smith</p>
                    <p className="date">Published on: April 14, 2024</p>
                    <img src={images.signature} alt="site logo" />
                    <button className="read-more-btn">Ler Mais</button>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Blog;
