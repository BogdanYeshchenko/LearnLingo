import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./components/page/homePage";
import TeachersPage from "./components/page/teachersPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FavoriteTeachersPage from "./components/page/favoriteTeachersPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/teachers" element={<TeachersPage />} />
          <Route path="/favorites" element={<FavoriteTeachersPage />} />
        </Route>
      </Routes>
      <ToastContainer autoClose={2500} />
    </>
  );
}

export default App;
