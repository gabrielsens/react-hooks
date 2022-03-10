import { useReducer } from 'react';

// Função reducer sempre precisa retornar algo
// O retorno da função sera o state atualizado
function reducer(state, action) {
  switch(action.type) {
    case 'plus':
      return {
        counter: state.counter + 1,
        clicks: state.clicks + 1,
      };
    case 'minus':
      return {
        counter: state.counter - 1,
        clicks: state.clicks + 1,
      };
    default:
      return state;
  }
};

const initialValue = {
  counter: 0,
  clicks: 0,
}


export default function Reducer() {
  // Segundo parametro é o estado inicial
  // Terceiro parametro função inicializer - soe executa uma vez quando o componente é montado
  // initialValue é o valor do segundo parametro

  const [state, dispatch] = useReducer(
    reducer, initialValue
    // function(state, action) {},
    // 'Gabriel',
    // function(initialValue) {
    //   return { name: initialValue };


    // },
  );

    function handlePlus() {
      // Dispatch recebe apenas um argumento
      dispatch( { type: 'plus' })
    }
    function handleMinus() {
      dispatch({ type: 'minus' })
    }

    return (
        <div>
          <hr />
          <h4>useReducer</h4>
          <h1>{state.counter}</h1>
          <h4>Cliques: {state.clicks}</h4>
          <button onClick={handlePlus}>+</button>
          <button onClick={handleMinus}>-</button>
        </div>
    )
}