import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import AnimatedRoutes from "./utility/AnimatedRoutes";

function App() {
  const expId = uuidv4();
  console.log(`expId ${expId} app`);
  return (
    <div className="beckn-app">
      <Router>
        <AnimatedRoutes expId={expId} />
      </Router>
    </div>
  );
}

export default App;
