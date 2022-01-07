export const trimExplanation = (text) => {
  if (text.length < 240) return text;
  return text.substring(0, 237) + "...";
};
