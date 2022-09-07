import axios from "axios";
import React, { useState } from "react";
import CardPokemon from "../../components/CardPokemon/CardPokemon";
import Headers from "../../components/Headers/Headers";
import { BASE_URL } from "../../Constants/Constants";
import useRequestData from "../../hooks/useRequestData";
import { StyleHome } from "../../pages/Home/style"

function Home() {
  const title = "Lista de Pokemons";
  const [listPokedex, setListPokedex] = useState([])
  const [data, isLoading, erro, reload, setReload] = useRequestData(
    `${BASE_URL}`
  );
  // console.log(data);
  const ListPokemom =
    !isLoading &&
    data &&
    data.results.map((item) => {
      return (
        <CardPokemon key={item.id} namePokemom={item.name} url={item.url} idPokemom={item.id}/>
      );
    });


    return (
    <>
      <Headers title={title} />
      <StyleHome>
        {isLoading && <h3>Carregando...</h3>}
        {!isLoading && data && ListPokemom}
        {!isLoading && !data && erro}
      </StyleHome>
    </>
  );
}
export default Home;
