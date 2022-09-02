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
        margin: 30px 30px;
        padding: 2vw;
        background-color: #3566AC;
        box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
        border-radius: 5px;
        transition: all 0.3s ease-out;
        width: 10vw;
        border-left: 3px solid #b3404a;
        object-fit: contain;
    }
                                                            
    p {
        background:linear-gradient(white, #FECA05 ) ;
        width: 10vw;

    }
        
       @media(max-width: 800px) {
        grid-template-columns: 1fr 1fr 1fr;
        align-items: center;
        justify-content: center;
        position: relative;
        p{
            width: 12vh;
            font-size: smaller;
        }
    }
    `