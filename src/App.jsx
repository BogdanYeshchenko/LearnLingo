import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./components/page/homePage";
import Teachers from "./components/teachers/teachers";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/teachers" element={<Teachers />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
