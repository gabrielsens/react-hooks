import { useState } from 'react';


export default function Counter() {
    const [counter, setCounter] = useState(0);
    
    

    function handlePlus() {
    // Quando for setar o state usando de referencia o valor atual do state usar prevState
    //setCounter(counter + 1);

    setCounter((prevState) => prevState + 1);
    }
    function handleMinus() {
    setCounter((prevState) => prevState - 1);
    }

    return (
        <div>
          <h4>useState</h4>
          <h1>{counter}</h1>
          <button onClick={handlePlus}>+</button>
          <button onClick={handleMinus}>-</button>
        </div>
    )
}