import React, { useContext, useEffect, useState } from "react";
import menWithCar from "../assets/car-with-a-man.png";
import { Link } from "react-router-dom";
import { Box, Modal } from "@mui/material";
import BecknLogoIcon from "../assets/becklogoSmall.svg";
import homeIcon from "../assets/homeIcon.png";
import { motion } from "framer-motion";
import ErrorModal from "../common/ErrorModal/ErrorModal";
import EventApiContext from "../context/EventApiContext";

const ImproveTheExp = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const { updateExpId } = useContext(EventApiContext);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleChanges = (e: any) => {
    e.preventDefault();
    setText(e.target.value);
  };
  // const expId = localStorage.getItem("expId");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // const updateExpId = async () => {
  //   await fetch("https://api.experience.becknprotocol.io/v2/xc/experience", {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     redirect: "follow",
  //     referrerPolicy: "no-referrer",
  //     body: JSON.stringify({
  //       experienceId: expId,
  //       end_ts: Date.now(),
  //       experienceFeedback: {
  //         user_review: "N",
  //         user_comment: text,
  //       },
  //     }),
  //   })
  //     .then((response) => response)

  //     .catch((error) => console.log("error", error));
  // };

  useEffect(() => {
    updateExpId(text);
  }, [updateExpId]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      style={{ overflow: "hidden" }}
      // initial={{ width: "0%" }}
      // animate={{ width: "100%" }}
      // exit={{
      //   x: window.innerWidth,
      //   transition: { ease: "easeOut", duration: 0.2 },
      // }}
    >
      <Box
        className="main-container"
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          minHeight: "100vh",
          flexDirection: "column",
        }}
      >
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "96%",
            margin: "0 auto",
            marginTop: "20px",
          }}
        >
          <Box>
            <img src={BecknLogoIcon} alt={"BecknLogoIcon"} />
          </Box>
          <Box style={{ cursor: "pointer" }} onClick={handleOpen}>
            <img src={homeIcon} alt={"HomeIcon"} />
            <Modal open={open}>
              <ErrorModal
                titleText={"Are you sure?"}
                subTitle={
                  "You are about to exit this experience. Click ‘confirm’ to continue."
                }
                colorbuttonText={"Cancel"}
                buttonText={"Confirm"}
              />
            </Modal>
          </Box>
        </Box>
        <Box
          style={{
            textAlign: "center",
            height: "100vh",
            width: "80%",
            margin: "60px auto",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              width: "440px",
              background: "#1E1E1E",
            }}
          >
            <p
              style={{
                fontSize: "48px",
                color: "#fff",
                padding: "30px ",
                resize: "none",
              }}
            >
              Ohhh! Please let us know how we can help improve your experience.
            </p>
            <textarea
              style={{
                height: "160px",
                width: "360px",
                marginTop: "30px",
                background: "#1E1E1E",
                color: "#fff",
              }}
              name="textarea"
              id="textarea"
              value={text}
              onChange={handleChanges}
            ></textarea>
            <div
              style={{
                padding: "8px 20px",
                background: "#ACD1F0",
                borderRadius: "12px",
                width: "100px",
                margin: "0 auto",
              }}
            >
              <Link
                to="/thankYouForVisitBecknExpCenter"
                style={{ textDecoration: "none", color: "#000" }}
                onClick={updateExpId}
              >
                Submit
              </Link>
            </div>
            <div
              style={{
                width: "100%",
                alignItems: "center",
                marginTop: "30px",
              }}
            ></div>
          </div>
          <Box
            style={{
              maxWidth: "640px",
              display: "grid",
              alignContent: "center",
            }}
          >
            <img src={menWithCar} alt="" style={{ width: "100%" }} />
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

export default ImproveTheExp;
