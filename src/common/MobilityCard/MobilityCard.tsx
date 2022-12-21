import { ArcherContainer, ArcherElement } from "react-archer";
import myMobility from "../../assets/myMobility.svg";
import RHP from "../../assets/RHP.svg";
import whatsappMobility from "../../assets/whatsappMobility.svg";
import whatsapp from "../../assets/whatsapp.svg";
import MTP from "../../assets/MTP.svg";
import GWP from "../../assets/girlWithPhone.svg";
import MWP from "../../assets/menWithPhone.svg";
import circle from "../../assets/circle.svg";
import "./MobilityCard.css";
import Xarrow, { Xwrapper } from "react-xarrows";

const CardMobility = (props: any) => {
  const mobilityCardArr = [
    {
      img: `${myMobility}`,
      id: "mobility",
    },
    {
      img: `${RHP}`,
      id: "RHP",
    },

    {
      title: "Getway",
      id: "gateway",
    },
    {
      img: `${whatsappMobility}`,
      id: "whatsappMobility",
    },
    {
      img: `${MTP}`,
      id: "MTP",
    },
  ];
  return (
    <>
      <div className="mobility-row">
        {mobilityCardArr.map((ele, ind) => {
          return (
            <div id={ele.id}>
              {ele.img ? <img src={ele.img} alt="" /> : <div>{ele.title}</div>}
              {ele.img === `${whatsappMobility}` ? (
                <img className="whatsapp-img " src={whatsapp} alt="" />
              ) : null}
            </div>
          );
        })}
      </div>
      <div className="mobilityFooter">
        <div className="GWP">
          <div className="GWP-text">Hello word</div>
          <img src={GWP} alt="" />
          <img className="circle" src={circle} alt="" />
        </div>
        <div className="MWP">
          <div className="MWP-text">Hello word</div>
          <img src={MWP} alt="" />
        </div>
      </div>
    </>
  );
};

const MobilityCard = () => {
  const events = [
    {
      sourceId: "mobility",
      targetId: "gateway",
      step: 1,
    },
    {
      sourceId: "gateway",
      targetId: "MTP",
      step: 2,
    },
    {
      sourceId: "mobility",
      targetId: "RHP",
      step: 3,
    },
  ];

  return (
    <div>
      <Xwrapper>
        <CardMobility />
        {events.map((ele, ind) => {
          return (
            <>
              <Xarrow
                start={ele.sourceId}
                end={ele.targetId}
                lineColor={"#fff"}
                headColor={"#fff"}
                path={"straight"}
                labels={<div className="step">{ele.step}</div>}
              />
            </>
          );
        })}
      </Xwrapper>
    </div>
  );
};

export default MobilityCard;
