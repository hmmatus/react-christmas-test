export const openUrl = (urlString: string) => {
  let url = urlString;
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = "http://" + url;
  }
  window.open(url, "_blank", "noopener, noreferrer");
};
