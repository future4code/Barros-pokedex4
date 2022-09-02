import styled from "styled-components"

//////////////////////////////////////////////////////////////////////////////////// HEADERS

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
`

//////////////////////////////////////////////////////////////////////////////////// CARD

export const StyleCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    button {
        background-color: #D30A40;
        border-radius: 10px;
        width: 8rem;
        height: 2rem;
        box-shadow: white 5px 5px 5px;
        color: whitesmoke;
        font-weight: bold;
    }
    button:hover{
        background-color: #FECA05;
        color: #D30A40;
    }
     
    img {
        height: 10vw;
        width: 7vw;
        box-shadow: 2px 2px 2px 2px;
        border-radius: 1vw;
        margin: 2vw;
        object-fit: contain;
        background-color: #f6e7ad;
    }
                                                            
    p {
        background:linear-gradient(white, #FECA05 ) ;
        font-style: italic;
        font-family: cursive;
        width: 8vw;
    }
    `