import React from "react";
import "../../Navbar.scss";
interface ButtonProps {
  onClick: () => void;
  text: string;
  color?: string;
  disabled?: boolean;
  image: string;
}

const CustomButton: React.FC<ButtonProps> = ({
  onClick,
  text,
  color = "blue",
  disabled = false,
  image,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="information-button"
    >
      <img src={image} style={{ width: "1rem", height: "1rem" }} />
      {text}
    </button>
  );
};

export default CustomButton;
