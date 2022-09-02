import styled from "styled-components";

export const ContainerMovesDetails = styled.section`
  margin: 0 3%;
`;

export const ContainerType = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 30px 0;
  min-width: 35vw;
  padding: 5% 0;
  font-size: 200%;
  text-align: center;
  background-color: #fafafa;
  box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
  border-radius: 5px;
  transition: all 0.3s ease-out;
  border-left: 3px solid #b3404a;
  @media(max-width: 800px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    margin: 3vh 0;
    label{
        margin: 3% 0;
    }
  }
`;
export const ContainerMoves = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 200%;
  height: 48vmax;
  background-color: #fafafa;
  box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
  border-radius: 5px;
  transition: all 0.3s ease-out;
  border-left: 3px solid #b3404a;
  label {
    margin: 3%;
  }
  @media(max-width: 800px) {
    height: auto;
    text-align: center;
    margin-bottom: 20%;
    }
`;
