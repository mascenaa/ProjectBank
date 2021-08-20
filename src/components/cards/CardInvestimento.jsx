import React from 'react';
import './cardbody.css';
import 'react-bootstrap';

import bank from './vectors/bank.svg'
import bitcoin from './vectors/bitcoin.svg'
import list from './vectors/list.svg'

function Cards() {

    const money = Math.floor(Math.random() * 5000 - 2500);

    function Saldo() {

        if(money == 0){
            return(
                <text className="status Neutro"><strong>Neutro</strong></text>
            )
        };
        if(money >= 1){
            return(
                <text className="status Positivo"><strong>Positivo</strong></text>
            )
        };
        if(money <= 0){
            return(
                <text className="status Negativo"><strong>Negativo</strong></text>
            )
        }
    };

    parseInt(money + 2)
    console.log(money)



    
    function Porcentagem() {
        const id = Math.floor(Math.random() * 7)
        return (
            <text>{id}</text>
        )

    }


    return (
        <section className="cards">
        <div className="cardBox investimento gradient-border"> 
            <h3> <img className="badgeicon" src={bitcoin}/>Investimentos</h3>
            <ul className="list-group list-group-flush">
                <li className="list-group-item list-group-item-success">PETR4 • <strong>{Porcentagem()}%</strong></li>
                <li className="list-group-item list-group-item-success">MGLU3 • <strong>{Porcentagem()}%</strong></li>
                <li className="list-group-item list-group-item-danger">CVCB3 • <strong>- {Porcentagem()}%</strong></li>
                <li className="list-group-item list-group-item-success">LAME4 • <strong>{Porcentagem()}%</strong></li>
                <li className="list-group-item list-group-item-danger">VALE3 • <strong>- {Porcentagem()}%</strong></li>
                <li className="list-group-item list-group-item-danger">TSLA34 • <strong> -{Porcentagem()}%</strong></li>
            </ul>
            <button className="card-button">Investir</button>
        </div>


            <div className="cardBox gradient-border">
                <h3>
                <img className="badgeicon" src={bank} />Saldo
                </h3>
                <p className="card-p"> R$ {money}</p>
                <h3>
                    Seu saldo está
                </h3>
                <p className="card-p">{Saldo()}</p>

                <button className="card-button">Ver extrato</button>
            </div>


            <div className="cardBox atividade gradient-border">
                <h3><img className="badgeicon" src={list}/>Atividade</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item list-group-item-danger">
                        R$ 08,37 · Pastel dos crias 
                    </li>
                    <li className="list-group-item list-group-item-danger">
                        R$ 12,76 · Ifood - McDonald
                    </li>
                    <li className="list-group-item list-group-item-danger">
                        R$ 430,20 · Extra HiperMercados 
                    </li>
                    <li className="list-group-item list-group-item-danger">
                        R$ 09,99 · Amazon Services
                    </li>
                    <li className="list-group-item list-group-item-danger">
                        R$ 7430,20 · Nike.com.br
                    </li>
                </ul>
            </div>
        </section>
    )

}


export default Cards;