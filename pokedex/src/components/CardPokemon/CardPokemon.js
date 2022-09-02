import React,{ useContext } from "react";
import { StyleCard } from "../CardPokemon/style"
import pokemon1 from "../../img/poke1.png"
import { Context } from "../../context/Context"

function CardPokemon () {

    const context =useContext(Context)

    // const listPokemon = context.pokemon&&context.pokemon.map((pok)=>{
        return(
        <StyleCard>
            <img src={pokemon1} alt="Imagem do Pokemon"></img>
            <p>Pokemon</p>
            <button>Add to Pokedex</button>
            <button>View Details</button>
        </StyleCard>
        )
    }

export default CardPokemon;