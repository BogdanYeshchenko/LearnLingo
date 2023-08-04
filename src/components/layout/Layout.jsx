import { Outlet } from "react-router-dom";
import ConteinerCenter from "..//conteiner/ConteinerCenter";
import Header from "../header/header";

const Layout = () => {
  return (
    <>
      <ConteinerCenter>
        <Header />
      </ConteinerCenter>

      <main>
        <Outlet />
      </main>
    </>
  );
};
export default Layout;
