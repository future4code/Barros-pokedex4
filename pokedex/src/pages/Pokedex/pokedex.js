import React from "react";
import CardPokemon from "../../components/CardPokemon/CardPokemon";
import Headers from "../../components/Headers/headerspoke";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../Constants/Constants";
import useRequestData from "../../hooks/useRequestData";
import * as MyRouters from "../../Rotas/Coodinator"
import { Background } from "./style";

function Pokedex() {
  const title = "Pokedex";
  const navigate = useNavigate();
  const [data, isLoading, erro, reload, setReload] = useRequestData(
    `${BASE_URL}`
  );
  console.log(data);
  const ListPkemom =
    !isLoading &&
    data &&
    data.results.map((item) => {
      return (
        <CardPokemon key={item.id} namePokemom={item.name} url={item.url} />
      );
    });

  return (
    <>
      <Headers
        button={<button onClick={()=>MyRouters.goToHome(navigate)}>Voltar</button>} 
        />
      <Background>
        {isLoading && <h3>Carregando...</h3>}
        {!isLoading && data && ListPkemom}
        {!isLoading && !data && erro}
      </Background>
    </>
  );
}

export default Pokedex;