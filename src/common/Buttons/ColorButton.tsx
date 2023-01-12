import React from "react";
import { useNavigate } from "react-router-dom";
import "./Button.css";
export interface colorButtonPropModal {
  colorbuttonText?: string;
  className?: string;
}
const ColorButton: React.FC<colorButtonPropModal> = ({
  colorbuttonText,
}: colorButtonPropModal) => {
  const navigate = useNavigate();
  return (
    <button className="color-button" onClick={() => navigate(0)}>
      <span>{colorbuttonText}</span>
    </button>
  );
};
export default ColorButton;
