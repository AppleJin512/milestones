import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Shop from "../pages/shop"
import AboutUs from "../components/aboutUs";
import Policy from "../components/policy";
import TeamAndConditions from "../components/teamsAndConditions";
import { PAGES } from "./auth_url";

export default function RouteContainer() {
  return (
    <Routes>
      <Route path={PAGES.HOME} element={<Home />}></Route>
      <Route path="/shop/*" element={<Shop />}/>
      <Route path={PAGES.ABOUT} element={<AboutUs />}></Route>
      <Route path={PAGES.POLICY} element={<Policy />}></Route>
      <Route path={PAGES.TEAMS} element={<TeamAndConditions />}></Route>
    </Routes>
  );
}
