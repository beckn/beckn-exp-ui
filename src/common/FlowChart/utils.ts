import { useEffect } from "react";
import { Position, MarkerType } from "reactflow";
import { ids } from "../../utility/utils";

const getNodeIntersection = (intersectionNode: any, targetNode: any) => {
  const {
    width: intersectionNodeWidth,
    height: intersectionNodeHeight,
    positionAbsolute: intersectionNodePosition,
  } = intersectionNode;
  const targetPosition = targetNode.positionAbsolute;

  const w = intersectionNodeWidth / 2;
  const h = intersectionNodeHeight / 2;

  const x2 = intersectionNodePosition.x + w;
  const y2 = intersectionNodePosition.y + h;
  const x1 = targetPosition.x + w;
  const y1 = targetPosition.y + h;

  const xx1 = (x1 - x2) / (2 * w) - (y1 - y2) / (2 * h);
  const yy1 = (x1 - x2) / (2 * w) + (y1 - y2) / (2 * h);
  const a = 1 / (Math.abs(xx1) + Math.abs(yy1));
  const xx3 = a * xx1;
  const yy3 = a * yy1;
  const x = w * (xx3 + yy3) + x2;
  const y = h * (-xx3 + yy3) + y2;

  return { x, y };
};

const getEdgePosition = (node: any, intersectionPoint: any) => {
  const n = { ...node.positionAbsolute, ...node };
  const nx = Math.round(n.x);
  const ny = Math.round(n.y);
  const px = Math.round(intersectionPoint.x);
  const py = Math.round(intersectionPoint.y);

  if (px <= nx + 1) {
    return Position.Left;
  }
  if (px >= nx + n.width - 1) {
    return Position.Right;
  }
  if (py <= ny + 1) {
    return Position.Top;
  }
  if (py >= n.y + n.height - 1) {
    return Position.Bottom;
  }

  return Position.Top;
};

// returns the parameters (sx, sy, tx, ty, sourcePos, targetPos) you need to create an edge
export const getEdgeParams = (source: any, target: any) => {
  const sourceIntersectionPoint = getNodeIntersection(source, target);
  const targetIntersectionPoint = getNodeIntersection(target, source);

  const sourcePos = getEdgePosition(source, sourceIntersectionPoint);
  const targetPos = getEdgePosition(target, targetIntersectionPoint);

  return {
    sx: sourceIntersectionPoint.x,
    sy: sourceIntersectionPoint.y,
    tx: targetIntersectionPoint.x,
    ty: targetIntersectionPoint.y,
    sourcePos,
    targetPos,
  };
};

export const createNodesAndEdges = (data: any, data1: any) => {
  const nodes = [];
  const edges = [];

  nodes.push(
    {
      id: ids.gateway,
      data: { label: "Gateway" },
      className: "gateway",
      position: { x: 526, y: 200 },
    },
    {
      id: ids.mobility,
      data: { label: "" },
      className: "mobility",
      position: { x: 400, y: 100 },
    },
    {
      id: ids.taxi,
      className: "RHP",
      data: { label: "" },
      position: { x: 650, y: 100 },
    },
    {
      id: ids.whatsappMobility,
      data: { label: "" },
      className: "whatsapp",
      position: { x: 400, y: 300 },
    },
    {
      id: ids.luxeCabs,
      className: "Luxecub",
      data: { label: "" },
      position: { x: 650, y: 300 },
    }
  );

  edges.push(
    {
      id: `edge-rahul`,
      source: data?.eventSource?.id,
      target: data?.eventDestination?.id,
      data: {
        text: data?.eventMessage?.actionMessage,
      },
      type: "floating",
      markerStart: {
        type: MarkerType.Arrow,
        orient: "auto-start-reverse",
        color: "#FF0072",
      },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 20,
        height: 20,
        color: "#FF0072",
      },
      style: {
        strokeWidth: 2,
        stroke: "#FF0072",
        color: "red",
      },
    },
    {
      id: `edge-rahul`,
      source: data1?.eventSource?.id,
      target: data1?.eventDestination?.id,
      label: data1?.eventMessage?.actionMessage,
      type: "floating",
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 20,
        height: 20,
        color: "#FF0072",
      },
      markerStart: {
        type: MarkerType.Arrow,
        orient: "auto-start-reverse",
        color: "#FF0072",
      },
      style: {
        strokeWidth: 2,
        stroke: "#FF0072",
      },
    }
  );

  return { nodes, edges };
};
