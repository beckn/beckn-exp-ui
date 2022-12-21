import './titleScreen.css';
import {context} from "../../context/withContext";
import React, { useContext } from "react";
import TitleScreen from './titleScreen';

const TitleScreenContainer = () => {
  const appContext = useContext(context);
  const titleData1= [
    {
       titleText: "welcome to the beckn experience center",
       titleStyle: "mainTitle"
    },
    {
       titleText: "welcome to the beckn experience center",
       titleStyle: "secTitle"
    },
    {
       titleText: "what do you want to do?",
       titleStyle: "secTitle"
    },
    {
      titleText: "how would you like to book your ride?",
      titleStyle: "secTitle"
   },
  ];
  
  return (
    <div>
      <>
        {
            titleData1.map((title,i)=>{
                return (
                    <>
                      {
                        i===0 ?
                        <TitleScreen titleText={titleData1[i].titleText} ClassName={titleData1[i].titleStyle} />
                        : <></>
                      }
                    </>
                )    
            })
        }
      </>
    </div>
  );
};

export default TitleScreenContainer;