import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Header from "./Header";
import ImageGrid from "./ImageGrid";

const Container = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <ContainerDiv theme={theme}>
      <Header />
      <ImageGrid />
    </ContainerDiv>
  );
};

const ContainerDiv = styled.div`
  background-color: ${({ theme }) =>
    theme === "light" ? "#f4f4f5" : "#1c1c1c"};
  max-width: 1100px;
  margin: auto;
  padding: 16px;
  transition: background-color 0.2s ease;
`;

export default Container;
