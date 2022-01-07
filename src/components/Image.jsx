import React from "react";
import { AiOutlineCalendar, AiFillHeart } from "react-icons/ai";
import styled from "styled-components";
// import { trimExplanation } from "../utils/trimExplanation";

const Image = ({ photo, isLiked, setLiked }) => {
  return (
    <SingleImage>
      <img className="single-image__img" src={photo.url} />
      <div className="single-image__details">
        <p className="single-image__details-title">{photo.title}</p>
        <p className="single-image__details-date">
          <AiOutlineCalendar size={14} style={{ marginTop: "-2px" }} />
          <span>{photo.date}</span>
        </p>
        <p className="single-image__details-desc">{photo.explanation}</p>
      </div>
      <div className="single-image__details-like">
        <button onClick={() => setLiked(isLiked)}>
          <AiFillHeart
            color={isLiked ? "red" : "#333"}
            style={{ marginTop: -2 }}
          />
          <span>{isLiked ? "Liked!" : "Like"}</span>
        </button>
      </div>
    </SingleImage>
  );
};

const SingleImage = styled.div`
  width: 90%;
  overflow: hidden;
  position: relative;
  border-radius: 10px;
  margin-bottom: 10px;
  background-color: #fff;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);

  & .single-image__img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 50%;
    overflow: hidden;
    object-fit: cover;
  }

  & .single-image__details {
    position: absolute;
    overflow: hidden;
    top: 50%;
    width: 100%;
    height: 45%;
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    & .single-image__details-title {
      font-size: 18px;
      font-weight: 600;
      color: #333;
    }

    & .single-image__details-date {
      font-size: 14px;
      font-weight: 600;
      color: #333;
      display: flex;
      align-items: center;
      gap: 4px;
    }

    & .single-image__details-desc {
      font-size: 16px;
      font-weight: 500;
      color: #555;

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 7;
      line-clamp: 7;
      -webkit-box-orient: vertical;

      @media (max-width: 1200px) {
        -webkit-line-clamp: 5;
        line-clamp: 5;
      }

      @media (max-width: 640px) {
        -webkit-line-clamp: 8;
        line-clamp: 8;
      }
    }
  }

  & .single-image__details-like {
    padding-left: 8px;
    position: absolute;
    bottom: 5px;

    & button {
      cursor: pointer;
      padding: 0.2rem 0.1rem;
      font-size: 18px;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 4px;
      background-color: #fff;
      outline: none;
      border: none;
    }
  }

  &::before {
    content: "";
    display: block;
    height: 0;
    width: 0;
    padding-bottom: calc(5 / 3 * 100%);

    @media (max-width: 640px) {
      padding-bottom: calc(5 / 3 * 100%);
    }
  }

  @media (max-width: 640px) {
    width: 100%;
  }
`;

export default Image;
