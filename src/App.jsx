import { Route, Routes, useParams, Navigate } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import IndexPage from "./pages/index/IndexPage.jsx";
import ItemsPage from "./pages/items/ItemsPage.jsx";
import "./App.css"


function BasePage() {
  const lang = useParams().lang

  return (
    <>
      <Header language={ lang } />
      <Routes>
        <Route path="main" element={<IndexPage language={ lang } />} />
        <Route path="items" element={<ItemsPage language={ lang } />} />
      </Routes>
      <Footer language={ lang } />
    </>
  )
}


export default function App() {
  return (
    <>
      <Routes>
        <Route path="/:lang/*" element={<BasePage />} />
        <Route path="*" element={<Navigate to="/ru/main" replace />} />
      </Routes>
    </>
  )
}