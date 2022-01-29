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

  return state;
};
