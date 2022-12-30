import { Link } from "react-router-dom";

import myMobility from "../../assets/myMobility.svg";
import RHP from "../../assets/RHP.svg";
import whatsappMobility from "../../assets/whatsappMobility.svg";
import MTP from "../../assets/MTP.svg";
import GWP from "../../assets/girlWithPhone.svg";
import MWP from "../../assets/menWithPhone.svg";
import circle from "../../assets/circle.svg";
import { useEffect, useState } from "react";
import axios from "axios";

const NodeComponent = (props: any) => {
  const mobilityCardArr = [
    {
      img: `${myMobility}`,
      name: "mobility",
      id: "2",
    },
    {
      img: `${RHP}`,
      name: "taxi",
      id: "3",
    },

    {
      title: "Gateway",
      name: "gateway",
      id: "1",
    },
    {
      img: `${whatsappMobility}`,
      name: "whatsappMobility",
      id: "4",
    },
    {
      img: `${MTP}`,
      name: "yatri",
      id: "5",
    },
  ];
  const expId = localStorage.getItem("expId");
  const [experienceCenterId, setExperienceCenterId] = useState<any>("");
  const fetchEvent = async () => {
    try {
      const res = await axios.get(
        `https://api.experience.becknprotocol.io/v2/event/${expId}`
      );
      setExperienceCenterId(res.data.experienceSession.experienceCenterId);
    } catch (error) {
      console.log(`error ${error}`);
    }
  };
  console.log(experienceCenterId);

  useEffect(() => {
    fetchEvent();
  }, []);
  return (
    <>
      <div className="mobility-row">
        {mobilityCardArr.map((ele, ind) => {
          return (
            <div id={ele.id} className={`${ele.name}s`} key={ind}>
              <div className={`border${ele.name}`}>
                <div className={ele.name} style={{ background: "#ACD1F0" }}>
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
        </div>
        <div className="MWP">
          <div className="MWP-text">{props.driverText}</div>
          <Link to="/WhatWouldYouDoLikeToNext">
            <img src={MWP} alt="" />
          </Link>
        </div>
        <img
          className={`circle ${
            experienceCenterId === "2"
              ? "circle-driver-active"
              : "circle-driver"
          }`}
          src={circle}
          alt=""
        />
      </div>
    </>
  );
};

export default NodeComponent;
