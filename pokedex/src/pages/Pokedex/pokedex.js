import React, { useContext } from "react";
import CardPokedex from "../../components/CardPokedex/CardPokedex";
import Headers from "../../components/Headers/headerspoke";
import { useNavigate } from "react-router-dom";
import { Background } from "./style";
import { GlobalStateContext } from "../../context/GlobalStateContext";



function Pokedex() {
  const title = "Pokedex";
  const navigate = useNavigate()

  const detailsPage = (id) => {
      navigate("/details/" + id);
    };
  const {pokemomPokedex,setPokemomPokedex} = useContext(GlobalStateContext);

  const removePokemon = (data)=>{
    const newPokemonPokedex = [...pokemomPokedex];
    const pokemonIndex = pokemomPokedex.findIndex((item)=>item.id === data.id);
    newPokemonPokedex.splice(pokemonIndex,1);
    setPokemomPokedex(newPokemonPokedex);

  }
  
  console.log(pokemomPokedex);
  const ListPkemon =
    pokemomPokedex.map((item) => {
      return (
        <CardPokedex key={item.id} namePokemom={item.name} url={item.photo} 
        buttonRemove={<button onClick={()=>{removePokemon(item)}}>Remover</button>} 
        buttonView={<button onClick={()=>detailsPage(item.id)}>View Details</button>}/>
      );

    });

  return (
    <>
      <Headers title={title} />
      <Background>
        {ListPkemon}
      </Background>
    </>
  );
}

export default Pokedex;