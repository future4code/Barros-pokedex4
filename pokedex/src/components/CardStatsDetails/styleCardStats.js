import styled from "styled-components";

export const ContainerStats = styled.section`
  margin: 2vw 0;
  min-width: 30vw;
  height: auto;
  font-size: 200%;
  text-align: center;
  background:linear-gradient(white 20%, #8DC7CF ) ;
  box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
  border-radius: 5px;
  transition: all 0.3s ease-out;
  border-left: 3px solid #b3404a;
  @media (max-width: 800px) {
    height: auto;
    width: 70vw;
   
  }
`;
export const InformationStats = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  label {
    margin: 1%;
  }
`;
