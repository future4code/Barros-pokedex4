import React from "react";
import CardPokemon from "../../components/CardPokemon/CardPokemon";
import Headers from "../../components/Headers/Headers";
import { StyleHome } from "./style";

function Home () {
    const title ="Lista de Pokemons"
    return(
        <>
        <Headers title={title}/>
        <StyleHome>
            <CardPokemon/>
            <CardPokemon/>
            <CardPokemon/>
            <CardPokemon/>
            <CardPokemon/>
        </StyleHome>
        </>
    )
}
export default Home;