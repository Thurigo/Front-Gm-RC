import React, { useState } from 'react';
import { Guerreiro, Mago, Bardo, Ladrao, JogadorClasse } from '../../../type_back/src/Playerclass';

let guerreiro = new JogadorClasse("Thurigo", 0, 0, new Guerreiro);
let mago = new JogadorClasse("Thurigo", 0, 0, new Mago);
let bardo = new JogadorClasse("Thurigo", 0, 0, new Bardo);
let ladrao = new JogadorClasse("Thurigo", 0, 0, new Ladrao);

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
    let [selectedCard, setSelectedCard] = useState(null);
    let [showModal, setShowModal] = useState(false);
    let [selectedClass, setSelectedClass] = useState(null);
    const [inputName, setInputName] = useState("");

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
                break;
        }
        selectedCharacter.nome = inputName;

        setSelectedClass(selectedCharacter);
        setSelectedCard(selectedTitle);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const handleInputChange = (e) => {
        const newName = e.target.value;
        setInputName(newName); // Atualiza inputName em tempo real
        if (selectedClass) {
            selectedClass.nome = newName; // Atualiza a propriedade nome em tempo real
        }
    };

    const handleButtonClick = () => {
    };

    return (
        <div className='tela , pinga-pinga , sombra-tela ,  aparecer'>
            <div className='container-flex'>
                {cards.map((card, index) => (
                    <Card key={index} {...card} onSelect={handleCardSelect} />
                ))}
            </div>

            <input
                className="input"
                type="text"
                value={inputName}
                onChange={handleInputChange}
                placeholder="Nome"
            />
            <i></i>

            {showModal && (
                <div className="">

                    <div className="">
                        <h4 >{selectedClass.nome}</h4>
                        <h5>Classe: {selectedCard}{" "}
                            Força: {selectedClass.classe.forca}{" "}
                            Agilidade: {selectedClass.classe.agilidade}{" "}
                            Carisma: {selectedClass.classe.carisma}{" "}
                            Desefesa:{selectedClass.classe.defesa}{" "}
                            Sorte:{selectedClass.classe.sorte}{" "}</h5>
                    </div>


                    <div class="botaoseleciona ">
                        
                        <Link to="/batalha">
                        <button className="btn" onClick={() => handleButtonClick()}>
                            <span></span>
                            <p data-start="good luck!" data-text="Começar!" data-title="Selecionar"></p>
                        </button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Playermaker;
