import "react-bootstrap/dist/react-bootstrap.min.js";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import WorkScreen from "./screens/WorkScreen";
import EngagementScreen from "./screens/EngagementScreen";
import WeddingScreen from "./screens/WeddingScreen";
import PortraitScreen from "./screens/PortraitScreen";
import MaternityScreen from "./screens/MaternityScreen";
import ContactScreen from "./screens/ContactScreen";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/Victoria_Stewart_Photography/"
          element={<HomeScreen />}
        ></Route>
        <Route
          path="/Victoria_Stewart_Photography/work"
          element={<WorkScreen />}
        ></Route>
        <Route
          path="/Victoria_Stewart_Photography/engagement"
          element={<EngagementScreen />}
        ></Route>
        <Route
          path="/Victoria_Stewart_Photography/wedding"
          element={<WeddingScreen />}
        ></Route>
        <Route
          path="/Victoria_Stewart_Photography/portrait"
          element={<PortraitScreen />}
        ></Route>
        <Route
          path="/Victoria_Stewart_Photography/maternity"
          element={<MaternityScreen />}
        ></Route>
        <Route
          path="/Victoria_Stewart_Photography/about"
          element={<AboutScreen />}
        ></Route>
        <Route
          path="/Victoria_Stewart_Photography/contact"
          element={<ContactScreen />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
