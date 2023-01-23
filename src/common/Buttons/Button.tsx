import React from "react";
import { useNavigate } from "react-router-dom";
import "./Button.css";
export interface buttonPropModal {
  buttonText?: string;
  className?: string;
}
const Button: React.FC<buttonPropModal> = ({ buttonText }: buttonPropModal) => {
  const navigate = useNavigate();
  return (
    <div className="btn">
      <a href="/">
        <span>{buttonText}</span>
      </a>
    </div>
  );
};
export default Button;
