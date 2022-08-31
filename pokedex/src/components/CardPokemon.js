import React from "react";
import styled from "styled-components";
import { StyleCardPokemon } from "../style"

function CardPokemon () {
    return(
        <StyleCardPokemon>
            <img alt="Imagem do Pokemon"></img>
            <button>Adicionar a Pokedex</button>
            <button>Ver Detalhes</button>
        </StyleCardPokemon>
    )
}

export default CardPokemon;