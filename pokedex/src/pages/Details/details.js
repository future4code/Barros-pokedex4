import React from "react";
import CarImages from "../../components/CardImagesDetails/CardImages";
import CardMoves from "../../components/CardMovesDetails/CardMoves";
import CardStats from "../../components/CardStatsDetails/CardStats";
import Headers from "../../components/headers";
import { ContainerBody } from "./style";

function Details() {
    const title = "Nome do Pokemom"
      
   
    return(
        <>
        <Headers
        title={title}
        />
        <ContainerBody>
        <CarImages/>
        <CardStats/>
        <CardMoves/>
        </ContainerBody>
        </>

    )

}

export default Details;