import BecknLogoIcon from "../assets/becklogoSmall.svg";
import Title from "../common/title";
import CardWithContent from "../common/Cards/cardWithContent";
import TiltArrow from "../assets/tiltArrow.svg";
import WhatsappLogoBlack from "../assets/whatsappLogoBlack.png";
import Car from "../assets/car.svg";
import { Link, useNavigate } from "react-router-dom";
import WhatsappLogo from "../assets/whatsappLogo.png";
import tiltArrowblack from "../assets/tiltArrowblack.svg";
import carBlack from "../assets/carBlack.svg";
import { motion } from "framer-motion";
import homeIcon from "../assets/homeIcon.png";
import backArrw from "../assets/backArrw.png";

const TravelBuddy = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      style={{ overflow: "hidden" }}
    >
      <div className="main-container page-content">
        <div className="header">
          <div>
            <img src={BecknLogoIcon} alt={"BecknLogoIcon"} />
          </div>
          <Link style={{ cursor: "pointer" }} to={"/"}>
            <img src={homeIcon} alt={"HomeIcon"} />
          </Link>
        </div>
        <div className="content-wrapper">
          <div className="content-wrapper-innr">
            <Title
              titleText={"what do you want to do?"}
              className="page-content-title"
            />
          </div>

          <div className="card-wrapper">
            <Link
              to="/scanQrForTravelBuddy"
              style={{ textDecoration: "none", color: "#000", width: "100%" }}
            >
              <CardWithContent
                mainIconUrlInBlack={carBlack}
                arrowIconInBlackColor={tiltArrowblack}
                className="hover_card"
                mainIconUrl={Car}
                arrowIconUrl={TiltArrow}
                MainTitle={"travel buddy"}
                subTitle={"book via travel app "}
              />
            </Link>
            <Link
              to="/useWhatsapp"
              style={{ textDecoration: "none", color: "#000", width: "100%" }}
            >
              <CardWithContent
                mainIconUrlInBlack={WhatsappLogoBlack}
                arrowIconInBlackColor={tiltArrowblack}
                className="hover_card"
                mainIconUrl={WhatsappLogo}
                arrowIconUrl={TiltArrow}
                MainTitle={"whatsapp"}
                subTitle={"book a ride via  chat "}
              />
            </Link>
          </div>
        </div>
        <div className="back-btn" onClick={() => navigate(-1)}>
          <img src={backArrw} alt="" /> Go Back
        </div>
      </div>
    </motion.div>
  );
};

export default TravelBuddy;
