import React,{ useContext } from "react";
import { StyleCard } from "../CardPokemon/style"
import { Context } from "../../context/Context"
import { BASE_URL } from "../../Constants/Constants";
import useRequestData from "../../hooks/useRequestData";
import { useNavigate } from "react-router-dom";


function CardPokemon (props) {
    const navigate = useNavigate();
    const detailsPage = (id) => {
        navigate("/details/" + id);
      };

    const context =useContext(Context)
    const [data, isLoading, erro, reload, setReload] =
    useRequestData(`${props.url}`);
       // const listPokemon = context.pokemon&&context.pokemon.map((pok)=>{
        
        return(
        <StyleCard>
            <img src={!isLoading&&data&&data.sprites.front_default} alt="Imagem do Pokemon"></img>
            <p>{props.namePokemom}</p>
            <button>Add to Pokedex</button>
            <button onClick={()=>detailsPage(data.id)}>View Details</button>
        </StyleCard>
        )
    }

export default CardPokemon;