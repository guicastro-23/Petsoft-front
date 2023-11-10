
import styled from 'styled-components'
import NovoClientes from '../componentes/NovoCliente/novoCliente';



const AppContainer = styled.div`

    width: 100vw;
    height: 100vh;
    background-color: aqua;
  
`

function NovoCliente() {
    return (
        <AppContainer>
          <NovoClientes/>
        </AppContainer>
      );
}

export default NovoCliente;
