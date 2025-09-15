import Footer from "@/shared/footer/Footer";
import Navbar from "@/shared/navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const {pathname} =useLocation()
  const notNavigator = pathname== "/sign-in" || pathname==="/choose-role" || pathname==="/runner-sign-up"
  return (
    <>
      {
        !notNavigator &&(
          <Navbar />
        )
      }
      <Outlet />
    {
        !notNavigator &&(
          <Footer />
        )
      }
    </>
  );
};

export default Layout;
