import { useState } from 'react';

import Counter from './Components/Counter';

import './App.css';

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
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
