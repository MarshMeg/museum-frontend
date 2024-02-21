import { Route, Routes, Navigate } from "react-router-dom";
import BasePage from "./pages/BasePage.jsx";
import "./App.css"


export default function App() {
  console.log(import.meta.env)
  return (
    <>
      <Routes>
        <Route index path={ "/:lang/*" } element={<BasePage />} />
        <Route path={ "*" } element={<Navigate to="/ru/main" replace />} />
      </Routes>
    </>
  )
}