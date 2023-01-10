import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AcceptRideForTaxiHub from "../driver/AcceptRideforTaxiHub";
import WhatWouldYouDoLikeToNext from "../Feedback/whatWouldYouDoLikeToNext";
import ThankYouForVisitBecknExpCenter from "../Feedback/ThankYouForVisitBecknExpCenter";
import YourFeedbackIsValubleForUs from "../Feedback/YourFeedbackIsValubleForUs";
import DidYouLikeBecknExp from "../Feedback/DidYouLikeBecknExp";
import ImproveTheExp from "../Feedback/ImproveTheExp";
import WelcomeToExpCenter from "../welcome-page/welcomeToExpCenter";
import VisualizeAction from "../welcome-page/visualizeAction";
import ChoiceToDo from "../welcome-page/choiceToDo";
import TravelBuddy from "../rider/travelBuddy";
import DriverATaxi from "../driver/DriverATaxi";
import UseWhatsapp from "../whatsapp/useWhatsapp";
import ScanQrForTravelBuddy from "../rider/scanQrForTravelBuddy";
import MobilityCard from "../common/MobilityCard/MobilityCard";
import ViewMyJourney from "../Feedback/ViewMyJourney";
import IframeVideo from "../common/IframeVideo";
import { AnimatePresence } from "framer-motion";
import Luxecabe from "../driver/Luxecabe";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<WelcomeToExpCenter />} />
        <Route path="/VisualizeAction" element={<VisualizeAction />} />
        <Route path="/ChoiceToDo" element={<ChoiceToDo />} />
        <Route path="/TravelBuddy" element={<TravelBuddy />} />
        <Route path="/IframeVideo" element={<IframeVideo />} />

        {/* Travel buddy */}
        <Route
          path="/scanQrForTravelBuddy"
          element={<ScanQrForTravelBuddy />}
        />
        {/* Drive a Taxi */}
        <Route path="/DriverATaxi" element={<DriverATaxi />} />

        {/* WhatsApp */}
        <Route path="/useWhatsapp" element={<UseWhatsapp />} />

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
        <Route
          path="*"
          element={
            <h1
              style={{
                color: "#fff",
              }}
              className="main-container"
            >
              Error 404 : Page Not Found
            </h1>
          }
        />
        <Route path="/viewMyJourney" element={<ViewMyJourney />} />
        <Route path="/luxecabe" element={<Luxecabe />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
