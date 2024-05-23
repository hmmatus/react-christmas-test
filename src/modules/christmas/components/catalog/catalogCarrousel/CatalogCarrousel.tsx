import ProductCard from "../../../../../components/elements/cards/productCard/ProductCard";
import Carrousel from "../../../../../components/elements/carrousel/Carrousel";
import "./CatalogCarrousel.scss";
import { CgCloseR } from "react-icons/cg";

type CatalogCarrouselProps = {
  data: any[];
  className?: string;
  loading: boolean;
  onClose: () => void;
};
const CatalogCarrousel = ({
  data,
  loading,
  onClose,
}: CatalogCarrouselProps) => {
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="catalog-carrousel">
      <Carrousel
        swiperProps={{
          slidesPerView: 3,
          spaceBetween: 0,
        }}
        key="catalog-carrousel"
        items={data}
        renderItem={(item) => <ProductCard product={item} />}
      />
      <button className="button-close" onClick={onClose}>
        <CgCloseR size={24} />
      </button>
    </div>
  );
};

export default CatalogCarrousel;
