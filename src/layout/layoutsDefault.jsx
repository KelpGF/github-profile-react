import styled from "styled-components";

export const HeaderStyled = styled.header`
  background: #103279;
  width: 100;
`;

export const Main = styled.div`
  text-align: left;
  margin-left: 2%;
  margin-right: 2%;
`;

export const Card = styled.div`
  background: #333333;
  margin-top: 2%;
  border-radius: 5px;
  padding-left: 10px;
  padding-right: 10px;
  width: fit-content;

  a {
    color: #7197e9;
  }
`

export const ButtonStyled = styled.button`
  background-color: #d8d8d8;
  color: #229ab4;
  border-radius: 5px;
  cursor: pointer;
`

export const CardGroupRepo = styled(Card)`
  max-width: 30vw;
  margin-left: 5%;
  padding-bottom: 3%;
  float: left;
`;

export const CardRepo = styled(Card)`
  padding-top: 3px;
  background: #0f4492;
  border: 2px solid #05224d;
`;

