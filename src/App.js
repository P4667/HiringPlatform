// import logo from './logo.svg';
// import './App.css';

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import BusinessRegister from "./pages/business-register/BusinessRegister";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Route,Routes as Switch } from 'react-router-dom';
import SignIn from "./pages/sign-in/SignIn";
import TrainerRegister from "./pages/trainer-register/TrainerRegister";

function App() {
  return (
    <Router>
    <Navbar />
    <Switch>
      <Route exact path="/" element={<Home />} />
      <Route path="/business-register" element={<BusinessRegister />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/trainer-register" element={<TrainerRegister />} />


      {/* <Route path="/trainer-dashboard" element={TrainerDashboard} /> */}
      {/* <Route path="/business-dashboard" element={BusinessDashboard} /> */}
    </Switch>
    <Footer />
  </Router>
  );
}

export default App;
