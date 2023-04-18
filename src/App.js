import logo from "./logo.svg";
import "react-bootstrap/dist/react-bootstrap.min.js";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header'
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import BookingScreen from "./screens/BookingScreen";
import WorkScreen from "./screens/WorkScreen";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/Victoria_Stewart_Photography/" element={<HomeScreen />}></Route>
        <Route path="/Victoria_Stewart_Photography/work" element={<WorkScreen />}></Route>
        <Route path="/Victoria_Stewart_Photography/about" element={<AboutScreen />}></Route>
        <Route path="/Victoria_Stewart_Photography/contact" element={<BookingScreen />}></Route>
      </Routes>
    </Router>
  );
}

export default App;