import React, { useCallback, useEffect, useState } from "react";
import { AiOutlineCalendar, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { RiFileCopyLine } from "react-icons/ri";
import { BsCheckAll } from "react-icons/bs";
import styled from "styled-components";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useSelector } from "react-redux";
import { useActions } from "../hooks/useActions";
import { photoLikeToggled } from "../store/actions";

const Image = ({ photo }) => {
  const theme = useSelector((state) => state.theme);
  const [showLikeIcon, setShowLikeIcon] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const likedPhotos = useSelector((state) => state.likedPhotos);
  const [isLiked, setIsLiked] = useState(likedPhotos.includes(photo.title));
  const actions = useActions({
    photoLikeToggled: photoLikeToggled,
  });

  let likeIconTimer = null;
  let copyIconTimer = null;

  useEffect(() => {
    return () => {
      clearTimeout(likeIconTimer);
      clearTimeout(copyIconTimer);
    };
  }, []);

  const likeHandler = useCallback(() => {
    setIsLiked(!isLiked);

    if (!isLiked) {
      setShowLikeIcon(true);
      likeIconTimer = setTimeout(() => setShowLikeIcon(false), 1000);
    }

    actions.photoLikeToggled(!isLiked, photo.title);
  }, [isLiked]);

  const copyHandler = () => {
    navigator.clipboard.writeText(photo.url);
    setLinkCopied(true);
    likeIconTimer = setTimeout(() => setLinkCopied(false), 2000);
  };

  return (
    <SingleImage theme={theme} showLikeIcon={showLikeIcon} loaded={loaded}>
      <img
        className="single-image__img"
        src={photo.url}
        onLoad={() => setLoaded(true)}
        alt={photo.title}
      />

      {!loaded ? (
        <div className="single-image__placeholder">
          <SkeletonTheme
            baseColor={theme === "light" ? "#ebebeb" : "#202020"}
            highlightColor={theme === "light" ? "#f5f5f5" : "#444"}
          >
            <Skeleton width={"100%"} height={"100%"} />
          </SkeletonTheme>
        </div>
      ) : null}

      <div className="single-image__img-icon">
        <AiFillHeart color="red" size={60} />
      </div>

      <div className="single-image__details">
        <p className="single-image__details-title">{photo.title}</p>
        <p className="single-image__details-date">
          <AiOutlineCalendar size={14} style={{ marginTop: "-2px" }} />
          <span>{photo.date}</span>
        </p>
        <p className="single-image__details-desc">{photo.explanation}</p>
      </div>

      <div className="single-image__details-like">
        <button
          aria-label="like button"
          className="like-btn"
          onClick={likeHandler}
        >
          {isLiked ? (
            <AiFillHeart size={24} color="red" style={{ marginTop: -2 }} />
          ) : (
            <AiOutlineHeart
              size={24}
              color={theme === "light" ? "#333" : "#eee"}
              style={{ marginTop: -2 }}
            />
          )}
        </button>
        <button aria-label="copy button" onClick={copyHandler}>
          {linkCopied ? (
            <BsCheckAll size={24} color="green" />
          ) : (
            <RiFileCopyLine />
          )}
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
  background-color: ${({ theme }) => (theme === "light" ? "#fff" : "#1c1b22")};
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  border: ${({ theme }) => theme === "dark" && "2px solid #24393d"};

  & .single-image__img-icon {
    opacity: ${({ _, showLikeIcon }) => (showLikeIcon ? 1 : 0)};
    transform: scale(${({ _, showLikeIcon }) => (showLikeIcon ? 1.5 : 1)});
    transition: all 0.2s ease;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    background: ${({ theme }) =>
      theme === "light" ? "rgba(85, 85, 85, 0.2)" : "rgba(0, 0, 0, 0.2)"};
    z-index: ${({ _, showLikeIcon }) => showLikeIcon && 10};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .single-image__placeholder {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 50%;
    overflow: hidden;
  }

  & .single-image__img {
    display: ${({ _, __, loaded }) => (loaded ? "block" : "none")};
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
    height: 40%;
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    & .single-image__details-title {
      font-size: 18px;
      font-weight: 600;
      color: ${({ theme }) => (theme === "light" ? "#333" : "#eee")};
    }

    & .single-image__details-date {
      font-size: 14px;
      font-weight: 600;
      color: ${({ theme }) => (theme === "light" ? "#333" : "#eee")};
      display: flex;
      align-items: center;
      gap: 4px;
    }

    & .single-image__details-desc {
      font-size: 16px;
      font-weight: 500;
      color: ${({ theme }) => (theme === "light" ? "#555" : "#eee")};
      overflow-y: auto;

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }

  & .single-image__details-like {
    padding-left: 8px;
    position: absolute;
    bottom: 5px;
    display: flex;
    align-items: center;
    gap: 4px;

    & button {
      color: ${({ theme }) => (theme === "light" ? "#333" : "#eee")};
      transition: all 0.2s ease;
    }

    & button:hover {
      transform: scale(1.5);
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
