// src/components/cards/card.jsx
import React from 'react';
import './card.css'

// Definindo cardsTitle corretamente dentro do componente Cards.
const cardsTitle = ['Titulo 1', 'Titulo 2u', 'Titulo 3'];

const Cards = () => {
    return (
        <div>
            <h2>Meus erfgbrfstcards</h2>
            <div>
                {cardsTitle.map((cardTitle, index) => (
                    <div key={index} className="card"> {/* Alterando para div se Card não for um componente */}
                        <h3>{cardTitle}</h3>
                        <p>Esse é um texto do card</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cards;
