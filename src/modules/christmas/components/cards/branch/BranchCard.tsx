import { BranchI } from "../../../models/branch.model";
import "./BranchCard.scss";
type BranchCardProps = {
  branch: BranchI;
  onClick?: () => void;
};
const BranchCard = ({ branch, onClick }: BranchCardProps) => {
  return (
    <button className="branch-card" onClick={onClick}>
      <div className="branch-icon-container">
        <img className="image" src={branch.image} />
      </div>
      <p className="title">{branch.name}</p>
    </button>
  );
};

export default BranchCard;
