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
  const ids = {
    mobility: "mobilityreferencebap.becknprotocol.io",
    taxi: "becknify.humbhionline.in.mobility.BPP/beckn_open/app1-succinct-in",
    gateway: "gateway.becknprotocol.io",
    whatsappMobility: "mobilityreferencebap-staging.becknprotocol.io",
    luxeCabs: "becknify.humbhionline.in/mobility/beckn_open/taxi-staging/bpp",
  };
  const slicedArr: any[] = [];
  events
    .sort((a: any, b: any) => a.eventId - b.eventId)
    // eslint-disable-next-line array-callback-return
    .map((event: any) => {
      if (
        (event.event.eventSource.id === ids.gateway &&
          event.event.eventDestination.id === ids.taxi) ||
        (event.event.eventSource.id === ids.gateway &&
          event.event.eventDestination.id === ids.luxeCabs)
      ) {
        slicedArr.splice(0);
        return slicedArr.push(
          ...events.slice(
            events[events.length - 1].event.eventSource.id === ids.gateway
              ? 3
              : 0,
            events[events.length - 1].event.eventSource.id === ids.gateway
              ? events.length
              : 0
          )
        );
      } else if (
        (event.event.eventSource.id === ids.luxeCabs &&
          event.event.eventDestination.id === ids.gateway) ||
        (event.event.eventSource.id === ids.taxi &&
          event.event.eventDestination.id === ids.gateway)
      ) {
        slicedArr.splice(0);
        return slicedArr.push(
          ...events.slice(
            events[events.length - 1].event.eventDestination.id === ids.gateway
              ? 5
              : 0,
            events[events.length - 1].event.eventDestination.id === ids.gateway
              ? events.length
              : 0
          )
        );
      } else if (
        (event.event.eventSource.id === ids.gateway &&
          event.event.eventDestination.id === ids.mobility) ||
        (event.event.eventSource.id === ids.gateway &&
          event.event.eventDestination.id === ids.whatsappMobility)
      ) {
        slicedArr.splice(0);
        return slicedArr.push(
          ...events.slice(
            events[events.length - 1].event.eventDestination.id === ids.mobility
              ? 7
              : 0,
            events[events.length - 1].event.eventDestination.id === ids.mobility
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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
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
                    startAnchor={
                      event.event.eventSource.id === ids.whatsappMobility &&
                      event.event.eventDestination.id === ids.taxi
                        ? "top"
                        : event.event.eventSource.id === ids.luxeCabs &&
                          event.event.eventDestination.id === ids.mobility
                        ? "top"
                        : "auto"
                    }
                    endAnchor={
                      event.event.eventSource.id === ids.taxi &&
                      event.event.eventDestination.id === ids.whatsappMobility
                        ? "top"
                        : event.event.eventSource.id === ids.mobility &&
                          event.event.eventDestination.id === ids.luxeCabs
                        ? "top"
                        : "auto"
                    }
                    curveness={0.6}
                    lineColor={
                      event.event.eventSource.id === ids.taxi ||
                      event.event.eventSource.id === ids.luxeCabs ||
                      (event.event.eventSource.id === ids.gateway &&
                        event.event.eventDestination.id === ids.mobility) ||
                      (event.event.eventSource.id === ids.gateway &&
                        event.event.eventDestination.id ===
                          ids.whatsappMobility)
                        ? "#FB1E1E"
                        : "#23DFDF"
                    }
                    headColor={
                      event.event.eventSource.id === ids.taxi ||
                      event.event.eventSource.id === ids.luxeCabs ||
                      (event.event.eventSource.id === ids.gateway &&
                        event.event.eventDestination.id === ids.mobility) ||
                      (event.event.eventSource.id === ids.gateway &&
                        event.event.eventDestination.id ===
                          ids.whatsappMobility)
                        ? "#FB1E1E"
                        : "#23DFDF"
                    }
                    animateDrawing={true}
                    headSize={7}
                    // path={"straight"}
                    path={
                      (event.event.eventSource.id === ids.whatsappMobility &&
                        event.event.eventDestination.id === ids.taxi) ||
                      (event.event.eventSource.id === ids.mobility &&
                        event.event.eventDestination.id === ids.luxeCabs)
                        ? "smooth"
                        : (event.event.eventSource.id === ids.taxi &&
                            event.event.eventDestination.id ===
                              ids.whatsappMobility) ||
                          (event.event.eventSource.id === ids.luxeCabs &&
                            event.event.eventDestination.id === ids.mobility)
                        ? "smooth"
                        : "straight"
                    }
                    labels={{
                      start: (
                        <div>
                          <h3
                            className={`eventMessage event_${
                              event?.event.eventSource.name +
                              "_" +
                              event?.event.eventDestination.name
                            }`}
                          >
                            {event?.event.eventSource.id ===
                            event?.event.eventDestination.id
                              ? ""
                              : event?.event.eventMessage.actionMessage}
                          </h3>
                        </div>
                      ),
                      middle:
                        event?.event.eventSource.id ===
                        event?.event.eventDestination.id ? (
                          ""
                        ) : (
                          <div
                            className={`step step_${
                              event?.event.eventSource.name +
                              "_" +
                              event?.event.eventDestination.name
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
