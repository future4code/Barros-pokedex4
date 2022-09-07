import React from "react";
import { useParams } from "react-router-dom";
import CarImages from "../../components/CardImagesDetails/CardImages";
import CardMoves from "../../components/CardMovesDetails/CardMoves";
import CardStats from "../../components/CardStatsDetails/CardStats";
import Headers from "../../components/Headers/Headers";
import { BASE_URL } from "../../Constants/Constants";
import useRequestData from "../../hooks/useRequestData";
import { ContainerBody } from "./style";

function Details() {
    const title = "Nome do Pokemom"
    const pathParams = useParams();
    const idPokemom = pathParams.id;
    const [data, isLoading, erro] =
    useRequestData(`${BASE_URL}`+idPokemom);
      
    return(
        <>
        <Headers
        title={!isLoading&&data&&data.name}
        />
        <ContainerBody>
        {!isLoading&&data &&<CarImages dataPokemom={data}/>}
        {!isLoading&&data &&<CardStats dataPokemom={data}/>}
        {!isLoading&&data &&<CardMoves dataPokemom={data}/>}
        </ContainerBody>
        </>

    )

}

export default Details;