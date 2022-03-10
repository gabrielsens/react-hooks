import { useState } from 'react';

import Counter from './Components/Counter';
import Context from './Components/Context';
import Callback from './Components/Callback';
import Memo from './Components/Memo';
import Ref from './Components/Ref';

import './App.css';
import Reducer from './Components/Reducer';

function App() {
  useState(() => {
    return 'Estado inicial sem precisar fazer um setState'
  });

  // Pode passar um objeto como state tbm;
  const [email] = useState('gabreile@gabriel.com');
  const [name] = useState('Gabriel');
  // Toda vez que altera o state ele vai renderizar todo o componente
  console.log(email, name)

  

  return (
    <div className="App" style={{paddingBottom: "20px"}}>
      <Counter />
      <Context />
      <Reducer />
      <Callback />
      <Memo />
      <Ref />
    </div>
  );
}

export default App;
