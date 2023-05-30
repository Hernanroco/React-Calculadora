import './App.css';
import logocalculadora from './img/MICALCULADORA.JPG';
import Boton from './componentes/Boton';
import Pantalla from './componentes/pantalla'
import BotonClear from './componentes/boton-clear';
import { useState } from 'react';
import { evaluate } from 'mathjs'

function App() {
  
  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  };

  const clacularResultado = ()=> {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Por favor ingrese valores para realizar los calculos")
    }
  };

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img 
        src={logocalculadora}
        className="logo-calculadora"
        alt='Logo-calculadora'
        /> 
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}></Pantalla>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={clacularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;

