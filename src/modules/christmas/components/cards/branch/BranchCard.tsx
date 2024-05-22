import { Branch } from "../../../models/branch.model";

type BranchCardProps = {
  branch: Branch;
};
const BranchCard = ({ branch }: BranchCardProps) => {
  return (
    <div className="branch-card">
      <div className="branch-icon-container">
        <img src={branch.image} />
      </div>
      <p>{branch.name}</p>
    </div>
  );
};

export default BranchCard;
