import CategoriesListComponent from "../categories/CategoriesListComponent";
import "./Header.scss";
const ChristmasHeader = () => {
  return (
    <>
      <section className="header">
        <img src="/src/modules/christmas/assets/header-image.svg" />
      </section>
      <section className="header-categories">
        <CategoriesListComponent />
      </section>
    </>
  );
};

export default ChristmasHeader;
