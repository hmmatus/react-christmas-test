import { BranchI } from "../../../models/branch.model";
import "./BranchCard.scss";
type BranchCardProps = {
  branch: BranchI;
  onclick?: () => void;
};
const BranchCard = ({ branch, onclick }: BranchCardProps) => {
  return (
    <button className="branch-card" onClick={onclick}>
      <div className="branch-icon-container">
        <img className="image" src={branch.image} />
      </div>
      <p className="title">{branch.name}</p>
    </button>
  );
};

export default BranchCard;
