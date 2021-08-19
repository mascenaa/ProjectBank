import React from 'react';
import './cardbody.css';
import 'react-bootstrap';

import bank from './vectors/bank.svg'
import bitcoin from './vectors/bitcoin.svg'
import list from './vectors/list.svg'

function Cards() {

    const money = 2323.2

    function Saldo() {

        if(money == 0){
            return(
                <text>Neutro 📊</text>
            )
        };
        if(money >= 1){
            return(
                <text>Positivo 📈</text>
            )
        };
        if(money <= 0){
            return(
                <text>Negativo 📉</text>
            )
        }
    };

    parseInt(money + 2)
    console.log(money)


    return (
        <section className="cards">
        <div className="cardBox investimento gradient-border"> 
            <h3> <img className="badgeicon" src={bitcoin}/>Investimentos</h3>
            <ul className="list-group list-group-flush">
                <li className="list-group-item list-group-item-success">PETR4 • <strong>1,4%</strong></li>
                <li className="list-group-item list-group-item-success">MGLU3 • <strong>3,6%</strong></li>
                <li className="list-group-item list-group-item-danger">CVCB3 • <strong>-2,3%</strong></li>
                <li className="list-group-item list-group-item-success">LAME4 • <strong>0,2%</strong></li>
                <li className="list-group-item list-group-item-danger">VALE3 • <strong>-1,3%</strong></li>
                <li className="list-group-item list-group-item-danger">TSLA34 • <strong>2,1%</strong></li>

            </ul>
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
            </div>


            <div className="cardBox atividade gradient-border">
                <h3><img className="badgeicon" src={list}/>Atividade</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item list-group-item-danger">
                        R$ 08,37 ·Pastel dos crias 
                    </li>
                    <li className="list-group-item list-group-item-danger">
                        R$ 12,76 · Ifood - McDonald Itaim Bibi
                    </li>
                    <li className="list-group-item list-group-item-danger">
                        R$ 430,20 · Extra HiperMercados 
                    </li>
                    <li className="list-group-item list-group-item-danger">
                        R$ 430,20 · Extra HiperMercados 
                    </li>
                    <li className="list-group-item list-group-item-danger">
                        R$ 430,20 · Extra HiperMercados 
                    </li>
                </ul>
            </div>
        </section>
    )

}


export default Cards;