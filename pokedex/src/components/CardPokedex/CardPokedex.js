import React,{ useContext, useState } from "react";
import { StyleCard } from "../CardPokemon/style"
import { Context } from "../../context/Context"
import useRequestData from "../../hooks/useRequestData";
import { useNavigate } from "react-router-dom";
import { StyleHome } from "../../pages/Home/style";


function CardPokedex ({newListPokemons,addPokedex}) {
    const navigate = useNavigate()

    const detailsPage = (id) => {
        navigate("/details/" + id);
      };

    const listPokemon = JSON.parse(localStorage.getItem("homePokemons"))

     return(
        <>
        {listPokemon !== null && listPokemon.length > 0 ? listPokemon.map((poke,index) => {
            return ( 
                <StyleHome
                key={poke.name}
                style={poke.types[0].type.name === "grass" ? {backgroundImage: 'linear-gradient(to bottom  , #84ed6829 20%, #49b675 60%, #005221)'} :
                  poke.types[0].type.name === "fire" ? {backgroundImage: 'linear-gradient(to bottom , #ff7f0099 20%, yellow 60%, #ff7f00)'} :
                  poke.types[0].type.name === "water" ? {backgroundImage: 'linear-gradient(to bottom , #85e8ff29 10%, #0d67d2 70%, #4354e9)'} :
                  poke.types[0].type.name === "normal" ? {backgroundImage: 'linear-gradient(to bottom , #fcf5d629 10%, #b5840d 70%, #000)'}: 
                  poke.types[0].type.name === "bug" ? {backgroundImage: 'linear-gradient(to bottom , #78866b29 10%, #fcf5d6 70%, #78866b )'}:{}
              }>
              </StyleHome> 
            )}) 
           : newListPokemons && newListPokemons.map((poke,index)=>{
            return (
              <StyleHome
                key={poke.name}
                style={poke.types[0].type.name === "grass" ? {backgroundImage: 'linear-gradient(to bottom  , #84ed6829 20%, #49b675 60%, #005221)'} :
                  poke.types[0].type.name === "fire" ? {backgroundImage: 'linear-gradient(to bottom , #ff7f0099 20%, yellow 60%, #ff7f00)'} :
                  poke.types[0].type.name === "water" ? {backgroundImage: 'linear-gradient(to bottom , #85e8ff29 10%, #0d67d2 70%, #4354e9)'} :
                  poke.types[0].type.name === "normal" ? {backgroundImage: 'linear-gradient(to bottom , #fcf5d629 10%, #b5840d 70%, #000)'}: 
                  poke.types[0].type.name === "bug" ? {backgroundImage: 'linear-gradient(to bottom , #78866b29 10%, #fcf5d6 70%, #78866b )'}:{}
              }>
              </StyleHome> 
            )})}
          </>
        )
      }

      export default CardPokedex;