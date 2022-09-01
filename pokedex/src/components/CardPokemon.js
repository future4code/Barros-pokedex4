import React from "react";
import styled from "styled-components";
import { StyleCard } from "./style";
import pokemon from "../img/poke1.png"

function CardPokemon () {
    return(
        <StyleCard>
            <img src={pokemon} alt="Imagem do Pokemon"></img>
            <p>CHARMANDER</p>
            <button>Add to Pokedex</button>
            <button>View Details</button>
        </StyleCard>
    )
}

export default CardPokemon;