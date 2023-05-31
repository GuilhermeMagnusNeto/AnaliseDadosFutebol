import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="Main" >
      <header className='cabecalho'>
        <h1>Análise de Jogos</h1>
      </header>

      <main className='principal'>
        <input type="text" placeholder="Buscar time" id='campoBuscar'/>
        <button id="botaoBuscar">Buscar</button>
        <h2>Média de gols: 2.5</h2>
          
        <h2>Média de escanteios: 7.0</h2>

        <h2>Média de cartões amarelos: 1.3</h2>
      </main>

      <footer className='rodape'>
        <p>TODOS OS DIREITOS RESEVADOS</p>
      </footer>
    </div>
  );
}

export default App;
