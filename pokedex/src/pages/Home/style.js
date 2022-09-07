import styled from "styled-components"

export const StyleHome = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    max-width: 100%;
    margin: 5vh 30vh 5vh 30vh ;
     
    @media(max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr ;
    text-align: center;
    
    
    button{
        max-height: 3vh;
        max-width: 12vh;
        font-size: 0.6rem;
    }
    img{
        min-height: 15vh;
        min-width: 10vh;
    }
}
`