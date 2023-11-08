import Servico from '../componentes/Servico/indexServicos';
import styled from 'styled-components'



const AppContainer = styled.div`

    width: 100vw;
    height: 100vh;
    background-color: aqua;
  
`

function Servicos() {
    return (
        <AppContainer>
            <Servico/>
        </AppContainer>
      );
}

export default Servicos;
