import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import AdminPage from "./pages/AdminPage";
import HomePage from "./pages/HomePage";
import AddEmployee from "./pages/AddEmployee";
import BasketPage from "./pages/BasketPage";
import MainLayout from "./layout/UserLayout/MainLayout";
import UpdatePage from "./pages/UpdatePage";
import DetailPage from "./pages/DetailPage";
import MainProvider from "./context/MainProvider";

function App() {

  return (
    <>
    <MainProvider>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="admin" element={<AdminPage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="add" element={<AddEmployee />} />
          <Route path="basket" element={<BasketPage />} />
          <Route path="edit/:id" element={<UpdatePage />} />
          <Route path="detail/:id" element={<DetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </MainProvider>
    </>
  )
}

export default App
