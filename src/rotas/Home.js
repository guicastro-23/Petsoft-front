import Header from "../componentes/Header";
import Corpo from "../componentes/Body";
import styled from 'styled-components'



const AppContainer = styled.div`

    width: 100vw;
    height: 100vh;
    background-color: aqua;
  
`

function Home() {
  return (
    <AppContainer>
      
      <Corpo/>
    </AppContainer>
  );
}

export default Home;
