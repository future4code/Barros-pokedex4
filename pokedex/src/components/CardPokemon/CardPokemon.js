import React,{ useContext, useState } from "react";
import { StyleCard } from "../CardPokemon/style"
import { Context } from "../../context/Context"
import { BASE_URL } from "../../Constants/Constants";
import useRequestData from "../../hooks/useRequestData";
import { useNavigate } from "react-router-dom";


function CardPokemon (props) {
    const navigate = useNavigate();
    const detailsPage = (id) => {
        navigate("/details/" + id);
      };

    const context =useContext(Context)
    const [data, isLoading, erro, reload, setReload] =
    useRequestData(`${props.url}`);
       
    const [listPokedex, setListPokedex] = useState([])

        function addPokemon (id) {
            const newPok = [...listPokedex,id]        
            setListPokedex(newPok)
            }
        console.log([listPokedex])
        return(

        <StyleCard>
            <img src={!isLoading&&data&&data.sprites.front_default} alt="Imagem do Pokemon"></img>
            <p>{props.namePokemom}</p>
            <button onClick={addPokemon}>Add to Pokedex</button>
            <button onClick={()=>detailsPage(data.id)}>View Details</button>
        </StyleCard>
        )
    }

export default CardPokemon;