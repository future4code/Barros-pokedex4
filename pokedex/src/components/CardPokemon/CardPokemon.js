import React,{ useContext } from "react";
import { StyleCard } from "../CardPokemon/style"
import { Context } from "../../context/Context"
import useRequestData from "../../hooks/useRequestData";
import * as MyRouters from "../../Rotas/Coodinator"
import { useNavigate } from "react-router-dom";

function CardPokemon (props) {

    const navigate = useNavigate()
    const context =useContext(Context)
    const [data, isLoading, erro, reload, setReload] =
    useRequestData(`${props.url}`);
       // const listPokemon = context.pokemon&&context.pokemon.map((pok)=>{
        // console.log(!isLoading&&data&&data.sprites.front_default);
        return(
        <StyleCard>
            <img src={!isLoading&&data&&data.sprites.front_default} alt="Imagem do Pokemon"></img>
            <p>{props.namePokemom}</p>
            <button>Add to Pokedex</button>
            <button onClick={() => { MyRouters.goToDetails(navigate)}}>Detalhes</button>
        </StyleCard>
        )
    }

export default CardPokemon;