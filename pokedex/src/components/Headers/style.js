import styled from "styled-components";

export const StyleHeaders = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  background-color: #d30a40;
  font-size: larger;
  color: whitesmoke;
  img {
    height: 10vh;
    padding: 2vh;
  }
  img:hover {
    box-shadow: white 2px 2px 2px 2px;
    border-radius: 50px;
  }
  button {
    background-color: #feca05;
    border-radius: 50px;
    width: 10rem;
    height: 3rem;
    box-shadow: white 5px 5px 5px;
    color: #3e5ca8;
    font-size: larger;
    font-weight: bolder;
    margin: 0 0.5vw;
  }
  button:hover {
    background-color: #3e5ca8;
    color: #feca05;
    cursor: pointer;
  }
  @media (max-width: 800px) {
    flex-direction: column;
    img {
      height: 6vh;
    }
    button {
      margin: 1vh;
    }
  }
`;
