import { CatalogTagI } from "../../../models/catalog.model";
import "./Tag.scss";
type TagButtonProps = {
  tag: CatalogTagI;
};
const TagButton = ({ tag }: TagButtonProps) => {
  const onRedirect = () => {
    window.open(tag.url, "_blank", "noopener,noreferrer");
  };
  return (
    <button
      onClick={onRedirect}
      className="tag-button"
      style={{
        position: "absolute",
        top: tag.position.top,
        left: tag.position.left,
        right: tag.position.right,
        bottom: tag.position.bottom,
      }}
    >
      Tag
    </button>
  );
};

export default TagButton;
