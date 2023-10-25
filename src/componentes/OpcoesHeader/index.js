import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Opcao = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
    border: 1px solid #ccc;

`

const Opcoes = styled.ul`
    display: flex;
    justify-content: flex-end;
`

const textoOpcoes = ['INÍCIO', 'SERVIÇOS', 'CLIENTES', 'PETS']

function OpcoesHeader() {
  return(
    <Opcoes> 
         {textoOpcoes.map( (texto) => (
            <Link to={`/${texto.toLowerCase()}`}> <Opcao><p>{texto}</p></Opcao> </Link>
            
    ) ) }
   </Opcoes>
  )
  }

export default OpcoesHeader