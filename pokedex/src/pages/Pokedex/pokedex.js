import React from "react";
import CardPokemon from "../../components/CardPokemon/CardPokemon";
import Headers from "../../components/Headers/Headers";
import { BASE_URL } from "../../Constants/Constants";
import useRequestData from "../../hooks/useRequestData";
import { StyleHome } from "./style";
import { Background } from "./style";

function Pokedex () {
    return(
        <Background>
            <h1>Pokedex</h1>
        </Background>
    )
}
export default Pokedex;