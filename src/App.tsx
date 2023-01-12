import "./App.css";
import "./CommonCss/Common.css";
import { BrowserRouter as Router } from "react-router-dom";

import AnimatedRoutes from "./utility/AnimatedRoutes";
import { EventApiProvider } from "./context/EventApiContext";

function App() {
  return (
    <EventApiProvider>
      <div className="beckn-app">
        <Router>
          <AnimatedRoutes />
        </Router>
      </div>
    </EventApiProvider>
  );
}

export default App;
