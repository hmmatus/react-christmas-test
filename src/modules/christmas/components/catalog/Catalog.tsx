import CatalogListComponent from "./catalogList/CatalogListComponent";
import { CatalogList } from "./mock/catalogList";
import "./Catalog.scss";
const Catalog = () => {
  return (
    <section className="catalog-container">
      {CatalogList.map((item, index) => (
        <CatalogListComponent catalog={item} key={index} index={index} />
      ))}
    </section>
  );
};
export default Catalog;
