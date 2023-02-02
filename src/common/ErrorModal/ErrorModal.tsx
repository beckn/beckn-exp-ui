import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Buttons/Button";
import ColorButton from "../Buttons/ColorButton";
import "./ErrorModal.css";

interface modalPropModal {
  titleText: string;
  className?: string;
  subTitle: string;
  buttonText?: string;
  showColorButton?: string;
  colorbuttonText?: string;
}
const ErrorModal: React.FC<modalPropModal> = ({
  titleText,
  subTitle,
  buttonText,
  showColorButton,
  colorbuttonText,
}: modalPropModal) => {
  const navigate = useNavigate();
  return (
    <div className="modal-container">
      <div className="padding30">
        <div className="title-text">
          <span>{titleText} </span>
          <img
            onClick={() => navigate(0)}
            src="/assets/cross.svg"
            alt="cross"
          />
        </div>
        <h5 className="subtitle-text">{subTitle}</h5>
        <div className="button">
          <ColorButton colorbuttonText={colorbuttonText} />
          <Button buttonText={buttonText} />
        </div>
      </div>
    </div>
  );
};
export default ErrorModal;
