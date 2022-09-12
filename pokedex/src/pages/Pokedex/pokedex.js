import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import GlobalStateContext from "../../context/GlobalStateContext";
import CardPokedex from "../../components/CardPokedex/CardPokedex";
import { StylePokedex } from "./style";
import Headers from "../../components/Headers/Headers"
import { BASE_URL } from "../../Constants/Constants";
import useRequestData from "../../hooks/useRequestData";
import * as MyRouters from "../../Rotas/Coodinator"

function Pokedex() {
  const title = "Pokedex";
  const pathParams = useParams();
  const idPokemom = pathParams.id;
  const navigate = useNavigate()
  const [data, isLoading] = useRequestData(`${BASE_URL}`+idPokemom);

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
  //console.log(pokemomPokedex);

  const ListPkemon =
    pokemomPokedex.map((item) => {
      return (
        <CardPokedex key={item.id} namePokemom={item.nome} url={item.photo} 
        buttonRemove={<button onClick={()=>{removePokemon(item)}}>Remover</button>} 
        buttonView={<button onClick={()=>detailsPage(item.id)}>View Details</button>}/>
      );

    });

    
  return (
    <>
        <Headers
        title={title}
        button={<button onClick={()=>MyRouters.goToHome(navigate)}>Voltar</button>} 
        />
      <StylePokedex>
        {ListPkemon}
      </StylePokedex>
    </>
  );
}

export default Pokedex;