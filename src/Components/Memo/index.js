import { useMemo, useState } from 'react';


export default function Memo() {
    const [counter, setCounter] = useState(1);
    const [name, setName] = useState('');

    const total = useMemo(() => {
        console.log('useMemo rodou')
        return (counter * 123444444444444444 * 5312412444444444444)
    }, [counter]);

    // Diferença de useCallback para useMemo é que o use memo retorna o resultado da função e o useCalback retorna a função em si!


    function handlePlus() {
        setCounter((prevState) => prevState + 1);
    };

    return (
        <div>
          <hr />
          <h4>useMemo</h4>
          <h1>{counter}</h1>
          <h4>{total}</h4>
          <button onClick={handlePlus}>+</button>
        

          <br /><br />
          <span>{name}</span><br />
          <input onChange={e => setName(e.target.value)} />
        </div>
    );
}
