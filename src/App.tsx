import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="Main">
      {/* Cabeçalho */}
      <header className='cabecalho'>
        <h1>Análise de Jogos</h1>
      </header>
      <main className='principal'>
        {/* Caixar de pesquisa e botão */}
        <form>
          <div id='caixaPesquisa'>
            <input type="text" placeholder="Buscar time" id='nomeTime'/>
          </div>
          <div id='caixaPesquisa'>
            <input type='number' min={0} step={1} placeholder='Quantidade de jogos a serem análisados' id='quantidadeJogos'/>
          </div>
          <button id="botaoBuscar" type='submit'>Buscar</button>
        </form>
        
      <div id='geral'>
        {/* parte da media de gols */}
        <div id='mediaGols'>
          <h2>Média de gols feito em casa: 2.5</h2>
          <h2>Média de gols sofridos em casa: 2.5</h2>
          
          <h2>Média de gols feitos fora: 7.0</h2>
          <h2>Média de gols sofridos fora: 7.0</h2>
  
          <h2>Média de gols feitos no total: 1.3</h2>
          <h2>Média de gols sofridos no total: 1.3</h2>
        </div>

        {/* parte da media de escanteios */}
        <div id='mediaEscanteios'>
          <h2>Média de escanteios a favor em casa: 2.5</h2>
          <h2>Média de escanteios contra em casa: 2.5</h2>
          
          <h2>Média de escanteios a favor fora: 7.0</h2>
          <h2>Média de escanteios contra fora: 7.0</h2>
  
          <h2>Média de escanteios a favor no total: 1.3</h2>
          <h2>Média de escanteios contra no total: 1.3</h2>
        </div>

        {/* parte da media de cartões */}
        <div id='mediaCartoes'>
          <h2>Média de cartões tomados em casa: 2.5</h2>
          <h2>Média de cartões adversário em casa: 2.5</h2>
          
          <h2>Média de cartões tomados fora: 7.0</h2>
          <h2>Média de cartões adversário fora: 7.0</h2>
  
          <h2>Média de cartões tomados no total: 1.3</h2>
          <h2>Média de cartões adversário no total: 1.3</h2>
        </div>
      </div>
        
      </main>

      <footer className='rodape'>
        <p>TODOS OS DIREITOS RESEVADOS</p>
      </footer>
    </div>
  );
}

export default App;
