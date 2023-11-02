import { Routes, Route } from "react-router-dom";
import { Home, Services, Gallery, Contact } from "./Paths";

export default function Router() {
  return (<Routes>
    <Route path={"/"} element={<Home />} />
    <Route path={"/services"} element={<Services />} />
    <Route path={"/gallery"} element={<Gallery />} />
    <Route path={"/contact"} element={<Contact />} />
  </Routes>)
}
