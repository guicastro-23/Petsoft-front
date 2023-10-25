
import OpcoesHeader from "../OpcoesHeader";
import styled from 'styled-components'



const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    
    justify-content: flex-end;
`

function Header() {
    return (
        <HeaderContainer>
            <OpcoesHeader/>
        </HeaderContainer>
    )
}

export default Header