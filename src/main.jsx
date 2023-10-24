import React from 'react'
import App from './App.jsx'
import './index.css'
import ReactDOM from 'react-dom'
import AppRouter from './AppRouter';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
         <AppRouter />
   </React.StrictMode>,
 )

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// )


// ReactDOM.render(
//   <React.StrictMode>
//     <AppRouter /> {/* Renderize o componente AppRouter em vez do componente App diretamente */}
//   </React.StrictMode>,
//   document.getElementById('root')
// );