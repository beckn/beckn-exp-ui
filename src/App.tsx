import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomeToExpCenter from "./welcome-page/welcomeToExpCenter";
import VisualizeAction from "./welcome-page/visualizeAction";
import ChoiceToDo from "./welcome-page/choiceToDo";
import TravelBuddy from "./rider/travelBuddy";
import DriverATaxi from "./driver/DriverATaxi";
import UseWhatsapp from "./whatsapp/useWhatsapp";
import ScanQrForTravelBuddy from "./rider/scanQrForTravelBuddy";
import MobilityCard from "./common/MobilityCard/MobilityCard";
import { v4 as uuidv4 } from "uuid";
import AcceptRideForTaxiHub from "./driver/AcceptRideforTaxiHub";
import WhatWouldYouDoLikeToNext from "./Feedback/whatWouldYouDoLikeToNext";
import ThankYouForVisitBecknExpCenter from "./Feedback/ThankYouForVisitBecknExpCenter";
import YourFeedbackIsValubleForUs from "./Feedback/YourFeedbackIsValubleForUs";
import DidYouLikeBecknExp from "./Feedback/DidYouLikeBecknExp";
import ImproveTheExp from "./Feedback/ImproveTheExp";

function App() {
  const expId = uuidv4();
  console.log(`expId ${expId} app`);
  return (
    <div className="beckn-app">
      <Router>
        <Routes>
          <Route path="/" element={<WelcomeToExpCenter />} />
          <Route path="/VisualizeAction" element={<VisualizeAction />} />
          <Route path="/ChoiceToDo" element={<ChoiceToDo />} />
          <Route path="/TravelBuddy" element={<TravelBuddy />} />

          {/* Travel buddy */}
          <Route
            path="/scanQrForTravelBuddy"
            element={<ScanQrForTravelBuddy expId={expId} />}
          />
          {/* Drive a Taxi */}
          <Route path="/DriverATaxi" element={<DriverATaxi expId={expId} />} />

          {/* WhatsApp */}
          <Route path="/useWhatsapp" element={<UseWhatsapp expId={expId} />} />

          {/* Node-communication */}
          <Route path="/MobilityCard" element={<MobilityCard />} />
          <Route
            path="/acceptRideForTaxiHub"
            element={<AcceptRideForTaxiHub />}
          />
          <Route
            path="/WhatWouldYouDoLikeToNext"
            element={<WhatWouldYouDoLikeToNext />}
          />
          <Route
            path="/thankYouForVisitBecknExpCenter"
            element={<ThankYouForVisitBecknExpCenter />}
          />
          <Route
            path="/yourFeedbackIsValubleForUs"
            element={<YourFeedbackIsValubleForUs />}
          />
          <Route path="/didYouLikeBecknExp" element={<DidYouLikeBecknExp />} />
          <Route path="/improveTheExp" element={<ImproveTheExp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
