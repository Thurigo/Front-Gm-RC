import React, { useState } from 'react';

function Card({ number, title, description, onSelect, imagePath }) {
    return (
        <div className="card-basic" onClick={() => onSelect({ number, title, description })}>
            <img src={imagePath} alt={title} className="image" />
            <p className="number-h1">{number}</p>
            <p className="h1 , sombratitulo">{title}</p>
            <p className="p">{description}</p>
        </div>
    );
}

function Playermaker() {
    const [selectedCard, cardselecionado] = useState(null);

    const cards = [
        {
            number: "01",
            title: "Guerreiro",
            description: "salve",
            imagePath: "src/assets/img/guerreiro.png" 
        },
        {
            number: "02",
            title: "Mago",
            description: "salve",
            imagePath: "src/assets/img/mago.png" 
        },
        {
            number: "03",
            title: "Bardo",
            description: "salve",
            imagePath: "src/assets/img/bardo.png" 
        },
        {
            number: "04",
            title: "Ladrão",
            description: "salve",
            imagePath: "src/assets/img/ladrao.png" 
        },
        // Adicione mais objetos para mais cards
    ]

    return (
        <div className='tela ,  pinga-pinga , sombra-tela , aparecer '>
            <div className='container-flex'>
                {cards.map((card, index) => (
                    <Card key={index} {...card} onSelect={cardselecionado} />
                ))}
            </div>

            <div className='container-flex'>
                {selectedCard && (
                    <div >
                        <p> Você selecionou: {selectedCard.title}</p>
                    </div>
                )}
                <button className='botao-balanca'>
                    Selecionar
                </button>
            </div>
        </div>
    );
}

export default Playermaker;
