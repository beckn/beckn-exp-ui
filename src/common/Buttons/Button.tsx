import React from "react";
import "./Button.css";
export interface buttonPropModal {
  buttonText?: string;
  className?: string;
}
const Button: React.FC<buttonPropModal> = ({ buttonText }: buttonPropModal) => {
  return (
    <div className="btn">
      <a href="/">
        <span>{buttonText}</span>
      </a>
    </div>
  );
};
export default Button;
