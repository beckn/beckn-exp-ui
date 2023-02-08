import { Link, useNavigate, useLocation } from "react-router-dom";
import Title from "../common/title";
import CardWithContent from "../common/Cards/cardWithContent";
import { motion } from "framer-motion";

const AcceptRideForTaxiHub = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
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
            {" "}
            <motion.div
              transition={{ ease: "easeIn", duration: 0.2 }}
              exit={{
                transition: { duration: "none" },
              }}
            >
              <Title
                titleText={"select platform to accept rides"}
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
                to="/DriverATaxi"
                style={{ textDecoration: "none", color: "#000", width: "100%" }}
              >
                <CardWithContent
                  mainIconUrlInBlack="/assets/taxiIcon.svg"
                  arrowIconInBlackColor="/assets/tiltArrowblack.svg"
                  mainIconUrl="/assets/taxiIcon.svg"
                  arrowIconUrl="/assets/tiltArrow.svg"
                  className="hover_card"
                  MainTitle={"taxi hub"}
                  subTitle={"local taxi application"}
                />
              </Link>
              <Link
                to="/luxecabe"
                style={{ textDecoration: "none", color: "#000", width: "100%" }}
              >
                <CardWithContent
                  mainIconUrlInBlack="/assets/luxecabBackground.svg"
                  arrowIconInBlackColor="/assets/tiltArrowblack.svg"
                  mainIconUrl="/assets/luxecab.svg"
                  arrowIconUrl="/assets/tiltArrow.svg"
                  className="hover_card"
                  MainTitle={"Luxe Cabs"}
                  subTitle={"recieve a ride request"}
                />
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="back-btn" onClick={() => navigate(-1)}>
          <img src="/assets/backArrw.png" alt="" /> Go Back
        </div>
      </div>
    </motion.div>
    // </Layout>
  );
};

export default AcceptRideForTaxiHub;
