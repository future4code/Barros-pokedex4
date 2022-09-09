import React, { useEffect, useState } from "react";
import CardPokemon from "../../components/CardPokemon/CardPokemon";
import CarImages from "../../components/CardImagesDetails/CardImages";
import CardMoves from "../../components/CardMovesDetails/CardMoves";
import CardStats from "../../components/CardStatsDetails/CardStats";
import CardPokedex from "../../components/CardPokedex/CardPokedex";
import Headers from "../../components/Headers/headerspoke";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../Constants/Constants";
import useRequestData from "../../hooks/useRequestData";
import * as MyRouters from "../../Rotas/Coodinator"
import { Background } from "./style";
import { StyleHome } from "../Home/style";
import { StyleCard } from "../../components/CardPokemon/style";

function Pokedex() {
  const title = "Pokedex";
  const navigate = useNavigate();
  const [pokedexPokemons, setPokedexPokemons] = useState([]);
  const [homePokemons, setHomePokemons] = useState([])
  const [refreshScreen, setRefreshScreen] = useState(0)

  const listPokedex = JSON.parse(localStorage.getItem("listPokedex"));
  const listPokemonHome = JSON.parse(localStorage.getItem("homePokemon"));
  console.log(homePokemons)
  
useEffect( ()=>{
  if(listPokedex !== null) {
    setPokedexPokemons(listPokedex);
  }
  if(listPokemonHome !== null){
    return setHomePokemons(listPokemonHome)
  }
},[refreshScreen]);


let addListpokeHome;
const removePokemon = (pokemon,indexPokemon) => {
  setRefreshScreen(refreshScreen+1);
  let newList = [...pokedexPokemons];
  pokedexPokemons.filter( (poke) => {
    if(poke.name === pokemon.name) {
      addListpokeHome = [...homePokemons,pokemon]
      newList.splice(indexPokemon,1);
      localStorage.setItem("listPokedex",JSON.stringify(newList));
      setPokedexPokemons(newList);
    }
  });
  setHomePokemons(addListpokeHome);
  localStorage.setItem("homePokemons",JSON.stringify(addListpokeHome));
};

return (
  <>
  <Headers title={title} />
        {listPokedex !== null && listPokedex.length > 0  && pokedexPokemons.length < 1 ? listPokedex.map((poke,index)=>{
        return (
          <StyleCard
          key={poke.name}
          style={poke.types[0].type.name === "grass" ? {backgroundImage: 'linear-gradient(to bottom  , #84ed6829 20%, #49b675 60%, #005221)'} :
          poke.types[0].type.name === "fire" ? {backgroundImage: 'linear-gradient(to bottom , #ff7f0099 20%, yellow 60%, #ff7f00)'} :
          poke.types[0].type.name === "water" ? {backgroundImage: 'linear-gradient(to bottom , #85e8ff29 10%, #0d67d2 70%, #4354e9)'} :
          poke.types[0].type.name === "normal" ? {backgroundImage: 'linear-gradient(to bottom , #fcf5d629 10%, #b5840d 70%, #000)'}: 
          poke.types[0].type.name === "bug" ? {backgroundImage: 'linear-gradient(to bottom , #78866b29 10%, #fcf5d6 70%, #78866b )'}:{}
        }></StyleCard>
        )})
        :
        pokedexPokemons.map((poke,index)=>{
          return (
            <StyleCard
            key={poke.name}
          style={poke.types[0].type.name === "grass" ? {backgroundImage: 'linear-gradient(to bottom  , #84ed6829 20%, #49b675 60%, #005221)'} :
          poke.types[0].type.name === "fire" ? {backgroundImage: 'linear-gradient(to bottom , #ff7f0099 20%, yellow 60%, #ff7f00)'} :
          poke.types[0].type.name === "water" ? {backgroundImage: 'linear-gradient(to bottom , #85e8ff29 10%, #0d67d2 70%, #4354e9)'} :
          poke.types[0].type.name === "normal" ? {backgroundImage: 'linear-gradient(to bottom , #fcf5d629 10%, #b5840d 70%, #000)'}: 
          poke.types[0].type.name === "bug" ? {backgroundImage: 'linear-gradient(to bottom , #78866b29 10%, #fcf5d6 70%, #78866b )'}:{}
        }>
          <button onClick={ ()=> removePokemon(poke,index)}>Remover</button>
          <button onClick={ ()=> MyRouters.goToDetails(navigate,poke.name)}>Detalhes</button>

        </StyleCard> )})
}
</>
  );
}
export default Pokedex;

