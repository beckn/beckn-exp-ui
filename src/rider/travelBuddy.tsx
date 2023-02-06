import Title from "../common/title";
import CardWithContent from "../common/Cards/cardWithContent";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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
            <img src="/assets/becklogoSmall.svg" alt={"BecknLogoIcon"} />
          </div>
          <Link style={{ cursor: "pointer" }} to={"/"}>
            <img src="/assets/homeIcon.png" alt={"HomeIcon"} />
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
                mainIconUrlInBlack="/assets/travelBuddyNevIconInBlack.svg"
                arrowIconInBlackColor="/assets/tiltArrowblack.svg"
                className="hover_card"
                mainIconUrl="/assets/travelBuddyNevIcon.svg"
                arrowIconUrl="/assets/tiltArrow.svg"
                MainTitle={"travel buddy"}
                subTitle={"book via travel app "}
              />
            </Link>
            <Link
              to="/useWhatsapp"
              style={{ textDecoration: "none", color: "#000", width: "100%" }}
            >
              <CardWithContent
                mainIconUrlInBlack="/assets/whatsappLogoBlack.png"
                arrowIconInBlackColor="/assets/tiltArrowblack.svg"
                className="hover_card"
                mainIconUrl="/assets/whatsappLogo.png"
                arrowIconUrl="/assets/tiltArrow.svg"
                MainTitle={"whatsapp"}
                subTitle={"book a ride via  chat "}
              />
            </Link>
          </div>
        </div>
        <div className="back-btn" onClick={() => navigate(-1)}>
          <img src="/assets/backArrw.png" alt="" /> Go Back
        </div>
      </div>
    </motion.div>
  );
};

export default TravelBuddy;
