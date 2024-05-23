import { handleLongTitle } from "../../../../utils/handleLongTitles";
import LikeIcon from "../../buttons/icons/like/LikeIcon";
import "./ProductCard.scss";
type ProductCardProps = {
  className?: string;
  product: any;
};
const ProductCard = ({ product, className }: ProductCardProps) => {
  return (
    <div className={`product-card ${className ?? ""}`}>
      <div className="product-card-image">
        <img className="image" src={product.image} alt={product.title} />
        <LikeIcon className="like-button" liked={false} onClick={() => {}} />
      </div>
      <div className="product-card-information">
        <p className="product-card-subtitle">{product.category}</p>
        <h3 className="product-card-title">{handleLongTitle(product.title)}</h3>
        <p className="product-card-subtitle">Vendido por siman</p>
        <p className="product-card-price">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
