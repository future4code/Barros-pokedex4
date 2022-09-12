import { StyleHeaders } from "../../components/Headers/style";
import Logo from "../../img/logo.png"
import { useNavigate } from "react-router-dom";
import * as MyRouters from "../../Rotas/Coodinator"

function Headers(props) {

  const navigate = useNavigate()

  return (
   
      <StyleHeaders>
        <img onClick={()=>MyRouters.goToHome(navigate)} src={Logo} alt="logo Pokemon"></img>
        <h1>{/* Lista de Pokemons */} {props.title}</h1>
        <div>
        {/* <button onClick={()=>MyRouters.goToPokedex(navigate)}>Pokedex </button> */}
        {props.button.Add}
        {props.button}
        </div>
      </StyleHeaders>
  
  );
}

export default Headers;