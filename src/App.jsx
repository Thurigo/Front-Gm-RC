import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Elementos.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='aparecer'>
    <>

      {/* LOGO */}
      <h1 className='sombratitulo' style={{fontFamily: 'Clepto, sans-serif'}}>Jogo Meu</h1>
      <div className="card2">
        <button className='botao-balanca' onClick={() => setCount((count) => count + 1)}>
          Iniciar 
        </button>
       
      </div>
      <div class="card">
    <svg viewBox="0 0 24 24"></svg>
    <div class="card__content">
    <p class="card__title">Criado por mim para mim esquece</p>
    <p class="card__description">Motivo que eu criei.</p>
  </div>
</div>


    </>
    </div>
  )
}

export default App
