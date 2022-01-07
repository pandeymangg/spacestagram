import React from "react";
import styled from "styled-components";
import Header from "./Header";
import ImageGrid from "./ImageGrid";

const Container = () => {
  return (
    <ContainerDiv>
      <Header />
      <ImageGrid />
    </ContainerDiv>
  );
};

const ContainerDiv = styled.div`
  max-width: 1100px;
  margin: auto;
  padding: 16px;
`;

export default Container;
