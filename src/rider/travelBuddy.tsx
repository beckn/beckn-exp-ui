import Title from "../common/title";
import CardWithContent from "../common/Cards/cardWithContent";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const TravelBuddy = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
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
            <img
              style={{
                height: "52px",
                width: "200px",
                marginTop: "20px",
                cursor: "pointer",
              }}
              src="/assets/becklogoSmall.svg"
              alt={"BecknLogoIcon"}
            />
          </div>
          <Link
            style={{
              cursor: "pointer",
              background: "black",
              width: "40px",
              height: "40px",
              borderRadius: "26px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              right: "100px",
            }}
            to={"/"}
          >
            <img src="/assets/homeIcon.png" alt={"HomeIcon"} />
          </Link>
        </div>
        <div className="content-wrapper">
          <div className="content-wrapper-innr">
            <motion.div
              transition={{ ease: "easeIn", duration: 0.2 }}
              exit={{
                transition: { duration: "none" },
              }}
            >
              <Title
                titleText={"what do you want to do?"}
                className="page-content-title"
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ x: state ? "-100vw" : "100vw" }}
            animate={{ x: 0, y: 0 }}
            transition={{ ease: "easeIn", duration: 0.5 }}
            exit={{
              x: state ? "100vw" : "-100vw",
              transition: { ease: "easeOut", duration: 0 },
            }}
          >
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
          </motion.div>
        </div>
        <div
          className="back-btn"
          onClick={() => navigate("/choiceToDo", { state: "flag" })}
        >
          <img src="/assets/backArrw.png" alt="" /> Go Back
        </div>
      </div>
    </motion.div>
  );
};

export default TravelBuddy;
