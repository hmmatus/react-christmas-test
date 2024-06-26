import { useQuery } from "react-query";
import { CatalogItemI } from "../../../models/catalog.model";
import TagButton from "../../buttons/tag/TagButton";
import CatalogItem from "../catalogItem/CatalogItem";
import "./CatalogList.scss";
import { useState } from "react";
import CatalogCarrousel from "../catalogCarrousel/CatalogCarrousel";
import { openUrl } from "../../../../../utils/openUrl";
import Carrousel from "../../../../../components/elements/carrousel/Carrousel";

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
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const { isLoading, data, refetch } = useQuery("catalogCategories", () => {
    return fetch("https://fakestoreapi.com/products").then((res) => res.json());
  });

  const handleSeeProducts = () => {
    setIsCatalogOpen(true);
    refetch();
  };

  const onCloseProductsView = () => {
    setIsCatalogOpen(false);
  };

  return (
    <div className={`catalog-list-container ${className ?? ""}`}>
      <div className="banner">
        <img src={catalog.bannerImg} alt={`banner ${index}`} />
      </div>
      <div
        className="main"
        style={{ backgroundImage: `url(${catalog.main.background})` }}
      >
        <div className="main-content">
          {isCatalogOpen ? (
            <CatalogCarrousel
              data={data}
              loading={isLoading}
              onClose={onCloseProductsView}
            />
          ) : (
            <>
              {catalog.main.tags.map((tag, index) => (
                <TagButton key={index} tag={tag} onClick={handleSeeProducts} />
              ))}
              <button className="products-button" onClick={handleSeeProducts}>
                Ver productos
              </button>
            </>
          )}
        </div>
      </div>
      <div className="popular-categories">
        <div className="grid-rows-2">
          {catalog.categories.slice(0, 2).map((category, index) => (
            <CatalogItem
              key={index}
              item={category}
              onClick={() => openUrl(category.url)}
            />
          ))}
        </div>
        {catalog.categories.slice(2, 4).map((category, index) => (
          <div className="category-item" key={index}>
            <CatalogItem
              key={index}
              item={category}
              onClick={() => openUrl(category.url)}
            />
          </div>
        ))}
      </div>
      <div className="other-products">
        <Carrousel
          items={catalog.categories.slice(4)}
          swiperProps={{
            slidesPerView: 2,
            spaceBetween: 10,
          }}
          renderItem={(item) => (
            <CatalogItem item={item} onClick={() => openUrl(item.url)} />
          )}
        />
      </div>
    </div>
  );
};

export default CatalogListComponent;
