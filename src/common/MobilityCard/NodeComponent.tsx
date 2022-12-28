import { Link } from "react-router-dom";

import myMobility from "../../assets/myMobility.svg";
import RHP from "../../assets/RHP.svg";
import whatsappMobility from "../../assets/whatsappMobility.svg";
import MTP from "../../assets/MTP.svg";
import GWP from "../../assets/girlWithPhone.svg";
import MWP from "../../assets/menWithPhone.svg";
import circle from "../../assets/circle.svg";

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

export default NodeComponent;
