import { Link, useNavigate, useLocation } from "react-router-dom";
import Title from "../common/title";
import CardWithContent from "../common/Cards/cardWithContent";
import { motion } from "framer-motion";

const VisualizeAction = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  return (
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ animationDelay: "2s", ease: "easeOut" }}
        >
          <div className="content-wrapper-innr">
            <motion.div
              transition={{ ease: "easeIn", duration: 0.2 }}
              exit={{
                transition: { duration: "none" },
              }}
            >
              <Title
                titleText={"welcome to the beckn experience center"}
                className="page-content-title"
              />
            </motion.div>
          </div>
        </motion.div>
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
              to="/ChoiceToDo"
              style={{ textDecoration: "none", color: "#000", width: "100%" }}
            >
              <CardWithContent
                mainIconUrlInBlack="/assets/VisuliseIconinBlack.svg"
                arrowIconInBlackColor="/assets/tiltArrowblack.svg"
                className="hover_card"
                mainIconUrl="/assets/VisualizeIcon.svg"
                arrowIconUrl="/assets/tiltArrow.svg"
                MainTitle={"visualise beckn in action "}
                subTitle={"experience beckn enabled live"}
              />
            </Link>
            <Link
              to="/IframeVideo"
              style={{ textDecoration: "none", color: "#000", width: "100%" }}
            >
              <CardWithContent
                mainIconUrlInBlack="/assets/bulbIconBlack.svg"
                arrowIconInBlackColor="/assets/tiltArrowblack.svg"
                className="hover_card"
                mainIconUrl="/assets/bulbIcon.svg"
                arrowIconUrl="/assets/tiltArrow.svg"
                MainTitle={"learn about beckn"}
                subTitle={"understanding what is beckn"}
              />
            </Link>
          </div>
        </motion.div>
        <div className="back-btn" onClick={() => navigate("/")}>
          <img src="/assets/backArrw.png" alt="" /> Go Back
        </div>
      </div>
    </div>
  );
};

export default VisualizeAction;
