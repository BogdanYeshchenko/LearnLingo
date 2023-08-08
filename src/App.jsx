import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./components/page/homePage";
import TeachersPage from "./components/page/teachersPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FavoriteTeachersPage from "./components/page/favoriteTeachersPage";
import PablicRoute from "./components/publicRoute/publicRoute";
import PrivateRoute from "./components/privateRoute/privateRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" redire element={<PablicRoute />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/teachers" element={<TeachersPage />} />
          </Route>

          <Route path="" element={<PrivateRoute />}>
            <Route path="/favorites" element={<FavoriteTeachersPage />} />
          </Route>
        </Route>
      </Routes>
      <ToastContainer autoClose={2500} />
    </>
  );
}

export default App;
