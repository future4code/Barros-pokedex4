import React, { useState } from "react";
import CardPokemon from "../../components/CardPokemon/CardPokemon";
import Headers from "../../components/Headers/Headers";
import { BASE_URL } from "../../Constants/Constants";
import useRequestData from "../../hooks/useRequestData";
import { StyleHome } from "./style";
import * as MyRouters from "../../Rotas/Coodinator"
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const title = "Lista de Pokemons";

  const [data, isLoading, erro, reload, setReload] = useRequestData(
    `${BASE_URL}`
  );
  
  const ListPkemom =
    !isLoading &&
    data &&
    data.results.map((item) => {
      return (
        <CardPokemon key={item.id} namePokemom={item.name} url={item.url} idPokemom={item.id}/>
      );
    });


  return (
    <>
      <Headers title={title} button={<button onClick={()=>MyRouters.goToPokedex(navigate)}>Pokedex </button>} />

      <StyleHome>
        {isLoading && <h3>Carregando...</h3>}
        {!isLoading && data && ListPkemom}
        {!isLoading && !data && erro}
      </StyleHome>
      <StyleButtonHome>
        <button onClick={begin}><img src={icone3} alt="Botão início"></img> BEGIN</button>
        <button onClick={back}><img src={icone3} alt="Botão voltar"></img> BACK</button>
        <button onClick={next}>NEXT <img src={icone2} alt="Botão avançar"></img></button>
      </StyleButtonHome>

    </>
  );
}
export default Home;
