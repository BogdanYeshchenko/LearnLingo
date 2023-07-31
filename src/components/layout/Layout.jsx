import ConteinerCenter from "..//conteiner/ConteinerCenter";
import { Outlet } from "react-router-dom";
import Header from "../header/header";

const Layout = () => {
  return (
    <>
      <ConteinerCenter flexDirection="row">
        <Header />
      </ConteinerCenter>

      <main>
        <Outlet />
      </main>
    </>
  );
};
export default Layout;
