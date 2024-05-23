import Carrousel from "../../../../../components/elements/carrousel/Carrousel";
import { CatalogItemI } from "../../../models/catalog.model";
import TagButton from "../../buttons/tag/TagButton";
import CatalogItem from "../catalogItem/CatalogItem";
import "./CatalogList.scss";

type CatalogListComponentProps = {
  catalog: CatalogItemI;
  index: number;
  className?: string;
};
const CatalogListComponent = ({
  catalog,
  index,
  className,
}: CatalogListComponentProps) => {
  const onRedirect = (url: string) => {
    window.location.replace(url);
  };
  return (
    <div className={`catalog-list-container ${className}`}>
      <div className="banner">
        <img src={catalog.bannerImg} alt={`banner ${index}`} />
      </div>
      <div
        className="main"
        style={{ backgroundImage: `url(${catalog.main.background})` }}
      >
        <div className="tags">
          {catalog.main.tags.map((tag, index) => (
            <TagButton key={index} tag={tag} />
          ))}
        </div>
      </div>
      <div className="popular-categories">
        <div className="grid-rows-2">
          {catalog.categories.slice(0, 2).map((category, index) => (
            <CatalogItem
              key={index}
              item={category}
              onClick={() => onRedirect(category.url)}
            />
          ))}
        </div>
        {catalog.categories.slice(2, 4).map((category, index) => (
          <div className="category-item">
            <CatalogItem
              key={index}
              item={category}
              onClick={() => onRedirect(category.url)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogListComponent;
