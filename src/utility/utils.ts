import myMobility from "../assets/myMobility.svg";
import RHP from "../assets/RHP.svg";
import whatsappMobility from "../assets/whatsappMobility.svg";
import LuxeCab from "../assets/luxe.svg";

    const ids = {
      mobility: "mobilityreferencebap.becknprotocol.io",
      taxi: "becknify.humbhionline.in.mobility.BPP/beckn_open/app1-succinct-in",
      gateway: "gateway.becknprotocol.io",
      whatsappMobility: "mobilityreferencebap-staging.becknprotocol.io",
      yatri: "becknify.humbhionline.in/mobility/beckn_open/taxi-staging/bpp",
      luxeCabs: "becknify.humbhionline.in/mobility/beckn_open/taxi-staging/bpp"
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

    export {
      mobilityCardArr,
      ids,
      getClassNameOfNode,
      getClassNameOfNodeForBorder
    }