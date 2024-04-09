import { Outlet } from "react-router-dom";
import Nav from "../Header_footer/Nav";
import Footer from "../Header_footer/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col">
      <div>
        <Nav />
      </div>
      <div className="flex-grow my-4">
        <Outlet />
      </div>
      <div className=" justify-end">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
