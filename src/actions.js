export const THEME_CHANGED = "THEME_CHANGED";
export const PHOTO_LIKE_TOGGLED = "PHOTO_LIKE_TOGGLED";

// action creators:

export const themeChanged = (theme) => ({
  type: THEME_CHANGED,
  payload: theme,
});
