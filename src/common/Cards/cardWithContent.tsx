import React from "react";
import "./Cards.css";

interface cardContentPropsModal {
  mainIconUrl?: any;
  MainTitle?: string;
  subTitle?: string;
  arrowIconUrl?: any;
  mainIconUrlInBlack?: any;
  arrowIconInBlackColor?: any;
  className?: string;
  onClick?: () => void;
}

const CardWithContent: React.FC<cardContentPropsModal> = ({
  mainIconUrl,
  MainTitle,
  subTitle,
  arrowIconUrl,
  mainIconUrlInBlack,
  arrowIconInBlackColor,
  className,
}: cardContentPropsModal) => {
  return (
    <div className={`card ${className}`}>
      <div className="card-inner">
        <div className="card-img">
          <div className="image-url-container">
            <img src={mainIconUrl} alt={"BecknLogoIcon"} />
            <img
              className="hover-icon"
              src={mainIconUrlInBlack}
              alt={"BecknLogoIcon"}
            />
          </div>
          <div className="card-title">
            <div className="main-title">{MainTitle}</div>
            <div className="sub-title">{subTitle}</div>
          </div>
        </div>
        <div className="image-url-container">
          <img className="right-img" src={arrowIconUrl} alt={"BecknLogoIcon"} />
          <img
            className="right-img"
            src={arrowIconInBlackColor}
            alt={"BecknLogoIcon"}
          />
        </div>
      </div>
    </div>
  );
};
export default CardWithContent;
