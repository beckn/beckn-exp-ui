import "./MobilityCard.css";
import Xarrow, { Xwrapper } from "react-xarrows";
import { useState } from "react";
import axios from "axios";
import NodeComponent from "./NodeComponent";
import useInterval from "./useInterval";
import { useNavigate } from "react-router-dom";
import BecknLogoIcon from "../../assets/becklogoSmall.svg";
import { motion } from "framer-motion";
import { Box, Modal } from "@mui/material";
import homeIcon from "../../assets/homeIcon.png";
import ErrorModal from "../ErrorModal";

const MobilityCard = () => {
  const navigate = useNavigate();

  const [events, setEvents] = useState<any>([]);
  const expId = localStorage.getItem("expId");
  const fetchEvent = async () => {
    try {
      const res = await axios.get(
        `https://api.experience.becknprotocol.io/v2/event/${expId}`
      );

      setEvents(res.data.events);
    } catch (error) {
      console.log(`error ${error}`);
    }
  };

  useInterval(() => {
    fetchEvent();
  }, 1000);

  if (
    events.length > 0 &&
    events[events.length - 1].event.eventMessage.eventCode ===
      "recieved_payconfirmation"
  ) {
    setTimeout(() => {
      navigate("/WhatWouldYouDoLikeToNext");
    }, 5000);
  }

  const slicedArr: any[] = [];
  events
    .sort((a: any, b: any) => a.eventId - b.eventId)
    // eslint-disable-next-line array-callback-return
    .map((event: any) => {
      if (
        (event.event.eventSource.id === "1" &&
          event.event.eventDestination.id === "3") ||
        (event.event.eventSource.id === "1" &&
          event.event.eventDestination.id === "5")
      ) {
        slicedArr.splice(0);
        return slicedArr.push(
          ...events.slice(
            events[events.length - 1].event.eventSource.id === "1" ? 1 : 0,
            events[events.length - 1].event.eventSource.id === "1"
              ? events.length
              : 0
          )
        );
      } else if (
        (event.event.eventSource.id === "5" &&
          event.event.eventDestination.id === "1") ||
        (event.event.eventSource.id === "3" &&
          event.event.eventDestination.id === "1")
      ) {
        slicedArr.splice(0);
        return slicedArr.push(
          ...events.slice(
            events[events.length - 1].event.eventDestination.id === "1" ? 3 : 0,
            events[events.length - 1].event.eventDestination.id === "1"
              ? events.length
              : 0
          )
        );
      } else if (
        (event.event.eventSource.id === "1" &&
          event.event.eventDestination.id === "2") ||
        (event.event.eventSource.id === "2" &&
          event.event.eventDestination.id === "4")
      ) {
        slicedArr.splice(0);
        return slicedArr.push(
          ...events.slice(
            events[events.length - 1].event.eventDestination.id === "2" ? 5 : 0,
            events[events.length - 1].event.eventDestination.id === "2"
              ? events.length
              : 0
          )
        );
      } else {
        slicedArr.splice(0);
        return slicedArr.push(...events.slice(-1));
      }
    });

  function onlyUnique(value: any, index: any, self: string | any[]) {
    return self.indexOf(value) === index;
  }
  let unique = slicedArr.filter(onlyUnique);
  console.log(
    unique.map((e) => e),
    "duplicate"
  );
  console.log(
    events.map((e: any) => e).sort((a: any, b: any) => a.eventId - b.eventId),
    "events"
  );

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <motion.div
      initial={{ width: "0%" }}
      animate={{ width: "100%" }}
      exit={{
        x: window.innerWidth,
        transition: { ease: "easeOut", duration: 0.2 },
      }}
    >
      <Box className="main-container" style={{ height: "100vh" }}>
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
                  "You are about to exit this experience. Click 'confirm' to continue."
                }
                colorbuttonText={"Cancel"}
                buttonText={"Confirm"}
              />
            </Modal>
          </Box>
        </Box>
        <Xwrapper>
          <NodeComponent
            driverText={
              events.length > 0
                ? events[events.length - 1].event.eventMessage.bppMessage
                : "driver"
            }
            riderText={
              events.length > 0
                ? events[events.length - 1].event.eventMessage.bapMessage
                : "rider"
            }
          />
          {events.length > 0 &&
            unique.map((event: any) => {
              return (
                <div className="Xarrow">
                  <Xarrow
                    key={event.eventId}
                    start={
                      event?.event.eventMessage.eventCode === "mbwa_pickup_loc"
                        ? ""
                        : event.event.eventSource.id
                    }
                    end={
                      event?.event.eventMessage.eventCode === "mbwa_pickup_loc"
                        ? ""
                        : event.event.eventDestination.id
                    }
                    lineColor={
                      event.event.eventSource.id === "3" ||
                      event.event.eventSource.id === "5" ||
                      (event.event.eventSource.id === "1" &&
                        event.event.eventDestination.id === "2") ||
                      (event.event.eventSource.id === "1" &&
                        event.event.eventDestination.id === "4")
                        ? "#FB1E1E"
                        : "#23DFDF"
                    }
                    headColor={
                      event.event.eventSource.id === "3" ||
                      event.event.eventSource.id === "5" ||
                      (event.event.eventSource.id === "1" &&
                        event.event.eventDestination.id === "2") ||
                      (event.event.eventSource.id === "1" &&
                        event.event.eventDestination.id === "4")
                        ? "#FB1E1E"
                        : "#23DFDF"
                    }
                    animateDrawing={true}
                    headSize={7}
                    path={"straight"}
                    labels={{
                      start: (
                        <h3
                          className={`eventMessage event_${
                            event?.event.eventDestination.id +
                            "_" +
                            event?.event.eventSource.id
                          }`}
                        >
                          {event?.event.eventMessage.eventCode ===
                            "mbwa_pickup_loc" ||
                          event?.event.eventMessage.eventCode ===
                            "mbwa_drop_loc" ||
                          event?.event.eventMessage.eventCode ===
                            "motb_pickup_loc" ||
                          event?.event.eventMessage.eventCode ===
                            "motb_drop_loc"
                            ? ""
                            : event?.event.eventMessage.actionMessage}
                        </h3>
                      ),
                      middle:
                        event?.event.eventMessage.eventCode ===
                          "mbwa_pickup_loc" ||
                        event?.event.eventMessage.eventCode ===
                          "mbwa_drop_loc" ||
                        event?.event.eventMessage.eventCode ===
                          "motb_pickup_loc" ||
                        event?.event.eventMessage.eventCode ===
                          "motb_drop_loc" ? (
                          ""
                        ) : (
                          <div
                            className={`step step_${
                              event?.event.eventSource.id +
                              "_" +
                              event?.event.eventDestination.id
                            }`}
                          ></div>
                        ),
                    }}
                  />
                </div>
              );
            })}
        </Xwrapper>
      </Box>
    </motion.div>
  );
};

export default MobilityCard;
