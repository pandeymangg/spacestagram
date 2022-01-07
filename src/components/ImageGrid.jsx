import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import styled from "styled-components";
import { photoFetcher } from "../utils/photoFetcher";
import { useLocalStorage } from "../hooks/useLocalStorage";
import Image from "./Image";
import { useInView } from "react-intersection-observer";
import Spinner from "./Spinner/Spinner";

const ImageGrid = () => {
  const [photos, setPhotos] = useState([]);
  const [likedPhotos, setLikedPhotos] = useLocalStorage("liked", [""]);
  const [page, setPage] = useState(1);
  const initialLoad = useRef(true);

  const { ref, inView } = useInView();

  useLayoutEffect(() => {
    if (initialLoad.current) {
      initialLoad.current = false;
      return;
    }
  });

  useEffect(() => {
    console.log("initial load in useView: ", initialLoad);
    if (initialLoad.current) return;
    if (!photos.length) return;
    if (page > 3) return;

    setPage((page) => page + 1);
  }, [inView]);

  useEffect(() => {
    if (page <= 3) {
      const fetchPhotos = async () => {
        const photosData = await photoFetcher(page);

        setPhotos([...new Set([...photos, ...photosData.data])]);
      };

      fetchPhotos();
    }
  }, [page]);

  return (
    <div>
      <Container>
        {photos
          ? photos.map((photo) => {
              const isLiked = likedPhotos?.includes(photo.title);

              const setLiked = (liked) => {
                console.log(liked);
                setLikedPhotos((currentValue) => {
                  if (liked) {
                    return currentValue.filter((p) => p !== photo.title);
                  } else {
                    return [...currentValue, photo.title];
                  }
                });
              };

              return (
                <Image photo={photo} isLiked={isLiked} setLiked={setLiked} />
              );
            })
          : null}
      </Container>
      {page <= 3 ? (
        <div ref={ref} style={{ height: 100 }}>
          <Spinner />
        </div>
      ) : null}
    </div>
  );
};

const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  grid-template-rows: 1fr;
  gap: 16px;
`;

export default ImageGrid;
