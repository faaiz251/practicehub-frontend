import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/landing/Home/Home";
import { Signup } from "./components/landing/Signup/Signup";
import { Signin } from "./components/landing/Signin/Signin";
import { Content } from "./components/landing/Contents/Content";
import { Content1 } from "./components/landing/Content1/Content1";
import { Content2 } from "./components/landing/Content2/Content2";
import { Content3 } from "./components/landing/Content3/Content3";
import { PrivateRoute } from "./components/landing/PrivateRoute/PrivateRoute";

export function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        fontFamily: "cursive",
        margin: 0,
        padding: 0,
        background: "linear-gradient(135deg, #2d2d2d, #1a1a1a)",
        overflowX: "hidden",
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/content" element={<PrivateRoute><Content /></PrivateRoute>} />
          <Route path="/content1" element={<PrivateRoute><Content1 /></PrivateRoute>} />
          <Route path="/content2" element={<PrivateRoute><Content2 /></PrivateRoute>} />
          <Route path="/content3" element={<PrivateRoute><Content3 /></PrivateRoute>} />
        </Routes>
      </Router>
    </div>
  );
}
