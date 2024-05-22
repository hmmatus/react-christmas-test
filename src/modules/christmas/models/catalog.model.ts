export type CatalogCategoryI = {
  title: string;
  img: string;
  url: string;
};
export type CatalogTagI = {
  url: string;
  position: {
    top: string;
    left: string;
    right: string;
    bottom: string;
  };
};
export type CatalogItemI = {
  bannerImg: string;
  main: {
    buttonTitle: string;
    tags: CatalogTagI[];
    background: string;
  };
  categories: CatalogCategoryI[];
};
