import './titleScreen.css';
import {context} from "../../context/withContext";
import React, { useContext } from "react";

interface titlePropModal{
  titleText:string,
  ClassName?:string
}

const TitleScreen:React.FC<titlePropModal>  = (
  {titleText,ClassName}:titlePropModal
) => {
  // const appContext = useContext(context);
  return (
    <div className="Title">
        <div className={ClassName}>
          {titleText}
        </div>
    </div>
  );
};

export default TitleScreen;