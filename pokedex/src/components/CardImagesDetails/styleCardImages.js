import styled from "styled-components";

export const ImageCardDetails = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;

  img {
    background-color: #fafafa;
    margin: 26px 30px;
    padding: 1.3vw;
    background: linear-gradient(white, #8dc7cf);
    box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
    border-radius: 5px;
    transition: all 0.3s ease-out;
    width: 14.5vw;
    /* max-width: 10vw; */
    min-height: 5vh;
    max-height: 28.5vh;
    border-left: 3px solid #b3404a;
  }

  @media (max-width: 800px) {
    img {
      min-width: 70vw;
    }
  }
`;
