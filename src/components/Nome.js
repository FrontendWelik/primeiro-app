function Nome({aluno, idade}){
  return(
    <span> bem vindo: {aluno}, você tem {idade} anos</span>
  )
}

export default Nome;// exportando para outros arquivos possam usar o Nome