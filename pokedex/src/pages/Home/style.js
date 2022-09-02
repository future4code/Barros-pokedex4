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
        height: 12vh;
    }
    button{
        background-color: #FECA05;
        border-radius: 50px;
        width: 10rem;
        height: 2.5rem;
        box-shadow: white 5px 5px 5px;
        color: #3E5CA8;
        font-size: larger;
        font-weight: bolder;
        
    }

    @media(max-width: 800px) {
    align-items: center;
    justify-content: center;
    position: relative;
    button{
        max-height: 3vh;
        font-size: smaller;
        margin-bottom: 2vh;
    }
    img{
        margin-top: 2vh ;
    }
}
`
export const StyleHome = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    max-width: 100%;
     
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