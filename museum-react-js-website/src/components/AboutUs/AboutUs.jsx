import React from 'react';
import images from "../../constants/images";
import "./AboutUs.css";

const AboutUs = () => (
    <div className='about section__padding'>
        <div className='container'>
            <div className='about__content text__center'>
                <h2 className='section__title text__cap'>Sobre Nós</h2>
                <p className='para__text text__grey'>Nosso objetivo é inspirar uma paixão pela ciência e pela exploração do mundo ao nosso redor, 
                incentivando a curiosidade, o questionamento e o pensamento crítico. 
                No "Explorando", cada visita é uma jornada de descoberta que promove o aprendizado contínuo e o desenvolvimento pessoal. 
                Venha nos visitar e embarque em uma aventura científica inesquecível no "Explorando" Museu Interativo de Ciência!</p>
                <img src = {images.signature} alt = "" />
            </div>
        </div>
    </div>
)

export default AboutUs;