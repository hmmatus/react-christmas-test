import { useState } from "react";
import ChipButton from "../buttons/chip/ChipButton";
import "./CategoriesList.scss";
import { mockCategoriesList } from "./mock/list";
import { CategoryI } from "../../models/category.model";
import BranchCard from "../cards/branch/BranchCard";
import Carrousel from "../../../../components/elements/carrousel/Carrousel";
import { BranchI } from "../../models/branch.model";
const CategoriesListComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryI | null>(
    null
  );
  const handleCategoryClick = (category: CategoryI) => {
    if (selectedCategory?.id === category.id) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
  };
  const onRedirect = (branch: BranchI) => {
    window.open(branch.url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="categories-container">
      <div className="categories-list">
        <h2>Compra por</h2>
        {mockCategoriesList.map((category) => (
          <ChipButton
            className="category-button"
            text={category.name}
            onClick={() => handleCategoryClick(category)}
            selected={selectedCategory?.id === category.id}
          />
        ))}
      </div>
      <div className={`branch-list ${selectedCategory && "display-branch"}`}>
        <Carrousel
          swiperProps={{
            slidesPerView: 3,
            spaceBetween: 50,
          }}
          items={selectedCategory?.data || []}
          renderItem={(item) => (
            <BranchCard
              onclick={() => onRedirect(item)}
              branch={item}
              key={item.id}
            />
          )}
        />
      </div>
    </div>
  );
};

export default CategoriesListComponent;
