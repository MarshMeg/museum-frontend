import { Route, Routes, Navigate } from "react-router-dom";
import BasePage from "./pages/BasePage.jsx";
import "./App.css"


export default function App() {
  return (
    <>
      <Routes>
        <Route path={ "/:lang/*" } element={<BasePage />} />
        <Route path={ "*" } element={<Navigate to="/ru/main" replace />} />
      </Routes>
    </>
  )
}