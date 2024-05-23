import { CatalogCategoryI } from "../../../models/catalog.model";
import "./CatalogItem.scss";
type CatalogItemProps = {
  item: CatalogCategoryI;
  onClick: () => void;
  className?: string;
};
const CatalogItem = ({ item, onClick, className }: CatalogItemProps) => {
  return (
    <button
      className={`catalog-item ${className ?? ""}`}
      onClick={onClick}
      style={{
        backgroundImage: `url(${item.img})`,
      }}
    >
      <p className="catalog-text">{item.title}</p>
    </button>
  );
};

export default CatalogItem;
