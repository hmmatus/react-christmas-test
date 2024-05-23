import React from "react";
import "./InformationButton.scss";
interface ButtonProps {
  onClick: () => void;
  text: string;
  color?: string;
  disabled?: boolean;
  icon: JSX.Element;
}

const InformationButton: React.FC<ButtonProps> = ({
  onClick,
  text,
  disabled = false,
  icon,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="information-button"
    >
      {icon}
      {text}
    </button>
  );
};

export default InformationButton;
