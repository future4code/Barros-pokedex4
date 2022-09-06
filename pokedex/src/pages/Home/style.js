import styled from "styled-components"

export const StyleHome = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    justify-content: center;
    img{ max-width: 8vw
    }    
    @media(max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr ;
    max-width: 90%;
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