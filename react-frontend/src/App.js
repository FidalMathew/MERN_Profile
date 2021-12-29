import "./App.css";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route } from "react-router-dom";
import Signup from "./Components/Signup";
import Signin from "./Components/Signin";
import About from "./Components/About";
import Errorpage from "./Components/Errorpage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/about" element={<About />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
      {/* <Home /> */}
      {/* <Contact /> */}
    </div>
  );
}

export default App;
