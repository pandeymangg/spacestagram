import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <h1 className="header__heading">Spacestagram</h1>
      <p className="header__para">
        Brought to you by NASA's Astronomy Photo of the Day (APOD) API
      </p>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;

  & .header__heading {
    font-size: 2.5rem;
    color: #333;
  }

  & .header__para {
    font-size: 1rem;
    margin-top: 12px;
    font-weight: 500;
    color: #555;
  }
`;

export default Header;
