import React from "react";
import styled from "styled-components";
import { useAppContext } from "../context/AppContext";
import { BsFillMoonFill, BsSunFill, BsGithub } from "react-icons/bs";

const Header = () => {
  const { theme, setTheme } = useAppContext();

  return (
    <Container theme={theme}>
      <div className="heading__wrapper">
        <h1 className="header__heading">Spacestagram</h1>
        <div className="header__links">
          <div>
            <a
              className="header__github"
              href="https://github.com/anshuman9999/spacestagram"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <BsGithub />
            </a>
          </div>
          <button
            onClick={() => {
              setTheme((theme) => (theme === "light" ? "dark" : "light"));
            }}
            className="header__tbtn"
            aria-label="change theme"
          >
            {theme === "light" ? (
              <BsFillMoonFill />
            ) : (
              <BsSunFill color="rgb(254, 190, 73)" />
            )}
          </button>
        </div>
      </div>
      <p className="header__para">
        Brought to you by NASA's Astronomy Photo of the Day (APOD) API
      </p>
    </Container>
  );
};

const Container = styled.header`
  margin-top: 2rem;
  margin-bottom: 2rem;

  & .heading__wrapper {
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & .header__heading {
      font-size: 2.5rem;
      color: ${({ theme }) => (theme === "dark" ? "#eee" : "#333")};

      @media (max-width: 640px) {
        font-size: 1.6rem;
      }
    }

    & .header__links {
      display: flex;
      align-items: center;
      gap: 1.2rem;

      & .header__github {
        cursor: pointer;
        font-size: 1.2rem;
        text-decoration: none;
        color: ${({ theme }) => (theme === "dark" ? "#eee" : "#333")};
        transition: all 0.1s ease;
      }

      & .header__github:hover {
        font-size: 1.5rem;
      }

      & .header__tbtn {
        cursor: pointer;
        font-size: 1.2rem;
      }
    }
  }

  & .header__para {
    font-size: 1rem;
    margin-top: 12px;
    font-weight: 500;
    color: ${({ theme }) => (theme === "dark" ? "#eee" : "#555")};

    @media (max-width: 640px) {
      font-size: 0.8rem;
    }
  }
`;

export default Header;
