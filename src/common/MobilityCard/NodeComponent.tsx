import { Link } from "react-router-dom";

import myMobility from "../../assets/myMobility.svg";
import RHP from "../../assets/RHP.svg";
import whatsappMobility from "../../assets/whatsappMobility.svg";
import LuxeCab from "../../assets/LuxeCab.png";
import GWP from "../../assets/girlWithPhone.svg";
import MWP from "../../assets/menWithPhone.svg";
import circle from "../../assets/circle.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import useInterval from "./useInterval";

const NodeComponent = (props: any) => {
  const mobilityCardArr = [
    {
      img: `${myMobility}`,
      name: "mobility",
      id: "mobilityreferencebap.becknprotocol.io",
    },
    {
      img: `${RHP}`,
      name: "taxi",
      id: "becknify.humbhionline.in.mobility.BPP/beckn_open/app1-succinct-in",
    },

    {
      title: "Gateway",
      name: "gateway",
      id: "gateway.becknprotocol.io",
    },
    {
      img: `${whatsappMobility}`,
      name: "whatsappMobility",
      id: "mobilityreferencebap-staging.becknprotocol.io",
    },
    {
      img: `${LuxeCab}`,
      name: "yatri",
      id: "becknify.humbhionline.in/mobility/beckn_open/taxi-staging/bpp",
    },
  ];
  const expId = localStorage.getItem("expId");
  const [experienceCenterId, setExperienceCenterId] = useState<any>("");

  const [events, setEvents] = useState<any>([]);
  const fetchEvent = async () => {
    try {
      const res = await axios.get(
        `https://api.experience.becknprotocol.io/v2/event/${expId}`
      );
      setExperienceCenterId(res.data.experienceSession.experienceCenterId);
      setEvents(res.data.events);
    } catch (error) {
      console.log(`error ${error}`);
    }
  };
  console.log(experienceCenterId);

  useEffect(() => {
    fetchEvent();
  }, []);

  const sortedEvents = events
    .map((e: any) => e)
    .sort((a: any, b: any) => b.eventId - a.eventId);
  console.log(sortedEvents, "sortedEvents");

  useInterval(() => {
    fetchEvent();
  }, 500);

  return (
    <>
      <div className="mobility-row">
        {events.length > 0 &&
        (sortedEvents[0].event.eventMessage.eventCode === "mbwa_pickup_loc" ||
          sortedEvents[0].event.eventMessage.eventCode === "mbwa_drop_loc" ||
          sortedEvents[0].event.eventMessage.eventCode === "motb_pickup_loc" ||
          sortedEvents[0].event.eventMessage.eventCode === "motb_drop_loc") ? (
          <h3
            style={{
              color: "white",
              position: "absolute",
              top: "0.5%",
              left: "0%",
            }}
          >
            {events[0].event.eventMessage.actionMessage}
          </h3>
        ) : null}

        {mobilityCardArr.map((ele, ind) => {
          return (
            <div id={ele.id} className={`${ele.name}s`} key={ind}>
              <div className={`border${ele.name}`}>
                <div className={ele.name} style={{ background: "#ACD1F0" }}>
                  {ele.img ? (
                    <img src={ele.img} alt="" />
                  ) : (
                    <div>{ele.title}</div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mobilityFooter">
        <div className="GWP">
          <div className="GWP-text">{props.riderText}</div>

          <img src={GWP} alt="" />
        </div>
        <div className="MWP">
          <div className="MWP-text">{props.driverText}</div>
          <Link to="/WhatWouldYouDoLikeToNext">
            <img src={MWP} alt="" />
          </Link>
        </div>
        <img
          className={`circle ${
            experienceCenterId === "2"
              ? "circle-driver-active"
              : "circle-driver"
          }`}
          src={circle}
          alt=""
        />
      </div>
    </>
  );
};

export default NodeComponent;
