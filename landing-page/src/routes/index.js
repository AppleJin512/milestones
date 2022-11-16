import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/imageBar";
import AboutUs from "../components/aboutUs";
import Policy from "../components/policy";

export default function RouteContainer() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/privacy-policy" element={<Policy />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
