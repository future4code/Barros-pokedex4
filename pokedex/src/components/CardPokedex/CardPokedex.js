import React,{ useContext, useState } from "react";
import { StyleCard } from "../CardPokemon/style"
import { Context } from "../../context/Context"
import useRequestData from "../../hooks/useRequestData";
import { useNavigate } from "react-router-dom";


function CardPokedex () {
   
    const [data, isLoading, erro, reload, setReload] = useRequestData

    const navigate = useNavigate()

    const detailsPage = (id) => {
        navigate("/details/" + id);
      };

        return(

        <StyleCard>
            <img alt="Imagem do Pokemon"></img>
            <p>NomePokemon</p>
            <button>Remover</button>
            <button onClick={()=>detailsPage(data.id)}>View Details</button>
        </StyleCard>
        )
    }

export default CardPokedex;