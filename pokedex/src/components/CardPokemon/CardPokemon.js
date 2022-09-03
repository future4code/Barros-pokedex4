import React,{ useContext } from "react";
import { StyleCard } from "../CardPokemon/style"
import pokemon1 from "../../img/poke1.png"
import { Context } from "../../context/Context"
import { BASE_URL } from "../../Constants/Constants";
import useRequestData from "../../hooks/useRequestData";

function CardPokemon (props) {

    const context =useContext(Context)
    const [data, isLoading, erro, reload, setReload] =
    useRequestData(`${props.url}`);
       // const listPokemon = context.pokemon&&context.pokemon.map((pok)=>{
        console.log(!isLoading&&data&&data.sprites.front_default);
        return(
        <StyleCard>
            <img src={!isLoading&&data&&data.sprites.front_default} alt="Imagem do Pokemon"></img>
            <p>{props.namePokemom}</p>
            <button>Add to Pokedex</button>
            <button>View Details</button>
        </StyleCard>
        )
    }

export default CardPokemon;