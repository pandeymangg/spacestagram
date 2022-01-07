import React from "react";
import { AiOutlineCalendar, AiTwotoneLike } from "react-icons/ai";
import styled from "styled-components";
import { trimExplanation } from "../utils/trimExplanation";

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
        <p className="single-image__details-desc">
          {trimExplanation(photo.explanation)}
        </p>
      </div>
      <div className="single-image__details-like">
        <button onClick={() => setLiked(isLiked)}>
          <AiTwotoneLike color={isLiked ? "green" : "#333"} />
          <span>Like</span>
        </button>
      </div>
    </SingleImage>
  );
};

const SingleImage = styled.div`
  width: 100%;
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

      @media (max-width: 640px) {
        font-size: 18px;
      }
    }
  }

  & .single-image__details-like {
    padding-left: 8px;
    position: absolute;
    bottom: 5px;

    & button {
      cursor: pointer;
      padding: 0.5rem 0;
      font-size: 16px;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 4px;
      background-color: #fff;
      outline: none;
      border: none;
      border-radius: 2px;
      /* box-shadow: 1px 1px 2px #333; */
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
