import { useCallback } from "react";
import {
  useStore,
  getBezierPath,
  EdgeLabelRenderer,
  getSmoothStepPath,
  getStraightPath,
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
  const isSourceMobilityandDestinationGateway =
    source === ids.mobility && target === ids.gateway;
  const isSourceGatewayandDestinationTaxi =
    source === ids.gateway && target === ids.taxi;
  const isSourceGatewayandDestinationLuxeCabs =
    source === ids.gateway && target === ids.luxeCabs;
  const isSourceTaxiandDestinationGateway =
    source === ids.taxi && target === ids.gateway;
  const isSourceLuxeCabsandDestinationGateway =
    source === ids.luxeCabs && target === ids.gateway;
  const isSourceGatewayandDestinationMobility =
    source === ids.gateway && target === ids.mobility;
  const isSourceMobilityandDestinationTaxi =
    source === ids.mobility && target === ids.taxi;
  const isSourceTaxiandDestinationMobility =
    source === ids.taxi && ids.mobility;
  const isSourceWhatsappandDestinationGateway =
    source === ids.whatsappMobility && target === ids.gateway;
  const isSourceGatewayandDestinationWhatsapp =
    source === ids.gateway && target === ids.whatsappMobility;
  const isSourceMobilityandDestinationLuxecabs =
    source === ids.mobility && target === ids.luxeCabs;
  const isSourceLuxeCabsandDestinationMobility =
    source === ids.luxeCabs && target === ids.mobility;
  const isSourceWhatsappandDestinationLuxecabs =
    source === ids.whatsappMobility && target === ids.luxeCabs;
  const isSourceLuxecabsandDestinationWhatsapp =
    source === ids.luxeCabs && target === ids.whatsappMobility;
  const isSourceWhatsappandDestinationTaxi =
    source === ids.whatsappMobility && target === ids.taxi;
  const isSourceTaxiandDestinationWhatsapp =
    source === ids.taxi && target === ids.whatsappMobility;

  if (
    (source === ids.whatsappMobility && target === ids.taxi) ||
    (source === ids.taxi && target === ids.whatsappMobility) ||
    (source === ids.mobility && target === ids.luxeCabs) ||
    (source === ids.luxeCabs && target === ids.mobility)
  ) {
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
          d={
            isSourceMobilityandDestinationLuxecabs
              ? "M 300 110 C 555 90 655 260 670 290"
              : isSourceLuxeCabsandDestinationMobility
              ? "M 640 320 C 645 370 655 150 270 130"
              : isSourceWhatsappandDestinationTaxi
              ? "M 300 290 C 300 310 295 120 670 90"
              : isSourceTaxiandDestinationWhatsapp
              ? "M 680 90 C 420 90 310 200 310 290"
              : edgePath
          }
          markerEnd={markerEnd}
          style={style}
        />

        <EdgeLabelRenderer>
          <div
            style={{
              top:
                data.eventCode === ids.mbgwSentCatalogueBap
                  ? "-30px"
                  : isSourceMobilityandDestinationLuxecabs
                  ? "-130px"
                  : isSourceLuxeCabsandDestinationMobility
                  ? "-34px"
                  : isSourceWhatsappandDestinationTaxi
                  ? "-74px"
                  : isSourceTaxiandDestinationWhatsapp
                  ? "-97px"
                  : "",
              left: isSourceMobilityandDestinationLuxecabs
                ? "-113px"
                : isSourceLuxeCabsandDestinationMobility
                ? "151px"
                : isSourceWhatsappandDestinationTaxi
                ? "-91px"
                : isSourceTaxiandDestinationWhatsapp
                ? "-71px"
                : "",
              position: "absolute",
              transform: isSourceLuxeCabsandDestinationMobility
                ? `translate(-50%, -50%) translate(${labelX}px,${labelY}px) rotate(45deg)`
                : isSourceWhatsappandDestinationTaxi
                ? `translate(-50%, -50%) translate(${labelX}px,${labelY}px) rotate(-30deg)`
                : isSourceTaxiandDestinationWhatsapp
                ? `translate(-50%, -50%) translate(${labelX}px,${labelY}px) rotate(-25deg)`
                : `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
              color: "#fff",
              fontSize: 10,
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
    const [edgePath, labelX, labelY] = getStraightPath({
      sourceX: sx,
      sourceY: sy,
      // sourcePosition: sourcePos,
      // targetPosition: targetPos,
      targetX: tx,
      targetY: ty,
    });
    return (
      <>
        <path
          id={id}
          className="react-flow__edge-path"
          d={
            isSourceGatewayandDestinationLuxeCabs
              ? "M  480 230 L 647 340"
              : isSourceGatewayandDestinationTaxi
              ? "M 480 190 L 651 110"
              : isSourceMobilityandDestinationGateway
              ? "M 290 122.609 L 410 198.696"
              : isSourceTaxiandDestinationGateway
              ? "M 630 110 L 490 190"
              : isSourceLuxeCabsandDestinationGateway
              ? "M 630 330 L 480 240"
              : isSourceGatewayandDestinationMobility
              ? "M 400 210 L 280 120"
              : isSourceMobilityandDestinationTaxi
              ? "M 295 100 L 640 100"
              : isSourceTaxiandDestinationMobility
              ? "M 630 100 L 300 100"
              : isSourceWhatsappandDestinationGateway
              ? "M 290 340 L 430 240"
              : isSourceGatewayandDestinationWhatsapp
              ? "M 400 225 L 270 330"
              : isSourceWhatsappandDestinationLuxecabs
              ? "M 300 340 L 640 340"
              : isSourceLuxecabsandDestinationWhatsapp
              ? "M 630 340 L 300 340"
              : edgePath
          }
          markerEnd={markerEnd}
          style={style}
        />

        <EdgeLabelRenderer>
          <div
            style={{
              top:
                data.eventCode === ids.mbgwSentCatalogueBap
                  ? "29px"
                  : isSourceGatewayandDestinationTaxi
                  ? "-10px"
                  : isSourceGatewayandDestinationLuxeCabs
                  ? "-25px"
                  : isSourceTaxiandDestinationGateway
                  ? "-44px"
                  : isSourceLuxeCabsandDestinationGateway
                  ? "23px"
                  : isSourceMobilityandDestinationTaxi
                  ? "-13px"
                  : isSourceTaxiandDestinationMobility
                  ? "-13px"
                  : isSourceWhatsappandDestinationGateway
                  ? "28px"
                  : isSourceGatewayandDestinationWhatsapp
                  ? "-15px"
                  : isSourceMobilityandDestinationGateway
                  ? "-23px"
                  : isSourceWhatsappandDestinationLuxecabs
                  ? "-13px"
                  : isSourceLuxecabsandDestinationWhatsapp
                  ? "-13px"
                  : "-3px",
              left: isSourceMobilityandDestinationGateway
                ? "-18px"
                : isSourceGatewayandDestinationTaxi
                ? "-35px"
                : isSourceGatewayandDestinationLuxeCabs
                ? "-28px"
                : isSourceTaxiandDestinationGateway
                ? "27px"
                : isSourceLuxeCabsandDestinationGateway
                ? "40px"
                : isSourceGatewayandDestinationMobility
                ? "24px"
                : isSourceMobilityandDestinationTaxi
                ? "-132px"
                : isSourceTaxiandDestinationMobility
                ? "132px"
                : isSourceWhatsappandDestinationGateway
                ? "-33px"
                : isSourceGatewayandDestinationWhatsapp
                ? "2px"
                : isSourceWhatsappandDestinationLuxecabs
                ? "-100px"
                : isSourceLuxecabsandDestinationWhatsapp
                ? "100px"
                : "",
              position: "absolute",
              transform: isSourceMobilityandDestinationGateway
                ? `translate(-50%, -50%) translate(${labelX}px,${labelY}px) rotate(33deg)`
                : isSourceGatewayandDestinationTaxi
                ? `translate(-50%, -50%) translate(${labelX}px,${labelY}px)rotate(-25deg)`
                : isSourceGatewayandDestinationLuxeCabs
                ? `translate(-50%, -50%) translate(${labelX}px,${labelY}px) rotate(33deg)`
                : isSourceTaxiandDestinationGateway
                ? `translate(-50%, -50%) translate(${labelX}px,${labelY}px) rotate(-29deg)`
                : isSourceLuxeCabsandDestinationGateway
                ? `translate(-50%, -50%) translate(${labelX}px,${labelY}px) rotate(32deg)`
                : isSourceGatewayandDestinationMobility
                ? `translate(-50%, -50%) translate(${labelX}px,${labelY}px) rotate(38deg)`
                : isSourceWhatsappandDestinationGateway
                ? `translate(-50%, -50%) translate(${labelX}px,${labelY}px) rotate(-35deg)`
                : isSourceGatewayandDestinationWhatsapp
                ? `translate(-50%, -50%) translate(${labelX}px,${labelY}px) rotate(-39deg)`
                : `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,

              color: "#FFFF",
              fontSize: 10,
              fontWeight: 700,
            }}
            className="nodrag nopan"
          >
            {/* <div
              style={{
                width: "10px",
                height: "10px",
                backgroundColor: "#fff",
                position: "absolute",
                top: "14px",
                left: "4px",
              }}
            ></div> */}
            {data.text}
          </div>
        </EdgeLabelRenderer>
      </>
    );
  }
};

export default FloatingEdge;
