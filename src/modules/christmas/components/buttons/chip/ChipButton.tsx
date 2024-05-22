import "./ChipButton.scss";
type TagButtonProps = {
  text: string;
  selected: boolean;
  onClick: () => void;
  className?: string;
};

const ChipButton = ({ text, selected, onClick, className }: TagButtonProps) => {
  return (
    <button
      className={`chip-button ${selected && "chip-selected"} ${className}`}
      onClick={onClick}
    >
      <span>{text}</span>
    </button>
  );
};

export default ChipButton;
