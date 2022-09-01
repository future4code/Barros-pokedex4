import React from "react";
import styled from "styled-components";
import CardPokemon from "../../components/CardPokemon";
import Headers from "../../components/headers";

function Home () {
    const title ="Lista de Pokemons"
    return(
        <>
        <Headers title={title}/>
        {/* <CardPokemon/> */}
        </>
    )
}
export default Home;