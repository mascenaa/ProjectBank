import React from 'react'

import Icon from "../header/icon.svg";
import '../header/header.css';
import '../header/search.svg';
import 'react-bootstrap';
import '../header/modal.css';

import 'react-bootstrap/Modal'

function Header() {
    const nome = "João"

    function VerificarHora() {
        const data = new Date();
        const hora = data.getHours();
        console.log(hora)


        if (hora <= 12) {
            return (
                <text>🌞 Bom dia</text>
            )
        };
        if (hora < 17) {
            return (
                <text>⛅ Boa tarde</text>
            )
        };
        if (hora > 17) {
            return (
                <text>🌙 Boa noite</text>
            );
    }
}
    return (
        <header className="cabecalho">
            <h1 className="cabecalho-titulo">ByteBank</h1>
            <div className="cabecalho-profile">
                <details open>
                <summary>Informações <img className="cabecalho-profile-img" src={Icon} /></summary>
                    <p className="cabecalho-profile-p">{VerificarHora()}, {nome}!</p>
                    <p className="cabecalho-profile-p">🏧 Agência: 1001-1</p>
                    <p className="cabecalho-profile-p">👤 CPF: 198.321.323-72</p>
                    <a className="cabecalho-profile-exit">Sair</a>
                </details>
            </div>
        </header>
    )
}

export default Header;