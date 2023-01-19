import React, { useCallback, useContext, useEffect, useState } from "react";
import ReactFlow, {
  addEdge,
  Background,
  useNodesState,
  useEdgesState,
  MarkerType,
} from "reactflow";
import "reactflow/dist/style.css";
import NodeTypeComp from "./NodeType";
import FloatingEdge from "./FloatingEdge";
import FloatingConnectionLine from "./FloatingConnectionLine";
import { createNodesAndEdges } from "./utils";
import "./index.css";
// import { useNavigate } from "react-router-dom";
import EventApiContext from "../../context/EventApiContext";
import useInterval from "../MobilityCard/useInterval";


const edgeTypes: any = {
  floating: FloatingEdge,
};

const connectionLineComponent: any = {
  connectionLine: FloatingConnectionLine,
};

const nodeTypes: any = {
  circleNode: NodeTypeComp,
};

const NodeAsHandleFlow: React.FC = () => {
  const [events, setEvents] = useState<any>([]);
  const [events1, setEvents1] = useState<any>([]);

  const { nodes: initialNodes, edges: initialEdge } = createNodesAndEdges(events, events1);

  const [nodes,setNodes , onNodesChange] = useNodesState(initialNodes);
  // const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  // console.log("XXXX", edges);
  // const navigate = useNavigate();
  const { getEvent } = useContext(EventApiContext);
  const fetchEvent = async () => {
    try {
      const res = await getEvent();
      console.log("VVVV---->", res)
      setEvents(res?.events[0].event);
      if(res?.events.length>0){
        setEvents1(res?.events[1].event)
      }
      console.log("first", res?.events[0].event);
    } catch (error) {
      console.log(`error ${error}`);
    }
  };

  useInterval(() => {
    fetchEvent();
  }, 1000);

  // if (
  //   events.length > 0 &&
  //   events[events.length - 1].event.eventMessage.eventCode ===
  //     "recieved_payconfirmation"
  // ) {
  //   setTimeout(() => {
  //     navigate("/WhatWouldYouDoLikeToNext");
  //   }, 5000);
  // }
  // const onConnect = useCallback(
  //   (params: any) =>
  //     setEdges((eds) =>
  //       addEdge({ ...params, type: 'floating', markerStart:{type: MarkerType.Arrow, orient: 'auto-start-reverse', color: '#FF0072'}, markerEnd: { type: MarkerType.Arrow , color: '#FF0072'} }, eds)
  //     ),
  //   [setEdges]
  // );
  // const onConnect = useCallback(
  //   (params: any) => setEdges((els: any) => addEdge(params, els)),
  //   []
  // );

  return (  
    <div className="floatingedges">
      <ReactFlow
   
        nodes={nodes}
        edges={initialEdge}
        onNodesChange={onNodesChange}
        // onEdgesChange={onEdgesChange}
        // onConnect={onConnect}
        fitView
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        // connectionLineComponent={connectionLineComponent}
      >
      </ReactFlow>
    </div>
  );
};

export default NodeAsHandleFlow;
