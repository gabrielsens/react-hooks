import { useState, useCallback } from 'react';


export default function Callback() {
    const [counter, setCounter] = useState(0);
    
    const handlePlus = useCallback(() => {
        setCounter((prevState) => prevState + 1);
    }, []);    

    function handleMinus() {
    setCounter((prevState) => prevState - 1);
    }

    return (
        <div>
          <hr />
          <h4>useCallback</h4>
          <h1>{counter}</h1>
          <Button onClick={handlePlus} />
          <button onClick={handleMinus}>-</button>
        </div>
    );
}

// Use callback funciona para passar funções para componentes filho
function Button(props) {
    return (
        <button onClick={props.onClick}>+</button>
    );
}