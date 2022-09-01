import React from "react";
import { useNavigate } from "react-router-dom";
import { Background } from "./style";
import Headers from "../../components/headers";


function Pokedex () {

    const navigate = useNavigate();

    return(
        <Background>
             <Headers/>
            <h1>Pokedex</h1>
        </Background>
    )
}
export default Pokedex;