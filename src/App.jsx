import { Route, Routes, Navigate } from "react-router-dom";
import BasePage from "./pages/BasePage.jsx";
import "./App.css"


function ReAdmin() {
  console.log(document.URL)
  window.location.url = "https://dimasik911.pythonanywhere.com/admin/"
  return (
    <>
    </>
  )
}


export default function App() {
  return (
    <>
      <Routes>
        <Route index path={ "/:lang/*" } element={<BasePage />} />
        <Route path={ "/admin" } element={<ReAdmin />} />
        <Route path={ "*" } element={<Navigate to="/ru/main" replace />} />
      </Routes>
    </>
  )
}