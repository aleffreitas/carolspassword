import { BrowserRouter, Route, Routes, createBrowserRouter } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Quiz } from "../pages/Quiz";
import { Bonus } from "../pages/Bonus";

export function MyRoutes(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/bonus" element={<Bonus />} />
      </Routes>
    </BrowserRouter>
  );
}