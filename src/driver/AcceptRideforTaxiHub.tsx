import { Link, useNavigate } from "react-router-dom";
import Title from "../common/title";
import CardWithContent from "../common/Cards/cardWithContent";
import { motion } from "framer-motion";

const AcceptRideForTaxiHub = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
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
              titleText={"select platform to accept rides"}
              className="page-content-title"
            />
          </div>

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
