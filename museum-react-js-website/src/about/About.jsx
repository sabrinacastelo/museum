import React, { useState } from "react";
import images from "../constants/images";
import "./About.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Footer from "../components/Footer/Footer";

const About = () => {
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
                    )}
                </div>
            </nav>
            <div className='about section__padding'>
                <div className='container'>
                    <div className='about__content text__center'>
                        <h2 className='section__title text__cap'>Informações</h2>
                        <p className='para__text text__grey'>Nome: Museu Interativo de Ciência "Explorando"<br></br>
                            Localização: No coração da cidade, próximo a escolas e áreas de lazer.<br></br>
                            Fundação: Inaugurado em [ano de inauguração].<br></br>
                            Espaço: Instalações modernas e espaçosas, projetadas para receber visitantes de todas as idades.</p><br></br>
                        <h2 className='section__title text__cap'>EXPLORANDO</h2>
                        <p className='para__text text__grey'>Há muitos anos, um grupo de visionários se reuniu com um objetivo em mente: criar um espaço que pudesse inspirar e educar pessoas de todas as idades sobre o maravilhoso mundo da ciência.
                            Movidos pela paixão pelo conhecimento e pela vontade de fazer a diferença em suas comunidades, eles deram início ao projeto de criação de um museu interativo de ciência - um lugar onde a aprendizagem se tornaria uma experiência emocionante e envolvente.
                            A jornada para a criação do museu foi repleta de desafios, desde a busca por financiamento até a seleção do local perfeito para abrigar as exposições e atividades planejadas. No entanto, cada obstáculo foi enfrentado com determinação e criatividade, e aos poucos o sonho começou a se tornar realidade
                            Finalmente, após meses de trabalho árduo e colaboração entre cientistas, educadores, artistas e membros da comunidade, o museu abriu suas portas ao público. Com suas salas repletas de exposições interativas, laboratórios de experimentação, e programas educativos inovadores, o museu rapidamente se tornou um destino popular para famílias, escolas e entusiastas da ciência.
                            O objetivo do museu era claro desde o início: promover a cultura científica e a educação, estimular a curiosidade e o pensamento crítico, e inspirar uma nova geração de cientistas e inovadores. Através de suas exposições dinâmicas e atividades envolventes, o museu buscava mostrar às pessoas que a ciência está em todos os lugares, desde o brilho das estrelas no céu até os átomos que compõem nossos corpos.
                            À medida que o tempo passava, o museu se tornou mais do que apenas um local de entretenimento - tornou-se um catalisador para o crescimento e desenvolvimento das comunidades ao seu redor. Ele oferecia oportunidades de aprendizagem para todos, independentemente de sua idade, origem ou formação educacional, e se tornou um símbolo de esperança e inspiração para o futuro.
                            O benefício que o museu trouxe para a comunidade foi imenso. Além de proporcionar uma experiência educativa única, ele também gerou empregos, impulsionou o turismo local e estimulou o interesse pela ciência entre os jovens. Mais importante ainda, ele mostrou que, quando as pessoas se unem em torno de um objetivo comum, são capazes de realizar coisas extraordinárias.
                            Assim, a criação do museu interativo de ciência não apenas enriqueceu as vidas das pessoas que o visitaram, mas também deixou um legado duradouro de descoberta, inovação e inspiração para as gerações futuras.</p><br></br>
                        <h2 className='section__title text__cap'>Nossa Missão</h2>
                        <p className='para__text text__grey'>    Educação: Oferecer uma experiência educativa dinâmica e envolvente, que inspire a curiosidade e promova o aprendizado ao longo da vida.<br></br>
                            Acesso: Tornar a ciência acessível a todos, independentemente de idade, formação ou origem, através de exposições interativas e programas inclusivos.<br></br>
                            Inovação: Estimular a inovação e a criatividade, incentivando os visitantes a explorar e experimentar conceitos científicos de maneira prática e divertida.<br></br>
                            Divulgação Científica: Promover a cultura científica e a compreensão pública da ciência, mostrando sua relevância e impacto na vida cotidiana.</p><br></br>
                        <img src={images.signature} alt="" />
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}
export default About;