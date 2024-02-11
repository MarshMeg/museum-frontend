import { Route, Routes, Navigate } from "react-router-dom";
import BasePage from "./pages/BasePage.jsx";
import "./App.css"


function Redirect({ url }) {
  window.location.host = url
}


export default function App() {
  return (
    <>
      <Routes>
        <Route path={ "/:lang/*" } element={<BasePage />} />
        <Route path={ "/admin/*" } element={<Redirect url={ "localhost:8000/admin/" }/>} />
        <Route path={ "*" } element={<Navigate to="/ru/main" replace />} />
      </Routes>
    </>
  )
}