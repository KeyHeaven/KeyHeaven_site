import React from 'react';
import './App.css';
import Button from './composant/Button';


const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>KeyHeaven</h1>
        <img src="keylogo.png" className="App-logo" alt="KeyHeaven" />
        <Button onClick={() => alert('Se connecter au portail Admin')} label="Se connecter au portail Admin" />
      </header>
    </div>
  );
};

export default App;
