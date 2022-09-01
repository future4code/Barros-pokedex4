import React from "react";
import { ContainerStats, InformationStats } from "./styleCardStats";


function CardStats() {



    return(
        <ContainerStats>
            <h2>Stats</h2>
            <InformationStats>
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