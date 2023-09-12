import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Homepage } from "./pages/Homepage";
import { Signin } from "./pages/SignIn";
import { User } from "./pages/User";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sign_in" element={<Signin />} />
        <Route path=":user" element={<User />} />
      </Routes>
      <Footer />
    </Router>
  );
};
