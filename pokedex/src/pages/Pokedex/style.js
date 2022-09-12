import styled from "styled-components"

export const StylePokedex = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    height: 100vh;
    margin: 5vh 30vh 0vh 30vh ;
        
    @media(max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr ;
    align-items: flex-start;
    text-align: center;
    margin: 0;
    button{
        max-height: 3vh;
        max-width: 12vh;
        font-size: 0.6rem;
    }
    img{
        height: 15vh;
        width: 10vh;
    }
}
`
export const StyleButtonHome = styled.div`
    display: flex;  
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    background-color: #D30A40;
    font-size: larger;
    color: whitesmoke;
    button{
        background-color: #FECA05;
        border-radius: 50px;
        width: 10rem;
        height: 2rem;
        box-shadow: white 5px 5px 5px;
        font-size: large;
        font-weight: bolder;
        margin: 2vw;
    }
    button:hover{
        background-color: #3E5CA8;
        color: #FECA05;
    }
`