import React from "react";
import CardPokemon from "../../components/CardPokemon/CardPokemon";
import CarImages from "../../components/CardImagesDetails/CardImages";
import CardMoves from "../../components/CardMovesDetails/CardMoves";
import CardStats from "../../components/CardStatsDetails/CardStats";
import Headers from "../../components/Headers/headerspoke";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../Constants/Constants";
import useRequestData from "../../hooks/useRequestData";
import * as MyRouters from "../../Rotas/Coodinator"
import { Background } from "./style";

function Pokedex() {
  const title = "Pokedex";
  const navigate = useNavigate();
  

  
  

 
  

  return (
    <>
      <Headers
        button={<button onClick={()=>MyRouters.goToHome(navigate)}>Voltar</button>} 
        />
      <Background>
       
      </Background>
    </>
  );
}

export default Pokedex;