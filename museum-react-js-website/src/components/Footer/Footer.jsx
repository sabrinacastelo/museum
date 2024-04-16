import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer section__padding bg__dark">
            <div className="container">
                <div className="footer__content grid text__light text__center">
                    <div className="footer__content--item">
                        <a href = "#" className="footer__navlink">EXPLORANDO</a>
                        <p className="para__text">&copy; 2024. Todos os Direitos Reservados.</p>
                    </div>

                    <div className="footer__content--item">
                        <a href = "mailto:someone@gmail.com">explorando@gmail.com</a><br></br>
                        <span>+55 77 32164-5009</span>
                    </div>

                    <div className="footer__content--item">
                        <h3 className="footer__title">Explorando</h3>
                        <ul className="footer__links">
                            <li><a href = "#">Sobre</a></li>
                            <li><a href = "#">Visitante</a></li>
                            <li><a href = "#">Exposições</a></li>
                        </ul>
                    </div>

                    <div className="footer__content--item">
                        <h3 className="footer__title">Blog</h3>
                        <ul className="footer__links">
                            <li><a href = "#">Eventos</a></li>
                            <li><a href = "#">Contato</a></li>
                            <li><a href = "#">Serviços</a></li>
                        </ul>
                    </div>

                    <div className="footer__content--item">
                        <h3 className="footer__title">Redes Sociais</h3>
                        <ul className="footer__links">
                            <li><a href = "#">Facebook</a></li>
                            <li><a href = "#">Twitter</a></li>
                            <li><a href = "#">Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;