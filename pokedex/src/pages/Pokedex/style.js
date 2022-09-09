import styled from "styled-components"

export const Background = styled.body` 
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    max-width: 100%;
    margin: 5vh 30vh 0vh 30vh ;
    button:nth-child(1){
        background-color: #FECA05;
        border-radius: 50px;
        width: 10rem;
        height: 3rem;
        box-shadow: white 5px 5px 5px;
        color: #3E5CA8;
        font-size: larger;
        font-weight: bolder;
        
    }
    button:hover{
        background-color: #3E5CA8;
        color: #FECA05;
    }
     
    @media(max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr ;
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

    