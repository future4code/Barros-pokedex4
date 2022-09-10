import React from "react";
import Routers from "./Rotas/Routers";
import { StyleContainer } from "./style";
import GlobalState from "./context/GlobalState";

function App() {

/* const [pokemon, setPokemon] = useState([])
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
 */
  return (
    <StyleContainer>
    <GlobalState>
      <Routers/>
    </GlobalState>
    </StyleContainer>
  );
}

export default App;
