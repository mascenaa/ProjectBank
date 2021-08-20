import React from 'react';
import cartao from './cartao.svg'
import './credit.css'

export default function Credit() {


    return (
        <section className="details">
            <h3 className="details-title t">Cartões Disponiveis</h3>
            <div className="details-credit">
                <img className="cartao" src={cartao} />
                <p className="details-p">Cartão Visa - 8732</p>
            </div>
    </section>


    )
};



