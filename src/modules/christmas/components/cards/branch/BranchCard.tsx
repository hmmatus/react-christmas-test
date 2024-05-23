import { Branch } from "../../../models/branch.model";
import "./BranchCard.scss";
type BranchCardProps = {
  branch: Branch;
};
const BranchCard = ({ branch }: BranchCardProps) => {
  return (
    <div className="branch-card">
      <div className="branch-icon-container">
        <img className="image" src={branch.image} />
      </div>
      <p className="title">{branch.name}</p>
    </div>
  );
};

export default BranchCard;
