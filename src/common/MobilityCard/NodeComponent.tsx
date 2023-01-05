import { Link } from "react-router-dom";
import myMobility from "../../assets/myMobility.svg";
import RHP from "../../assets/RHP.svg";
import whatsappMobility from "../../assets/whatsappMobility.svg";
import LuxeCab from "../../assets/luxe.svg";
import GWP from "../../assets/girlWithPhone.svg";
import MWP from "../../assets/menWithPhone.svg";
import circle from "../../assets/circle.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import useInterval from "./useInterval";

const NodeComponent = (props: any) => {
  const ids = {
    mobility: "mobilityreferencebap.becknprotocol.io",
    taxi: "becknify.humbhionline.in.mobility.BPP/beckn_open/app1-succinct-in",
    gateway: "gateway.becknprotocol.io",
    whatsappMobility: "mobilityreferencebap-staging.becknprotocol.io",
    yatri: "becknify.humbhionline.in/mobility/beckn_open/taxi-staging/bpp",
  };
  const mobilityCardArr = [
    {
      img: `${myMobility}`,
      name: "mobility",
      id: ids.mobility,
    },
    {
      img: `${RHP}`,
      name: "taxi",
      id: ids.taxi,
    },
    {
      title: "Gateway",
      name: "gateway",
      id: ids.gateway,
    },
    {
      img: `${whatsappMobility}`,
      name: "whatsappMobility",
      id: ids.whatsappMobility,
    },
    {
      img: `${LuxeCab}`,
      name: "yatri",
      id: ids.yatri,
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

  useEffect(() => {
    fetchEvent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sortedEvents = events
    .map((e: any) => e)
    .sort((a: any, b: any) => b.eventId - a.eventId);

  useInterval(() => {
    fetchEvent();
  }, 500);

  const getClassNameOfNode = (ele: any, events: any) => {
    if (events.length > 0) {
      if (events.some((ev: any) => ele.id === ev.event.eventSource.id)) {
        return "source-node";
      } else if (
        events.some((ev: any) => ele.id === ev.event.eventDestination.id)
      ) {
        return "dest-node";
      } else {
        return "";
      }
    }
    return "";
  };

  const getClassNameOfNodeForBorder = (ele: any, events: any) => {
    if (events.length > 0) {
      if (events.some((ev: any) => ele.id === ev.event.eventSource.id)) {
        return "source-node-border";
      } else if (
        events.some((ev: any) => ele.id === ev.event.eventDestination.id)
      ) {
        return "dest-node-border";
      } else {
        return "";
      }
    }
    return "";
  };

  return (
    <>
      <div className="mobility-row">
        {events.length > 0 &&
        sortedEvents[0].event.eventSource.id ===
          sortedEvents[0].event.eventDestination.id ? (
          <h3
            className={
              (sortedEvents[0].event.eventSource.id &&
                sortedEvents[0].event.eventDestination.id) === ids.mobility
                ? "mobilitySource"
                : (sortedEvents[0].event.eventSource.id &&
                    sortedEvents[0].event.eventDestination.id) === ids.taxi
                ? "taxihubSource"
                : (sortedEvents[0].event.eventSource.id &&
                    sortedEvents[0].event.eventDestination.id) ===
                  ids.whatsappMobility
                ? "whatsappSource"
                : (sortedEvents[0].event.eventSource.id &&
                    sortedEvents[0].event.eventDestination.id) === ids.yatri
                ? "luxecabSource"
                : ""
            }
          >
            {events[0].event.eventMessage.actionMessage}
          </h3>
        ) : null}

        {mobilityCardArr.map((ele, ind) => {
          return (
            <div id={ele.id} className={`${ele.name}s `} key={ind}>
              <div
                className={`border${ele.name} ${getClassNameOfNodeForBorder(
                  ele,
                  props.uniqueArray
                )}`}
              >
                <div
                  className={`${ele.name} 
                  ${getClassNameOfNode(ele, props.uniqueArray)}
                  `}
                  style={{ background: "#ACD1F0" }}
                >
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
