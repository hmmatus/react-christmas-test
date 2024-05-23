export const handleLongTitle = (title: string) => {
  if (title.length < 20) return title;
  return title.substring(0, 20) + "...";
};
