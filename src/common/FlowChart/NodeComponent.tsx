import React, { useContext, useEffect, useState } from "react";
import ReactFlow, { useNodesState } from "reactflow";
import "reactflow/dist/style.css";
import FloatingEdge from "./FloatingEdge";
import { createNodesAndEdges, ids } from "./nodeUtils";
import "./index.css";
import EventApiContext from "../../context/EventApiContext";
import useInterval from "../MobilityCard/useInterval";

const edgeTypes: any = {
  floating: FloatingEdge,
};

const NodeAsHandleFlow: React.FC = () => {
  const [events, setEvents] = useState<any>([]);
  const [events1, setEvents1] = useState<any>([]);
  const { nodes: initialNodes, edges: initialEdge } = createNodesAndEdges(
    events,
    events1
  );
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const { getEvent } = useContext(EventApiContext);

  const fetchEvent = async () => {
    try {
      const res = await getEvent();
      await setEvents(res?.events[0].event);
      const firstResponseOfAPI = await res?.events[1].event.eventMessage
        .eventCode;
      const secondResponseOfAPI = await res?.events[0].event.eventMessage
        .eventCode;

      if (
        (firstResponseOfAPI === ids.searchBroadCast &&
          secondResponseOfAPI === ids.searchBroadCast) ||
        (firstResponseOfAPI === ids.mbthSentCatalogue &&
          secondResponseOfAPI === ids.mblcSentCatalogue) ||
        (firstResponseOfAPI === ids.mblcSentCatalogue &&
          secondResponseOfAPI === ids.mbthSentCatalogue) ||
        (firstResponseOfAPI === ids.mbgwSentCatalogueBap &&
          secondResponseOfAPI === ids.mbgwSentCatalogueBap) ||
        (firstResponseOfAPI === ids.mbgwSentCatalogueBap &&
          secondResponseOfAPI === ids.mbgwSentCatalogueBap)
      ) {
        await setEvents1(res?.events[1].event);
      } else {
        await setEvents1([]);
      }
    } catch (error) {
      console.log(`error ${error}`);
    }
  };

  useInterval(() => {
    fetchEvent();
  }, 1000);
  console.log(`events`, events, "lol", events1);
  const updateNodes = nodes
    .map((node) => {
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

  console.log(`updateNodes`, updateNodes);
  // setNodes(updateNodes);
  return (
    <div className="floatingedges">
      <ReactFlow
        nodes={updateNodes}
        edges={initialEdge}
        onNodesChange={onNodesChange}
        fitView
        edgeTypes={edgeTypes}
      ></ReactFlow>
    </div>
  );
};

export default NodeAsHandleFlow;
