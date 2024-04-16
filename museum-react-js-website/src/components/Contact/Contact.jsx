import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <div className="contact section__padding bg__whitesmoke">
            <div className="container">
                <h2 className="section__title text__center">Deseja comprar um ingresso online?</h2>
                <p className="para__text text__center">Responda esse formulário para prosseguir com a compra do ingresso</p>

                <div className="contact__content">
                    <form>
                        <div className="form__elem form__elem--2">
                            <input type="text" className="form__control" placeholder="Digite seu Nome" />
                            <input type="text" className="form__control" placeholder="Digite seu Email" />
                        </div>
                        <div className="form__elem">
                            <input type="text" className="form__control" placeholder="Tipo de Ingresso" />
                        </div>
                        <div className="form__elem">
                            <input type="text" className="form__control" placeholder="Necessita de Atendimento Especial?" />
                        </div>
                        <Link to="/expo" type="submit" className="form__submit--btn btn btn__blue">Comprar Ingresso</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;