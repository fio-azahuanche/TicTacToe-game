import React from "react"; 
//Nos sirve para utilizar JSX, 
//lenguaje que parece HTML pero es JS xd
import "./App.css";
import TicTacToe from "./components/TicTacToe";

function App() {
  return (
      <div className="App">
        <TicTacToe />
      </div>  
  );
}

export default App;

//Notas:

//Los Props tiene una importante función: 
//ellos pasan los datos de un componente a otro