import styled from "styled-components"

export const StyleHeaders = styled.div`
    display: flex;  
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    background-color: #D30A40;
    font-size: larger;
    color: whitesmoke;
    img{
        height: 10vh;
    }
    button{
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
    button{
        margin: 1vh;
    }
    }
`
