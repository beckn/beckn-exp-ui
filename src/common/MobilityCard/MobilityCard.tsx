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
import { useEffect, useState } from "react";
import axios from "axios";

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
              <div className={`border${ele.id}`}>
                <div className={ele.id} style={{ background: "#ACD1F0" }}>
                  {ele.img ? (
                    <img src={ele.img} alt="" />
                  ) : (
                    <div>{ele.title}</div>
                  )}
                </div>
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
interface Props {
  useInterval: (callback: any, delay: any) => void;
}
const MobilityCard = ({ useInterval }: Props) => {
  const [events, setEvents] = useState([]);
  
  
  

  const experienceId = "exp-123";
  const fetchEvent = async () => {
    const res = await axios.get(
      `https://api.experience.becknprotocol.io/event/${experienceId}`
    );
    setEvents(res.data.events);
  };
  useEffect(() => {
    fetchEvent();
  }, []);
  
  useInterval(() => {
    fetchEvent();
    console.log('first-->', events)
  }, 5000);

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
      {/* <Xwrapper>
        <CardMobility />
        {events.map((ele, ind) => {
          return (
            <div className="Xarrow">
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
            </div>
          );
        })}
      </Xwrapper> */}
      <Xwrapper>
        <CardMobility />
        {events.map(
          (
            ele: {
              event_source_id: any;
              event_destination_id: any;
              event_id: any;
            },
            ind
          ) => {
            return (
              <>
                <Xarrow
                  start={ele?.event_source_id}
                  end={ele?.event_destination_id}
                  lineColor={"#fff"}
                  headColor={"#fff"}
                  path={"straight"}
                  labels={<div className="step">{ele?.event_id}</div>}
                />
              </>
            );
          }
        )}
      </Xwrapper>
    </div>
  );
};

export default MobilityCard;
