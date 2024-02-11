import { Routes, Route } from "react-router-dom";
import Login from "../../components/main/account/login/Login.jsx";
import "./account_page.css"

export default function AccountPage({ language }) {
  return (
    <main>
      <Routes>
        <Route path={ "login" } element={<Login lang={ language } />} />
      </Routes>
    </main>
  )
}