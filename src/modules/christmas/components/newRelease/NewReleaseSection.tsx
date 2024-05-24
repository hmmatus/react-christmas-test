import { useQuery } from "react-query";
import Carrousel from "../../../../components/elements/carrousel/Carrousel";
import "./NewRelease.scss";
import ProductCard from "../../../../components/elements/cards/productCard/ProductCard";
const NewRelease = () => {
  const { data, isLoading, isError } = useQuery("newRelease", () => {
    return fetch("https://fakestoreapi.com/products").then((res) => res.json());
  });
  return (
    <section className="new-release">
      <div className="release-header">
        <h2>Lo nuevo de iphone</h2>
        <button className="release-button">Ver todo</button>
      </div>
      <div className="release-content">
        {isLoading ? (
          <p>Cargando...</p>
        ) : isError ? (
          <p>Hubo un error</p>
        ) : (
          data && (
            <Carrousel
              swiperProps={{
                slidesPerView: 2,
                spaceBetween: 10,
                breakpoints: {
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                  },
                },
              }}
              items={data}
              renderItem={(item) => (
                <ProductCard key={item.id} product={item} />
              )}
            />
          )
        )}
      </div>
    </section>
  );
};

export default NewRelease;
