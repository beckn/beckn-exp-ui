import React, { useEffect, useState } from "react";
import QRcode from "react-qr-code";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const GenQRCode: React.FC = () => {
  const expId = uuidv4();
  const [data, setData] = useState(
    `https://taxibap-staging.becknprotocol.io/?experience_id:${expId}`
  );

  // console.log(expId);
  // useEffect(()=>{
  //   axios.get('https://api.experience.becknprotocol.io/event/xp121').then(key=>{
  //     console.log('first', key)
  //   }).catch(err=>{
  //     console.log('err', err)
  //   })
  // }, [])
  return (
    <div>
      <QRcode style={{width:"180px", opacity:"0.5"}} value={data} 
      
      />
    </div>
  );
};

export default GenQRCode;
