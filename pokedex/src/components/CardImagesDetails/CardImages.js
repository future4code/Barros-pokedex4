import React from "react";
import { ImageCardDetails } from "./styleCardImages";

function CarImages(props) {
  console.log(props.dataPokemom.sprites.other);
  return (
    <div>
      <ImageCardDetails>
        <img src={props.dataPokemom.sprites.other.dream_world.front_default} alt="pokemom" />
        <img src={props.dataPokemom.sprites.other.home.front_default} alt="pokemom" />
      </ImageCardDetails>
    </div>
  );
}
export default CarImages;
