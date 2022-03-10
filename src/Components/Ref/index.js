import { useRef } from "react";

export default function Ref() {
    const number = useRef(0);


    //Quando o componente atualizado não impacta no visual
    
    // Acessar elementos da dom de forma imperativa


    function handleSetValue() {
        const newNumber = Math.round(Math.random() * (10 - 1) + 1);
        number.current = newNumber; 
    }

    const inputRef = useRef(null);

    function handlePrintName() {
        alert(inputRef.current.value);
    }

    function handlePrintValue() {
        alert(number.current);
    }

    return (
        <div>
            <hr />
            <h4>useRef</h4>
            <button onClick={handleSetValue}>Set Value</button>
            <button onClick={handlePrintValue} >Print Values</button>
            <br /><br />
            <input ref={inputRef} />
            <button onClick={handlePrintName}>Print Name</button>

        </div>
    )
}