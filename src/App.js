import logo from './img/rick-morty.png';
import './App.css';
import Caracter from './components/Caracter';
import { useState } from 'react';

function App() {
  const [character, setCharacter] = useState(null); 
  const reqApi = async ()=>{
    const api = await fetch('https://rickandmortyapi.com/api/character/');
    const data = await api.json();
    setCharacter(data.results);
  }

  return (
    <div className="App">
      <header className="App-header">
      <h1 className="title">Rick & Morty</h1>
      {character ? (<Caracter characters={character} setCaracter={setCharacter} />) :
      <>
        <img src={logo} alt="Rick & Morty" className="img-home" />
        <button onClick={reqApi} className="btn-search" >Buscar Personaje</button>
        </>
      }
      
      </header>
    </div>
  );
}

export default App;
