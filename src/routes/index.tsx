import { BrowserRouter, Route, Routes, createBrowserRouter } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Quiz } from "../pages/Quiz";

export function MyRoutes(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  );
}