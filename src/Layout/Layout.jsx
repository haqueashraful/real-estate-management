import { Outlet } from "react-router-dom";
import Nav from "../Header_footer/Nav";
import Footer from "../Header_footer/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col container mx-auto w-full px-1 md:px-16">
      <div>
        <Nav />
      </div>
      <div className="flex-grow">
        <Outlet />
      </div>
      <div className=" justify-end">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
