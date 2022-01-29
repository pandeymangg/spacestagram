export const THEME_CHANGED = "THEME_CHANGED";
export const PHOTO_LIKE_TOGGLED = "PHOTO_LIKE_TOGGLED";

export const themeChanged = (theme) => ({
  type: THEME_CHANGED,
  payload: theme,
});

export const photoLikeToggled = (liked, photo) => ({
  type: PHOTO_LIKE_TOGGLED,
  payload: { liked, photo },
});
