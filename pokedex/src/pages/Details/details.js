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

    const [data, isLoading, erro, reload, setReload] =
    useRequestData(`${BASE_URL}`+1);

    console.log(`${BASE_URL}`+1);
    console.log(data);
   
    return(
        <>
        <Headers
        title={data.name}
        />
        <ContainerBody>
        <CarImages dataPokemom={data}/>
        <CardStats dataPokemom={data}/>
        <CardMoves dataPokemom={data}/>
        </ContainerBody>
        </>

    )

}

export default Details;