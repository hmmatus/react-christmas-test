import { FaRegHeart, FaHeart } from "react-icons/fa";
import "./LikeIcon.scss";
type LikeIconProps = {
  onClick: () => void;
  liked: boolean;
  className?: string;
};
const LikeIcon = ({ onClick, liked, className }: LikeIconProps) => {
  return (
    <button className={`like-icon ${className ?? ""}`}>
      {liked ? (
        <FaHeart size={20} color="red" onClick={onClick} />
      ) : (
        <FaRegHeart size={20} onClick={onClick} />
      )}
    </button>
  );
};

export default LikeIcon;
