const initialState = {
  theme: "dark",
  likedPhotos: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  if (type === "THEME_CHANGED") {
    return {
      ...state,
      theme: payload === "light" ? "dark" : "light",
    };
  }

  if (type === "PHOTO_LIKE_TOGGLED") {
    const { liked, photo } = payload;

    if (liked) {
      const newState = {
        ...state,
        likedPhotos: [...state.likedPhotos, photo],
      };
      return newState;
    } else {
      const newState = {
        ...state,
        likedPhotos: [...state.likedPhotos].filter((p) => p === photo),
      };

      return newState;
    }
  }

  return state;
};
