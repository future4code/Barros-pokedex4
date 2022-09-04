import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import CarImages from "../../components/CardImagesDetails/CardImages";
import CardMoves from "../../components/CardMovesDetails/CardMoves";
import CardStats from "../../components/CardStatsDetails/CardStats";
import Headers from "../../components/Headers/Headers";
import { BASE_URL } from "../../Constants/Constants";
import { Context, ContextDetails } from "../../context/Context";
import useRequestData from "../../hooks/useRequestData";
import { ContainerBody } from "./style";

function Details() {
    const title = "Nome do Pokemom"
    const pathParams = useParams();
    const [detailsPokemo, setdetailsPokemo]=useState(); 
    /* const detailscontext=useContext(ContextDetails) */
    const [data, isLoading, erro, reload, setReload] =
    useRequestData(`${BASE_URL}`+1);
    

    console.log(`${BASE_URL}`+1);
    console.log(data);
   
    return(
        <ContextDetails.Provider value={{detailsPokemo,setdetailsPokemo}}>
        <Headers
        title={!isLoading&&data&&data.name}
        />
        <ContainerBody>
        <CarImages dataPokemom={data}/>
        <CardStats dataPokemom={data}/>
        <CardMoves dataPokemom={data}/>
        </ContainerBody>
        </ContextDetails.Provider>

    )

}

export default Details;