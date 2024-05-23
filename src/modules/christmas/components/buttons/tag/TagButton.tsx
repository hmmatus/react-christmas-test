import { useState } from "react";
import { CatalogTagI } from "../../../models/catalog.model";
import "./Tag.scss";
import TagIcon from "./TagIcon";
type TagButtonProps = {
  tag: CatalogTagI;
  onClick: () => void;
};
const TagButton = ({ tag, onClick }: TagButtonProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <button
      onMouseEnter={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={onClick}
      className="tag-button"
      style={{
        position: "absolute",
        top: tag.position.top,
        left: tag.position.left,
        right: tag.position.right,
        bottom: tag.position.bottom,
      }}
    >
      <TagIcon
        className="tag-icon"
        fillColor={isHovering ? "#EF3742" : "#fff"}
        fillCartColor={isHovering ? "#fff" : "#EF3742"}
      />
    </button>
  );
};

export default TagButton;
