import React, { useEffect, useState } from "react";
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
  const { ref, inView } = useInView();
  const limit = 6;
  const totalPages = 27 / limit;

  useEffect(() => {
    if (inView) {
      if (!photos.length) return;
      if (page > totalPages) return;

      setPage(page + 1);
    }
  }, [inView]);

  useEffect(() => {
    if (page <= totalPages) {
      const fetchPhotos = async () => {
        const photosData = await photoFetcher(page, limit);

        setPhotos([...new Set([...photos, ...photosData.data])]);
      };

      fetchPhotos();
    }
  }, [page]);

  return (
    <div>
      <Container>
        {photos
          ? photos.map((photo, index) => {
              const isLiked = likedPhotos?.includes(photo.title);

              const setLiked = (liked) => {
                setLikedPhotos((currentValue) => {
                  if (liked) {
                    return currentValue.filter((p) => p !== photo.title);
                  } else {
                    return [...currentValue, photo.title];
                  }
                });
              };

              return (
                <Image
                  key={index}
                  photo={photo}
                  isLiked={isLiked}
                  setLiked={setLiked}
                />
              );
            })
          : null}
      </Container>
      {page <= totalPages ? (
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
