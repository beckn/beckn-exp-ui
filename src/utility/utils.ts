import myMobility from "../assets/myMobility.svg";
import RHP from "../assets/RHP.svg";
import whatsappMobility from "../assets/whatsappMobility.svg";
import LuxeCab from "../assets/luxe.svg";

const ids = {
  // TODO :- to change the IDs to the respective stakeholders

  pulseEnergyWhatsapp: "ps-bap-network.becknprotocol.io",
  pulseEnergyBpp: "industry4-bpp",
  gateway: "provider",
  sheruBap: "mobilityreferencebap-staging.becknprotocol.io",
  yatri: "becknify.humbhionline.in/mobility/beckn_open/taxi-staging/bpp",
  turnoBpp: "becknify.humbhionline.in/mobility/beckn_open/taxi-staging/bpp",
  searchBroadCast: "mbgw_srch_brdcst",
  mbthSentCatalogue: "mbth_snt_catalogue",
  mblcSentCatalogue: "mblc_snt_catalogue",
  mbgwSentCatalogueBap: "mbgw_sent_ctlg_bap",
  kazam: "kazam",
};

const mobilityCardArr = [
  {
    img: `${myMobility}`,
    name: "mobility",
    id: ids.pulseEnergyWhatsapp,
  },
  {
    img: `${RHP}`,
    name: "taxi",
    id: ids.pulseEnergyBpp,
  },
  {
    title: "Gateway",
    name: "gateway",
    id: ids.gateway,
  },
  {
    img: `${whatsappMobility}`,
    name: "whatsappMobility",
    id: ids.sheruBap,
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
  getClassNameOfNodeForBorder,
};
