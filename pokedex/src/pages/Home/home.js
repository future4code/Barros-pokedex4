import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import CardPokemon from "../../components/CardPokemon";
import Headers from "../../components/headers";
import { StyleHome } from "./style";

function Home () {

const navigate = useNavigate();

    return(
        <>
        <Headers/>
        <StyleHome>
            <CardPokemon/>
            <CardPokemon/>
            <CardPokemon/>
            <CardPokemon/>
            <CardPokemon/>
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