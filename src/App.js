import "./App.css";
import "./css/sb-admin-2.css";
import "./css/fontawesome-free/css/all.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Personal from "./Personal";
import Business from "./Business";
import Portal from "./Portal";
import Personal_year from "./Personal_year";
import Add_personal from "./Add_personal";
import Add_business from "./Add_business";
import Business_year from "./Business_year";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portal />}></Route>
        <Route path="/portal" element={<Portal />} >
          <Route path="personal" element={<Personal/>}/>
          <Route path="personal/add" element={<Add_personal/>}/>
          <Route path="yearly" element={<Personal_year/>}/>
          <Route path="business" element={<Business/>}/>
          <Route path="business/add" element={<Add_business/>}/>
          <Route path="year" element={<Business_year/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
