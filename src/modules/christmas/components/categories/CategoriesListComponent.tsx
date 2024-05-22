import { useState } from "react";
import ChipButton from "../buttons/chip/ChipButton";
import "./CategoriesList.scss";
import { mockCategoriesList } from "./mock/list";
import { CategoryI } from "../../models/category.model";
import BranchCard from "../cards/branch/BranchCard";
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
        {selectedCategory?.data.map((branch) => (
          <BranchCard branch={branch} />
        ))}
      </div>
    </div>
  );
};

export default CategoriesListComponent;
