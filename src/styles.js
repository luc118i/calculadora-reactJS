import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgb(179, 178, 178);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Context = styled.div`
  background-color: #ffffff;
  width: 50%;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: center;
`;
