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
          <pre><h2>Média de gols feito em casa: <span id='resultado'>2.5</span></h2></pre>
          <pre><h2>Média de gols sofridos em casa: <span id='resultado'>2.5</span></h2></pre>
          
          <pre><h2>Média de gols feitos fora: <span id='resultado'>2.5</span></h2></pre>
          <pre><h2>Média de gols sofridos fora: <span id='resultado'>2.5</span></h2></pre>
  
          <pre><h2>Média de gols feitos no total: <span id='resultado'>2.5</span></h2></pre>
          <pre><h2>Média de gols sofridos no total: <span id='resultado'>2.5</span></h2></pre>
        </div>

        {/* parte da media de escanteios */}
        <div id='mediaEscanteios'>
          <pre><h2>Média de escanteios a favor em casa: <span id='resultado'>2.5</span></h2></pre>
          <pre><h2>Média de escanteios contra em casa: <span id='resultado'>2.5</span></h2></pre>
          
          <pre><h2>Média de escanteios a favor fora: <span id='resultado'>2.5</span></h2></pre>
          <pre><h2>Média de escanteios contra fora: <span id='resultado'>2.5</span></h2></pre>
  
          <pre><h2>Média de escanteios a favor no total: <span id='resultado'>2.5</span></h2></pre>
          <pre><h2>Média de escanteios contra no total: <span id='resultado'>2.5</span></h2></pre>
        </div>

        {/* parte da media de cartões */}
        <div id='mediaCartoes'>
          <pre><h2>Média de cartões tomados em casa: <span id='resultado'>2.5</span></h2></pre>
          <pre><h2>Média de cartões adversário em casa: <span id='resultado'>2.5</span></h2></pre>
          
          <pre><h2>Média de cartões tomados fora: <span id='resultado'>2.5</span></h2></pre>
          <pre><h2>Média de cartões adversário fora: <span id='resultado'>2.5</span></h2></pre>
  
          <pre><h2>Média de cartões tomados no total: <span id='resultado'>2.5</span></h2></pre>
          <pre><h2>Média de cartões adversário no total: <span id='resultado'>2.5</span></h2></pre>
        </div>
      </div>
        
      </main>

      <footer className='rodape'>
        <p id='footer'>TODOS OS DIREITOS RESEVADOS</p>
      </footer>
    </div>
  );
}

export default App;
