import React, { useState } from 'react';
import { Guerreiro, Mago, Bardo, Ladrao, JogadorClasse } from '../../../type_back/src/Playerclass';

const guerreiro = new JogadorClasse("Thurigo", 0, 0, new Guerreiro);
const mago = new JogadorClasse("Thurigo", 0, 0, new Mago);
const bardo = new JogadorClasse("Thurigo", 0, 0, new Bardo);
const ladrao = new JogadorClasse("Thurigo", 0, 0, new Ladrao);

function Card({ number, title, description, onSelect, imagePath, color, jogador }) {
    const cardStyle = {
        backgroundColor: color,
    };

    return (
        <div className="card-basic" style={cardStyle} onClick={() => onSelect(title)}>
            <img src={imagePath} alt={title} className="image" />
            <p className="h1, sombratitulo">{title}</p>
            <p className="p">
            Força: {jogador.classe.forca} ,{" "} 
            carisma: {jogador.classe.carisma},{" "} 
            Agilidade: {jogador.classe.agilidade},{" "}
            Defesa: {jogador.classe.defesa},{" "}
            Sorte: {jogador.classe.sorte},{" "}
            </p>

        </div>
    );
}

function Playermaker() {
    const [selectedCard, setSelectedCard] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [selectedClass, setSelectedClass] = useState(null);

    const cards = [
        {
            number: "01",
            title: "Guerreiro",
            description: "salve",
            imagePath: "src/assets/img/guerreiro.png",
            color: "darkred",
            jogador: guerreiro,
        },
        {
            number: "02",
            title: "Mago",
            description: "salve",
            imagePath: "src/assets/img/mago.png",
            color: "darkblue",
            jogador: mago,
        },
        {
            number: "03",
            title: "Bardo",
            description: "salve",
            imagePath: "src/assets/img/bardo.png",
            color: "darkgreen",
            jogador: bardo,
        },
        {
            number: "04",
            title: "Ladrão",
            description: "salve",
            imagePath: "src/assets/img/ladrao.png",
            color: "darkorange",
            jogador: ladrao,
        },
    ];

    const handleCardSelect = (selectedTitle) => {
        let selectedCharacter;

        switch (selectedTitle) {
            case "Guerreiro":
                selectedCharacter = guerreiro;
                break;
            case "Mago":
                selectedCharacter = mago;
                break;
            case "Bardo":
                selectedCharacter = bardo;
                break;
            case "Ladrão":
                selectedCharacter = ladrao;
                break;
            default:
                // Trate casos não reconhecidos
                break;
        }

        setSelectedClass(selectedCharacter);
        setSelectedCard(selectedTitle);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className='tela , pinga-pinga , sombra-tela ,  aparecer'>
            <div className='container-flex'>
                {cards.map((card, index) => (
                    <Card key={index} {...card} onSelect={handleCardSelect} />
                ))}
            </div>

            {showModal && (
                <div className="modal">
                    <div className="container-flex , modal-content">
                        <h2 >{selectedCard}</h2>
                        <p>Classe: {selectedClass.title}</p>
                        <p>Força: {selectedClass.classe.forca}</p>
                        <p>Magia: {selectedClass.magia}</p>
                        <p>Agilidade: {selectedClass.agilidade}</p>
                        <button onClick={closeModal}>Fechar</button>
                    </div>
                </div>
            )}

            <button className='botao-balanca'>
                Selecionar
            </button>
        </div>
    );
}

export default Playermaker;
