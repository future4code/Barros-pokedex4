import React, { useState, useEffect } from "react";
import Routers from "./Rotas/Routers";
import axios from "axios";
import { Context } from "./context/Context"

function App() {

const [pokemon, setPokemon] = useState([])
const [photoPokemon, setPhotoPokemon] = useState([])

function getPokemon (){
  axios.get("https://pokeapi.co/api/v2/pokemon/")
  .then((response) => {
    setPokemon(response.data.results);
    console.log(pokemon)

  })
  .catch((erro) => {
    console.log(erro.response);
  });
};

function getPhotoPokemon (){
  axios.get("https://pokeapi.co/api/v2/pokemon/")
  .then((response) => {
    setPokemon(response.data);
    console.log(pokemon)

  })
  .catch((erro) => {
    console.log(erro.response);
  });
};

useEffect(() => {
  getPokemon();
}, []);

  return (
    <Context.Provider value={{pokemon, setPokemon}}>
      <Routers/>
    </Context.Provider>
  );
}

export default App;
