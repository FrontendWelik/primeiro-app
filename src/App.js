
import { useState } from "react";

import Nome from "./components/Nome";

function App() {
  const [aluno, setAluno] = useState('programador')

  function mudarName(){
    setAluno('welik carlos');
  }
s
  
  return (
    <div>
      <h1> Componente APP</h1>
      <h2> Ola: {aluno}</h2>
      <button onClick={ mudarName }>
           mudar nome
      </button>
     
      
    </div>
  );
}

export default App;// exportando para outros arquivos possam usar o App


