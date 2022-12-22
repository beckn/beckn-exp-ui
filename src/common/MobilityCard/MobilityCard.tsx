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
            <div className={`border${ele.id}`} id={ele.id}>
              <div className={ele.id} style={{ background: "#ACD1F0" }}>
                {ele.img ? (
                  <img src={ele.img} alt="" />
                ) : (
                  <div>{ele.title}</div>
                )}
              </div>
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
      step: 9,
      eventMessage: "Searching",
    },
    {
      sourceId: "gateway",
      targetId: "RHP",
      step: 2,
    },
    {
      sourceId: "gateway",
      targetId: "MTP",
      step: 2,
    },
    // {
    //   sourceId: "RHP",
    //   targetId: "gateway",
    //   step: 3,
    // eventMessage: "receiving catalogues",
    // },
    // {
    //   sourceId: "MTP",
    //   targetId: "gateway",
    //   step: 3,
    // eventMessage: "receiving catalogues",
    // },
    // {
    //   sourceId: "gateway",
    //   targetId: "mobility",
    //   step: 4,
    // eventMessage: "forwarding catalogues",
    // },
    // {
    //   sourceId: "mobility",
    //   targetId: "RHP",
    //   step: 5,
    // },
    // {
    //   sourceId: "mobility",
    //   targetId: "RHP",
    //   step: 6,
    //   eventMessage: "product selected",
    // },
    // {
    //   sourceId: "RHP",
    //   targetId: "mobility",
    //   step: 7,
    //   eventMessage: "receiving quote",
    // },
    // {
    //   sourceId: "mobility",
    //   targetId: "RHP",
    //   step: 8,
    //   eventMessage: "initiating ride",
    // },
    // {
    //   sourceId: "mobility",
    //   targetId: "RHP",
    //   step: 7,
    //   eventMessage: "confirming ride",
    // },
  ];

  const setStepColor = (step: number) => {
    if (step === 1 || step === 2) {
      return " #23DFDF";
    } else if (step === 3) {
      return "#FB1E1E";
    } else {
      return "#fff";
    }
  };

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
                lineColor={setStepColor(ele.step)}
                headColor={setStepColor(ele.step)}
                path={"straight"}
                labels={{
                  start: (
                    <h3 className={`eventMessage event_${ele.step}`}>
                      Searching
                    </h3>
                  ),
                  middle: <div className="step">{ele.step}</div>,
                }}
              />
              {/* {ele.eventMessage && (
                <h3 className="eventMessage">{ele.eventMessage}</h3>
              )} */}
            </>
          );
        })}
      </Xwrapper>
    </div>
  );
};

export default MobilityCard;
