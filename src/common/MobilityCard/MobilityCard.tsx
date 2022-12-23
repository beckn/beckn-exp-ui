import myMobility from "../../assets/myMobility.svg";
import RHP from "../../assets/RHP.svg";
import whatsappMobility from "../../assets/whatsappMobility.svg";
import MTP from "../../assets/MTP.svg";
import GWP from "../../assets/girlWithPhone.svg";
import MWP from "../../assets/menWithPhone.svg";
import circle from "../../assets/circle.svg";
import "./MobilityCard.css";
import Xarrow, { Xwrapper } from "react-xarrows";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
      title: "Gateway",
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
          <div className="GWP-text">{props.riderText}</div>

          <img src={GWP} alt="" />

          <img className="circle" src={circle} alt="" />
        </div>
        <div className="MWP">
          <div className="MWP-text">{props.driverText}</div>
          <Link to="/WhatWouldYouDoLikeToNext">
            <img src={MWP} alt="" />
          </Link>
        </div>
      </div>
    </>
  );
};
interface Props {
  useInterval: (callback: any, delay: any) => void;
  expId: string;
}
const MobilityCard = ({ useInterval, expId }: Props) => {
  const [events, setEvents] = useState<any>([]);

  const fetchEvent = async () => {
    try {
      const res = await axios.get(
        `https://api.experience.becknprotocol.io/event/${expId}`
      );

      setEvents(res.data.events);
    } catch (err) {
      console.log(`err ${err}`);
    }
  };
  useEffect(() => {
    // fetchEvent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useInterval(() => {
    fetchEvent();
  }, 2000);

  if (events.length === 0) {
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
          {/* {events.map(
        (
          ele: {
            event_source_id: any;
            event_destination_id: any;
            event_id: any;
            event_code: any;
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
                labels={<div className="step">{ele?.event_code}</div>}
                animateDrawing={true}
              />
            </>
          );
        }
      )} */}
          <CardMobility driverText={"driver"} riderText={"rider"} />
          <Xarrow
            start={null as any}
            end={null as any}
            lineColor={"#fff"}
            headColor={"#fff"}
            path={"straight"}
            animateDrawing={true}
          />
        </Xwrapper>
      </div>
    );
  }
  // if (
  //   events.length > 0 &&
  //   events[0].event_code === "recieved_payconfirmation"
  // ) {
  //   window.location.href = "/";
  // }
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
        <CardMobility
          driverText={"driver"}
          riderText={events[0].event_message}
        />
        {/* {events.map(
          (
            ele: {
              event_source_id: any;
              event_destination_id: any;
              event_id: any;
              event_code: any;
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
                  labels={<div className="step">{ele?.event_code}</div>}
                  animateDrawing={true}
                />
              </>
            );
          }
        )} */}
        <Xarrow
          start={events[0].event_source_id}
          end={events[0].event_destination_id}
          lineColor={"#fff"}
          headColor={"#fff"}
          path={"straight"}
          labels={<div className="step">{events[0].event_title}</div>}
          animateDrawing={true}
        />
      </Xwrapper>
    </div>
  );
};

export default MobilityCard;
