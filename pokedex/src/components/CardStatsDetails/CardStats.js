import React, { useContext } from "react";
import { ContextDetails } from "../../context/Context";
import { ContainerStats, InformationStats } from "./styleCardStats";


function CardStats(props) {
   /*  const detailscontext=useContext(ContextDetails)
    console.log(detailscontext.detailsPokemo); */
   /*  const ListStats =
    props.dataPokemom
    &&props.dataPokemom.stats.map((item) => {
      return (
        <label key={item.id}>{item.name}</label>
      );
    }); */
    console.log(props.dataPokemom.stats);
    return(
        <ContainerStats>
            <h2>Stats</h2>
            <InformationStats>
               {/*  {props.dataPokemom&&ListStats} */}
            <label>HP:46</label>
            <label>Attack:39</label>
            <label>Defense:52</label>
            <label>Special-Attack:43</label>
            <label>Special-Defense:54</label>
            <label>Speed:54 </label>
            </InformationStats>
        </ContainerStats>
    )
    
}
export default CardStats;