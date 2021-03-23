import "./App.css";
import Navzilla from "./components/Navzilla";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navzilla />
      </Router>
    </div>
  );
}

export default App;
