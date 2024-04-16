import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import images from "../../constants/images";
import { Link } from 'react-router-dom';

const Header = () => (
    <div className="header" style = {{
        background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2)), url(${images.header_bg}) center/cover no-repeat`
    }}>
        <Navbar />

        <div className="container">
            <div className="header__content text__center text__light flex flex__center">
                <div className="header__content--left"></div>
                <div className="header__content--right">
                    <h1 className="header__title fw__6">Conheça o Explorando</h1>
                    <p className="para__text">Um museu interativo de ciência dedicado a proporcionar experiências educativas e divertidas para visitantes de todas as idades. Nosso museu é um espaço onde a curiosidade é estimulada e a aprendizagem é uma aventura emocionante.</p>
                    <Link to="/about" className="btn btn__blue">Saiba Mais</Link>
                </div>
            </div>
        </div>
    </div>
)

export default Header;