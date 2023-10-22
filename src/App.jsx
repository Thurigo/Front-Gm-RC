import React, { useState } from 'react';
import Playermaker from '../src/Playermaker/playermade';
import './App.css';
import './Elementos.css';
import { Link } from 'react-router-dom';

function App() {
  const [showPlayermaker, setShowPlayermaker] = useState(false);

  const handleStartClick = () => {
    setShowPlayermaker(true);
  };

  return (
    <div className='aparecer'>
      {/* Conteúdo do aplicativo */}
      {/* LOGO */}
      <h1 className='sombratitulo' style={{ fontFamily: 'Clepto, sans-serif' }}>
        O Jogo
      </h1>
      <div className="card2">
        <Link to="/playermaker">
          <button className='botao-balanca' onClick={handleStartClick}>
            Iniciar
          </button>
        </Link>
      </div>

      <div class="card">
    <svg viewBox="0 0 24 24"></svg>
    <div class="card__content">
    <p class="card__title">Perdeu</p>
    <p class="card__description">Tamo junto.</p>
  </div>
</div>


    </div>
  );
}

export default App;
