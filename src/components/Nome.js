function Nome(props){
  return(
    <span> bem vindo: {props.aluno}</span>// props é um objeto que tem todas as propriedades que foram passadas para o componente
  )
}

export default Nome;// exportando para outros arquivos possam usar o Nome