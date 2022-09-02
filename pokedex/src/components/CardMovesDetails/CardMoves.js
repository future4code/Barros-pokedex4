import React from "react";
import { ContainerMoves, ContainerMovesDetails, ContainerType } from "./styleCardMoves";



function CardMoves() {



    return(
        <ContainerMovesDetails>
            <ContainerType>
            <label>Type 1</label>
            <label>Type 2</label>
            </ContainerType>
            <ContainerMoves>
            <h2>Moves</h2>
            <label>HP:46</label>
            <label>Attack:39</label>
            <label>Defense:52</label>
            <label>Special-Attack:43</label>
            
            </ContainerMoves>
        </ContainerMovesDetails>
    )
    
}
export default CardMoves;