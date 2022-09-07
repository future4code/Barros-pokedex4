import React from "react";
import { ImageCardDetails } from "./styleCardImages";

function CarImages(props) {
  return (
    <div>
      <ImageCardDetails>
        <img src={props.dataPokemom.sprites.front_default} alt="pokemom" />
        <img src={props.dataPokemom.sprites.back_default} alt="pokemom" />
      </ImageCardDetails>
    </div>
  );
}
export default CarImages;
