import styled from "styled-components";

export const ContainerBody = styled.body`
    display: flex;
    max-width: 100%;

    @media(max-width: 800px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    
  }
`