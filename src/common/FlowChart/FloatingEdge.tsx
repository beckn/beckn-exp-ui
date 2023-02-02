import { useCallback } from "react";
import {
  useStore,
  getBezierPath,
  EdgeLabelRenderer,
  getSmoothStepPath,
} from "reactflow";
import { getEdgeParams } from "./nodeUtils";
import { ids } from "../../utility/utils";
import "./index.css";

interface floatingEdgeDataModal {
  id: any | undefined;
  source: any | undefined;
  target: any | undefined;
  markerEnd: any | undefined;
  style: any | undefined;
  data: any | undefined;
}

const FloatingEdge: React.FC<floatingEdgeDataModal> = ({
  id,
  source,
  target,
  markerEnd,
  style,
  data,
}: floatingEdgeDataModal) => {
  const sourceNode = useStore(
    useCallback((store) => store.nodeInternals.get(source), [source])
  );
  const targetNode = useStore(
    useCallback((store) => store.nodeInternals.get(target), [target])
  );

  if (!sourceNode || !targetNode) {
    return null;
  }

  const { sx, sy, tx, ty, sourcePos, targetPos } = getEdgeParams(
    sourceNode,
    targetNode
  );

  if (
    (source === ids.whatsappMobility && target === ids.taxi) ||
    (source === ids.taxi && target === ids.whatsappMobility) ||
    (source === ids.mobility && target === ids.luxeCabs) ||
    (source === ids.luxeCabs && target === ids.mobility)
  ) {
    const [edgePath, labelX, labelY] = getSmoothStepPath({
      sourceX: sx,
      sourceY: sy,
      sourcePosition: sourcePos,
      targetPosition: targetPos,
      targetX: tx,
      targetY: ty,
      centerX: (sx + tx) / 2.5,
      centerY: (sy + ty) / 2.5,
    });
    return (
      <>
        <path
          id={id}
          className="react-flow__edge-path"
          d={edgePath}
          markerEnd={markerEnd}
          style={style}
        />

        <EdgeLabelRenderer>
          <div
            style={{
              top: data.eventCode === ids.mbgwSentCatalogueBap ? "-30px" : "",
              position: "absolute",
              transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
              background: "#ffcc00",
              padding: 4,
              borderRadius: 5,
              fontSize: 6,
              fontWeight: 700,
            }}
            className="nodrag nopan"
          >
            {data.text}
          </div>
        </EdgeLabelRenderer>
      </>
    );
  } else if (
    (source === ids.mobility && target === ids.mobility) ||
    (source === ids.whatsappMobility && target === ids.whatsappMobility) ||
    (source === ids.luxeCabs && target === ids.luxeCabs) ||
    (source === ids.taxi && target === ids.taxi)
  ) {
    return null;
  } else {
    const [edgePath, labelX, labelY] = getBezierPath({
      sourceX: sx,
      sourceY: sy,
      sourcePosition: sourcePos,
      targetPosition: targetPos,
      targetX: tx,
      targetY: ty,
    });
    return (
      <>
        <path
          id={id}
          className="react-flow__edge-path"
          d={edgePath}
          markerEnd={markerEnd}
          style={style}
        />

        <EdgeLabelRenderer>
          <div
            style={{
              top: data.eventCode === ids.mbgwSentCatalogueBap ? "-30px" : "",
              position: "absolute",
              transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
              background: "#ffcc00",
              padding: 4,
              borderRadius: 5,
              fontSize: 6,
              fontWeight: 700,
            }}
            className="nodrag nopan"
          >
            {data.text}
          </div>
        </EdgeLabelRenderer>
      </>
    );
  }
};

export default FloatingEdge;
