import React from "react";
import styled from "styled-components";
import { useAppContext } from "../context/AppContext";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";

const Header = () => {
  const { theme, setTheme } = useAppContext();

  return (
    <Container theme={theme}>
      <div className="heading__wrapper">
        <h1 className="header__heading">Spacestagram</h1>
        <div
          onClick={() => {
            setTheme((theme) => (theme === "light" ? "dark" : "light"));
          }}
          className="heading__btn"
        >
          {theme === "light" ? (
            <BsFillMoonFill />
          ) : (
            <BsSunFill color="rgb(254, 190, 73)" />
          )}
        </div>
      </div>
      <p className="header__para">
        Brought to you by NASA's Astronomy Photo of the Day (APOD) API
      </p>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;

  & .heading__wrapper {
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & .heading__btn {
      cursor: pointer;
      font-size: 16px;
    }

    & .header__heading {
      font-size: 2.5rem;
      color: ${({ theme }) => (theme === "dark" ? "#eee" : "#333")};
    }
  }

  & .header__para {
    font-size: 1rem;
    margin-top: 12px;
    font-weight: 500;
    color: ${({ theme }) => (theme === "dark" ? "#eee" : "#555")};
  }
`;

export default Header;
