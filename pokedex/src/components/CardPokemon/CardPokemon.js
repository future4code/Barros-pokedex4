import React, { useContext, useState } from "react";
import { StyleCard } from "../CardPokemon/style"
import { Context } from "../../context/Context"
import useRequestData from "../../hooks/useRequestData";
import { useNavigate } from "react-router-dom";


function CardPokemon(props) {
    const navigate = useNavigate();
    const detailsPage = (id) => {
        navigate("/details/" + id);
    };

    const context = useContext(Context)
    const [data, isLoading, erro, reload, setReload] =
        useRequestData(`${props.url}`);

    const [listPokedex, setListPokedex] = useState([])

    function addPokemon(id, name, photo) {
        const checkPokedex = listPokedex.filter((pok) => {
            if (pok.name === name) {
                return "Você já capturou este Pokemon!"
            } else {
                return false
            }
        })

        let newPok = [...listPokedex]

        if (checkPokedex.lenght === 0){
            newPok = [...newPok, {id, name, photo}]
            localStorage.setItem("pokedex", JSON.stringify(newPok))
            setListPokedex(newPok)
        }else {
            const otherPoke = listPokedex.map((pok)=>{
                if (pok.name === name){
                    return {...pok, name, photo}
                }else {
                   return pok
                }
            })
        }
        setListPokedex(newPok)
        localStorage.setItem("pokedex", JSON.stringify())
        alert("Enviado para Pokedex")
        }
        console.log([listPokedex])
    
    
    return (
        <StyleCard>
            <img src={!isLoading && data && data.sprites.other.home.front_default} alt="Imagem do Pokemon"></img>
            <p>{props.namePokemom}</p>
            <button onClick={addPokemon}>Add to Pokedex</button>
            <button onClick={() => detailsPage(data.id)}>View Details</button>
        </StyleCard>
    )
}

export default CardPokemon;