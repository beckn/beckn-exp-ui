import React, { ReactComponentElement, useState } from "react";
import { useNavigate } from "react-router-dom";
import CrossIcon from "../../assets/cross.svg";
import Button, { buttonPropModal } from "../Buttons/Button";
import ColorButton, { colorButtonPropModal } from "../Buttons/ColorButton";
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
      <div style={{ padding: "20px" }}>
        <div className="title-text">
          <span>{titleText} </span>
          <img
            onClick={() => navigate(0)}
            style={{ height: "25px", width: "25px", cursor: "pointer" }}
            src={CrossIcon}
          />
        </div>
        <h5 className="subtitle-text">{subTitle}</h5>
        <div className="button">
          <Button buttonText={buttonText} />
          <ColorButton colorbuttonText={colorbuttonText} />
        </div>
      </div>
    </div>
  );
};
export default ErrorModal;
