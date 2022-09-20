
import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CarImages from "../../components/CardImagesDetails/CardImages";
import CardMoves from "../../components/CardMovesDetails/CardMoves";
import CardStats from "../../components/CardStatsDetails/CardStats";
import Headers from "../../components/Headers/Headers";
import { BASE_URL } from "../../Constants/Constants";
import  GlobalStateContext  from "../../context/GlobalStateContext";
import useRequestData from "../../hooks/useRequestData";
import * as MyRouters from "../../Rotas/Coodinator";
import { ContainerBody } from "./style";

function Details() {
  const title = "Nome do Pokemom";
  const { pokemomPokedex, setPokemomPokedex } = useContext(GlobalStateContext);
  const navigate = useNavigate();
  const pathParams = useParams();
  const idPokemom = pathParams.id;
  const [data, isLoading, erro] = useRequestData(`${BASE_URL}` + idPokemom);
  function addPokedex(id, data) {
    const newPokemonPokedex = [...pokemomPokedex];

    const existePokemon =
      pokemomPokedex &&
      pokemomPokedex.some((item) => {
        return id === item.id;
      });

    if (existePokemon) {
      alert(`O pokemon ${data.name} já esta na Pokedex`);
    } else {
      newPokemonPokedex.push({
        id,
        nome: data.name,
        photo: data.sprites.other.dream_world.front_default,
        stats: data.stats,
      });
    }
    setPokemomPokedex(newPokemonPokedex);
    localStorage.setItem("pokedex", JSON.stringify(pokemomPokedex));
    console.log(localStorage.getItem("pokedex"));
    MyRouters.goToPokedex(navigate);
  }

  console.log(pokemomPokedex);

  return (
    <>
      <Headers
        title={!isLoading && data && data.name}
        buttonAdd={
          <button onClick={() => addPokedex(idPokemom, data)}>
            Add/Pokedex
          </button>
        }
        button={
          <button onClick={() => MyRouters.goToHome(navigate)}>Voltar</button>
        }
      />
      <ContainerBody>
        {!isLoading && data && <CarImages dataPokemom={data} />}
        {!isLoading && data && <CardStats dataPokemom={data} />}
        {!isLoading && data && <CardMoves dataPokemom={data} />}
      </ContainerBody>
    </>
  );
}

export default Details;

