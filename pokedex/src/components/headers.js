import { StyleHeaders } from "./style";
import Logo from "../img/logo.png"
import { useNavigate } from "react-router-dom";
import * as MyRouters from "../Rotas/Coodinator"

function Headers() {

  const navigate = useNavigate()

  return (
   
      <StyleHeaders>
        <img src={Logo} alt="logo Pokemon"></img>
        <h1>Lista de Pokemons</h1>
        <button onClick={() => MyRouters.goToPokedex(navigate)}>POKEDEX</button>
      </StyleHeaders>
  
  );
}

export default Headers;