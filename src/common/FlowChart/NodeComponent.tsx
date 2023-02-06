import React, { useContext, useState } from "react";
import ReactFlow, { useNodesState } from "reactflow";
import "reactflow/dist/style.css";
import FloatingEdge from "./FloatingEdge";
import { createNodesAndEdges } from "./nodeUtils";
import { ids } from "../../utility/utils";
import "./index.css";
import EventApiContext from "../../context/EventApiContext";
import useInterval from "../MobilityCard/useInterval";
import { Link } from "react-router-dom";
import { Modal } from "antd";
import ErrorModal from "../ErrorModal/ErrorModal";

const edgeTypes: any = {
  floating: FloatingEdge,
};

const NodeAsHandleFlow: React.FC = () => {
  const [events, setEvents] = useState<any>([]);
  const [eventsRes, setEventsRes] = useState<any>([]);
  const [events1, setEvents1] = useState<any>([]);
  const { nodes: initialNodes, edges: initialEdge } = createNodesAndEdges(
    events,
    events1
  );
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const { getEvent } = useContext(EventApiContext);
  const [experienceCenterId, setExperienceCenterId] = useState<any>("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const fetchEvent = async () => {
    try {
      const res = await getEvent();
      setEventsRes(res?.events);
      setEvents(res?.events[0].event);
      setExperienceCenterId(res?.experienceSession.experienceCenterId);
      const firstResponseOfAPI = await res?.events[1].event.eventMessage
        .eventCode;
      const secondResponseOfAPI = await res?.events[0].event.eventMessage
        .eventCode;

      if (
        firstResponseOfAPI === ids.searchBroadCast &&
        secondResponseOfAPI === ids.searchBroadCast
        // ||
        // (firstResponseOfAPI === "mbth_snt_catalogue" &&
        //   secondResponseOfAPI === "mblc_snt_catalogue") ||
        // (firstResponseOfAPI === "mblc_snt_catalogue" &&
        //   secondResponseOfAPI === "mbth_snt_catalogue") ||
        // (firstResponseOfAPI === ids.mbgwSentCatalogueBap &&
        //   secondResponseOfAPI === ids.mbgwSentCatalogueBap) ||
        // (firstResponseOfAPI === ids.mbgwSentCatalogueBap &&
        //   secondResponseOfAPI === ids.mbgwSentCatalogueBap)
      ) {
        setEvents1(res?.events[1].event);
      } else {
        setEvents1([]);
      }
    } catch (error) {}
  };

  useInterval(() => {
    fetchEvent();
  }, 1000);
  console.log(events, "events");
  console.log(events1, "events1");
  console.log(eventsRes, "eventsRes");
  const updateNodes = nodes
    .map((node) => {
      if (
        node.id === ids.mobility &&
        events?.eventSource?.id === ids.mobility &&
        events?.eventDestination?.id === ids.mobility
      ) {
        return {
          ...node,
          data: {
            ...node.data,
            label: (
              <div className="nodeMobility">
                {eventsRes[0]?.event.eventMessage.actionMessage}
              </div>
            ),
          },

          className: "activeMobility",
        };
      }
      if (
        node.id === ids.whatsappMobility &&
        events?.eventSource?.id === ids.whatsappMobility &&
        events?.eventDestination?.id === ids.whatsappMobility
      ) {
        return {
          ...node,
          data: {
            ...node.data,
            label: (
              <div className="nodeMobility">
                {eventsRes[0]?.event.eventMessage.actionMessage}
              </div>
            ),
          },

          className: "activeWhatsappMobility",
        };
      }
      if (
        node.id === ids.luxeCabs &&
        events?.eventSource?.id === ids.luxeCabs &&
        events?.eventDestination?.id === ids.luxeCabs
      ) {
        return {
          ...node,
          data: {
            ...node.data,
            label: (
              <div className="nodeMobility">
                {eventsRes[0]?.event.eventMessage.actionMessage}
              </div>
            ),
          },

          className: "activeLuxeCabs",
        };
      }
      if (
        node.id === ids.taxi &&
        events?.eventSource?.id === ids.taxi &&
        events?.eventDestination?.id === ids.taxi
      ) {
        return {
          ...node,
          data: {
            ...node.data,
            label: (
              <div className="nodeMobility">
                {eventsRes[0]?.event.eventMessage.actionMessage}
              </div>
            ),
          },

          className: "activeTaxi",
        };
      }

      if (
        (node.id === ids.mobility &&
          events?.eventSource?.id === ids.mobility) ||
        (node.id === ids.mobility && events1?.eventSource?.id === ids.mobility)
      ) {
        return {
          ...node,

          className: "activeMobility",
        };
      }
      if (
        (node.id === ids.gateway && events?.eventSource?.id === ids.gateway) ||
        (node.id === ids.gateway && events1?.eventSource?.id === ids.gateway) ||
        (node.id === ids.gateway &&
          events?.eventDestination?.id === ids.gateway) ||
        (node.id === ids.gateway &&
          events1?.eventDestination?.id === ids.gateway)
      ) {
        return {
          ...node,
          className: "activeGateway",
        };
      }
      if (
        (node.id === ids.taxi && events?.eventSource?.id === ids.taxi) ||
        (node.id === ids.taxi && events1?.eventSource?.id === ids.taxi)
      ) {
        return {
          ...node,
          className: "activeTaxi",
        };
      }

      if (
        (node.id === ids.luxeCabs &&
          events?.eventSource?.id === ids.luxeCabs) ||
        (node.id === ids.luxeCabs && events1?.eventSource?.id === ids.luxeCabs)
      ) {
        return {
          ...node,
          className: "activeLuxeCabs",
        };
      }
      if (
        (node.id === ids.whatsappMobility &&
          events?.eventSource?.id === ids.whatsappMobility) ||
        (node.id === ids.whatsappMobility &&
          events1?.eventSource?.id === ids.whatsappMobility)
      ) {
        return {
          ...node,
          className: "activeWhatsappMobility",
        };
      }
      if (
        (node.id === ids.mobility &&
          events?.eventDestination?.id === ids.mobility) ||
        (node.id === ids.mobility &&
          events1?.eventDestination?.id === ids.mobility)
      ) {
        return {
          ...node,
          className: "destMobility",
        };
      }
      if (
        (node.id === ids.taxi && events?.eventDestination?.id === ids.taxi) ||
        (node.id === ids.taxi && events1?.eventDestination?.id === ids.taxi)
      ) {
        return {
          ...node,
          className: "destTaxi",
        };
      }
      if (
        (node.id === ids.luxeCabs &&
          events?.eventDestination?.id === ids.luxeCabs) ||
        (node.id === ids.luxeCabs &&
          events1?.eventDestination?.id === ids.luxeCabs)
      ) {
        return {
          ...node,
          className: "destLuxeCabs",
        };
      }
      if (
        (node.id === ids.whatsappMobility &&
          events?.eventDestination?.id === ids.whatsappMobility) ||
        (node.id === ids.whatsappMobility &&
          events1?.eventDestination?.id === ids.whatsappMobility)
      ) {
        return {
          ...node,
          className: "destWhatsappMobility",
        };
      }

      return node;
    })
    .filter(Boolean);

  return (
    <div className="floatingedges main-container page-content">
      <div className="header">
        <div>
          <img src="/assets/becklogoSmall.svg" alt={"BecknLogoIcon"} />
        </div>
        <div className="home-container" onClick={handleOpen}>
          <img src="/assets/homeIcon.png" alt={"HomeIcon"} />
          <Modal open={open} footer={null} closable={false}>
            <ErrorModal
              titleText={"Are you sure?"}
              subTitle={
                "You are about to exit this experience. Click 'confirm' to continue."
              }
              colorbuttonText={"Cancel"}
              buttonText={"Confirm"}
            />
          </Modal>
        </div>
      </div>

      <ReactFlow
        nodes={updateNodes}
        edges={initialEdge}
        onNodesChange={onNodesChange}
        fitView
        edgeTypes={edgeTypes}
      ></ReactFlow>
      <div className="mobilityFooter">
        <div className="GWP">
          <div className="GWP-text">
            {eventsRes.length > 0
              ? eventsRes[0].event.eventMessage.bapMessage
              : "rider"}
          </div>

          <img src="/assets/girlWithPhone.svg" alt="" />
        </div>
        <div className="MWP">
          <div className="MWP-text">
            {eventsRes.length > 0
              ? eventsRes[0].event.eventMessage.bppMessage
              : "driver"}
          </div>
          <Link to="/WhatWouldYouDoLikeToNext">
            <img src="/assets/menWithPhone.svg" alt="" />
          </Link>
        </div>
        <img
          className={`circle ${
            experienceCenterId === "2"
              ? "circle-driver-active"
              : "circle-driver"
          }`}
          src="/assets/circle.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default NodeAsHandleFlow;
