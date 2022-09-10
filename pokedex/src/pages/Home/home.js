import React from "react";
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
        <buttom>MORE »</buttom>
      </StyleHome>
    </>
  );
}
export default Home;
