import React from 'react'

import Icon from "../header/icon.svg";
import '../header/header.css';
import '../header/search.svg';
import 'react-bootstrap';
import '../header/modal.css';

import 'react-bootstrap/Modal'

function Header() {


    function VerificarHora() {
        const data = new Date();
        const hora = data.getHours();

        console.log(hora)


        if (hora <= 12) {
            return (
                <text>Bom dia</text>
            )
        };
        if (hora >= 13) {
            return (
                <text>Boa tarde</text>
            )
        };
        if (hora >= 18) {
            return (
                <text>Boa noite</text>
            );
        }
        if (hora = 0) {
            return (
                <text>Boa madrugada</text>
            );
        }
    }


    function GeradorId() {
        const id = Math.floor(Math.random() * 10101)
        return (
            <text>{id}</text>
        )

    }

    return (
        <header className="cabecalho">
            <h1 className="cabecalho-titulo">ByteBank</h1>

            <div className="cabecalho-profile">
                <img className="cabecalho-profile-img" src={Icon} />
                <p className="cabecalho-profile-p">
                        {VerificarHora()}, João!<span class="badge badge-info">CEO</span>
                        </p>
            </div>
            <input className="cabecalho-input"
                placeholder="O que deseja?"></input>
        </header>
    )
}

export default Header;