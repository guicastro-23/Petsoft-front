
import styled from 'styled-components'
import Cliente from '../componentes/Cliente/indexClientes';



const AppContainer = styled.div`

    width: 100vw;
    height: 100vh;
    background-color: aqua;
  
`

function Clientes() {
    return (
        <AppContainer>
          <Cliente/>
        </AppContainer>
      );
}

export default Clientes;
