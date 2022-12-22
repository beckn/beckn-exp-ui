import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomeToExpCenter from "./welcome-page/welcomeToExpCenter";
import VisualizeAction from "./welcome-page/visualizeAction";
import ChoiceToDo from "./welcome-page/choiceToDo"; 
import TravelBuddy from "./rider/travelBuddy";
import DriverATaxi from "./driver/DriverATaxi";
import UseWhatsapp from "./whatsapp/useWhatsapp";
import ScanQrForTravelBuddy from "./rider/scanQrForTravelBuddy";
import MobilityCard from './common/MobilityCard/MobilityCard';
import { useRef, useEffect } from "react";

function App() {
  const useInterval = (callback: any, delay: any) => {
    const savedCallback = useRef() as any;
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        const id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  };
  return (
    <div className="beckn-app">
      <Router>
        <Routes>
          <Route  path="/" element={<WelcomeToExpCenter />}/>
          <Route  path="/VisualizeAction" element={<VisualizeAction />}/>
          <Route  path="/ChoiceToDo" element={<ChoiceToDo />}/>
          <Route  path="/TravelBuddy" element={<TravelBuddy />}/>

          {/* Travel buddy */}
          <Route  path="/scanQrForTravelBuddy" element={<ScanQrForTravelBuddy />}/>
          {/* Drive a Taxi */}
          <Route  path="/DriverATaxi" element={<DriverATaxi />}/>

          {/* WhatsApp */}
          <Route  path="/useWhatsapp" element={<UseWhatsapp />}/>

          {/* Node-communication */}
          <Route  path="/MobilityCard" element={<MobilityCard useInterval={useInterval} />}/>
        </Routes>
      </Router>
      {/* <div className="beckn-app-container"> */}
        {/* <h3>Beckn Experience center</h3> */}
        {/* <Navbar/> */}
        {/* <Layout /> */}
        {/* <WelcomeToExpCenter/> */}
        {/* <VisualizeAction/> */}
        {/* <ChoiceToDo/> */}
        {/* <TravelBuddy/> */}
        {/* <DriverATaxi/> */}
      {/* </div> */}
    </div>
  );
}

export default App;
